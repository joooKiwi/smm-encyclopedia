import type Popover from 'bootstrap/js/dist/popover'

import type {BootstrapConfiguration} from 'bootstrap/Bootstrap.types'
import type {PopoverEvents}          from 'bootstrap/popover/PopoverEvents'

export type PopoverConfiguration<ID extends string = string, > = BootstrapConfiguration<Popover.Options, PopoverEvents, ID>
