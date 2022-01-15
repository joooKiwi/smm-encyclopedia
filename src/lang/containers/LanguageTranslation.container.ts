import type {LanguageNamespace, SimpleTranslationProperty, SingleTranslationKey} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class LanguageTranslationContainer
    extends AbstractTranslationContainer<LanguageNamespace>
    implements SimpleTranslationProperty<LanguageNamespace> {

    public static readonly NAMESPACE: LanguageNamespace = 'language';

    public constructor(translationKey: SingleTranslationKey<LanguageNamespace>,) {
        super(LanguageTranslationContainer.NAMESPACE, translationKey,);
    }

}
