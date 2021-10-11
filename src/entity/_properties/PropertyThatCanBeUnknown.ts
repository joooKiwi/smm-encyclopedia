import type {ClassThatCanBeUnknown} from './ClassThatCanBeUnknown';
import type {Property}              from './Property';

export interface PropertyThatCanBeUnknown<T, IS_UNKNOWN extends boolean = boolean, >
    extends Property<T>, ClassThatCanBeUnknown<IS_UNKNOWN> {

}
