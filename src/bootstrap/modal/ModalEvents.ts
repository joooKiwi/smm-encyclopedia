import type {ModalEventCallback, ModalInstanceDeclaration} from 'bootstrap/modal/ModalInstance.declaration'

/**
 * The events associated to the {@link bootstrap.Modal Modal} events
 *
 * @see https://getbootstrap.com/docs/5.2/components/modal/#events
 */
export interface ModalEvents<I extends ModalInstanceDeclaration<any, any> = ModalInstanceDeclaration, > {// eslint-disable-line @typescript-eslint/no-explicit-any

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
