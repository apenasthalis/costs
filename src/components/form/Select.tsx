import React, { ChangeEvent } from "react";
import styles from "./Select.module.css";

interface Option {
  id: string; // ou o tipo apropriado para o ID
  name: string;
}

interface SelectProps {
  text: string;
  name: string;
  options: Option[];
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

function Select({ text, name, options, handleOnChange, value }: SelectProps) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
