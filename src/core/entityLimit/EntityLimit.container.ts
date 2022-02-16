import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {EntityLimitAmount}                                                     from './properties/EntityLimitAmount';
import type {EntityLimitTypes}                                                      from './EntityLimitTypes';
import type {Name}                                                                  from '../../lang/name/Name';
import type {PossibleAcronym, PossibleAlternativeAcronym}                           from './EntityLimits.types';

import {AbstractEntityLimitContainer} from './AbstractEntityLimitContainer';

export class EntityLimitContainer
    extends AbstractEntityLimitContainer<| PossibleAcronym | null>
    implements EntityLimitWithPossibleAlternativeEntityLimit {

    public constructor(name: Name, acronym: PossibleAcronym | PossibleAlternativeAcronym | null, alternative: () => AlternativeEntityLimit, type: () => EntityLimitTypes, limitAmount: EntityLimitAmount,) {
        super(name, acronym, alternative, type, limitAmount,);
    }

}
