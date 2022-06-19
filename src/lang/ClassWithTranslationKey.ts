export interface ClassWithTranslationKey<TRANSLATION_KEY extends string | null = string, > {

    get translationKey(): TRANSLATION_KEY

}
