import  reactCoreConcepts  from "./assets/react-core-concepts.png";
import componentsImg  from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptions = reactDescriptions[getRandomInt(2)]

  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!s
      </p>
    </header>
  );
}

function CoreConcepts({image, title, description}) {
  return (
  <li>
    <img src={image} alt={title} /> 
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
