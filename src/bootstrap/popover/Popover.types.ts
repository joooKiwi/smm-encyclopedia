import type {Popover as BootstrapPopover} from 'bootstrap'

import type {BootstrapConfiguration, PossibleIds}                                                                                                  from 'bootstrap/Bootstrap.types'
import type {BootstrapWithBasicEventCallback, BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEvents, BootstrapWithBasicEventsReceived} from 'bootstrap/BootstrapWithBasicEventsInstance.types'
import type {PopoverInstance}                                                                                                                      from 'bootstrap/popover/PopoverInstance'

export type PopoverConfiguration<ID extends PossibleIds = PossibleIds, > = BootstrapConfiguration<BootstrapPopover.Options, PopoverEvents, ID>
export type SpanPopoverConfiguration = PopoverConfiguration<string>

/**
 * @see https://getbootstrap.com/docs/5.1/components/popovers/#events
 */
export interface PopoverEvents<I extends PopoverInstance = PopoverInstance, >
    extends BootstrapWithBasicEvents<I> {

    /** @see Popover.Events.show*/
    readonly show: PopoverEventCallback<I>

    /** @see Popover.Events.shown */
    readonly shown: PopoverEventCallback<I>

    /** @see Popover.Events.hide */
    readonly hide: PopoverEventCallback<I>

    /** @see Popover.Events.hidden */
    readonly hidden: PopoverEventCallback<I>

    /** @see Popover.Events.inserted */
    readonly inserted: PopoverEventCallback<I>

}

export type PopoverOrientation = | 'auto' | 'top' | 'bottom' | 'left' | 'right'

export type PopoverEventCallback<I extends PopoverInstance = PopoverInstance, > = BootstrapWithBasicEventCallback<I>
export type PopoverEventsReceived<I extends PopoverInstance = PopoverInstance, > = BootstrapWithBasicEventsReceived<I, PopoverEvents<I>>
export type PopoverEventCallbackReceived<I extends PopoverInstance = PopoverInstance, > = BootstrapWithBasicEventCallbackReceived<I, PopoverEventCallback<I>>
