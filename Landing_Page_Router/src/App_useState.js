import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Items from './Pages/Items';



function App() {

  const [page,setPage]= useState("home")




  return (
    <>
   <Navbar setPage={setPage} />
   {page === "home" && <Home/>}
   {page === "about" && <About/>}
   {page === "items" && <Items/>}


    </>
  )
}

export default App;
