
// const API_BASE_URL = 'http://localhost:8080/api';

import {REACT_APP_API_BASE_URL} from '../config';
 
//Reducer Actions
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_REQUEST';
export const fetchCatError = () => ({
    type: FETCH_CAT_ERROR
});

//Async Actions

//Fetch Cat
export const fetchCat = cat => dispatch => {
  dispatch(fetchCatRequest);
  fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'GET',
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => {
      dispatch(fetchCatSuccess(cat));
    })
    .catch(err => dispatch(fetchCatError(err)));
}

//Adopt Cat
export const adoptCat = cat => dispatch => {
  fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'DELETE',
  }).then(res => {
    console.log(res);
  })
  .then(() => dispatch(fetchCat()))
}
