import {Component}     from 'react';
import type {TFuncKey} from 'react-i18next';

import {ContentAndGameContentTranslationElement} from './elements/ContentAndGameContentTranslationElement';

export default abstract class ContentAndGameContentTranslationComponent<P extends ContentAndGameContentTranslationElement = ContentAndGameContentTranslationElement, S = {}, >
    extends Component<P, S> {

    protected contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    protected gameContentTranslation<TKeys extends TFuncKey<'gameContent'>>(value: TKeys) {
        return this.props.t(value, {ns: 'gameContent'});
    }

    public abstract render(): JSX.Element;

}
