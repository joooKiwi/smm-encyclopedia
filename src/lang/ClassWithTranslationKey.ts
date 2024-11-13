import type {NullOrString} from '@joookiwi/type'

export interface ClassWithTranslationKey<TRANSLATION_KEY extends NullOrString = string, > {

    get translationKey(): TRANSLATION_KEY

}
