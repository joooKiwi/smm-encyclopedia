import type {NullOrBoolean} from '@joookiwi/type'

export interface ClassThatIsAvailableFromTheStart<out SMM1 extends NullOrBoolean = NullOrBoolean,
    out SMM3DS extends NullOrBoolean = NullOrBoolean,
    out SMM2 extends NullOrBoolean = NullOrBoolean, > {

    readonly isAvailableFromTheStartInSMM1: SMM1
    readonly isAvailableFromTheStartInSMM3DS: SMM3DS
    readonly isAvailableFromTheStartInSMM2: SMM2

}
