import List from "../components/List";
import { useState } from "react";
import styled from "styled-components";

const ListStyle = styled.section`
  padding: 20px;
  border: 4px solid #dbbfc2;
  border-radius: 20px;
  margin: 20px;
  background-color: #ebd8db;
`;

const ListContainer = () => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  function handleOnClick() {
    setLists((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }

  return (
    <>
      <ListStyle>
        <div>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => handleOnClick()}> Créer une liste </button>

          {lists.map((list) => (
            <div>
              <h2> {list.title}</h2>
              <List />
            </div>
          ))}
        </div>
      </ListStyle>
    </>
  );
};

export default ListContainer;
