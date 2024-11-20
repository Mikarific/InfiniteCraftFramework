import type { CraftResponse, Element, Instance, Position } from './types';
import { dom } from './dom';

export const state: Promise<{
	nextTick: (callback: () => void) => void;
	calcInstanceSize: (instance: Instance) => void;
	changeSort: () => void;
	checkControlsBlur: () => void;
	checkIfMobile: () => void;
	checkIntersections: (instance: Instance) => boolean;
	clearInstances: () => void;
	craft: (first: Instance, second: Instance) => void;
	dropElement: (mouseEvent: MouseEvent) => void;
	duplicateInstance: (instance: Instance) => void;
	getCenterOfCraft: (first: Instance, second: Instance) => Position;
	getCraftResponse: (first: Instance, second: Instance) => Promise<CraftResponse>;
	getEventCoords: (mouseEvent: MouseEvent) => Position;
	goToAppStore: () => void;
	hideElement: (element: Element) => void;
	mobileSelectElement: (pointerEvent: PointerEvent, element: Element) => void;
	moveInstance: (mouseEvent: MouseEvent) => void;
	onResize: () => void;
	playInstanceSound: () => void;
	removeCurrentHover: () => void;
	reset: () => void;
	saveItems: () => void;
	selectElement: (mouseEvent: MouseEvent, element: Element) => void;
	selectInstance: (mouseEvent: MouseEvent, instance: Instance) => void;
	setInstancePosition: (instance: Instance, x: number, y: number) => void;
	setInstanceZIndex: (instance: Instance, zIndex: number) => void;
	setPinwheelCoords: (coords: Position) => void;
	toggleDarkMode: () => void;
	toggleSound: () => void;
}> = new Promise((resolve) => {
	function getState(resolve) {
		dom.container.then((container) =>
			resolve({
				get nextTick() {
					return (container as any).__vue__.$nextTick;
				},
				get calcInstanceSize() {
					return (container as any).__vue__.calcInstanceSize;
				},
				get changeSort() {
					return (container as any).__vue__.changeSort;
				},
				get checkControlsBlur() {
					return (container as any).__vue__.checkControlsBlur;
				},
				get checkIfMobile() {
					return (container as any).__vue__.checkIfMobile;
				},
				get checkIntersections() {
					return (container as any).__vue__.checkIntersections;
				},
				get clearInstances() {
					return (container as any).__vue__.clearInstances;
				},
				get craft() {
					return (container as any).__vue__.craft;
				},
				get dropElement() {
					return (container as any).__vue__.dropElement;
				},
				get duplicateInstance() {
					return (container as any).__vue__.duplicateInstance;
				},
				get getCenterOfCraft() {
					return (container as any).__vue__.getCenterOfCraft;
				},
				get getCraftResponse() {
					return (container as any).__vue__.getCraftResponse;
				},
				get getEventCoords() {
					return (container as any).__vue__.getEventCoords;
				},
				get goToAppStore() {
					return (container as any).__vue__.goToAppStore;
				},
				get hideElement() {
					return (container as any).__vue__.hideElement;
				},
				get mobileSelectElement() {
					return (container as any).__vue__.mobileSelectElement;
				},
				get moveInstance() {
					return (container as any).__vue__.moveInstance;
				},
				get onResize() {
					return (container as any).__vue__.onResize;
				},
				get playInstanceSound() {
					return (container as any).__vue__.playInstanceSound;
				},
				get removeCurrentHover() {
					return (container as any).__vue__.removeCurrentHover;
				},
				get reset() {
					return (container as any).__vue__.reset;
				},
				get saveItems() {
					return (container as any).__vue__.saveItems;
				},
				get selectElement() {
					return (container as any).__vue__.selectElement;
				},
				get selectInstance() {
					return (container as any).__vue__.selectInstance;
				},
				get setInstancePosition() {
					return (container as any).__vue__.setInstancePosition;
				},
				get setInstanceZIndex() {
					return (container as any).__vue__.setInstanceZIndex;
				},
				get setPinwheelCoords() {
					return (container as any).__vue__.setPinwheelCoords;
				},
				get toggleDarkMode() {
					return (container as any).__vue__.toggleDarkMode;
				},
				get toggleSound() {
					return (container as any).__vue__.toggleSound;
				},
			}),
		);
	}
	if (window.location.hostname === 'neal.fun' && window.location.pathname === '/infinite-craft/') {
		if (document.readyState === 'complete') {
			getState(resolve);
		} else {
			window.addEventListener(
				'load',
				() => {
					getState(resolve);
				},
				{ once: true },
			);
		}
	} else {
		resolve(null);
	}
});

