import {AbstractPluralLanguageContainer}                    from './AbstractPluralLanguageContainer';
import {ChineseLanguage, ChineseOriginal, ChineseReference} from './ChineseLanguage';

export class ChineseLanguageContainer
    extends AbstractPluralLanguageContainer<ChineseReference>
    implements ChineseLanguage {

    readonly #original;

    public constructor(value: string)
    public constructor(simplified: string, traditional: string)
    public constructor(valueOrSimplified: string, traditional?: string) {
        super(traditional === undefined ? valueOrSimplified : [['simplified', valueOrSimplified], ['traditional', traditional],]);
        this.#original = traditional === undefined ? valueOrSimplified : [valueOrSimplified, traditional] as ChineseOriginal;
    }

    public get original() {
        return this.#original;
    }

    public get simplified() {
        return this.get('simplified');
    }

    public get traditional() {
        return this.get('traditional');
    }

}