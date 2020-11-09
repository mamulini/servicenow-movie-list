import {actionTypes} from '@servicenow/ui-core';

import {fetchMovies} from './getHttpEffects';
import {MOVIES_FETCH_REQUESTED,
        MOVIES_FETCH_SUCCEEDED, 
        MOVIES_FETCH_FAILED, 
        ADDED_TO_WACHLIST, 
        REMOVED_FROM_WACHLIST, 
        OPENED_MORE_INFO,
    } from './constants';
export default {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({dispatch, updateState}) => {
        updateState({isLoading: true});
        dispatch(MOVIES_FETCH_REQUESTED);
    },
    [MOVIES_FETCH_REQUESTED]: fetchMovies ,
    [MOVIES_FETCH_SUCCEEDED]: ({action, updateState}) => {
        const {results} = action.payload;
        updateState({ movies: results });


        if (action.payload) {
			updateState({isLoading: false});
        }

    },
    [MOVIES_FETCH_FAILED]: () => {
        alert('Something went wrong, check the conection!');
    },
    [ADDED_TO_WACHLIST]: ({action: {payload}, updateState, state}) => {
        const {action}  = payload;
        updateState({
            path: 'watchlistItems',
            value: action.moviesData,
            operation: 'push'
        });
    },
    [REMOVED_FROM_WACHLIST]: ({action: {payload}, updateState, state: {watchlistItems}}) => {
        const {moviesData}  = payload.action;
        const watchlist = [...watchlistItems];

        watchlistItems.map(( listItem, ind) => {
            if (moviesData.id === listItem.id){
                watchlist.splice(ind , 1);
                updateState({watchlistItems: watchlist});
            }
        })
    },
    [OPENED_MORE_INFO]: ({updateState, action: {payload}} ) => {
        const {moviesData} = payload.action

        updateState({
            path: 'modal',
            value: {
                isOpen: true,
                title: moviesData.title,
                overview: moviesData.overview,
                release_date: moviesData.release_date,
                poster_path: moviesData.poster_path,
                vote_average: moviesData.vote_average
            },
            operation: 'merge'
        })
    },
    "NOW_MODAL#OPENED_SET": ({updateState}) => {
        updateState({
            path: 'modal',
            value: {
                isOpen: false,
            },
            operation: 'merge'
        });
    }
};


