import {Component} from 'react';
import {TFunction} from 'react-i18next';

import {GameContentTranslationElement} from './elements/GameContentTranslationElement';

export abstract class ComponentWithGameContentTranslation<T extends GameContentTranslationElement = GameContentTranslationElement>
    extends Component<T> {


    protected get translation(): TFunction<'gameContent'> {
        return this.props.t;
    }

    public abstract render(): JSX.Element;

}
