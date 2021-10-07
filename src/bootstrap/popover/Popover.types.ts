import type {Popover as BootstrapPopover} from 'bootstrap';

import type {PopoverInstance} from './PopoverInstance';

export interface PopoverConfiguration {

    elementId: string

    option: Partial<BootstrapPopover.Options>

    on?: Partial<PopoverEvents>

}

export interface PopoverEvents {

    show: PopoverEventCallback

    shown: PopoverEventCallback

    hide: PopoverEventCallback

    hidden: PopoverEventCallback

    inserted: PopoverEventCallback

}

export type PopoverEventCallback = (instance: PopoverInstance, event: Event,) => void;
export type PopoverEventsReceived = | Partial<PopoverEvents> | null | undefined;
export type PopoverEventCallbackReceived = | PopoverEventCallback | null | undefined;
