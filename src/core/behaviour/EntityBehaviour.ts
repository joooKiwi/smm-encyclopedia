import type {NullOr} from '@joookiwi/type'

import type {ClassWithAcronym}                         from 'core/ClassWithAcronym'
import type {ClassWithTranslationKey}                  from 'lang/ClassWithTranslationKey'
import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {Entity}                                   from 'core/entity/Entity'

export interface EntityBehaviour
    extends ClassWithTranslationKey<PossibleTranslationKeys>,
        ClassWithAcronym<PossibleAcronym> {

    readonly isOnlineOnly: boolean
    readonly isMultiplayerOnly: boolean

    readonly groupLink: PossibleGroup
    readonly entityLink: NullOr<Entity>

}

export type PossibleGroup = NullOr<object>//TODO once there is group, replace the occurrences with NullOr<EntityGroup>
