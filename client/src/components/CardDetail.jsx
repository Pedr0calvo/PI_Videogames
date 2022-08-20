import { componentWillUnmountDetail, getDetail } from "../redux/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";


// afsdddddddddddddddddddddddddddddddddddddddddddddddddddd

export const CardDetail = () => {
  const dispatch = useDispatch();
  const gameDetail = useSelector((state) => state.gameDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id)) 

    return () => {
      dispatch(componentWillUnmountDetail())
    };
  }, []);

  return (
    <>
      <button>
        <NavLink to="/home">Back</NavLink>
      </button>
      {gameDetail.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.name}</h2>
            <img src={el.background_image} alt="image not found"></img>
            <h5>{el.released}</h5>
            <h5>{el.rating}</h5>
            {el.createdinDB
              ? el.genres.map((e) => {
                  return (
                    <div key={e.name}>
                      <h5>{e.name}</h5>
                    </div>
                  );
                })
              : el.genres.map((e) => {
                  return (
                    <div key={e}>
                      <h5>{e}</h5>
                    </div>
                  );
                })}
            {el.platforms.map((e) => {
              return (
                <div key={e}>
                  <h5>{e}</h5>
                </div>
              );
            })}
            <h6>{el.description}</h6>
          </div>
        );
      })}
    </>
  );
};
