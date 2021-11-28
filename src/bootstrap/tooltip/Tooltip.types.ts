import type {Tooltip as BootstrapTooltip} from 'bootstrap';

import type {BootstrapConfiguration} from '../Bootstrap.types';
import type {TooltipInstance}        from './TooltipInstance';

export type TooltipConfiguration = BootstrapConfiguration<BootstrapTooltip.Options, TooltipEvents>;

/**
 * @see https://getbootstrap.com/docs/5.1/components/tooltips/#events
 */
export interface TooltipEvents {

    /**
     * @see Tooltip.Events.show
     */
    show: TooltipEventCallback

    /**
     * @see Tooltip.Events.shown
     */
    shown: TooltipEventCallback

    /**
     * @see Tooltip.Events.hide
     */
    hide: TooltipEventCallback

    /**
     * @see Tooltip.Events.hidden
     */
    hidden: TooltipEventCallback

    /**
     * @see Tooltip.Events.inserted
     */
    inserted: TooltipEventCallback

}

export type TooltipEventCallback = (instance: TooltipInstance, event: Event,) => void;
export type TooltipEventsReceived = | Partial<TooltipEvents> | null | undefined;
export type TooltipEventCallbackReceived = | TooltipEventCallback | null | undefined;
