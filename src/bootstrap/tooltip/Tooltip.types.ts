import type {Tooltip as BootstrapTooltip} from 'bootstrap';

export interface TooltipConfiguration {

    elementId: string

    option: Partial<BootstrapTooltip.Options>

}