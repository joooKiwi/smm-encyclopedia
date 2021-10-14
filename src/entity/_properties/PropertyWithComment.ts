import type {ClassWithComment, PossibleComment}         from './ClassWithComment';
import type {PossibleBoolean, PossibleNumber, Property} from './Property';

/**
 * A generic property with a value
 * and a comment that can be {@link PossibleComment null or a string}
 * contained in it.
 */
export interface PropertyWithComment<T, COMMENT extends PossibleComment = PossibleComment, >
    extends Property<T>, ClassWithComment<COMMENT> {

}

export type BooleanPropertyWithComment<B extends PossibleBoolean = PossibleBoolean, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithComment<B, COMMENT>;
export type NumberPropertyWithComment<N extends PossibleNumber = PossibleNumber, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithComment<N, COMMENT>;
