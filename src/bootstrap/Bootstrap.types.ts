import type {ComponentOptions} from 'bootstrap/js/dist/base-component'

export interface BootstrapConfigurationWithNoOption<EVENTS, ID extends string = string, > {

    readonly elementId: ID

    readonly on?: Partial<EVENTS>

}

export interface BootstrapConfiguration<OPTION extends ComponentOptions, EVENTS, ID extends string = string, >
    extends BootstrapConfigurationWithNoOption<EVENTS, ID> {

    readonly option?: Partial<OPTION>

}
