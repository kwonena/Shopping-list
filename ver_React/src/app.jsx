import React, { useRef, useState } from "react";
import CreateList from "./component/CreateList";
import BuyList from "./component/BuyList";
import "./app.css";

function App(props) {
  const [inputs, setInputs] = useState({
    text: "",
  });
  const { text } = inputs;

  const [lists, setLists] = useState([
    {
      id: 1,
      text: "포도",
      active: true,
    },
    {
      id: 2,
      text: "딸기",
      active: false,
    },
    {
      id: 3,
      text: "망고",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onDelete = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onAdd = () => {
    if (text !== "") {
      const list = {
        id: nextId.current,
        ...inputs,
      };
      setLists(lists.concat(list));
      setInputs({
        text: "",
      });
      nextId.current += 1;
    } else {
      alert("텍스트를 입력해주세요!");
    }
  };

  const onToggle = (id) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, active: !list.active } : list
      )
    );
  };

  return (
    <div className="app">
      <h3 class="title">Shopping List</h3>
      <div class="monitor">
        <BuyList
          lists={lists}
          onToggle={onToggle}
          onDelete={onDelete}
          onChange={onChange}
        />
        <CreateList text={text} onAdd={onAdd} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
