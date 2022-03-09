import type {ClassThatIsAvailableFromTheStart, InferredClassThatIsAvailableFromTheStartBySMM1, PossibleIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {Entity}                                                                                                            from '../entity/Entity';
import type {GameProperty}                                                                                                      from '../entity/properties/GameProperty';
import type {NameTrait}                                                                                                         from '../../lang/name/NameTrait';

export interface GameStyle<IS_AVAILABLE_FROM_THE_START extends PossibleClassThatIsAvailableFromTheStart = PossibleClassThatIsAvailableFromTheStart, >
    extends NameTrait<string>, GameProperty,
        ClassThatIsAvailableFromTheStart<IS_AVAILABLE_FROM_THE_START['isAvailableFromTheStartInSMM1'], IS_AVAILABLE_FROM_THE_START['isAvailableFromTheStartInSMM3DS'], IS_AVAILABLE_FROM_THE_START['isAvailableFromTheStartInSMM2']> {

    get isInProperty(): GameProperty

    get isAvailableFromTheStartContainer(): IS_AVAILABLE_FROM_THE_START

    get entities(): readonly Entity[]

    get nightDesertWindTranslationKey(): PossibleNightDesertWindTranslationKey

}

export type PossibleNightDesertWindTranslationKey = `${| '→' | '←' | '↔'} periodic` | '← constant' | null
/**
 * Every possible {@link ClassThatIsAvailableFromTheStart} possibilities for a {@link GameStyle}.
 *
 * The {@link ClassThatIsAvailableFromTheStart.isAvailableFromTheStartInSMM2 SMM2 attribute} will always be true.
 * But the {@link ClassThatIsAvailableFromTheStart.isAvailableFromTheStartInSMM3DS SMM3DS attribute} will be a boolean
 * if the {@link ClassThatIsAvailableFromTheStart.isAvailableFromTheStartInSMM1 SMM1 attribute} is also a boolean, but null in the other case.
 */
export type PossibleClassThatIsAvailableFromTheStart<T extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > = InferredClassThatIsAvailableFromTheStartBySMM1<T>;
