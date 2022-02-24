import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {EntityLimitAmount}                                                     from './properties/EntityLimitAmount';
import type {EntityLimitLink}                                                       from './properties/EntityLimitLink';
import type {EntityLimitTypes}                                                      from './EntityLimitTypes';
import type {Name}                                                                  from '../../lang/name/Name';
import type {PossibleAcronym, PossibleAlternativeAcronym}                           from './EntityLimits.types';

import {AbstractEntityLimitContainer} from './AbstractEntityLimitContainer';

export class EntityLimitContainer
    extends AbstractEntityLimitContainer<| PossibleAcronym | null>
    implements EntityLimitWithPossibleAlternativeEntityLimit {

    public constructor(name: Name<string>, acronym: PossibleAcronym | PossibleAlternativeAcronym | null, alternative: () => AlternativeEntityLimit, type: () => EntityLimitTypes, limitAmount: EntityLimitAmount, link: EntityLimitLink,) {
        super(name, acronym, alternative, type, limitAmount, link,);
    }

}
