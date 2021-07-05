import type {PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits} from '../EntityLimits';

export interface EntityLimitAlternativeName {

    get acronym(): null | PossibleAlternativeAcronymEntityLimits

    get name(): null | PossibleAlternativeEntityLimits

}