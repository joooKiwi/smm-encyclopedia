import type {ClassWithComment} from 'core/_properties/ClassWithComment'
import type {Property}         from 'core/_properties/Property'

/**
 * A generic property with a value
 * and a comment that can be {@link NullOrString null or a string}
 * contained in it.
 */
export interface PropertyWithComment<T, COMMENT extends NullOrString = NullOrString, >
    extends Property<T>, ClassWithComment<COMMENT> {}
