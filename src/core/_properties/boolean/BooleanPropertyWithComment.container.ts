import type {BooleanPropertyWithComment}  from 'core/_properties/PropertyWithComment'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrBoolean, NullOrString} from 'util/types/nullable'

import {PropertyWithCommentContainer} from 'core/_properties/PropertyWithComment.container'

export class BooleanPropertyWithCommentContainer<B extends NullOrBoolean = NullOrBoolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<B, COMMENT>
    implements BooleanPropertyWithComment<B, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, comment: COMMENT,) {
        super(value, comment,)
    }

}
