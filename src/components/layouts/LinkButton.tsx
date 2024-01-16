import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./LinkButton.module.css";

interface LinkButtonProps extends LinkProps {
  text: string;
}

function LinkButton({ to, text, ...rest }: LinkButtonProps) {
  return (
    <Link className={styles.btn} to={to} {...rest}>
      {text}
    </Link>
  );
}

export default LinkButton;
