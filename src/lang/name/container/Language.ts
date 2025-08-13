/**
 * A declaration of a language with the possible 0, 1 or 2 values being present in the instance
 *
 * @see EmptyLanguage
 * @see SingleValueLanguage
 * @see DualValueLanguage
 */
export interface Language<out T,> {

    /**
     * The type of language instance
     *
     * | type   |           instance          |
     * | ------ | --------------------------- |
     * | empty  | {@link EmptyLanguage}       |
     * | single | {@link SingleValueLanguage} |
     * | dual   | {@link DualValueLanguage}   |
     */
    readonly type: | 'empty' | 'single' | 'dual'

    /**
     * All the values applicable to the language instance.
     *
     * Either a single value for an empty or single instance
     * or an array of 2 for a dual instance.
     */
    readonly all: | T | readonly [first: T, second: T,]

    /** The first value present in the language instance */
    readonly first: T

    /** The possible second value present in the language instance */
    readonly second: T

}
