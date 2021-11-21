import React from "react";

function List({ list, onDelete, onToggle }) {
  const { text, id, active } = list;

  return (
    <li className="list">
      <span
        onClick={() => onToggle(id)}
        className="listText"
        style={{
          cursor: "pointer",
          textDecoration: active ? "line-through" : "none",
          color: active ? "gray" : "black",
        }}
      >
        {text}
      </span>
      <button className="deleteBtn" onClick={() => onDelete(id)}>
        <i className="fas fa-times-circle fa-lg"></i>
      </button>
    </li>
  );
}

function BuyList({ lists, onDelete, onToggle }) {
  return (
    <div>
      {lists.map((list) => (
        <List
          list={list}
          key={list.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BuyList;
