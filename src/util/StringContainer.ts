import {mapByArray} from '@joookiwi/collection'

import {Empty}   from 'util/emptyVariables'
import {forEach} from 'util/utilitiesMethods'

import EMPTY_STRING = Empty.EMPTY_STRING

export class StringContainer<T extends string, T_HTML extends string = string, > {

    readonly #value
    #valueInHtml?: T_HTML

    public constructor(value: T,) {
        this.#value = value
    }

    public get get(): T {
        return this.#value
    }

    public get getInHtml(): T_HTML {
        return this.#valueInHtml ??= StringContainer.getInHtml(this.get,) as T_HTML
    }

}

export namespace StringContainer {

    /**
     * A regex containing the characters that should be removed direclty
     * 1. :
     * 2. (
     * 3. )
     * 4. [
     * 5. ]
     * 6. \-
     * 7. |
     * 8. ’s
     * 9. ’
     */
    const REMOVAL_REGEX = /[.:()\[\]\-|]|(’s)|’/g
    const REPLACE_CHARACTERS = new Map([['?', 'question'], ['!', 'exclamation'], ['&', 'and',], ['|', 'or',],] as const,)
    const WORD_SEPARATOR_REGEX = /[ \-\\/]/g
    const ALREADY_CONVERTED_VALUES = new Map<string, string>()

    /**
     * Convert the value received in an html format string.<br/>
     *
     * Example: <u>anExample-withSomething(weird)&fun</u>
     * will be transformed in <u>anExampleWithSomethingWeirdAndFun</u><br/>
     *
     * It also keeps track of the converted values to not reiterate the same values twice.
     *
     * @param value The value to convert as a proper HTML value.
     */
    export function getInHtml(value: string,): string {
        if (ALREADY_CONVERTED_VALUES.has(value))
            return ALREADY_CONVERTED_VALUES.get(value)!

        const splitValues = mapByArray(value.toLowerCase()
                .replaceAll(REMOVAL_REGEX, EMPTY_STRING,)
                .split(WORD_SEPARATOR_REGEX,),
            it => REPLACE_CHARACTERS.get(it as never,) ?? it,)
            .map(it => {
                let changeableValue = it
                forEach(REPLACE_CHARACTERS, it => {
                    if (changeableValue.includes(it,))
                        changeableValue = changeableValue.replace(it, EMPTY_STRING,)
                },)
                return changeableValue
            },)

        const firstValue = splitValues.getFirstOrNull() ?? EMPTY_STRING
        const newValue = splitValues.drop(1,).joinToString(EMPTY_STRING, firstValue, EMPTY_STRING, null, null, it => it.charAt(0,).toUpperCase() + it.substring(1,),)
        ALREADY_CONVERTED_VALUES.set(value, newValue,)
        return newValue
    }

}
