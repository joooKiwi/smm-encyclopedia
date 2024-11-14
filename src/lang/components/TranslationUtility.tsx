import type {MutableArray, StringOrNumeric, UndefinedOr} from '@joookiwi/type'
import type {TOptions}                                   from 'i18next'
import {filterByArray, hasByArray, joinByArray}          from '@joookiwi/collection'

import type {TranslationReplaceKeysMap} from 'lang/components/TranslationProperty'

import {isInProduction} from 'variables'
import {Empty}          from 'util/emptyVariables'
import {assert}         from 'util/utilitiesMethods'

import EMPTY_STRING = Empty.EMPTY_STRING

export namespace TranslationUtility {

    export const STARTING_CHARACTER = '{'
    export const STARTING_CHARACTER_LENGTH = STARTING_CHARACTER.length
    export const STARTING_OR_ENDING_REGEX = /{{|}}/
    export const STARTING_REGEX = /{{/g
    export const STARTING_LENGTH = '{{'.length
    export const ENDING_CHARACTER = '}'
    export const ENDING_CHARACTER_LENGTH = ENDING_CHARACTER.length
    export const ENDING_REGEX = /}}/g
    export const ENDING_LENGTH = '}}'.length
    export let OPTION_TO_RETURN_OBJECT: TOptions = {returnObjects: true, interpolation: {skipOnVariables: true,},}


    export function testTranslation<T, >(value: T,): T & string {
        assert(typeof value == 'string', `The translation key ${value} cannot receive a translation that contain a sub value.`,)
        return value
    }

    export function replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap<StringOrNumeric>,): string
    export function replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap<ReactElement>,): NonNullReactElement
    export function replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap,): ReactElementOrString
    export function replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap,): ReactElementOrString {
        let argumentsFound: MutableArray<string> = []
        for (const replaceKey of value.matchAll(STARTING_REGEX,)) {
            const startingIndex = replaceKey.index!
            const endingIndex = value.indexOf(ENDING_CHARACTER, startingIndex,)
            argumentsFound.push(value.substring(startingIndex + STARTING_LENGTH, endingIndex,),)
        }

        let containsOnlyStringOrNumeric = true
        for (const it of argumentsFound) {
            const value = keyMap[it]
            if (value == null) {
                containsOnlyStringOrNumeric = false
                break
            }

            const typeOfValue = typeof value
            if (typeOfValue === 'string')
                continue
            if (typeOfValue === 'number')
                continue
            if (typeOfValue === 'bigint')
                continue

            containsOnlyStringOrNumeric = false
            break
        }

        const splitArguments = filterByArray(value.split(STARTING_OR_ENDING_REGEX,), it => !hasByArray(argumentsFound, it,),)
        const splitArgumentsSize = splitArguments.size
        const argumentsFoundSize = argumentsFound.length
        let finalArguments: MutableArray<ReactElementOrStringOrNumeric> = []
        for (let i = 0, j = 0; i < argumentsFoundSize || j < splitArgumentsSize; i++, j++)
            __addArgumentToArray(finalArguments, splitArguments.get(j,), keyMap[argumentsFound[i]!],)

        if (containsOnlyStringOrNumeric)
            return joinByArray(finalArguments, EMPTY_STRING, EMPTY_STRING, EMPTY_STRING,)
        return <>{finalArguments}</>
    }

    /**
     * Adds the arguments in the array provided in the first argument.
     *
     * The split argument is always added.
     * But the replacement argument can be null (& is not added).
     *
     * @param finalArguments the final array of arguments without any null values
     * @param splitArgument the split argument
     * @param replacementArgument the replacement argument
     */
    function __addArgumentToArray(finalArguments: MutableArray<ReactElementOrStringOrNumeric>, splitArgument: string, replacementArgument: UndefinedOr<ReactElementOrStringOrNumeric>,): void {
        finalArguments.push(splitArgument,)
        if (replacementArgument == null)
            return
        finalArguments.push(replacementArgument,)

        if (isInProduction)
            return

        if (typeof replacementArgument == 'string')
            return
        if (typeof replacementArgument == 'number')
            return
        if (typeof replacementArgument == 'bigint')
            return
        if (replacementArgument?.key == null)
            console.warn(`The react element ${replacementArgument.type} doesn't contain a key.`)
    }

}
