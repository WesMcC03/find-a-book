import React from "react";




export function BookList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function BookListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
