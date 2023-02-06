import type {CharacterNameReferenceHolder} from 'core/editorVoice/holder/CharacterNameReferenceHolder'
import type {EntityReferenceHolder}        from 'core/editorVoice/holder/EntityReferenceHolder'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyReferenceHolder
    implements EntityReferenceHolder, CharacterNameReferenceHolder {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyReferenceHolder

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly references = EMPTY_ARRAY

}
