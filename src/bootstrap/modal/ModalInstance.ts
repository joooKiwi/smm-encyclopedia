import type {Nullable, NullOr} from '@joookiwi/type'
import Modal                   from 'bootstrap/js/dist/modal'

import type {EventHolder}                                  from 'bootstrap/event/EventHolder'
import type {ModalEventCallback, ModalInstanceDeclaration} from 'bootstrap/modal/ModalInstance.declaration'
import type {ModalEvents}                                  from 'bootstrap/modal/ModalEvents'

import {BootstrapWithBasicEventsInstance} from 'bootstrap/BootstrapWithBasicEventsInstance'
import {PassiveEventHolder}               from 'bootstrap/event/PassiveEventHolder'

export class ModalInstance<const ELEMENT extends HTMLElement = HTMLElement,
    const out ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<Modal, Modal.Options, ELEMENT, ID, Modal.Events.show, Modal.Events.shown, Modal.Events.hide, Modal.Events.hidden>
    implements ModalInstanceDeclaration<ELEMENT, ID> {

    //region -------------------- Fields --------------------

    public static DEFAULT_OPTIONS: Modal.Options = Modal.Default

    #onShowEvent?: NullOr<EventHolder<ELEMENT, Modal.Events.show>>
    #onShownEvent?: NullOr<EventHolder<ELEMENT, Modal.Events.shown>>
    #onHideEvent?: NullOr<EventHolder<ELEMENT, Modal.Events.hide>>
    #onHiddenEvent?: NullOr<EventHolder<ELEMENT, Modal.Events.hidden>>
    #onHidePreventedEvent?: NullOr<EventHolder<ELEMENT, Modal.Events.hidePrevented>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(element: | ID | ELEMENT, options: Partial<Modal.Options> = ModalInstance.DEFAULT_OPTIONS, callbacks: Nullable<Partial<ModalEvents<ModalInstance<ELEMENT, ID>>>> = null,) {
        super(element, options,)

        if (callbacks == null)
            return
        this.onShow(callbacks.show,)
            .onShown(callbacks.shown,)
            .onHide(callbacks.hide,)
            .onHidden(callbacks.hidden,)
            .onHidePrevented(callbacks.hidden,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public override get onShowEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.show>> {
        return this.#onShowEvent ?? null
    }

    public override set onShowEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.show>>,) {
        if (value == null) {
            this.onShowEvent?.destroy()
            this.#onShowEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShowEvent = new PassiveEventHolder(this.element, ModalInstance.SHOW_EVENT, event => value(this, event,),)
            return
        }
        this.#onShowEvent = value
    }


    public override get onShownEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.shown>> {
        return this.#onShownEvent ?? null
    }

    public override set onShownEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.shown>>,) {
        if (value == null) {
            this.onShownEvent?.destroy()
            this.#onShownEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShownEvent = new PassiveEventHolder(this.element, ModalInstance.SHOWN_EVENT, event => value(this, event,),)
            return
        }
        this.#onShownEvent = value
    }


    public override get onHideEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.hide>> {
        return this.#onHideEvent ?? null
    }

    public override set onHideEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hide>>,) {
        if (value == null) {
            this.onHideEvent?.destroy()
            this.#onHideEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHideEvent = new PassiveEventHolder(this.element, ModalInstance.HIDE_EVENT, event => value(this, event,),)
            return
        }
        this.#onHideEvent = value
    }


    public override get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.hidden>> {
        return this.#onHiddenEvent ?? null
    }

    public override set onHiddenEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hidden>>,) {
        if (value == null) {
            this.onHiddenEvent?.destroy()
            this.#onHiddenEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHiddenEvent = new PassiveEventHolder(this.element, ModalInstance.HIDDEN_EVENT, event => value(this, event,),)
            return
        }
        this.#onHiddenEvent = value
    }


    public get onHidePreventedEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.hidePrevented>> {
        return this.#onHidePreventedEvent ?? null
    }

    public set onHidePreventedEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hidePrevented>>,) {
        if (value == null) {
            this.onHidePreventedEvent?.destroy()
            this.#onHidePreventedEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHidePreventedEvent = new PassiveEventHolder(this.element, ModalInstance.HIDE_PREVENTED_EVENT, event => value(this, event,),)
            return
        }
        this.#onHidePreventedEvent = value
    }

    public onHidePrevented(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hidePrevented>>,): this {
        this.onHidePreventedEvent = value
        return this
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected override _createInstance(options: Partial<Modal.Options>,): Modal {
        return Modal.getOrCreateInstance(this.element, options,)
    }

    public override destroy(): void {
        this.onShowEvent = this.onShownEvent = this.onHideEvent = this.onHiddenEvent = this.onHidePreventedEvent = null

        // const element = this.element
        // element.addEventListener(ModalInstance.HIDDEN_EVENT, () => Modal.getInstance(element,)?.dispose(), {once: true, passive: true,},)
    }

    //endregion -------------------- Methods --------------------

}

export namespace ModalInstance {

    // export let DEFAULT_OPTIONS: Modal.Options = Modal.Default
    /** @see Modal.Events.show */
    export const SHOW_EVENT = 'show.bs.modal' as Modal.Events.show
    /** @see Modal.Events.shown */
    export const SHOWN_EVENT = 'shown.bs.modal' as Modal.Events.shown
    /** @see Modal.Events.hide */
    export const HIDE_EVENT = 'hide.bs.modal' as Modal.Events.hide
    /** @see Modal.Events.hidden */
    export const HIDDEN_EVENT = 'hidden.bs.modal' as Modal.Events.hidden
    /** @see Modal.Events.hidePrevented */
    export const HIDE_PREVENTED_EVENT = 'hidePrevented.bs.modal' as Modal.Events.hidePrevented

}
