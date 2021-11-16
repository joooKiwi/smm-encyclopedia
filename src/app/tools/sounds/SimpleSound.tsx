import './SimpleSound.scss';

import {Component} from 'react';

import type {ReactElement}          from '../../../util/react/ReactProperty';
import type {SimpleSoundProperties} from './properties/SimpleSoundProperties';
import type {SimpleSoundState}      from './properties/SimpleSoundState';

export default class SimpleSound
    extends Component<SimpleSoundProperties, SimpleSoundState> {

    //region -------------------- Attributes --------------------

    static readonly #PAUSE_CLASSES = 'btn btn-lg bi-pause-btn-fill audio-state audio-state-pause';
    static readonly #STOP_CLASSES = 'btn btn-lg bi-stop-btn-fill audio-state audio-state-stop';
    static readonly #PLAY_CLASSES = 'btn btn-lg bi-play-btn-fill audio-state audio-state-play';

    public static readonly POSSIBLE_STATES = ['standby', 'playing', 'paused',] as const;

    #audio?: HTMLAudioElement;
    #playElement?: ReactElement;
    #pauseElement?: ReactElement;
    #stopElement?: ReactElement;

    //endregion -------------------- Attributes --------------------

    public constructor(properties: SimpleSoundProperties,) {
        super(properties);
        this.state = {state: 'standby',};
    }

    //region -------------------- Getter & setter methods --------------------


    protected get audio(): HTMLAudioElement {
        if (this.#audio == null) {
            const audio = new Audio(this.source);
            audio.onended = () => this.setState({state: 'standby',});
            this.#audio = audio;
        }
        return this.#audio;
    }

    private get __playElement() {
        return this.#playElement ??= <div key={`${this.title} - play`} className={SimpleSound.#PLAY_CLASSES} onClick={() => this.__play()}/>;
    }

    private get __pauseElement() {
        return this.#pauseElement ??= <div key={`${this.title} - pause`} className={SimpleSound.#PAUSE_CLASSES} onClick={() => this.__pause()}/>;
    }

    private get __stopElement() {
        return this.#stopElement ??= <div key={`${this.title} - stop`} className={SimpleSound.#STOP_CLASSES} onClick={() => this.__stop()}/>;
    }

    protected get source() {
        return this.props.source;
    }

    protected get title() {
        return this.props.title;
    }

    private __play(): void {
        this.audio.play();
        this.setState({state: 'playing',});
    }

    private __pause(): void {
        this.audio.pause();
        this.setState({state: 'paused',});
    }

    private __stop(): void {
        const audio = this.audio;
        audio.pause();
        audio.currentTime = 0;
        this.setState({state: 'standby',});
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- React methods --------------------

    public componentWillUnmount(): void {
        this.audio.onended = null;
    }

    public render() {
        let elements: ReactElement[];
        switch (this.state.state) {
            case 'standby':
                elements = [this.__playElement,];
                break;
            case 'playing':
                elements = [this.__pauseElement, this.__stopElement,];
                break;
            case 'paused':
                elements = [this.__playElement, this.__stopElement,];
                break;
        }
        return <div key={this.title} className="audio-state-container container">{elements}</div>;
    }

    //endregion -------------------- React methods --------------------

}
