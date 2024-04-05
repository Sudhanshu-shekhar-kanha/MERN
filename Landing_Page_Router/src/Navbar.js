
import { NavLink, Outlet } from "react-router-dom"

function Navbar(){

    return (
        <>
        <div className="navbar">

            <NavLink  style = {({isActive}) => isActive? {color: 'red'} : undefined} className="text"
            to='/'> Home </NavLink>

            <NavLink style = {({isActive}) => isActive? {color: 'red'} : undefined} className="text"
            to='about'> About</NavLink>

            <NavLink style = {({isActive}) => isActive? {color: 'red'} : undefined} className="text"
            to='items'> Items</NavLink>

        </div>

        <Outlet/>



        </>


    )
}

export default Navbar