import type {Tooltip as BootstrapTooltip} from 'bootstrap';
import type {TooltipInstance}             from './TooltipInstance';

export interface TooltipConfiguration {

    elementId: string

    option: Partial<BootstrapTooltip.Options>

    on?: Partial<TooltipEvents>

}

export interface TooltipEvents {

    show: TooltipEventCallback

    shown: TooltipEventCallback

    hide: TooltipEventCallback

    hidden: TooltipEventCallback

    inserted: TooltipEventCallback

}

export type TooltipEventCallback = (instance: TooltipInstance, event: Event,) => void;
export type TooltipEventsReceived = | Partial<TooltipEvents> | null | undefined;
export type TooltipEventCallbackReceived = | TooltipEventCallback | null | undefined;
