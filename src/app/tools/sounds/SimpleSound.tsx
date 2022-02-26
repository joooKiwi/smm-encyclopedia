import './SimpleSound.scss';

import {Component} from 'react';

import type {ReactElement}          from '../../../util/react/ReactProperty';
import type {SimpleSoundProperties} from './properties/SimpleSoundProperties';
import type {SimpleSoundState}      from './properties/SimpleSoundState';

import {SoundStates}            from './SoundStates';
import {SoundSubElementsHolder} from './holder/SoundSubElementsHolder';

export default class SimpleSound
    extends Component<SimpleSoundProperties, SimpleSoundState> {

    //region -------------------- Attributes --------------------

    static readonly #PAUSE_CLASSES = 'btn btn-lg bi-pause-btn-fill audio-state audio-state-pause';
    static readonly #STOP_CLASSES = 'btn btn-lg bi-stop-btn-fill audio-state audio-state-stop';
    static readonly #EXCEPTION_CLASSES = 'bi-shield-fill-exclamation audio-state audio-state-exception';

    static #IS_EVERY_AUDIO_LOOPS_AFTER_COMPLETED = false;

    static readonly #EVERY_AUDIO_ELEMENTS = new Map<string, HTMLAudioElement>();

    #audio?: HTMLAudioElement;
    #playElement?: ReactElement;
    #pauseElement?: ReactElement;
    #stopElement?: ReactElement;
    #errorElement?: ReactElement;

    //endregion -------------------- Attributes --------------------

    public constructor(properties: SimpleSoundProperties,) {
        super(properties);
        this.state = {state: SoundStates.STANDBY,};
    }

    //region -------------------- Getter & setter methods --------------------

    /**
     * A {@link Map} of every audio elements.<br/>
     * The key is the source of the audio element created.
     *
     * @see _audio
     */
    protected static get _everyAudioElements() {
        return this.#EVERY_AUDIO_ELEMENTS;
    }

    public static get isEveryAudioLoopsAfterCompleted(): boolean {
        return this.#IS_EVERY_AUDIO_LOOPS_AFTER_COMPLETED;
    }

    public static set isEveryAudioLoopsAfterCompleted(value: boolean,) {
        this.#IS_EVERY_AUDIO_LOOPS_AFTER_COMPLETED = value;
        this._everyAudioElements.forEach(audioElement => audioElement.loop = value);
    }

    /**
     * A {@link HTMLAudioElement Audio} element created from the source
     * and with the global property {@link isEveryAudioLoopsAfterCompleted}.
     *
     * @note The element is created only if any buttons (play, pause or stop) is handled. Otherwise, it will not be created.
     */
    protected get _audio(): HTMLAudioElement {
        if (this.#audio == null) {
            let audio: HTMLAudioElement;
            if (SimpleSound._everyAudioElements.has(this._source))
                audio = SimpleSound._everyAudioElements.get(this._source)!;
            else
                SimpleSound._everyAudioElements.set(this._source, audio = new Audio(this._source));
            this.#audio = audio;
            audio.onended = () => this.setState({state: SoundStates.STANDBY,});
            audio.loop = SimpleSound.isEveryAudioLoopsAfterCompleted;
        }
        return this.#audio;
    }


    private get __playElement() {
        return this.#playElement ??= <div key={`${this._title} - play`} className={SimpleSound.#PLAY_CLASSES} onClick={() => this.__play()}/>;
    }

    private get __pauseElement() {
        return this.#pauseElement ??= <div key={`${this._title} - pause`} className={SimpleSound.#PAUSE_CLASSES} onClick={() => this.__pause()}/>;
    }

    private get __stopElement() {
        return this.#stopElement ??= <div key={`${this._title} - stop`} className={SimpleSound.#STOP_CLASSES} onClick={() => this.__stop()}/>;
    }

    private get __exceptionElement() {
        return this.#errorElement ??= <div key={`${this._title} - exception`} className={SimpleSound.#EXCEPTION_CLASSES}/>;
    }

    protected get _source() {
        return this.props.source;
    }

    protected get _title() {
        return this.props.title;
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    private __play(): void {
        this._audio.play()
            .catch(() => this.setState({state: SoundStates.EXCEPTION,}));
        this.setState({state: SoundStates.PLAYING,});
    }

    private __pause(): void {
        this._audio.pause();
        this.setState({state: SoundStates.PAUSED,});
    }

    private __stop(): void {
        const audio = this._audio;
        audio.pause();
        audio.currentTime = 0;
        this.setState({state: SoundStates.STANDBY,});
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- React methods --------------------

    public componentWillUnmount() {
        const audio = this.#audio;
        if (audio != null)
            audio.onended = null;
    }

    public render() {
        return <div key={this._title} className="audio-state-container container">{
            this.state.state.getElements(new SoundSubElementsHolder(
                () => this.__playElement,
                () => this.__pauseElement,
                () => this.__stopElement,
                () => this.__exceptionElement,))
        }</div>;
    }

    //endregion -------------------- React methods --------------------

}
