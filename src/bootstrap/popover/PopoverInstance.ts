import {Popover} from 'bootstrap';

import type {PopoverEventCallbackReceived, PopoverEvents, PopoverEventsReceived} from './Popover.types';

import {BootstrapInstance}                from '../BootstapInstance';
import {BootstrapWithBasicEventsInstance} from '../BootstrapWithBasicEventsInstance';

export class PopoverInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<typeof PopoverInstance, Popover, Popover.Options, ELEMENT, ID> {

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

    protected override _createInstance(options: Partial<Popover.Options>,): Popover {
        return Popover.getOrCreateInstance(this.element, options,);
    }


    #addEventListener(type: string, callback: PopoverEventCallbackReceived<this>,): this {
        if (callback != null)
            this.element.addEventListener(type, event => callback(this, event,));
        return this;
    }

    /**
     * @param callbacks
     * @see https://getbootstrap.com/docs/5.1/components/popovers/#events
     */
    protected override _on(callbacks: Partial<PopoverEvents<this>>,): this {
        if (callbacks.inserted != null)
            this.onInserted(callbacks.inserted);
        return this;
    }

    /**
     * @param callback
     * @see Popover.Events.show
     */
    public override onShow(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.SHOW_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.shown
     */
    public override onShown(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.SHOWN_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.hide
     */
    public override onHide(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.HIDE_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.hidden
     */
    public override onHidden(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.HIDDEN_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Popover.Events.inserted
     */
    public onInserted(callback: PopoverEventCallbackReceived<this>,): this {
        return this.#addEventListener(PopoverInstance.INSERTED_EVENT, callback,);
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): PopoverInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(PopoverInstance, element);
    }

}
