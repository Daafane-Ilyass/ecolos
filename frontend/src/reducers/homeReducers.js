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

export const teamListReducer = (state = { team: [] }, action) => {
  switch (action.type) {
    case TEAM_LIST_REQUEST:
      return { loading: true, team: [] };
    case TEAM_LIST_SUCCESS:
      return { loading: false, team: action.payload };
    case TEAM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLES_LIST_REQUEST:
      return { loading: true, articles: [] };
    case ARTICLES_LIST_SUCCESS:
      return { loading: false, articles: action.payload };
    case ARTICLES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const faqListReducer = (state = { faq: [] }, action) => {
  switch (action.type) {
    case FAQ_LIST_REQUEST:
      return { loading: true, faqs: [] };
    case FAQ_LIST_SUCCESS:
      return { loading: false, faqs: action.payload };
    case FAQ_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
