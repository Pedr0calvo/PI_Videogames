import { getPlatforms } from "./getPlatforms";
import {
  GET_GAMES,
  GET_DETAIL,
  GET_GENRES,
  GET_BY_NAME,
  POST_GAME,
  GET_PLATFORMS,
  COMPONENT_WILL_UNMOUNT,
  COMPONENT_WILL_UNMOUNT_ALL,
  FILTERED_BY_ORDER,
  FILTERED_BY_SOURCE,
  FILTERED_BY_GENRE,
} from "../consts";
import { sortName, sortSource, sortGenre } from "../sorts/sorts";

const initialState = {
  allGames: [],
  gameDetail: [],
  allGenres: [],
  platforms: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allGames: action.payload,
      };
    case POST_GAME:
      return {
        ...state,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: getPlatforms(action.payload),
      };
    case COMPONENT_WILL_UNMOUNT:
      return {
        ...state,
        gameDetail: [],
      };
    case COMPONENT_WILL_UNMOUNT_ALL:
      return {
        ...state,
        allGames: [],
      };
    case FILTERED_BY_ORDER:
      return {
        ...state,
        allGames: sortName(state.allGames, action.payload),
      };
    case FILTERED_BY_SOURCE:
      return {
        ...state,
        allGames: sortSource(state.allGames, action.payload),
      };
    case FILTERED_BY_GENRE:
      return {
        ...state,
        allGames: sortGenre(state.allGames, action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
