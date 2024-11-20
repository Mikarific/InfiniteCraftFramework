import { dom } from './dom';
import { data, state, watchers } from './nuxt';

async function addSync() {
	Object.defineProperty((typeof ICF !== 'undefined' && ICF) || {}, 'domSync', {
		configurable: false,
		enumerable: true,
		writable: false,
		value: {
			favicon: await dom.favicon,
			head: await dom.head,
			body: await dom.body,
			container: await dom.container,
			nealFun: await dom.nealFun,
			sideControls: await dom.sideControls,
			sideControlsTrash: await dom.sideControlsTrash,
			sideControlsDarkMode: await dom.sideControlsDarkMode,
			sideControlsClear: await dom.sideControlsClear,
			sideControlsSound: await dom.sideControlsSound,
			sideControlsMobile: await dom.sideControlsMobile,
			sideControlsMobileDarkMode: await dom.sideControlsMobileDarkMode,
			sideControlsMobileSound: await dom.sideControlsMobileSound,
			particles: await dom.particles,
			sidebar: await dom.sidebar,
			sidebarInner: await dom.sidebarInner,
			items: await dom.items,
			itemsInner: await dom.itemsInner,
			instances: await dom.instances,
			instancesInner: await dom.instancesInner,
			logo: await dom.logo,
			reset: await dom.reset,
		},
	});
	Object.defineProperty((typeof ICF !== 'undefined' && ICF) || {}, 'stateSync', {
		configurable: false,
		enumerable: true,
		writable: false,
		value: await state,
	});
	Object.defineProperty((typeof ICF !== 'undefined' && ICF) || {}, 'dataSync', {
		configurable: false,
		enumerable: true,
		writable: false,
		value: await data,
	});
	Object.defineProperty((typeof ICF !== 'undefined' && ICF) || {}, 'watchersSync', {
		configurable: false,
		enumerable: true,
		writable: false,
		value: await watchers,
	});
	Object.defineProperty((typeof ICF !== 'undefined' && ICF) || {}, 'syncAvailable', {
		configurable: false,
		enumerable: true,
		writable: false,
		value: true,
	});
	Object.assign((typeof ICF?.syncAvailable !== 'undefined' && ICF?.syncAvailable) || {}, true);
}

if (document.readyState === 'interactive') {
	addSync();
} else {
	window.addEventListener('DOMContentLoaded', addSync, { once: true });
}
