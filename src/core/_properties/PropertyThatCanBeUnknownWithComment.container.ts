import type {PossibleComment}                     from './ClassWithComment';
import type {PossibleValueOnObjectHolder}         from '../../util/holder/ObjectHolder';
import type {PropertyThatCanBeUnknownWithComment} from './PropertyThatCanBeUnknownWithComment';

import {PropertyContainer} from './Property.container';
import {DEFAULT_AMOUNT}    from './Property';

export class PropertyThatCanBeUnknownWithCommentContainer<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyContainer<T, IS_UNKNOWN, DEFAULT_AMOUNT, COMMENT>
    implements PropertyThatCanBeUnknownWithComment<T, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,);
    }

}
