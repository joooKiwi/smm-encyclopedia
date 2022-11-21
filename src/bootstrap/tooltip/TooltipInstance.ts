import {Tooltip} from 'bootstrap'

import type {TooltipEventCallbackReceived, TooltipEvents, TooltipEventsReceived} from './Tooltip.types'

import {BootstrapInstance}                from '../BootstapInstance'
import {BootstrapWithBasicEventsInstance} from '../BootstrapWithBasicEventsInstance'

export class TooltipInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<typeof TooltipInstance, Tooltip, Tooltip.Options, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<Tooltip.Options> = {}
    /** @see Popover.Events.show */
    public static readonly SHOW_EVENT = `show${Tooltip.EVENT_KEY}` as Tooltip.Events.show
    /** @see Popover.Events.shown */
    public static readonly SHOWN_EVENT = `shown${Tooltip.EVENT_KEY}` as Tooltip.Events.shown
    /** @see Popover.Events.hide */
    public static readonly HIDE_EVENT = `hide${Tooltip.EVENT_KEY}` as Tooltip.Events.hide
    /** @see Popover.Events.hidden */
    public static readonly HIDDEN_EVENT = `hidden${Tooltip.EVENT_KEY}` as Tooltip.Events.hidden
    /** @see Popover.Events.inserted */
    public static readonly INSERTED_EVENT = `inserted${Tooltip.EVENT_KEY}` as Tooltip.Events.inserted

    public constructor(element: | ID | ELEMENT, options: Partial<Tooltip.Options> = TooltipInstance.DEFAULT_OPTIONS, callbacks: TooltipEventsReceived = null,) {
        super(TooltipInstance, element, options,)
        this.on(callbacks)
    }

    protected _createInstance(options: Partial<Tooltip.Options>,): Tooltip {
        return Tooltip.getOrCreateInstance(this.element, options,)
    }


    #addEventListener(type: string, callback: TooltipEventCallbackReceived<this>,): this {
        if (callback != null)
            this.element.addEventListener(type, event => callback(this, event,))
        return this
    }

    /**
     * @param callbacks
     * @see https://getbootstrap.com/docs/5.1/components/tooltips/#events
     */
    protected override _on(callbacks: Partial<TooltipEvents<this>>,): this {
        if (callbacks.inserted != null)
            this.onInserted(callbacks.inserted)
        return this
    }

    /**
     * @param callback
     * @see Tooltip.Events.show
     */
    public override onShow(callback: TooltipEventCallbackReceived<this>,): this {
        return this.#addEventListener(TooltipInstance.SHOW_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Tooltip.Events.shown
     */
    public override onShown(callback: TooltipEventCallbackReceived<this>,): this {
        return this.#addEventListener(TooltipInstance.SHOWN_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Tooltip.Events.hide
     */
    public override onHide(callback: TooltipEventCallbackReceived<this>,): this {
        return this.#addEventListener(TooltipInstance.HIDE_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Tooltip.Events.hidden
     */
    public override onHidden(callback: TooltipEventCallbackReceived<this>,): this {
        return this.#addEventListener(TooltipInstance.HIDDEN_EVENT, callback,)
    }

    /**
     * @param callback
     * @see Tooltip.Events.inserted
     */
    public onInserted(callback: TooltipEventCallbackReceived<this>,): this {
        return this.#addEventListener(TooltipInstance.INSERTED_EVENT, callback,)
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): TooltipInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(TooltipInstance, element)
    }

}
