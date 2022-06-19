import type {EntityCategory}                         from '../entityCategory/EntityCategory';
import type {EntityReferences}                       from './properties/EntityReferences';
import type {ExclusiveSM3DWEntity}                   from './Entity';
import type {ExclusiveSMM2PropertyInSM3DW, Property} from './properties/Property';
import type {Name}                                   from '../../lang/name/Name';

import {AbstractExclusiveSMM2Entity} from './AbstractExclusiveSMM2Entity';
import {assert}                      from '../../util/utilitiesMethods';

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_2 Super Mario Maker 2} {@link Games game}
 * and is exclusive to the {@link GameStyles.SUPER_MARIO_3D_WORLD  Mario 3D World} {@link GameStyles game style}.
 */
export class ExclusiveSM3DWEntityContainer<CATEGORY extends EntityCategory = EntityCategory, >
    extends AbstractExclusiveSMM2Entity<CATEGORY, ExclusiveSMM2PropertyInSM3DW>
    implements ExclusiveSM3DWEntity<CATEGORY> {

    public constructor(name: Name<string>, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,);
    }

    protected override _testProperty(property: Property,): Property {
        property = super._testProperty(property);

        assert(property.isInNightTheme == null, 'The property isInNightTheme should always be set to a null for a SM3DW exclusive property.',);
        assert(typeof property.isInProjectileLimitWhilePlaying == 'boolean', 'The property isInProjectileLimitWhilePlaying should always be a boolean for a SM3DW exclusive property.',);

        return property;
    }

}
