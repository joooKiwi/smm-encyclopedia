import type Tooltip from 'bootstrap/js/dist/tooltip'

import type {BootstrapConfiguration} from 'bootstrap/Bootstrap.types'
import type {TooltipEvents}          from 'bootstrap/tooltip/TooltipEvents'

export type TooltipConfiguration = BootstrapConfiguration<Tooltip.Options, TooltipEvents<any>>// eslint-disable-line @typescript-eslint/no-explicit-any
