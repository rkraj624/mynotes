import './App.css';
import {  Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState'
import Home from "./Components/Home";
import Profile from './Components/Profile';
import LoginPage from './Components/LoginPage';
import Signup from './Components/Signup';
import UpdatePassword from './Components/UpdatePassword';
import Addnote from './Components/Addnote';


function App() {
  return (
  <>
  <NoteState>

  <Routes>
    <Route exact path="/" element={ <Home />}/>
    <Route exact path="/home" element={ <Home />}/>
    <Route exact path="/profile" element={ <Profile />}/>
    <Route exact path="/addnotes" element={ <Addnote />}/>
    <Route exact path="/updatepassword" element={ <UpdatePassword />}/>
    <Route exact path="/login" element={ <LoginPage />}/>
    <Route exact path="/signup" element={ <Signup />}/>
  </Routes>
  </NoteState>
 
  </>
  );
}

export default App;
