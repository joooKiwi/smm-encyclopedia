import type {EntityReferences}       from 'core/entity/properties/EntityReferences'
import type {GameProperty}           from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty}      from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {InstrumentProperty}     from 'core/entity/properties/instrument/InstrumentProperty'
import type {LimitProperty}          from 'core/entity/properties/limit/LimitProperty'
import type {ThemeProperty}          from 'core/entity/properties/theme/ThemeProperty'
import type {TimeProperty}           from 'core/entity/properties/time/TimeProperty'
import type {EntityCategory}         from 'core/entityCategory/EntityCategory'
import type {NameTrait}              from 'lang/name/NameTrait'
import type {NameTraitFromACategory} from 'lang/name/NameTraitFromACategory'

export interface Entity
    extends NameTrait<string>, NameTraitFromACategory<string, EntityCategory>,
        GameProperty,
        GameStyleProperty<boolean, boolean, boolean, boolean, BooleanOrNotApplicable>,
        ThemeProperty<boolean, boolean, boolean, BooleanOrNotApplicable, BooleanOrNotApplicable, BooleanOrNotApplicable, BooleanOrNotApplicable>,
        TimeProperty<boolean, BooleanOrNotApplicable>,
        LimitProperty,
        InstrumentProperty,
        EntityReferences {}

export type PossibleOtherEntities = | EmptyArray | readonly [Entity,] | readonly [Entity, Entity,]
