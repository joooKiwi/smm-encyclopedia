import './SimpleSound.scss';

import {Component} from 'react';

import type {IsSourceFoundCallback} from './SoundFounds.types';
import type {SimpleSoundProperties} from './properties/SimpleSoundProperties';
import type {SimpleSoundState}      from './properties/SimpleSoundState';
import type {ReactElement}          from '../../../util/react/ReactProperty';

import {SoundFounds}            from './SoundFounds';
import {SoundStates}            from './SoundStates';
import {SoundSubElementsHolder} from './holder/SoundSubElementsHolder';

export default class SimpleSound
    extends Component<SimpleSoundProperties, SimpleSoundState> {

    //region -------------------- Fields --------------------

    static readonly #PLAY_CLASSES = 'btn btn-lg bi-play-btn-fill audio-state audio-state-play';
    static readonly #PAUSE_CLASSES = 'btn btn-lg bi-pause-btn-fill audio-state audio-state-pause';
    static readonly #STOP_CLASSES = 'btn btn-lg bi-stop-btn-fill audio-state audio-state-stop';
    static readonly #EXCEPTION_CLASSES = 'bi-shield-fill-exclamation audio-state audio-state-exception';

    static #IS_EVERY_AUDIO_LOOPS_AFTER_COMPLETED = false;

    static readonly #EVERY_AUDIO_ELEMENTS = new Map<string, HTMLAudioElement>();

    #audio?: HTMLAudioElement;
    readonly #isSourceFoundCallback: IsSourceFoundCallback;

    //endregion -------------------- Fields --------------------

    public constructor(properties: SimpleSoundProperties,) {
        super(properties);
        this.state = {
            state: SoundStates.STANDBY,
            isSourceRetrieved: false,
        };
        this.#isSourceFoundCallback = (value: boolean = this.__isSoundFound,) =>
            value
                ? this.setState({isSourceRetrieved: true,})
                : this.setState({isSourceRetrieved: true, state: SoundStates.EXCEPTION,});

    }

    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Getter & setter methods (audio) --------------------

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
            const source = this._source;
            let audio: HTMLAudioElement;
            if (SimpleSound._everyAudioElements.has(source))
                audio = SimpleSound._everyAudioElements.get(source)!;
            else
                SimpleSound._everyAudioElements.set(source, audio = new Audio(source));
            this.#audio = audio;
            audio.onended = () => this.setState({state: SoundStates.STANDBY,});
            audio.loop = SimpleSound.isEveryAudioLoopsAfterCompleted;
        }
        return this.#audio;
    }

    //endregion -------------------- Getter & setter methods (audio) --------------------
    //region -------------------- Getter methods (source) --------------------

    protected get _source() {
        return this.props.source;
    }

    public get isSoundFound(): SoundFounds {
        return this.props.isSoundFound ?? SoundFounds.default;
    }

    private get __isSoundFound(): boolean {
        return Number.isFinite(this._audio.duration);
    }

    //endregion -------------------- Getter methods (source) --------------------

    protected get _title() {
        return this.props.title;
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * <p>
     *  Play the current audio element.
     *
     *  And when the audio element has finished playing,
     *  it will change the state to {@link SoundStates.STANDBY standby}.
     * </p>
     *
     * <p>
     *  Depending on if an {@link Error exception} is raised,
     *  it will change the state to {@link SoundStates.EXCEPTION exception}.
     * </p>
     *
     * <p>
     *  But, if the {@link SoundFounds} is {@link SoundFounds.YES},
     *  it will assume that the source is valid.
     * </p>
     */
    #play(): void {
        this._audio.play()
            .then(() => {
                const isSoundFound = this.isSoundFound.onPlay(this.#isSourceFoundCallback) ?? this.__isSoundFound;
                if (!isSoundFound)
                    this.#stop(SoundStates.EXCEPTION);
            })
            .catch(() => this.setState({state: SoundStates.EXCEPTION,}));
        this.setState({state: SoundStates.PLAYING,});
    }

    /**
     * Pause the current audio element.
     */
    #pause(): void {
        this._audio.pause();
        this.setState({state: SoundStates.PAUSED,});
    }

    /**
     * Stop the current audio element.
     *
     * @param state either {@link SoundStates.STANDBY standby} or {@link SoundStates.EXCEPTION exception} state
     */
    #stop(state: SoundStates = SoundStates.STANDBY,): void {
        const audio = this._audio;
        audio.pause();
        audio.currentTime = 0;
        this.setState({state: state,});
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- React methods --------------------

    public override componentDidMount(): void {
        if (!this.state.isSourceRetrieved)
            this.isSoundFound.onCreate(this.#isSourceFoundCallback);
    }

    public override componentWillUnmount(): void {
        const audio = this.#audio;
        if (audio != null)
            audio.onended = null;
    }

    public override render(): ReactElement {
        return <div key={this._title} className="audio-state-container container">{
            this.state.state.getElements(new SoundSubElementsHolder(
                () => <div key={`${this._title} - play`} className={SimpleSound.#PLAY_CLASSES} onClick={() => this.#play()}/>,
                () => <div key={`${this._title} - pause`} className={SimpleSound.#PAUSE_CLASSES} onClick={() => this.#pause()}/>,
                () => <div key={`${this._title} - stop`} className={SimpleSound.#STOP_CLASSES} onClick={() => this.#stop()}/>,
                () => <div key={`${this._title} - exception`} className={SimpleSound.#EXCEPTION_CLASSES}/>,
            ))
        }</div>;
    }

    //endregion -------------------- React methods --------------------

}
