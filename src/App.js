import logo from './logo.svg';
import './App.css';
import DisplayComponent from "./Components/DisplayComponent";


function App() {
  return (
    <div className="App">
      <h1>app.js</h1>
      <DisplayComponent firstName = "John" lastName = "Smith" age = {33} />
      <DisplayComponent firstName = "Mary" lastName = "Williams" age = {44} />
    </div>
  );
}

export default App;
