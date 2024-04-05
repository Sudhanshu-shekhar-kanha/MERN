
// //Blogging App using Hooks
// import { useEffect, useRef, useState } from "react";
// import { db } from "./firebase_init";

// import { addDoc, collection, getDocs ,onSnapshot} from "firebase/firestore";






// // function blogsReducer(state, action){
// //     switch(action.type){
// //         case  "ADD":
// //             return [action.blog, ...state]
// //         case "REMOVE":
// //             return state.filter((blog,index)=> index !== action.index)

// //         default:
// //             return []

// //     }

// // }

// export default function Blog(){

//     // const [title,setTitle] = useState("");
//     // const [content,setContent] = useState("");
//     const [formData, setformData] = useState({title:"", content:""})

//     const [blogs, setBlogs] =  useState([]);

//     //const [blogs,dispatch]=useReducer(blogsReducer,[])

//     const titleRef = useRef(null)

//     useEffect(()=>{
//         titleRef.current.focus()
//     },[])


//     useEffect(()=>{
//         // async function fetchData(){

//         //     const querySnapshot = await getDocs(collection(db, "blogs"));
//         //     const blogss = querySnapshot.docs.map((doc)=>{
//         //         return {
//         //             id:doc.id,
//         //             ...doc.data()
//         //         }
//         //     })
//         //     setBlogs(blogss)

//         // }



//         //fetchData()

//         const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
//             const blogss = snapshot.docs.map((doc)=>{
//                         return {
//                             id:doc.id,
//                             ...doc.data()
//                         }
//                     })
//                     setBlogs(blogss)
//         })




//     },[])

//     useEffect(()=>{
//         if(blogs.length && blogs[0].title){
//             document.title=blogs[0].title
//         }
//         else {
//             document.title="No Blogs!"
//         }
//     },[blogs])

//     async function handleSubmit(e){
//         e.preventDefault();

//         //setBlogs([{title: formData.title,content:formData.content}, ...blogs]);
//         // Add a new document with a generated id.
//             const docRef = await addDoc(collection(db, "blogs"), {
//                 title: formData.title,
//                 content: formData.content,
//                 createdOn: new Date ()
//             });
//             console.log("Document written with ID: ", docRef.id);




//         //dispatch({type:"ADD",blog:{title: formData.title,content:formData.content}})
//         console.log(blogs);
//         titleRef.current.focus()
//         setformData({title:"", content:""})
//     }

//     function removeBlog(i){
//         setBlogs(blogs.filter((blogs,index)=> i!==index))
//         //dispatch({type:"REMOVE",index:i})
//     }

//     return(
//         <>
//         <h1>Write a Blog!</h1>
//         <div className="section">

//         {/* Form for to write the blog */}
//             <form onSubmit={handleSubmit}>
//                 <Row label="Title">
//                         <input className="input"
//                                 placeholder="Enter the Title of the Blog here.."
//                                 value={formData.title}
//                                 ref={titleRef}
//                                 required
//                                 onChange = {(e) => setformData({title: e.target.value, content:formData.content})}
//                         />
//                 </Row >

//                 <Row label="Content">
//                         <textarea className="input content"
//                                 placeholder="Content of the Blog goes here.."
//                                 value={formData.content}
//                                 required
//                                 onChange = {(e) => setformData({title: formData.title,content: e.target.value})}
//                         />
//                 </Row >

//                 <button className = "btn">ADD</button>
//             </form>

//         </div>

//         <hr/>

//         {/* Section where submitted blogs will be displayed */}
//         <h2> Blogs </h2>
//         {blogs.map((blog,i) => (
//             <div className="blog">
//                 <h3>{blog.title}</h3>
//                 <hr/>
//                 <p>{blog.content}</p>

//                 <div className="blog-btn">
//                     <button className="remove" onClick={()=>removeBlog(i)}>Delete </button>
//                 </div>
//             </div>
//         ))}

//         </>
//         )
//     }

// //Row component to introduce a new row section in the form
// function Row(props){
//     const{label} = props;
//     return(
//         <>
//         <label>{label}<br/></label>
//         {props.children}
//         <hr />
//         </>
//     )
// }

//Blogging App with Firebase
import { useEffect, useRef, useState } from "react";

//Import fireStore reference from frebaseInit file
import { db } from "./firebase_init";

//Import all the required functions from fireStore
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";

export default function Blog(){

    const [formData, setformData] = useState({title:"", content:""})
    const [blogs, setBlogs] =  useState([]);

    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus()
    },[]);

    useEffect(() => {

        /*********************************************************************** */
        /** get all the documents from the fireStore using getDocs() */
        /*********************************************************************** */
        // async function fetchData(){
        //     const snapShot =await getDocs(collection(db, "blogs"));
        //     console.log(snapShot);

        //     const blogs = snapShot.docs.map((doc) => {
        //         return{
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })
        //     console.log(blogs);
        //     setBlogs(blogs);

        // }

        // fetchData();
        /*********************************************************************** */


        /*********************************************************************** */
        /** Get RealTime Updates from the databse using onSnapshot() */
        /*********************************************************************** */

        const unsub =  onSnapshot(collection(db,"blogs"), (snapShot) => {
            const blogs = snapShot.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(blogs);
                setBlogs(blogs);
        })

        /*********************************************************************** */
    },[]);

    async function handleSubmit(e){
        e.preventDefault();
        titleRef.current.focus();

        // Commenting setBlogs() as realtime Updates will be recieved from the database
        //setBlogs([{title: formData.title,content:formData.content}, ...blogs]);

        /*********************************************************************** */
        /** Add a new document with an auto generated id. */
        /*********************************************************************** */

        const docRef = doc(collection(db, "blogs"))

        await setDoc(docRef, {
                title: formData.title,
                content: formData.content,
                createdOn: new Date()
            });

        /*********************************************************************** */

        setformData({title: "", content: ""});
    }

    async function removeBlog(id){

        //setBlogs( blogs.filter((blog,index)=> index !== i));

        /*********************************************************************** */
        /** Deleting a document from the Firestore */
        /*********************************************************************** */
        const docRef = doc(db,"blogs",id);
        await deleteDoc(docRef);

        /*********************************************************************** */

     }

    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                ref = {titleRef}
                                value={formData.title}
                                onChange = {(e) => setformData({title: e.target.value, content:formData.content})}
                        />
                </Row >

                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                required
                                value={formData.content}
                                onChange = {(e) => setformData({title: formData.title,content: e.target.value})}
                        />
                </Row >

                <button className = "btn">ADD</button>
            </form>

        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i) => (
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <hr/>
                <p>{blog.content}</p>

                <div className="blog-btn">
                        <button onClick={() => {
                            // passing the blog id instead of index of the array to remove the document from the database
                            removeBlog(blog.id)
                        }}
                        className="btn remove">

                            Delete

                        </button>
                </div>
            </div>
        ))}

        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
