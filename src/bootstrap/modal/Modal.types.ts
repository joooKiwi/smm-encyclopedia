import type {Modal as BootstrapModal} from 'bootstrap'

import type {BootstrapConfiguration}                                                                                                               from 'bootstrap/Bootstrap.types'
import type {BootstrapWithBasicEventCallback, BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEvents, BootstrapWithBasicEventsReceived} from 'bootstrap/BootstrapWithBasicEventsInstance.types'
import type {ModalInstance}                                                                                                                        from 'bootstrap/modal/ModalInstance'

export type ModalConfiguration = BootstrapConfiguration<BootstrapModal.Options, ModalEvents>

export interface ModalEvents<I extends ModalInstance = ModalInstance, >
    extends BootstrapWithBasicEvents<I> {

    /** @see Modal.Events.show */
    readonly show: ModalEventCallback<I>

    /** @see Modal.Events.shown */
    readonly shown: ModalEventCallback<I>

    /** @see Modal.Events.hide */
    readonly hide: ModalEventCallback<I>

    /** @see Modal.Events.hidden */
    readonly hidden: ModalEventCallback<I>

    /** @see Modal.Events.hidePrevented */
    readonly hidePrevented: ModalEventCallback<I>

}

export type PossibleModalSize = | 'sm' | 'md' | 'lg' | 'xl'

export type ModalEventCallback<I extends ModalInstance = ModalInstance, > = BootstrapWithBasicEventCallback<I>
export type ModalEventsReceived<I extends ModalInstance = ModalInstance, > = BootstrapWithBasicEventsReceived<I, ModalEvents<I>>
export type ModalEventCallbackReceived<I extends ModalInstance = ModalInstance, > = BootstrapWithBasicEventCallbackReceived<I, ModalEventCallback<I>>
