import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from 'core/entityLimit/EntityLimit'
import type {PossibleAcronym}                                                       from 'core/entityLimit/EntityLimits.types'
import type {EntityLimitTypes}                                                      from 'core/entityLimit/EntityLimitTypes'
import type {EntityLimitAmount}                                                     from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                                                                  from 'lang/name/Name'
import type {ObjectHolder, PossibleValueOnObjectHolder}                             from 'util/holder/ObjectHolder'
import type {NullOr}                                                                from 'util/types/nullable'

import {AbstractEntityLimitContainer} from 'core/entityLimit/AbstractEntityLimit.container'

export class EntityLimitContainer
    extends AbstractEntityLimitContainer<NullOr<PossibleAcronym>>
    implements EntityLimitWithPossibleAlternativeEntityLimit {

    public constructor(name: Name<string>, acronym: NullOr<PossibleAcronym>, alternative: PossibleValueOnObjectHolder<AlternativeEntityLimit>, type: ObjectHolder<EntityLimitTypes>, limitAmount: ObjectHolder<EntityLimitAmount>,) {
        super(name, acronym, alternative, type, limitAmount,)
    }

}
