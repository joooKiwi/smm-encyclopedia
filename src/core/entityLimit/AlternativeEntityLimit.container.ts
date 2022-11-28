import type {AlternativeEntityLimit}     from './EntityLimit'
import type {EntityLimitAmount}          from './properties/EntityLimitAmount'
import type {EntityLimitTypes}           from './EntityLimitTypes'
import type {Name}                       from '../../lang/name/Name'
import type {NullOr}                     from '../../util/types'
import type {ObjectHolder}               from '../../util/holder/ObjectHolder'
import type {PossibleAlternativeAcronym} from './EntityLimits.types'

import {AbstractEntityLimitContainer} from './AbstractEntityLimit.container'

export class AlternativeEntityLimitContainer
    extends AbstractEntityLimitContainer<NullOr<PossibleAlternativeAcronym>>
    implements AlternativeEntityLimit {

    public constructor(name: Name<string>, acronym: NullOr<PossibleAlternativeAcronym>, regularEntityLimit: ObjectHolder<EntityLimitTypes>, limitAmount: ObjectHolder<EntityLimitAmount>,) {
        super(name, acronym, () => this, regularEntityLimit, limitAmount,)
    }

}
