import {ADDED_TO_WACHLIST,REMOVED_FROM_WACHLIST, OPENED_MORE_INFO, CHANGE_BTN_STYLE} from '../constants';



export default {
	actionHandlers: {
        [ADDED_TO_WACHLIST]: ({action: {payload}, updateState, state: {watchlistItems}}) => {  
            const {movie} = payload.action;
   
            updateState({
                watchlistItems: [...watchlistItems, movie]
            })
            
        },
        [REMOVED_FROM_WACHLIST]: ({action: {payload}, updateState, state: {watchlistItems}}) => { 
            const watchlist = [...watchlistItems];
            const {movie} = payload.action;

            watchlistItems.forEach(( listItem, i) => {
                if (movie.id === listItem.id){
                    watchlist.splice( i , 1);
                    updateState({watchlistItems: watchlist});
                }
            })
        },
        [OPENED_MORE_INFO]: ({updateState, updateProperties, action: {payload}}) => {
            const {movie: {title, overview, release_date, poster_path, vote_average}} = payload.action;

            updateProperties({
                modalWindow: {
                    title: title,
                    overview: overview,
                    date: release_date,
                    path: poster_path,
                    vote: vote_average
                }
            })
            updateState({modalIsOpen: true});
        },
        "NOW_MODAL#OPENED_SET": ({updateState}) => {
            updateState({modalIsOpen: false});
        }
    }
}