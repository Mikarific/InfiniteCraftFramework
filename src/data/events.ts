import type { CraftResponse, EventListener, Instance, OptionsCancelable, OptionsReturnable, Options } from './types';
import { events } from './internal';

function insertEvent(listeners: EventListener[], event: EventListener) {
	let low = 0;
	let high = listeners.length;

	while (low < high) {
		const mid = (low + high) >>> 1;
		if (listeners[mid].priority <= event.priority || (listeners[mid].at === 'HEAD' && event.at === 'TAIL')) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}
	listeners.splice(low, 0, event);
}

export function ready(callback: () => void) {
	if (window.location.hostname === 'neal.fun' && window.location.pathname === '/infinite-craft/') {
		if (document.readyState === 'complete') {
			callback();
		} else {
			window.addEventListener('load', () => callback(), { once: true });
		}
	}
}

type CraftInstancesCallback<T extends OptionsCancelable> =
	T['at'] extends 'HEAD' ?
		(
			first: Instance,
			second: Instance,
			setFirst: (instance: Instance) => void,
			setSecond: (instance: Instance) => void,
		) => void
	:	(first: Instance, second: Instance) => void;
export function onCraftInstances<T extends OptionsCancelable>(callback: CraftInstancesCallback<T>, options?: T) {
	const listeners = events.get('CraftInstancesEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancel ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'CraftInstancesEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type CraftCallback<T extends OptionsReturnable> =
	T['at'] extends 'HEAD' ?
		T['cancelWithReturn'] extends true ?
			(
				first: Instance,
				second: Instance,
				setFirst: (instance: Instance) => void,
				setSecond: (instance: Instance) => void,
			) => CraftResponse
		:	(
				first: Instance,
				second: Instance,
				setFirst: (instance: Instance) => void,
				setSecond: (instance: Instance) => void,
			) => CraftResponse | void
	: T['cancelWithReturn'] extends true ? (first: Instance, second: Instance) => CraftResponse
	: (first: Instance, second: Instance, result: CraftResponse) => CraftResponse | void;
export function onCraft<T extends OptionsReturnable>(callback: CraftCallback<T>, options?: T) {
	const listeners = events.get('CraftEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancelWithReturn ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'CraftEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type DuplicateCallback<T extends OptionsCancelable> =
	T['at'] extends 'HEAD' ? (instance: Instance, setInstance: (instance: Instance) => void) => void
	:	(instance: Instance) => void;
export function onDuplicate<T extends OptionsCancelable>(callback: DuplicateCallback<T>, options?: T) {
	const listeners = events.get('DuplicateEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancel ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'DuplicateEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type ElementSelectedCallback<T extends OptionsCancelable> =
	T['at'] extends 'HEAD' ?
		(
			mouseEvent: MouseEvent,
			element: Element,
			setMouseEvent: (mouseEvent: MouseEvent) => void,
			setElement: (element: Element) => void,
		) => void
	:	(mouseEvent: MouseEvent, element: Element) => void;
export function onElementSelected<T extends OptionsCancelable>(callback: ElementSelectedCallback<T>, options?: T) {
	const listeners = events.get('ElementSelectedEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancel ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'ElementSelectedEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type InstanceSelectedCallback<T extends OptionsCancelable> =
	T['at'] extends 'HEAD' ?
		(
			mouseEvent: MouseEvent,
			instance: Instance,
			setMouseEvent: (mouseEvent: MouseEvent) => void,
			setInstance: (instance: Instance) => void,
		) => void
	:	(mouseEvent: MouseEvent, instance: Instance) => void;
export function onInstanceSelected<T extends OptionsCancelable>(callback: InstanceSelectedCallback<T>, options?: T) {
	const listeners = events.get('InstanceSelectedEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancel ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'InstanceSelectedEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type InstanceDroppedCallback<T extends OptionsCancelable> =
	T['at'] extends 'HEAD' ? (event: MouseEvent | TouchEvent, setEvent: (event: MouseEvent | TouchEvent) => void) => void
	:	(event: MouseEvent | TouchEvent) => void;
export function onInstanceDropped<T extends OptionsCancelable>(callback: InstanceDroppedCallback<T>, options?: T) {
	const listeners = events.get('InstanceDroppedEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancel ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'InstanceDroppedEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type DarkModeToggledCallback = () => void;
export function onDarkModeToggled(callback: DarkModeToggledCallback, options?: OptionsCancelable) {
	const listeners = events.get('DarkModeToggledEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancel ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'DarkModeToggledEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type SoundToggledCallback = () => void;
export function onSoundToggled(callback: SoundToggledCallback, options?: OptionsCancelable) {
	const listeners = events.get('SoundToggledEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: options?.cancel ?? false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'SoundToggledEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type InstanceCreatedCallback<T extends Options> =
	T['at'] extends 'HEAD' ? (instance: Instance, setInstance: (instance: Instance) => void) => void
	:	(instance: Instance) => void;
export function onInstanceCreated<T extends Options>(callback: InstanceCreatedCallback<T>, options?: T) {
	const listeners = events.get('InstanceCreatedEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'InstanceCreatedEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}

type InstanceElemAssignedCallback<T extends Options> =
	T['at'] extends 'HEAD' ?
		(
			instance: Instance,
			domInstance: HTMLDivElement,
			setInstance: (instance: Instance) => void,
			setDOMInstance: (domInstance: HTMLDivElement) => void,
		) => void
	:	(instance: Instance, domInstance: HTMLDivElement) => void;
export function onInstanceElemAssigned<T extends Options>(callback: InstanceElemAssignedCallback<T>, options?: T) {
	const listeners = events.get('InstanceElemAssignedEvent');
	const uuid = crypto.randomUUID();
	insertEvent(listeners, {
		at: options?.at ?? 'TAIL',
		cancel: false,
		callback,
		once: options?.once ?? false,
		priority: options?.priority ?? 1000,
		uuid,
	});
	return () => {
		events.set(
			'InstanceElemAssignedEvent',
			listeners.filter((l) => l.uuid !== uuid),
		);
	};
}
