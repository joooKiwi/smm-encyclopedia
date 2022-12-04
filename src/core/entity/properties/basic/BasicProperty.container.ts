import type {BasicProperty, CanBeInAParachute, CanHaveWings, HasAMushroomVariant, LCL_whilePlaying, PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant} from 'core/entity/properties/basic/BasicProperty'

import {PropertyProvider} from 'core/_properties/PropertyProvider'

export class BasicPropertyContainer<HAS_A_MUSHROOM_VARIANT extends PossibleHasAMushroomVariant = PossibleHasAMushroomVariant,
    CAN_BE_IN_A_PARACHUTE extends PossibleCanBeInAParachute = PossibleCanBeInAParachute,
    CAN_HAVE_WINGS extends PossibleCanHaveWings = PossibleCanHaveWings, >
    implements BasicProperty<HAS_A_MUSHROOM_VARIANT, CAN_BE_IN_A_PARACHUTE, CAN_HAVE_WINGS> {

    //region -------------------- Fields --------------------

    public static readonly POSSIBLE_COMMENT: LCL_whilePlaying = 'While playing → LCL'

    readonly #hasAMushroomContainer: HasAMushroomVariant<HAS_A_MUSHROOM_VARIANT>
    readonly #canBeInAParachuteContainer: CanBeInAParachute<CAN_BE_IN_A_PARACHUTE>
    readonly #canHaveWingsContainer: CanHaveWings<CAN_HAVE_WINGS>

    //endregion -------------------- Fields --------------------

    public constructor(hasAMushroom: HAS_A_MUSHROOM_VARIANT, canBeInAParachute: CAN_BE_IN_A_PARACHUTE, canHaveWings: CAN_HAVE_WINGS,) {
        this.#hasAMushroomContainer = PropertyProvider.newBooleanContainer(hasAMushroom, true, false,)
        this.#canBeInAParachuteContainer = PropertyProvider.newBooleanContainer<CAN_BE_IN_A_PARACHUTE, true, false, true>(canBeInAParachute, true, false,)
        this.#canHaveWingsContainer = PropertyProvider.newBooleanContainer<CAN_HAVE_WINGS, true, false, true>(canHaveWings, true, false,)
    }

    //region -------------------- Has a mushroom variant --------------------

    public get hasAMushroomVariantContainer() {
        return this.#hasAMushroomContainer
    }

    public get hasAMushroomVariant() {
        return this.hasAMushroomVariantContainer.value
    }

    //endregion -------------------- Has a mushroom variant --------------------
    //region -------------------- Can be a in a parachute --------------------

    public get canBeInAParachuteContainer() {
        return this.#canBeInAParachuteContainer
    }

    public get canBeInAParachute() {
        return this.canBeInAParachuteContainer.value
    }

    public get canBeInAParachuteComment() {
        return this.canBeInAParachuteContainer.comment
    }

    //endregion -------------------- Can be a in a parachute --------------------
    //region -------------------- Can have wings --------------------

    public get canHaveWingsContainer() {
        return this.#canHaveWingsContainer
    }

    public get canHaveWings() {
        return this.canHaveWingsContainer.value
    }

    public get canHaveWingsComment() {
        return this.canHaveWingsContainer.comment
    }

    //endregion -------------------- Can have wings --------------------

}
