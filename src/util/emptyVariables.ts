import type {EmptyObject, EmptyString} from '@joookiwi/type'
import {CollectionConstants}           from '@joookiwi/collection'

/** A zone to encapculate the empty fields and to be used directly in an "import" statement */
export namespace Empty {

    /** An empty string */
    export const EMPTY_STRING: EmptyString  = ''
    /** An empty object with nothing (and not modifiable) */
    export const EMPTY_OBJECT: EmptyObject  = Object.freeze({},)
    /** An empty callback */
    export const EMPTY_CALLBACK: () => void = Object.freeze(() => {},)

    export const EMPTY_ARRAY                = CollectionConstants.EMPTY_ARRAY
    export const EMPTY_SET                  = CollectionConstants.EMPTY_SET
    export const EMPTY_MAP                  = CollectionConstants.EMPTY_MAP
    export const EMPTY_COLLECTION_HOLDER    = CollectionConstants.EMPTY_COLLECTION_HOLDER

}
