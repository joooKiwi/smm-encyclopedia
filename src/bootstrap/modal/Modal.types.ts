import type {Modal as BootstrapModal} from 'bootstrap';

import type {BootstrapConfiguration}                                                                                                               from '../Bootstrap.types';
import type {BootstrapWithBasicEventCallback, BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEvents, BootstrapWithBasicEventsReceived} from '../BootstrapWithBasicEventsInstance.types';
import type {ModalInstance}                                                                                                                        from './ModalInstance';

export type ModalConfiguration = BootstrapConfiguration<BootstrapModal.Options, ModalEvents>;

export interface ModalEvents<I extends ModalInstance = ModalInstance, >
    extends BootstrapWithBasicEvents<I> {

    /**
     * @see Modal.Events.show
     */
    show: ModalEventCallback<I>

    /**
     * @see Modal.Events.shown
     */
    shown: ModalEventCallback<I>

    /**
     * @see Modal.Events.hide
     */
    hide: ModalEventCallback<I>

    /**
     * @see Modal.Events.hidden
     */
    hidden: ModalEventCallback<I>

    /**
     * @see Modal.Events.hidePrevented
     */
    hidePrevented: ModalEventCallback<I>

}

export type ModalEventCallback<I extends ModalInstance = ModalInstance, > = BootstrapWithBasicEventCallback<I>;
export type ModalEventsReceived<I extends ModalInstance = ModalInstance, > = BootstrapWithBasicEventsReceived<I, ModalEvents<I>>;
export type ModalEventCallbackReceived<I extends ModalInstance = ModalInstance, > = BootstrapWithBasicEventCallbackReceived<I, ModalEventCallback<I>>;
