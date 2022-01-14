import type {Tooltip as BootstrapTooltip} from 'bootstrap';

import type {BootstrapConfiguration}                                                                                                               from '../Bootstrap.types';
import type {BootstrapWithBasicEventCallback, BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEvents, BootstrapWithBasicEventsReceived} from '../BootstrapWithBasicEventsInstance.types';
import type {TooltipInstance}                                                                                                                      from './TooltipInstance';

export type TooltipConfiguration = BootstrapConfiguration<BootstrapTooltip.Options, TooltipEvents>;

/**
 * @see https://getbootstrap.com/docs/5.1/components/tooltips/#events
 */
export interface TooltipEvents<I extends TooltipInstance = TooltipInstance, >
    extends BootstrapWithBasicEvents<I> {

    /**
     * @see Tooltip.Events.show
     */
    show: TooltipEventCallback<I>

    /**
     * @see Tooltip.Events.shown
     */
    shown: TooltipEventCallback<I>

    /**
     * @see Tooltip.Events.hide
     */
    hide: TooltipEventCallback<I>

    /**
     * @see Tooltip.Events.hidden
     */
    hidden: TooltipEventCallback<I>

    /**
     * @see Tooltip.Events.inserted
     */
    inserted: TooltipEventCallback<I>

}

export type TooltipEventCallback<I extends TooltipInstance = TooltipInstance, > = BootstrapWithBasicEventCallback<I>;
export type TooltipEventsReceived<I extends TooltipInstance = TooltipInstance, > = BootstrapWithBasicEventsReceived<I, TooltipEvents<I>>;
export type TooltipEventCallbackReceived<I extends TooltipInstance = TooltipInstance, > = BootstrapWithBasicEventCallbackReceived<I, TooltipEventCallback<I>>;
