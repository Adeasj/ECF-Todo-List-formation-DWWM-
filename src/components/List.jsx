import Todo from "./Todo";
import { useState } from "react";

const List = () => {
  const [value, setValue] = useState("");
  const [todos, setLists] = useState([]);

  function handleOnClick() {
    setLists((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => handleOnClick()}> Ajouter une tâche </button>

      {Todo.map((todo) => (
        <todp todo={todo} />
      ))}
    </>
  );
};

export default List;
