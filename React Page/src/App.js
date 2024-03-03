import {CORE_CONCEPTS} from "./data"
import {useState} from 'react' ;
import componentsImg from './assets/components.png';
import {Header} from "./components/Header/Header";
import {CoreConcept} from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {EXAMPLES} from'./data.js'
function App() {
   const [selectedTopic, setSelectedTopic]=  useState();

    function handleSelect(selectedButton){
        //selectedButton => 'components' , 'jsx' , 'props'
        setSelectedTopic(selectedButton);
    }
  return (
      <div>
        <Header></Header>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                <ul>
                {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title}{...conceptItem } />)}
                </ul>
              <CoreConcept
                  title="Components"
                  description="The core UI building block"
                  img={componentsImg}
              />
              <CoreConcept {...CORE_CONCEPTS[1] } />
              <CoreConcept
                  title={ CORE_CONCEPTS[2].title}
                  description= {CORE_CONCEPTS[2].description}
                  img={CORE_CONCEPTS[2].img}/>
              <CoreConcept
                  title={ CORE_CONCEPTS[3].title}
                  description= {CORE_CONCEPTS[3].description}
                  img={CORE_CONCEPTS[3].img}/>
            </ul>
          </section>
          <section id="examples" >
              <h2>Examples</h2>
              <menu>
                  <TabButton isSelected={selectedTopic === "components"} onSelect = {() => handleSelect("components")}>Components</TabButton>
                  <TabButton isSelected={selectedTopic === "jsx"} onSelect = {() => handleSelect("jsx")}>JSX</TabButton>
                  <TabButton isSelected={selectedTopic === "props" } onSelect = {() => handleSelect("props")}>Props</TabButton>
                  <TabButton isSelected={ selectedTopic === "state"} onSelect = {() => handleSelect("state")}>State</TabButton>
              </menu>
              {!selectedTopic && <p>Please select a topic</p>}
              {selectedTopic ? (
                  <div id="tab-content" >
                      <h3>{EXAMPLES[selectedTopic].title}</h3>
                      <p>{EXAMPLES[selectedTopic].description}</p>
                      <pre>
                          <code>
                              {EXAMPLES[selectedTopic].code}
                          </code>
                      </pre>
                  </div>) : null }
          </section>


        </main>
      </div>
  );
}

export default App;
