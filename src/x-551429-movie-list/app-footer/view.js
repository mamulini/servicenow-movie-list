import {TO_NEXT_PAGE, TO_PREV_PAGE, TO_NUM_PAGE} from '../constants';

export default (state,{dispatch}) => {
    const {properties: {activePage, totalPages}} = state;

    return (
        <div classNameName="footer">
            <ul className="pagination">
                <li className="pagination__btn" on-click={() => {dispatch(TO_PREV_PAGE)}}>
                    <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39040/preview.png"/>
                </li>
                {totalPages.map( page => (
                    <li 
                        className={activePage === page ? 'pagination__numbers active' : 'pagination__numbers'}  
                        on-click={() => dispatch(TO_NUM_PAGE,{page})}>{page}
                    </li>
                ))}
                <li className="pagination__btn" on-click={() => {dispatch(TO_NEXT_PAGE)}}>
                    <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39041/preview.png"/>
                </li>
            </ul>
        </div>
    )
}