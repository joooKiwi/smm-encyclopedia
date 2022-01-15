import type {GameContentNamespace, SimpleTranslationProperty, SingleTranslationKey} from '../components/TranslationProperty';

import {AbstractTranslationContainer} from './AbstractTranslation.container';

export class GameContentTranslationContainer
    extends AbstractTranslationContainer<GameContentNamespace>
    implements SimpleTranslationProperty<GameContentNamespace> {

    public static readonly NAMESPACE: GameContentNamespace = 'gameContent';

    public constructor(translationKey: SingleTranslationKey<GameContentNamespace>,) {
        super(GameContentTranslationContainer.NAMESPACE, translationKey,);
    }

}
