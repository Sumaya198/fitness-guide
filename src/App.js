import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import ExerciseGuide from './pages/ExerciseGuide';

import { ThemeProvider } from 'styled-components';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
    <Switch>
      
      <Route exact path="/">
    <Home/>
      </Route>

      <Route exact path="/exercise">
    <ExerciseGuide/>
      </Route>    

    </Switch>
    </ThemeProvider>
    
  );
}

export default App;
