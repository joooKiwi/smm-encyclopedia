import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit'
import type {EntityLimitAmount}                                                     from './properties/EntityLimitAmount'
import type {EntityLimitTypes}                                                      from './EntityLimitTypes'
import type {Name}                                                                  from '../../lang/name/Name'
import type {NullOr}                                                                from '../../util/types'
import type {ObjectHolder, PossibleValueOnObjectHolder}                             from '../../util/holder/ObjectHolder'
import type {PossibleAcronym}                                                       from './EntityLimits.types'

import {AbstractEntityLimitContainer} from './AbstractEntityLimit.container'

export class EntityLimitContainer
    extends AbstractEntityLimitContainer<NullOr<PossibleAcronym>>
    implements EntityLimitWithPossibleAlternativeEntityLimit {

    public constructor(name: Name<string>, acronym: NullOr<PossibleAcronym>, alternative: PossibleValueOnObjectHolder<AlternativeEntityLimit>, type: ObjectHolder<EntityLimitTypes>, limitAmount: ObjectHolder<EntityLimitAmount>,) {
        super(name, acronym, alternative, type, limitAmount,)
    }

}
