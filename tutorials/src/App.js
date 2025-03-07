import logo from './logo.svg';
import './App.css';

import DivComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/*<DivComponent />*/}

        <Hello />
        <Greet name="Team" heroName="Team">
            <p>Welcome to this chapter</p>
        </Greet>
            <Greet name="Contact" heroName="Contact">
                <a href="">Contact</a>
            </Greet>
            <Greet name="Profile" heroName="About">
                <li>Profile</li>
            </Greet>
            <Greet name="Articles" heroName="Articles">
                <button>Article</button>
            </Greet>
            <Welcome name="Project" heroName="project"></Welcome>
            <Welcome name="Design" heroName="Design"></Welcome>
            <Welcome name="Database" heroName="Database"></Welcome>
            <Message />
            <br/>
            <Counter />
    </div>
  );
}

export default App;
