import type {DefaultResources, KeyPrefix, TFuncKey, TFuncReturn, TFunction} from 'react-i18next';

import type {Translation}                                     from '../containers/Translation';
import type {ReactElement, SimpleReactPropertiesWithChildren} from '../../util/react/ReactProperties';

export type TranslationReturnType = | string | JSX.Element;
export type ContentCallback = AnyTranslationCallback<ContentNamespace>;
export type GameContentCallback = AnyTranslationCallback<GameContentNamespace>;
export type EntityContentCallback = AnyTranslationCallback<EntityContentNamespace>;
export type LanguageCallback = AnyTranslationCallback<LanguageNamespace>;
export type AnyTranslationCallback<N extends Namespace, > = (translation: TranslationMethod<N>,) => TranslationReturnType;

export type ContentNamespace = 'content';
export type GameContentNamespace = 'gameContent';
export type EntityContentNamespace = 'entityContent';
export type LanguageNamespace = 'language';
export type Namespace = keyof DefaultResources;

/**
 * A simple translation method based on the {@link Namespace namespace} used.
 */
export type TranslationMethod<N extends Namespace, > = TFunction<N>;

/**
 * A simple translation return value based on a {@link Namespace namespace}.
 *
 * @see TranslationMethod
 * @see SingleTranslationKey
 */
export type TranslationReturnValue<N extends Namespace, > = TFuncReturn<N, SingleTranslationKey<N>, string, KeyPrefix<N>, DefaultResources[N]>;

/**
 * A single translation key used for a translation
 * on a specific {@link Namespace}.
 */
export type SingleTranslationKey<N extends Namespace, > = TFuncKey<N> extends infer S ? S : never;

/**
 * A replacement map to replace the selected key
 * into a {@link PossibleReactElement possible react element (string or React element)}.
 *
 * @note This has nothing with the React translation utilities.
 */
export type TranslationReplaceKeysMap<T extends PossibleReactElement = PossibleReactElement, > = { [key: string]: T };
/**
 * A {@link ReactElement React element} or a simple {@link String string}
 */
export type PossibleReactElement = | ReactElement | string;

//region -------------------- Simple property --------------------

interface _TranslationPropertyWithReplace {

    replace?: TranslationReplaceKeysMap

}

interface _TranslationPropertyWithNamespace<N extends Namespace, > {

    namespace: N

}

//endregion -------------------- Simple property --------------------
//region -------------------- Any property --------------------

export interface AnyTranslationPropertyByChildren<N extends Namespace, >
    extends TranslationPropertyByChildren<N>, _TranslationPropertyWithNamespace<N> {

}

export interface SimpleAnyTranslationProperty<N extends Namespace, >
    extends SimpleTranslationProperty<N>, _TranslationPropertyWithNamespace<N>, _TranslationPropertyWithReplace {

}

export interface AnyTranslationPropertyWithProperty<N extends Namespace, >
    extends TranslationPropertyWithProperty<N> {
}

//endregion -------------------- Any property --------------------
//region -------------------- Regular property --------------------

export interface TranslationPropertyByChildren<N extends Namespace, >
    extends SimpleReactPropertiesWithChildren<AnyTranslationCallback<N>> {

}

export interface SimpleTranslationProperty<N extends Namespace, >
    extends _TranslationPropertyWithReplace {

    translationKey: SingleTranslationKey<N>

}

export interface TranslationPropertyWithProperty<N extends Namespace, > {

    property: Translation<N>

}

//endregion -------------------- Regular property --------------------

export type PossibleAnyTranslationPropertyReceived<N extends Namespace, > = | AnyTranslationPropertyByChildren<N> | SimpleAnyTranslationProperty<N> | AnyTranslationPropertyWithProperty<N>;
export type PossibleTranslationPropertyReceived<N extends Namespace, > = | TranslationPropertyByChildren<N> | SimpleTranslationProperty<N> | TranslationPropertyWithProperty<N>;
