import * as d3 from "d3";
import ColorScale from "./components/ColorScale";
import "./App.css";

function App() {
  const interpolateWithSteps = (numberOfSteps: number) =>
    new Array(numberOfSteps).fill(null).map((_d, i) => i / (numberOfSteps - 1));
  const customScale = d3.interpolateHcl("cyan", "tomato");
  const stepScale = interpolateWithSteps(10).map(
    d3.interpolateHcl("cyan", "tomato")
  );
  return (
    <div className="App">
      <h1>Color Scale Generator</h1>
      <div className="App__generator">
        <ColorScale
          scaleName="interpolateInferno"
          colorScale={d3.interpolateInferno}
        />
        <ColorScale scaleName="customScale" colorScale={customScale} />
        <ColorScale
          scaleName="custom-step-scale"
          colorScale={stepScale}
          height={100}
        />
      </div>
    </div>
  );
}

export default App;
