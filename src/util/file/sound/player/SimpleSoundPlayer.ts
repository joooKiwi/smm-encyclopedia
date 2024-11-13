import type {Nullable, NullOr} from '@joookiwi/type'

import type {SoundFile}                                                                                                                                                                                                                                                                                                                                                                                                          from 'util/file/sound/SoundFile'
import type {OnAfterPauseSoundPlayerCallback, OnAfterPlaySoundPlayerCallback, OnAfterStateChangedSoundPlayerCallback, OnAfterStopSoundPlayerCallback, OnBeforePauseSoundPlayerCallback, OnBeforePlaySoundPlayerCallback, OnBeforeStateChangedSoundPlayerCallback, OnBeforeStopSoundPlayerCallback, OnEndSoundPlayerCallback, OnPauseEventSoundPlayerCallback, OnPlayEventSoundPlayerCallback, OnPlayingEventSoundPlayerCallback} from 'util/file/sound/player/types'

import {HistoryState}        from 'util/file/sound/history/HistoryState'
import {SoundStateHistory}   from 'util/file/sound/history/SoundStateHistory'
import {AbstractSoundPlayer} from 'util/file/sound/player/AbstractSoundPlayer'
import {SoundStates}         from 'util/file/sound/player/SoundStates'

//region -------------------- Import from deconstruction --------------------

const {STANDBY, PAUSED, PLAYING, EXCEPTION,} = SoundStates

//endregion -------------------- Import from deconstruction --------------------

/**
 * @see https://www.w3schools.com/tags/ref_av_dom.asp Audio DOM reference (W3School.com)
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio Embed audio element (Mozilla.org)
 */
