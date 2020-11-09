import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
// import "@servicenow/now-modal"
import view from './view';
import '../app-content';
import styles from './container.scss';



createCustomElement('x-551429-movie-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
