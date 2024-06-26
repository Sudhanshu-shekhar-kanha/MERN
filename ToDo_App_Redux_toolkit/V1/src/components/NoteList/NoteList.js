import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { deleteNote } from "../../redux/actions/noteActions";
import "./NoteList.css";

function NoteList() {
    const notes=useSelector((state)=>state.noteReducer.notes);
    const dispatch=useDispatch()
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={()=>dispatch(deleteNote(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
