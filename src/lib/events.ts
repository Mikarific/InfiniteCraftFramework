import { dom } from '../data/dom';
import { events, flags } from '../data/internal';
import type { EventType, VirtualDOM } from '../data/types';

function handleEvent(type: EventType, args: unknown[], body: (args?: unknown[]) => void) {
	const listeners = events.get(type);
	if (listeners.length === 0) return body(args);

	let cancelled = false;
	let previousAt = 'HEAD';
	for (let i = listeners.length - 1; i >= 0; i--) {
		const listener = listeners[i];
		if (listener.cancel) cancelled = true;
		const shouldExecute = previousAt === 'HEAD' && listener.at === 'TAIL';
		if (!cancelled && shouldExecute) {
			body(args);
		}
		if (listener.at === 'HEAD') {
			listener.callback(
				...args,
				...args.map((_, index) => (val) => {
					args[index] = val;
				}),
			);
		} else {
			listener.callback(...args);
		}
		if (!cancelled && !shouldExecute && i === 0) {
			body(args);
		}
		previousAt = listener.at;
		if (listener.once) listeners.splice(i, 1);
	}
}

async function handleEventReturnable(type: EventType, args: unknown[], body: (args?: unknown[]) => unknown) {
	const listeners = events.get(type);
	if (listeners.length === 0) return await body(args);

	let cancelled = false;
	let previousAt = 'HEAD';
	let returnValue = null;
	for (let i = listeners.length - 1; i >= 0; i--) {
		const listener = listeners[i];
		if (listener.cancel) cancelled = true;
		const shouldExecute = previousAt === 'HEAD' && listener.at === 'TAIL';
		if (!cancelled && shouldExecute) {
			const bodyReturn = await body(args);
			if (bodyReturn) returnValue = bodyReturn;
		}
		if (listener.at === 'HEAD') {
			const callbackReturn = listener.callback(
				...args,
				...args.map((_, index) => (val) => {
					args[index] = val;
				}),
			);
			if (callbackReturn) returnValue = callbackReturn;
		} else {
			const callbackReturn = !listener.cancel ? listener.callback(...args, returnValue) : listener.callback(...args);
			if (callbackReturn) returnValue = callbackReturn;
		}
		if (!cancelled && !shouldExecute && i === 0) {
			const bodyReturn = await body(args);
			if (bodyReturn) returnValue = bodyReturn;
		}
		previousAt = listener.at;
		if (listener.once) listeners.splice(i, 1);
	}
	return returnValue;
}

async function registerEvents() {
	const state = ((await dom.container) as VirtualDOM<HTMLDivElement>).__vue__;
	const data = state._data;

	// Craft Instances Event
	events.set('CraftInstancesEvent', []);
	state.craft = new Proxy(state.craft, {
		apply: (target, thisArg, argsList) => {
			handleEvent('CraftInstancesEvent', argsList, (args) => Reflect.apply(target, thisArg, args));
		},
	});

	// Craft Event
	events.set('CraftEvent', []);
	state.getCraftResponse = new Proxy(state.getCraftResponse, {
		apply: (target, thisArg, argsList) => {
			return Promise.resolve(
				handleEventReturnable('CraftEvent', argsList, async (args) => await Reflect.apply(target, thisArg, args)),
			);
		},
	});

	// Duplicate Event
	events.set('DuplicateEvent', []);
	state.duplicateInstance = new Proxy(state.duplicateInstance, {
		apply: (target, thisArg, argsList) => {
			handleEvent('DuplicateEvent', argsList, (args) => Reflect.apply(target, thisArg, args));
		},
	});

	// Element Selected Event
	events.set('ElementSelectedEvent', []);
	state.selectElement = new Proxy(state.selectElement, {
		apply: (target, thisArg, argsList) => {
			handleEvent('ElementSelectedEvent', argsList, (args) => Reflect.apply(target, thisArg, args));
		},
	});

	// Instance Selected Event
	events.set('InstanceSelectedEvent', []);
	state.selectInstance = new Proxy(state.selectInstance, {
		apply: (target, thisArg, argsList) => {
			handleEvent('InstanceSelectedEvent', argsList, (args) => Reflect.apply(target, thisArg, args));
		},
	});

	// Instance Dropped Event
	events.set('InstanceDroppedEvent', []);
	window.removeEventListener('mouseup', state.dropElement);
	window.removeEventListener('touchend', state.dropElement);
	state.dropElement = new Proxy(state.dropElement, {
		apply: (target, thisArg, argsList) => {
			if (data.mouseDown && data.selectedInstance) {
				handleEvent('InstanceDroppedEvent', argsList, (args) => Reflect.apply(target, thisArg, args));
			} else {
				Reflect.apply(target, thisArg, argsList);
			}
		},
	});
	(await dom.container).addEventListener('mouseup', state.dropElement);
	(await dom.container).addEventListener('touchend', state.dropElement);

	// Dark Mode Toggled Event
	events.set('DarkModeToggledEvent', []);
	state.toggleDarkMode = new Proxy(state.toggleDarkMode, {
		apply: (target, thisArg, argsList) => {
			handleEvent('DarkModeToggledEvent', argsList, (args) => Reflect.apply(target, thisArg, args));
		},
	});

	// Sound Toggled Event
	events.set('SoundToggledEvent', []);
	state.toggleSound = new Proxy(state.toggleSound, {
		apply: (target, thisArg, argsList) => {
			handleEvent('SoundToggledEvent', argsList, (args) => Reflect.apply(target, thisArg, args));
		},
	});

	// Instance Created Event & Instance Elem Assigned Event
	events.set('InstanceCreatedEvent', []);
	events.set('InstanceElemAssignedEvent', []);
	const onInstanceCreatedProxy = (target, property, instance) => {
		if (isNaN(property) || typeof instance.elem !== 'undefined') return Reflect.set(target, property, instance);
		handleEvent('InstanceCreatedEvent', [instance], (args) => {
			const instance = args[0];
			Object.defineProperty(instance, 'elem', {
				set(elem) {
					handleEvent('InstanceElemAssignedEvent', [instance, elem], (args) => {
						const instance = args[0];
						const elem = args[1];
						Object.defineProperty(instance, 'elem', {
							value: elem,
							writable: true,
							configurable: true,
							enumerable: true,
						});
					});
				},
				configurable: true,
				enumerable: true,
			});
			Reflect.set(target, property, instance);
		});
		return true;
	};
	data.instances = new Proxy(data.instances, { set: onInstanceCreatedProxy });
	const { set: instancesSetter } = Object.getOwnPropertyDescriptor(data, 'instances');
	Object.defineProperty(data, 'instances', {
		set(instances) {
			return instancesSetter.call(this, new Proxy(instances, { set: onInstanceCreatedProxy }));
		},
		configurable: true,
		enumerable: true,
	});
}

if (
	window.location.hostname === 'neal.fun' &&
	window.location.pathname === '/infinite-craft/' &&
	!flags.eventsListening
) {
	if (document.readyState === 'complete') {
		registerEvents();
	} else {
		window.addEventListener('load', registerEvents, { once: true });
	}
	flags.eventsListening = true;
}
