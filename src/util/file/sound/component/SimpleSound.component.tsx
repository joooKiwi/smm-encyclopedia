import 'util/file/sound/component/SimpleSound.component.scss'

import {Component} from 'react'

import type {ReactComponent}        from 'util/react/ReactComponent'
import type {SoundFile}             from 'util/file/sound/SoundFile'
import type {SimpleSoundProperties} from 'util/file/sound/component/property/SimpleSoundProperties'
import type {SimpleSoundState}      from 'util/file/sound/component/state/SimpleSound.state'
import type {SimpleSoundPlayer}     from 'util/file/sound/player/SimpleSoundPlayer'
import type {IsSourceFoundCallback} from 'util/file/sound/player/Validators.types'

import {HistoryState}           from 'util/file/sound/history/HistoryState'
import {SoundSubElementsHolder} from 'util/file/sound/holder/SoundSubElementsHolder'
import {AbstractSoundPlayer}    from 'util/file/sound/player/AbstractSoundPlayer'
import {SoundPlayerFactory}     from 'util/file/sound/player/SoundPlayer.factory'
import {SoundStates}            from 'util/file/sound/player/SoundStates'
import {Validators}             from 'util/file/sound/player/Validators'

//region -------------------- Import from deconstruction --------------------

const {STANDBY, LOADING,} = SoundStates

//endregion -------------------- Import from deconstruction --------------------

export default class SimpleSoundComponent<FILE extends SoundFile = SoundFile, TITLE extends string = string, >
    extends Component<SimpleSoundProperties<FILE, TITLE>, SimpleSoundState>
    implements ReactComponent {

    //region -------------------- Fields --------------------

    static readonly #PLAY_CLASSES = 'btn btn-lg bi-play-btn-fill audio-state audio-state-play'
    static readonly #PAUSE_CLASSES = 'btn btn-lg bi-pause-btn-fill audio-state audio-state-pause'
    static readonly #STOP_CLASSES = 'btn btn-lg bi-stop-btn-fill audio-state audio-state-stop'
    static readonly #LOADING_CLASSES = 'spinner-border audio-state audio-state-loading'
    static readonly #EXCEPTION_CLASSES = 'bi-shield-fill-exclamation audio-state audio-state-exception'

    #audio?: SimpleSoundPlayer<FILE, TITLE>
    readonly #isSourceFoundCallback: IsSourceFoundCallback

    //endregion -------------------- Fields --------------------

    public constructor(props: SimpleSoundProperties<FILE, TITLE>,) {
        super(props,)
        this.state = {
            state: new HistoryState(STANDBY, false, false,),
            isSourceRetrieved: false,
        }
        this.#isSourceFoundCallback = value => {
            const audio = this._audio
            const isDurationValid = audio.isDurationValid
            value ?? isDurationValid
                ? this.setState({isSourceRetrieved: true,})
                : this.setState({isSourceRetrieved: true, /*state: audio.setState(new HistoryState(EXCEPTION, audio.history.current,)).history.current,*/})
        }
    }

    //region -------------------- Getter methods --------------------


    /** @see SimpleSoundProperties.file */
    public get file(): FILE {
        return this.props.file
    }

    /** @see SimpleSoundProperties.title */
    public get title(): TITLE {
        return this.props.title
    }

    /** @see SimpleSoundProperties.validator */
    public get validator(): Validators {
        return this.props.validator ?? Validators.CompanionEnum.get.defaultValue
    }


    /** @see SimpleSoundState.state */
    public get componentState(): HistoryState {
        return this.state.state
    }

    /** @see SimpleSoundState.isSourceRetrieved */
    public get isSourceRetrieved(): boolean {
        return this.state.isSourceRetrieved
    }


    /**
     * Get the audio element (lazily)
     * and initializing it upon creating the audio element
     */
    protected get _audio(): SimpleSoundPlayer<FILE, TITLE> {
        if (this.#audio != null)
            return this.#audio

        const source = this.file
        return this.#audio = SoundPlayerFactory.createSimple(source, this.title,)
            .setOnBeforePlay(() => this.validator.onPlay(this.#isSourceFoundCallback))
            .setOnAfterStateChanged(soundPlayer => this.setState({state: soundPlayer.history.current,}))
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- React methods --------------------

    public override componentDidMount(): void {
        if (!this.isSourceRetrieved)
            this.validator.onCreate(this.#isSourceFoundCallback)
    }

    public override componentWillUnmount(): void {
        const audio = this.#audio
        if (audio == null)
            return
        audio.setState(new HistoryState(STANDBY, false, false,),)
        AbstractSoundPlayer.map.delete(audio.source.key)
    }

    public override render(): ReactJSXElement {
        const elementsHolder = new SoundSubElementsHolder(
                () => <div key={`${this.title} - play`} className={SimpleSoundComponent.#PLAY_CLASSES} onClick={() => this._audio.play()}/>,
                () => <div key={`${this.title} - pause`} className={SimpleSoundComponent.#PAUSE_CLASSES} onClick={() => this._audio.pause()}/>,
                () => <div key={`${this.title} - stop`} className={SimpleSoundComponent.#STOP_CLASSES} onClick={() => this._audio.stop()}/>,
                () => <div key={`${this.title} - loading`} className={SimpleSoundComponent.#LOADING_CLASSES} role="status"/>,
                () => <div key={`${this.title} - exception`} className={SimpleSoundComponent.#EXCEPTION_CLASSES}/>,
            ),
            componentState = this.componentState

        return <div key={`${this.title} - container`} className="audio-state-container container">
            {componentState.isLoading ? LOADING.getElementsFrom(elementsHolder) : null}
            {componentState.state.getElementsFrom(elementsHolder)}
        </div>
    }

    //endregion -------------------- React methods --------------------

}
