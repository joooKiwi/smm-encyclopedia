import type {EntityReferenceHolder, PossibleEntityReferences, PossibleEntityReferences_Received} from './EntityReferenceHolder'
import type {ObjectHolder}                                                                       from '../../../util/holder/ObjectHolder'

import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container'
import {EMPTY_ARRAY}                  from '../../../util/emptyVariables'
import {Import}                       from '../../../util/DynamicImporter'
import {ObjectHolderContainer}        from '../../../util/holder/ObjectHolder.container'

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
                const reference = Import.Entities.getValue(references[0])
                return reference == null ? EMPTY_ARRAY : [reference]
            })
            : new ObjectHolderContainer(references)
    }

    //region -------------------- Getter methods --------------------


    public get references(): PossibleEntityReferences {
        return this.#references.get
    }

    //endregion -------------------- Getter methods --------------------

}
