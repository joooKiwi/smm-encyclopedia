import type {PossibleAcronymEntityLimits, PossibleEntityLimits} from '../EntityLimits.types';

export interface EntityLimitFullName {

    get acronym(): | PossibleAcronymEntityLimits | null

    get name(): PossibleEntityLimits

}