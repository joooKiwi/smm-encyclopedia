import type Modal from 'bootstrap/js/dist/modal'

import type {BootstrapConfiguration} from 'bootstrap/Bootstrap.types'
import type {ModalEvents}            from 'bootstrap/modal/ModalEvents'

export type ModalConfiguration<ID extends string = string, > = BootstrapConfiguration<Modal.Options, ModalEvents<any>, ID>
