import { SET_LOADING, GET_USER, GET_REPOS } from "./types";
import axios from "axios";

const githubClientId = process.env.REACT_APP_CLIENT_ID;
const githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;

// Get User
export const getUser = username => dispatch => {
  dispatch({ type: SET_LOADING });
  axios
    .get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: GET_USER,
        payload: data
      });
    });
};

// Get Repos
export const getUserRepos = username => dispatch => {
  dispatch({ type: SET_LOADING });

  axios
    .get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: GET_REPOS,
        payload: data
      });
    });
};
