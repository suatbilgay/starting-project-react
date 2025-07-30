import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx"; 
import Example from "./components/Example.jsx"

function App() {
  return (
    <div>
      <Header />
      <main>
          <CoreConcept />
          <Example />
      </main>
    </div>
  );
}

export default App;
