import type {PropertyThatCanBeUnknown}            from 'core/_properties/PropertyThatCanBeUnknown'
import type {PropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {NotApplicableProperty}               from 'core/_properties/PropertyWithEverything'

export interface BasicProperty {

    //region -------------------- Has a mushroom variant --------------------

    get hasAMushroomVariantContainer(): HasAMushroomVariant

    get hasAMushroomVariant(): BooleanOrNotApplicable

    //endregion -------------------- Has a mushroom variant --------------------
    //region -------------------- Can be a in a parachute --------------------

    get canBeInAParachuteContainer(): CanBeInAParachute

    get canBeInAParachute(): NullOr<BooleanOrNotApplicable>

    get canBeInAParachuteComment(): NullOr<LCL_whilePlaying>

    //endregion -------------------- Can be a in a parachute --------------------
    //region -------------------- Can have wings --------------------

    get canHaveWingsContainer(): CanHaveWings

    get canHaveWings(): NullOr<BooleanOrNotApplicable>

    get canHaveWingsComment(): NullOr<LCL_whilePlaying>

    //endregion -------------------- Can have wings --------------------

}

export type HasAMushroomVariant = | NotApplicableProperty | PropertyThatCanBeUnknown<boolean, false>
export type CanBeInAParachute = | NotApplicableProperty
                                | PropertyThatCanBeUnknownWithComment<boolean, false, null>
                                | PropertyThatCanBeUnknownWithComment<true, false, LCL_whilePlaying>
export type CanHaveWings = | NotApplicableProperty
                           | PropertyThatCanBeUnknownWithComment<boolean, false, null>
                           | PropertyThatCanBeUnknownWithComment<true, false, LCL_whilePlaying>

export type LCL_whilePlaying = 'While playing → LCL'

export type PossibleHasAMushroomVariant = NullOrBoolean
export type PossibleCanBeInAParachute = NullOr<| boolean | LCL_whilePlaying>
export type PossibleCanHaveWings = NullOr<| boolean | LCL_whilePlaying>
