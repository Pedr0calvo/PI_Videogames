import { NavLink } from "react-router-dom";
import style from "./Landingpage.module.css";

export const Landingpage = () => {
  return (
    <div className={style.landing}>
      <NavLink to={"/home"}>
        <div className={style.welcome}>Welcome</div>
      </NavLink>
    </div>
  );
};
