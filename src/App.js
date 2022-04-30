import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
      <ItemListContainer/>
    </div>
  );
}

export default App;
