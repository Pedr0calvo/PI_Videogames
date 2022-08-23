import { NavLink } from "react-router-dom";

export const Landingpage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <NavLink to={"/home"}>
        To home
      </NavLink>
    </div>
  );
};
