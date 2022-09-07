import type {EntityContentNamespace, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';
import type {ReactElementOrString}                                                    from '../../util/react/ReactProperties';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class EntityContentTranslationContainer<T extends ReactElementOrString = ReactElementOrString, >
    extends AbstractTranslationContainer<EntityContentNamespace> {

    public static readonly NAMESPACE: EntityContentNamespace = 'entityContent';

    public constructor(translationKey: SingleTranslationKey<EntityContentNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(EntityContentTranslationContainer.NAMESPACE, translationKey, replace,);
    }

}
