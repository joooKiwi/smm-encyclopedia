import type {Tooltip} from 'bootstrap'

import type {BootstrapConfiguration} from 'bootstrap/Bootstrap.types'
import type {TooltipEvents}          from 'bootstrap/tooltip/TooltipEvents'

export type TooltipConfiguration = BootstrapConfiguration<Tooltip.Options, TooltipEvents<any>>
