import type {AlternativeEntityLimit}     from 'core/entityLimit/EntityLimit'
import type {PossibleAlternativeAcronym} from 'core/entityLimit/EntityLimits.types'
import type {EntityLimitTypes}           from 'core/entityLimit/EntityLimitTypes'
import type {EntityLimitAmount}          from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                       from 'lang/name/Name'
import type {ObjectHolder}               from 'util/holder/ObjectHolder'
import type {NullOr}                     from 'util/types/nullable'

import {AbstractEntityLimitContainer} from 'core/entityLimit/AbstractEntityLimit.container'

export class AlternativeEntityLimitContainer
    extends AbstractEntityLimitContainer<NullOr<PossibleAlternativeAcronym>>
    implements AlternativeEntityLimit {

    public constructor(name: Name<string>, acronym: NullOr<PossibleAlternativeAcronym>, regularEntityLimit: ObjectHolder<EntityLimitTypes>, limitAmount: ObjectHolder<EntityLimitAmount>,) {
        super(name, acronym, () => this, regularEntityLimit, limitAmount,)
    }

}
