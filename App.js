import logo from './logo.svg';
import './App.css';


const name = "Brad";
const x = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <h2>Hello H2</h2>
        <h1>{2+6}</h1>
        <h1>2+6</h1>
        <h1>Hello {name}</h1>
        <h2>{x?"Yes":"No"}</h2>
      </header>
    </div>
  );
}

export default App;
