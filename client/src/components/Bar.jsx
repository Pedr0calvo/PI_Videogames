import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { gamesByName } from "../redux/actions";

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
    dispatch(gamesByName(input.name));
  }, [input]);

  return (
    <>
      <button>
        <NavLink to={"/"}>Back</NavLink>
      </button>
      <br />
      <button>
        <NavLink to={"/create"}>Create VideoGame</NavLink>
      </button>
      <br />
      <input
        type="text"
        placeholder="Find your videogame"
        name="name"
        value={input.name}
        onChange={handleInput}
      ></input>
    </>
  );
};
