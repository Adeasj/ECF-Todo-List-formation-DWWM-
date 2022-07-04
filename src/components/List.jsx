import Todo from "./Todo";
import { useState } from "react";

const List = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleOnClick() {
    setTodos((prevstate) => [...prevstate, { id: 1, title: value }]);
    setValue("");
  }

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => handleOnClick()}> Ajouter une tâche </button>

      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
};

export default List;
