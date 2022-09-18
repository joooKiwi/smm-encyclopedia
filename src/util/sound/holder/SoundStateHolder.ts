import {SoundStates} from '../SoundStates';

export class SoundStateHolder {

    //region -------------------- Fields --------------------

    readonly #history: SoundStates[];
    #lastState?: SoundStates;
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
        this.setLastState(this.currentState)
            ._history.push(this.#currentState = value);
    }

    public setCurrentState(value: | SoundStates | null | undefined,): this {
        this.currentState = value;
        return this;
    }


    public get lastState(): SoundStates {
        if (this.#lastState == null)
            throw new ReferenceError('The history has no last state!');
        return this.#lastState;
    }

    public set lastState(value: | SoundStates | null | undefined,) {
        if (value == null)
            throw new TypeError('The last state could not be set to a null value.');
        this.#lastState = value;
    }

    public setLastState(value: | SoundStates | null | undefined,): this {
        this.lastState = value;
        return this;
    }

    //endregion -------------------- Getter methods --------------------

}
