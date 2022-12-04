import type {ObjectHolder} from 'util/holder/ObjectHolder'

import {EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING} from 'util/emptyVariables'
import {ObjectHolderContainer}                   from 'util/holder/ObjectHolder.container'

export class ObjectHolders {

    private constructor() {
        throw new Error('This class cannot be instantiated.')
    }

    /** A callback holder that only return null */
    public static readonly NULL: ObjectHolder<null> = new ObjectHolderContainer(null)
    /** A callback holder that only return true */
    public static readonly TRUE: ObjectHolder<true> = new ObjectHolderContainer(true)
    /** A callback holder that only return false */
    public static readonly FALSE: ObjectHolder<false> = new ObjectHolderContainer(false)
    /** A callback holder that only return an empty string */
    public static readonly EMPTY_STRING: ObjectHolder<typeof EMPTY_STRING> = new ObjectHolderContainer(EMPTY_STRING)
    /** A callback holder that only return an empty array */
    public static readonly EMPTY_ARRAY: ObjectHolder<typeof EMPTY_ARRAY> = new ObjectHolderContainer(EMPTY_ARRAY)
    /** A callback holder that only return an empty object */
    public static readonly EMPTY_OBJECT: ObjectHolder<typeof EMPTY_OBJECT> = new ObjectHolderContainer(EMPTY_OBJECT)

}