export const data: Promise<{
	deleteSound: any;
	discoveries: string[];
	discoverySound: any;
	elements: Element[];
	errorSound: any;
	filteredElements: Element[];
	hasCrafted: boolean;
	hoverId: number;
	instanceId: number;
	instanceSound: any;
	instanceSoundRate: number;
	instances: Instance[];
	isActive: boolean;
	isAndroid: boolean;
	isDarkMode: boolean;
	isDeleting: boolean;
	isIOS: boolean;
	isMobile: boolean;
	isMuted: boolean;
	mobileIsCrafting: boolean;
	mouseDown: boolean;
	moveListener: any;
	rewardSound: any;
	searchQuery: string;
	searchResults: Element[];
	selectedInstance: Instance | any;
	showControlFade: boolean;
	showDiscoveredOnly: boolean;
	sidebarSize: number;
	sortBy: 'time' | 'name' | 'emoji';
	sortedElements: Element[];
	sorts: ('time' | 'name' | 'emoji')[];
}> = new Promise((resolve) => {
	function getData(resolve) {
		dom.container.then((container) =>
			resolve({
				get deleteSound() {
					return (container as any).__vue__._data.deleteSound;
				},
				get discoveries() {
					return (container as any).__vue__._data.discoveries;
				},
				get discoverySound() {
					return (container as any).__vue__._data.discoverySound;
				},
				get elements() {
					return (container as any).__vue__._data.elements;
				},
				get errorSound() {
					return (container as any).__vue__._data.errorSound;
				},
				get filteredElements() {
					return (container as any).__vue__.filteredElements;
				},
				get hasCrafted() {
					return (container as any).__vue__._data.hasCrafted;
				},
				get hoverId() {
					return (container as any).__vue__._data.hoverId;
				},
				get instanceId() {
					return (container as any).__vue__._data.instanceId;
				},
				get instanceSound() {
					return (container as any).__vue__._data.instanceSound;
				},
				get instanceSoundRate() {
					return (container as any).__vue__._data.instanceSoundRate;
				},
				get instances() {
					return (container as any).__vue__._data.instances;
				},
				get isActive() {
					return (container as any).__vue__._data.isActive;
				},
				get isAndroid() {
					return (container as any).__vue__._data.isAndroid;
				},
				get isDarkMode() {
					return (container as any).__vue__._data.isDarkMode;
				},
				get isDeleting() {
					return (container as any).__vue__._data.isDeleting;
				},
				get isIOS() {
					return (container as any).__vue__._data.isIOS;
				},
				get isMobile() {
					return (container as any).__vue__._data.isMobile;
				},
				get isMuted() {
					return (container as any).__vue__._data.isMuted;
				},
				get mobileIsCrafting() {
					return (container as any).__vue__._data.mobileIsCrafting;
				},
				get mouseDown() {
					return (container as any).__vue__._data.mouseDown;
				},
				get moveListener() {
					return (container as any).__vue__._data.moveListener;
				},
				get rewardSound() {
					return (container as any).__vue__._data.rewardSound;
				},
				get searchQuery() {
					return (container as any).__vue__._data.searchQuery;
				},
				get searchResults() {
					return (container as any).__vue__.searchResults;
				},
				get selectedInstance() {
					return (container as any).__vue__._data.selectedInstance;
				},
				get showControlFade() {
					return (container as any).__vue__._data.showControlFade;
				},
				get showDiscoveredOnly() {
					return (container as any).__vue__._data.showDiscoveredOnly;
				},
				get sidebarSize() {
					return (container as any).__vue__._data.sidebarSize;
				},
				get sortBy() {
					return (container as any).__vue__._data.sortBy;
				},
				get sortedElements() {
					return (container as any).__vue__.sortedElements;
				},
				get sorts() {
					return (container as any).__vue__._data.sorts;
				},
			}),
		);
	}
	if (window.location.hostname === 'neal.fun' && window.location.pathname === '/infinite-craft/') {
		if (document.readyState === 'complete') {
			getData(resolve);
		} else {
			window.addEventListener(
				'load',
				() => {
					getData(resolve);
				},
				{ once: true },
			);
		}
	} else {
		resolve(null);
	}
});

export const watchers: Promise<{
	filteredElements: {
		getter: () => Element[];
		value: Element[];
	};
	mobileItemRows: {
		getter: () => [Element[], Element[], Element[], Element[]];
		value: [Element[], Element[], Element[], Element[]];
	};
	searchResults: {
		getter: () => Element[];
		value: Element[];
	};
	showPinwheel: {
		getter: () => boolean;
		value: boolean;
	};
	sortedElements: {
		getter: () => Element[];
		value: Element[];
	};
}> = new Promise((resolve) => {
	function getWatchers(resolve) {
		dom.container.then((container) =>
			resolve({
				get filteredElements() {
					return (container as any).__vue__._computedWatchers.filteredElements;
				},
				get mobileItemRows() {
					return (container as any).__vue__._computedWatchers.mobileItemRows;
				},
				get searchResults() {
					return (container as any).__vue__._computedWatchers.searchResults;
				},
				get showPinwheel() {
					return (container as any).__vue__._computedWatchers.showPinwheel;
				},
				get sortedElements() {
					return (container as any).__vue__._computedWatchers.sortedElements;
				},
			}),
		);
	}
	if (window.location.hostname === 'neal.fun' && window.location.pathname === '/infinite-craft/') {
		if (document.readyState === 'complete') {
			getWatchers(resolve);
		} else {
			window.addEventListener(
				'load',
				() => {
					getWatchers(resolve);
				},
				{ once: true },
			);
		}
	} else {
		resolve(null);
	}
});
