import {Component} from 'react';
import {TFunction} from 'react-i18next';

import {GameContentTranslationElement} from './elements/GameContentTranslationElement';

export default abstract class GameContentTranslationComponent<P extends GameContentTranslationElement = GameContentTranslationElement, S = {}, >
    extends Component<P, S> {


    protected get translation(): TFunction<'gameContent'> {
        return this.props.t;
    }

    public abstract render(): JSX.Element;

}
