import type {ComponentOptions} from 'bootstrap/js/dist/base-component';

export interface BootstrapConfigurationWithNoOption<EVENTS, ID extends PossibleIds = PossibleIds, > {

    elementId: ID

    on?: Partial<EVENTS>

}

export interface BootstrapConfiguration<OPTION extends ComponentOptions, EVENTS, ID extends PossibleIds = PossibleIds, >
    extends BootstrapConfigurationWithNoOption<EVENTS, ID> {

    option: Partial<OPTION>

}

export type PossibleIds = | string | string[];
export type BootstrapColor
    = | 'primary' | 'secondary'
      | 'light' | 'dark'
      | 'success' | 'info' | 'warning' | 'danger'
      | 'white' | 'gray' | 'gray-dark'
      | 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan';
export type PossibleBootstrapDimension = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
