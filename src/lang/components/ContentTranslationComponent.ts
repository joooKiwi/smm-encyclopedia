import {Component} from 'react';
import {TFunction} from 'react-i18next';

import {ContentTranslationElement} from './elements/ContentTranslationElement';

export default abstract class ContentTranslationComponent<P extends ContentTranslationElement = ContentTranslationElement, S = {}, >
    extends Component<P, S> {


    protected get translation(): TFunction<'content'> {
        return this.props.t;
    }

    public abstract render(): JSX.Element;

}
