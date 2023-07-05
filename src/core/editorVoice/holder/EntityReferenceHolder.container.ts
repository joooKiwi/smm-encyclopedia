import type {Lazy}    from '@joookiwi/lazy'
import {lazy, lazyOf} from '@joookiwi/lazy'

import type {EntityReferenceHolder, PossibleEntityReferences_Received} from 'core/editorVoice/holder/EntityReferenceHolder'

import type {Entities} from 'core/entity/Entities'
import {Import}        from 'util/DynamicImporter'
import {EMPTY_ARRAY}   from 'util/emptyVariables'

/**
 * @classWithDynamicImport {@link Entities}
 */
export class EntityReferenceHolderContainer
    implements EntityReferenceHolder {

    readonly #references: Lazy<readonly Entities[]>

    public constructor(references: PossibleEntityReferences_Received,) {
        this.#references = typeof references == 'string'
            ? lazy(() => {
                const reference = references
                return Import.Entities.hasValueByName(reference,)
                    ? [Import.Entities.getValueByName(reference),]
                    : EMPTY_ARRAY
            },)
            : lazyOf(references,)
    }

    //region -------------------- Getter methods --------------------


    public get references(): readonly Entities[] {
        return this.#references.value
    }

    //endregion -------------------- Getter methods --------------------

}
