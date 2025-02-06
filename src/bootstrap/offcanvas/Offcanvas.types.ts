import type {Offcanvas} from 'bootstrap'

import type {BootstrapConfiguration} from 'bootstrap/Bootstrap.types'
import type {OffcanvasEvents}        from 'bootstrap/offcanvas/OffcanvasEvents'

export type OffcanvasConfiguration<ID extends string = string, > = BootstrapConfiguration<Offcanvas.Options, OffcanvasEvents<any>, ID>// eslint-disable-line @typescript-eslint/no-explicit-any
