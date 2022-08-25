import React from "react";
import {
  componentWillUnmountDetailAll,
  getAllGames,
  getGenres,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { Empty } from "./Empty";
import style from "./Home.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPage, setgamesPage] = useState(15);
  const lastgame = currentPage * gamesPage;
  const firstgame = lastgame - gamesPage;
  const currentGames = allGames.slice(firstgame, lastgame);

  const handleNext = () => {
    const nextPage = currentPage + 1;
    const firstind = (nextPage - 1) * gamesPage;
    if (firstind >= allGames.length) return;
    setCurrentPage(nextPage);
  };
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGenres());
    return () => {
      dispatch(componentWillUnmountDetailAll());
    };
  }, []);

  return (
    <>
      <div className={style.navegation}>
        <button className={style.navegationButton} onClick={handlePrev}>
          Prev
        </button>
        <br />
        <button className={style.navegationButton} onClick={handleNext}>
          Next
        </button>
      </div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {error ? (
            <Error />
          ) : (
            <div className={style.homeCards}>
              {currentGames.length === 0 ? (
                <Empty />
              ) : (
                currentGames.map((e) => {
                  return (
                    <Cards
                      key={e.id}
                      id={e.id}
                      name={e.name}
                      background_image={e.background_image}
                      genres={e.genres}
                    ></Cards>
                  );
                })
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
