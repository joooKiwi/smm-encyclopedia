import type {Namespace, SimpleAnyTranslationProperty, SingleTranslationKey} from '../components/TranslationProperty';

export abstract class AbstractTranslationContainer<N extends Namespace, >
    implements SimpleAnyTranslationProperty<N> {

    //region -------------------- Attributes --------------------

    readonly #namespace;
    readonly #translationKey;

    //endregion -------------------- Attributes --------------------

    protected constructor(namespace: N, translationKey: SingleTranslationKey<N>,) {
        this.#namespace = namespace;
        this.#translationKey = translationKey;
    }

    //region -------------------- Getter methods --------------------

    public get namespace(): N {
        return this.#namespace;
    }

    public get translationKey(): SingleTranslationKey<N> {
        return this.#translationKey;
    }

    //endregion -------------------- Getter methods --------------------

}
