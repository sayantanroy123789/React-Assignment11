import logo from "./logo.svg";
import "./App.css";
import Showprofile from "./Components/Showprofile";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black", height: "100vh" }}>
      <h1>Search github profile</h1>
      <Showprofile />
    </div>
  );
}

export default App;
