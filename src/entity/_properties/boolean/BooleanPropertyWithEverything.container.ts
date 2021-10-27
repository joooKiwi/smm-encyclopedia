import type {BooleanPropertyWithEverything} from '../PropertyWithEverything';
import type {PossibleAmount}                from '../ClassWithAmount';
import type {PossibleBoolean}               from '../Property';
import type {PossibleComment}               from '../ClassWithComment';
import type {ValueOrCallbackValue}          from '../../../util/holder/ObjectHolder';

import {PropertyWithEverythingContainer} from '../PropertyWithEverything.container';

export class BooleanPropertyWithEverythingContainer<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithEverythingContainer<B, IS_UNKNOWN, AMOUNT, COMMENT>
    implements BooleanPropertyWithEverything<B, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallbackValue<B>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,);
    }

}
