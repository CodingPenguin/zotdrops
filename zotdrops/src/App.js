import './App.css';
import HomePage from './HomePage';
import SignIn from './SignIn';
import NavBar from './NavBar';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/signin" element = {<SignIn />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
