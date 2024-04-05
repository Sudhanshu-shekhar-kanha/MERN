import { useDispatch, useSelector } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { useEffect } from "react";
import { actions, getInitialState, todoSelector } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";
function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;

  useEffect(()=>{
    // fetch("http://localhost:4100/api/todos")
    // .then(res=>res.json())
    // .then(parsedJson=>{
    //   console.log(parsedJson)
    // })

    // axios.get("http://localhost:4100/api/todos")
    // .then(res=>
    //   {
    //       console.log(res.data)
    //       dispatch(actions.setInitialState(res.data))
    //     })

    dispatch(getInitialState())
  },[])

  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.id}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            //console.log("[Log]: Todo -TOGGLE Action dispatched")
            dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;