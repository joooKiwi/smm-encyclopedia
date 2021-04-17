import {AmericanAndEuropeanLanguage} from "./AmericanAndEuropeanLanguage";
import {AmericanAndEuropeanLanguageContainer} from "./AmericanAndEuropeanLanguageContainer";
import {CanadianAndEuropeanLanguage} from "./CanadianAndEuropeanLanguage";
import {CanadianAndEuropeanLanguageContainer} from "./CanadianAndEuropeanLanguageContainer";
import {ChineseLanguage} from "./ChineseLanguage";
import {ChineseLanguageContainer} from "./ChineseLanguageContainer";
import {SimpleLanguage} from "./SimpleLanguage";
import {SimpleLanguageContainer} from "./SimpleLanguageContainer";
import {SMM2Name} from "./SMM2Name";
import {Languages} from "../../lang/Languages";

export class SMM2NameContainer
    implements SMM2Name {

    readonly #japanese: SimpleLanguage;
    readonly #english: AmericanAndEuropeanLanguage;
    readonly #spanish: AmericanAndEuropeanLanguage;
    readonly #french: CanadianAndEuropeanLanguage;
    readonly #dutch: SimpleLanguage;
    readonly #german: SimpleLanguage;
    readonly #italian: SimpleLanguage;
    readonly #russian: SimpleLanguage;
    readonly #korean: SimpleLanguage;
    readonly #chinese: ChineseLanguage;

    public constructor(japanese: string,
                       english: string | [string, string],
                       spanish: string | [string, string],
                       french: string | [string, string],
                       dutch: string,
                       german: string,
                       italian: string,
                       russian: string,
                       korean: string,
                       chinese: string | [string, string],) {
        this.#japanese = new SimpleLanguageContainer(japanese);
        this.#english = typeof english === 'string' ? new AmericanAndEuropeanLanguageContainer(english) : new AmericanAndEuropeanLanguageContainer(...english);
        this.#spanish = typeof spanish === 'string' ? new AmericanAndEuropeanLanguageContainer(spanish) : new AmericanAndEuropeanLanguageContainer(...spanish);
        this.#french = typeof french === 'string' ? new CanadianAndEuropeanLanguageContainer(french) : new CanadianAndEuropeanLanguageContainer(...french);
        this.#dutch = new SimpleLanguageContainer(dutch);
        this.#german = new SimpleLanguageContainer(german);
        this.#italian = new SimpleLanguageContainer(italian);
        this.#russian = new SimpleLanguageContainer(russian);
        this.#korean = new SimpleLanguageContainer(korean);
        this.#chinese = typeof chinese === 'string' ? new ChineseLanguageContainer(chinese) : new ChineseLanguageContainer(...chinese);
    }

    public get languageValue() {
        return Languages.currentLanguage.get(this);
    }


    public get japanese() {
        return this.#japanese.value;
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


    public get spanish() {
        return this.#spanish.value;
    }

    public get americanSpanish() {
        return this.#spanish.american;
    }

    public get europeanSpanish() {
        return this.#spanish.european;
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


    public get dutch() {
        return this.#dutch.value;
    }

    public get german() {
        return this.#german.value;
    }

    public get italian() {
        return this.#italian.value;
    }

    public get korean() {
        return this.#korean.value;
    }

    public get russian() {
        return this.#russian.value;
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

}