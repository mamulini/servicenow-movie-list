export default (state) => {

    const {
        properties: {title, overview, date, path, vote, isOpen} 
    } = state;
    
    return (
        <div className="modal__container">
            <now-modal opened={isOpen} size="lg">
                <div className="modal">
                    <div className='modal__img'>
                        <img src={`https://image.tmdb.org/t/p/w500${path}`}/>
                    </div>
                    <div className="modal__description">
                        <h2 className="modal__title">{title}</h2>
                        <p className="modal__overview">{overview}</p>
                        <div className="modal__footer">
                            <span className="modal__date">Release year: {date.slice(0, 4)}</span>
                            <span className="modal__rating">Rating &#9733; {vote}</span>
                        </div>
                    </div>
                </div>
            </now-modal>
        </div>
    )
}