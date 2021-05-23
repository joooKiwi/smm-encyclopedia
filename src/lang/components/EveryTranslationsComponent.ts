import {Component} from 'react';
import {TFuncKey}  from 'react-i18next';

import {EveryTranslationElement} from './elements/EveryTranslationElement';

export abstract class EveryTranslationsComponent<T extends EveryTranslationElement = EveryTranslationElement>
    extends Component<T> {

    protected contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    protected gameContentTranslation<TKeys extends TFuncKey<'gameContent'>>(value: TKeys) {
        return this.props.t(value, {ns: 'gameContent'});
    }

    protected languageTranslation<TKeys extends TFuncKey<'gameContent'>>(value: TKeys) {
        return this.props.t(value, {ns: 'gameContent'});
    }

    public abstract render(): JSX.Element;

}
