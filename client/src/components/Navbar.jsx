import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenre, gamesByOrder, gamesBySource } from "../redux/actions";

const initialFilter = {
  order: "",
  source: "",
  genres: "",
};

export const Navbar = () => {
  const allGenres = useSelector((state) => state.allGenres);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(initialFilter);

  const handleOrder = (e) => {
    setFilters(() => {
      return {
        ...filters,
        order: e.target.value,
      };
    });
  };

  const handleSource = (e) => {
    setFilters(() => {
      return {
        ...filters,
        source: e.target.value,
      };
    });
  };

  const handleGenre = (e) => {
    setFilters(() => {
      return {
        ...filters,
        genres: [...filters.genres, e.target.value],
      };
    });
  };

  useEffect(() => {
    dispatch(gamesByOrder(filters));
    dispatch(gamesBySource(filters));
    dispatch(gamesByGenre(filters))
  }, [filters]);

  return (
    <>
      <div>
        <select onChange={(e) => handleOrder(e)}>
          <option hidden>Order</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Top Rating">Top Rating</option>
          <option value="Bottom Rating">Bottom Rating</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleSource(e)}>
          <option hidden>Source</option>
          <option value="All">All</option>
          <option value="API">API</option>
          <option value="DATABASE">DATABASE</option>
        </select>
      </div>
      <div>
        <form>
          {allGenres.map((el) => {
            return (
              <div key={el.id}>
                <label>
                  <input
                    type="checkbox"
                    value={el.name}
                    onClick={(e) => handleGenre(e)}
                  />{" "}
                  {el.name}
                </label>
                <br />
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};
