import {REMOVED_FROM_WACHLIST, OPENED_MORE_INFO} from '../constants'


export default ({properties:{watchlistItems}}) => {

    return (
        watchlistItems.map( listItem => {
           return <div key={listItem.id} className='watchlist'>
            <h3 className='watchlist__title'>{listItem.title}</h3>
            <div  className='watchlist__img'>
                <img src={`https://image.tmdb.org/t/p/w500${listItem.backdrop_path}`}/>
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
        })
               
   )                
}


// export default (state) => {
//     const { 
//         properties: {listItem}
//      } = state;

//     return (
//         <div className='watchlist'>
//             {
//                 listItem.map( item => (
//                     <div key={item.id} className='watchlist__box'>
//                     <h3 className='watchlist__itle'>{item.title}</h3>
//                     <div  className='watchlist__img'>
//                         <img src={`https://image.tmdb.org/t/p/w500${item.poster__path}`}/>
//                     </div>
//                     <now-card-actions 
//                         items={[{
//                             label: 'Remove',
//                             variant: "primary-negative",
//                             // clickActionType: REMOVED_FROM_WACHLIST,  
//                             // moviesData: listItems 
//                         }]}
//                     /> 
//                 </div>
//                 ))
//             }
//     </div>)                
// }



                    