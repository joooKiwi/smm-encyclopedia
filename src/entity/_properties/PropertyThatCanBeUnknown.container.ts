import type {PropertyThatCanBeUnknown} from './PropertyThatCanBeUnknown';
import type {ValueOrCallbackValue}     from '../../util/holder/ObjectHolder';

import {PropertyContainer} from './Property.container';

export class PropertyThatCanBeUnknownContainer<T, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyContainer<T, IS_UNKNOWN>
    implements PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

    public constructor(value: ValueOrCallbackValue<T>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,);
    }

}
