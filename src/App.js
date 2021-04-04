import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ExerciseGuide from './pages/ExerciseGuide';


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

    </Switch>
    </div>
    
  );
}

export default App;
