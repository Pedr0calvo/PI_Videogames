import React from "react";
import style from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={style.empty}>
      <h2>We did not find a video game with those characteristics</h2>
    </div>
  );
};
