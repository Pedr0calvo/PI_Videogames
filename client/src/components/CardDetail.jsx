import { componentWillUnmountDetail, getDetail } from "../redux/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "./Loader";
import style from "./CardDetail.module.css";

export const CardDetail = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const gameDetail = useSelector((state) => state.gameDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));

    return () => {
      dispatch(componentWillUnmountDetail());
    };
  }, []);

  return (
    <>
      <NavLink to="/home">Back</NavLink>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {gameDetail.map((el) => {
            return (
              <div key={el.id} className={style.detail}>
                <h2>{el.name}</h2>
                <img src={el.background_image} alt="image not found"></img>
                <h5>Release date: {el.released}</h5>
                <h5>Score: {el.rating}</h5>
                <div key={el.genres} className={style.list}>
                  {el.genres.map((e) => {
                    return (
                      <ul key={e}>
                        <li>{e}</li>
                      </ul>
                    );
                  })}
                </div>
                <div key={el.platforms} className={style.list}>
                  {el.platforms.map((e) => {
                    return (
                      <ul key={e}>
                        <li>{e}</li>
                      </ul>
                    );
                  })}
                </div>
                <p>{el.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
