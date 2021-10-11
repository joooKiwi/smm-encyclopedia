import type {BooleanThatCanBeUnknownProperty} from './BooleanThatCanBeUnknownProperty';

import {PropertyThatCanBeUnknownContainer} from './PropertyThatCanBeUnknownContainer';
import {PossibleBoolean}                   from './BooleanProperty';

export class BooleanThatCanBeUnknownPropertyContainer<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<B, IS_UNKNOWN>
    implements BooleanThatCanBeUnknownProperty<B, IS_UNKNOWN> {

    public constructor(value: B, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,);
    }

}
