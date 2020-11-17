export default (state) => {
	const {movies, isLoading} = state;
	
	return (
		<div className="container">
			<div className="header">
				<h1 className="title">The movie list</h1>
				<p>Choose your favorite movies here!</p>
			</div>
			<div className="main">
				{isLoading?
		 			(<now-loader label="Loading..." size="lg"></now-loader>)
				:
					(<card-items className="card-items" movies={movies}/>)		
				}
			</div>
		</div>	
		)
};

<movie-item  className="movie-items-container"/>