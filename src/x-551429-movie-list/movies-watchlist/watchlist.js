import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import watchlistActions from './actions';
import '@servicenow/now-card';
import styles from './watchlist.scss';


createCustomElement('movies-watchlist', {
	renderer: {type: snabbdom},
	view,
	properties: {
		watchlistItems: []
	},
	styles,
	...watchlistActions
});  