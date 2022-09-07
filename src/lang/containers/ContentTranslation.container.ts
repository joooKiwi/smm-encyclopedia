import type {ContentNamespace, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';
import type {ReactElementOrString}                                              from '../../util/react/ReactProperties';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class ContentTranslationContainer<T extends ReactElementOrString = ReactElementOrString, >
    extends AbstractTranslationContainer<ContentNamespace> {

    public static readonly NAMESPACE: ContentNamespace = 'content';

    public constructor(translationKey: SingleTranslationKey<ContentNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(ContentTranslationContainer.NAMESPACE, translationKey, replace,);
    }

}
