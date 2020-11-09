export default (modal) => {
    const {isOpen, title, overview, release_date, poster_path, vote_average} = modal;
    return (
        <div>
            <now-modal opened={isOpen} size="lg">
                <div className="movies__modal">
                    <div className='movies__poster'>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                    </div>
                    <div>
                        <h2 className="movies__title">{title}</h2>
                        <p className="movies__overview">{overview}</p>
                        <div className="movies__dateWrapper">
                            <span className="movies__date">Release year: {release_date.slice(0, 4)}</span>
                            <span className="movies__rating">Rating &#9733; {vote_average}</span>
                        </div>
                    </div>
                </div>
            </now-modal>
        </div>
    )
}