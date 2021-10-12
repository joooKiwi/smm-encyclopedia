import type {BooleanPropertyThatCanBeUnknown}        from './PropertyThatCanBeUnknown';
import type {PossibleBoolean, PossibleValueReceived} from './Property';

import {PropertyThatCanBeUnknownContainer} from './PropertyThatCanBeUnknownContainer';

export class BooleanPropertyThatCanBeUnknownContainer<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<B, IS_UNKNOWN>
    implements BooleanPropertyThatCanBeUnknown<B, IS_UNKNOWN> {

    public constructor(value: PossibleValueReceived<B>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,);
    }

}
