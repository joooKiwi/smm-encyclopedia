export interface ClassThatIsAvailableFromTheStart<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > {

    get isAvailableFromTheStartInSMM1(): SMM1

    get isAvailableFromTheStartInSMM3DS(): SMM3DS

    get isAvailableFromTheStartInSMM2(): SMM2

}

export type PossibleIsAvailableFromTheStart = | boolean | null;
