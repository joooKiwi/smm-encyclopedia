import type {NullOrString} from 'util/types/nullable'

export interface ClassWithTranslationKey<TRANSLATION_KEY extends NullOrString = string, > {

    get translationKey(): TRANSLATION_KEY

}
