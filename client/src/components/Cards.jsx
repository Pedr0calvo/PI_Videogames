/* eslint-disable */
import { NavLink } from "react-router-dom";
import style from "./Cards.module.css";

export const Cards = ({ id, name, background_image, genres }) => {
  return (
      <div key={id} className={style.cards}>
    <NavLink to={`/home/${id}`}>
        <h3>{name}</h3>
        <img
          src={background_image}
          alt="image not found"
        />
        <h6>{genres.join(", ")}</h6>
    </NavLink>
      </div>
  );
};
