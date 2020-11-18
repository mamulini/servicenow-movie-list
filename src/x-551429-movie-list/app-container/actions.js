import {actionTypes} from '@servicenow/ui-core';
import {
    API_URL,
    MOVIES_FETCH_REQUESTED,
    MOVIES_FETCH_SUCCEEDED,
    MOVIES_FETCH_FAILED,
    TO_NEXT_PAGE,
    TO_PREV_PAGE,
    TO_NUM_PAGE
        } from '../constants';
import {fetchMovies} from './getHttpEffects';


export default {
	actionHandlers: {
        [actionTypes.COMPONENT_BOOTSTRAPPED]: ({dispatch}) => {
            dispatch(MOVIES_FETCH_REQUESTED);
        },
        [MOVIES_FETCH_REQUESTED]:  ({state: {sortBy, activePage}, dispatch}) => {
            fetchMovies(dispatch, API_URL, sortBy, activePage);
        }
         ,
        [MOVIES_FETCH_SUCCEEDED]: ({action, updateState}) => {
            const {results} = action.payload;
            if (results) {
                updateState({
                    movies: results,
                    totalPages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                });
            }
        },
        [MOVIES_FETCH_FAILED]: ({action}) => {  
            console.log(action.payload)  ;                
            alert('Something went wrong, please check the conection!');
        },
        "NOW_DROPDOWN#ITEM_CLICKED": ({action, updateState, dispatch}) => {
            const {item: {sortby}} = action.payload;
            updateState({sortBy: sortby});
            dispatch(MOVIES_FETCH_REQUESTED);
        },
        [TO_NEXT_PAGE]: ({state: {activePage}, updateState, dispatch}) => {
            updateState({activePage: activePage < 9 ?  activePage + 1 : 10});
            dispatch(MOVIES_FETCH_REQUESTED);
        },
        [TO_PREV_PAGE]: ({state: {activePage}, updateState, dispatch}) => {
            updateState({activePage: activePage > 1 ? activePage - 1 : 1});
            dispatch(MOVIES_FETCH_REQUESTED);
        },
        [TO_NUM_PAGE]: ({state: {activePage}, action, updateState, dispatch}) => {
            const {page} = action.payload;
            updateState({activePage: activePage === page ? activePage : page});
            dispatch(MOVIES_FETCH_REQUESTED);

        }
    }
}