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
  ERROR,
} from "../consts";
import { sortName, sortSource, sortGenre } from "../sorts/sorts";

const initialState = {
  allGames: [],
  copyAllGames: [],
  gameDetail: [],
  allGenres: [],
  platforms: [],
  loading: true,
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
        loading: false,
        copyAllGames: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
        loading: false,
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
        error: "",
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
        loading: true,
      };
    case COMPONENT_WILL_UNMOUNT_ALL:
      return {
        ...state,
        allGames: [],
        loading: true,
      };
    case FILTERED_BY_ORDER:
      return {
        ...state,
        allGames: sortName(state.copyAllGames, action.payload),
      };
    case FILTERED_BY_SOURCE:
      return {
        ...state,
        allGames: sortSource(state.copyAllGames, action.payload),
      };
    case FILTERED_BY_GENRE:
      return {
        ...state,
        allGames: sortGenre(state.copyAllGames, action.payload),
      };
    case ERROR:
      return {
        ...state,
        error: action.payload.response.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
