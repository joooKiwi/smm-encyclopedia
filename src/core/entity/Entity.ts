import type {EntityReferences}       from 'core/entity/properties/EntityReferences'
import type {Property}               from 'core/entity/properties/Property'
import type {GameProperty}           from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty}      from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {ThemeProperty}          from 'core/entity/properties/theme/ThemeProperty'
import type {TimeProperty}           from 'core/entity/properties/time/TimeProperty'
import type {EntityCategory}         from 'core/entityCategory/EntityCategory'
import type {NameTrait}              from 'lang/name/NameTrait'
import type {NameTraitFromACategory} from 'lang/name/NameTraitFromACategory'
import type {EmptyArray}             from 'util/types/variables'

export interface Entity
    extends NameTrait<string>, NameTraitFromACategory<string, EntityCategory>,
        Property, GameProperty, GameStyleProperty, ThemeProperty, TimeProperty, EntityReferences {

    get propertyContainer(): Property

    get referencesContainer(): EntityReferences

}

export type PossibleOtherEntities = | EmptyArray | readonly [Entity,] | readonly [Entity, Entity,]
