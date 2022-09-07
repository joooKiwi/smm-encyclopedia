import type {BootstrapColor}  from '../../../../bootstrap/Bootstrap.types';
import type {ReactProperties} from '../../../../util/react/ReactProperties';

export interface GroupButtonProperties<T, >
    extends ReactProperties {

    elements: readonly T[]

    isChoiceGroup: boolean

    isOutline?: boolean

    isVertical?: boolean

    color: BootstrapColor

    groupName: string

}
