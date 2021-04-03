import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import NavBar from './components/NavBar';
import ExerciseGuide from './pages/ExerciseGuide';
import Instructions from './pages/Instructions';

function App() {
  return (
    <div>
      <NavBar/>
    <Switch>
      
      <Route exact path="/">
    <Home/>
      </Route>

      <Route exact path="/exercise">
    <ExerciseGuide/>
      </Route>

      <Route exact path="/starred">
    <Starred/>
      </Route>

      <Route exact path="/show/:id">
    <Instructions/>
      </Route>

    </Switch>
    </div>
    
  );
}

export default App;
