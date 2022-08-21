import type {TOptions} from 'i18next';

import type {Namespace, PossibleReactElement, SingleTranslationKey, TranslationMethod, TranslationReplaceKeysMap, TranslationReturnValue} from './TranslationProperty';
import type {ReactElement}                                                                                                                from '../../util/react/ReactProperties';

import {assert}         from '../../util/utilitiesMethods';
import {isInProduction} from '../../variables';

export class TranslationUtility {

    public static readonly STARTING_CHARACTER = '{';
    public static readonly STARTING_CHARACTER_LENGTH = this.STARTING_CHARACTER.length;
    public static readonly STARTING_OR_ENDING_REGEX = /{{|}}/;
    public static readonly STARTING_REGEX = /{{/g;
    public static readonly STARTING_LENGTH = '{{'.length;
    public static readonly ENDING_CHARACTER = '}';
    public static readonly ENDING_CHARACTER_LENGTH = this.ENDING_CHARACTER.length;
    public static readonly ENDING_REGEX = /}}/g;
    public static readonly ENDING_LENGTH = '}}'.length;
    public static OPTION_TO_RETURN_OBJECT: TOptions = {returnObjects: true, interpolation: {skipOnVariables: true,},};


    private constructor() {
        throw new EvalError(`This class "${TranslationUtility}" cannot be created.`);
    }

    public static testTranslation<N extends Namespace, T extends TranslationReturnValue<N> = TranslationReturnValue<N>, >(value: T,): T & string {
        assert(typeof value == 'string', `The translation key ${value} cannot receive a translation that contain a sub value.`,);
        return value;
    }

    public static replaceAndInterpretTranslation<N extends Namespace, >(translation: TranslationMethod<N>, value: SingleTranslationKey<N>, keyMap: TranslationReplaceKeysMap,): ReactElement {
        //FIXME remove the error (if possible) "Type 'string' is not assignable to type '"entityContent"'"
        // @ts-ignore
        return this.replaceInTranslation(this.testTranslation(translation(value, this.OPTION_TO_RETURN_OBJECT,)), keyMap,);
    }

    public static replaceInTranslation(value: string, keyMap: TranslationReplaceKeysMap,) {
        let argumentsFound: string[] = [];
        for (const replaceKey of value.matchAll(this.STARTING_REGEX)) {
            const startingIndex = replaceKey.index!;
            const endingIndex = value.indexOf(this.ENDING_CHARACTER, startingIndex,);
            argumentsFound.push(value.substring(startingIndex + this.STARTING_LENGTH, endingIndex));
        }

        const splitArguments = value.split(this.STARTING_OR_ENDING_REGEX).filter(splitValue => !argumentsFound.includes(splitValue));
        let finalArguments: (| string | ReactElement)[] = [];
        for (let i = 0, j = 0; i < argumentsFound.length || j < splitArguments.length; i++, j++)
            this.#addArgumentToArray(finalArguments, splitArguments[j], keyMap[argumentsFound[i]]);
        return <>{finalArguments}</>;
    }

    /**
     * Adds the arguments in the array provided in the first argument.
     *
     * The first argument is always added.
     * But, if the second argument is null, it will not be added.
     *
     * @param finalArguments the final array of arguments without any null values
     * @param firstElement the first element
     * @param secondElement the second element
     */
    static #addArgumentToArray(finalArguments: PossibleReactElement[], firstElement: PossibleReactElement, secondElement: PossibleReactElement | undefined,): void {
        finalArguments.push(firstElement);
        if (secondElement == null)
            return;
        finalArguments.push(secondElement);

        if(isInProduction)
            return;

        if (typeof secondElement != 'string') {
            if (secondElement?.key == null)
                console.warn(`The react element ${secondElement.type} doesn't contain a key.`);
            console.warn(`A generic error will be thrown.\nThe properties included within it are ${Object.entries(secondElement.props).map(property => `[${property}]`)}.`);
        }
    }

}
