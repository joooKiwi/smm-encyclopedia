import {AmericanAndEuropeanLanguage, AmericanOrEuropeanOriginal} from './AmericanAndEuropeanLanguage';
import {AmericanAndEuropeanLanguageContainer}                    from './AmericanAndEuropeanLanguageContainer';
import {CanadianAndEuropeanLanguage, CanadianOrEuropeanOriginal} from './CanadianAndEuropeanLanguage';
import {CanadianAndEuropeanLanguageContainer}                    from './CanadianAndEuropeanLanguageContainer';
import {ChineseLanguage, ChineseOriginal}                        from './ChineseLanguage';
import {ChineseLanguageContainer}                                from './ChineseLanguageContainer';
import {Languages}                                               from '../../lang/Languages';
import {SimpleLanguage}                                          from './SimpleLanguage';
import {SimpleLanguageContainer}                                 from './SimpleLanguageContainer';
import {SMM2Name}                                                from './SMM2Name';
import {SMM2Languages}                                           from './SMM2Languages';

export class SMM2NameContainer
    implements SMM2Name {

    //region -------------------- Attributes --------------------

    #map?: Map<SMM2Languages, string>;

    readonly #english: AmericanAndEuropeanLanguage;
    readonly #french: CanadianAndEuropeanLanguage;
    readonly #german: SimpleLanguage;
    readonly #spanish: AmericanAndEuropeanLanguage;
    readonly #italian: SimpleLanguage;
    readonly #dutch: SimpleLanguage;
    readonly #portuguese: AmericanAndEuropeanLanguage;
    readonly #russian: SimpleLanguage;
    readonly #japanese: SimpleLanguage;
    readonly #chinese: ChineseLanguage;
    readonly #korean: SimpleLanguage;

    //endregion -------------------- Attributes --------------------

    public constructor(english: AmericanOrEuropeanOriginal,
                       french: CanadianOrEuropeanOriginal,
                       german: string,
                       spanish: AmericanOrEuropeanOriginal,
                       italian: string,
                       dutch: string,
                       portuguese: AmericanOrEuropeanOriginal,
                       russian: string,
                       japanese: string,
                       chinese: ChineseOriginal,
                       korean: string,) {
        this.#english = typeof english === 'string' ? new AmericanAndEuropeanLanguageContainer(english) : new AmericanAndEuropeanLanguageContainer(...english);
        this.#french = typeof french === 'string' ? new CanadianAndEuropeanLanguageContainer(french) : new CanadianAndEuropeanLanguageContainer(...french);
        this.#german = new SimpleLanguageContainer(german);
        this.#spanish = typeof spanish === 'string' ? new AmericanAndEuropeanLanguageContainer(spanish) : new AmericanAndEuropeanLanguageContainer(...spanish);
        this.#italian = new SimpleLanguageContainer(italian);
        this.#dutch = new SimpleLanguageContainer(dutch);
        this.#portuguese = typeof portuguese === 'string' ? new AmericanAndEuropeanLanguageContainer(portuguese) : new AmericanAndEuropeanLanguageContainer(...portuguese);
        this.#russian = new SimpleLanguageContainer(russian);
        this.#japanese = new SimpleLanguageContainer(japanese);
        this.#chinese = typeof chinese === 'string' ? new ChineseLanguageContainer(chinese) : new ChineseLanguageContainer(...chinese);
        this.#korean = new SimpleLanguageContainer(korean);
    }


    public get languageValue() {
        return Languages.currentLanguage.get(this);
    }


    public get originalEnglish() {
        return this.#english.original;
    }

    public get english() {
        return this.#english.value;
    }

    public get americanEnglish() {
        return this.#english.american;
    }

    public get europeanEnglish() {
        return this.#english.european;
    }

    public get originalFrench() {
        return this.#french.original;
    }

    public get french() {
        return this.#french.value;
    }

    public get canadianFrench() {
        return this.#french.canadian;
    }

    public get europeanFrench() {
        return this.#french.european;
    }


    public get german() {
        return this.#german.value;
    }


    public get originalSpanish() {
        return this.#spanish.original;
    }

    public get spanish() {
        return this.#spanish.value;
    }

    public get americanSpanish() {
        return this.#spanish.american;
    }

    public get europeanSpanish() {
        return this.#spanish.european;
    }


    public get italian() {
        return this.#italian.value;
    }


    public get dutch() {
        return this.#dutch.value;
    }


    public get originalPortuguese() {
        return this.#portuguese.original;
    }

    public get portuguese() {
        return this.#portuguese.value;
    }

    public get americanPortuguese() {
        return this.#portuguese.american;
    }

    public get europeanPortuguese() {
        return this.#portuguese.european;
    }


    public get russian() {
        return this.#russian.value;
    }


    public get japanese() {
        return this.#japanese.value;
    }


    public get originalChinese() {
        return this.#chinese.original;
    }

    public get chinese() {
        return this.#chinese.value;
    }

    public get simplifiedChinese() {
        return this.#chinese.traditional;
    }

    public get traditionalChinese() {
        return this.#chinese.simplified;
    }


    public get korean() {
        return this.#korean.value;
    }


    public toNameMap() {
        return this.#map ?? (this.#map = this.__createMap());
    }

    private __createMap() {
        const map = new Map<SMM2Languages, string>();
        SMM2Languages.values.forEach(language => map.set(language, language.get(this)));
        return map;
    }

}

export namespace SMM2NameContainer {
    export namespace chinese {
        export namespace test {
        }
    }
}