import type {CollectionHolder, EnumerableConstructorWithDefault, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import type {Dispatch, SetStateAction}                                                      from 'react'
import {Enum}                                                                               from '@joookiwi/enumerable'
import i18n                                                                                 from 'i18next'

import type {PossibleBraces_Array, PossibleBrackets_Array, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Array, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoint, PossiblePoints_Array, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Array, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Array, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from 'lang/Characters.types'
import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'lang/ClassWithEveryLanguages'
import type {AdditionalAcronym, AdditionalEnglishName, AdditionalOriginalName, BasicAcronym, BasicEnglishName, BasicOriginalName, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleInternationalAcronym, PossibleOriginalName, PossibleSpaceCharacter}                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'lang/EveryLanguages.types'
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      from 'lang/LanguageEnumerable'
import type {PossibleAcronym as PossibleAcronym_Project, PossibleDifferentWord, PossibleEnglishName as PossibleEnglishName_Project, PossibleInternationalAcronym as PossibleInternationalAcronym_Project, PossibleOriginalName as PossibleOriginalName_Project}                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'lang/ProjectLanguages.types'
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 from 'lang/name/containers/Language'
import type {Nullable, NullOr}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'util/types/nullable'
import type {EmptyArray}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from 'util/types/variables'

import {Characters}   from 'lang/Characters'
import {SPACE}        from 'util/commonVariables'
import {EMPTY_STRING} from 'util/emptyVariables'

export abstract class EveryLanguages
    extends Enum<Ordinals, Names>
    implements LanguageEnumerable<PossibleAcronym, PossibleInternationalAcronym, PossibleEnglishName, PossibleOriginalName, NullOr<PossibleDifferentWord>> {

    //region -------------------- Enum instances --------------------

    public static readonly ENGLISH =             new class EveryLanguages_English extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        public override get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage || EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage
        }

        public override get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isDefaultLanguage || EveryLanguages.EUROPEAN_ENGLISH.isDefaultLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['english']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return this.get(classWithEveryLanguages)
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['english']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.english
        }

        public override original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalEnglish']
        public override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): AmericanOrEuropeanOriginal<T> {
            return classWithEveryLanguages.originalEnglish
        }

    }           (true,  'en',    'en',    'English',              'English',)
    public static readonly AMERICAN_ENGLISH =    new class EveryLanguages_AmericanEnglish extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_ENGLISH.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanEnglish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return this.get(classWithEveryLanguages)
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanEnglish']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.americanEnglish
        }

    }   (true,  'en-AM', 'en-US', 'English (America)',    'English (America)',   'America',      EveryLanguages.ENGLISH,)
    public static readonly EUROPEAN_ENGLISH =    new class EveryLanguages_EuropeanEnglish extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_ENGLISH.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanEnglish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return this.get(classWithEveryLanguages)
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanEnglish']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanEnglish
        }

    }   (true,  'en-EU', 'en-EU', 'English (Europe)',     'English (Europe)',    'Europe',       EveryLanguages.ENGLISH,)
    public static readonly FRENCH =              new class EveryLanguages_French extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        public override get isCurrentLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage || EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage
        }

        public override get isDefaultLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isDefaultLanguage || EveryLanguages.EUROPEAN_FRENCH.isDefaultLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['french']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return this.get(classWithEveryLanguages)
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['french']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.french
        }

        public override original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalFrench']
        public override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.originalFrench
        }

    }            (true,  'fr',    'fr',    'French',               'Français',)
    public static readonly CANADIAN_FRENCH =     new class EveryLanguages_CanadianFrench extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_FRENCH.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['canadianFrench']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return this.get(classWithEveryLanguages)
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['canadianFrench']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.canadianFrench
        }

    }    (true,  'fr-CA', 'fr-CA', 'French (Canada)',      'Français (Canada)',   'Canada',       EveryLanguages.FRENCH,)
    public static readonly EUROPEAN_FRENCH =     new class EveryLanguages_EuropeanFrench extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.CANADIAN_FRENCH.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanFrench']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return this.get(classWithEveryLanguages)
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanFrench']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanFrench
        }

    }    (true,  'fr-EU', 'fr-EU', 'French (Europe)',      'Français (Europe)',   'Europe',       EveryLanguages.FRENCH,)
    public static readonly GERMAN =              new class EveryLanguages_German extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['german']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.german
        }

    }            (false, 'de',    'de',    'German',               'Deutsche',)
    public static readonly SPANISH =             new class EveryLanguages_Spanish extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        public override get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage || EveryLanguages.EUROPEAN_SPANISH.isCurrentLanguage
        }

        public override get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isDefaultLanguage || EveryLanguages.EUROPEAN_SPANISH.isDefaultLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['spanish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.spanish
        }

        public override original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalSpanish']
        public override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.originalSpanish
        }

    }           (false, 'es',    'es',    'Spanish',              'Español',)
    public static readonly AMERICAN_SPANISH =    new class EveryLanguages_AmericanSpanish extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanSpanish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.americanSpanish
        }

    }   (false, 'es-AM', 'es-US', 'Spanish (America)',    'Español (America)',   'America',      EveryLanguages.SPANISH,)
    public static readonly EUROPEAN_SPANISH =    new class EveryLanguages_EuropeanSpanish extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_SPANISH.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanSpanish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanSpanish
        }

    }   (false, 'es-EU', 'es-EU', 'Spanish (Europe)',     'Español (Europa)',    'Europe',       EveryLanguages.SPANISH,)
    public static readonly ITALIAN =             new class EveryLanguages_Italian extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['italian']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.italian
        }

    }           (false, 'it',    'it',    'Italian',              'Italiano',)
    public static readonly DUTCH =               new class EveryLanguages_Dutch extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['dutch']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.dutch
        }

    }             (false, 'nl',    'nl',    'Dutch',                'Nederlands',)
    public static readonly PORTUGUESE =          new class EveryLanguages_Portuguese extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        public override get isCurrentLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage
        }

        public override get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isDefaultLanguage || EveryLanguages.EUROPEAN_PORTUGUESE.isDefaultLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['portuguese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.portuguese
        }

        public override original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalPortuguese']
        public override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.originalPortuguese
        }

    }        (false, 'pt',    'pt',    'Portuguese',           'Português',)
    public static readonly AMERICAN_PORTUGUESE = new class EveryLanguages_AmericanPortuguese extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.EUROPEAN_PORTUGUESE.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanPortuguese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.americanPortuguese
        }

    }(false, 'pt-AM', 'pt-US', 'Portuguese (America)', 'Português (América)', 'America',      EveryLanguages.PORTUGUESE,)
    public static readonly EUROPEAN_PORTUGUESE = new class EveryLanguages_EuropeanPortuguese extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.AMERICAN_PORTUGUESE.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanPortuguese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanPortuguese
        }

    }(false, 'pt-EU', 'pt-EU', 'Portuguese (Europe)',  'Português (Europa)',  'Europe',       EveryLanguages.PORTUGUESE,)
    public static readonly RUSSIAN =             new class EveryLanguages_Russian extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['russian']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.russian
        }

    }           (false, 'ru',    'ru',    'Russian',              'русский',)
    public static readonly JAPANESE =            new class EveryLanguages_Japanese extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITHOUT_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['japanese']
        protected override _get<T>(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.japanese
        }

    }          (false, 'ja',    'ja',    'Japanese',             '日本語',)
    public static readonly CHINESE =             new class EveryLanguages_Chinese extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITHOUT_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        public override get isCurrentLanguage(): boolean {
            return EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage || EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage
        }

        public override get isDefaultLanguage(): boolean {
            return EveryLanguages.TRADITIONAL_CHINESE.isDefaultLanguage || EveryLanguages.SIMPLIFIED_CHINESE.isDefaultLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['chinese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.chinese
        }

        public override original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalChinese']
        public override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.originalChinese
        }

    }           (false, 'zh',    'zh',    'Chinese',              '中国人',)
    public static readonly TRADITIONAL_CHINESE = new class EveryLanguages_TraditionalChinese extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.SIMPLIFIED_CHINESE.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['traditionalChinese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.traditionalChinese
        }

    }(false, 'zh-tw', 'zh-TW', 'Traditional chinese',  '繁體中文',              'Traditional', EveryLanguages.CHINESE,)
    public static readonly SIMPLIFIED_CHINESE =  new class EveryLanguages_SimplifiedChinese extends EveryLanguages {

        public override get isCurrentLanguageOrAssociatedWithIt(): boolean {
            return this.isCurrentLanguage && EveryLanguages.TRADITIONAL_CHINESE.isCurrentLanguage
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['simplifiedChinese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.simplifiedChinese
        }

    } (false, 'zh-cn', 'zh-CN', 'Simplified chinese',   '简体中文',              'Simplified',  EveryLanguages.CHINESE,)
    public static readonly KOREAN =              new class EveryLanguages_Korean extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['korean']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.korean
        }

    }            (false, 'ko',    'ko',    'Korean',               '한국어',)

    public static readonly HEBREW =              new class EveryLanguages_Hebrew extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['hebrew']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.hebrew
        }

    }            (false, 'he',    'he',    'Hebrew',               'עִברִית',)
    public static readonly POLISH =              new class EveryLanguages_Polish extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['polish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.polish
        }

    }            (false, 'pl',    'pl',    'Polish',               'Polski',)
    public static readonly UKRAINIAN =           new class EveryLanguages_Ukrainian extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['ukrainian']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.ukrainian
        }

    }         (false, 'uk',    'uk',    'Ukrainian',            'Український',)
    public static readonly GREEK =               new class EveryLanguages_Greek extends EveryLanguages {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['greek']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.greek
        }

    }             (false, 'el',    'el',    'Greek',                'ελληνικά',)

    protected static readonly _DEFAULT = EveryLanguages.AMERICAN_ENGLISH

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EveryLanguages

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #CURRENT_LANGUAGE: EveryLanguages
    public static INTERNATIONALISATION_SET_CURRENT_LANGUAGE: NullOr<Dispatch<SetStateAction<PossibleInternationalAcronym_Project>>> = null
    protected static readonly _SPACE_EVEN_LANGUAGE_WITH_SPACE: SpaceParameterReceived = [true, true, false,]
    protected static readonly _SPACE_EVEN_LANGUAGE_WITHOUT_SPACE: SpaceParameterReceived = [false, true,]
    protected static readonly _SPACE_UNEVEN_LANGUAGE_WITH_SPACE: SpaceParameterReceived = [true, false,]

    readonly #isACompleteLanguage: boolean

    #spaceParameter?: SpaceParameters
    #isASpaceEvenLanguage?: boolean

    readonly #projectAcronym: PossibleAcronym
    readonly #internationalAcronym: PossibleInternationalAcronym
    readonly #englishName: PossibleEnglishName
    readonly #originalName: PossibleOriginalName
    readonly #differentWords: NullOr<PossibleDifferentWord>
    readonly #parent: NullOr<EveryLanguages>
    #children?: PossibleChildrenLanguages

    #space?: PossibleSpaceCharacter
    #points?: PossiblePoints_Array
    #comma?: PossibleComma
    #unionTrait?: PossibleUnionTrait
    #commercialAnd?: PossibleCommercialAnd
    #parentheses?: PossibleParentheses_Array
    #brackets?: PossibleBrackets_Array
    #braces?: PossibleBraces_Array
    #slashes?: PossibleSlashes_Array
    #romainLowercaseAlphabet?: PossibleLowercaseRomainAlphabet_Array
    #romainUppercaseAlphabet?: PossibleUppercaseRomainAlphabet_Array
    #numbers?: PossibleNumbers_Array

    //endregion -------------------- Fields --------------------

    private constructor(isACompleteLanguage: boolean, projectAcronym: BasicAcronym, internationalAcronym: BasicAcronym, englishName: BasicEnglishName, originalName: BasicOriginalName,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: AdditionalAcronym, internationalAcronym: AdditionalAcronym, englishName: AdditionalEnglishName, originalName: AdditionalOriginalName,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: PossibleAcronym_Project, internationalAcronym: PossibleInternationalAcronym_Project, englishName: PossibleEnglishName_Project, originalName: PossibleOriginalName_Project,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: PossibleAcronym_Project, internationalAcronym: PossibleInternationalAcronym_Project, englishName: PossibleEnglishName_Project, originalName: PossibleOriginalName_Project, differenceWords: PossibleDifferentWord, parent: EveryLanguages,)
    private constructor(isACompleteLanguage: boolean, projectAcronym: PossibleAcronym, internationalAcronym: PossibleInternationalAcronym, englishName: PossibleEnglishName, originalName: PossibleOriginalName, differenceWords: NullOr<PossibleDifferentWord> = null, parent: NullOr<EveryLanguages> = null,) {
        super()
        this.#isACompleteLanguage = isACompleteLanguage
        this.#projectAcronym = projectAcronym
        this.#internationalAcronym = internationalAcronym
        this.#englishName = englishName
        this.#originalName = originalName
        this.#differentWords = differenceWords
        this.#parent = parent
    }

    //region -------------------- Getter methods --------------------

    public get isACompleteLanguage(): boolean {
        return this.#isACompleteLanguage
    }

    //region -------------------- Space getter methods --------------------

    protected get _spaceParameters(): SpaceParameterReceived {
        return this.parent!._spaceParameters
    }

    private get __spaceParameters(): SpaceParameters {
        if (this.#spaceParameter == null) {
            const spaceParameters = this._spaceParameters
            if (spaceParameters.length === 3)
                this.#spaceParameter = spaceParameters
            else
                this.#spaceParameter = [spaceParameters[0], spaceParameters[1], spaceParameters[1],]
        }
        return this.#spaceParameter
    }

    public get hasSpace(): boolean {
        return this.__spaceParameters[0]
    }

    public get isASpaceEvenLanguage(): boolean {
        return this.#isASpaceEvenLanguage ??= this.isASpaceEvenLanguageForThePointsAndSpace && this.isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace
    }

    public get isASpaceEvenLanguageForThePointsAndSpace(): boolean {
        return this.__spaceParameters[1]
    }

    public get isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace(): boolean {
        return this.__spaceParameters[2]
    }

    //endregion -------------------- Space getter methods --------------------

    public get projectAcronym(): PossibleAcronym {
        return this.#projectAcronym
    }

    public get internationalAcronym(): PossibleInternationalAcronym {
        return this.#internationalAcronym
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName
    }

    public get originalName(): PossibleOriginalName {
        return this.#originalName
    }

    public get differentWords(): NullOr<PossibleDifferentWord> {
        return this.#differentWords
    }

    public get parent(): NullOr<EveryLanguages> {
        return this.#parent
    }

    public get children(): PossibleChildrenLanguages {
        return this.#children ??= EveryLanguages.values.filter(it => it.parent != null)
            .filter(it => it !== this)
            .filter(it => it.parent === this)
            .toArray() as PossibleChildrenLanguages
    }

    public get isCurrentLanguage(): boolean {
        return this === EveryLanguages.currentLanguage
    }

    public get isCurrentLanguageOrAssociatedWithIt(): boolean {
        return this.isCurrentLanguage
    }

    public get isDefaultLanguage(): boolean {
        return this === EveryLanguages.default
    }

    //region -------------------- Characters getter methods --------------------

    public get space(): PossibleSpaceCharacter {
        return this.#space ??= this.hasSpace ? SPACE : EMPTY_STRING
    }

    public get points(): PossiblePoints_Array {
        return this.#points ??= Characters.getPoints(this.isASpaceEvenLanguage)
    }

    public get point(): PossiblePoint {
        return this.points[0]
    }

    public get interrogationPoint(): PossibleInterrogationPoint {
        return this.points[1]
    }

    public get exclamationPoint(): PossibleExclamationPoint {
        return this.points[2]
    }

    public get colon(): PossibleColon {
        return this.points[3]
    }

    public get semicolon(): PossibleSemicolon {
        return this.points[4]
    }

    public get comma(): PossibleComma {
        return this.#comma ??= Characters.COMMA.getCharacters(this.isASpaceEvenLanguage)[0] as PossibleComma
    }

    public get unionTrait(): PossibleUnionTrait {
        return this.#unionTrait ??= Characters.UNION_TRAIT.getCharacters(this.isASpaceEvenLanguage)[0] as PossibleUnionTrait
    }


    public get commercialAnd(): PossibleCommercialAnd {
        return this.#commercialAnd ??= Characters.COMMERCIAL_AND.getCharacters(this.isASpaceEvenLanguage)[0] as PossibleCommercialAnd
    }


    public get parentheses(): PossibleParentheses_Array {
        return this.#parentheses ??= Characters.getParentheses(this.isASpaceEvenLanguage)
    }

    public get startingParenthesis(): PossibleStartingParentheses {
        return this.parentheses[0]
    }

    public get endingParenthesis(): PossibleEndingParentheses {
        return this.parentheses[1]
    }

    public get brackets(): PossibleBrackets_Array {
        return this.#brackets ??= Characters.getBrackets(this.isASpaceEvenLanguage)
    }

    public get startingBrackets(): PossibleStartingBracket {
        return this.brackets[0]
    }

    public get endingBrackets(): PossibleEndingBracket {
        return this.brackets[1]
    }

    public get braces(): PossibleBraces_Array {
        return this.#braces ??= Characters.getBraces(this.isASpaceEvenLanguage)
    }

    public get startingBraces(): PossibleStartingBrace {
        return this.braces[0]
    }

    public get endingBraces(): PossibleEndingBrace {
        return this.braces[1]
    }


    public get slashes(): PossibleSlashes_Array {
        return this.#slashes ??= Characters.getSlashes(this.isASpaceEvenLanguage)
    }

    public get slash(): PossibleSlash {
        return this.slashes[0]
    }

    public get verticalSlash(): PossibleVerticalSlash {
        return this.slashes[1]
    }


    public get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Array {
        return this.#romainLowercaseAlphabet ??= Characters.getLowercaseLetters(this.isASpaceEvenLanguage)
    }

    public get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Array {
        return this.#romainUppercaseAlphabet ??= Characters.getUppercaseLetters(this.isASpaceEvenLanguage)
    }


    public get numbers(): PossibleNumbers_Array {
        return this.#numbers ??= Characters.getNumbers(this.isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace)
    }


    public character<C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<this['isASpaceEvenLanguage'], C>
    public character<C extends string, >(character: C,): VariableCharacterByString<this['isASpaceEvenLanguage'], C>
    public character(character: string,) {
        return Characters.getCharacter(this.isASpaceEvenLanguage, character,)
    }

    //endregion -------------------- Characters getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected abstract _get<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): T
    protected abstract _get<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<T>
    protected abstract _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): NullOr<T>

    public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
        return this._get(classWithEveryLanguages) ?? EveryLanguages.AMERICAN_ENGLISH.get(classWithEveryLanguages)
    }

    public original<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): | T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>
    public original<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<| T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>>
    public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
        return this.parent?.original<T>(classWithEveryLanguages) ?? this.get(classWithEveryLanguages)
    }

    //region -------------------- Transformation methods --------------------

    public textInParentheses<S extends string, >(text: S,): TextInParentheses<this['isASpaceEvenLanguage'], S>
    public textInParentheses(text: string,) {
        return Characters.textInParentheses(this.isASpaceEvenLanguage, text,)
    }

    public textInBrackets<S extends string, >(text: S,): TextInBrackets<this['isASpaceEvenLanguage'], S>
    public textInBrackets(text: string,) {
        return Characters.textInBrackets(this.isASpaceEvenLanguage, text,)
    }

    public textInBraces<S extends string, >(text: S,): TextInBraces<this['isASpaceEvenLanguage'], S>
    public textInBraces(text: string,) {
        return Characters.textInBraces(this.isASpaceEvenLanguage, text,)
    }

    //endregion -------------------- Transformation methods --------------------

    /**
     * Set the language into the dom elements using a <b>lang</b> value
     * to change it to the current instance.
     */
    #setLanguageToHTML(): this {
        document.querySelectorAll('[lang]').forEach(element => element.setAttribute('lang', this.projectAcronym))
        return this
    }

    public static get currentLanguage(): EveryLanguages {
        return this.#CURRENT_LANGUAGE
    }

    public static set currentLanguage(value: PossibleValueByEnumerable<EveryLanguages>,) {
        this.setCurrentLanguage(value,)
    }

    public static setCurrentLanguage(value: PossibleValueByEnumerable<EveryLanguages>,): typeof EveryLanguages {
        let selectedLanguage = this.getValueByLanguage(value,)
        if (selectedLanguage.isCurrentLanguage)
            return this

        const currentLanguage = (this.#CURRENT_LANGUAGE = selectedLanguage.#setLanguageToHTML())
        i18n.changeLanguage(currentLanguage.projectAcronym)
        this.INTERNATIONALISATION_SET_CURRENT_LANGUAGE?.(currentLanguage.internationalAcronym as PossibleInternationalAcronym_Project)
        return this
    }

    // public static getValueByLanguage<T, >(value: T,): EveryLanguagesByLanguage<T>
    public static getValueByLanguage(value: Nullable<| EveryLanguages | string>,): EveryLanguages {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof EveryLanguages && value._static === EveryLanguages)
            return value
        const valueFound = this.values.find(enumerable =>
            enumerable.projectAcronym === value
            || enumerable.internationalAcronym === value
            || enumerable.englishName === value
            || enumerable.originalName === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructorWithDefault<Ordinals, Names> {
        return EveryLanguages
    }

    public static get default(): EveryLanguages {
        return Enum.getDefaultOn(this,)
    }

    public static set default(value: PossibleValueByEnumerable<EveryLanguages>,) {
        Enum.setDefaultOn(this, value,)
    }

    public static setDefault(value: PossibleValueByEnumerable<EveryLanguages>,): typeof EveryLanguages {
        return Enum.setDefaultOn(this, value,)
    }

    public static getValue(value: PossibleValueByEnumerable<EveryLanguages>,): EveryLanguages {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EveryLanguages> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<EveryLanguages> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}

type SpaceParameterReceived = | [hasSpace: boolean, isSpaceEvenLanguage: boolean,] | readonly [hasSpace: boolean, isSpaceEvenLanguageExcludingPointsAndSpace: boolean, isSpaceEvenLanguagePointsAndSpace: boolean,]
type SpaceParameters = readonly [hasSpace: boolean, isSpaceEvenLanguageExcludingPointsAndSpace: boolean, isSpaceEvenLanguagePointsAndSpace: boolean,]
type PossibleChildrenLanguages = readonly [EveryLanguages, EveryLanguages,] | EmptyArray
