import type {Namespace, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty'
import type {ReactElementOrString}                                       from '../../util/react/ReactProperties'
import type {Translation}                                                from './Translation'

import {EMPTY_OBJECT} from '../../util/emptyVariables'

export abstract class AbstractTranslationContainer<N extends Namespace, T extends ReactElementOrString = ReactElementOrString, >
    implements Translation<N, T> {

    //region -------------------- Fields --------------------

    readonly #namespace
    readonly #translationKey
    readonly #replace

    //endregion -------------------- Fields --------------------

    protected constructor(namespace: N, translationKey: SingleTranslationKey<N>, replace: TranslationReplaceKeysMap<T> = EMPTY_OBJECT,) {
        this.#namespace = namespace
        this.#translationKey = translationKey
        this.#replace = replace
    }

    //region -------------------- Getter methods --------------------

    public get namespace(): N {
        return this.#namespace
    }

    public get translationKey(): SingleTranslationKey<N> {
        return this.#translationKey
    }

    public get replace(): TranslationReplaceKeysMap<T> {
        return this.#replace
    }

    //endregion -------------------- Getter methods --------------------

}
