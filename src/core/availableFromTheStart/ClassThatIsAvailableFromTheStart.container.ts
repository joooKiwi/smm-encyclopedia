import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from './ClassThatIsAvailableFromTheStart';
import type {GameStructure}                                                     from '../game/GameStructure';

export class ClassThatIsAvailableFromTheStartContainer<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, >
    implements ClassThatIsAvailableFromTheStart<SMM1, SMM3DS, SMM2> {

    //region -------------------- Fields --------------------

    readonly #structure;

    //endregion -------------------- Fields --------------------

    /*package*/ constructor(structure: GameStructure<SMM1, SMM3DS, SMM2>,) {
        this.#structure = structure;
    }

    //region -------------------- Getter methods --------------------

    public get isAvailableFromTheStartInSMM1(): SMM1 {
        return this.#structure.superMarioMaker;
    }

    public get isAvailableFromTheStartInSMM3DS(): SMM3DS {
        return this.#structure.superMarioMakerForNintendo3DS;
    }

    public get isAvailableFromTheStartInSMM2(): SMM2 {
        return this.#structure.superMarioMaker2;
    }

    //endregion -------------------- Getter methods --------------------

}
