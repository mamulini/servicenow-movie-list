import { MOVIES_FETCH_SUCCEEDED, MOVIES_FETCH_FAILED } from '../constants';



export const fetchMovies = async  (dispatch, url, sortBy, activePage = 1,) => {  
    try {
      const result = await fetch(`${url}&sort_by=${sortBy}&page=${activePage}`);
      const movies = await result.json();
      dispatch(MOVIES_FETCH_SUCCEEDED, movies);
    } catch(error) {
      dispatch(MOVIES_FETCH_FAILED, error);
    }
  }




