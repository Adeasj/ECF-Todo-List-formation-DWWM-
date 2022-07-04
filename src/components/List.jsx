import Todo from "./Todo";
import { useState } from "react";
import styled from "styled-components";

// J'intégre mon style CSS pour mes todos puis mon mon button

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

// Je créer ma fonction liste que je vais retourner pour ajouter un nouveau todos à chaque click (handleOnClick)

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
          {/* Je créer mon 'formulaire' */}
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <br />
          <Button onClick={() => handleOnClick()}> Ajouter une tâche </Button>

          {/* Je récupére et j'affiche ma liste de Todos */}
          {todos.map((todo) => (
            <div style={{ textAlign: "left" }}>
              <big>➺</big> {todo.title}
              <Todo />
            </div>
          ))}
        </div>
      </MyStyle>{" "}
    </>
  );
};

export default List;
