import type {SoundStates} from 'util/sound/player/SoundStates'

export class HistoryState {

    //region -------------------- Fields --------------------

    readonly #state
    readonly #isLoading

    //endregion -------------------- Fields --------------------

    public constructor(state: | SoundStates | HistoryState, isLoading: | boolean | HistoryState,) {
        this.#state = state instanceof HistoryState ? state.state : state
        this.#isLoading = isLoading instanceof HistoryState ? isLoading.isLoading : isLoading
    }

    //region -------------------- Getter methods --------------------

    public get state(): SoundStates {
        return this.#state
    }

    public get isLoading(): boolean {
        return this.#isLoading
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Equals methods --------------------

    public equals(other: any,): boolean {
        if (other == null)
            return false
        if (!(other instanceof HistoryState))
            return false

        return this.state === other.state
            && this.isLoading === other.isLoading
    }

    //endregion -------------------- Equals methods --------------------

}
