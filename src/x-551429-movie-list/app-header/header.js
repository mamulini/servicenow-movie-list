import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import '@servicenow/now-dropdown';
import styles from './header.scss';



createCustomElement('app-header', {
	renderer: {type: snabbdom},
	view,
    styles
});  	
