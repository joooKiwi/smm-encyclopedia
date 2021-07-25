import {Component}     from 'react';
import type {TFuncKey} from 'react-i18next';

import type {EveryTranslationElement} from './elements/EveryTranslationElement';

export default abstract class EveryTranslationsComponent<P extends EveryTranslationElement = EveryTranslationElement, S = {}, >
    extends Component<P, S> {

    protected contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys,) {
        return this.props.t(value, {ns: 'content'});
    }

    protected gameContentTranslation<TKeys extends TFuncKey<'gameContent'>>(value: TKeys,) {
        return this.props.t(value, {ns: 'gameContent'});
    }

    protected languageTranslation<TKeys extends TFuncKey<'gameContent'>>(value: TKeys,) {
        return this.props.t(value, {ns: 'gameContent'});
    }

    public abstract render(): JSX.Element;

}
