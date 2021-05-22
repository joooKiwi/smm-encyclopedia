import {DateInstanceCreator}        from './date/DateInstanceCreator';
import {DateInstanceCreatorBuilder} from './date/DateInstanceCreatorBuilder';
import i18n                 from 'i18next';
import {ClassWithLanguages} from './ClassWithLanguages';

export type PossibleLanguagesAcronym =
    | 'en_AM' | 'en_EU'
    | 'fr_CA' | 'fr_EU'
    | 'de'
    | 'es_AM' | 'es_EU'
    | 'it' | 'nl'
    | 'pt_AM' | 'pt_EU'
    | 'ru' | 'ja'
    | 'zh_T' | 'zh_S'
    | 'ko';
export type PossibleLanguagesEnglishName =
    | `English (${'America' | 'Europe'})`
    | `French (${'Canada' | 'Europe'})`
    | 'German'
    | `Spanish (${'America' | 'Europe'})`
    | 'Dutch' | 'Italian'
    | `Portuguese (${'America' | 'Europe'})`
    | 'Russian' | 'Japanese'
    | `${'Traditional' | 'Simplified'} chinese`
    | 'Korean';
export type PossibleLanguagesOriginalName =
    | `English (${'America' | 'Europe'})`
    | `Français (${'Canada' | 'Europe'})`
    | 'Deutsche'
    | `Español (${'America' | 'Europa'})`
    | `Português (${'América' | 'Europa'})`//Canadá
    | 'Nederlands' | 'Italiano'
    | 'русский' | '日本語'
    | '简体中文' | '繁體中文'
    | '한국어';

