import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actionHandlers from '../actionHandlers';
import view from './view';
import '@servicenow/now-card';
import '@servicenow/now-loader';
import '@servicenow/now-button';
import '@servicenow/now-modal';
import styles from './content.scss';



createCustomElement('app-content', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		movies: null, 
		isLoading: true,
		watchlistItems: [],
		modal: {
			isOpen: false,
			title: '',
			overview: '',
			release_date: '',
		},
	},
	
	styles,
	actionHandlers
});  	
