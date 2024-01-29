export interface LanguageThatCanBeUsed<out U extends boolean = boolean, > {

    get isUsed(): U

}
