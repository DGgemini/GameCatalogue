import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "info";
  onClick: () => void;
}

const Button = ({ children, color = "info", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
