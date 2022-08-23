import axios from "axios";
import {
  GET_GAMES,
  GET_DETAIL,
  GET_GENRES,
  GET_BY_NAME,
  GET_PLATFORMS,
  POST_GAME,
  COMPONENT_WILL_UNMOUNT,
  COMPONENT_WILL_UNMOUNT_ALL,
  FILTERED_BY_ORDER,
  FILTERED_BY_SOURCE,
  FILTERED_BY_GENRE,
  ERROR,
} from "../consts";

export const getAllGames = () => {
  try {
    return async function (dispatch) {
      const allGames = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_GAMES,
        payload: allGames.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const getDetail = (id) => {
  try {
    return async function (dispatch) {
      const gamesById = await axios.get(
        `http://localhost:3001/videogames/${id}`
      );
      return dispatch({
        type: GET_DETAIL,
        payload: gamesById.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const postGames = (data) => {
  try {
    return async function (dispatch) {
      const createGames = await axios.post(
        "http://localhost:3001/videogames",
        data
      );
      return dispatch({
        type: POST_GAME,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = () => {
  try {
    return async function (dispatch) {
      const getGenres = await axios.get("http://localhost:3001/gender");
      return dispatch({
        type: GET_GENRES,
        payload: getGenres.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const gamesByName = (name) => {
  try {
    return async function (dispatch) {
      const gamesByName = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      return dispatch({
        type: GET_BY_NAME,
        payload: gamesByName.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const getPlatforms = () => {
  try {
    return async function (dispatch) {
      const allGames = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_PLATFORMS,
        payload: allGames.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const componentWillUnmountDetail = () => {
  try {
    return async function (dispatch) {
      return dispatch({
        type: COMPONENT_WILL_UNMOUNT,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const componentWillUnmountDetailAll = () => {
  try {
    return async function (dispatch) {
      return dispatch({
        type: COMPONENT_WILL_UNMOUNT_ALL,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const gamesByOrder = (order) => {
  try {
    return {
      type: FILTERED_BY_ORDER,
      payload: order,
    };
  } catch (error) {
    console.error(error);
  }
};

export const gamesBySource = (source) => {
  try {
    return {
      type: FILTERED_BY_SOURCE,
      payload: source,
    };
  } catch (error) {
    console.error(error);
  }
};

export const gamesByGenre = (genre) => {
  try {
    return {
      type: FILTERED_BY_GENRE,
      payload: genre,
    };
  } catch (error) {
    console.error(error);
  }
};

export const haveAnError = (error) => {
  try {
    return {
      type: ERROR,
      payload: error,
    };
  } catch (error) {
    console.error(error);
  }
};
