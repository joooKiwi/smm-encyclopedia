import type {Popover as BootstrapPopover} from 'bootstrap';

export interface PopoverConfiguration {

    elementId: string

    option: Partial<BootstrapPopover.Options>

}
