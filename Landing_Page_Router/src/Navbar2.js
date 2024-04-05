
import { Link, Outlet } from "react-router-dom"

function Navbar(){

    return (
        <>
        <div className="navbar">
            {/* <span className="text" >HOME </span> */}
            <Link  className="text" to='/'> Home</Link>
            <Link  className="text" to='/about'> About</Link>
            <Link  className="text" to='/items'> Items</Link>

        </div>

        <Outlet/>



        </>


    )
}

export default Navbar