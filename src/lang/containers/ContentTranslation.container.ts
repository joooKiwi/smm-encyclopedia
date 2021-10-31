import type {ContentNamespace, SimpleTranslationProperty, SingleTranslationKey} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class ContentTranslationContainer
    extends AbstractTranslationContainer<ContentNamespace>
    implements SimpleTranslationProperty<ContentNamespace> {

    public static readonly NAMESPACE: ContentNamespace = 'content';

    constructor(translationKey: SingleTranslationKey<ContentNamespace>,) {
        super(ContentTranslationContainer.NAMESPACE, translationKey,);
    }

}
