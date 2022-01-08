import "./App.css";
import AprToApy from "./hookscomponents/AprToApy";
import ApyToApr from "./hookscomponents/ApyToApr";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="App-main text-center">
        <AprToApy />
        <ApyToApr />
      </main>
    </div>
  );
}

export default App;
