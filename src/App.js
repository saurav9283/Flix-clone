import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"
import Home from './mainComponent/Home'
import Login from './mainComponent/login/Login'
import Register from './mainComponent/register/Register'
import Watch from './mainComponent/watch/Watch'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/watch' element={<Watch/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
