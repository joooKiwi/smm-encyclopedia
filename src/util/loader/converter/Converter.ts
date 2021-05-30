export interface Converter<T, U> {

    originalValue: T

    convertedValue: U

    isValueValid(value: T): boolean

    convertTheValue(value: T): U

}
