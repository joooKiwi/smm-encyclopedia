import {Popover} from 'bootstrap'

import type {PopoverEventCallbackReceived, PopoverEvents, PopoverEventsReceived} from 'bootstrap/popover/Popover.types'

import {BootstrapInstance}                from 'bootstrap/BootstapInstance'
import {BootstrapWithBasicEventsInstance} from 'bootstrap/BootstrapWithBasicEventsInstance'

export class PopoverInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<typeof PopoverInstance, Popover, Popover.Options, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<Popover.Options> = {}
    /** @see Popover.Events.show */
    public static readonly SHOW_EVENT = `show${Popover.EVENT_KEY}` as Popover.Events.show
    /** @see Popover.Events.shown */
    public static readonly SHOWN_EVENT = `shown${Popover.EVENT_KEY}` as Popover.Events.shown
    /** @see Popover.Events.hide */
    public static readonly HIDE_EVENT = `hide${Popover.EVENT_KEY}` as Popover.Events.hide
    /** @see Popover.Events.hidden */
    public static readonly HIDDEN_EVENT = `hidden${Popover.EVENT_KEY}` as Popover.Events.hidden
    /** @see Popover.Events.inserted */
    public static readonly INSERTED_EVENT = `inserted${Popover.EVENT_KEY}` as Popover.Events.inserted

    public constructor(element: | ID | ELEMENT, options: Partial<Popover.Options> = PopoverInstance.DEFAULT_OPTIONS, callbacks: PopoverEventsReceived = null,) {
        super(PopoverInstance, element, options,)
        this.on(callbacks)
    }

    protected override _createInstance(options: Partial<Popover.Options>,): Popover {
        return Popover.getOrCreateInstance(this.element, options,)
    }


    #addEventListener(type: string, callback: PopoverEventCallbackReceived<this>,): this {
        if (callback != null)
            this.element.addEventListener(type, event => callback(this, event,))
        return this
    }

    /**
     * @param callbacks
     * @see https://getbootstrap.com/docs/5.1/components/popovers/#events
     */
    protected override _on(callbacks: Partial<PopoverEvents<this>>,): this {
        if (callbacks.inserted != null)
            this.onInserted(callbacks.inserted)
        return this
    }

    /**
     * @param callback
     * @see Popover.Events.show
     */
    public override onShow(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.SHOW_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Popover.Events.shown
     */
    public override onShown(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.SHOWN_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Popover.Events.hide
     */
    public override onHide(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.HIDE_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Popover.Events.hidden
     */
    public override onHidden(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.HIDDEN_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Popover.Events.inserted
     */
    public onInserted(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.INSERTED_EVENT, callback,)
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): PopoverInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(PopoverInstance, element)
    }

}
