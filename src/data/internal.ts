import { EventListener, EventType } from './types';

Object.defineProperty((typeof ICF !== 'undefined' && ICF) || {}, 'internal', {
	configurable: false,
	enumerable: false,
	writable: false,
	value: {
		events: new Map(),
		contextMenuDisabled: false,
		eventsListening: false,
		refreshOnStateChange: false,
	},
});

export const events: Map<EventType, EventListener[]> =
	(typeof ICF?.internal?.events !== 'undefined' && ICF?.internal?.events) || new Map();

export const flags: {
	contextMenuDisabled: boolean;
	eventsListening: boolean;
	refreshOnStateChange: boolean;
} = {
	contextMenuDisabled:
		(typeof ICF?.internal?.contextMenuDisabled !== 'undefined' && ICF?.internal?.contextMenuDisabled) || false,
	eventsListening: (typeof ICF?.internal?.eventsListening !== 'undefined' && ICF?.internal?.eventsListening) || false,
	refreshOnStateChange:
		(typeof ICF?.internal?.refreshOnStateChange !== 'undefined' && ICF?.internal?.refreshOnStateChange) || false,
};
