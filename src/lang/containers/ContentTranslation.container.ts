import type {ContentNamespace, PossibleReactElement, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class ContentTranslationContainer<T extends PossibleReactElement = PossibleReactElement, >
    extends AbstractTranslationContainer<ContentNamespace> {

    public static readonly NAMESPACE: ContentNamespace = 'content';

    public constructor(translationKey: SingleTranslationKey<ContentNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(ContentTranslationContainer.NAMESPACE, translationKey, replace,);
    }

}
