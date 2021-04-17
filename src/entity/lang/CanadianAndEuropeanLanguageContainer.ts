import {AbstractPluralLanguageContainer} from "./AbstractPluralLanguageContainer";
import {CanadianAndEuropeanLanguage, CanadianOrEuropeanReference} from "./CanadianAndEuropeanLanguage";

export class AmericanAndEuropeanLanguageContainer
    extends AbstractPluralLanguageContainer<CanadianOrEuropeanReference>
    implements CanadianAndEuropeanLanguage {

    public constructor(value: string);
    public constructor(canadian: string, european: string);
    public constructor(valueOrCanadian: string, european?: string) {
        if (european === undefined)
            super(valueOrCanadian);
        else
            super(['canadian', valueOrCanadian], ['european', european],);
    }

    public get canadian() {
        return this.get('canadian');
    }

    public get european() {
        return this.get('european');
    }

}