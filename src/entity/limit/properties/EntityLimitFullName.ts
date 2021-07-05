import type {PossibleAcronymEntityLimits, PossibleEntityLimits} from '../EntityLimits';

export interface EntityLimitFullName {

    get acronym(): null | PossibleAcronymEntityLimits

    get name(): PossibleEntityLimits

}