import List from "../components/List";
import { useState } from "react";
import styled from "styled-components";

const ListContainer = () => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  function handleOnClick() {
    setLists((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }

  return (
    <>
      <div style={{ border: "2px solid purple", margin: 10, padding: 10 }}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => handleOnClick()}> Créer une liste </button>

        {lists.map((list) => (
          <div>
            <h2> {list.title}</h2>
            <List />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListContainer;
