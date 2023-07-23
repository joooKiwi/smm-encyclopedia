import type {ComponentOptions} from 'bootstrap/js/dist/base-component'

export interface BootstrapConfigurationWithNoOption<EVENTS, ID extends PossibleIds = PossibleIds, > {

    readonly elementId: ID

    readonly on?: Partial<EVENTS>

}

export interface BootstrapConfiguration<OPTION extends ComponentOptions, EVENTS, ID extends PossibleIds = PossibleIds, >
    extends BootstrapConfigurationWithNoOption<EVENTS, ID> {

    readonly option: Partial<OPTION>

}

export type PossibleIds = | string | string[]
