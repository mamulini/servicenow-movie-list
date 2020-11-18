import {REMOVED_FROM_WACHLIST, OPENED_MORE_INFO, imgNotFound} from '../constants'


export default ({properties:{watchlistItems}}) => {

    return (
        watchlistItems.map( listItem => {
            const {id, title, backdrop_path} = listItem;
           return(
                <div key={id} className='watchlist'>
                    <h3 className='watchlist__title'>{title}</h3>
                    <div  className='watchlist__img'>
                        <img src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : imgNotFound}/>
                    </div>
                    <now-card-actions 
                        items={[{
                            label: 'Remove',
                            variant: "primary-negative",
                            clickActionType: REMOVED_FROM_WACHLIST,  
                            movie: listItem
                        },
                        {
                            label: 'More info',
                            variant: "secondary",
                            clickActionType: OPENED_MORE_INFO,  
                            movie: listItem
                        }]}
                    /> 
                </div>
            )
        })
               
   )                
}
