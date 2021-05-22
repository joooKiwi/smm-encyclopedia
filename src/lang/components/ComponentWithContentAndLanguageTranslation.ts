import {Component}                            from 'react';
import {TFuncKey}                             from 'react-i18next';
import {ContentAndLanguageTranslationElement} from './elements/ContentAndLanguageTranslationElement';

export abstract class ComponentWithContentAndLanguageTranslation<T extends ContentAndLanguageTranslationElement = ContentAndLanguageTranslationElement>
    extends Component<T> {

    protected contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    protected languageTranslation<TKeys extends TFuncKey<'language'>>(value: TKeys) {
        return this.props.t(value, {ns: 'language'});
    }

    public abstract render(): JSX.Element;

}
