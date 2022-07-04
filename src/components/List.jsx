import Todo from "./Todo";
import { useState } from "react";

const List = ({ list }) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleOnClick() {
    setTodos((prevstate) => [...prevstate, { id: 1, title: value }]);
    setValue("");
  }

  return (
    <>
      <div style={{ border: "2px solid hotpink", margin: 10, padding: 10 }}>
        <h2> {List.title}</h2>

        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => handleOnClick()}> Ajouter une tâche </button>

        {todos.map((todo, i) => (
          <Todo todo={todo} key={i} />
        ))}
      </div>
    </>
  );
};

export default List;
