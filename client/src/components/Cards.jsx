import { NavLink } from "react-router-dom";

export const Cards = ({ id, name, background_image, genres }) => {
  return (
    <div key={id}>
      <NavLink to={`/home/${id}`}>
        <h3>{name}</h3>
        <img src={background_image} alt="image not found" />
        <h6>{genres.join(", ")}</h6>
      </NavLink>
    </div>
  );
};
