import type {Lazy} from '@joookiwi/lazy'

import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from 'core/entityLimit/EntityLimit'
import type {PossibleAcronym}                                                       from 'core/entityLimit/EntityLimits.types'
import type {EntityLimitTypes}                                                      from 'core/entityLimit/EntityLimitTypes'
import type {EntityLimitAmount}                                                     from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                                                                  from 'lang/name/Name'

import {AbstractEntityLimitContainer} from 'core/entityLimit/AbstractEntityLimit.container'

export class EntityLimitContainer
    extends AbstractEntityLimitContainer<NullOr<PossibleAcronym>>
    implements EntityLimitWithPossibleAlternativeEntityLimit {

    public constructor(name: Name<string>,
                       acronym: NullOr<PossibleAcronym>,
                       alternative: Lazy<AlternativeEntityLimit>,
                       type: Lazy<EntityLimitTypes>,
                       limitAmount: Lazy<EntityLimitAmount>,) {
        super(name, acronym, alternative, type, limitAmount,)
    }

}
