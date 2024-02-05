export interface BasicProperty {

    get hasAMushroomVariant(): BooleanOrNotApplicable


    get canBeInAParachute(): BooleanOrNotApplicable

    get canBeInAParachuteComment(): NullOr<LCL_Play>


    get canHaveWings(): BooleanOrNotApplicable

    get canHaveWingsComment(): NullOr<LCL_Play>

}

export type LCL_Play = 'While playing → LCL'
