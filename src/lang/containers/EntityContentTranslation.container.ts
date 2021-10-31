import type {EntityContentNamespace, SimpleTranslationProperty, SingleTranslationKey} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class EntityContentTranslationContainer
    extends AbstractTranslationContainer<EntityContentNamespace>
    implements SimpleTranslationProperty<EntityContentNamespace> {

    public static readonly NAMESPACE: EntityContentNamespace = 'entityContent';

    constructor(translationKey: SingleTranslationKey<EntityContentNamespace>,) {
        super(EntityContentTranslationContainer.NAMESPACE, translationKey,);
    }

}
