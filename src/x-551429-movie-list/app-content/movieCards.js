
import {ADDED_TO_WACHLIST, OPENED_MORE_INFO} from  '../constants';

export default (movies) => (
    <div className='movies'>
            {movies.map( movieItem => (
                <now-card key={movieItem.id} className='movies__item'>
                        <now-card-header heading={{label: movieItem.title, size: 'sm', lines: 2, variant: 'primary'}} />
                        <div  className='movies__poster'>
                            <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}/>
                        </div>
                        <now-card-actions items={[
                            {label: 'Add to list', variant: "primary-positive", clickActionType: ADDED_TO_WACHLIST,  moviesData: movieItem },
                            {label: 'More info', variant: "secondary", clickActionType: OPENED_MORE_INFO,  moviesData: movieItem }
                            ]} /> 
                        <now-card-footer >         
                            <span className='movies__rating'>Rating &#9733; {movieItem.vote_average}</span>
                        </now-card-footer> 
                </now-card>

            ))}
    </div>
)