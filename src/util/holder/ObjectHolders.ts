import type {ObjectHolder}                                   from 'util/holder/ObjectHolder'
import type {EmptyArray, EmptyMap, EmptyObject, EmptyString} from 'util/types/variables'

import {EMPTY_ARRAY, EMPTY_MAP, EMPTY_OBJECT, EMPTY_STRING} from 'util/emptyVariables'
import {ObjectHolderContainer}                              from 'util/holder/ObjectHolder.container'

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
    /** A callback holder that only return an empty {@link String string} */
    public static readonly EMPTY_STRING: ObjectHolder<EmptyString> = new ObjectHolderContainer(EMPTY_STRING)
    /** A callback holder that only return an empty {@link Array array} */
    public static readonly EMPTY_ARRAY: ObjectHolder<EmptyArray> = new ObjectHolderContainer(EMPTY_ARRAY)
    /** A callback holder that only return an empty {@link Map map} */
    public static readonly EMPTY_MAP: ObjectHolder<EmptyMap> = new ObjectHolderContainer<EmptyMap>(EMPTY_MAP)
    /** A callback holder that only return an empty {@link Object object} */
    public static readonly EMPTY_OBJECT: ObjectHolder<EmptyObject> = new ObjectHolderContainer(EMPTY_OBJECT)

}
