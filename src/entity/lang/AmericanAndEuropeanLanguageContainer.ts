import {AbstractPluralLanguageContainer} from "./AbstractPluralLanguageContainer";
import {AmericanAndEuropeanLanguage, AmericanOrEuropeanReference} from "./AmericanAndEuropeanLanguage";

export class AmericanAndEuropeanLanguageContainer
    extends AbstractPluralLanguageContainer<AmericanOrEuropeanReference>
    implements AmericanAndEuropeanLanguage {

    public constructor(value: string);
    public constructor(american: string, european: string);
    public constructor(valueOrAmerican: string, european?: string) {
        if (european === undefined)
            super(valueOrAmerican);
        else
            super([['american', valueOrAmerican], ['european', european],]);
    }

    public get american() {
        return this.get('american');
    }

    public get european() {
        return this.get('european');
    }

}