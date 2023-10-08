import axios from "axios";
import {
  TEAM_LIST_REQUEST,
  TEAM_LIST_SUCCESS,
  TEAM_LIST_FAIL,
  ARTICLES_LIST_REQUEST,
  ARTICLES_LIST_SUCCESS,
  ARTICLES_LIST_FAIL,
  FAQ_LIST_REQUEST,
  FAQ_LIST_SUCCESS,
  FAQ_LIST_FAIL,
} from "../constants/homeConstants";

export const listTeam = () => async (dispatch) => {
  try {
    dispatch({ type: TEAM_LIST_REQUEST });
    const { data } = await axios.get("http://127.0.0.1:8000/api/home/team");
    dispatch({ type: TEAM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEAM_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLES_LIST_REQUEST });
    const { data } = await axios.get("http://127.0.0.1:8000/api/home/articles");
    dispatch({ type: ARTICLES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ARTICLES_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listFAQ = () => async (dispatch) => {
  try {
    dispatch({ type: FAQ_LIST_REQUEST });
    const { data } = await axios.get("http://127.0.0.1:8000/api/home/faq");
    dispatch({ type: FAQ_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FAQ_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
