import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Examples from "./Examples.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <Section title ="Examples" id="examples">
      <Tabs buttons={
      <>
      <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </>
    }>
        {!selectedTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <Examples {...EXAMPLES[selectedTopic]} />
      )}
      </Tabs>
    </Section>
  );
}
