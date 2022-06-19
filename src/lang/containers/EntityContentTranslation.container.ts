import type {EntityContentNamespace, PossibleReactElement, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class EntityContentTranslationContainer<T extends PossibleReactElement = PossibleReactElement, >
    extends AbstractTranslationContainer<EntityContentNamespace> {

    public static readonly NAMESPACE: EntityContentNamespace = 'entityContent';

    public constructor(translationKey: SingleTranslationKey<EntityContentNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(EntityContentTranslationContainer.NAMESPACE, translationKey, replace,);
    }

}
