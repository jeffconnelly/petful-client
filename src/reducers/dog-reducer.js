import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR
} from '../actions/dog'


const initialState = {
  data: null,
  error:  null,
  loading: false
};

export function dogReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_DOG_REQUEST:
    return {
      ...state,
      loading: true,
      error: null
    }
    case FETCH_DOG_SUCCESS:
    return {
      ...state,
      data: action.dog,
      loading: false,
      error: null
    }
    case FETCH_DOG_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error
    }
    default: return state;
  }
}

export default dogReducer;

