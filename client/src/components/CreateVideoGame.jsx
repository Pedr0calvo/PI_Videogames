import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postGames } from "../redux/actions";

export const CreateVideoGame = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);
  const platforms = useSelector((state) => state.platforms);
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0,
    background_image: "",
    platforms: [],
    genders: [],
  });

  const [error, setError] = useState({});

  const handleInputs = (e) => {
    setInput(() => {
      const newState = {
        ...input,
        [e.target.name]: e.target.value,
      };
      setError(validate(newState));
      return newState;
    });
  };

  const handleSelect = (e) => {
    setInput(() => {
      return {
        ...input,
        genders: [...input.genders, e.target.value],
      };
    });
  };

  const handleSelect1 = (e) => {
    setInput(() => {
      return {
        ...input,
        platforms: [...input.platforms, e.target.value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postGames(input));
    alert("Congrats your video game was created");
    setInput({
      name: "",
      description: "",
      released: "",
      rating: 0,
      background_image: "",
      platforms: [],
      genders: [],
    });
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  useEffect(() => {
    setError(validate(input));
  }, [input]);

  const handleDeleteG = (e) => {
    setInput(() => {
      return {
        ...input,
        genders: input.genders.filter((el) => el !== e),
      };
    });
  };

  const handleDeleteP = (e) => {
    setInput(() => {
      return {
        ...input,
        platforms: input.platforms.filter((el) => el !== e),
      };
    });
  };

  return (
    <div>
      <NavLink to="/home">Back</NavLink>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputs}
          ></input>
          {error.name && <p>{error.name}</p>}
        </div>
        <br />
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleInputs}
          ></input>
          {error.description && <p>{error.description}</p>}
        </div>
        <br />
        <div>
          <label>Released</label>
          <input
            type="text"
            name="released"
            value={input.released}
            onChange={handleInputs}
          ></input>
          {error.released && <p>{error.released}</p>}
        </div>
        <br />
        <div>
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            step="0.01"
            min="0"
            max="5"
            value={input.rating}
            onChange={handleInputs}
          ></input>
        </div>
        <br />
        <div>
          <label>Image</label>
          <input
            type="text"
            name="background_image"
            value={input.background_image}
            onChange={handleInputs}
          ></input>
        </div>
        <br />
        <div>
          <select onChangeCapture={handleSelect}>
            <option hidden>Genres</option>
            {genres.map((e) => {
              return (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <div>
            {input.genders.map((e) => {
              return (
                <p key={e}>
                  {e}
                  <button onClick={() => handleDeleteG(e)}>❌</button>
                </p>
              );
            })}
          </div>
        </div>
        <br />
        <div>
          <select onChangeCapture={handleSelect1}>
            <option hidden>Platforms</option>
            {platforms.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          <div>
            {input.platforms.map((e) => {
              return (
                <p key={e}>
                  {e}
                  <button onClick={() => handleDeleteP(e)}>❌</button>
                </p>
              );
            })}
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            disabled={Object.keys(error).length ? true : false}
          ></input>
        </div>
      </form>
    </div>
  );
};

function validate(input) {
  let error = {};
  if (!input.name) error.name = "The name is required";
  if (!input.description) error.description = "The description is required";
  if (
    !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/gm.test(input.released)
  )
    error.released = "The format of the release date is incorrect";
  if (input.genders.length === 0) error.gender = "Error";
  return error;
}
