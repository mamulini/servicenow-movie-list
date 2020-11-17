import {createHttpEffect} from '@servicenow/ui-effect-http';
import { API_URL, MOVIES_FETCH_SUCCEEDED, MOVIES_FETCH_FAILED } from './constants'

export const fetchMovies = createHttpEffect(`https://cors-anywhere.herokuapp.com/${API_URL}`, {
    method: 'GET',
    batch: false,
    successActionType: MOVIES_FETCH_SUCCEEDED,
    errorActionType: MOVIES_FETCH_FAILED,
});





