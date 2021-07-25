import type {PossibleAcronymEntityLimits, PossibleEntityLimits} from '../EntityLimits';

export interface EntityLimitFullName {

    get acronym(): | PossibleAcronymEntityLimits | null

    get name(): PossibleEntityLimits

}