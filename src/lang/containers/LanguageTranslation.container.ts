import type {LanguageNamespace, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty'
import type {ReactElementOrString}                                               from '../../util/react/ReactProperties'

import {AbstractTranslationContainer} from './AbstractTranslation.container'

export class LanguageTranslationContainer<T extends ReactElementOrString = ReactElementOrString, >
    extends AbstractTranslationContainer<LanguageNamespace> {

    public static readonly NAMESPACE: LanguageNamespace = 'language'

    public constructor(translationKey: SingleTranslationKey<LanguageNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(LanguageTranslationContainer.NAMESPACE, translationKey, replace,)
    }

}
