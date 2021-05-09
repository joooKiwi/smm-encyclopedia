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
    readonly #russian: SimpleLanguage;
    readonly #japanese: SimpleLanguage;
    readonly #chinese: ChineseLanguage;
    readonly #korean: SimpleLanguage;

    public constructor(english: string | [american: string, european: string],
                       french: string | [canadian: string, european: string],
                       german: string,
                       spanish: string | [american: string, european: string],
                       italian: string,
                       dutch: string,
                       portuguese: string | [american: string, european: string],
                       russian: string,
                       japanese: string,
                       chinese: string | [simplified: string, traditional: string],
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


    public get russian() {
        return this.#russian.value;
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

}