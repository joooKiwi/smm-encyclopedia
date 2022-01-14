import type {Popover as BootstrapPopover} from 'bootstrap';

import type {BootstrapConfiguration, PossibleIds}                                                                                                  from '../Bootstrap.types';
import type {BootstrapWithBasicEventCallback, BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEvents, BootstrapWithBasicEventsReceived} from '../BootstrapWithBasicEventsInstance.types';
import type {PopoverInstance}                                                                                                                      from './PopoverInstance';

export type PopoverConfiguration<ID extends PossibleIds = PossibleIds, > = BootstrapConfiguration<BootstrapPopover.Options, PopoverEvents, ID>;
export type SpanPopoverConfiguration = PopoverConfiguration<string>;

/**
 * @see https://getbootstrap.com/docs/5.1/components/popovers/#events
 */
export interface PopoverEvents<I extends PopoverInstance = PopoverInstance, >
    extends BootstrapWithBasicEvents<I> {

    /**
     * @see Popover.Events.show
     */
    show: PopoverEventCallback<I>

    /**
     * @see Popover.Events.shown
     */
    shown: PopoverEventCallback<I>

    /**
     * @see Popover.Events.hide
     */
    hide: PopoverEventCallback<I>

    /**
     * @see Popover.Events.hidden
     */
    hidden: PopoverEventCallback<I>

    /**
     * @see Popover.Events.inserted
     */
    inserted: PopoverEventCallback<I>

}

export type PopoverEventCallback<I extends PopoverInstance = PopoverInstance, > = BootstrapWithBasicEventCallback<I>;
export type PopoverEventsReceived<I extends PopoverInstance = PopoverInstance, > = BootstrapWithBasicEventsReceived<I, PopoverEvents<I>>;
export type PopoverEventCallbackReceived<I extends PopoverInstance = PopoverInstance, > = BootstrapWithBasicEventCallbackReceived<I, PopoverEventCallback<I>>;
