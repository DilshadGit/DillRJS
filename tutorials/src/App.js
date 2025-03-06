import logo from './logo.svg';
import './App.css';

import DivComponent from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <DivComponent />
        <Welcome />
    </div>
  );
}

export default App;
