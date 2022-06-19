import type {EditorVoiceSound, PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_European, PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_Regular} from './EditorVoiceSound';

export class EditorVoiceSoundRegionalContainer
    implements EditorVoiceSound<PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_Regular, PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_European> {

    //region -------------------- Attributes --------------------

    readonly #regularFileName;
    readonly #europeanFileName;

    //endregion -------------------- Attributes --------------------

    public constructor(regularFileName: PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_Regular, europeanFileName: PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_European,) {
        this.#regularFileName = regularFileName;
        this.#europeanFileName = europeanFileName;
    }

    //region -------------------- Getter methods --------------------

    public get fileName(): PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_Regular {
        return this.#regularFileName;
    }

    public get europeanFileName(): PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_European {
        return this.#europeanFileName;
    }

    //endregion -------------------- Getter methods --------------------

}
