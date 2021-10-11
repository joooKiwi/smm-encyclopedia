import type {PropertyThatCanBeUnknown} from '../../../_properties/PropertyThatCanBeUnknown';
import type {SingleLimitProperty}      from './SingleLimitProperty';

export interface SingleLimitThatCanBeUnknownProperty<T>
    extends SingleLimitProperty<| T | null>, PropertyThatCanBeUnknown<| T | null> {

}
