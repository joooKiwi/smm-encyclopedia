import type {ClassWithAcronym}                         from 'core/ClassWithAcronym'
import type {ClassWithTranslationKey}                  from 'lang/ClassWithTranslationKey'
import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {EntityBehaviourIsInOnly}                  from 'core/behaviour/properties/EntityBehaviourIsInOnly'
import type {EntityBehaviourLink}                      from 'core/behaviour/properties/EntityBehaviourLink'

export interface EntityBehaviour
    extends EntityBehaviourIsInOnly, EntityBehaviourLink,
        ClassWithTranslationKey<PossibleTranslationKeys>, ClassWithAcronym<PossibleAcronym> {

    get acronym(): PossibleAcronym

    get translationKey(): PossibleTranslationKeys

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
