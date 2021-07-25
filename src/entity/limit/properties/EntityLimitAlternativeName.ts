import type {PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits} from '../EntityLimits';

export interface EntityLimitAlternativeName {

    get acronym(): | PossibleAlternativeAcronymEntityLimits | null

    get name(): | PossibleAlternativeEntityLimits | null

}