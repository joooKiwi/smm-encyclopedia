import type {AlternativeEntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {EntityLimitAmount}                                                     from './properties/EntityLimitAmount';
import type {Name}                                                                  from '../../lang/name/Name';
import type {PossibleAcronym, PossibleAlternativeAcronym}                           from './EntityLimits.types';

import {AbstractEntityLimitContainer} from './AbstractEntityLimitContainer';

export class AlternativeEntityLimitContainer
    extends AbstractEntityLimitContainer<| PossibleAlternativeAcronym | null>
    implements AlternativeEntityLimit {

    //TODO change to object holder directly instead of creating the object holder instance here.
    public constructor(name: Name<string>, acronym: PossibleAcronym | PossibleAlternativeAcronym | null, regularEntityLimitCallback: () => EntityLimitWithPossibleAlternativeEntityLimit, limitAmount: EntityLimitAmount,) {
        super(name, acronym, () => this, () => {
            return regularEntityLimitCallback().type;
        }, limitAmount,);
    }

}
