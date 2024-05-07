import ColorScale from "./components/ColorScale";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Color Scale Generator</h1>
      <div className="App__generator">
        <ColorScale scaleName="interpolateInferno" />
      </div>
    </div>
  );
}

export default App;
