import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem =><CoreConcepts key = {conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

           {/* {!selectedTopic && <p>Please select a topic.</p>} */
           /* {selectedTopic && <Examples {...EXAMPLES[selectedTopic]} /> */}

          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (   
            <Examples {...EXAMPLES[selectedTopic]} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
