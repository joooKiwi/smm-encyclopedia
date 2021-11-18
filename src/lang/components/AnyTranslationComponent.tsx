import type {TOptions}  from 'i18next';
import {useTranslation} from 'react-i18next';

import type {Namespace, PossibleAnyTranslationPropertyReceived} from './TranslationProperty';

import {TranslationUtility} from './TranslationUtility';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function AnyTranslationComponent<N extends Namespace, >(properties: PossibleAnyTranslationPropertyReceived<N>,) {
    const {namespace} = properties;
    const {t: translation,} = useTranslation(namespace);

    const isReplaceNotNull = properties.replace != null;

    if ('children' in properties) {
        if (isReplaceNotNull)
            console.warn(`The replace attributes (${Object.getOwnPropertyNames(properties.replace).join(', ')}) will be ignore for a translation using a children.`);
        return <>{properties.children(translation)}</>;
    }

    const options: TOptions<object> = {returnObjects: true,};
    if (isReplaceNotNull)
        options.interpolation = {skipOnVariables: true,};
    const {translationKey} = properties;

    //TODO reimplement a proper translation type without the ts-ignore
    // @ts-ignore
    const translationReturnValue = TranslationUtility.testTranslation(translation(translationKey, options,));

    return !isReplaceNotNull
        ? <>{translationReturnValue}</>
        : <>{TranslationUtility.replaceInTranslation(translationReturnValue, properties.replace!,)}</>;
}
