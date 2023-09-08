import type {ComponentOptions} from 'bootstrap/js/dist/base-component'
import {Offcanvas}             from 'bootstrap'

import type {OffcanvasEvents}                                      from 'bootstrap/offcanvas/OffcanvasEvents'
import type {OffcanvasEventCallback, OffcanvasInstanceDeclaration} from 'bootstrap/offcanvas/OffcanvasInstance.declaration'
import type {EventHolder}                                          from 'bootstrap/event/EventHolder'

import {BootstrapWithBasicEventsInstance} from 'bootstrap/BootstrapWithBasicEventsInstance'
import {PassiveEventHolder}               from 'bootstrap/event/PassiveEventHolder'

/**
 * A simple instance holder for a {@link bootstrap.Offcanvas Offcanvas}
 *
 * @see https://getbootstrap.com/docs/5.2/components/offcanvas
 */
export class OffcanvasInstance<const ELEMENT extends HTMLElement = HTMLElement,
    const out ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<Offcanvas, ComponentOptions, ELEMENT, ID, Offcanvas.Events.show, Offcanvas.Events.shown, Offcanvas.Events.hide, Offcanvas.Events.hidden>
    implements OffcanvasInstanceDeclaration<ELEMENT, ID> {

    //region -------------------- Fields --------------------

    public static DEFAULT_OPTIONS: Partial<Offcanvas.Options> = {}
    /** @see Offcanvas.Events.show */
    public static readonly SHOW_EVENT = `show${Offcanvas.EVENT_KEY}` as Offcanvas.Events.show
    /** @see Offcanvas.Events.shown */
    public static readonly SHOWN_EVENT = `shown${Offcanvas.EVENT_KEY}` as Offcanvas.Events.shown
    /** @see Offcanvas.Events.hide */
    public static readonly HIDE_EVENT = `hide${Offcanvas.EVENT_KEY}` as Offcanvas.Events.hide
    /** @see Offcanvas.Events.hidden */
    public static readonly HIDDEN_EVENT = `hidden${Offcanvas.EVENT_KEY}` as Offcanvas.Events.hidden

    #onShowEvent?: NullOr<EventHolder<ELEMENT, Offcanvas.Events.show>>
    #onShownEvent?: NullOr<EventHolder<ELEMENT, Offcanvas.Events.shown>>
    #onHideEvent?: NullOr<EventHolder<ELEMENT, Offcanvas.Events.hide>>
    #onHiddenEvent?: NullOr<EventHolder<ELEMENT, Offcanvas.Events.hidden>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(element: | ID | ELEMENT, options: Partial<Offcanvas.Options> = OffcanvasInstance.DEFAULT_OPTIONS, callbacks: Nullable<Partial<OffcanvasEvents<OffcanvasInstance<ELEMENT, ID>>>> = null,) {
        super(element, options,)

        if (callbacks == null)
            return
        this.onShow(callbacks.show,)
            .onShown(callbacks.shown,)
            .onHide(callbacks.hide,)
            .onHidden(callbacks.hidden,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public override get onShowEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.show>> {
        return this.#onShowEvent ?? null
    }

    public override set onShowEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.show>>,) {
        if (value == null) {
            this.onShowEvent?.destroy()
            this.#onShowEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShowEvent = new PassiveEventHolder(this.element, OffcanvasInstance.SHOW_EVENT, event => value(this, event,),)
            return
        }
        this.#onShowEvent = value
    }


    public override get onShownEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.shown>> {
        return this.#onShownEvent ?? null
    }

    public override set onShownEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.shown>>,) {
        if (value == null) {
            this.onShownEvent?.destroy()
            this.#onShownEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShownEvent = new PassiveEventHolder(this.element, OffcanvasInstance.SHOWN_EVENT, event => value(this, event,),)
            return
        }
        this.#onShownEvent = value
    }


    public override get onHideEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.hide>> {
        return this.#onHideEvent ?? null
    }

    public override set onHideEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.hide>>,) {
        if (value == null) {
            this.onHideEvent?.destroy()
            this.#onHideEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHideEvent = new PassiveEventHolder(this.element, OffcanvasInstance.HIDE_EVENT, event => value(this, event,),)
            return
        }
        this.#onHideEvent = value
    }


    public override get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.hidden>> {
        return this.#onHiddenEvent ?? null
    }

    public override set onHiddenEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.hidden>>,) {
        if (value == null) {
            this.onHiddenEvent?.destroy()
            this.#onHiddenEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHiddenEvent = new PassiveEventHolder(this.element, OffcanvasInstance.HIDDEN_EVENT, event => value(this, event,),)
            return
        }
        this.#onHiddenEvent = value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected override _createInstance(options: Partial<Offcanvas.Options>,): Offcanvas {
        return Offcanvas.getOrCreateInstance(this.element, options,)
    }

    public override destroy(): void {
        this.onShowEvent = this.onShownEvent = this.onHideEvent = this.onHiddenEvent = null

        // const element = this.element
        // element.addEventListener(OffcanvasInstance.HIDDEN_EVENT, () => Offcanvas.getInstance(element,)?.dispose(), {once: true, passive: true,},)
    }

    //endregion -------------------- Methods --------------------

}
