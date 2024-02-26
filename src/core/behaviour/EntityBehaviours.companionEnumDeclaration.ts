import type {EntityBehaviours}              from 'core/behaviour/EntityBehaviours'
import type {CompanionEnumByAcronym}        from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByTranslationKey} from 'util/enumerable/companion/CompanionEnumByTranslationKey'

export interface CompanionEnumDeclaration_EntityBehaviours
    extends CompanionEnumByTranslationKey<EntityBehaviours, typeof EntityBehaviours>,
        CompanionEnumByAcronym<EntityBehaviours, typeof EntityBehaviours> {}
