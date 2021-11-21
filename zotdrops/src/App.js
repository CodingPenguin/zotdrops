import './App.css';
import HomePage from './HomePage';
import About from './About';
import NavBar from './NavBar';
import SignIn from './SignIn';
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
            <Route class= "zotdrop-style" path="/" element = {<HomePage />} />
            <Route class = "about-style" path="/about" element = {<About />} />
            <Route path="/signin" element = {<SignIn />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
