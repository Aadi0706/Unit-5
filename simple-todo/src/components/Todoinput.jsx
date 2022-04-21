import { useState } from "react";

function Todoinput({ getData }) {
  const [text, setText] = useState("");
  // console.log("input text-", text);
  // console.log(todo)

  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value); // setting new text for the todo.
        }}
        type="text"
        placeholder="Add todo"
      />

      <button
        onClick={() => {
          getData(text); // giving the todo texted to the getData callback function.
        }}
      >
        Add Todo
      </button>
      {/* {text} */}
    </div>
  );
}

export { Todoinput };
