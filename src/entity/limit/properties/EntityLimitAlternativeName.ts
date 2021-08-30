import type {PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits} from '../EntityLimits.types';

export interface EntityLimitAlternativeName {

    get acronym(): | PossibleAlternativeAcronymEntityLimits | null

    get name(): | PossibleAlternativeEntityLimits | null

}