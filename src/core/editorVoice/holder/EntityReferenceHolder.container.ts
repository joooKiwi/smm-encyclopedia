import type {EntityReferenceHolder, PossibleEntityReferences, PossibleEntityReferences_Received} from './EntityReferenceHolder';
import type {ObjectHolder}                                                                       from '../../../util/holder/ObjectHolder';

import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolderContainer';
import {EMPTY_ARRAY}                  from '../../../util/emptyVariables';
import {Entities}                     from '../../entity/Entities';
import {ObjectHolderContainer}        from '../../../util/holder/ObjectHolderContainer';

export class EntityReferenceHolderContainer
    implements EntityReferenceHolder {

    //region -------------------- Attributes --------------------

    readonly #references: ObjectHolder<PossibleEntityReferences>;

    //endregion -------------------- Attributes --------------------

    public constructor(references: PossibleEntityReferences_Received,) {
        this.#references = references.length === 1
            ? new DelayedObjectHolderContainer(() => {
                const reference = Entities.getValue(references[0]);
                return reference == null ? EMPTY_ARRAY : [reference];
            })
            : new ObjectHolderContainer(references);
    }

    //region -------------------- Getter methods --------------------


    public get references(): PossibleEntityReferences {
        return this.#references.get;
    }

    //endregion -------------------- Getter methods --------------------

}
