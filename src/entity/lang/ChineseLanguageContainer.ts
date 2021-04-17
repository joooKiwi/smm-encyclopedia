import {AbstractPluralLanguageContainer} from "./AbstractPluralLanguageContainer";
import {ChineseLanguage, ChineseReference} from "./ChineseLanguage";

export class AmericanAndEuropeanLanguageContainer
    extends AbstractPluralLanguageContainer<ChineseReference>
    implements ChineseLanguage {

    public constructor(value: string);
    public constructor(simplified: string, traditional: string);
    public constructor(valueOrSimplified: string, traditional?: string) {
        if (traditional === undefined)
            super(valueOrSimplified);
        else
            super(['simplified', valueOrSimplified], ['traditional', traditional],);
    }

    public get simplified() {
        return this.get('simplified');
    }

    public get traditional() {
        return this.get('traditional');
    }

}