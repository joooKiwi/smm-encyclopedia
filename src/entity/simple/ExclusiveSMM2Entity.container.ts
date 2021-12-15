import type {EntityCategory}                  from '../category/EntityCategory';
import type {EntityReferences}                from '../properties/EntityReferences';
import type {ExclusiveSMM2Entity}             from './Entity';
import type {ExclusiveSMM2Property, Property} from '../properties/Property';
import type {Name}                            from '../../lang/name/Name';

import {AbstractExclusiveSMM2Entity} from './AbstractExclusiveSMM2Entity';
import {assert}                      from '../../util/utilitiesMethods';

/**
 * An entity that is exclusive to the {@link Games.SUPER_MARIO_MAKER_2 Super Mario Maker 2} {@link Games game}
 * and is not exclusive to the {@link GameStyles.SUPER_MARIO_3D_WORLD  Mario 3D World} {@link GameStyles game style}.
 */
export class ExclusiveSMM2EntityContainer<CATEGORY extends EntityCategory = EntityCategory, >
    extends AbstractExclusiveSMM2Entity<CATEGORY, ExclusiveSMM2Property>
    implements ExclusiveSMM2Entity<CATEGORY> {

    public constructor(name: Name, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category, property, references,);
    }

    protected _testProperty(property: Property,): Property {
        property = super._testProperty(property);

        assert(property.isInNightTheme != null, 'The property isInNightTheme should always be set to a boolean for a SMM2 exclusive property when it is included in at least one of those styles (SMB, SMB3, SMW or NSMBU).',);

        return property;
    }

}
