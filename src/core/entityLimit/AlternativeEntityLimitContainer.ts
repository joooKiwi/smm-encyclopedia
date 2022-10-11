import type {AlternativeEntityLimit}     from './EntityLimit'
import type {EntityLimitAmount}          from './properties/EntityLimitAmount'
import type {EntityLimitTypes}           from './EntityLimitTypes'
import type {Name}                       from '../../lang/name/Name'
import type {ObjectHolder}               from '../../util/holder/ObjectHolder'
import type {PossibleAlternativeAcronym} from './EntityLimits.types'

import {AbstractEntityLimitContainer} from './AbstractEntityLimitContainer'

export class AlternativeEntityLimitContainer
    extends AbstractEntityLimitContainer<| PossibleAlternativeAcronym | null>
    implements AlternativeEntityLimit {

    public constructor(name: Name<string>, acronym: | PossibleAlternativeAcronym | null, regularEntityLimit: ObjectHolder<EntityLimitTypes>, limitAmount: ObjectHolder<EntityLimitAmount>,) {
        super(name, acronym, () => this, regularEntityLimit, limitAmount,)
    }

}
