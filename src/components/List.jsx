import Todo from "./Todo";
import { useState } from "react";
import styled from "styled-components";

const MyStyle = styled.section`
  padding: 10;
  background: #f9e5f5;
`;

const List = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleOnClick() {
    setTodos((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }

  return (
    <>
      <MyStyle>
        <div style={{ border: "2px solid hotpink", margin: 10, padding: 10 }}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => handleOnClick()}> Ajouter une tâche </button>

          {todos.map((todo) => (
            <div style={{ border: "2px solid green", margin: 10, padding: 10 }}>
              {todo.title}
              <Todo />
            </div>
          ))}
        </div>
      </MyStyle>{" "}
    </>
  );
};

export default List;
