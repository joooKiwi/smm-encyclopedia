import type {AmericanAndEuropeanLanguage, AmericanOrEuropeanOriginal} from './containers/AmericanAndEuropeanLanguage';
import type {CanadianAndEuropeanLanguage, CanadianOrEuropeanOriginal} from './containers/CanadianAndEuropeanLanguage';
import type {ChineseLanguage, ChineseOriginal}                        from './containers/ChineseLanguage';
import type {SimpleLanguage}                                          from './containers/SimpleLanguage';
import type {Name}                                                    from './Name';

import {AmericanAndEuropeanLanguageContainer} from './containers/AmericanAndEuropeanLanguageContainer';
import {CanadianAndEuropeanLanguageContainer} from './containers/CanadianAndEuropeanLanguageContainer';
import {CallbackCaller}                       from '../../util/CallbackCaller';
import {ChineseLanguageContainer}             from './containers/ChineseLanguageContainer';
import {EveryLanguages}                       from '../EveryLanguages';
import {Languages}                            from '../Languages';
import {SimpleLanguageContainer}              from './containers/SimpleLanguageContainer';

export class NameContainer
    implements Name {

    //region -------------------- Attributes --------------------

    readonly #individualValues: readonly EveryLanguages[];
    readonly #mapCaller: CallbackCaller<Map<EveryLanguages, string>>;

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
        const individualValues = [];

        if (typeof english === 'string') {
            this.#english = new AmericanAndEuropeanLanguageContainer(english);
            individualValues.push(EveryLanguages.ENGLISH);
        } else {
            this.#english = new AmericanAndEuropeanLanguageContainer(...english);
            individualValues.push(EveryLanguages.AMERICAN_ENGLISH, EveryLanguages.EUROPEAN_ENGLISH,);
        }

        if (typeof french === 'string') {
            this.#french = new CanadianAndEuropeanLanguageContainer(french);
            individualValues.push(EveryLanguages.FRENCH);
        } else {
            this.#french = new CanadianAndEuropeanLanguageContainer(...french);
            individualValues.push(EveryLanguages.CANADIAN_FRENCH, EveryLanguages.EUROPEAN_FRENCH,);
        }

        this.#german = new SimpleLanguageContainer(german);
        individualValues.push(EveryLanguages.GERMAN);

        if (typeof spanish === 'string') {
            this.#spanish = new AmericanAndEuropeanLanguageContainer(spanish);
            individualValues.push(EveryLanguages.SPANISH);

        } else {
            this.#spanish = new AmericanAndEuropeanLanguageContainer(...spanish);
            individualValues.push(EveryLanguages.AMERICAN_SPANISH, EveryLanguages.EUROPEAN_SPANISH,);

        }

        this.#italian = new SimpleLanguageContainer(italian);
        individualValues.push(EveryLanguages.ITALIAN);

        this.#dutch = new SimpleLanguageContainer(dutch);
        individualValues.push(EveryLanguages.DUTCH);

        if (typeof portuguese === 'string') {
            this.#portuguese = new AmericanAndEuropeanLanguageContainer(portuguese);
            individualValues.push(EveryLanguages.PORTUGUESE);
        } else {
            this.#portuguese = new AmericanAndEuropeanLanguageContainer(...portuguese);
            individualValues.push(EveryLanguages.AMERICAN_PORTUGUESE, EveryLanguages.EUROPEAN_PORTUGUESE,);
        }

        this.#russian = new SimpleLanguageContainer(russian);
        individualValues.push(EveryLanguages.RUSSIAN);

        this.#japanese = new SimpleLanguageContainer(japanese);
        individualValues.push(EveryLanguages.JAPANESE);

        if (typeof chinese === 'string') {
            this.#chinese = new ChineseLanguageContainer(chinese);
            individualValues.push(EveryLanguages.CHINESE);
        } else {
            this.#chinese = new ChineseLanguageContainer(...chinese);
            individualValues.push(EveryLanguages.CHINESE_SIMPLIFIED, EveryLanguages.CHINESE_TRADITIONAL,);
        }

        this.#korean = new SimpleLanguageContainer(korean);
        individualValues.push(EveryLanguages.KOREAN);

        this.#individualValues = individualValues;
        this.#mapCaller = new CallbackCaller(() => {
            const map = new Map<EveryLanguages, string>();
            EveryLanguages.values.forEach(language => map.set(language, language.get(this)));
            return map;
        });
    }


    //region -------------------- Name properties --------------------

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


    public get individualValues() {
        return this.#individualValues;
    }

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return this.#mapCaller.get;
    }

}
