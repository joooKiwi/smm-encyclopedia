import type {Games}          from 'core/game/Games'
import type {EveryLanguages} from 'lang/EveryLanguages'

export type AllGameReceived = 'all'
export type NotSMM2GameReceived = 'notSMM2'
export type SingleGame = | '1' | 1 | '2' | 2 | '3DS'
export type PossibleGameReceived = | Games | SingleGame | NotSMM2GameReceived | AllGameReceived

/**
 * The possible way to tell if the {@link Name} will be a complete one based
 * on the language used.
 *
 * The {@link EveryLanguages.ENGLISH english},
 * the {@link EveryLanguages.FRENCH french}
 * and the {@link EveryLanguages.GREEK greek}
 * are all not received in the callback.
 */
export type IsACompleteNameCallback = (language: EveryLanguages,) => boolean
