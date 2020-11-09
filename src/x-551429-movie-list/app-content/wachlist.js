import {REMOVED_FROM_WACHLIST} from '../constants'

export default (watchlistItems) => (
    watchlistItems.map( movieItem => (
        <div key={movieItem.id} className='wishList'>
            <h2 className='wishList__title'>{movieItem.title}</h2>
            <div  className='movies__poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`}/>
            </div>
            <now-card-actions 
                items={[{label: 'Remove',
                variant: "primary-negative",
                clickActionType: REMOVED_FROM_WACHLIST,  
                moviesData: movieItem 
            }]} /> 
        </div>
    ))
)