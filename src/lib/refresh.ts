import { flags } from '../data/internal';

if (window.location.hostname === 'neal.fun' && !flags.refreshOnStateChange) {
	let finishedLoading = false;

	window.history.pushState = new Proxy(history.pushState, {
		apply: (target, thisArg, argsList) => {
			if (argsList[2] !== undefined && finishedLoading) {
				const newURL = new URL(argsList[2], document.baseURI);
				const isInfiniteCraft = newURL.hostname === 'neal.fun' && newURL.pathname === '/infinite-craft/';
				Object.assign((typeof ICF !== 'undefined' && ICF) || {}, { isInfiniteCraft });
				if (isInfiniteCraft) location.replace(newURL);
			}
			return Reflect.apply(target, thisArg, argsList);
		},
	});

	window.history.replaceState = new Proxy(history.replaceState, {
		apply: (target, thisArg, argsList) => {
			if (argsList[2] !== undefined && finishedLoading) {
				const newURL = new URL(argsList[2], document.baseURI);
				const isInfiniteCraft = newURL.hostname === 'neal.fun' && newURL.pathname === '/infinite-craft/';
				Object.assign((typeof ICF !== 'undefined' && ICF) || {}, { isInfiniteCraft });
				if (isInfiniteCraft) location.replace(newURL);
			}
			return Reflect.apply(target, thisArg, argsList);
		},
	});

	window.addEventListener('popstate', () => {
		if (finishedLoading) {
			const newURL = new URL(window.location.href);
			const isInfiniteCraft = newURL.hostname === 'neal.fun' && newURL.pathname === '/infinite-craft/';
			Object.assign((typeof ICF !== 'undefined' && ICF) || {}, { isInfiniteCraft });
			if (isInfiniteCraft) location.replace(newURL);
		}
	});

	if (document.readyState === 'interactive') {
		finishedLoading = true;
	} else {
		window.addEventListener(
			'DOMContentLoaded',
			() => {
				finishedLoading = true;
			},
			{ once: true },
		);
	}
	flags.refreshOnStateChange = true;
}
