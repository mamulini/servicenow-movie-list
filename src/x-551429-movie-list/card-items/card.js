import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import cardActions from './actions';
import '../movies-watchlist';
import '../modal-window';
import '@servicenow/now-card';
import '@servicenow/now-modal';
import '@servicenow/now-card';
import styles from './card.scss';



createCustomElement('card-items', {
	renderer: {type: snabbdom},
	view,
	initialState:{
		watchlistItems: [],
		modalIsOpen: false,
	},
	properties:{
		movies: [],
		modalWindow: {
            title: '',
            overview: '',
            date: '',
            path: '',
            vote: 0
		}
	},
	styles,
	...cardActions
});  	
