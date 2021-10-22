import type {PossibleString}                 from '../Property';
import type {StringPropertyThatCanBeUnknown} from '../PropertyThatCanBeUnknown';
import type {ValueOrCallbackValue}           from '../../../util/holder/ObjectHolder';

import {PropertyThatCanBeUnknownContainer} from '../PropertyThatCanBeUnknown.container';

export class StringPropertyThatCanBeUnknownContainer<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<S, IS_UNKNOWN>
    implements StringPropertyThatCanBeUnknown<S, IS_UNKNOWN> {

    public constructor(value: ValueOrCallbackValue<S>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,);
    }

}
