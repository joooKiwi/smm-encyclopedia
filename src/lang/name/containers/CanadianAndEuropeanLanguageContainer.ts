import {AbstractPluralLanguageContainer}                                                      from './AbstractPluralLanguageContainer';
import {CanadianAndEuropeanLanguage, CanadianOrEuropeanOriginal, CanadianOrEuropeanReference} from './CanadianAndEuropeanLanguage';

export class CanadianAndEuropeanLanguageContainer
    extends AbstractPluralLanguageContainer<CanadianOrEuropeanReference>
    implements CanadianAndEuropeanLanguage {

    readonly #original;

    public constructor(value: string)
    public constructor(canadian: string, european: string,)
    public constructor(valueOrCanadian: string, european?: string,) {
        super(european === undefined ? valueOrCanadian : [['canadian', valueOrCanadian,], ['european', european,],]);
        this.#original = european === undefined ? valueOrCanadian : [valueOrCanadian, european,] as CanadianOrEuropeanOriginal;
    }

    public get original() {
        return this.#original;
    }

    public get canadian() {
        return this.get('canadian');
    }

    public get european() {
        return this.get('european');
    }

}