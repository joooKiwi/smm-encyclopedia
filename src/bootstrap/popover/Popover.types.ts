import type {Popover as BootstrapPopover} from 'bootstrap';

import type {BootstrapConfiguration, PossibleIds} from '../Bootstrap.types';
import type {PopoverInstance}                     from './PopoverInstance';

export type PopoverConfiguration<ID extends PossibleIds = PossibleIds, > = BootstrapConfiguration<BootstrapPopover.Options, PopoverEvents, ID>;
export type SpanPopoverConfiguration = PopoverConfiguration<string>;

/**
 * @see https://getbootstrap.com/docs/5.1/components/popovers/#events
 */
export interface PopoverEvents {

    /**
     * @see Popover.Events.show
     */
    show: PopoverEventCallback

    /**
     * @see Popover.Events.shown
     */
    shown: PopoverEventCallback

    /**
     * @see Popover.Events.hide
     */
    hide: PopoverEventCallback

    /**
     * @see Popover.Events.hidden
     */
    hidden: PopoverEventCallback

    /**
     * @see Popover.Events.inserted
     */
    inserted: PopoverEventCallback

}

export type PopoverEventCallback = (instance: PopoverInstance, event: Event,) => void;
export type PopoverEventsReceived = | Partial<PopoverEvents> | null | undefined;
export type PopoverEventCallbackReceived = | PopoverEventCallback | null | undefined;
