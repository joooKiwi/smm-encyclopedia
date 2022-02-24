import type {PossibleAmount}              from './ClassWithAmount';
import type {PossibleComment}             from './ClassWithComment';
import type {PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder';
import type {PropertyWithEverything}      from './PropertyWithEverything';

import {PropertyContainer} from './Property.container';

export class PropertyWithEverythingContainer<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyContainer<T, IS_UNKNOWN, AMOUNT, COMMENT>
    implements PropertyWithEverything<T, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,);
    }

}
