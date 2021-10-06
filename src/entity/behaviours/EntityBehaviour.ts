import type {ClassWithAcronym}                                                        from '../ClassWithAcronym';
import type {ClassWithTranslationKey}                                                 from '../../lang/ClassWithTranslationKey';
import type {EntityBehaviourIsInOnly}                                                 from './properties/EntityBehaviourIsInOnly';
import type {EntityBehaviourLink}                                                     from './properties/EntityBehaviourLink';
import type {PossibleAcronymEntityBehaviours, PossibleTranslationKeyEntityBehaviours} from './EntityBehaviours.types';

export interface EntityBehaviour
    extends EntityBehaviourIsInOnly, EntityBehaviourLink,
        ClassWithTranslationKey<PossibleTranslationKeyEntityBehaviours>, ClassWithAcronym<PossibleAcronymEntityBehaviours> {

    get acronym(): PossibleAcronymEntityBehaviours

    get translationKey(): PossibleTranslationKeyEntityBehaviours

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
