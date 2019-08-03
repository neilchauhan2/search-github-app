import { SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from "./types";
import axios from "axios";

const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

// Get User
export const getUser = username => dispatch => {
  setLoading();

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
  setLoading();

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

// Clear Users
export const clearUsers = () => dispatch => {
  dispatch({ type: CLEAR_USERS });
};

// Set Loading
export const setLoading = () => dispatch => {
  dispatch({ type: SET_LOADING });
};
