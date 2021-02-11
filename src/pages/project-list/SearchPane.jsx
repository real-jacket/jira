import React from "react";

const SearchPane = (props) => {
  const { value, headerOptions, onChange } = props;

  const change = (e, key) => {
    const { value } = e.target;
    onChange({
      [key]: value,
    });
  };

  return (
    <>
      <input
        placeholder={"请输入项目名"}
        value={value.name}
        onChange={(e) => change(e, "name")}
      />
      <select value={value.header} onChange={(e) => change(e, "header")}>
        {headerOptions.length &&
          headerOptions.map((option, index) => (
            <option key={index + option}>{option}</option>
          ))}
      </select>
    </>
  );
};

export default SearchPane;
