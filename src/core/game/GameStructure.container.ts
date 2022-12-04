import type {GameStructure} from 'core/game/GameStructure'

export class GameStructureContainer<SMM1 extends any = any, SMM3DS extends any = any, SMM2 extends any = any, >
    implements GameStructure<SMM1, SMM3DS, SMM2> {

    //region -------------------- Fields --------------------

    readonly #superMarioMaker
    readonly #superMarioMakerForNintendo3DS
    readonly #superMarioMaker2

    //endregion -------------------- Fields --------------------

    constructor(isInSuperMarioMaker1: SMM1, isInSuperMarioMakerFor3DS: SMM3DS, isInSuperMarioMaker2: SMM2,) {
        this.#superMarioMaker = isInSuperMarioMaker1
        this.#superMarioMakerForNintendo3DS = isInSuperMarioMakerFor3DS
        this.#superMarioMaker2 = isInSuperMarioMaker2
    }

    //region -------------------- Getter methods --------------------

    public get superMarioMaker(): SMM1 {
        return this.#superMarioMaker
    }

    public get superMarioMakerForNintendo3DS(): SMM3DS {
        return this.#superMarioMakerForNintendo3DS
    }

    public get superMarioMaker2(): SMM2 {
        return this.#superMarioMaker2
    }

    //endregion -------------------- Getter methods --------------------

}
