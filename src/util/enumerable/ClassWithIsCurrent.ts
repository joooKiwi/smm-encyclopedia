/** A simple class with a value to validate if it is the current value */
export interface ClassWithIsCurrent {

    /** The current instance is the current value held by its "{@link import('@joookiwi/enumerable').CompanionEnum companion enum}" instance */
    get isCurrent(): boolean

}
