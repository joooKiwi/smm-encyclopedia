import './SimpleSound.component.scss';

import {Component} from 'react';

import type {IsSourceFoundCallback} from '../player/Validators.types';
import type {ReactComponent}        from '../../react/ReactComponent';
import type {ReactElement}          from '../../react/ReactProperties';
import type {SimpleSoundState}      from './state/SimpleSound.state';
import type {SimpleSoundPlayer}     from '../player/SimpleSoundPlayer';
import type {SimpleSoundProperties} from './property/SimpleSoundProperties';
import type {SoundFile}             from '../SoundFile';

import {AbstractSoundPlayer}    from '../player/AbstractSoundPlayer';
import {SoundPlayerFactory}     from '../player/SoundPlayer.factory';
import {SoundStates}            from '../player/SoundStates';
import {SoundSubElementsHolder} from '../holder/SoundSubElementsHolder';
import {Validators}             from '../player/Validators';

export default class SimpleSoundComponent<FILE extends SoundFile = SoundFile, TITLE extends string = string, >
    extends Component<SimpleSoundProperties<FILE, TITLE>, SimpleSoundState>
    implements ReactComponent {

    //region -------------------- Fields --------------------

    static readonly #PLAY_CLASSES = 'btn btn-lg bi-play-btn-fill audio-state audio-state-play';
    static readonly #PAUSE_CLASSES = 'btn btn-lg bi-pause-btn-fill audio-state audio-state-pause';
    static readonly #STOP_CLASSES = 'btn btn-lg bi-stop-btn-fill audio-state audio-state-stop';
    static readonly #LOADING_CLASSES = 'spinner-border audio-state audio-state-loading';
    static readonly #EXCEPTION_CLASSES = 'bi-shield-fill-exclamation audio-state audio-state-exception';

    #audio?: SimpleSoundPlayer<FILE, TITLE>;
    readonly #isSourceFoundCallback: IsSourceFoundCallback;

    //endregion -------------------- Fields --------------------

    public constructor(props: SimpleSoundProperties<FILE, TITLE>,) {
        super(props,);
        this.state = {
            state: SoundStates.STANDBY,
            isSourceRetrieved: false,
        };
        this.#isSourceFoundCallback = value => {
            const isDurationValid = this._audio.isDurationValid;
            value ?? isDurationValid
                ? this.setState({isSourceRetrieved: true,})
                : this.setState({isSourceRetrieved: true, state: this._audio.state.currentState = SoundStates.EXCEPTION,});
        };
    }

    //region -------------------- Getter methods --------------------


    /** @see SimpleSoundProperties.file */
    public get file(): FILE {
        return this.props.file;
    }

    /** @see SimpleSoundProperties.title */
    public get title(): TITLE {
        return this.props.title;
    }

    /** @see SimpleSoundProperties.validator */
    public get validator(): Validators {
        return this.props.validator ?? Validators.default;
    }


    /** @see SimpleSoundState.state */
    public get componentState(): SoundStates {
        return this.state.state;
    }

    /** @see SimpleSoundState.isSourceRetrieved */
    public get isSourceRetrieved(): boolean {
        return this.state.isSourceRetrieved;
    }


    /**
     * Get the audio element (lazily)
     * and initialising it upon creating the audio element
     */
    protected get _audio(): SimpleSoundPlayer<FILE, TITLE> {
        if (this.#audio == null) {
            const source = this.file;
            this.#audio = SoundPlayerFactory.createSimple(source, this.title,)
                .setOnBeforePlay(() => this.validator.onPlay(this.#isSourceFoundCallback))
                .setOnAfterStateChanged(soundPlayer => this.setState({state: soundPlayer.state.currentState,}));
        }
        return this.#audio;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- React methods --------------------

    public override componentDidMount(): void {
        if (!this.isSourceRetrieved)
            this.validator.onCreate(this.#isSourceFoundCallback);
    }

    public override componentWillUnmount(): void {
        const audio = this.#audio;
        if (audio == null)
            return;
        audio.setState(SoundStates.STANDBY,);
        AbstractSoundPlayer.map.remove(audio.source.key);
    }

    public override render(): ReactElement {
        return <div key={`${this.title} - container`} className="audio-state-container container">{
            this.componentState.getElementsFrom(new SoundSubElementsHolder(
                () => <div key={`${this.title} - play`} className={SimpleSoundComponent.#PLAY_CLASSES} onClick={() => this._audio.play()}/>,
                () => <div key={`${this.title} - pause`} className={SimpleSoundComponent.#PAUSE_CLASSES} onClick={() => this._audio.pause()}/>,
                () => <div key={`${this.title} - stop`} className={SimpleSoundComponent.#STOP_CLASSES} onClick={() => this._audio.stop()}/>,
                () => <div key={`${this.title} - loading`} className={SimpleSoundComponent.#LOADING_CLASSES} role="status"/>,
                () => <div key={`${this.title} - exception`} className={SimpleSoundComponent.#EXCEPTION_CLASSES}/>,
            ))
        }</div>;
    }

    //endregion -------------------- React methods --------------------

}
