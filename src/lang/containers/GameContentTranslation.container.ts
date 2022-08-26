import type {GameContentNamespace, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';
import type {ReactElementOrString}                                                  from '../../util/react/ReactProperties';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class GameContentTranslationContainer<T extends ReactElementOrString = ReactElementOrString, >
    extends AbstractTranslationContainer<GameContentNamespace> {

    public static readonly NAMESPACE: GameContentNamespace = 'gameContent';

    public constructor(translationKey: SingleTranslationKey<GameContentNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(GameContentTranslationContainer.NAMESPACE, translationKey, replace);
    }

}
