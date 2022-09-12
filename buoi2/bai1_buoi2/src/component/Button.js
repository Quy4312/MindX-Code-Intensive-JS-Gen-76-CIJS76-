import React from "react";

export const Button = ({ content, onClick }) => {
  return (
    // <div>Button</div>
    <button onClick={onClick}>{content}</button>
  );
};
