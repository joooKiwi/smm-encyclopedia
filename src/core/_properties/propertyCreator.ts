import type {DefaultAmount, DefaultComment, DefaultIsUnknown}                from 'core/_properties/Property'
import type {NotApplicableProperty, PropertyWithEverything, UnknownProperty} from 'core/_properties/PropertyWithEverything'

import {PropertyContainer} from 'core/_properties/Property.container'
import {UNKNOWN_CHARACTER} from 'util/commonVariables'

//region -------------------- Import from deconstruction --------------------

const {UNKNOWN_CONTAINER, NOT_APPLICABLE_CONTAINER,} = PropertyContainer

//endregion -------------------- Import from deconstruction --------------------

//FIXME: Remove those methods once the usage is no longer used

/** @deprecated Utilize an instance directly instead */
export function newBooleanContainer(value: NullOr<boolean>,): | NotApplicableProperty | PropertyWithEverything<boolean, DefaultIsUnknown, DefaultAmount, DefaultComment> {
    if (value == null)
        return NOT_APPLICABLE_CONTAINER
    return new PropertyContainer(value,)
}

/** @deprecated Utilize an instance directly instead */
export function newBooleanWithCommentCommentContainer<const T extends string, >(value: NullOr<| boolean | T>,): | NotApplicableProperty | PropertyWithEverything<boolean, DefaultIsUnknown, DefaultAmount, NullOr<T>> {
    if (value == null)
        return NOT_APPLICABLE_CONTAINER
    if (typeof value == 'string')
        return new PropertyContainer(true, value,)
    return new PropertyContainer(value,)
}

/** @deprecated Utilize an instance directly instead */
export function newBooleanWithCommentThatCanBeUnknownContainer<const T extends string, >(value: NullOr<| boolean | T | UnknownCharacter>,): | NotApplicableProperty | UnknownProperty | PropertyWithEverything<boolean, DefaultIsUnknown, DefaultAmount, NullOr<T>> {
    if (value == null)
        return NOT_APPLICABLE_CONTAINER
    if (value === UNKNOWN_CHARACTER)
        return UNKNOWN_CONTAINER
    if (typeof value == 'string')
        return new PropertyContainer(true, false, null, value,)
    return new PropertyContainer(value, false, null, null,)
}
