
import './App.css';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {useState} from "react";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations";
import {GameOver} from "./components/GameOver";

const PLAYERS = {
    X : 'Player 1',
    O : 'Player 2'

};


const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if( gameTurns.length > 0 && gameTurns[0].player === 'X')
        currentPlayer = 'O';
    return currentPlayer ;

}

function deriveWinner(gameBoard, players){
    let winner;

    for (const combination of WINNING_COMBINATIONS){
        let firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
        let secondSquareSymbol  = gameBoard[combination[1].row][combination[1].column];
        let thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if(firstSquareSymbol  && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol){
            winner = players[firstSquareSymbol];
        }
    }

    return winner;

}



function deriveGameBoard(gameTurns){
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])] ;

    for(const turn of gameTurns) {
        const {square, player } = turn ;
        const {row, col} = square;
        gameBoard[row][col] = player;

    }
    return gameBoard;
}
function App() {

  let [players, setPlayers] = useState(PLAYERS);
  let [gameTurns, setGameTurns] = useState([]) ;

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard,players);

  const hasDraw = gameTurns.length === 9 && !winner;


  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex){

      setGameTurns(prevTurns => {
          const currentPlayer= deriveActivePlayer(prevTurns) ;
          const updatedTurns =[
              {square: {row : rowIndex ,col : colIndex} , player : currentPlayer}, ...prevTurns] ;
          return updatedTurns;
      });
  }

  function handleRestart(){
      setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
      setPlayers(prevPlayers =>{
          return {
              ...prevPlayers,
              [symbol] : newName // it changes the name for the symbol
          };
      });
  }
  return (
     <main>
       <div id="game-container" >
         <ol id="players" className="highlight-player">
             <Player initialName={PLAYERS.X} symbol="X" isActive ={activePlayer === 'X'} onChangeName={handlePlayerNameChange} ></Player>
             <Player initialName={PLAYERS.O} symbol="O" isActive ={activePlayer === 'O'} onChangeName={handlePlayerNameChange} ></Player>

         </ol>
           {(winner || hasDraw ) && <GameOver winner={winner}  onRestart={handleRestart}/> }
           <GameBoard
               onSelectSquare={handleSelectSquare}
               gameBoard={gameBoard}
           />
       </div>
         <Log turns={gameTurns}/>
     </main>
  );
}

export default App;
