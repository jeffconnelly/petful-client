
// const API_BASE_URL = 'http://localhost:8080/api';

import {REACT_APP_API_BASE_URL} from '../config';

//Reducer Actions
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});


export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_REQUEST';
export const fetchDogError = () => ({
    type: FETCH_DOG_ERROR
});

//Async Actions

//Fetch Dog
export const fetchDog = dog => dispatch => {
  dispatch(fetchDogRequest);
  fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'GET',
    })
    .then((res) => res.json())
    .then(dog => {
      console.log(dog);
    })
    .catch(err => dispatch(fetchDogError(err)));
}


//Adopt Dog
export const adoptDog = dog => dispatch => {
  fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'DELETE',
  })
    .then(dispatch(fetchDog()))
}
