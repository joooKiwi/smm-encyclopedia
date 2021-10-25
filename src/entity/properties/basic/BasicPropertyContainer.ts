import type {BasicProperty, CanBeInAParachute, CanHaveWings, HasAMushroomVariant, LCL_whilePlaying, PossibleCanBeInAParachute, PossibleCanHaveWings, PossibleHasAMushroomVariant} from './BasicProperty';

import {PropertyProvider} from '../../_properties/PropertyProvider';

export class BasicPropertyContainer<HAS_A_MUSHROOM_VARIANT extends PossibleHasAMushroomVariant = PossibleHasAMushroomVariant,
    CAN_BE_IN_A_PARACHUTE extends PossibleCanBeInAParachute = PossibleCanBeInAParachute,
    CAN_HAVE_WINGS extends PossibleCanHaveWings = PossibleCanHaveWings, >
    implements BasicProperty<HAS_A_MUSHROOM_VARIANT, CAN_BE_IN_A_PARACHUTE, CAN_HAVE_WINGS> {

    //region -------------------- Attributes --------------------

    public static readonly POSSIBLE_COMMENT: LCL_whilePlaying = 'While playing → LCL';

    readonly #hasAMushroomContainer: HasAMushroomVariant<HAS_A_MUSHROOM_VARIANT>;
    readonly #canBeInAParachuteContainer: CanBeInAParachute<CAN_BE_IN_A_PARACHUTE>;
    readonly #canHaveWingsContainer: CanHaveWings<CAN_HAVE_WINGS>;

    //endregion -------------------- Attributes --------------------

    public constructor(hasAMushroom: HAS_A_MUSHROOM_VARIANT, canBeInAParachute: CAN_BE_IN_A_PARACHUTE, canHaveWings: CAN_HAVE_WINGS,) {
        this.#hasAMushroomContainer = PropertyProvider.newBooleanContainer(hasAMushroom, true,);
        this.#canBeInAParachuteContainer = PropertyProvider.newBooleanContainer<CAN_BE_IN_A_PARACHUTE, true, true>(canBeInAParachute, true,);
        this.#canHaveWingsContainer = PropertyProvider.newBooleanContainer<CAN_HAVE_WINGS, true, true>(canHaveWings, true,);
    }

    //region -------------------- Has a mushroom variant --------------------

    public get hasAMushroomVariantContainer() {
        return this.#hasAMushroomContainer;
    }

    public get hasAMushroomVariant() {
        return this.hasAMushroomVariantContainer.value;
    }

    //endregion -------------------- Has a mushroom variant --------------------
    //region -------------------- Can be a in a parachute --------------------

    public get canBeInAParachuteContainer() {
        return this.#canBeInAParachuteContainer;
    }

    public get canBeInAParachute() {
        return this.canBeInAParachuteContainer.value;
    }

    public get canBeInAParachuteComment() {
        return this.canBeInAParachuteContainer.comment;
    }

    //endregion -------------------- Can be a in a parachute --------------------
    //region -------------------- Can have wings --------------------

    public get canHaveWingsContainer() {
        return this.#canHaveWingsContainer;
    }

    public get canHaveWings() {
        return this.canHaveWingsContainer.value;
    }

    public get canHaveWingsComment() {
        return this.canHaveWingsContainer.comment;
    }

    //endregion -------------------- Can have wings --------------------

}
