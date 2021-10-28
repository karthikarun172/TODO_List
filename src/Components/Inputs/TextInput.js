/** @format */

import React from "react";

export const TextInput = ({ value, onChange, placeholder, style }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      style={style}
    />
  );
};

export const TextArea = ({ onChange }) => {
  return (
    <textarea
      onChange={onChange}
      name="Text1"
      placeholder="Brief"
      cols="40"
      rows="5"
      style={{ marginBottom: "20px" }}
    ></textarea>
  );
};

export const SelectInput = ({ onChange, value }) => {
  return (
    <select
      onChange={onChange}
      id="cars"
      name="cars"
      value={value}
      style={{ height: "50px", marginBottom: "30px" }}
    >
      <option value="High Priority">High Priority</option>
      <option value="Low Priority">Low Priority</option>
      <option value="Mediun Priority">Mediun Priority</option>
    </select>
  );
};
