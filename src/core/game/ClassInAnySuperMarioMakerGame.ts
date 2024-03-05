export interface ClassInAnySuperMarioMakerGame<out SMM1 extends boolean = boolean,
    out SMM3DS extends boolean = boolean,
    out SMM2 extends boolean = boolean, > {

    get isInSuperMarioMaker1(): SMM1

    get isInSuperMarioMakerFor3DS(): SMM3DS

    get isInSuperMarioMaker2(): SMM2

}
