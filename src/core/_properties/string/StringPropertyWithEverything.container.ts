import type {PossibleAmount}               from '../ClassWithAmount';
import type {PossibleComment}              from '../ClassWithComment';
import type {PossibleString}               from '../Property';
import type {PossibleValueOnObjectHolder}  from '../../../util/holder/ObjectHolder';
import type {StringPropertyWithEverything} from '../PropertyWithEverything';

import {PropertyWithEverythingContainer} from '../PropertyWithEverything.container';

export class StringPropertyWithEverythingContainer<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithEverythingContainer<S, IS_UNKNOWN, AMOUNT, COMMENT>
    implements StringPropertyWithEverything<S, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,);
    }

}
