import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ErrorPage () {

    const Navigate= useNavigate()

    useEffect(()=>{
        setTimeout(()=>Navigate(-1),3000)
    })

    return (
        <>

        <div className="component">
            Oops ! Something went wrong

            {/* <div><Link to='/'> Home</Link>
            <Link to='/items'> Items</Link>
            </div> */}
        </div>
        </>

    )

}


export default ErrorPage