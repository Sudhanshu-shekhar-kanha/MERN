
import './App.css';
import Navbar from './Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import ItemDetails from './Pages/ItemDetails';
import Items from './Pages/Items';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';

function App() {

  // const Routes= createBrowserRouter([
  //   {path: "/", element: <Home/>},
  //   {path: "/about", element: <About/>},
  //   {path: "/items", element: <Items/>}
  // ])

  const Routes= createBrowserRouter([
    {path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage/>,
    children: [
    {index : true, element: <Home/>},
      {path: "about", element: <About/>},
      {path: "items",
      children: [
        {index: true, element: <Items/>},
        {path: ':id', element: <ItemDetails/>}

      ]}
    ] } ])

  return (
    <>

   <RouterProvider router={Routes}/>

    </>
  )
}

export default App;

