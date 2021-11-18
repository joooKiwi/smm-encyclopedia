import type {BootstrapColor} from '../../../../bootstrap/Bootstrap.types';
import type {ReactProperty}  from '../../../../util/react/ReactProperty';

export interface GroupButtonProperties<T>
    extends ReactProperty {

    elements: readonly T[]

    isChoiceGroup: boolean

    isOutline?: boolean

    isVertical?: boolean

    color: BootstrapColor

    groupName: string

}
