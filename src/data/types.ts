export type Element = {
	text: string;
	emoji: string;
	discovered: boolean;
	hidden?: boolean;
};
export type Instance = {
	id: number;
	text: string;
	emoji: string;
	disabled: boolean;
	discovered: boolean;
	hide?: boolean;
	zIndex?: number;
	isNew?: boolean;
	fromPanel?: boolean;
	hasMoved?: boolean;
	left?: number;
	top?: number;
	offsetX?: number;
	offsetY?: number;
	width?: number;
	height?: number;
	numLines?: number;
	elem?: HTMLDivElement;
};
export type Position = { x: number; y: number };
export type CraftResponse = { result: string; emoji?: string; isNew: boolean };

export type Options = { at?: 'HEAD' | 'TAIL'; once?: boolean; priority?: number };
export type OptionsCancelable = { at?: 'HEAD' | 'TAIL'; cancel?: boolean; once?: boolean; priority?: number };
export type OptionsReturnable = { at?: 'HEAD' | 'TAIL'; cancelWithReturn?: boolean; once?: boolean; priority?: number };
export type EventType =
	| 'CraftEvent'
	| 'CraftInstancesEvent'
	| 'DuplicateEvent'
	| 'ElementSelectedEvent'
	| 'InstanceCreatedEvent'
	| 'InstanceDroppedEvent'
	| 'InstanceElemAssignedEvent'
	| 'InstanceSelectedEvent';
export type EventListener = {
	at: 'HEAD' | 'TAIL';
	cancel: boolean;
	callback: (...args: unknown[]) => unknown;
	once: boolean;
	priority: number;
	uuid: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VirtualDOM<T> = T & { __vue__: any };
