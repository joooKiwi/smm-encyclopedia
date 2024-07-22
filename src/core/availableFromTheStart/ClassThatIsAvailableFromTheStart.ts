export interface ClassThatIsAvailableFromTheStart<out SMM1 extends NullOrBoolean = NullOrBoolean,
    out SMM3DS extends NullOrBoolean = NullOrBoolean,
    out SMM2 extends NullOrBoolean = NullOrBoolean, > {

    get isAvailableFromTheStartInSMM1(): SMM1

    get isAvailableFromTheStartInSMM3DS(): SMM3DS

    get isAvailableFromTheStartInSMM2(): SMM2

}
