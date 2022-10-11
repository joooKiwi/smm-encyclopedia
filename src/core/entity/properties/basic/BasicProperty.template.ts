import type {PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant} from './BasicProperty'

export interface BasicPropertyTemplate {

    hasAMushroomVariant: PossibleHasAMushroomVariant

    canBeInAParachute: PossibleCanBeInAParachute

    canHaveWings: PossibleCanHaveWings

}
