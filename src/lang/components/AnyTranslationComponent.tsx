import type {TOptions}  from 'i18next'
import {useTranslation} from 'react-i18next'

import type {AnyTranslationPropertyByChildren, AnyTranslationPropertyWithProperty, Namespace, PossibleAnyTranslationPropertyReceived, SimpleAnyTranslationProperty} from './TranslationProperty'

import {TranslationUtility} from './TranslationUtility'

/**
 *
 * @param properties
 * @reactComponent
 */
export default function AnyTranslationComponent<N extends Namespace, >(properties: PossibleAnyTranslationPropertyReceived<N>,) {
    if ('property' in properties)
        return <AnyTranslationComponentByProperty property={properties.property}/>
    if ('children' in properties)
        return <AnyTranslationComponentByChildren children={properties.children} namespace={properties.namespace}/>
    return <AnyTranslationComponentBySimpleProperty namespace={properties.namespace} translationKey={properties.translationKey} replace={properties.replace}/>
}

/**
 *
 * @param properties
 * @reactComponent
 */
function AnyTranslationComponentByChildren<N extends Namespace, >({children, namespace,}: AnyTranslationPropertyByChildren<N>,) {
    const {t: translation,} = useTranslation(namespace)

    return <>{children(translation)}</>
}

/**
 *
 * @param properties
 * @reactComponent
 */
function AnyTranslationComponentBySimpleProperty<N extends Namespace, >({namespace, translationKey, replace,}: SimpleAnyTranslationProperty<N>,) {
    const {t: translation,} = useTranslation(namespace)

    const isReplaceNotNull = replace != null

    const options: TOptions<object> = {returnObjects: true,}
    if (isReplaceNotNull)
        options.interpolation = {skipOnVariables: true,}

    //TODO remove (if possible) the "Type instantiation is excessively deep and possibly infinite."
    // @ts-ignore
    const translationReturnValue = TranslationUtility.testTranslation(translation(translationKey, options,))

    return !isReplaceNotNull
        ? <>{translationReturnValue}</>
        : <>{TranslationUtility.replaceInTranslation(translationReturnValue, replace,)}</>
}

/**
 *
 * @param properties
 * @reactComponent
 */
function AnyTranslationComponentByProperty<N extends Namespace, >({property: {namespace, translationKey, replace,},}: AnyTranslationPropertyWithProperty<N>,) {
    const {t: translation,} = useTranslation(namespace)

    //TODO remove (if possible) the "Type instantiation is excessively deep and possibly infinite."
    // @ts-ignore
    return <>{TranslationUtility.replaceAndInterpretTranslation(translation, translationKey, replace,)}</>
}
