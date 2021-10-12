import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal} from './containers/Language';
import type {Builder}                                                                 from '../../util/Builder';
import type {Name}                                                                    from './Name';

import {NameContainer} from './NameContainer';

export class NameBuilder
    implements Builder<Name> {

    //region -------------------- Attributes --------------------

    #english?: AmericanOrEuropeanOriginal;
    #french?: CanadianOrEuropeanOriginal;
    #german?: | string | null;
    #spanish?: | AmericanOrEuropeanOriginal | null;
    #italian?: | string | null;
    #dutch?: | string | null;
    #portuguese?: | AmericanOrEuropeanOriginal | null;
    #russian?: | string | null;
    #japanese?: | string | null;
    #chinese?: | ChineseOriginal | null;
    #korean?: | string | null;
    #greek?: | string | null;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter & setter methods --------------------

    //region -------------------- English getter & setter methods --------------------

    public get english() {
        return this.#english;
    }

    protected get _english() {
        if (this.english === undefined)
            throw new ReferenceError('The english reference has not been initialised.');
        return this.english;
    }

    public setEnglish(value: AmericanOrEuropeanOriginal,): this {
        this.#english = value;
        return this;
    }

    //endregion -------------------- English getter & setter methods --------------------
    //region -------------------- French getter & setter methods --------------------

    public get french() {
        return this.#french;
    }

    protected get _french() {
        if (this.french === undefined)
            throw new ReferenceError('The french reference has not been initialised.');
        return this.french;
    }

    public setFrench(value: CanadianOrEuropeanOriginal,): this {
        this.#french = value;
        return this;
    }

    //endregion -------------------- French getter & setter methods --------------------
    //region -------------------- German getter & setter methods --------------------

    public get german() {
        return this.#german;
    }

    protected get _german() {
        if (this.german === undefined)
            throw new ReferenceError('The german reference has not been initialised.');
        return this.german;
    }

    public setGerman(value: | string | null,): this {
        this.#german = value;
        return this;
    }

    //endregion -------------------- German getter & setter methods --------------------
    //region -------------------- Spanish getter & setter methods --------------------

    public get spanish() {
        return this.#spanish;
    }

    protected get _spanish() {
        if (this.spanish === undefined)
            throw new ReferenceError('The spanish reference has not been initialised.');
        return this.spanish;
    }

    public setSpanish(value: | AmericanOrEuropeanOriginal | null,): this {
        this.#spanish = value;
        return this;
    }

    //endregion -------------------- Spanish getter & setter methods --------------------
    //region -------------------- Italian getter & setter methods --------------------

    public get italian() {
        return this.#italian;
    }

    protected get _italian() {
        if (this.italian === undefined)
            throw new ReferenceError('The italian reference has not been initialised.');
        return this.italian;
    }

    public setItalian(value: | string | null,): this {
        this.#italian = value;
        return this;
    }

    //endregion -------------------- Italian getter & setter methods --------------------
    //region -------------------- Dutch getter & setter methods --------------------

    public get dutch() {
        return this.#dutch;
    }

    protected get _dutch() {
        if (this.dutch === undefined)
            throw new ReferenceError('The dutch reference has not been initialised.');
        return this.dutch;
    }

    public setDutch(value: | string | null,): this {
        this.#dutch = value;
        return this;
    }

    //endregion -------------------- Dutch getter & setter methods --------------------
    //region -------------------- Portuguese getter & setter methods --------------------

    public get portuguese() {
        return this.#portuguese;
    }

    protected get _portuguese() {
        if (this.portuguese === undefined)
            throw new ReferenceError('The portuguese reference has not been initialised.');
        return this.portuguese;
    }

    public setPortuguese(value: | AmericanOrEuropeanOriginal | null,): this {
        this.#portuguese = value;
        return this;
    }

    //endregion -------------------- Portuguese getter & setter methods --------------------
    //region -------------------- Russian getter & setter methods --------------------

    public get russian() {
        return this.#russian;
    }

    protected get _russian() {
        if (this.russian === undefined)
            throw new ReferenceError('The russian reference has not been initialised.');
        return this.russian;
    }

    public setRussian(value: | string | null,): this {
        this.#russian = value;
        return this;
    }

    //endregion -------------------- Russian getter & setter methods --------------------
    //region -------------------- Japanese getter & setter methods --------------------

    public get japanese() {
        return this.#japanese;
    }

    protected get _japanese() {
        if (this.japanese === undefined)
            throw new ReferenceError('The japanese reference has not been initialised.');
        return this.japanese;
    }

    public setJapanese(value: | string | null,): this {
        this.#japanese = value;
        return this;
    }

    //endregion -------------------- Japanese getter & setter methods --------------------
    //region -------------------- Chinese getter & setter methods --------------------

    public get chinese() {
        return this.#chinese;
    }

    protected get _chinese() {
        if (this.chinese === undefined)
            throw new ReferenceError('The chinese reference has not been initialised.');
        return this.chinese;
    }

    public setChinese(value: | ChineseOriginal | null,): this {
        this.#chinese = value;
        return this;
    }

    //endregion -------------------- Chinese getter & setter methods --------------------
    //region -------------------- Korean getter & setter methods --------------------

    public get korean() {
        return this.#korean;
    }

    protected get _korean() {
        if (this.korean === undefined)
            throw new ReferenceError('The korean reference has not been initialised.');
        return this.korean;
    }

    public setKorean(value: | string | null,): this {
        this.#korean = value;
        return this;
    }

    //endregion -------------------- Korean getter & setter methods --------------------
    //region -------------------- Korean getter & setter methods --------------------

    public get greek() {
        return this.#greek;
    }

    protected get _greek() {
        if (this.greek === undefined)
            throw new ReferenceError('The greek reference has not been initialised.');
        return this.greek;
    }

    public setGreek(value: | string | null,): this {
        this.#greek = value;
        return this;
    }

    //endregion -------------------- Korean getter & setter methods --------------------

    //endregion -------------------- Getter & setter methods --------------------

    public build() {
        return new NameContainer(
            this._english,
            this._french,
            this._german,
            this._spanish,
            this._italian,
            this._dutch,
            this._portuguese,
            this._russian,
            this._japanese,
            this._chinese,
            this._korean,
            this._greek,
        );
    }

}
