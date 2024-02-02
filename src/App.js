import logo from "./logo.svg";
import "./App.css";
import Health from "./components/Health";

//main page
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* component */}
        <Health />
      </header>
    </div>
  );
}

export default App;