import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {EntityLimitAmount}                                                     from './properties/EntityLimitAmount';
import type {EntityLimitLink}                                                       from './properties/EntityLimitLink';
import type {Name}                                                                  from '../../lang/name/Name';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits}   from './EntityLimits.types';

import {AbstractEntityLimitContainer} from './AbstractEntityLimitContainer';

export class AlternativeEntityLimitContainer
    extends AbstractEntityLimitContainer<| PossibleAlternativeAcronymEntityLimits | null>
    implements AlternativeEntityLimit {

    public constructor(name: Name, acronym: PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null, regularEntityLimitCallback: () => EntityLimitWithPossibleAlternativeEntityLimit, limitAmount: EntityLimitAmount, link: EntityLimitLink,) {
        super(name, acronym, () => this, () => {
            return regularEntityLimitCallback().type;
        }, limitAmount, link,);
    }

}
