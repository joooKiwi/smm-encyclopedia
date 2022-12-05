import type {Entity, PossibleOtherEntities} from 'core/entity/Entity'
import type {GameStyleReferences}           from 'core/entity/properties/gameStyle/GameStyleReferences'
import type {ThemeReferences}               from 'core/entity/properties/theme/ThemeReferences'
import type {TimeReferences}                from 'core/entity/properties/time/TimeReferences'
import type {GameStyles}                    from 'core/gameStyle/GameStyles'
import type {Themes}                        from 'core/theme/Themes'
import type {Times}                         from 'core/time/Times'

export interface EntityReferences
    extends GameStyleReferences, ThemeReferences, TimeReferences {

    getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities

    getReferenceFrom(theme: Themes,): PossibleOtherEntities

    getReferenceFrom(time: Times,): PossibleOtherEntities

    getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities


    get everyReferences(): readonly Entity[]

}
