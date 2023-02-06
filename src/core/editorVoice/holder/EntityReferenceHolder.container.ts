import type {EntityReferenceHolder, PossibleEntityReferences_Received} from 'core/editorVoice/holder/EntityReferenceHolder'
import type {ObjectHolder}                                             from 'util/holder/ObjectHolder'

import {Import}                       from 'util/DynamicImporter'
import {EMPTY_ARRAY}                  from 'util/emptyVariables'
import type {Entities}                from 'core/entity/Entities'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolderContainer}        from 'util/holder/ObjectHolder.container'

/**
 * @classWithDynamicImport {@link Entities}
 */
export class EntityReferenceHolderContainer
    implements EntityReferenceHolder {

    //region -------------------- Fields --------------------

    readonly #references: ObjectHolder<readonly Entities[]>

    //endregion -------------------- Fields --------------------

    public constructor(references: PossibleEntityReferences_Received,) {
        this.#references = typeof references == 'string'
            ? new DelayedObjectHolderContainer(() => {
                const reference = references
                return Import.Entities.hasValueByName(reference)
                    ? [Import.Entities.getValueByName(reference),]
                    : EMPTY_ARRAY
            })
            : new ObjectHolderContainer(references)
    }

    //region -------------------- Getter methods --------------------


    public get references(): readonly Entities[] {
        return this.#references.get
    }

    //endregion -------------------- Getter methods --------------------

}
