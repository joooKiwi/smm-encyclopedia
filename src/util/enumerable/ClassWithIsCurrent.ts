/**
 * A simple class with a value to validate if it is the current value
 *
 * @see ClassWithCurrent
 */
export interface ClassWithIsCurrent {

    /** The current instance is the {@link ClassWithCurrent.current current value} held by its static instance */
    get isCurrent(): boolean

}
