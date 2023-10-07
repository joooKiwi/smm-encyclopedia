import type {Lazy} from '@joookiwi/lazy'

import type {AlternativeEntityLimit}     from 'core/entityLimit/EntityLimit'
import type {PossibleAlternativeAcronym} from 'core/entityLimit/EntityLimits.types'
import type {EntityLimitTypes}           from 'core/entityLimit/EntityLimitTypes'
import type {EntityLimitAmount}          from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                       from 'lang/name/Name'

import {AbstractEntityLimitContainer} from 'core/entityLimit/AbstractEntityLimit.container'
import {lazy}                         from '@joookiwi/lazy'

export class AlternativeEntityLimitContainer
    extends AbstractEntityLimitContainer<NullOr<PossibleAlternativeAcronym>>
    implements AlternativeEntityLimit {

    public constructor(name: Name<string>,
                       acronym: NullOr<PossibleAlternativeAcronym>,
                       regularEntityLimit: Lazy<EntityLimitTypes>,
                       limitAmount: EntityLimitAmount,) {
        super(name, acronym, lazy(() => this,), regularEntityLimit, limitAmount,)
    }

    public override get alternativeContainer(): this {
        return this
    }

}
