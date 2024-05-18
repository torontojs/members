class WebRing extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });

		// TODO: add base layout for web component
		this.shadowRoot.innerHTML = `
			<a href="#">Previous</a>
			<a href="#">Current</a>
			<a href="#">Next</a>
			<a href="#">Random</a>
		`;
	}
}

if (!window.customElements.get('tjs-web-ring')) {
	window.customElements.define('tjs-web-ring', WebRing);
}

const webRingElement = new WebRing();

document.body.append(webRingElement);
