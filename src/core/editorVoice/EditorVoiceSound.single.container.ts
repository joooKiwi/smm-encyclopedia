import type {EditorVoiceSound, PossibleFileName, PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative} from './EditorVoiceSound';

export class EditorVoiceSoundSingleContainer
    implements EditorVoiceSound<PossibleFileName<PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative>> {

    //region -------------------- Fields --------------------

    readonly #fileName;

    //endregion -------------------- Fields --------------------

    public constructor(fileName: PossibleFileName<PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative>,) {
        this.#fileName = fileName;
    }

    //region -------------------- Getter methods --------------------

    public get fileName(): PossibleFileName<PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative> {
        return this.#fileName;
    }

    public readonly europeanFileName = null;

    //endregion -------------------- Getter methods --------------------

}
