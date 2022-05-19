
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/Login' ;
import Posts from './components/Posts';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Editprofile from './components/Editprofile';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
       <Route path="/editprofile" element={<Editprofile/>}></Route>
       <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
