import type {ClassWithGameReference}  from '../../../../game/ClassWithGameReference';
import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey';
import type {GameReferences}          from '../../../../game/GameReferences';
import type {NotApplicable, Property} from '../../../_properties/Property';

export interface SoundEffectOnDeath
    extends Property<PossibleValues>, ClassWithGameReference<PossibleGames>, ClassWithTranslationKey<PossibleTranslationKeys> {

    get simpleTranslationKey(): PossibleSimpleTranslationKeys

    get type(): PossibleTypes

}

export type PossibleGamesReceived = | string | null;
export type PossibleValuesReceived = | boolean | NonNullable<PossibleSimpleTranslationKeys> | null;
export type PossibleTypesReceived = PossibleTypes;

export type PossibleGames = | GameReferences | null;
export type PossibleValues = | boolean | NotApplicable;
export type PossibleSimpleTranslationKeys = | `+ "${| 'Oh no' | 'Nooo' | 'Woah' | 'Yaha'}!"` | null;
export type PossibleTranslationKeys = | string | null;
export type PossibleTypes = | 'Marimba' | 'Techno' | null;
