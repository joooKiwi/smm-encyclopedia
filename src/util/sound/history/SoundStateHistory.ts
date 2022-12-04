import type {Nullable} from 'util/types/nullable'

import {HistoryState} from 'util/sound/history/HistoryState'
import {SoundStates}  from 'util/sound/player/SoundStates'

export class SoundStateHistory {

    //region -------------------- Fields --------------------

    readonly #history: HistoryState[]
    #last?: HistoryState
    #current!: HistoryState

    //endregion -------------------- Fields --------------------

    public constructor(currentState: SoundStates,) {
        if (currentState === SoundStates.LOADING)
            throw new ReferenceError('The first state of the history cannot be the loading state!')
        this.#current = new HistoryState(currentState, false,)
        this.#history = [this.current,]
    }

    //region -------------------- Getter methods --------------------

    public get history(): readonly HistoryState[] {
        return this.#history
    }

    protected get _history(): HistoryState[] {
        return this.#history
    }


    public get current(): HistoryState {
        return this.#current
    }

    public set current(value: Nullable<HistoryState>,) {
        if (value == null)
            return
        this.setLast(this.current)
            ._history.push(this.#current = value)
    }

    public setCurrent(value: Nullable<HistoryState>,): this {
        this.current = value
        return this
    }


    public get last(): HistoryState {
        if (this.#last == null)
            throw new ReferenceError('The history has no last state!')
        return this.#last
    }

    protected set last(value: Nullable<HistoryState>,) {
        if (value == null)
            throw new TypeError('The last state could not be set to a null value.')
        this.#last = value
    }

    protected setLast(value: Nullable<HistoryState>,): this {
        this.last = value
        return this
    }

    //endregion -------------------- Getter methods --------------------

}
