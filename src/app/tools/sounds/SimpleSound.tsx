import './SimpleSound.scss';

import {Component} from 'react';

import type {SimpleSoundProperties} from './properties/SimpleSoundProperties';
import type {SimpleSoundState}      from './properties/SimpleSoundState';

export default class SimpleSound
    extends Component<SimpleSoundProperties, SimpleSoundState> {

    static readonly #STOP_CLASSES = 'btn btn-lg bi-stop-btn-fill audio-state audio-state-playing';
    static readonly #PLAY_CLASSES = 'btn btn-lg bi-play-btn-fill audio-state';

    #audio?: HTMLAudioElement;

    public constructor(properties: SimpleSoundProperties,) {
        super(properties);
        this.state = {isPlaying: false,};
    }

    protected get audio() {
        return this.#audio ??= new Audio(this.source);
    }

    protected get source() {
        return this.props.source;
    }

    protected get title() {
        return this.props.title;
    }

    protected get isPlaying() {
        return this.state.isPlaying;
    }

    protected set isPlaying(value: boolean,) {
        this.setState({isPlaying: value,});
    }

    private __changePlayState() {
        this.setState({isPlaying: !this.isPlaying,}, () => {
            if (this.isPlaying)
                this.audio.play();
            else {
                this.audio.pause();
                this.audio.currentTime = 0;
            }
        });
    }


    public componentDidMount(): void {
        this.audio.onended = () => this.isPlaying = false;
    }

    public componentWillUnmount(): void {
        this.audio.onended = null;
    }


    public render() {
        return <span className={this.isPlaying ? SimpleSound.#STOP_CLASSES : SimpleSound.#PLAY_CLASSES} onClick={() => this.__changePlayState()}/>;
    }
}
