import type {LanguageNamespace, PossibleReactElement, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class LanguageTranslationContainer<T extends PossibleReactElement = PossibleReactElement, >
    extends AbstractTranslationContainer<LanguageNamespace> {

    public static readonly NAMESPACE: LanguageNamespace = 'language';

    public constructor(translationKey: SingleTranslationKey<LanguageNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(LanguageTranslationContainer.NAMESPACE, translationKey, replace,);
    }

}
