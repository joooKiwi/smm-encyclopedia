export interface Converter<T, U> {

    get originalValue(): T

    get convertedValue(): U

    isValueValid(value: T): boolean

    convertTheValue(value: T): U

}