export class SimpleSoundPlayer<const SOURCE extends SoundFile = SoundFile,
    const TITLE extends string = string,
    const DOES_LOOP extends boolean = false, >
    extends AbstractSoundPlayer<SOURCE['key']> {

    //region -------------------- Fields --------------------

    readonly #source
    readonly #title
    readonly #doesLoop
    readonly #history

    #audio?: HTMLAudioElement
    #isDurationValid?: boolean
    #onBeforePlay?: NullOr<OnBeforePlaySoundPlayerCallback<this>>
    #onAfterPlay?: NullOr<OnAfterPlaySoundPlayerCallback<this>>
    #onBeforePause?: NullOr<OnBeforePauseSoundPlayerCallback<this>>
    #onAfterPause?: NullOr<OnAfterPauseSoundPlayerCallback<this>>
    #onBeforeStop?: NullOr<OnBeforeStopSoundPlayerCallback<this>>
    #onAfterStop?: NullOr<OnAfterStopSoundPlayerCallback<this>>
    #onBeforeStateChanged?: NullOr<OnBeforeStateChangedSoundPlayerCallback<this>>
    #onAfterStateChanged?: NullOr<OnAfterStateChangedSoundPlayerCallback<this>>

    #onPlayEvent?: NullOr<OnPlayEventSoundPlayerCallback<this>>
    #onPlayingEvent?: NullOr<OnPlayingEventSoundPlayerCallback<this>>
    #onPauseEvent?: NullOr<OnPauseEventSoundPlayerCallback<this>>
    #onEndEvent?: NullOr<OnEndSoundPlayerCallback<this>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(source: SOURCE, title: TITLE, doesLoop: DOES_LOOP = AbstractSoundPlayer.DEFAULT_DOES_LOOP as DOES_LOOP,) {
        super(source.key,)
        this.#source = source
        this.#title = title
        this.#doesLoop = doesLoop
        this.setState((this.#history = new SoundStateHistory(STANDBY,)).current,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get source(): SOURCE {
        return this.#source
    }

    public get title(): TITLE {
        return this.#title
    }

    public get doesLoop(): DOES_LOOP {
        return this.#doesLoop
    }

    public get history(): SoundStateHistory {
        return this.#history
    }

    //region -------------------- Getter & setter methods (audio) --------------------

    public get audio(): HTMLAudioElement {
        if (this.#audio != null)
            return this.#audio

        const audio = new Audio(this.source.fullName,)
        audio.onplaying = event => {
            switch (this.history.current.state) {
                case STANDBY:
                    return this.stop()
                case PAUSED:
                    return this.pause()
            }
            this.setState(new HistoryState(PLAYING, false, true,),)
            this.onPlayingEvent?.(this, event,)
        }
        audio.onpause = event => {
            if (this.history.current.state !== STANDBY)
                this.setState(new HistoryState(PAUSED, false, true,),)
            this.onPauseEvent?.(this, event,)
        }
        audio.onplay = event => {
            this.setState(new HistoryState(PLAYING, true, true,),)
            this.onPlayEvent?.(this, event,)
        }
        audio.onended = event => {
            this.setState(new HistoryState(STANDBY, false, true,),)
            this.onEndEvent?.(this, event,)
        }
        audio.title = this.title
        audio.loop = this.doesLoop
        return this.#audio = audio
    }

    /** The audio element has been initialized (by calling its getter) */
    public get isAudioExistant(): boolean {
        return this.#audio != null
    }

    /**
     * The element is paused.
     * If the elements have not been initialized, then it is <b>false</b>.
     */
    public get isPaused(): boolean {
        return this.#audio?.paused ?? false
    }

    /**
     * The element has a valid duration time.
     * And if the element {@link isAudioExistant is not existant}, then it will always return <b>false</b>.
     *
     * @onlyInitializedOnce
     */
    public get isDurationValid(): boolean {
        if (this.#isDurationValid != null)
            return this.#isDurationValid

        if (!this.isAudioExistant)
            return false
        return this.#isDurationValid = Number.isFinite(this.audio.duration)
    }

    //region -------------------- Getter & setter methods (audio event) --------------------

    public get onBeforePlay(): NullOr<OnBeforePlaySoundPlayerCallback<this>> {
        return this.#onBeforePlay ?? null
    }

    public set onBeforePlay(value: Nullable<OnBeforePlaySoundPlayerCallback<this>>,) {
        this.#onBeforePlay = value ?? null
    }

    public setOnBeforePlay(value: Nullable<OnBeforePlaySoundPlayerCallback<this>>,): this {
        this.onBeforePlay = value
        return this
    }


    public get onAfterPlay(): NullOr<OnAfterPlaySoundPlayerCallback<this>> {
        return this.#onAfterPlay ?? null
    }

    public set onAfterPlay(value: Nullable<OnAfterPlaySoundPlayerCallback<this>>,) {
        this.#onAfterPlay = value ?? null
    }

    public setOnAfterPlay(value: Nullable<OnAfterPlaySoundPlayerCallback<this>>,): this {
        this.onAfterPlay = value
        return this
    }


    public get onBeforePause(): NullOr<OnBeforePauseSoundPlayerCallback<this>> {
        return this.#onBeforePause ?? null
    }

    public set onBeforePause(value: Nullable<OnBeforePauseSoundPlayerCallback<this>>,) {
        this.#onBeforePause = value ?? null
    }

    public setOnBeforePause(value: Nullable<OnBeforePauseSoundPlayerCallback<this>>,): this {
        this.onBeforePause = value
        return this
    }


    public get onAfterPause(): NullOr<OnAfterPauseSoundPlayerCallback<this>> {
        return this.#onAfterPause ?? null
    }

    public set onAfterPause(value: Nullable<OnAfterPauseSoundPlayerCallback<this>>,) {
        this.#onAfterPause = value ?? null
    }

    public setOnAfterPause(value: Nullable<OnAfterPauseSoundPlayerCallback<this>>,): this {
        this.onAfterPause = value
        return this
    }


    public get onBeforeStop(): NullOr<OnBeforeStopSoundPlayerCallback<this>> {
        return this.#onBeforeStop ?? null
    }

    public set onBeforeStop(value: Nullable<OnBeforeStopSoundPlayerCallback<this>>,) {
        this.#onBeforeStop = value ?? null
    }

    public setOnBeforeStop(value: Nullable<OnBeforeStopSoundPlayerCallback<this>>,): this {
        this.onBeforeStop = value
        return this
    }


    public get onAfterStop(): NullOr<OnAfterStopSoundPlayerCallback<this>> {
        return this.#onAfterStop ?? null
    }

    public set onAfterStop(value: Nullable<OnAfterStopSoundPlayerCallback<this>>,) {
        this.#onAfterStop = value ?? null
    }

    public setOnAfterStop(value: Nullable<OnAfterStopSoundPlayerCallback<this>>,): this {
        this.onAfterStop = value
        return this
    }


    public get onBeforeStateChanged(): NullOr<OnBeforeStateChangedSoundPlayerCallback<this>> {
        return this.#onBeforeStateChanged ?? null
    }

    public set onBeforeStateChanged(value: Nullable<OnBeforeStateChangedSoundPlayerCallback<this>>,) {
        this.#onBeforeStateChanged = value ?? null
    }

    public setOnBeforeStateChanged(value: Nullable<OnBeforeStateChangedSoundPlayerCallback<this>>,): this {
        this.onBeforeStateChanged = value
        return this
    }


    public get onAfterStateChanged(): NullOr<OnAfterStateChangedSoundPlayerCallback<this>> {
        return this.#onAfterStateChanged ?? null
    }

    public set onAfterStateChanged(value: Nullable<OnAfterStateChangedSoundPlayerCallback<this>>,) {
        this.#onAfterStateChanged = value ?? null
    }

    public setOnAfterStateChanged(value: Nullable<OnAfterStateChangedSoundPlayerCallback<this>>,): this {
        this.onAfterStateChanged = value
        return this
    }

    //endregion -------------------- Getter & setter methods (audio event) --------------------
    //region -------------------- Getter & setter methods (audio HTML event) --------------------

    public get onPlayingEvent(): NullOr<OnPlayingEventSoundPlayerCallback<this>> {
        return this.#onPlayingEvent ?? null
    }

    public set onPlayingEvent(value: Nullable<OnPlayingEventSoundPlayerCallback<this>>,) {
        this.#onPlayingEvent = value ?? null
    }

    public setOnPlayingEvent(value: Nullable<OnPlayingEventSoundPlayerCallback<this>>,) {
        this.onPlayingEvent = value
        return this
    }


    public get onPlayEvent(): NullOr<OnPlayEventSoundPlayerCallback<this>> {
        return this.#onPlayEvent ?? null
    }

    public set onPlayEvent(value: Nullable<OnPlayEventSoundPlayerCallback<this>>,) {
        this.#onPlayEvent = value ?? null
    }

    public setOnPlayEvent(value: Nullable<OnPlayEventSoundPlayerCallback<this>>,) {
        this.onPlayEvent = value
        return this
    }


    public get onPauseEvent(): NullOr<OnPauseEventSoundPlayerCallback<this>> {
        return this.#onPauseEvent ?? null
    }

    public set onPauseEvent(value: Nullable<OnPauseEventSoundPlayerCallback<this>>,) {
        this.#onPauseEvent = value ?? null
    }

    public setOnPauseEvent(value: Nullable<OnPauseEventSoundPlayerCallback<this>>,): this {
        this.onPauseEvent = value
        return this
    }


    public get onEndEvent(): NullOr<OnEndSoundPlayerCallback<this>> {
        return this.#onEndEvent ?? null
    }

    public set onEndEvent(value: Nullable<OnEndSoundPlayerCallback<this>>,) {
        this.#onEndEvent = value ?? null
    }

    public setOnEndEvent(value: Nullable<OnEndSoundPlayerCallback<this>>,): this {
        this.onEndEvent = value
        return this
    }

    //endregion -------------------- Getter & setter methods (audio HTML event) --------------------

    //endregion -------------------- Getter & setter methods (audio) --------------------

    //endregion -------------------- Getter & setter methods --------------------

    /**
     * <p>
     *     Play the current {@link audio} element &
     *     setting the state to {@link SoundStates.PLAYING} (by the {@link HTMLAudioElement.onplaying onPlaying event}).
     * </p>
     *
     * <p>
     *     It will validate if the {@link isDurationValid duration is valid}
     *     and depending on it, the state will be set to {@link SoundStates.EXCEPTION}.
     * </p>
     *
     * <p>
     *     And until the element is not {@link SoundStates.PLAYING playing}, the state will be {@link SoundStates.LOADING}.
     * </p>
     *
     * @doesNotTriggerIfIsSameState
     */
    public override play(): this {
        const currentState = this.history.current

        if (currentState.isLoading)
            return this.setState(new HistoryState(PLAYING, true, false,))
        if (currentState.state === PLAYING)
            return this

        this.onBeforePlay?.(this)

        const audio = this.audio
        audio.play()
            .then(() => this.isDurationValid ? this : this.setState(new HistoryState(EXCEPTION, false, false,),),)
            .catch(() => this.setState(new HistoryState(EXCEPTION, false, false,),))
        this.setState(new HistoryState(PLAYING, true, false,),)
        this.onAfterPlay?.(this)
        return this
    }

    /**
     * Pause the {@link audio} element &
     * setting the state to {@link SoundStates.PAUSED}
     *
     * @doesNotTriggerIfIsSameState
     */
    public override pause(): this {
        const currentState = this.history.current
        const isLoading = currentState.isLoading
        const isPaused = currentState.state === PAUSED

        if (!isLoading || !isPaused) {
            if (isLoading)
                return this.setState(new HistoryState(PAUSED, true, false,))
            if (isPaused)
                return this
        }

        this.onBeforePause?.(this)
        this.audio.pause()
        this.setState(new HistoryState(PAUSED, false, false,),)
        this.onAfterPause?.(this)
        return this
    }

    /**
     * Stop the {@link audio} element by pausing it,
     * putting the current time to 0 &
     * setting the state to {@link SoundStates.STANDBY}
     *
     * @doesNotTriggerIfIsSameState
     */
    public override stop(): this {
        const currentState = this.history.current
        const isLoading = currentState.isLoading
        const isStandby = currentState.state === STANDBY

        if (!isLoading || !isStandby) {
            if (isLoading)
                return this.setState(new HistoryState(STANDBY, true, false,))
            if (isStandby)
                return this
        }

        this.onBeforeStop?.(this)
        const audio = this.audio
        audio.pause()
        audio.currentTime = 0
        this.setState(new HistoryState(STANDBY, false, false,),)
        this.onAfterStop?.(this)
        return this
    }

    public setState(value: HistoryState,): this {
        const history = this.history
        const currentState = history.current
        if (currentState.equals(value))
            return this
        this.onBeforeStateChanged?.(this, value, currentState,)
        history.current = value
        this.onAfterStateChanged?.(this, value, currentState,)
        return this
    }

}
