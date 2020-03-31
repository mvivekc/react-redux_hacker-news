import React from "react";
const ButtonInline = ({ onClick, type = "button", children }) => {
  return (
    <button className="button-inline" onClick={onClick} type={type}>
      {children}
    </button>
  );
};
const Button = ({ onClick, children, type = "button" }) => {
  return (
    <ButtonInline onClick={onClick} type={type}>
      {children}
    </ButtonInline>
  );
};

export { ButtonInline, Button };
