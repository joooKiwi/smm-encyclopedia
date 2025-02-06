import type {Nullable, NullOr} from '@joookiwi/type'

import type {SoundFile}                                             from 'util/file/sound/SoundFile'
import type {EventCallback, ExceptionCallback, SoundPlayerCallback} from 'util/file/sound/SoundPlayer.types'
import {PASSIVE_AND_ONCE_OPTION, PASSIVE_ONLY_OPTION}               from 'util/EventListener.options'
import {isInDevelopment}                                            from 'variables'

/**
 *
 * @see https://developer.mozilla.org/docs/Web/API/HTMLMediaElement#events Events
 * @see https://developer.mozilla.org/docs/Web/API/HTMLAudioElement Html Audio Element
 */
export class SoundPlayer<const FILE extends SoundFile = SoundFile,
    const TITLE extends string = string, > {

    //region -------------------- Fields --------------------

    readonly #file
    readonly #title

    #audio?: HTMLAudioElement
    #isLoading
    #hasBeenLoaded
    #hasValidDuration?: boolean

    #onBeforePlay?: NullOr<SoundPlayerCallback<this>>
    #onAfterPlay?: NullOr<SoundPlayerCallback<this>>
    #onBeforePause?: NullOr<SoundPlayerCallback<this>>
    #onAfterPause?: NullOr<SoundPlayerCallback<this>>
    #onBeforeStop?: NullOr<SoundPlayerCallback<this>>
    #onAfterStop?: NullOr<SoundPlayerCallback<this>>

    #onExceptionCaught?: NullOr<ExceptionCallback<this>>

    #onPlayingEvent?: NullOr<EventCallback<this>>
    #onCanPlayEvent?: NullOr<EventCallback<this>>
    #onCanPlayThroughEvent?: NullOr<EventCallback<this>>
    #onPlayEvent?: NullOr<EventCallback<this>>
    #onPauseEvent?: NullOr<EventCallback<this>>
    #onEndedEvent?: NullOr<EventCallback<this>>
    #onPlaybackRateChangedEvent?: NullOr<EventCallback<this>>
    #onTimeChangedEvent?: NullOr<EventCallback<this>>
    #onVolumeChangedEvent?: NullOr<EventCallback<this>>
    #onLoadStartEvent?: NullOr<EventCallback<this>>
    #onLoadProgressEvent?: NullOr<EventCallback<this>>
    #onLoadedDataEvent?: NullOr<EventCallback<this>>
    #onLoadedMetadataEvent?: NullOr<EventCallback<this>>

    #handlePlayingEvent?: (event: Event,) => void
    #handleCanPlayEventForLoading?: () => void
    #handleCanPlayEvent?: (event: Event,) => void
    #handleCanPlayThroughEvent?: (event: Event,) => void
    #handlePlayEvent?: (event: Event,) => void
    #handlePauseEvent?: (event: Event,) => void
    #handleEndedEvent?: (event: Event,) => void
    #handlePlaybackRateChangedEvent?: (event: Event,) => void
    #handleTimeChangedEvent?: (event: Event,) => void
    #handleVolumeChangedEvent?: (event: Event,) => void
    #handleLoadStartEvent?: (event: Event,) => void
    #handleLoadProgressEvent?: (event: Event,) => void
    #handleLoadedDataEvent?: (event: Event,) => void
    #handleLoadedMetadataEvent?: (event: Event,) => void
    #handleErrorEventOnExceptionCaught?: (event: ErrorEvent,) => void

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(file: FILE, title: TITLE,) {
        this.#file = file
        this.#title = title
        this.#isLoading = false
        this.#hasBeenLoaded = false
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get file(): FILE { return this.#file }

    public get title(): TITLE { return this.#title }


    /**
     * Get the {@link HTMLAudioElement} with the associated events
     * plus the {@link HTMLAudioElement.title title}, {@link HTMLAudioElement.loop loop}
     * and {@link HTMLAudioElement.src source}
     *
     * @onlyInitializedOnce
     */
    public get audio(): HTMLAudioElement {
        const value = this.#audio
        if (value != null)
            return value

        this._isLoading = true
        const file = this.file
        const audio = new Audio(file.fullName,)
        audio.addEventListener('playing',        this.#handlePlayingEvent =                it => this.onPlayingEvent?.(this, it,),             PASSIVE_ONLY_OPTION,)
        audio.addEventListener('canplay',        this.#handleCanPlayEvent =                it => this.onCanPlayEvent?.(this, it,),             PASSIVE_ONLY_OPTION,)
        audio.addEventListener('canplay',        this.#handleCanPlayEventForLoading =      () => this._isLoading = false,                      PASSIVE_AND_ONCE_OPTION,)
        audio.addEventListener('canplaythrough', this.#handleCanPlayThroughEvent =         it => this.onCanPlayThroughEvent?.(this, it,),      PASSIVE_ONLY_OPTION,)
        audio.addEventListener('play',           this.#handlePlayEvent =                   it => this.onPlayEvent?.(this, it,),                PASSIVE_ONLY_OPTION,)
        audio.addEventListener('pause',          this.#handlePauseEvent =                  it => this.onPauseEvent?.(this, it,),               PASSIVE_ONLY_OPTION,)
        audio.addEventListener('ended',          this.#handleEndedEvent =                  it => this.onEndedEvent?.(this, it,),               PASSIVE_ONLY_OPTION,)
        audio.addEventListener('ratechange',     this.#handlePlaybackRateChangedEvent =    it => this.onPlaybackRateChangedEvent?.(this, it,), PASSIVE_ONLY_OPTION,)
        audio.addEventListener('timeupdate',     this.#handleTimeChangedEvent =            it => this.onTimeChangedEvent?.(this, it,),         PASSIVE_ONLY_OPTION,)
        audio.addEventListener('volumechange',   this.#handleVolumeChangedEvent =          it => this.onVolumeChangedEvent?.(this, it,),       PASSIVE_ONLY_OPTION,)
        audio.addEventListener('loadstart',      this.#handleLoadStartEvent =              it => this.onLoadStartEvent?.(this, it,),           PASSIVE_ONLY_OPTION,)
        audio.addEventListener('progress',       this.#handleLoadProgressEvent =           it => this.onLoadProgressEvent?.(this, it,),        PASSIVE_ONLY_OPTION,)
        audio.addEventListener('loadeddata',     this.#handleLoadedDataEvent =             it => this.onLoadedDataEvent?.(this, it,),          PASSIVE_ONLY_OPTION,)
        audio.addEventListener('loadedmetadata', this.#handleLoadedMetadataEvent =         it => this.onLoadedMetadataEvent?.(this, it,),      PASSIVE_ONLY_OPTION,)
        audio.addEventListener('error',          this.#handleErrorEventOnExceptionCaught = it => this._onExceptionCaught(it,),                 PASSIVE_ONLY_OPTION,)
        audio.title = this.title
        // audio.loop = file.repeatableType.doesLoopAtTheEnd
        this._hasBeenLoaded = true
        return this.#audio = audio
    }
    protected get _audio(): NullOr<HTMLAudioElement> {
        return this.#audio ?? null
    }

    /** The {@link audio audio element} has been loaded with the necessary properties to play */
    public get hasBeenLoaded(): boolean { return this.#hasBeenLoaded }
    protected get _hasBeenLoaded(): boolean { return this.#hasBeenLoaded }
    protected set _hasBeenLoaded(value: boolean,) { this.#hasBeenLoaded = value }

    /** The {@link audio audio element} is loading its information before being available to be played */
    public get isLoading(): boolean { return this.#isLoading }
    protected get _isLoading(): boolean { return this.#isLoading }
    protected set _isLoading(value: boolean,) { this.#isLoading = value }

    /**
     * The {@link audio audio element} has a valid {@link HTMLAudioElement.duration duration time}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only <b>false</b> is returned
     */
    public get hasValidDuration(): boolean {
        const value = this.#hasValidDuration
        if (value != null)
            return value

        const audio = this._audio
        if (audio == null)
            return false
        return this.#hasValidDuration = Number.isFinite(audio.duration,)
    }

    /**
     * The {@link audio audio element} is {@link HTMLAudioElement.muted muted}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only <b>false</b> is returned
     */
    public get isMuted(): boolean { return this._audio?.muted ?? false }

    /**
     * The {@link audio audio element} is {@link HTMLAudioElement.paused paused}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only <b>false</b> is returned
     */
    public get isPaused(): boolean { return this._audio?.paused ?? false }

    /**
     * The {@link audio audio element} does {@link HTMLAudioElement.loop loop}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only <b>false</b> is returned
     */
    public get doesLoop(): boolean { return this._audio?.loop ?? false }

    /**
     * The {@link audio audio element} is {@link HTMLAudioElement.ended at the end}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only <b>false</b> is returned
     */
    public get isAtTheEnd(): boolean { return this._audio?.ended ?? false }

    /**
     * The {@link audio audio element} {@link HTMLAudioElement.currentTime current time}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only {@link Number.NaN NaN} is returned
     */
    public get currentTime(): number { return this._audio?.currentTime ?? Number.NaN }

    /**
     * Change the {@link audio audio element} {@link HTMLAudioElement.currentTime current time}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then nothing is done
     */
    public set currentTime(value: number,) {
        const audio = this._audio
        if (audio == null)
            return
        audio.currentTime = value
    }

    /**
     * The {@link audio audio element} {@link HTMLAudioElement.duration total time}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only {@link Number.NaN NaN} is returned
     */
    public get totalTime(): number { return this._audio?.duration ?? Number.NaN }

    /**
     * The {@link audio audio element} {@link HTMLAudioElement.volume volume}
     *
     * @note If the {@link audio audio element} {@link hasBeenLoaded has not been loaded},
     *       then only <b>false</b> is returned
     */
    public get volume(): number { return this._audio?.volume ?? Number.NaN }


    public get onBeforePlay(): NullOr<SoundPlayerCallback<this>> { return this.#onBeforePlay ?? null }
    public set onBeforePlay(value: Nullable<SoundPlayerCallback<this>>,) { this.#onBeforePlay = value ?? null }
    public setOnBeforePlay(value: Nullable<SoundPlayerCallback<this>>,): this {
        this.onBeforePlay = value
        return this
    }

    public get onAfterPlay(): NullOr<SoundPlayerCallback<this>> { return this.#onAfterPlay ?? null }
    public set onAfterPlay(value: Nullable<SoundPlayerCallback<this>>,) { this.#onAfterPlay = value ?? null }
    public setOnAfterPlay(value: Nullable<SoundPlayerCallback<this>>,): this {
        this.onAfterPlay = value
        return this
    }

    public get onBeforePause(): NullOr<SoundPlayerCallback<this>> { return this.#onBeforePause ?? null }
    public set onBeforePause(value: Nullable<SoundPlayerCallback<this>>,) { this.#onBeforePause = value ?? null }
    public setOnBeforePause(value: Nullable<SoundPlayerCallback<this>>,): this {
        this.onBeforePause = value
        return this
    }

    public get onAfterPause(): NullOr<SoundPlayerCallback<this>> { return this.#onAfterPause ?? null }
    public set onAfterPause(value: Nullable<SoundPlayerCallback<this>>,) { this.#onAfterPause = value ?? null }
    public setOnAfterPause(value: Nullable<SoundPlayerCallback<this>>,): this {
        this.onAfterPause = value
        return this
    }

    public get onBeforeStop(): NullOr<SoundPlayerCallback<this>> { return this.#onBeforeStop ?? null }
    public set onBeforeStop(value: Nullable<SoundPlayerCallback<this>>,) { this.#onBeforeStop = value ?? null }
    public setOnBeforeStop(value: Nullable<SoundPlayerCallback<this>>,): this {
        this.onBeforeStop = value
        return this
    }

    public get onAfterStop(): NullOr<SoundPlayerCallback<this>> { return this.#onAfterStop ?? null }
    public set onAfterStop(value: Nullable<SoundPlayerCallback<this>>,) { this.#onAfterStop = value ?? null }
    public setOnAfterStop(value: Nullable<SoundPlayerCallback<this>>,): this {
        this.onAfterStop = value
        return this
    }

    public get onExceptionCaught(): NullOr<ExceptionCallback<this>> { return this.#onExceptionCaught ?? null }
    public set onExceptionCaught(value: Nullable<ExceptionCallback<this>>,) { this.#onExceptionCaught = value ?? null }
    public setOnExceptionCaught(value: Nullable<ExceptionCallback<this>>,): this {
        this.onExceptionCaught = value
        return this
    }


    public get onPlayingEvent(): NullOr<EventCallback<this>> { return this.#onPlayingEvent ?? null }
    public set onPlayingEvent(value: Nullable<EventCallback<this>>,) { this.#onPlayingEvent = value ?? null }
    public setOnPlayingEvent(value: Nullable<EventCallback<this>>,): this {
        this.onPlayingEvent = value
        return this
    }

    public get onCanPlayEvent(): NullOr<EventCallback<this>> { return this.#onCanPlayEvent ?? null }
    public set onCanPlayEvent(value: Nullable<EventCallback<this>>,) { this.#onCanPlayEvent = value ?? null }
    public setOnCanPlayEvent(value: Nullable<EventCallback<this>>,): this {
        this.onCanPlayEvent = value
        return this
    }

    public get onCanPlayThroughEvent(): NullOr<EventCallback<this>> { return this.#onCanPlayThroughEvent ?? null }
    public set onCanPlayThroughEvent(value: Nullable<EventCallback<this>>,) { this.#onCanPlayThroughEvent = value ?? null }
    public setOnCanPlayThroughEvent(value: Nullable<EventCallback<this>>,): this {
        this.onCanPlayThroughEvent = value
        return this
    }

    public get onPlayEvent(): NullOr<EventCallback<this>> { return this.#onPlayEvent ?? null }
    public set onPlayEvent(value: Nullable<EventCallback<this>>,) { this.#onPlayEvent = value ?? null }
    public setOnPlayEvent(value: Nullable<EventCallback<this>>,): this {
        this.onPlayEvent = value
        return this
    }

    public get onPauseEvent(): NullOr<EventCallback<this>> { return this.#onPauseEvent ?? null }
    public set onPauseEvent(value: Nullable<EventCallback<this>>,) { this.#onPauseEvent = value ?? null }
    public setOnPauseEvent(value: Nullable<EventCallback<this>>,): this {
        this.onPauseEvent = value
        return this
    }

    public get onEndedEvent(): NullOr<EventCallback<this>> { return this.#onEndedEvent ?? null }
    public set onEndedEvent(value: Nullable<EventCallback<this>>,) { this.#onEndedEvent = value ?? null }
    public setOnEndedEvent(value: Nullable<EventCallback<this>>,): this {
        this.onEndedEvent = value
        return this
    }

    public get onPlaybackRateChangedEvent(): NullOr<EventCallback<this>> { return this.#onPlaybackRateChangedEvent ?? null }
    public set onPlaybackRateChangedEvent(value: Nullable<EventCallback<this>>,) { this.#onPlaybackRateChangedEvent = value ?? null }
    public setOnPlaybackRateChangedEvent(value: Nullable<EventCallback<this>>,): this {
        this.onPlaybackRateChangedEvent = value
        return this
    }

    public get onTimeChangedEvent(): NullOr<EventCallback<this>> { return this.#onTimeChangedEvent ?? null }
    public set onTimeChangedEvent(value: Nullable<EventCallback<this>>,) { this.#onTimeChangedEvent = value ?? null }
    public setOnTimeChangedEvent(value: Nullable<EventCallback<this>>,): this {
        this.onTimeChangedEvent = value
        return this
    }

    public get onVolumeChangedEvent(): NullOr<EventCallback<this>> { return this.#onVolumeChangedEvent ?? null }
    public set onVolumeChangedEvent(value: Nullable<EventCallback<this>>,) { this.#onVolumeChangedEvent = value ?? null }
    public setOnVolumeChangedEvent(value: Nullable<EventCallback<this>>,): this {
        this.onVolumeChangedEvent = value
        return this
    }

    public get onLoadStartEvent(): NullOr<EventCallback<this>> { return this.#onLoadStartEvent ?? null }
    public set onLoadStartEvent(value: Nullable<EventCallback<this>>,) { this.#onLoadStartEvent = value ?? null }
    public setOnLoadStartEvent(value: Nullable<EventCallback<this>>,): this {
        this.onLoadStartEvent = value
        return this
    }

    public get onLoadProgressEvent(): NullOr<EventCallback<this>> { return this.#onLoadProgressEvent ?? null }
    public set onLoadProgressEvent(value: Nullable<EventCallback<this>>,) { this.#onLoadProgressEvent = value ?? null }
    public setOnLoadProgressEvent(value: Nullable<EventCallback<this>>,): this {
        this.onLoadProgressEvent = value
        return this
    }

    public get onLoadedDataEvent(): NullOr<EventCallback<this>> { return this.#onLoadedDataEvent ?? null }
    public set onLoadedDataEvent(value: Nullable<EventCallback<this>>,) { this.#onLoadedDataEvent = value ?? null }
    public setOnLoadedDataEvent(value: Nullable<EventCallback<this>>,): this {
        this.onLoadedDataEvent = value
        return this
    }

    public get onLoadedMetadataEvent(): NullOr<EventCallback<this>> { return this.#onLoadedMetadataEvent ?? null }
    public set onLoadedMetadataEvent(value: Nullable<EventCallback<this>>,) { this.#onLoadedMetadataEvent = value ?? null }
    public setOnLoadedMetadataEvent(value: Nullable<EventCallback<this>>,): this {
        this.onLoadedMetadataEvent = value
        return this
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Call the {@link audio audio element} {@link HTMLAudioElement.play play method} while handling
     * if it was paused after it being triggered.
     *
     * It also calls {@link onBeforePlay} and {@link onAfterPlay}
     */
    public play(): this {
        this.onBeforePlay?.(this,)
        this.audio.play()
            .then(() => this._handleDurationValidity(),)
            .catch(it => {
                if (it.name === 'AbortError')
                    if (this.isPaused)
                        return // Is it now paused, then it was aborted normally
                this._onExceptionCaught(it,)
            },)
        this.onAfterPlay?.(this,)
        return this
    }

    /**
     * Call the {@link audio audio element} {@link HTMLAudioElement.pause pause method}.
     *
     * It also calls {@link onBeforePause} and {@link onAfterPause}
     */
    public pause(): this {
        this.onBeforePause?.(this,)
        this.audio.pause()
        this.onAfterPause?.(this,)
        return this
    }

    /**
     * Call the {@link audio audio element} {@link HTMLAudioElement.pause pause method}
     * and set the {@link currentTime current time} to <b>0</b>.
     *
     * It also calls {@link onBeforeStop} and {@link onAfterStop}
     */
    public stop(): this {
        this.onBeforeStop?.(this,)
        this.audio.pause()
        this.currentTime = 0
        this.onAfterStop?.(this,)
        return this
    }

    /** Remove every event associated to the current instance that could have been initialized */
    public removeEvents(): this {
        const audio = this._audio
        if (audio == null)
            return this

        const handlePlaying = this.#handlePlayingEvent
        if (handlePlaying != null)
            audio.removeEventListener('playing', handlePlaying, PASSIVE_ONLY_OPTION,)

        const handleCanPlayForLoading = this.#handleCanPlayEventForLoading
        if (handleCanPlayForLoading != null)
            audio.removeEventListener('canplay', handleCanPlayForLoading, PASSIVE_AND_ONCE_OPTION,)

        const handleCanPlay = this.#handleCanPlayEvent
        if (handleCanPlay != null)
            audio.removeEventListener('canplay', handleCanPlay, PASSIVE_ONLY_OPTION,)

        const handleCanPlayThrough = this.#handleCanPlayThroughEvent
        if (handleCanPlayThrough != null)
            audio.removeEventListener('canplaythrough', handleCanPlayThrough, PASSIVE_ONLY_OPTION,)

        const handlePlay = this.#handlePlayEvent
        if (handlePlay != null)
            audio.removeEventListener('play', handlePlay, PASSIVE_ONLY_OPTION,)

        const handlePause = this.#handlePauseEvent
        if (handlePause != null)
            audio.removeEventListener('pause', handlePause, PASSIVE_ONLY_OPTION,)

        const handleEnded = this.#handleEndedEvent
        if (handleEnded != null)
            audio.removeEventListener('ended', handleEnded, PASSIVE_ONLY_OPTION,)

        const handlePlaybackRateChanged = this.#handlePlaybackRateChangedEvent
        if (handlePlaybackRateChanged != null)
            audio.removeEventListener('ratechange', handlePlaybackRateChanged, PASSIVE_ONLY_OPTION,)

        const handleTimeChanged = this.#handleTimeChangedEvent
        if (handleTimeChanged != null)
            audio.removeEventListener('timeupdate', handleTimeChanged, PASSIVE_ONLY_OPTION,)

        const handleVolumeChanged = this.#handleVolumeChangedEvent
        if (handleVolumeChanged != null)
            audio.removeEventListener('volumechange', handleVolumeChanged, PASSIVE_ONLY_OPTION,)

        const handleLoadStart = this.#handleLoadStartEvent
        if (handleLoadStart != null)
            audio.removeEventListener('loadstart', handleLoadStart, PASSIVE_ONLY_OPTION,)

        const handleLoadProgress = this.#handleLoadProgressEvent
        if (handleLoadProgress != null)
            audio.removeEventListener('progress', handleLoadProgress, PASSIVE_ONLY_OPTION,)

        const handleLoadedData = this.#handleLoadedDataEvent
        if (handleLoadedData != null)
            audio.removeEventListener('loadeddata', handleLoadedData, PASSIVE_ONLY_OPTION,)

        const handleLoadedMetadata = this.#handleLoadedMetadataEvent
        if (handleLoadedMetadata != null)
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata, PASSIVE_ONLY_OPTION,)

        const handleErrorOnExceptionCaught = this.#handleErrorEventOnExceptionCaught
        if (handleErrorOnExceptionCaught != null)
            audio.removeEventListener('error', handleErrorOnExceptionCaught, PASSIVE_ONLY_OPTION,)

        return this
    }

    /** Handle the validity of the {@link audio audio element} {@link HTMLAudioElement.duration duration time} */
    protected _handleDurationValidity() {
        if (!this.hasBeenLoaded)
            return
        if (this.hasValidDuration)
            return

        const file = this.file
        this._onExceptionCaught(`The duration of the element “${file.fullName}” (${file.key}) is invalid!`,)
    }

    /**
     * A method to tell that an exception was caught when attempting to play the {@link audio audio element}
     *
     * @param reason The reason that was thrown when an exception was caught
     */
    protected _onExceptionCaught(reason: unknown,) {
        if (isInDevelopment)
            console.error(reason,)

        this.onExceptionCaught?.(this, reason,)
    }

    //endregion -------------------- Methods --------------------

}
