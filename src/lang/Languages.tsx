import {DateInstanceCreator} from "./DateInstanceCreator";
import {DateInstanceCreatorBuilder} from "./DateInstanceCreatorBuilder";

export type PossibleLanguagesAcronym =
    'ja'
    | 'en_US' | 'en_EU'
    | 'es_AM' | 'es_EU'
    | 'fr_CA' | 'fr_EU'
    | 'nl' | 'de' | 'it' | 'ru'
    | 'ko'
    | 'zh_T' | 'zh_S';
export type PossibleLanguagesEnglishName =
    'Japanese'
    | 'English (America)' | 'English (Europe)'
    | 'Spanish (America)' | 'Spanish (Europe)'
    | 'French (Canada)' | 'French (Europe)'
    | 'Dutch' | 'German' | 'Italian' | 'Russian'
    | 'Korean'
    | 'Chinese (Traditional)' | 'Chinese (Simplified)';
export type PossibleLanguagesOriginalName =
    '日本語'
    | 'English (America)' | 'English (Europe)'
    | 'Español (America)' | 'Español (Europa)'
    | 'Français (Canada)' | 'Français (Europe)'
    | 'Nederlands' | 'Deutsche' | 'Italiano' | 'русский'
    | '한국어'
    | '简体(中文)' | '中國(傳統的)';

export abstract class Languages {
    public static readonly JAPANESE = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('year,month,day', '', '',)
                .setDays('afterText', '年',)
                .setMonths('afterText', '月',)
                .setYears('afterText', '日',)
                .build();
        }
    }('ja', 'Japanese', '日本語',);
    public static readonly AMERICAN_ENGLISH = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('month,day,year', ' ', ', ',)
                .setDays('custom', day => day === 1 || day === 21 || day === 31
                    ? <>{day}<sup>st</sup></>
                    : day === 2 || day === 22
                        ? <>{day}<sup>nd</sup></>
                        : day === 3
                            ? <>3<sup>rd</sup></>
                            : <>{day}<sup>th</sup></>,)
                .setMonths('array', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],)
                .build();
        }
    }('en_US', 'English (America)', 'English (America)',);
    public static readonly EUROPEAN_ENGLISH = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_ENGLISH.newDateInstanceCreator;
        }
    }('en_EU', 'English (Europe)', 'English (Europe)',);
    public static readonly AMERICAN_SPANISH = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'deciembre',],)
                .build();
        }
    }('es_AM', 'Spanish (America)', 'Español (America)',);
    public static readonly EUROPEAN_SPANISH = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_SPANISH.newDateInstanceCreator;
        }
    }('es_EU', 'Spanish (Europe)', 'Español (Europa)',);
    public static readonly CANADIAN_FRENCH = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setDays('firstAfterHover', 'er',)
                .setMonths('array', ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',],)
                .build();
        }
    }('fr_CA', 'French (Canada)', 'Français (Canada)',);
    public static readonly EUROPEAN_FRENCH = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.CANADIAN_FRENCH.newDateInstanceCreator;
        }
    }('fr_EU', 'French (Europe)', 'Français (Europe)',);
    public static readonly DUTCH = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['januari', 'febuari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'novembere', 'decembre',],)
                .build();
        }
    }('nl', 'Dutch', 'Nederlands',);
    public static readonly GERMAN = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', '. ', ' ',)
                .setDays('beforeText', 'der ',)
                .setMonths('array', ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',],)
                .build();
        }
    }('de', 'German', 'Deutsche',);
    public static readonly ITALIAN = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setDays('firstReplace', 'il')
                .setMonths('array', ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',],)
                .build();
        }
    }('it', 'Italian', 'Italiano',);
    public static readonly RUSSIAN = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',],)
                .setYears('afterText', ' года')
                .build();
        }
    }('ru', 'Russian', 'русский');
    public static readonly KOREAN = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('year,month,day', '', '')
                .setDays('afterText', '년',)
                .setMonths('afterText', '월',)
                .setYears('afterText', '일',)
                .build();
        }
    }('ko', 'Korean', '한국어',);
    public static readonly CHINESE_TRADITIONAL = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.JAPANESE.newDateInstanceCreator;
        }
    }('zh_T', 'Chinese (Traditional)', '简体(中文)',);
    public static readonly CHINESE_SIMPLIFIED = new class extends Languages {
        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.JAPANESE.newDateInstanceCreator;
        }
    }('zh_S', 'Chinese (Simplified)', '中國(傳統的)',);


    private static __VALUES: readonly Languages[];
    private static __CURRENT_LANGUAGE: Languages;
    private static __DEFAULT_LANGUAGE: PossibleLanguagesAcronym;

    readonly #acronym;
    readonly #englishName;
    readonly #originalName;

    private constructor(acronym: PossibleLanguagesAcronym, englishName: PossibleLanguagesEnglishName, originalName: PossibleLanguagesOriginalName) {
        this.#acronym = acronym;
        this.#englishName = englishName;
        this.#originalName = originalName;
    }

    public static get currentLanguage(): Languages {
        return this.__CURRENT_LANGUAGE;
    }

    public static get defaultLanguage(): PossibleLanguagesAcronym {
        return this.__DEFAULT_LANGUAGE;
    }

    public static get values(): readonly Languages[] {
        return this.__VALUES === undefined
            ? this.__VALUES = [
                this.JAPANESE,
                this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
                this.AMERICAN_SPANISH, this.EUROPEAN_SPANISH,
                this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
                this.DUTCH,
                this.GERMAN,
                this.ITALIAN,
                this.RUSSIAN,
                this.KOREAN,
                this.CHINESE_TRADITIONAL, this.CHINESE_SIMPLIFIED,
            ]
            : this.__VALUES;
    }

    public get acronym(): PossibleLanguagesAcronym {
        return this.#acronym;
    }

    public get englishName(): PossibleLanguagesEnglishName {
        return this.#englishName;
    }

    public get originalName(): PossibleLanguagesOriginalName {
        return this.#originalName;
    }

    public abstract get newDateInstanceCreator(): DateInstanceCreator;

    public static setCurrentLanguage(value: Languages | string): void {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            this.__CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML();
    }

    public static setDefaultLanguage(value: Languages | PossibleLanguagesAcronym): void {
        this.__DEFAULT_LANGUAGE = typeof value === 'string' ? value : value.acronym;
    }


    public static getValue(value: Languages | PossibleLanguagesAcronym | PossibleLanguagesEnglishName | PossibleLanguagesOriginalName): Languages
    public static getValue(value: string): Languages | null
    public static getValue(value: Languages | string): Languages | null
    public static getValue(value: Languages | string): Languages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.acronym === value || language.englishName === value || language.originalName === value) || null
            : value;
    }

    private __setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.acronym))
        return this;
    }

}

Languages.setDefaultLanguage('en_US');

export function __(key: string, language: PossibleLanguagesAcronym = Languages.currentLanguage.acronym): string {
    //TODO add file searcher on the json files for this method
    return key;
}