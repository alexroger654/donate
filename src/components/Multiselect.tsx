// components/MultiSelect.js
import React from "react";
import Select from "react-select";

const MultiSelect = ({ options, selectedValues, onChange }: any) => {
  const handleChange = (selectedOption: any) => {
    onChange(selectedOption);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: "110px",
      padding: "5px 15px",
    }),
  };

  return (
    <Select
      options={options}
      isMulti
      value={selectedValues}
      onChange={handleChange}
      styles={customStyles}
    />
  );
};

export default MultiSelect;
