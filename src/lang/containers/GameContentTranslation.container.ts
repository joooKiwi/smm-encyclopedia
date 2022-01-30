import type {GameContentNamespace, PossibleReactElement, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class GameContentTranslationContainer<T extends PossibleReactElement = PossibleReactElement, >
    extends AbstractTranslationContainer<GameContentNamespace> {

    public static readonly NAMESPACE: GameContentNamespace = 'gameContent';

    public constructor(translationKey: SingleTranslationKey<GameContentNamespace>, replace?: TranslationReplaceKeysMap<T>,) {
        super(GameContentTranslationContainer.NAMESPACE, translationKey, replace);
    }

}
