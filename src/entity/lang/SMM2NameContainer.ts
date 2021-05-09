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

    readonly #french: CanadianAndEuropeanLanguage;
    readonly #english: AmericanAndEuropeanLanguage;
    readonly #german: SimpleLanguage;
    readonly #spanish: AmericanAndEuropeanLanguage;
    readonly #italian: SimpleLanguage;
    readonly #dutch: SimpleLanguage;
    readonly #portuguese: AmericanAndEuropeanLanguage;
    readonly #japanese: SimpleLanguage;
    readonly #chinese: ChineseLanguage;
    readonly #korean: SimpleLanguage;
    readonly #russian: SimpleLanguage;

    public constructor(japanese: string,
                       english: string | [american: string, european: string],
                       spanish: string | [american: string, european: string],
                       french: string | [canadian: string, european: string],
                       dutch: string,
                       german: string,
                       italian: string,
                       portuguese: string | [american: string, european: string],
                       russian: string,
                       korean: string,
                       chinese: string | [simplified: string, traditional: string],) {
        this.#japanese = new SimpleLanguageContainer(japanese);
        this.#english = typeof english === 'string' ? new AmericanAndEuropeanLanguageContainer(english) : new AmericanAndEuropeanLanguageContainer(...english);
        this.#spanish = typeof spanish === 'string' ? new AmericanAndEuropeanLanguageContainer(spanish) : new AmericanAndEuropeanLanguageContainer(...spanish);
        this.#french = typeof french === 'string' ? new CanadianAndEuropeanLanguageContainer(french) : new CanadianAndEuropeanLanguageContainer(...french);
        this.#dutch = new SimpleLanguageContainer(dutch);
        this.#german = new SimpleLanguageContainer(german);
        this.#italian = new SimpleLanguageContainer(italian);
        this.#portuguese = typeof portuguese === 'string' ? new AmericanAndEuropeanLanguageContainer(portuguese) : new AmericanAndEuropeanLanguageContainer(...portuguese);
        this.#russian = new SimpleLanguageContainer(russian);
        this.#korean = new SimpleLanguageContainer(korean);
        this.#chinese = typeof chinese === 'string' ? new ChineseLanguageContainer(chinese) : new ChineseLanguageContainer(...chinese);
    }


    public get languageValue() {
        return Languages.currentLanguage.get(this);
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


    public get portuguese() {
        return this.#portuguese.value;
    }

    public get americanPortuguese() {
        return this.#portuguese.american;
    }

    public get europeanPortuguese() {
        return this.#portuguese.european;
    }


    public get japanese() {
        return this.#japanese.value;
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


    public get russian() {
        return this.#russian.value;
    }

}