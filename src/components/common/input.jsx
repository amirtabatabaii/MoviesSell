import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <lable htmlFor={props.name}>{props.lable}</lable>
      <input
        autoFocus
        value={props.value}
        onChange={props.Onchange}
        id={props.name}
        name={props.name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
