import Home from "./components/Home";
import { useState } from "react";
import { Link, Routes ,Route} from "react-router-dom";
import User from "./components/User";
import UserDetails from "./components/UserDetails.jsx";
import About from "./components/About";

export default function App() {
 
  return (
   <div className="p-1  w-5/6  m-auto  ">
    
     <nav className=" my-10 flex justify-center  gap-10">
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/user" >User</Link>
    </nav> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}>
      <Route path='/user/:id' element={<UserDetails/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
    </Routes> 
   
   </div>
  )
}