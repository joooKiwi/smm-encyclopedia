import type {DEFAULT_AMOUNT, DEFAULT_IS_UNKNOWN} from './Property'
import type {NullOrString}                       from '../../util/types'
import type {PossibleValueOnObjectHolder}        from '../../util/holder/ObjectHolder'
import type {PropertyWithComment}                from './PropertyWithComment'

import {PropertyContainer} from './Property.container'

export class PropertyWithCommentContainer<T, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, DEFAULT_AMOUNT, COMMENT>
    implements PropertyWithComment<T, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, comment: COMMENT,) {
        super(value, comment,)
    }

}
