import {Component}     from 'react';
import type {TFuncKey} from 'react-i18next';

import type {ContentAndLanguageTranslationElement} from './elements/ContentAndLanguageTranslationElement';

export default abstract class ContentAndLanguageTranslationComponent<P extends ContentAndLanguageTranslationElement = ContentAndLanguageTranslationElement, S = {}, >
    extends Component<P, S> {

    protected contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    protected languageTranslation<TKeys extends TFuncKey<'language'>>(value: TKeys) {
        return this.props.t(value, {ns: 'language'});
    }

    public abstract render(): JSX.Element;

}
