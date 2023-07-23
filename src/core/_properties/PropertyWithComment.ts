import type {ClassWithComment} from 'core/_properties/ClassWithComment'
import type {Property}         from 'core/_properties/Property'

/**
 * A generic property with a value
 * and a comment that can be {@link NullOrString null or a string}
 * contained in it.
 */
export interface PropertyWithComment<T, COMMENT extends NullOrString = NullOrString, >
    extends Property<T>, ClassWithComment<COMMENT> {

}

export type BooleanPropertyWithComment<B extends NullOrBoolean = NullOrBoolean, COMMENT extends NullOrString = NullOrString, > = PropertyWithComment<B, COMMENT>
export type NumberPropertyWithComment<N extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, > = PropertyWithComment<N, COMMENT>
export type StringPropertyWithComment<S extends NullOrString = NullOrString, COMMENT extends NullOrString = NullOrString, > = PropertyWithComment<S, COMMENT>
