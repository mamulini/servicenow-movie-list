export default () => {
    const dropdownItems = [
        {id: 'item1', label: 'Popularity', sortby: 'popularity.desc'}, 
        {id: 'item2', label: 'Release date', sortby: 'release_date.asc'},
        {id: 'item3', label: 'Vote average', sortby: 'vote_average.desc'},
    ];


    return (
        <div className="header">
            <h1 className="header__title">The movie list</h1>
			<p className="header__subtitle">Choose your favorite movies here!</p>
            <now-dropdown placeholder="Sort by" items={dropdownItems} />
        </div>
    )
}