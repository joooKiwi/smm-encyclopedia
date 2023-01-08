import type BaseComponent      from 'bootstrap/js/dist/base-component'
import type {ComponentOptions} from 'bootstrap/js/dist/base-component'

import type {StaticBootstrapInstance}          from 'bootstrap/BootstrapInstance.types'
import type {BootstrapWithBasicEventsInstance} from 'bootstrap/BootstrapWithBasicEventsInstance'
import type {Nullable}                         from 'util/types/nullable'

export interface BootstrapWithBasicEvents<I extends GenericBootstrapInstanceWithEvent = GenericBootstrapInstanceWithEvent, > {

    show: BootstrapWithBasicEventCallback<I>

    shown: BootstrapWithBasicEventCallback<I>

    hide: BootstrapWithBasicEventCallback<I>

    hidden: BootstrapWithBasicEventCallback<I>

}

export type BootstrapWithBasicEventCallback<I extends GenericBootstrapInstanceWithEvent = GenericBootstrapInstanceWithEvent, > = (instance: I, event: Event,) => void
export type BootstrapWithBasicEventsReceived<I extends GenericBootstrapInstanceWithEvent = GenericBootstrapInstanceWithEvent, T extends BootstrapWithBasicEvents<I> = BootstrapWithBasicEvents<I>, > = Nullable<Partial<T>>
export type BootstrapWithBasicEventCallbackReceived<I extends GenericBootstrapInstanceWithEvent = GenericBootstrapInstanceWithEvent, C extends BootstrapWithBasicEventCallback<I> = BootstrapWithBasicEventCallback<I>, > = Nullable<C>

export type GenericBootstrapInstanceWithEvent<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, > = BootstrapWithBasicEventsInstance<StaticBootstrapInstance, BaseComponent, ComponentOptions, ELEMENT, ID>
