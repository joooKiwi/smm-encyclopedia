import type {EveryLanguages} from '../EveryLanguages';
import type {Games}          from '../../core/game/Games';

export type AllGameReceived = 'all';
export type PossibleGameReceived = | Games | AllGameReceived;

/**
 * The possible way to tell if the {@link Name} will be a complete one based
 * on the language used.
 *
 * The {@link EveryLanguages.ENGLISH english},
 * the {@link EveryLanguages.FRENCH french}
 * and the {@link EveryLanguages.GREEK greek}
 * are all not received in the callback.
 */
export type IsACompleteNameCallback = (language: EveryLanguages,) => boolean;