/**
 * <p>
 *     An enum class containing every languages in the project.
 *     The languages used are only those direct languages and not a basic language.
 * </p>
 *
 * <p>
 *     It also utilise the {@link DateInstanceCreator} in order
 *     to create the date by the language standard.
 * </p>
 *
 * <p>
 *     The other utility class is the getter and setter from a {@link ClassWithLanguages}
 *     to retrieve its property by the instance that is used.
 * </p>
 *
 * As it stands, the languages are:
 * <ol>
 *     <li>en_AM - American English</li>
 *     <li>en_EU - European English</li>
 *     <li>fr_CA - Canadian French</li>
 *     <li>fr_EU - European French</li>
 *     <li>de    - German</li>
 *     <li>es_AM - American Spanish</li>
 *     <li>es_EU - European Spanish</li>
 *     <li>it    - Italian</li>
 *     <li>nl    - Dutch</li>
 *     <li>pt_AM - American Portuguese</li>
 *     <li>pt_EU - European Portuguese</li>
 *     <li>ru    - Russian</li>
 *     <li>ja    - Japanese</li>
 *     <li>zh_S  - Simplified Chinese</li>
 *     <li>zh_T  - Traditional Chinese</li>
 *     <li>ko    - Korean</li>
 * </ol>
 *
 * @see https://en.wikipedia.org/wiki/Russian_alphabet Russian alphabet
 * @enum
 */
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

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanEnglish;
        }

    }('en_AM', 'English (America)', 'English (America)',);
    public static readonly EUROPEAN_ENGLISH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_ENGLISH.newDateInstanceCreator;
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanEnglish;
        }

    }('en_EU', 'English (Europe)', 'English (Europe)',);
    public static readonly GERMAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', '. ', ' ',)
                .setDays('beforeText', 'der ',)
                .setMonths('array', ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',],)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.german;
        }

    }('de', 'German', 'Deutsche',);
    public static readonly CANADIAN_FRENCH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setDays('firstAfterHover', 'er',)
                .setMonths('array', ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',],)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.canadianFrench;
        }

    }('fr_CA', 'French (Canada)', 'Français (Canada)',);
    public static readonly EUROPEAN_FRENCH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.CANADIAN_FRENCH.newDateInstanceCreator;
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanFrench;
        }

    }('fr_EU', 'French (Europe)', 'Français (Europe)',);
    public static readonly AMERICAN_SPANISH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'deciembre',],)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanSpanish;
        }

    }('es_AM', 'Spanish (America)', 'Español (America)',);
    public static readonly EUROPEAN_SPANISH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_SPANISH.newDateInstanceCreator;
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanSpanish;
        }

    }('es_EU', 'Spanish (Europe)', 'Español (Europa)',);
    public static readonly ITALIAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setDays('firstReplace', 'il')
                .setMonths('array', ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',],)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.italian;
        }

    }('it', 'Italian', 'Italiano',);
    public static readonly DUTCH = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['januari', 'febuari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'novembere', 'decembre',],)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.dutch;
        }

    }('nl', 'Dutch', 'Nederlands',);
    public static readonly AMERICAN_PORTUGUESE = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' de ', ' de ',)
                .setMonths('array', ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'septembro', 'outubro', 'novembro', 'dezembro',],)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.americanPortuguese;
        }

    }('pt_AM', 'Portuguese (America)', 'Português (América)',);
    public static readonly EUROPEAN_PORTUGUESE = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.AMERICAN_PORTUGUESE.newDateInstanceCreator;
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.europeanPortuguese;
        }

    }('pt_EU', 'Portuguese (Europe)', 'Português (Europa)',);
    public static readonly RUSSIAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('day,month,year', ' ', ' ',)
                .setMonths('array', ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',],)
                .setYears('afterText', ' года')
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.russian;
        }

    }('ru', 'Russian', 'русский');
    public static readonly JAPANESE = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('year,month,day', '', '',)
                .setDays('afterText', '年',)
                .setMonths('afterText', '月',)
                .setYears('afterText', '日',)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.japanese;
        }

    }('ja', 'Japanese', '日本語',);
    public static readonly CHINESE_TRADITIONAL = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.JAPANESE.newDateInstanceCreator;
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.traditionalChinese;
        }

    }('zh_T', 'Traditional chinese', '简体中文',);
    public static readonly CHINESE_SIMPLIFIED = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return Languages.JAPANESE.newDateInstanceCreator;
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.simplifiedChinese;
        }

    }('zh_S', 'Simplified chinese', '繁體中文',);
    public static readonly KOREAN = new class extends Languages {

        public get newDateInstanceCreator(): DateInstanceCreator {
            return new DateInstanceCreatorBuilder('year,month,day', '', '')
                .setDays('afterText', '년',)
                .setMonths('afterText', '월',)
                .setYears('afterText', '일',)
                .build();
        }

        public get(classWithLanguages: ClassWithLanguages): string {
            return classWithLanguages.korean;
        }

    }('ko', 'Korean', '한국어',);


    private static __VALUES: readonly Languages[];
    private static __CURRENT_LANGUAGE: Languages;
    private static __DEFAULT_LANGUAGE: Languages;

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

    public abstract get(classWithLanguages: ClassWithLanguages): string;

    private __setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.acronym))
        return this;
    }


    public static get currentLanguage(): Languages {
        return this.__CURRENT_LANGUAGE;
    }

    public static set currentLanguage(value: Languages) {
        this.setCurrentLanguage(value);
    }

    public static setCurrentLanguage(value: Languages | string): void {
        let selectedLanguage = this.getValue(value);
        if (selectedLanguage !== null)
            i18n.changeLanguage((this.__CURRENT_LANGUAGE = selectedLanguage.__setLanguageToHTML()).acronym);
    }

    public static get defaultLanguage(): Languages {
        return this.__DEFAULT_LANGUAGE;
    }

    public static set defaultLanguage(value: Languages) {
        this.setDefaultLanguage(value);
    }

    public static setDefaultLanguage(value: Languages | PossibleLanguagesAcronym): void {
        this.__DEFAULT_LANGUAGE = typeof value === 'string' ? this.getValue(value) : value;
    }

    public static getValue(value: Languages | PossibleLanguagesAcronym | PossibleLanguagesEnglishName | PossibleLanguagesOriginalName): Languages
    public static getValue(value: string): Languages | null
    public static getValue(value: Languages | string): Languages | null
    public static getValue(value: Languages | string): Languages | null {
        return typeof value === 'string'
            ? this.values.find(language => language.acronym === value || language.englishName === value || language.originalName === value) ?? null
            : value;
    }

    public static get values(): readonly Languages[] {
        return this.__VALUES ?? (this.__VALUES = [
            this.AMERICAN_ENGLISH, this.EUROPEAN_ENGLISH,
            this.CANADIAN_FRENCH, this.EUROPEAN_FRENCH,
            this.GERMAN,
            this.AMERICAN_SPANISH, this.EUROPEAN_SPANISH,
            this.ITALIAN,
            this.DUTCH,
            this.AMERICAN_PORTUGUESE, this.EUROPEAN_PORTUGUESE,
            this.RUSSIAN,
            this.JAPANESE,
            this.CHINESE_TRADITIONAL, this.CHINESE_SIMPLIFIED,
            this.KOREAN,
        ]);
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