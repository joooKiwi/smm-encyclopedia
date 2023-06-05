import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Entity}                           from 'core/entity/Entity'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {NameTrait}                        from 'lang/name/NameTrait'
import type {NullOr}                           from 'util/types/nullable'

export interface GameStyle
    extends NameTrait<string>, GameProperty,
        ClassThatIsAvailableFromTheStart {

    get isInProperty(): GameProperty

    get isAvailableFromTheStartContainer(): ClassThatIsAvailableFromTheStart

    get entities(): readonly Entity[]

    get nightDesertWindTranslationKey(): PossibleNightDesertWindTranslationKey

}

export type PossibleNightDesertWindTranslationKey = NullOr<| `${| '→' | '←' | '↔'} periodic` | '→ constant'>
