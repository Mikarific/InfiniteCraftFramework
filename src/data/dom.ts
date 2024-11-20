function domPromise(func: () => any): Promise<any> {
	return new Promise((resolve) => {
		if (window.location.hostname === 'neal.fun' && window.location.pathname === '/infinite-craft/') {
			if (document.readyState === 'interactive') {
				resolve(func());
			} else {
				window.addEventListener(
					'DOMContentLoaded',
					() => {
						resolve(func());
					},
					{ once: true },
				);
			}
		} else {
			resolve(null);
		}
	});
}
function loadPromise(func: () => any): Promise<any> {
	return new Promise((resolve) => {
		if (window.location.hostname === 'neal.fun' && window.location.pathname === '/infinite-craft/') {
			if (document.readyState === 'complete') {
				resolve(func());
			} else {
				window.addEventListener(
					'load',
					() => {
						resolve(func());
					},
					{ once: true },
				);
			}
		} else {
			resolve(null);
		}
	});
}

const favicon: Promise<HTMLLinkElement> = domPromise(() => document.querySelector('link[rel="icon"]'));
const head: Promise<HTMLHeadElement> = domPromise(() => document.getElementsByTagName('head')[0]);
const body: Promise<HTMLBodyElement> = domPromise(() => document.querySelector('.infinite-craft-body'));
const container: Promise<HTMLDivElement> = domPromise(() => document.querySelector('.container'));
const nealFun: Promise<HTMLImageElement> = domPromise(() =>
	document.querySelector('.container > a > .site-title, .site-title'),
);
const sideControls: Promise<HTMLDivElement> = domPromise(() =>
	document.querySelector('.container > .side-controls, .side-controls'),
);
const sideControlsTrash: Promise<HTMLImageElement> = domPromise(() =>
	document.querySelector('.container > .side-controls > .trash, .trash'),
);
const sideControlsDarkMode: Promise<HTMLImageElement> = domPromise(() =>
	document.querySelector('.container > .side-controls > .dark-mode-icon, .dark-mode-icon'),
);
const sideControlsClear: Promise<HTMLImageElement> = domPromise(() =>
	document.querySelector('.container > .side-controls > .clear, .clear'),
);
const sideControlsSound: Promise<HTMLImageElement> = domPromise(() =>
	document.querySelector('.container > .side-controls > .sound, .sound'),
);
const sideControlsMobile: Promise<HTMLDivElement> = domPromise(() =>
	document.querySelector('.container > .side-controls-mobile, .side-controls-mobile'),
);
const sideControlsMobileDarkMode: Promise<HTMLImageElement> = domPromise(() =>
	document.querySelector('.container > .side-controls-mobile > .dark-mode-mobile, .dark-mode-mobile'),
);
const sideControlsMobileSound: Promise<HTMLImageElement> = domPromise(() =>
	document.querySelector('.container > .side-controls-mobile > .sound-mobile, .sound-mobile'),
);
const particles: Promise<HTMLCanvasElement> = domPromise(() =>
	document.querySelector('.container > .particles, .particles'),
);
const sidebar: Promise<HTMLDivElement> = domPromise(() => document.querySelector('.container > .sidebar, .sidebar'));
const sidebarInner: Promise<HTMLDivElement> = domPromise(() =>
	document.querySelector('.container > .sidebar > .sidebar-inner, .sidebar-inner'),
);
const items: Promise<HTMLDivElement> = domPromise(() =>
	document.querySelector('.container > .sidebar > .sidebar-inner > .items, .items'),
);
const itemsInner: Promise<HTMLDivElement> = loadPromise(() =>
	document.querySelector('.container > .sidebar > .sidebar-inner > .items > .items-inner, .items-inner'),
);
const instances: Promise<HTMLDivElement> = domPromise(() =>
	document.querySelector('.container > .instances, .instances'),
);
const instancesInner: Promise<HTMLDivElement> = domPromise(() =>
	document.querySelector('.container > .instances > div, .instances > div'),
);
const logo: Promise<HTMLImageElement> = domPromise(() => document.querySelector('.container > .logo, .logo'));
const reset: Promise<HTMLDivElement> = domPromise(() => document.querySelector('.container > .reset, .reset'));

export const dom = {
	favicon,
	head,
	body,
	container,
	nealFun,
	sideControls,
	sideControlsTrash,
	sideControlsDarkMode,
	sideControlsClear,
	sideControlsSound,
	sideControlsMobile,
	sideControlsMobileDarkMode,
	sideControlsMobileSound,
	particles,
	sidebar,
	sidebarInner,
	items,
	itemsInner,
	instances,
	instancesInner,
	logo,
	reset,
};
