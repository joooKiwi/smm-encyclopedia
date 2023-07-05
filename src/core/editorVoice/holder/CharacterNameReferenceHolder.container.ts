import type {Lazy}    from '@joookiwi/lazy'
import {lazy, lazyOf} from '@joookiwi/lazy'

import type {CharacterNameReferenceHolder, PossibleCharacterNameReferences_Received} from 'core/editorVoice/holder/CharacterNameReferenceHolder'

import type {CharacterNames} from 'core/characterName/CharacterNames'
import {Import}              from 'util/DynamicImporter'
import {EMPTY_ARRAY}         from 'util/emptyVariables'

/**
 * @classWithDynamicImport {@link CharacterNames}
 */
export class CharacterNameReferenceHolderContainer
    implements CharacterNameReferenceHolder {

    readonly #references: Lazy<readonly CharacterNames[]>

    public constructor(references: PossibleCharacterNameReferences_Received,) {
        this.#references = typeof references == 'string'
            ? lazy(() => {
                const reference = references
                return Import.CharacterNames.hasValueByName(reference,)
                    ? [Import.CharacterNames.getValueByName(reference,),]
                    : EMPTY_ARRAY
            })
            : lazyOf(references,)
    }

    //region -------------------- Getter methods --------------------


    public get references(): readonly CharacterNames[] {
        return this.#references.value
    }

    //endregion -------------------- Getter methods --------------------

}
