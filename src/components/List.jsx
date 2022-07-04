import Todo from "./Todo";
import { useState } from "react";
import styled from "styled-components";

const MyStyle = styled.section`
  padding: 20px;
  border: 4px solid #f3e4c1;
  border-radius: 50% 20% / 10% 40%;
  margin: 10;
  background: #ffece5;
`;

const Button = styled.button`
  color: #dbbfc2;
  margin: 2px;
  padding: 4px;
  border: 2px solid #dbbfc2;
  border-radius: 4px;
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
        <div>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <br />
          <Button onClick={() => handleOnClick()}> Ajouter une tâche </Button>

          {todos.map((todo) => (
            <div style={{ border: "1px solid green", margin: 10, padding: 10 }}>
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
