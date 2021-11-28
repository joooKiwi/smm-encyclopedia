import {Popover} from 'bootstrap';

import type {PopoverEventCallbackReceived, PopoverEventsReceived} from './Popover.types';

import {BootstrapInstance} from '../BootstapInstance';

export class PopoverInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapInstance<typeof PopoverInstance, Popover, Popover.Options, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<Popover.Options> = {};
    /**
     * @see Popover.Events.show
     */
    public static readonly SHOW_EVENT = Popover.Event.SHOW as Popover.Events.show;
    /**
     * @see Popover.Events.shown
     */
    public static readonly SHOWN_EVENT = Popover.Event.SHOWN as Popover.Events.shown;
    /**
     * @see Popover.Events.hide
     */
    public static readonly HIDE_EVENT = Popover.Event.HIDE as Popover.Events.hide;
    /**
     * @see Popover.Events.hidden
     */
    public static readonly HIDDEN_EVENT = Popover.Event.HIDDEN as Popover.Events.hidden;
    /**
     * @see Popover.Events.inserted
     */
    public static readonly INSERTED_EVENT = Popover.Event.INSERTED as Popover.Events.inserted;

    public constructor(element: | ID | ELEMENT, options: Partial<Popover.Options> = PopoverInstance.DEFAULT_OPTIONS, callbacks: PopoverEventsReceived = null,) {
        super(PopoverInstance, element, options,);
        this.on(callbacks);
    }

    protected _createInstance(options: Partial<Popover.Options>,): Popover {
        return Popover.getOrCreateInstance(this.element, options,);
    }


    private __addEventListener(type: string, callback: PopoverEventCallbackReceived,): this {
        if (callback != null)
            this.element.addEventListener(type, event => callback(this, event,));
        return this;
    }

    /**
     * @param callbacks
     * @see https://getbootstrap.com/docs/5.1/components/popovers/#events
     */
    public on(callbacks: PopoverEventsReceived,): this {
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
     * @see Popover.Events.show
     */
    public onShow(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(PopoverInstance.SHOW_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.shown
     */
    public onShown(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(PopoverInstance.SHOWN_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.hide
     */
    public onHide(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(PopoverInstance.HIDE_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.hidden
     */
    public onHidden(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(PopoverInstance.HIDDEN_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.inserted
     */
    public onInserted(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(PopoverInstance.INSERTED_EVENT, callback,);
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): PopoverInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(PopoverInstance, element);
    }

}
