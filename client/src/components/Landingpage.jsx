import { NavLink } from "react-router-dom";
import style from "./Landingpage.module.css";

export const Landingpage = () => {
  return (
    <div className={style.landing}>
      <NavLink to={"/home"}>
        <h1>Welcome</h1>
      </NavLink>
    </div>
  );
};
