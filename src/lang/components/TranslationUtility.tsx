import type {TOptions} from 'i18next';

import type {Namespace, SingleTranslationKey, TranslationMethod, TranslationReplaceKeysMap, TranslationReturnValue} from './TranslationProperty';
import type {ReactElement}                                                                                          from '../../util/react/ReactProperty';

import {assert} from '../../util/utilitiesMethods';

export class TranslationUtility {

    public static readonly STARTING_CHARACTER = '{';
    public static readonly STARTING_CHARACTER_LENGTH = this.STARTING_CHARACTER.length;
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
        let argumentsFounds: string[] = [];
        for (const replaceKey of value.matchAll(this.STARTING_REGEX)) {
            const startingIndex = replaceKey.index!;
            const endingIndex = value.indexOf(this.ENDING_CHARACTER, startingIndex,);
            argumentsFounds.push(value.substring(startingIndex + this.STARTING_LENGTH, endingIndex));
        }

        let splitsArguments: string[] = [];
        for (const replaceKey in keyMap) {
            const indexOfReplaceKey = value.indexOf(replaceKey);
            splitsArguments.push(
                value.substring(0, indexOfReplaceKey - this.STARTING_LENGTH),
                value.substring(indexOfReplaceKey + replaceKey.length + this.ENDING_LENGTH),
            );
        }

        let finalArguments: (| string | ReactElement)[] = [];
        for (let i = 0, j = 0; i < argumentsFounds.length || j < splitsArguments.length; i++, j++) {
            finalArguments.push(splitsArguments[j]);

            const reactElement: | ReactElement | undefined = keyMap[argumentsFounds[i]];
            if (reactElement != null) {
                if (reactElement.key == null)
                    console.warn(`The react element ${reactElement.type} included in a translation cannot be null. Otherwise, it will return a generic error.\n The properties included within it are ${Object.entries(reactElement.props).map(property => `[${property}]`)}.`);
                finalArguments.push(reactElement);
            }
        }
        return <>{finalArguments.filter(finalArgument => finalArgument != null)} </>;
    }

}
