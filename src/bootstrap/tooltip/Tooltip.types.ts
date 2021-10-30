import type {Tooltip as BootstrapTooltip} from 'bootstrap';

import type {TooltipInstance}        from './TooltipInstance';
import type {BootstrapConfiguration} from '../Bootstrap.types';

export type TooltipConfiguration = BootstrapConfiguration<BootstrapTooltip.Options, TooltipEvents>;

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
