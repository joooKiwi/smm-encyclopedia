export interface ClassThatCanVerifyItems<T, > {

    has(...items: readonly T[]): boolean

    has(...items: readonly any[]): boolean


    includes(...items: readonly T[]): boolean

    includes(...items: readonly any[]): boolean

}
