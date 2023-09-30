import type {Lazy} from '@joookiwi/lazy'

import type {EntityReferences} from 'core/entity/properties/EntityReferences'
import type {Property}         from 'core/entity/properties/Property'
import type {EntityCategory}   from 'core/entityCategory/EntityCategory'
import type {Name}             from 'lang/name/Name'

import {AbstractExclusiveSMM2Entity} from 'core/entity/AbstractExclusiveSMM2Entity'
import {assert}                      from 'util/utilitiesMethods'

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_2 Super Mario Maker 2} {@link Games game}
 * and is not exclusive to the {@link GameStyles.SUPER_MARIO_3D_WORLD  Mario 3D World} {@link GameStyles game style}.
 */
export class ExclusiveSMM2EntityContainer
    extends AbstractExclusiveSMM2Entity {

    public constructor(name: Name<string>, category: Lazy<EntityCategory>, property: Property, references: EntityReferences,) {
        super(name, category, property, references,)
    }

    protected override _testProperty(property: Property,): void {
        super._testProperty(property)

        assert(property.isInNightTheme != null, 'The property isInNightTheme should always be set to a boolean for a SMM2 exclusive property when it is included in at least one of those styles (SMB, SMB3, SMW or NSMBU).',)
    }

}
