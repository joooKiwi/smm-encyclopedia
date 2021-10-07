import {Popover} from 'bootstrap';

import type {PopoverEventCallbackReceived, PopoverEventsReceived} from './Popover.types';

import {BootstrapInstance} from '../BootstapInstance';

export class PopoverInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapInstance<typeof PopoverInstance, Popover, Popover.Options, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<Popover.Options> = {};

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

    public onShow(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(Popover.Events.show, callback,);
    }

    public onShown(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(Popover.Events.shown, callback,);
    }

    public onHide(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(Popover.Events.hide, callback,);
    }

    public onHidden(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(Popover.Events.hidden, callback,);
    }

    public onInserted(callback: PopoverEventCallbackReceived,): this {
        return this.__addEventListener(Popover.Events.inserted, callback,);
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: ID | ELEMENT,): PopoverInstance {
        return BootstrapInstance._getInstance(PopoverInstance, element);
    }

}
