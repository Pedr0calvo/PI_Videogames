import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { gamesByName, haveAnError } from "../redux/actions";
import style from "./Bar.module.css";

export const Bar = () => {
  const [input, setInput] = useState({ name: "" });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(() => {
      return {
        ...input.name,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    dispatch(gamesByName(input.name)).catch((error) => {
      dispatch(haveAnError(error));
    });
  }, [input]);

  return (
    <div className={style.Bar}>
      <NavLink to={"/"}>
        <button className={style.link}>Back</button>
      </NavLink>
      <br />
      <NavLink to={"/create"}>
        <button className={style.link}>Create VideoGame</button>
      </NavLink>
      <br />
      <form>
        <input
          className={style.input}
          type="text"
          placeholder="Find your videogame"
          name="name"
          value={input.name}
          onChange={handleInput}
        ></input>
      </form>
    </div>
  );
};
