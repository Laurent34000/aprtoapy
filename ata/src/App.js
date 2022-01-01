import "./App.css";
import AprToApy from "./hookscomponents/AprToApy";
import ApyToApr from "./hookscomponents/ApyToApr";

function App() {
  return (
    <div className="App">
      <header></header>

      <main className="App-main">
        <AprToApy />
        <ApyToApr />
      </main>
    </div>
  );
}

export default App;
