import type {PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant} from 'core/entity/properties/basic/BasicProperty'

export interface BasicPropertyTemplate {

    hasAMushroomVariant: PossibleHasAMushroomVariant

    canBeInAParachute: PossibleCanBeInAParachute

    canHaveWings: PossibleCanHaveWings

}
