import {actionTypes} from '@servicenow/ui-core';
import {MOVIES_FETCH_REQUESTED, MOVIES_FETCH_SUCCEEDED, MOVIES_FETCH_FAILED} from '../constants';
import {fetchMovies} from '../getHttpEffects';

export default {
	actionHandlers: {
        [actionTypes.COMPONENT_BOOTSTRAPPED]: ({dispatch, updateState}) => {
            updateState({
                isLoading: true, 
                watchlistItems: []
            });
            dispatch(MOVIES_FETCH_REQUESTED);
        },
        [MOVIES_FETCH_REQUESTED]: fetchMovies ,
        [MOVIES_FETCH_SUCCEEDED]: ({action, updateState}) => {
            const {results} = action.payload;
            if (results) {
                updateState({
                    isLoading: false,
                    movies: results
                });
            }
        },
        [MOVIES_FETCH_FAILED]: () => {  
            console.log("failed")                  
            alert('Something went wrong, check the conection!');
        }
    }
}