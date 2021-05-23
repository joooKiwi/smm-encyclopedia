import {Component} from 'react';
import {TFunction} from 'react-i18next';

import {ContentTranslationElement} from './elements/ContentTranslationElement';

export abstract class ContentTranslationComponent<T extends ContentTranslationElement = ContentTranslationElement>
    extends Component<T> {


    protected get translation(): TFunction<'content'> {
        return this.props.t;
    }

    public abstract render(): JSX.Element;

}
