import './App.css';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={WelcomePage}/> 
        {/* Routed the welcome page to / path */}
        <Route path='/home' Component={HomePage}/>
      </Routes>
    </Router>
  );
}

export default App;
