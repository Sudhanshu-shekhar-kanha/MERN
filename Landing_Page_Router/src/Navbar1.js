


function Navbar({setPage}){

    return (
        <>
        <div className="navbar">
            <span className="text" onClick={()=> setPage('home')}>HOME </span>
            <span className="text" onClick={()=> setPage('about')}> ABOUT </span>
            <span className="text" onClick={()=> setPage('items')}>ITEM </span>


        </div>



        </>


    )
}

export default Navbar