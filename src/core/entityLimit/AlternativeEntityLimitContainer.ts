import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {EntityLimitAmount}                                                     from './properties/EntityLimitAmount';
import type {EntityLimitLink}                                                       from './properties/EntityLimitLink';
import type {Name}                                                                  from '../../lang/name/Name';
import type {PossibleAcronym, PossibleAlternativeAcronym}                           from './EntityLimits.types';

import {AbstractEntityLimitContainer} from './AbstractEntityLimitContainer';

export class AlternativeEntityLimitContainer
    extends AbstractEntityLimitContainer<| PossibleAlternativeAcronym | null>
    implements AlternativeEntityLimit {

    public constructor(name: Name, acronym: PossibleAcronym | PossibleAlternativeAcronym | null, regularEntityLimitCallback: () => EntityLimitWithPossibleAlternativeEntityLimit, limitAmount: EntityLimitAmount, link: EntityLimitLink,) {
        super(name, acronym, () => this, () => {
            return regularEntityLimitCallback().type;
        }, limitAmount, link,);
    }

}