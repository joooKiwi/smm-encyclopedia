import type {StringOrNumeric} from '@joookiwi/type'
import type {TOptions} from 'i18next'

import type {TranslationReplaceKeysMap} from 'lang/components/TranslationProperty'

import {isInProduction} from 'variables'
import {assert}         from 'util/utilitiesMethods'

export class TranslationUtility {

    public static readonly STARTING_CHARACTER = '{'
    public static readonly STARTING_CHARACTER_LENGTH = this.STARTING_CHARACTER.length
    public static readonly STARTING_OR_ENDING_REGEX = /{{|}}/
    public static readonly STARTING_REGEX = /{{/g
    public static readonly STARTING_LENGTH = '{{'.length
    public static readonly ENDING_CHARACTER = '}'
    public static readonly ENDING_CHARACTER_LENGTH = this.ENDING_CHARACTER.length
    public static readonly ENDING_REGEX = /}}/g
    public static readonly ENDING_LENGTH = '}}'.length
    public static OPTION_TO_RETURN_OBJECT: TOptions = {returnObjects: true, interpolation: {skipOnVariables: true,},}


    private constructor() {
        throw new EvalError(`This class "${TranslationUtility}" cannot be created.`)
    }

    public static testTranslation<T, >(value: T,): T & string {
        assert(typeof value == 'string', `The translation key ${value} cannot receive a translation that contain a sub value.`,)
        return value
    }

    public static replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap<StringOrNumeric>,): string
    public static replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap<ReactElement>,): ReactElement
    public static replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap,): ReactElementOrString
    public static replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap,): ReactElementOrString {
        let argumentsFound: string[] = []
        for (const replaceKey of value.matchAll(this.STARTING_REGEX,)) {
            const startingIndex = replaceKey.index!
            const endingIndex = value.indexOf(this.ENDING_CHARACTER, startingIndex,)
            argumentsFound.push(value.substring(startingIndex + this.STARTING_LENGTH, endingIndex,),)
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

        const splitArguments = value.split(this.STARTING_OR_ENDING_REGEX,).filter(splitValue => !argumentsFound.includes(splitValue,),)
        let finalArguments: ReactElementOrStringOrNumeric[] = []
        for (let i = 0, j = 0; i < argumentsFound.length || j < splitArguments.length; i++, j++)
            this.#addArgumentToArray(finalArguments, splitArguments[j]!, keyMap[argumentsFound[i]!],)

        if (containsOnlyStringOrNumeric)
            return finalArguments.join('',)
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
    static #addArgumentToArray(finalArguments: ReactElementOrStringOrNumeric[], splitArgument: string, replacementArgument: UndefinedOr<ReactElementOrStringOrNumeric>,): void {
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
