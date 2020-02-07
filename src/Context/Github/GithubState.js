import React, {useReducer} from 'react';
import axios from 'axios';
import { GithubContext } from './GithubContext';
import { GithubReducer } from './GithubReducer';
import { GET_USER, SEARCH_USERS, GET_REPOS, SET_LOADING, CLEAR_USERS } from '../types';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCreds = (url) => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
};

export const GithubState = ({ children }) => {

  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUser = async (name) => {
    setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}?`)
    )
    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  const search = async (value) => {
    setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
      );
      
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  const getRepos = async (name) => {
    setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}/repos?per_page=5`)
    )
    dispatch({
      type: GET_REPOS,
      payload: response.data
    })
  }

  const setLoading = () => dispatch({ type: SET_LOADING });
  const clearUsers = () => dispatch({ type: CLEAR_USERS })
  
  const { user, users, repos, loading, } = state;
  return (
    <GithubContext.Provider value={{
      getUser, search, getRepos, setLoading, clearUsers,
      user, users, repos, loading
    }}>
      {children}
    </GithubContext.Provider>
  )
}