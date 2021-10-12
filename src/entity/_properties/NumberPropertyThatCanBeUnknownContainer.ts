import type {NumberPropertyThatCanBeUnknown}        from './PropertyThatCanBeUnknown';
import type {PossibleNumber, PossibleValueReceived} from './Property';

import {PropertyThatCanBeUnknownContainer} from './PropertyThatCanBeUnknownContainer';

export class NumberPropertyThatCanBeUnknownContainer<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<N, IS_UNKNOWN>
    implements NumberPropertyThatCanBeUnknown<N, IS_UNKNOWN> {

    public constructor(value: PossibleValueReceived<N>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,);
    }

}
