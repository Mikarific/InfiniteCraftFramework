import { flags } from '../data/internal';

if (
	window.location.hostname === 'neal.fun' &&
	window.location.pathname === '/infinite-craft/' &&
	!flags.contextMenuDisabled
) {
	window.addEventListener('contextmenu', (e) => {
		e.preventDefault();
	});
	flags.contextMenuDisabled = true;
}
