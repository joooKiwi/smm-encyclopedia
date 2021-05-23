import {AmericanOrEuropeanOriginal} from './containers/AmericanAndEuropeanLanguage';
import {Builder}                    from '../../util/Builder';
import {CanadianOrEuropeanOriginal} from './containers/CanadianAndEuropeanLanguage';
import {ChineseOriginal}            from './containers/ChineseLanguage';
import {Name}                       from './Name';
import {NameContainer}              from './NameContainer';

export class NameBuilder
    implements Builder<Name> {

    #english?: AmericanOrEuropeanOriginal;

    #french?: CanadianOrEuropeanOriginal;
    #german?: string;
    #spanish?: AmericanOrEuropeanOriginal;
    #italian?: string;
    #dutch?: string;
    #portuguese?: AmericanOrEuropeanOriginal;
    #russian?: string;
    #japanese?: string;
    #chinese?: ChineseOriginal;
    #korean?: string;


    public get english() {
        return this.#english;
    }

    protected get _english() {
        if (this.english === undefined)
            throw new ReferenceError('The english reference has not been initialised.');
        return this.english;
    }

    public setEnglish(value: AmericanOrEuropeanOriginal): this {
        this.#english = value;
        return this;
    }


    public get french() {
        return this.#french;
    }

    protected get _french() {
        if (this.french === undefined)
            throw new ReferenceError('The french reference has not been initialised.');
        return this.french;
    }

    public setFrench(value: CanadianOrEuropeanOriginal): this {
        this.#french = value;
        return this;
    }


    public get german() {
        return this.#german;
    }

    protected get _german() {
        if (this.german === undefined)
            throw new ReferenceError('The german reference has not been initialised.');
        return this.german;
    }

    public setGerman(value: string): this {
        this.#german = value;
        return this;
    }


    public get spanish() {
        return this.#spanish;
    }

    protected get _spanish() {
        if (this.spanish === undefined)
            throw new ReferenceError('The spanish reference has not been initialised.');
        return this.spanish;
    }

    public setSpanish(value: AmericanOrEuropeanOriginal): this {
        this.#spanish = value;
        return this;
    }


    public get italian() {
        return this.#italian;
    }

    protected get _italian() {
        if (this.italian === undefined)
            throw new ReferenceError('The italian reference has not been initialised.');
        return this.italian;
    }

    public setItalian(value: string): this {
        this.#italian = value;
        return this;
    }


    public get dutch() {
        return this.#dutch;
    }

    protected get _dutch() {
        if (this.dutch === undefined)
            throw new ReferenceError('The dutch reference has not been initialised.');
        return this.dutch;
    }

    public setDutch(value: string): this {
        this.#dutch = value;
        return this;
    }


    public get portuguese() {
        return this.#portuguese;
    }

    protected get _portuguese() {
        if (this.portuguese === undefined)
            throw new ReferenceError('The portuguese reference has not been initialised.');
        return this.portuguese;
    }

    public setPortuguese(value: AmericanOrEuropeanOriginal): this {
        this.#portuguese = value;
        return this;
    }


    public get russian() {
        return this.#russian;
    }

    protected get _russian() {
        if (this.russian === undefined)
            throw new ReferenceError('The russian reference has not been initialised.');
        return this.russian;
    }

    public setRussian(value: string): this {
        this.#russian = value;
        return this;
    }


    public get japanese() {
        return this.#japanese;
    }

    protected get _japanese() {
        if (this.japanese === undefined)
            throw new ReferenceError('The japanese reference has not been initialised.');
        return this.japanese;
    }

    public setJapanese(value: string): this {
        this.#japanese = value;
        return this;
    }


    public get chinese() {
        return this.#chinese;
    }

    protected get _chinese() {
        if (this.chinese === undefined)
            throw new ReferenceError('The chinese reference has not been initialised.');
        return this.chinese;
    }

    public setChinese(value: ChineseOriginal): this {
        this.#chinese = value;
        return this;
    }


    public get korean() {
        return this.#korean;
    }

    protected get _korean() {
        if (this.korean === undefined)
            throw new ReferenceError('The korean reference has not been initialised.');
        return this.korean;
    }

    public setKorean(value: string): this {
        this.#korean = value;
        return this;
    }


    public build() {
        const englishReference = this._english;
        const frenchReference = this._french;
        const germanReference = this._german;
        const spanishReference = this._spanish;
        const italianReference = this._italian;
        const dutchReference = this._dutch;
        const portugueseReference = this._portuguese;
        const russianReference = this._russian;
        const japaneseReference = this._japanese;
        const chineseReference = this._chinese;
        const koreanReference = this._korean;

        return new NameContainer(englishReference, frenchReference, germanReference, spanishReference, italianReference, dutchReference, portugueseReference, russianReference, japaneseReference, chineseReference, koreanReference,);
    }

}
