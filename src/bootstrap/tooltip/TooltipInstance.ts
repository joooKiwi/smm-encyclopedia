import {Tooltip} from 'bootstrap';

import type {TooltipEventCallbackReceived, TooltipEventsReceived} from './Tooltip.types';

import {BootstrapInstance} from '../BootstapInstance';

export class TooltipInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapInstance<typeof TooltipInstance, Tooltip, Tooltip.Options, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<Tooltip.Options> = {};
    /**
     * @see Popover.Events.show
     */
    public static readonly SHOW_EVENT = Tooltip.Event.SHOW as Tooltip.Events.show;
    /**
     * @see Popover.Events.shown
     */
    public static readonly SHOWN_EVENT = Tooltip.Event.SHOWN as Tooltip.Events.shown;
    /**
     * @see Popover.Events.hide
     */
    public static readonly HIDE_EVENT = Tooltip.Event.HIDE as Tooltip.Events.hide;
    /**
     * @see Popover.Events.hidden
     */
    public static readonly HIDDEN_EVENT = Tooltip.Event.HIDDEN as Tooltip.Events.hidden;
    /**
     * @see Popover.Events.inserted
     */
    public static readonly INSERTED_EVENT = Tooltip.Event.INSERTED as Tooltip.Events.inserted;

    public constructor(element: | ID | ELEMENT, options: Partial<Tooltip.Options> = TooltipInstance.DEFAULT_OPTIONS, callbacks: TooltipEventsReceived = null,) {
        super(TooltipInstance, element, options,);
        this.on(callbacks);
    }

    protected _createInstance(options: Partial<Tooltip.Options>,): Tooltip {
        return Tooltip.getOrCreateInstance(this.element, options,);
    }


    private __addEventListener(type: string, callback: TooltipEventCallbackReceived,): this {
        if (callback != null)
            this.element.addEventListener(type, event => callback(this, event,));
        return this;
    }

    /**
     * @param callbacks
     * @see https://getbootstrap.com/docs/5.1/components/tooltips/#events
     */
    public on(callbacks: TooltipEventsReceived,): this {
        if (callbacks == null)
            return this;

        if (callbacks.show != null)
            this.onShow(callbacks.show);
        if (callbacks.shown != null)
            this.onShown(callbacks.shown);
        if (callbacks.hide != null)
            this.onHide(callbacks.hide);
        if (callbacks.hidden != null)
            this.onHidden(callbacks.hidden);
        if (callbacks.inserted != null)
            this.onInserted(callbacks.inserted);
        return this;
    }

    /**
     * @param callback
     * @see Tooltip.Events.show
     */
    public onShow(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(TooltipInstance.SHOW_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Tooltip.Events.shown
     */
    public onShown(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(TooltipInstance.SHOWN_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Tooltip.Events.hide
     */
    public onHide(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(TooltipInstance.HIDE_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Tooltip.Events.hidden
     */
    public onHidden(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(TooltipInstance.HIDDEN_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Tooltip.Events.inserted
     */
    public onInserted(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(TooltipInstance.INSERTED_EVENT, callback,);
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): TooltipInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(TooltipInstance, element);
    }

}
