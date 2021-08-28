export interface GameProperty<SMM1 extends boolean = boolean, SMM2 extends boolean = boolean, > {

    get isInSuperMarioMaker1(): SMM1

    get isInSuperMarioMaker2(): SMM2

}

export type ExclusiveSMM1GameProperty = GameProperty<true, false>;
export type ExclusiveSMM2GameProperty = GameProperty<false, true>;
export type ExclusiveSMM2GamePropertyInSM3DW = ExclusiveSMM2GameProperty;
export type ExclusiveSMM2GamePropertyInAnyStyle = ExclusiveSMM2GameProperty;
