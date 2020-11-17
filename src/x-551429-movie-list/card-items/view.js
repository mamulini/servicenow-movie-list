import {Fragment} from '@servicenow/ui-renderer-snabbdom';
import {ADDED_TO_WACHLIST, OPENED_MORE_INFO, REMOVED_FROM_WACHLIST} from '../constants';

export default (state) => {
    const {watchlistItems, modalIsOpen, properties : {movies, modalWindow}} = state

    return(
        <Fragment>
            <div className="card__wrapper">
                {movies.map( item => {
                    const { title, id, poster_path, vote_average } = item; 
                    let btnItems = {
                        color: 'primary-positive',
                        label: 'Add to card',
                        action: ADDED_TO_WACHLIST
                    }

                     watchlistItems.forEach( list => {
                        if(list.id === id){
                            btnItems = {
                                color: 'primary-negative',
                                label: 'Remove',
                                action: REMOVED_FROM_WACHLIST
                            }
                        } 
                    });

                    return (
                        <div className='card'>
                            <now-card key={id} className='card__item'>
                                <now-card-header heading={{label: title, size: 'sm', lines: 2, variant: 'primary'}} />
                                <div  className='card__img'>
                                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                                </div>
                                <now-card-actions 
                                    items={[{
                                        label: btnItems.label,
                                        variant:  btnItems.color, 
                                        clickActionType:  btnItems.action,
                                        movie: item
                                    },
                                    {
                                        label: 'More info',
                                        variant: "secondary",
                                        clickActionType: OPENED_MORE_INFO, 
                                        movie: item
                                    }]}
                                 /> 
                                <now-card-footer>         
                                    <span className='card__rating'>Rating &#9733; {vote_average}</span>
                                </now-card-footer> 
                            </now-card>
                        {/* { modalIsOpen & 
                            <modal-window 
                            isOpen={modalIsOpen} 
                            title={title} 
                            overview={overview} 
                            date={release_date} 
                            path={poster__path} 
                            vote={vote_average} 
                            />
                                        } */}
                        
                        </div>
                        )
                } )}
                {
                     modalIsOpen ? (
                        <modal-window 
                            isOpen={modalIsOpen} 
                            // {...modalWindow}
                            title={modalWindow.title} 
                            overview={modalWindow.overview} 
                            date={modalWindow.date} 
                            path={modalWindow.path} 
                            vote={modalWindow.vote} 
                        />
                    ) : (
                        null
                    )
                }       
            </div>
            <div className="wachlist__wrapper">
                <h2 className='wachlist__title'>Watchlist: {watchlistItems.length} movies</h2>
                <movies-watchlist watchlistItems={watchlistItems} />
            </div>
        </Fragment>
        )

};
