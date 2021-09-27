import {Namespace, useTranslation} from 'react-i18next';

import type {AnyTranslationProperty, SimpleAnyTranslationProperty} from './TranslationProperty';

export default function AnyTranslationComponent<N extends Namespace, >(props: | AnyTranslationProperty<N> | SimpleAnyTranslationProperty<N>,) {
    const {namespace} = props;
    const {t: translation,} = useTranslation(namespace);

    if ('children' in props)
        return <>{props.children(translation)}</>;

    const translationReturnValue = translation(props.translationKey, {returnObjects: true,});
    if (typeof translationReturnValue == 'string')
        return <>{translationReturnValue}</>;
    throw new EvalError(`The translation key (${props.translationKey})cannot receive a translation key that contains a sub value.`);
}
