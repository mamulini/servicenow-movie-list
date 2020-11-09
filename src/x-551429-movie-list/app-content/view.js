import {Fragment} from '@servicenow/ui-renderer-snabbdom';
import wachlist from './wachlist';
import cards from './movieCards';
import modalWindow from './modalWindow';

export default (state) => {
    const {isLoading, movies, watchlistItems, modal} = state;
   return ( <Fragment>
                <h1 className="content__title">The movie list</h1>
                {modalWindow(modal)}
                <div className="content">
                { isLoading ?  (
                    <now-loader label="Loading..." size="lg"></now-loader>
                    ) : (
                    cards(movies)
                    )
                }
                <div className='willWatch'>
                    <p>Watchlist: {watchlistItems.length} movies</p>
                    {wachlist(watchlistItems)}
                </div>
                </div>
            </Fragment>
        )
};


// const modalAction = (modal) => {
//     const {isOpen, title, overview, release_date, poster_path, vote_average} = modal;
//     return (
//         <div>
//             <now-modal opened={isOpen} size="lg">
//                 <div className="movies__modal">
//                     <div className='movies__poster'>
//                         <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
//                     </div>
//                     <div>
//                         <h2 className="movies__title">{title}</h2>
//                         <p className="movies__overview">{overview}</p>
//                         <div className="movies__dateWrapper">
//                             <span className="movies__date">Release year: {release_date.slice(0, 4)}</span>
//                             <span className="movies__rating">Rating &#9733; {vote_average}</span>
//                         </div>
//                     </div>
//                 </div>
//             </now-modal>
//         </div>
//     )
// }


// const movieItems = (movies) => (
//     <div className='movies'>
//             {movies.map( movieItem => (
//                 <now-card key={movieItem.id} className='movies__item'>
//                         <now-card-header heading={{label: movieItem.title, size: 'sm', lines: 2, variant: 'primary'}} />
//                         <div  className='movies__poster'>
//                             <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}/>
//                         </div>
//                         <now-card-actions items={[
//                             {label: 'Add to list', variant: "primary-positive", clickActionType: ADDED_TO_WACHLIST,  moviesData: movieItem },
//                             {label: 'More info', variant: "secondary", clickActionType: OPENED_MORE_INFO,  moviesData: movieItem }
//                             ]} /> 
//                         <now-card-footer >         
//                             <span className='movies__rating'>Rating &#9733; {movieItem.vote_average}</span>
//                         </now-card-footer> 
//                         {/* <button className='movie__btn'  type='button'>Delete movie</button> */}
//                 </now-card>

//             ))}
//     </div>
// )


