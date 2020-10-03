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

		display: grid;
		grid-template-rows: 4rem auto 4rem;		
	}

	.dialog > * {
		border: solid 1px red;
	}	

	header{
		display: grid;
		grid-template-columns: 1fr 2rem;
		align-items: center;
		padding-left: 1rem;
	}	

	section {
		padding: 1rem; 
		min-height: 4rem;
		max-height: 20rem;
		overflow: auto;
	}	

	footer{
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		padding: 0 1rem;
	}

	.message{
		font-size: .75rem;
	}
	
	.buttons{
		display: grid;
		grid-auto-flow: column;
		grid-gap: .5rem;
	}			
`

@customElement('dg-dialog') // same as customElements.define('dg-dialog', DialogComponent)
class DialogComponent extends BaseHTMLElement { // extends HTMLElement

	constructor() {
		super();

		this.attachShadow({ mode: 'open' }).append(html`
			<div class="dialog" part="dialog">
				<header>
					<span class="title">TITLE</span>
					<c-ico href="#ico-close"></c-ico>
				</header>
				<section>
					CONTENT
				</section>	
				<footer>
					<span class="message">MESSAGE</span>
					<span class="buttons">BUTTONS</span>
				</footer>							
			</div> 
		`);

		adoptStyleSheets(this, _shadowCss);
	}

}