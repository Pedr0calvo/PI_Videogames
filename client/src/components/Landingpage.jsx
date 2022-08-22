import { NavLink } from "react-router-dom";

export const Landingpage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <NavLink to={"/home"}>
        <h3>To home</h3>
      </NavLink>
    </div>
  );
};
