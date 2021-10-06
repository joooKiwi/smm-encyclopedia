import type {EntityBehaviourIsInOnly}                                            from './properties/EntityBehaviourIsInOnly';
import type {EntityBehaviourLink}                                                from './properties/EntityBehaviourLink';
import {PossibleAcronymEntityBehaviours, PossibleTranslationKeyEntityBehaviours} from './EntityBehaviours.types';

export interface EntityBehaviour
    extends EntityBehaviourIsInOnly, EntityBehaviourLink {

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
