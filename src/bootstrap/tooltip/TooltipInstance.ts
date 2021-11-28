import {Tooltip} from 'bootstrap';

import type {TooltipEventCallbackReceived, TooltipEventsReceived} from './Tooltip.types';

import {BootstrapInstance} from '../BootstapInstance';

export class TooltipInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapInstance<typeof TooltipInstance,Tooltip, Tooltip.Options, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<Tooltip.Options> = {};

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

    public onShow(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(Tooltip.Events.show, callback,);
    }

    public onShown(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(Tooltip.Events.shown, callback,);
    }

    public onHide(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(Tooltip.Events.hide, callback,);
    }

    public onHidden(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(Tooltip.Events.hidden, callback,);
    }

    public onInserted(callback: TooltipEventCallbackReceived,): this {
        return this.__addEventListener(Tooltip.Events.inserted, callback,);
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): TooltipInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(TooltipInstance, element);
    }

}
