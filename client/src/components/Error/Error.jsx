import React from "react";
import { useSelector } from "react-redux";
import style from "./Error.module.css";

export const Error = () => {
  const error = useSelector((state) => state.error);
  return (
    <div className={style.container}>
      <div className={style.error}>{error}</div>
    </div>
  );
};
