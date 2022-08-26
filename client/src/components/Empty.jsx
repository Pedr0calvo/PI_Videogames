import React from "react";
import style from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={style.container}>
      <div className={style.empty}>We did not find your game</div>
    </div>
  );
};
