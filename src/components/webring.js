
class WebRing extends HTMLElement {

	static observedAttributes = ['image-left', 'image-right'];

	constructor() {
		super();

		this.attachShadow({ mode: 'open' });

		this.shadowRoot.innerHTML = `
		<style>
		.wrapper {
			background: var(--webring-bg-color);
			max-width: 860px;
			padding: 1em;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border: 5px groove yellow;
		}
		.content-wrapper{
			display: flex;
		}
		slot[name="title"] {
			background:black;
			font-weight: bold;
			font-size: 1.5em;
			color: red;
			text-shadow: 0px -2px 4px #fff, 0px -2px 10px #FF3, 0px -10px 20px #F90, 0px -20px 40px #C33;
		}
		</style>
		<div class="wrapper">
			<slot name="title"><p>🏄‍♂️🌊 Lord of all Webrings 💻🍕</p></slot>
			<hr/>
			<slot name="description">
			<p>The webring web component that can be retitled to whatever you want so you can make yourself look like you're accepted by other experimental contemporary software developers.</p>
			</slot>
		<div class="content-wrapper">
			<slot name="image-left"><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThqcG4yaHNhMWc5ZzVvM3d6c25pZDRrZW5sMDcxcGRsbmZ1MW5rMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jU8YU7i8WJFLMMDrEb/giphy.webp" alt="" width="150" /></slot>
		<div>
			<a href="https://members.torontojs.com">List Sites</a>
			<a id="prev" href="#">&larr; Previous</a>
			<a id="next" href="#">Next &rarr;</a>
			<a href="/random">Random</a>
		</div>
			<slot name="image-right"><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGdpaXlvc3BvMzBraDZvb3Ixd2VxcW04N2hjaWV5em40cm9wNDNkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KQEWjYfR7Ik8q1LmF3/giphy.webp" alt="" width="150" /></slot>
		</div>
		</div>
	</div>
		`;
	}

	connectedCallback() {
		console.log('component connected');
	 }
}

if (!window.customElements.get('tjs-web-ring')) {
	window.customElements.define('tjs-web-ring', WebRing);
}

const webRingElement = new WebRing();
document.body.append(webRingElement);
