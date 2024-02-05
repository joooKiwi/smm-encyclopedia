import type {ClassWithAcronym}                         from 'core/ClassWithAcronym'
import type {ClassWithTranslationKey}                  from 'lang/ClassWithTranslationKey'
import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {Entity}                                   from 'core/entity/Entity'

export interface EntityBehaviour
    extends ClassWithTranslationKey<PossibleTranslationKeys>, ClassWithAcronym<PossibleAcronym> {

    //region -------------------- Is in only --------------------

    get isOnlineOnly(): boolean

    get isMultiplayerOnly(): boolean

    //endregion -------------------- Is in only --------------------
    //region -------------------- Links --------------------

    get groupLink(): PossibleGroup

    get entityLink(): NullOr<Entity>

    //endregion -------------------- Links --------------------

}

export type PossibleGroup = NullOr<object>//TODO once there is group, replace the occurrences with NullOr<EntityGroup>
