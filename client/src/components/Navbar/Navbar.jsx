import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenre, gamesByOrder, gamesBySource } from "../../redux/actions";
import style from "./Navbar.module.css";

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
        genres: e.target.value,
      };
    });
  };

  useEffect(() => {
    dispatch(gamesByGenre(filters.genres));
  }, [dispatch, filters.genres]);

  useEffect(() => {
    dispatch(gamesByOrder(filters.order));
  }, [dispatch, filters.order]);

  useEffect(() => {
    dispatch(gamesBySource(filters.source));
  }, [dispatch, filters.source]);

  return (
    <div className={style.main}>
      <div>
        <select onChange={handleOrder} className={style.buttons}>
          <option hidden>Order</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Top Rating">Top Rating</option>
          <option value="Bottom Rating">Bottom Rating</option>
        </select>
      </div>
      <div>
        <select onChange={handleSource} className={style.buttons}>
          <option hidden>Source</option>
          <option value="All">All</option>
          <option value="API">API</option>
          <option value="DATABASE">DATABASE</option>
        </select>
      </div>
      <div>
        <select onChange={handleGenre} className={style.buttons}>
          <option hidden>Genres</option>
          {allGenres &&
            allGenres.map((el) => {
              return (
                <option key={el.id} value={el.name}>
                  {el.name}{" "}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};
