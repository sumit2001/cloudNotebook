import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Alert from "./components/Alert"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NoteState from "./context/notes/NoteState"
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  // let navigate = useNavigate();
  // navigate("/cloudNotebook");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/cloudNotebook" element={<Home showAlert={showAlert} />}></Route>
              <Route exact path="/cloudNotebook/about" element={<About />} />
              <Route exact path="/cloudNotebook/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/cloudNotebook/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
