import {SoundStates} from '../SoundStates';

export class SoundStateHolder {

    //region -------------------- Fields --------------------

    readonly #history: SoundStates[];
    #currentState;

    //endregion -------------------- Fields --------------------

    public constructor(currentState: SoundStates,) {
        this.#currentState = currentState;
        this.#history = [];
    }

    //region -------------------- Getter methods --------------------

    public get history(): readonly SoundStates[] {
        return this.#history;
    }

    protected get _history(): SoundStates[] {
        return this.#history;
    }


    public get currentState(): SoundStates {
        return this.#currentState;
    }

    public set currentState(value: | SoundStates | null | undefined,) {
        if (value == null)
            return;
        this._history.push(this.#currentState = value);
    }

    public setCurrentState(value: | SoundStates | null | undefined,): this {
        this.currentState = value;
        return this;
    }

    //endregion -------------------- Getter methods --------------------

}
