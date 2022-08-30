import { NavLink } from "react-router-dom";
import style from "./Cards.module.css";

export const Cards = ({ id, name, background_image, genres }) => {
  return (
    <NavLink to={`/home/${id}`}>
      <div key={id} className={style.cards}>
        <h3>{name}</h3>
        <img src={background_image} alt="not found" />
        <h6>{genres.join(", ")}</h6>
      </div>
    </NavLink>
  );
};
