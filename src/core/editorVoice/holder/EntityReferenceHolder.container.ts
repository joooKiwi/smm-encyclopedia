import type {EntityReferenceHolder, PossibleEntityReferences, PossibleEntityReferences_Received} from 'core/editorVoice/holder/EntityReferenceHolder'
import type {ObjectHolder}                                                                       from 'util/holder/ObjectHolder'

import {Import}                       from 'util/DynamicImporter'
import {EMPTY_ARRAY}                  from 'util/emptyVariables'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolderContainer}        from 'util/holder/ObjectHolder.container'

/**
 * @classWithDynamicImport {@link Entities}
 */
export class EntityReferenceHolderContainer
    implements EntityReferenceHolder {

    //region -------------------- Fields --------------------

    readonly #references: ObjectHolder<PossibleEntityReferences>

    //endregion -------------------- Fields --------------------

    public constructor(references: PossibleEntityReferences_Received,) {
        this.#references = references.length === 1
            ? new DelayedObjectHolderContainer(() => {
                const reference = references[0]
                return Import.Entities.hasValueByName(reference)
                    ? [Import.Entities.getValueByName(reference),]
                    : EMPTY_ARRAY
            })
            : new ObjectHolderContainer(references)
    }

    //region -------------------- Getter methods --------------------


    public get references(): PossibleEntityReferences {
        return this.#references.get
    }

    //endregion -------------------- Getter methods --------------------

}
