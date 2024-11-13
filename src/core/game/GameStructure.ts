export interface GameStructure<out SMM1 = unknown,
    out SMM3DS = unknown,
    out SMM2 = unknown, > {

    get superMarioMaker(): SMM1

    get superMarioMakerForNintendo3DS(): SMM3DS

    get superMarioMaker2(): SMM2

}

/**
 * A type-alias for the {@link GameStructure} having 2 different variables.
 * One for {@link SMM1} & {@link SMM3DS} and the other for {@link SMM2}.
 */
export interface GameStructureFrom2Games<out SMM1_AND_SMM3DS = unknown,
    out SMM2 = unknown, >
    extends GameStructure<SMM1_AND_SMM3DS, SMM1_AND_SMM3DS, SMM2> {}
