import {Offcanvas} from 'bootstrap';

import type {ComponentOptions}                                        from 'bootstrap/js/dist/base-component';
import type {OffcanvasEventCallbackReceived, OffcanvasEventsReceived} from './Offcanvas.types';

import {BootstrapInstance} from '../BootstapInstance';

export class OffcanvasInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapInstance<typeof OffcanvasInstance, Offcanvas, ComponentOptions, ELEMENT, ID> {

    public static DEFAULT_OPTIONS: Partial<ComponentOptions> = {};
    /**
     * @see Offcanvas.Events.show
     */
    public static readonly SHOW_EVENT = 'show.bs.offcanvas' as Offcanvas.Events.show;
    /**
     * @see Offcanvas.Events.shown
     */
    public static readonly SHOWN_EVENT = 'shown.bs.offcanvas' as Offcanvas.Events.shown;
    /**
     * @see Offcanvas.Events.hide
     */
    public static readonly HIDE_EVENT = 'hide.bs.offcanvas' as Offcanvas.Events.hide;
    /**
     * @see Offcanvas.Events.hidden
     */
    public static readonly HIDDEN_EVENT = 'hidden.bs.offcanvas' as Offcanvas.Events.hidden;

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

    /**
     * @param callbacks
     * @see https://getbootstrap.com/docs/5.1/components/offcanvas/#events
     */
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

    /**
     * @param callback
     * @see Offcanvas.Events.show
     */
    public onShow(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(OffcanvasInstance.SHOW_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Offcanvas.Events.shown
     */
    public onShown(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(OffcanvasInstance.SHOWN_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Offcanvas.Events.hide
     */
    public onHide(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(OffcanvasInstance.HIDE_EVENT, callback,);
    }

    /**
     * @param callback
     * @see Offcanvas.Events.hidden
     */
    public onHidden(callback: OffcanvasEventCallbackReceived,): this {
        return this.__addEventListener(OffcanvasInstance.HIDDEN_EVENT, callback,);
    }


    public static getInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(element: | ELEMENT | ID,): OffcanvasInstance<ELEMENT, ID> {
        return BootstrapInstance._getInstance(OffcanvasInstance, element);
    }

}
