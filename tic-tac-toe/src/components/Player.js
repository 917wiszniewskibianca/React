import {useState} from "react";


export default function Player(props){
    let [playerName, setPlayerName] = useState(props.initialName);

    let [isEditing, setIsEditing] = useState(false);
    let editablePlayerName= <span className="player-name">{playerName}</span>
    let btnCaption = "Edit";
    function handleEdit(){
           setIsEditing((editing) => !editing);
           if(isEditing) {
               props.onChangeName(props.symbol, playerName);
           }
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    if( isEditing){
        editablePlayerName= <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption ="Save";
    }
    return (
        <li className={props.isActive ? 'active' : undefined}>
               <span className= "player">
                {editablePlayerName}
                 <span className="player-symbol">{props.symbol}</span>
               </span>
            <button onClick={handleEdit}> {btnCaption} </button>

        </li>

    );
}