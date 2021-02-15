import React, { ChangeEvent, FunctionComponent } from "react";

export interface FormField {
  [key: string]: string;
}

interface SearchProps {
  value: FormField;
  headerOptions: string[];
  onChange: (value: FormField) => void;
}

const SearchPane: FunctionComponent<SearchProps> = (props) => {
  const { value, headerOptions, onChange } = props;

  const change = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: "name" | "header"
  ) => {
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
