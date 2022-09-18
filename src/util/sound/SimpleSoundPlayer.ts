import type {OnAfterPauseSoundPlayerCallback, OnAfterPlayingSoundPlayerCallback, OnAfterPlaySoundPlayerCallback, OnAfterStateChangedSoundPlayerCallback, OnAfterStopSoundPlayerCallback, OnBeforePauseSoundPlayerCallback, OnBeforePlaySoundPlayerCallback, OnBeforeStateChangedSoundPlayerCallback, OnBeforeStopSoundPlayerCallback, OnEndSoundPlayerCallback} from './types';

import {AbstractSoundPlayer} from './AbstractSoundPlayer';
import {SoundStateHolder}    from './holder/SoundStateHolder';
import {SoundStates}         from './SoundStates';

export class SimpleSoundPlayer<SOURCE extends string = string, TITLE extends string = string, DOES_LOOP extends boolean = false, >
    extends AbstractSoundPlayer<SOURCE> {

    //region -------------------- Fields --------------------

    readonly #source;
    readonly #title;
    readonly #doesLoop;
    readonly #state;

    #audio?: HTMLAudioElement;
    #isDurationValid?: boolean;
    #onBeforePlay?: | OnBeforePlaySoundPlayerCallback<this> | null;
    #onAfterPlay?: | OnAfterPlaySoundPlayerCallback<this> | null;
    #onPlaying?: | OnAfterPlayingSoundPlayerCallback<this> | null;
    #onBeforePause?: | OnBeforePauseSoundPlayerCallback<this> | null;
    #onAfterPause?: | OnAfterPauseSoundPlayerCallback<this> | null;
    #onBeforeStop?: | OnBeforeStopSoundPlayerCallback<this> | null;
    #onAfterStop?: | OnAfterStopSoundPlayerCallback<this> | null;
    #onEnd?: | OnEndSoundPlayerCallback<this> | null;
    #onBeforeStateChanged?: | OnBeforeStateChangedSoundPlayerCallback<this> | null;
    #onAfterStateChanged?: | OnAfterStateChangedSoundPlayerCallback<this> | null;

    //endregion -------------------- Fields --------------------

    public constructor(source: SOURCE, title: TITLE, doesLoop: DOES_LOOP = AbstractSoundPlayer.DEFAULT_DOES_LOOP as DOES_LOOP,) {
        super(source,);
        this.#source = source;
        this.#title = title;
        this.#doesLoop = doesLoop;
        this.setState((this.#state = new SoundStateHolder(SoundStates.STANDBY,)).currentState,);
    }

    //region -------------------- Getter & setter methods --------------------

    public get source(): SOURCE {
        return this.#source;
    }

    public get title(): TITLE {
        return this.#title;
    }

    public get doesLoop(): DOES_LOOP {
        return this.#doesLoop;
    }

    public get state(): SoundStateHolder {
        return this.#state;
    }

    //region -------------------- Getter & setter methods (audio) --------------------

    public get audio(): HTMLAudioElement {
        if (this.#audio == null) {
            const audio = this.#audio = new Audio(this.source);
            audio.onplaying = event => {
                switch (this.state.currentState) {
                    case SoundStates.STANDBY:
                        return this.stop();
                    case SoundStates.PAUSED:
                        return this.pause();
                }
                this.setState(SoundStates.PLAYING,);
                this.onPlaying?.(this, event,);
            };
            audio.onended = event => {
                this.setState(SoundStates.STANDBY,);
                this.onEnd?.(this, event,);
            };
            audio.title = this.title;
            audio.loop = this.doesLoop;
        }
        return this.#audio;
    }

    public get isDurationValid(): boolean {
        if (this.#isDurationValid == null) {
            if (this.#audio == null)
                return false;
            this.#isDurationValid = Number.isFinite(this.audio.duration);
        }
        return this.#isDurationValid;
    }

    //region -------------------- Getter & setter methods (audio event) --------------------

    public get onBeforePlay(): | OnBeforePlaySoundPlayerCallback<this> | null {
        return this.#onBeforePlay ?? null;
    }

    public set onBeforePlay(value: | OnBeforePlaySoundPlayerCallback<this> | null | undefined,) {
        this.#onBeforePlay = value ?? null;
    }

    public setOnBeforePlay(value: | OnBeforePlaySoundPlayerCallback<this> | null | undefined,): this {
        this.onBeforePlay = value;
        return this;
    }


    public get onAfterPlay(): | OnAfterPlaySoundPlayerCallback<this> | null {
        return this.#onAfterPlay ?? null;
    }

    public set onAfterPlay(value: | OnAfterPlaySoundPlayerCallback<this> | null | undefined,) {
        this.#onAfterPlay = value ?? null;
    }

    public setOnAfterPlay(value: | OnAfterPlaySoundPlayerCallback<this> | null | undefined,): this {
        this.onAfterPlay = value;
        return this;
    }


    public get onPlaying(): | OnAfterPlayingSoundPlayerCallback<this> | null {
        return this.#onPlaying ?? null;
    }

    public set onPlaying(value: | OnAfterPlayingSoundPlayerCallback<this> | null | undefined,) {
        this.#onPlaying = value ?? null;
    }

    public setOnPlaying(value: | OnAfterPlayingSoundPlayerCallback<this> | null | undefined,) {
        this.onPlaying = value;
        return this;
    }


    public get onBeforePause(): | OnBeforePauseSoundPlayerCallback<this> | null {
        return this.#onBeforePause ?? null;
    }

    public set onBeforePause(value: | OnBeforePauseSoundPlayerCallback<this> | null | undefined,) {
        this.#onBeforePause = value ?? null;
    }

    public setOnBeforePause(value: | OnBeforePauseSoundPlayerCallback<this> | null | undefined,): this {
        this.onBeforePause = value;
        return this;
    }


    public get onAfterPause(): | OnAfterPauseSoundPlayerCallback<this> | null {
        return this.#onAfterPause ?? null;
    }

    public set onAfterPause(value: | OnAfterPauseSoundPlayerCallback<this> | null | undefined,) {
        this.#onAfterPause = value ?? null;
    }

    public setOnAfterPause(value: | OnAfterPauseSoundPlayerCallback<this> | null | undefined,): this {
        this.onAfterPause = value;
        return this;
    }


    public get onBeforeStop(): | OnBeforeStopSoundPlayerCallback<this> | null {
        return this.#onBeforeStop ?? null;
    }

    public set onBeforeStop(value: | OnBeforeStopSoundPlayerCallback<this> | null | undefined,) {
        this.#onBeforeStop = value;
    }

    public setOnBeforeStop(value: | OnBeforeStopSoundPlayerCallback<this> | null | undefined,): this {
        this.onBeforeStop = value;
        return this;
    }


    public get onAfterStop(): OnAfterStopSoundPlayerCallback<this> | null {
        return this.#onAfterStop ?? null;
    }

    public set onAfterStop(value: OnAfterStopSoundPlayerCallback<this> | null | undefined,) {
        this.#onAfterStop = value ?? null;
    }

    public setOnAfterStop(value: OnAfterStopSoundPlayerCallback<this> | null | undefined,): this {
        this.onAfterStop = value;
        return this;
    }


    public get onEnd(): | OnEndSoundPlayerCallback<this> | null {
        return this.#onEnd ?? null;
    }

    public set onEnd(value: | OnEndSoundPlayerCallback<this> | null | undefined,) {
        this.#onEnd = value ?? null;
    }

    public setOnEnd(value: | OnEndSoundPlayerCallback<this> | null | undefined,): this {
        this.onEnd = value;
        return this;
    }


    public get onBeforeStateChanged(): | OnBeforeStateChangedSoundPlayerCallback<this> | null {
        return this.#onBeforeStateChanged ?? null;
    }

    public set onBeforeStateChanged(value: | OnBeforeStateChangedSoundPlayerCallback<this> | null | undefined,) {
        this.#onBeforeStateChanged = value ?? null;
    }

    public setOnBeforeStateChanged(value: | OnBeforeStateChangedSoundPlayerCallback<this> | null | undefined,): this {
        this.onBeforeStateChanged = value;
        return this;
    }


    public get onAfterStateChanged(): | OnAfterStateChangedSoundPlayerCallback<this> | null {
        return this.#onAfterStateChanged ?? null;
    }

    public set onAfterStateChanged(value: | OnAfterStateChangedSoundPlayerCallback<this> | null | undefined,) {
        this.#onAfterStateChanged = value ?? null;
    }

    public setOnAfterStateChanged(value: | OnAfterStateChangedSoundPlayerCallback<this> | null | undefined,): this {
        this.onAfterStateChanged = value;
        return this;
    }

    //endregion -------------------- Getter & setter methods (audio event) --------------------

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
        if (this.state.currentState === SoundStates.PLAYING)
            return this;

        this.onBeforePlay?.(this);

        const audio = this.audio;
        audio.play()
            .then(() => {
                if (this.isDurationValid)
                    return;
                this.setState(SoundStates.EXCEPTION,);
            })
            .catch(() => this.setState(SoundStates.EXCEPTION,));
        this.setState(SoundStates.LOADING,);
        this.onAfterPlay?.(this);
        return this;
    }

    /**
     * Pause the {@link audio} element &
     * setting the state to {@link SoundStates.PAUSED}
     *
     * @doesNotTriggerIfIsSameState
     */
    public override pause(): this {
        const state = this.state;
        switch (state.currentState) {
            case SoundStates.PAUSED:
                if (state.lastState === SoundStates.PLAYING)
                    return this;
                break;
            case SoundStates.LOADING:
                return this.setState(SoundStates.PAUSED,);
        }

        this.onBeforePause?.(this);
        this.audio.pause();
        this.setState(SoundStates.PAUSED,);
        this.onAfterPause?.(this);
        return this;
    }

    /**
     * Stop the {@link audio} element by pausing it,
     * putting the current time to 0 &
     * setting the state to {@link SoundStates.STANDBY}
     *
     * @doesNotTriggerIfIsSameState
     */
    public override stop(): this {
        const state = this.state;
        switch (state.currentState) {
            case SoundStates.STANDBY:
                if (state.lastState === SoundStates.PLAYING)
                    return this;
                break;
            case SoundStates.LOADING:
                return this.setState(SoundStates.STANDBY,);
        }

        this.onBeforeStop?.(this);
        const audio = this.audio;
        audio.pause();
        audio.currentTime = 0;
        this.setState(SoundStates.STANDBY,);
        this.onAfterStop?.(this);
        return this;
    }

    public setState(value: SoundStates,): this {
        const state = this.state,
            currentState = state.currentState;
        if (currentState === value)
            return this;
        this.onBeforeStateChanged?.(this, value, currentState,);
        state.currentState = value;
        this.onAfterStateChanged?.(this, value, currentState,);
        return this;
    }

}

