import type BaseComponent      from 'bootstrap/js/dist/base-component'
import type {ComponentOptions} from 'bootstrap/js/dist/base-component'

import type {BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEvents} from './BootstrapWithBasicEventsInstance.types'
import type {StaticBootstrapInstance}                                           from './BootstrapInstance.types'

import {BootstrapInstance} from './BootstapInstance'

export abstract class BootstrapWithBasicEventsInstance<STATIC_INSTANCE extends StaticBootstrapInstance<OPTION>, INSTANCE extends BaseComponent, OPTION extends ComponentOptions, ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >
    extends BootstrapInstance<STATIC_INSTANCE, INSTANCE, OPTION, ELEMENT, ID> {

    protected constructor(instance: STATIC_INSTANCE, element: ID | ELEMENT, options: Partial<OPTION>) {
        super(instance, element, options)
    }


    public on(callbacks: Partial<BootstrapWithBasicEvents<this>> | null | undefined,): this {
        if (callbacks == null)
            return this

        if (callbacks.show != null)
            this.onShow(callbacks.show)
        if (callbacks.shown != null)
            this.onShown(callbacks.shown)
        if (callbacks.hide != null)
            this.onHide(callbacks.hide)
        if (callbacks.hidden != null)
            this.onHidden(callbacks.hidden)
        return this._on(callbacks)
    }

    protected abstract _on(callbacks: Partial<BootstrapWithBasicEvents<this>>,): this


    public abstract onShow(callback: BootstrapWithBasicEventCallbackReceived<this>,): this

    public abstract onShown(callback: BootstrapWithBasicEventCallbackReceived<this>,): this

    public abstract onHide(callback: BootstrapWithBasicEventCallbackReceived<this>,): this

    public abstract onHidden(callback: BootstrapWithBasicEventCallbackReceived<this>,): this

}
