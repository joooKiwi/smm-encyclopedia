export interface ClassThatCanRemoveItems<T> {

    delete(...values: T[]): boolean

    drop(...values: T[]): boolean

    remove(...values: T[]): boolean


    clear(): this

}
