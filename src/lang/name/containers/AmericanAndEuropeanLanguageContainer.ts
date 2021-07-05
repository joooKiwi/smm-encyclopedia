import type {AmericanAndEuropeanLanguage, AmericanOrEuropeanOriginal, AmericanOrEuropeanReference} from './AmericanAndEuropeanLanguage';

import {AbstractPluralLanguageContainer} from './AbstractPluralLanguageContainer';

export class AmericanAndEuropeanLanguageContainer
    extends AbstractPluralLanguageContainer<AmericanOrEuropeanReference>
    implements AmericanAndEuropeanLanguage {

    readonly #original;

    public constructor(value: string)
    public constructor(american: string, european: string,)
    public constructor(valueOrAmerican: string, european?: string,) {
        super(european === undefined ? valueOrAmerican : [['american', valueOrAmerican,], ['european', european,],]);
        this.#original = european === undefined ? valueOrAmerican : [valueOrAmerican, european,] as AmericanOrEuropeanOriginal;
    }


    public get original() {
        return this.#original;
    }

    public get american() {
        return this.get('american');
    }

    public get european() {
        return this.get('european');
    }

}