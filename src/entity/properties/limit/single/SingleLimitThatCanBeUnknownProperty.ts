import type {PropertyThatCanBeUnknown} from '../../../_properties/PropertyThatCanBeUnknown';
import type {SingleLimitProperty}      from './SingleLimitProperty';

export interface SingleLimitThatCanBeUnknownProperty<T, IS_UNKNOWN extends boolean = boolean, >
    extends SingleLimitProperty<| T | null>, PropertyThatCanBeUnknown<| T | null, IS_UNKNOWN> {

}
