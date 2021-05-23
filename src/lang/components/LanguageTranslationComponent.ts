import {Component} from 'react';
import {TFunction} from 'react-i18next';

import {LanguageTranslationElement} from './elements/LanguageTranslationElement';

export default abstract class LanguageTranslationComponent<T extends LanguageTranslationElement = LanguageTranslationElement>
    extends Component<T> {


    protected get translation(): TFunction<'language'> {
        return this.props.t;
    }

    public abstract render(): JSX.Element;

}
