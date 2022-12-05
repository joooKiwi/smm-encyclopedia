import type {NullOrBoolean} from 'util/types/nullable'

export interface ClassThatIsAvailableFromTheStart<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > {

    get isAvailableFromTheStartInSMM1(): SMM1

    get isAvailableFromTheStartInSMM3DS(): SMM3DS

    get isAvailableFromTheStartInSMM2(): SMM2

}

/**
 * The {@link ClassThatIsAvailableFromTheStart.isAvailableFromTheStartInSMM2 SMM2 field} will always be true.
 * But the {@link ClassThatIsAvailableFromTheStart.isAvailableFromTheStartInSMM3DS SMM3DS field} will be a boolean
 * if the {@link ClassThatIsAvailableFromTheStart.isAvailableFromTheStartInSMM1 SMM1 field} is also a boolean, but null in the other case.
 */
export type InferredClassThatIsAvailableFromTheStartBySMM1<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > =
    SMM1 extends null ? ClassThatIsAvailableFromTheStart<SMM1, null, true>
        : ClassThatIsAvailableFromTheStart<SMM1, true, true>
export type PossibleIsAvailableFromTheStart = NullOrBoolean
