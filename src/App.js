import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
      <ItemListContainer>
          
      </ItemListContainer>
      <ItemContainer></ItemContainer>
      
    </div>
  );
}

export default App;
