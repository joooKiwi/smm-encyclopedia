import type {StringPropertyWithComment}   from 'core/_properties/PropertyWithComment'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrString}                from 'util/types/nullable'

import {PropertyWithCommentContainer} from 'core/_properties/PropertyWithComment.container'

export class StringPropertyWithCommentContainer<S extends NullOrString = NullOrString, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<S, COMMENT>
    implements StringPropertyWithComment<S, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, comment: COMMENT,) {
        super(value, comment,)
    }

}
