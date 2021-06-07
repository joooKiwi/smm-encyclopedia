import {Component} from 'react';
import {TFunction} from 'react-i18next';

import {LanguageTranslationElement} from './elements/LanguageTranslationElement';

export default abstract class LanguageTranslationComponent<P extends LanguageTranslationElement = LanguageTranslationElement, S = {}, >
    extends Component<P, S> {


    protected get translation(): TFunction<'language'> {
        return this.props.t;
    }

    public abstract render(): JSX.Element;

}
