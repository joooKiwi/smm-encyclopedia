import type {Tooltip as BootstrapTooltip} from 'bootstrap'

import type {BootstrapConfiguration}                                                                                                               from 'bootstrap/Bootstrap.types'
import type {BootstrapWithBasicEventCallback, BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEvents, BootstrapWithBasicEventsReceived} from 'bootstrap/BootstrapWithBasicEventsInstance.types'
import type {TooltipInstance}                                                                                                                      from 'bootstrap/tooltip/TooltipInstance'

export type TooltipConfiguration = BootstrapConfiguration<BootstrapTooltip.Options, TooltipEvents>

/**
 * @see https://getbootstrap.com/docs/5.1/components/tooltips/#events
 */
export interface TooltipEvents<I extends TooltipInstance = TooltipInstance, >
    extends BootstrapWithBasicEvents<I> {

    /** @see Tooltip.Events.show */
    readonly show: TooltipEventCallback<I>

    /** @see Tooltip.Events.shown */
    readonly shown: TooltipEventCallback<I>

    /** @see Tooltip.Events.hide */
    readonly hide: TooltipEventCallback<I>

    /** @see Tooltip.Events.hidden */
    readonly hidden: TooltipEventCallback<I>

    /** @see Tooltip.Events.inserted */
    readonly inserted: TooltipEventCallback<I>

}

export type TooltipEventCallback<I extends TooltipInstance = TooltipInstance, > = BootstrapWithBasicEventCallback<I>
export type TooltipEventsReceived<I extends TooltipInstance = TooltipInstance, > = BootstrapWithBasicEventsReceived<I, TooltipEvents<I>>
export type TooltipEventCallbackReceived<I extends TooltipInstance = TooltipInstance, > = BootstrapWithBasicEventCallbackReceived<I, TooltipEventCallback<I>>
