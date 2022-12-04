import type {SoundStates} from 'util/sound/player/SoundStates'

export class HistoryState {

    //region -------------------- Fields --------------------

    readonly #state
    readonly #isLoading
    readonly #isFromEventDirectly

    //endregion -------------------- Fields --------------------

    public constructor(state: | SoundStates | HistoryState, isLoading: | boolean | HistoryState, isFromEventDirectly: | boolean | HistoryState,) {
        this.#state = state instanceof HistoryState ? state.state : state
        this.#isLoading = isLoading instanceof HistoryState ? isLoading.isLoading : isLoading
        this.#isFromEventDirectly = isFromEventDirectly instanceof HistoryState ? isFromEventDirectly.isFromEventDirectly : isFromEventDirectly
    }

    //region -------------------- Getter methods --------------------

    public get state(): SoundStates {
        return this.#state
    }

    public get isLoading(): boolean {
        return this.#isLoading
    }

    public get isFromEventDirectly(): boolean {
        return this.#isFromEventDirectly
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
            && this.isFromEventDirectly === other.isFromEventDirectly
    }

    //endregion -------------------- Equals methods --------------------

}
