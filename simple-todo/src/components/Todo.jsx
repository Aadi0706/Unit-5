import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todoitem } from "./Todoitem";
import { nanoid } from "nanoid";
import './Todo.css'

function Todo() {
  const [todolist, setTodolist] = useState([]);

  const getData = (todos) => {
    // console.log("Received the todo", todos);
    const payload = {
      title: todos,
      // status: false,
      id: nanoid(5),
    };

    setTodolist([...todolist, payload]);
  };

  const handleStatus = (id) => {
    console.log("id", id);

    //  setTodolist([
    //    ...todolist.map((e)=> (e.id===id ? {...e, status: !e.status}:e)),
    //   ]);
    // or//
    const newarr = todolist.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          status: !e.status,
        };
      }
      return e;
    });
    setTodolist(newarr);
  };

  return (
    <div >
      <Todoinput  getData={getData} />

       <div >
       {todolist.map((e) => (
        <Todoitem  handleStatus={handleStatus} todo={e}></Todoitem>
      ))}
       </div>
     
    </div>
  );
}

export { Todo };
