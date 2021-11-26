import React from "react";

function CreateList({ text, onChange, onAdd, onEnter }) {
  return (
    <div>
      <input
        className="textBox"
        name="text"
        placeholder="Please enter your shopping list🎁"
        value={text}
        onChange={onChange}
        onKeyPress={onEnter}
      />
      <button className="addBtn" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

export default CreateList;
