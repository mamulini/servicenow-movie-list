export default (state) => {
	const {movies, activePage, totalPages} = state;
	
	return (
		<div className="container">
			<app-header/>
			<div className="main"  >
				<card-items className="card-items" movies={movies}/>
			</div>
			<app-footer activePage={activePage} totalPages={totalPages}/>
		</div>	
		)
};

