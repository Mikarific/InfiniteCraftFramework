import './lib/refresh';
import './data/internal';

export const version: string = 'process.env.VERSION';
export const syncAvailable = false;
export const isInfiniteCraft =
	window.location.hostname === 'neal.fun' && window.location.pathname === '/infinite-craft/';

export * from './data/dom';
export * from './data/nuxt';
export * from './data/events';
import './data/sync';

import './lib/contextmenu';
import './lib/events';
