import type {Popover as BootstrapPopover} from 'bootstrap';

import type {PopoverInstance}                     from './PopoverInstance';
import type {BootstrapConfiguration, PossibleIds} from '../Bootstrap.types';

export type PopoverConfiguration<ID extends PossibleIds = PossibleIds, > = BootstrapConfiguration<BootstrapPopover.Options, PopoverEvents, ID>;
export type SpanPopoverConfiguration = PopoverConfiguration<string>;

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
