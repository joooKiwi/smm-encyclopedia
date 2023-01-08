import type BaseComponent      from 'bootstrap/js/dist/base-component'
import type {ComponentOptions} from 'bootstrap/js/dist/base-component'

import type {BootstrapInstance} from 'bootstrap/BootstapInstance'

export interface Template<INSTANCE extends GenericBootstrapInstance = GenericBootstrapInstance, > {

    id: Map<string, INSTANCE>

    element: Map<HTMLElement, INSTANCE>

}

export interface StaticBootstrapInstance<OPTION extends ComponentOptions = ComponentOptions, > {

    get DEFAULT_OPTIONS(): Partial<OPTION>

}

export type GenericBootstrapInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, > = BootstrapInstance<StaticBootstrapInstance, BaseComponent, ComponentOptions, ELEMENT, ID>
