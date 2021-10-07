import type {ComponentOptions} from 'bootstrap/js/dist/base-component';
import {Offcanvas}             from 'bootstrap';

import type {OffcanvasEventCallbackReceived, OffcanvasEventsReceived} from './Offcanvas.types';

import {BootstrapInstance} from '../BootstapInstance';

export class OffcanvasInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapInstance<typeof OffcanvasInstance, Offcanvas, ComponentOptions, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<ComponentOptions> = {};

    public constructor(element: | ID | ELEMENT, callbacks: OffcanvasEventsReceived = null,) {
        super(OffcanvasInstance, element, OffcanvasInstance.DEFAULT_OPTIONS,);
        this.on(callbacks);
    }

    protected _createInstance(): Offcanvas {
        return Offcanvas.getOrCreateInstance(this.element,);
    }


    private __addEventListener(type: string, callback: OffcanvasEventCallbackReceived,): this {
        if (callback != null)
            this.element.addEventListener(type, event => callback(this, event,));
        return this;
    }

    public on(callbacks: OffcanvasEventsReceived,): this {
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
        return this;
    }

    public onShow(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(Offcanvas.Events.show, callback,);
    }

    public onShown(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(Offcanvas.Events.shown, callback,);
    }

    public onHide(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(Offcanvas.Events.hide, callback,);
    }

    public onHidden(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(Offcanvas.Events.hidden, callback,);
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: ID | ELEMENT,): OffcanvasInstance {
        return BootstrapInstance._getInstance(OffcanvasInstance, element);
    }

}
