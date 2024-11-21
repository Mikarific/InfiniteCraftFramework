import type { CraftResponse, Element, Instance, Position, VirtualDOM } from './types';
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
					return (container as VirtualDOM<HTMLDivElement>).__vue__.$nextTick;
				},
				get calcInstanceSize() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.calcInstanceSize;
				},
				get changeSort() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.changeSort;
				},
				get checkControlsBlur() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.checkControlsBlur;
				},
				get checkIfMobile() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.checkIfMobile;
				},
				get checkIntersections() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.checkIntersections;
				},
				get clearInstances() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.clearInstances;
				},
				get craft() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.craft;
				},
				get dropElement() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.dropElement;
				},
				get duplicateInstance() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.duplicateInstance;
				},
				get getCenterOfCraft() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.getCenterOfCraft;
				},
				get getCraftResponse() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.getCraftResponse;
				},
				get getEventCoords() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.getEventCoords;
				},
				get goToAppStore() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.goToAppStore;
				},
				get hideElement() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.hideElement;
				},
				get mobileSelectElement() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.mobileSelectElement;
				},
				get moveInstance() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.moveInstance;
				},
				get onResize() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.onResize;
				},
				get playInstanceSound() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.playInstanceSound;
				},
				get removeCurrentHover() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.removeCurrentHover;
				},
				get reset() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.reset;
				},
				get saveItems() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.saveItems;
				},
				get selectElement() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.selectElement;
				},
				get selectInstance() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.selectInstance;
				},
				get setInstancePosition() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.setInstancePosition;
				},
				get setInstanceZIndex() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.setInstanceZIndex;
				},
				get setPinwheelCoords() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.setPinwheelCoords;
				},
				get toggleDarkMode() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.toggleDarkMode;
				},
				get toggleSound() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.toggleSound;
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
	deleteSound: Howl;
	discoveries: string[];
	discoverySound: Howl;
	elements: Element[];
	errorSound: Howl;
	filteredElements: Element[];
	hasCrafted: boolean;
	hoverId: number;
	instanceId: number;
	instanceSound: Howl;
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
	rewardSound: Howl;
	searchQuery: string;
	searchResults: Element[];
	selectedInstance: Instance | null;
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
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.deleteSound;
				},
				get discoveries() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.discoveries;
				},
				get discoverySound() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.discoverySound;
				},
				get elements() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.elements;
				},
				get errorSound() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.errorSound;
				},
				get filteredElements() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.filteredElements;
				},
				get hasCrafted() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.hasCrafted;
				},
				get hoverId() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.hoverId;
				},
				get instanceId() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.instanceId;
				},
				get instanceSound() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.instanceSound;
				},
				get instanceSoundRate() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.instanceSoundRate;
				},
				get instances() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.instances;
				},
				get isActive() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.isActive;
				},
				get isAndroid() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.isAndroid;
				},
				get isDarkMode() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.isDarkMode;
				},
				get isDeleting() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.isDeleting;
				},
				get isIOS() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.isIOS;
				},
				get isMobile() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.isMobile;
				},
				get isMuted() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.isMuted;
				},
				get mobileIsCrafting() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.mobileIsCrafting;
				},
				get mouseDown() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.mouseDown;
				},
				get rewardSound() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.rewardSound;
				},
				get searchQuery() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.searchQuery;
				},
				get searchResults() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.searchResults;
				},
				get selectedInstance() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.selectedInstance;
				},
				get showControlFade() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.showControlFade;
				},
				get showDiscoveredOnly() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.showDiscoveredOnly;
				},
				get sidebarSize() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.sidebarSize;
				},
				get sortBy() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.sortBy;
				},
				get sortedElements() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__.sortedElements;
				},
				get sorts() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._data.sorts;
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
					return (container as VirtualDOM<HTMLDivElement>).__vue__._computedWatchers.filteredElements;
				},
				get mobileItemRows() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._computedWatchers.mobileItemRows;
				},
				get searchResults() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._computedWatchers.searchResults;
				},
				get showPinwheel() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._computedWatchers.showPinwheel;
				},
				get sortedElements() {
					return (container as VirtualDOM<HTMLDivElement>).__vue__._computedWatchers.sortedElements;
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
