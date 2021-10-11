import type {PropertyThatCanBeUnknown} from './PropertyThatCanBeUnknown';

import {AbstractProperty} from './AbstractProperty';

export class PropertyThatCanBeUnknownContainer<T, IS_UNKNOWN extends boolean = boolean, >
    extends AbstractProperty<T, IS_UNKNOWN>
    implements PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

    public constructor(value: T, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,);
    }

}
