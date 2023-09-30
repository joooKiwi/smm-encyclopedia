import type {Lazy} from '@joookiwi/lazy'

import type {EntityReferences} from 'core/entity/properties/EntityReferences'
import type {Property}         from 'core/entity/properties/Property'
import type {EntityCategory}   from 'core/entityCategory/EntityCategory'
import type {Name}             from 'lang/name/Name'

import {AbstractExclusiveSMM2Entity} from 'core/entity/AbstractExclusiveSMM2Entity'
import {assert}                      from 'util/utilitiesMethods'

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_2 Super Mario Maker 2} {@link Games game}
 * and is exclusive to the {@link GameStyles.SUPER_MARIO_3D_WORLD  Mario 3D World} {@link GameStyles game style}.
 *
 * @todo change tht exclusive SMM3DW entity to be an interface and separate the Entity projectile & Entity object into their own class.
 */
export class ExclusiveSM3DWEntityContainer
    extends AbstractExclusiveSMM2Entity {

    public constructor(name: Name<string>, category: Lazy<EntityCategory>, property: Property, references: EntityReferences,) {
        super(name, category, property, references,)
    }

    protected override _testProperty(property: Property,): void {
        super._testProperty(property)

        assert(property.isInNightTheme == null, 'The property isInNightTheme should always be set to a null for a SM3DW exclusive property.',)
        // assert(typeof property.isInProjectileLimitWhilePlaying == 'boolean', 'The property isInProjectileLimitWhilePlaying should always be a boolean for a SM3DW exclusive property.',)
    }

}
