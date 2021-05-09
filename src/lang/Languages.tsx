import {DateInstanceCreator} from "./date/DateInstanceCreator";
import {DateInstanceCreatorBuilder} from "./date/DateInstanceCreatorBuilder";
import i18n from "i18next";
import {ClassWithEveryLanguages} from "./ClassWithEveryLanguages";

export type PossibleLanguagesAcronym =
    | 'ja'
    | 'en_AM' | 'en_EU'
    | 'de'
    | 'fr_CA' | 'fr_EU'
    | 'es_AM' | 'es_EU'
    | 'it' | 'nl'
    | 'pt_AM' | 'pt_EU'
    | 'ru' | 'ko'
    | 'zh_T' | 'zh_S';
export type PossibleLanguagesEnglishName =
    | `English (${'America' | 'Europe'})`
    | `French (${'Canada' | 'Europe'})`
    | 'German'
    | `Spanish (${'America' | 'Europe'})`
    | 'Italian' | 'Dutch'
    | `Portuguese (${'America' | 'Europe'})`
    | 'Japanese'
    | 'Traditional Chinese' | 'Simplified Chinese'
    | 'Korean' | 'Russian';
export type PossibleLanguagesOriginalName =
    | `English (${'America' | 'Europe'})`
    | `Français (${'Canada' | 'Europe'})`
    | 'Deutsche'
    | `Español (${'America' | 'Europa'})`
    | 'Italiano' | 'Nederlands'
    | `Português (${'América' | 'Europa'})`//Canadá
    | '日本語'
    | '简体中文' | '繁體中文'
    | 'русский' | '한국어';

export abstract class Languages {
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

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.americanEnglish;
        }

    }('en_AM', 'English (America)', 'English (America)',);
    public static readonly EUROPEAN_ENGLISH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_ENGLISH.newDateInstanceCreator;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.europeanEnglish;
        }

    }('en_EU', 'English (Europe)', 'English (Europe)',);
    public static readonly GERMAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', '. ', ' ',)
                .setDays('beforeText', 'der ',)
                .setMonths('array', ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',],)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.german;
        }

    }('de', 'German', 'Deutsche',);
    public static readonly CANADIAN_FRENCH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setDays('firstAfterHover', 'er',)
                .setMonths('array', ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',],)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.canadianFrench;
        }

    }('fr_CA', 'French (Canada)', 'Français (Canada)',);
    public static readonly EUROPEAN_FRENCH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.CANADIAN_FRENCH.newDateInstanceCreator;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.europeanFrench;
        }

    }('fr_EU', 'French (Europe)', 'Français (Europe)',);
    public static readonly AMERICAN_SPANISH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'deciembre',],)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.americanSpanish;
        }

    }('es_AM', 'Spanish (America)', 'Español (America)',);
    public static readonly EUROPEAN_SPANISH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_SPANISH.newDateInstanceCreator;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.europeanSpanish;
        }

    }('es_EU', 'Spanish (Europe)', 'Español (Europa)',);
    public static readonly ITALIAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setDays('firstReplace', 'il')
                .setMonths('array', ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',],)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.italian;
        }

    }('it', 'Italian', 'Italiano',);
    public static readonly DUTCH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['januari', 'febuari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'novembere', 'decembre',],)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.dutch;
        }

    }('nl', 'Dutch', 'Nederlands',);
    public static readonly AMERICAN_PORTUGUESE = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' de ', ' de ',)
                .setMonths('array', ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'septembro', 'outubro', 'novembro', 'dezembro',],)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.americanPortuguese;
        }

    }('pt_AM', 'Portuguese (America)', 'Português (América)',);
    public static readonly EUROPEAN_PORTUGUESE = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_PORTUGUESE.newDateInstanceCreator;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.europeanPortuguese;
        }

    }('pt_EU', 'Portuguese (Europe)', 'Português (Europa)',);
    public static readonly JAPANESE = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('year,month,day', '', '',)
                .setDays('afterText', '年',)
                .setMonths('afterText', '月',)
                .setYears('afterText', '日',)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.japanese;
        }

    }('ja', 'Japanese', '日本語',);
    public static readonly CHINESE_TRADITIONAL = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.JAPANESE.newDateInstanceCreator;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.traditionalChinese;
        }

    }('zh_T', 'Traditional Chinese', '简体中文',);
    public static readonly CHINESE_SIMPLIFIED = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.JAPANESE.newDateInstanceCreator;
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.simplifiedChinese;
        }

    }('zh_S', 'Simplified Chinese', '繁體中文',);
    public static readonly KOREAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('year,month,day', '', '')
                .setDays('afterText', '년',)
                .setMonths('afterText', '월',)
                .setYears('afterText', '일',)
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.korean;
        }

    }('ko', 'Korean', '한국어',);
    public static readonly RUSSIAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',],)
                .setYears('afterText', ' года')
                .build();
        }

        public get(classWithEveryLanguages: ClassWithEveryLanguages): string {
            return classWithEveryLanguages.russian;
        }

    }('ru', 'Russian', 'русский');


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

    public abstract get(classWithEveryLanguages: ClassWithEveryLanguages): string;

    private __setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.acronym))
        return this;
    }


    public static get currentLanguage(): Languages {
        return this.__CURRENT_LANGUAGE;
    }

    public static setCurrentLanguage(value: Languages | string): void {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            i18n.changeLanguage((this.__CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML()).acronym);
    }

    public static get defaultLanguage(): PossibleLanguagesAcronym {
        return this.__DEFAULT_LANGUAGE;
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
                this.AMERICAN_PORTUGUESE, this.EUROPEAN_PORTUGUESE,
                this.RUSSIAN,
                this.KOREAN,
                this.CHINESE_TRADITIONAL, this.CHINESE_SIMPLIFIED,
            ]
            : this.__VALUES;
    }

}

Languages.setDefaultLanguage('en_AM');

/**
 * A temporary method used to define the simple translations on the project.
 *
 * @param value
 * @temporary
 */
export function __(value: string): string {
    return value;
}