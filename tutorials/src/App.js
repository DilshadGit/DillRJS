import logo from './logo.svg';
import './App.css';

import DivComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/*<DivComponent />*/}
      {/*  <Welcome />*/}
            <Hello />
    </div>
  );
}

export default App;
