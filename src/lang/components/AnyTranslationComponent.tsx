import type {Namespace} from 'react-i18next';
import {useTranslation} from 'react-i18next';

import type {AnyTranslationProperty, SimpleAnyTranslationProperty} from './TranslationProperty';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function AnyTranslationComponent<N extends Namespace, >(properties: | AnyTranslationProperty<N> | SimpleAnyTranslationProperty<N>,) {
    const {namespace} = properties;
    const {t: translation,} = useTranslation(namespace);

    if ('children' in properties)
        return <>{properties.children(translation)}</>;

    const {translationKey} = properties;

    const translationReturnValue = translation(translationKey, {returnObjects: true,});
    if (typeof translationReturnValue == 'string')
        return <>{translationReturnValue}</>;
    throw new EvalError(`The translation key (${translationKey})cannot receive a translation key that contains a sub value.`);
}
