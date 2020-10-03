import { adoptStyleSheets, BaseHTMLElement, css, customElement, html } from 'dom-native';

const _shadowCss = css`
	:host{
		position: absolute;
		top: 0; right: 0; bottom: 0; left: 0;
	}

	.dialog{
		position: absolute;
		top: 10rem; 
		left: calc(50% - 11rem);
		width: 22rem;

		box-shadow: var(--elev-5);
	}
`

@customElement('dg-dialog') // same as customElements.define('dg-dialog', DialogComponent)
class DialogComponent extends BaseHTMLElement { // extends HTMLElement

	constructor() {
		super();

		this.attachShadow({ mode: 'open' }).append(html`
			<div class="dialog" part="dialog">
				CONTENT
			</div> 
		`);

		adoptStyleSheets(this, _shadowCss);
	}

}