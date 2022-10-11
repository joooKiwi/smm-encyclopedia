import {Modal} from 'bootstrap'

import type {ModalEventCallbackReceived, ModalEvents, ModalEventsReceived} from './Modal.types'

import {BootstrapInstance}                from '../BootstapInstance'
import {BootstrapWithBasicEventsInstance} from '../BootstrapWithBasicEventsInstance'

export class ModalInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<typeof ModalInstance, Modal, Modal.Options, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Modal.Options = Modal.Default
    /** @see Modal.Events.show */
    public static readonly SHOW_EVENT = 'show.bs.modal' as Modal.Events.show
    /** @see Modal.Events.shown */
    public static readonly SHOWN_EVENT = 'shown.bs.modal' as Modal.Events.shown
    /** @see Modal.Events.hide */
    public static readonly HIDE_EVENT = 'hide.bs.modal' as Modal.Events.hide
    /** @see Modal.Events.hidden */
    public static readonly HIDDEN_EVENT = 'hidden.bs.modal' as Modal.Events.hidden
    /** @see Modal.Events.hidePrevented */
    public static readonly HIDE_PREVENTED_EVENT = 'hidePrevented.bs.modal' as Modal.Events.hidePrevented

    public constructor(element: | ID | ELEMENT, options: Partial<Modal.Options> = ModalInstance.DEFAULT_OPTIONS, callbacks: ModalEventsReceived = null,) {
        super(ModalInstance, element, options,)
        this.on(callbacks)
    }

    protected override _createInstance(options: Partial<Modal.Options>,): Modal {
        return Modal.getOrCreateInstance(this.element, options,)
    }


    #addEventListener(type: string, callback: ModalEventCallbackReceived<this>,): this {
        if (callback != null)
            this.element.addEventListener(type, event => callback(this, event,))
        return this
    }

    /**
     * @param callbacks
     * @see https://getbootstrap.com/docs/5.1/components/modal/#events
     */
    protected override _on(callbacks: Partial<ModalEvents<this>>,): this {
        if (callbacks.hidePrevented != null)
            this.onHidePrevented(callbacks.hidePrevented)
        return this
    }

    /**
     * @param callback
     * @see Modal.Events.show
     */
    public override onShow(callback: ModalEventCallbackReceived<this>,): this {
        return this.#addEventListener(ModalInstance.SHOW_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Modal.Events.shown
     */
    public override onShown(callback: ModalEventCallbackReceived<this>,): this {
        return this.#addEventListener(ModalInstance.SHOWN_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Modal.Events.hide
     */
    public override onHide(callback: ModalEventCallbackReceived<this>): this {
        return this.#addEventListener(ModalInstance.HIDE_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Modal.Events.hidden
     */
    public override onHidden(callback: ModalEventCallbackReceived<this>,): this {
        return this.#addEventListener(ModalInstance.HIDDEN_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Modal.Events.hidePrevented
     */
    public onHidePrevented(callback: ModalEventCallbackReceived<this>,): this {
        return this.#addEventListener(ModalInstance.HIDE_PREVENTED_EVENT, callback,)
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): ModalInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(ModalInstance, element)
    }

}
