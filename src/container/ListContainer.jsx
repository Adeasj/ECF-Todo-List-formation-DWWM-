import List from "../components/List";
import { useState } from "react";

const ListContainer = () => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  function handleOnClick() {
    setLists((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => handleOnClick()}> Créer une liste </button>

      <div style={{ border: "2px solid purple", margin: 10, padding: 10 }}>
        {lists.map((list) => (
          <List list={list} />
        ))}
      </div>
    </>
  );
};

export default ListContainer;
