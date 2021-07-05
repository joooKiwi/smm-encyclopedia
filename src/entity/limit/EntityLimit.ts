import type {EntityLimitTypes}           from './EntityLimitTypes';
import type {EntityLimitAmount}          from './properties/EntityLimitAmount';
import type {EntityLimitFullName}        from './properties/EntityLimitFullName';
import type {EntityLimitAlternativeName} from './properties/EntityLimitAlternativeName';

export interface EntityLimit {

    //region -------------------- Name --------------------

    get full(): EntityLimitFullName

    get fullName(): this['full']['name']

    get acronym(): this['full']['acronym']


    get alternative(): null | EntityLimitAlternativeName

    get alternativeName(): EntityLimitAlternativeName['name']

    get alternativeAcronym(): EntityLimitAlternativeName['acronym']

    //endregion -------------------- Name --------------------
    //region -------------------- Type --------------------

    get type(): EntityLimitTypes

    //endregion -------------------- Type --------------------
    //region -------------------- Limit amount --------------------

    get limit(): EntityLimitAmount

    get amount(): this['limit']['amount']

    get isAmountUnknown(): this['limit']['isUnknown']

    //endregion -------------------- Limit amount --------------------

}