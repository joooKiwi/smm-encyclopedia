import type {ClassWithAcronym}                        from '../ClassWithAcronym';
import type {ClassWithTranslationKey}                 from '../../lang/ClassWithTranslationKey';
import type {EntityBehaviourIsInOnly}                 from './properties/EntityBehaviourIsInOnly';
import type {EntityBehaviourLink}                     from './properties/EntityBehaviourLink';
import type {PossibleAcronym, PossibleTranslationKey} from './EntityBehaviours.types';

export interface EntityBehaviour
    extends EntityBehaviourIsInOnly, EntityBehaviourLink,
        ClassWithTranslationKey<PossibleTranslationKey>, ClassWithAcronym<PossibleAcronym> {

    get acronym(): PossibleAcronym

    get translationKey(): PossibleTranslationKey

    //region -------------------- Is in only --------------------

    get isInOnlyContainer(): EntityBehaviourIsInOnly

    get isOnlineOnly(): this['isInOnlyContainer']['isOnlineOnly']

    get isMultiplayerOnly(): this['isInOnlyContainer']['isMultiplayerOnly']

    //endregion -------------------- Is in only --------------------
    //region -------------------- Links --------------------

    get linkContainer(): EntityBehaviourLink

    get groupLink(): this['linkContainer']['groupLink']

    get entityLink(): this['linkContainer']['entityLink']

    //endregion -------------------- Links --------------------


}
