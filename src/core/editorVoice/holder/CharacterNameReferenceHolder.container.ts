import type {ObjectHolder}                                                           from 'util/holder/ObjectHolder'
import type {CharacterNameReferenceHolder, PossibleCharacterNameReferences_Received} from 'core/editorVoice/holder/CharacterNameReferenceHolder'

import type {CharacterNames}          from 'core/characterName/CharacterNames'
import {Import}                       from 'util/DynamicImporter'
import {EMPTY_ARRAY}                  from 'util/emptyVariables'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolderContainer}        from 'util/holder/ObjectHolder.container'

/**
 * @classWithDynamicImport {@link CharacterNames}
 */
export class CharacterNameReferenceHolderContainer
    implements CharacterNameReferenceHolder {

    //region -------------------- Fields --------------------

    readonly #references: ObjectHolder<readonly CharacterNames[]>

    //endregion -------------------- Fields --------------------

    public constructor(references: PossibleCharacterNameReferences_Received,) {
        this.#references = typeof references == 'string'
            ? new DelayedObjectHolderContainer(() => {
                const reference = references
                return Import.CharacterNames.hasValueByName(reference)
                    ? [Import.CharacterNames.getValueByName(reference),]
                    : EMPTY_ARRAY
            })
            : new ObjectHolderContainer(references)
    }

    //region -------------------- Getter methods --------------------


    public get references(): readonly CharacterNames[] {
        return this.#references.get
    }

    //endregion -------------------- Getter methods --------------------

}
