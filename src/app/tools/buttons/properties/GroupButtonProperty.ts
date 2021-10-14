import type {ReactProperty} from '../../../../util/react/ReactProperty';

//TODO change to GroupButtonProperty
export interface GroupButtonComponents<T>
    extends ReactProperty {

    elements: readonly T[]

    isChoiceGroup: boolean

    isOutline?: boolean

    isVertical?: boolean

    color: BootstrapColor

    groupName: string

}

export type BootstrapColor = | 'primary' | 'secondary'
                             | 'light' | 'dark'
                             | 'success' | 'info' | 'warning' | 'danger'
                             | 'white' | 'gray' | 'gray-dark'
                             | 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan';
