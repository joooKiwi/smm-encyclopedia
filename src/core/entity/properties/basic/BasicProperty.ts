import type {InferredBooleanPropertyThatCanBeNotApplicable, InferredBooleanPropertyThatCanBeNotApplicableWithComment} from '../../../_properties/Property'

export interface BasicProperty<HAS_A_MUSHROOM_VARIANT extends PossibleHasAMushroomVariant = PossibleHasAMushroomVariant,
    CAN_BE_IN_A_PARACHUTE extends PossibleCanBeInAParachute = PossibleCanBeInAParachute,
    CAN_HAVE_WINGS extends PossibleCanHaveWings = PossibleCanHaveWings, > {

    //region -------------------- Has a mushroom variant --------------------

    get hasAMushroomVariantContainer(): HasAMushroomVariant<HAS_A_MUSHROOM_VARIANT>

    get hasAMushroomVariant(): this['hasAMushroomVariantContainer']['value']

    //endregion -------------------- Has a mushroom variant --------------------
    //region -------------------- Can be a in a parachute --------------------

    get canBeInAParachuteContainer(): CanBeInAParachute<CAN_BE_IN_A_PARACHUTE>

    get canBeInAParachute(): this['canBeInAParachuteContainer']['value']

    get canBeInAParachuteComment(): this['canBeInAParachuteContainer']['comment']

    //endregion -------------------- Can be a in a parachute --------------------
    //region -------------------- Can have wings --------------------

    get canHaveWingsContainer(): CanHaveWings<CAN_HAVE_WINGS>

    get canHaveWings(): this['canBeInAParachuteContainer']['value']

    get canHaveWingsComment(): this['canBeInAParachuteContainer']['comment']

    //endregion -------------------- Can have wings --------------------

}

export type HasAMushroomVariant<T extends PossibleHasAMushroomVariant = PossibleHasAMushroomVariant, > = InferredBooleanPropertyThatCanBeNotApplicable<T>
export type CanBeInAParachute<T extends PossibleCanBeInAParachute = PossibleCanBeInAParachute, > = InferredBooleanPropertyThatCanBeNotApplicableWithComment<T>
export type CanHaveWings<T extends PossibleCanHaveWings = PossibleCanHaveWings, > = InferredBooleanPropertyThatCanBeNotApplicableWithComment<T>

export type LCL_whilePlaying = 'While playing → LCL'

export type PossibleHasAMushroomVariant = | boolean | null
export type PossibleCanBeInAParachute = | boolean | LCL_whilePlaying | null
export type PossibleCanHaveWings = | boolean | LCL_whilePlaying | null
