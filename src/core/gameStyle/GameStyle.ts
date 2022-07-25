import type {ClassThatIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {Entity}                           from '../entity/Entity';
import type {GameProperty}                     from '../entity/properties/game/GameProperty';
import type {NameTrait}                        from '../../lang/name/NameTrait';

export interface GameStyle
    extends NameTrait<string>, GameProperty,
        ClassThatIsAvailableFromTheStart {

    get isInProperty(): GameProperty

    get isAvailableFromTheStartContainer(): ClassThatIsAvailableFromTheStart

    get entities(): readonly Entity[]

    get nightDesertWindTranslationKey(): PossibleNightDesertWindTranslationKey

}

export type PossibleNightDesertWindTranslationKey = `${| '→' | '←' | '↔'} periodic` | '← constant' | null
