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
import {ProjectLanguages}                     from '../ProjectLanguages';
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

        //region -------------------- English initialisation --------------------

        if (typeof english === 'string') {
            this.#english = new AmericanAndEuropeanLanguageContainer(english);
            individualValues.push(EveryLanguages.ENGLISH);
        } else {
            this.#english = new AmericanAndEuropeanLanguageContainer(...english);
            individualValues.push(EveryLanguages.AMERICAN_ENGLISH, EveryLanguages.EUROPEAN_ENGLISH,);
        }

        //endregion -------------------- English initialisation --------------------
        //region -------------------- French initialisation --------------------

        if (typeof french === 'string') {
            this.#french = new CanadianAndEuropeanLanguageContainer(french);
            individualValues.push(EveryLanguages.FRENCH);
        } else {
            this.#french = new CanadianAndEuropeanLanguageContainer(...french);
            individualValues.push(EveryLanguages.CANADIAN_FRENCH, EveryLanguages.EUROPEAN_FRENCH,);
        }

        //endregion -------------------- French initialisation --------------------
        //region -------------------- German initialisation --------------------

        this.#german = new SimpleLanguageContainer(german);
        individualValues.push(EveryLanguages.GERMAN);

        //endregion -------------------- German initialisation --------------------
        //region -------------------- Spanish initialisation --------------------

        if (typeof spanish === 'string') {
            this.#spanish = new AmericanAndEuropeanLanguageContainer(spanish);
            individualValues.push(EveryLanguages.SPANISH);

        } else {
            this.#spanish = new AmericanAndEuropeanLanguageContainer(...spanish);
            individualValues.push(EveryLanguages.AMERICAN_SPANISH, EveryLanguages.EUROPEAN_SPANISH,);
        }

        //endregion -------------------- Spanish initialisation --------------------
        //region -------------------- Italian initialisation --------------------

        this.#italian = new SimpleLanguageContainer(italian);
        individualValues.push(EveryLanguages.ITALIAN);

        //endregion -------------------- Italian initialisation --------------------
        //region -------------------- Dutch initialisation --------------------

        this.#dutch = new SimpleLanguageContainer(dutch);
        individualValues.push(EveryLanguages.DUTCH);

        //endregion -------------------- Dutch initialisation --------------------
        //region -------------------- Portuguese initialisation --------------------

        if (typeof portuguese === 'string') {
            this.#portuguese = new AmericanAndEuropeanLanguageContainer(portuguese);
            individualValues.push(EveryLanguages.PORTUGUESE);
        } else {
            this.#portuguese = new AmericanAndEuropeanLanguageContainer(...portuguese);
            individualValues.push(EveryLanguages.AMERICAN_PORTUGUESE, EveryLanguages.EUROPEAN_PORTUGUESE,);
        }

        //endregion -------------------- Portuguese initialisation --------------------
        //region -------------------- Russian initialisation --------------------

        this.#russian = new SimpleLanguageContainer(russian);
        individualValues.push(EveryLanguages.RUSSIAN);

        //endregion -------------------- Russian initialisation --------------------
        //region -------------------- Japanese initialisation --------------------

        this.#japanese = new SimpleLanguageContainer(japanese);
        individualValues.push(EveryLanguages.JAPANESE);

        //endregion -------------------- Japanese initialisation --------------------
        //region -------------------- Chinese initialisation --------------------

        if (typeof chinese === 'string') {
            this.#chinese = new ChineseLanguageContainer(chinese);
            individualValues.push(EveryLanguages.CHINESE);
        } else {
            this.#chinese = new ChineseLanguageContainer(...chinese);
            individualValues.push(EveryLanguages.SIMPLIFIED_CHINESE, EveryLanguages.TRADITIONAL_CHINESE,);
        }

        //endregion -------------------- Chinese initialisation --------------------
        //region -------------------- Korean initialisation --------------------

        this.#korean = new SimpleLanguageContainer(korean);
        individualValues.push(EveryLanguages.KOREAN);

        //endregion -------------------- Korean initialisation --------------------

        this.#individualValues = individualValues;
        this.#mapCaller = new CallbackCaller(() => {
            const map = new Map<EveryLanguages, string>();
            EveryLanguages.values.forEach(language => map.set(language, language.get(this)));
            return map;
        });
    }


    //region -------------------- Name properties --------------------

    public get languageValue() {
        return ProjectLanguages.currentLanguage.get(this);
    }

    //region -------------------- English properties --------------------

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

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

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

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get german() {
        return this.#german.value;
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

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

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get italian() {
        return this.#italian.value;
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get dutch() {
        return this.#dutch.value;
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

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

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get russian() {
        return this.#russian.value;
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get japanese() {
        return this.#japanese.value;
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

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

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get korean() {
        return this.#korean.value;
    }

    //endregion -------------------- Korean properties --------------------

    public get individualValues() {
        return this.#individualValues;
    }

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return this.#mapCaller.get;
    }

}
