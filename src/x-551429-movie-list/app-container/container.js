import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import containerActions from './actions';
import view from './view';
import '../card-items';
import '@servicenow/now-loader';
import styles from './container.scss';



createCustomElement('x-551429-movie-list', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		movies: [], 
		isLoading: true,
	},
	styles,
	...containerActions
});
