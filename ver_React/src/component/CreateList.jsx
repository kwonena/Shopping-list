import React from "react";

function CreateList({ text, onChange, onAdd }) {
  return (
    <div>
      <input
        className="textBox"
        name="text"
        placeholder="Please enter your shopping list🎁"
        value={text}
        onChange={onChange}
      />
      <button className="addBtn" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

export default CreateList;
