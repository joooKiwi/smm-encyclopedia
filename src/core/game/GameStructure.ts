export interface GameStructure<SMM1 = unknown, SMM3DS = unknown, SMM2 = unknown, > {

    get superMarioMaker(): SMM1

    get superMarioMakerForNintendo3DS(): SMM3DS

    get superMarioMaker2(): SMM2

}

/**
 * A simple type-alias for the {@link GameStructure} having 2 different variables.
 * One for {@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
 * and the other for {@link Games.SUPER_MARIO_MAKER_2 SMM2}.
 */
export type GameStructureFrom2Games<SMM1_AND_SMM3DS = any, SMM2 = any, > = GameStructure<SMM1_AND_SMM3DS, SMM1_AND_SMM3DS, SMM2>
