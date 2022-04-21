
import './Todo.css'

export const Todoitem = ({ todo, handleStatus }) => {
  return (
    <div >
        {/* <div>{todo.id}</div> */}
        <div id="todo">

        {todo.title} - {todo.status ? "Done" : "Not Done"} 

         <button id="btn" onClick={ () =>{ handleStatus(todo.id) } }> 
        Toggle 
        </button>

        </div>
      
    </div>
  );
};
