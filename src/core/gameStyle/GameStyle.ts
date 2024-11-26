import type {Array, NullOr, NullOrBoolean, NullOrTrue} from '@joookiwi/type'

import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Entity}                           from 'core/entity/Entity'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {NameTrait}                        from 'lang/name/NameTrait'

export interface GameStyle
    extends NameTrait<string>, GameProperty,
        ClassThatIsAvailableFromTheStart<NullOrBoolean, NullOrTrue, NullOrTrue> {

    get entities(): Array<Entity>

    get nightDesertWindTranslationKey(): PossibleNightDesertWindTranslationKey

}

export type PossibleNightDesertWindTranslationKey = NullOr<| `${| '→' | '←' | '↔'} periodic` | '→ constant'>
