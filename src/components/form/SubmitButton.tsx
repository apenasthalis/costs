import React from "react";
import styles from "./SubmitButton.module.css";

interface InputProps {
  text: string;
}

function SubmitButton({text}: InputProps) {
  return (
    <div>
        <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
