import { BaseHTMLElement, customElement, first, html, onEvent } from 'dom-native';

@customElement('v-main') // same as customElements.define('v-main', IcoElement) 
class MainView extends BaseHTMLElement { // extends native HTMLElement

	#clickCount = 0; // private, transpiled by TypeScript.

	@onEvent('pointerup', '.hello-box')
	onHelloClick(evt: PointerEvent) {
		first(this, '.hello-box strong')!.textContent = `CLICKED ${++this.#clickCount}`;
	}

	init() { // called once on the first connectedCallback

		document.body.append(html`
      <dg-dialog>
				<div slot="title">Random Title</div>
				Random Content
				<div slot="message">Random Message</div>
				<button slot="buttons" name="cancel">Cancel</div>
				<button slot="buttons" name="ok">OK</div>
      </dg-dialog>
		`);

	}

}