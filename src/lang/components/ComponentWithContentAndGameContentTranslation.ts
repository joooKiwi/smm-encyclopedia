import {Component}                               from 'react';
import {TFuncKey}                                from 'react-i18next';
import {ContentAndGameContentTranslationElement} from './elements/ContentAndGameContentTranslationElement';

export abstract class ComponentWithContentAndGameContentTranslation<T extends ContentAndGameContentTranslationElement = ContentAndGameContentTranslationElement>
    extends Component<T> {

    protected contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    protected gameContentTranslation<TKeys extends TFuncKey<'game'>>(value: TKeys) {
        return this.props.t(value, {ns: 'game'});
    }

    public abstract render(): JSX.Element;

}
