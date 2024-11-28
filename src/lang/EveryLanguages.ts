import type {Singleton}                                  from '@joookiwi/enumerable'
import type {EmptyArray, Nullable, NullOr, NullOrString} from '@joookiwi/type'
import {Enum}                                            from '@joookiwi/enumerable'
import i18n                                              from 'i18next'

import type {PossibleBraces_Array, PossibleBrackets_Array, PossibleChevrons_Array, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingChevron, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Array, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoint, PossiblePoints_Array, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Array, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingChevron, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Array, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInChevrons, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from 'lang/Characters.types'
import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from 'lang/ClassWithEveryLanguages'
import type {CompanionEnumDeclaration_EveryLanguages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from 'lang/EveryLanguages.companionEnumDeclaration'
import type {Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleInternationalAcronym, PossibleOriginalName, PossibleSpaceCharacter}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'lang/EveryLanguages.types'
import type {LanguageEnumerable}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from 'lang/LanguageEnumerable'
import type {PossibleDifferentWord}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'lang/ProjectLanguages.types'
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from 'lang/name/containers/Language'
import type {ClassWithIsCurrent}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from 'util/enumerable/ClassWithIsCurrent'

import {Characters}                                 from 'lang/Characters'
import {SPACE}                                      from 'util/commonVariables'
import {Empty}                                      from 'util/emptyVariables'
import {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

import CharacterCompanion =  Characters.Companion
import EMPTY_STRING =        Empty.EMPTY_STRING
import getBraces =           Characters.getBraces
import getBrackets =         Characters.getBrackets
import getChevrons =         Characters.getChevrons
import getLowercaseLetters = Characters.getLowercaseLetters
import getNumbers =          Characters.getNumbers
import getParentheses =      Characters.getParentheses
import getSlashes =          Characters.getSlashes
import getUppercaseLetters = Characters.getUppercaseLetters
import textInBraces =        Characters.textInBraces
import textInBrackets =      Characters.textInBrackets
import textInChevrons =      Characters.textInChevrons
import textInParentheses =   Characters.textInParentheses

export abstract class EveryLanguages<const ACRONYM extends PossibleAcronym = PossibleAcronym,
    const INTERNATIONAL_ACRONYM extends PossibleInternationalAcronym = PossibleInternationalAcronym, >
    extends Enum<Ordinals, Names>
    implements LanguageEnumerable<ACRONYM, INTERNATIONAL_ACRONYM, PossibleEnglishName, PossibleOriginalName, NullOrString<PossibleDifferentWord>>,
        ClassWithIsCurrent {

    //region -------------------- Sub class --------------------

    /** An abstract subclass of {@link EveryLanguages} that is a parent and can never have a <b>null</b> value unintentionally */
    private static readonly ParentCompleted = (() => {
        abstract class ParentCompletedEveryLanguages<const ACRONYM extends PossibleAcronym = PossibleAcronym,
            const INTERNATIONAL_ACRONYM extends PossibleInternationalAcronym = PossibleInternationalAcronym, >
            extends EveryLanguages<ACRONYM, INTERNATIONAL_ACRONYM> {

            constructor(projectAcronym: ACRONYM, internationalAcronym: INTERNATIONAL_ACRONYM, englishName: PossibleEnglishName, originalName: PossibleOriginalName,) {
                super(true, projectAcronym, internationalAcronym, englishName, originalName, null, null,)
            }

            public override get differentWords(): null { return null }

            public override get parent(): null { return null }

            public abstract override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): | T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>

        }

        return ParentCompletedEveryLanguages
    })()
    /** An abstract subclass of {@link EveryLanguages} that is a child and can never have a <b>null</b> value unintentionally */
    private static readonly ChildCompleted = (() => {
        abstract class ChildCompletedEveryLanguages<const ACRONYM extends PossibleAcronym = PossibleAcronym,
            const INTERNATIONAL_ACRONYM extends PossibleInternationalAcronym = PossibleInternationalAcronym, >
            extends EveryLanguages<ACRONYM, INTERNATIONAL_ACRONYM> {

            readonly #parent
            readonly #differentWords

            constructor(projectAcronym: ACRONYM, internationalAcronym: INTERNATIONAL_ACRONYM, englishName: PossibleEnglishName, originalName: PossibleOriginalName, differenceWords: PossibleDifferentWord, parent: EveryLanguages,) {
                super(true, projectAcronym, internationalAcronym, englishName, originalName, differenceWords,)
                this.#parent = parent
                this.#differentWords = differenceWords
            }

            protected get _spaceParameters(): SpaceParameterReceived { return this.parent.#spaceParameter! }

            public get differentWords(): PossibleDifferentWord { return this.#differentWords }

            public get parent(): EveryLanguages { return this.#parent }

        }

        return ChildCompletedEveryLanguages
    })()
    /** An abstract subclass of {@link EveryLanguages} that is a parent and is not completed. It requires more work to handle the unfinished behaviour in the project. */
    private static readonly ParentUnfinished = (() => {
        abstract class ParentUnfinishedEveryLanguages<const ACRONYM extends PossibleAcronym = PossibleAcronym,
            const INTERNATIONAL_ACRONYM extends PossibleInternationalAcronym = PossibleInternationalAcronym, >
            extends EveryLanguages<ACRONYM, INTERNATIONAL_ACRONYM> {

            constructor(projectAcronym: ACRONYM, internationalAcronym: INTERNATIONAL_ACRONYM, englishName: PossibleEnglishName, originalName: PossibleOriginalName,) {
                super(false, projectAcronym, internationalAcronym, englishName, originalName,)
            }

            public override get differentWords(): null { return null }

            public override get parent(): null { return null }

            protected abstract _get<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): T
            protected abstract _get<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<T>
            protected abstract _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): NullOr<T>

            public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
                return this._get(classWithEveryLanguages,) ?? EveryLanguages.AMERICAN_ENGLISH.get(classWithEveryLanguages,)
            }

        }

        return ParentUnfinishedEveryLanguages
    })()
    /** An abstract subclass of {@link EveryLanguages} that is a child and is not completed. It requires more work to handle the unfinished behaviour in the project. */
    private static readonly ChildUnfinished = (() => {
        abstract class ChildUnfinishedEveryLanguages<const ACRONYM extends PossibleAcronym = PossibleAcronym,
            const INTERNATIONAL_ACRONYM extends PossibleInternationalAcronym = PossibleInternationalAcronym, >
            extends EveryLanguages<ACRONYM, INTERNATIONAL_ACRONYM> {

            readonly #parent
            readonly #differentWords

            constructor(projectAcronym: ACRONYM, internationalAcronym: INTERNATIONAL_ACRONYM, englishName: PossibleEnglishName, originalName: PossibleOriginalName, differenceWords: PossibleDifferentWord, parent: EveryLanguages,) {
                super(false, projectAcronym, internationalAcronym, englishName, originalName, differenceWords,)
                this.#parent = parent
                this.#differentWords = differenceWords
            }

            protected get _spaceParameters(): SpaceParameterReceived { return this.parent.#spaceParameter! }

            public get differentWords(): PossibleDifferentWord { return this.#differentWords }

            public get parent(): EveryLanguages { return this.#parent }

            protected abstract _get<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): T
            protected abstract _get<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<T>
            protected abstract _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): NullOr<T>

            public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
                return this._get(classWithEveryLanguages,) ?? EveryLanguages.AMERICAN_ENGLISH.get(classWithEveryLanguages,)
            }

        }

        return ChildUnfinishedEveryLanguages
    })()
    /** An abstract subclass of a standalone {@link EveryLanguages} that is not completed. It requires more work to handle the unfinished behaviour in the project. */
    private static readonly StandaloneUnfinished = (() => {
        abstract class StandaloneUnfinishedEveryLanguages<const ACRONYM extends PossibleAcronym = PossibleAcronym,
            const INTERNATIONAL_ACRONYM extends PossibleInternationalAcronym = PossibleInternationalAcronym, >
            extends EveryLanguages<ACRONYM, INTERNATIONAL_ACRONYM> {

            constructor(projectAcronym: ACRONYM, internationalAcronym: INTERNATIONAL_ACRONYM, englishName: PossibleEnglishName, originalName: PossibleOriginalName,) {
                super(false, projectAcronym, internationalAcronym, englishName, originalName,)
            }

            public override get differentWords(): null { return null }

            public override get parent(): null { return null }

            protected abstract _get<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): T
            protected abstract _get<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<T>
            protected abstract _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): NullOr<T>

            public get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T {
                return this._get(classWithEveryLanguages,) ?? EveryLanguages.AMERICAN_ENGLISH.get(classWithEveryLanguages,)
            }

        }

        return StandaloneUnfinishedEveryLanguages
    })()

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly ENGLISH =             new class EveryLanguages_English extends EveryLanguages.ParentCompleted<'en', 'en'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }


        public override get isCurrent(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isCurrent || EveryLanguages.EUROPEAN_ENGLISH.isCurrent
        }

        public override get isDefaultLanguage(): boolean {
            return EveryLanguages.AMERICAN_ENGLISH.isDefaultLanguage || EveryLanguages.EUROPEAN_ENGLISH.isDefaultLanguage
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['english']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.english
        }

        public override original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalEnglish']
        public override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.originalEnglish
        }

    }('en', 'en', 'English', 'English',)
    public static readonly AMERICAN_ENGLISH =    new class EveryLanguages_AmericanEnglish extends EveryLanguages.ChildCompleted<'en-AM', 'en-US'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.EUROPEAN_ENGLISH.isCurrent
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanEnglish']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.americanEnglish
        }

    }('en-AM', 'en-US', 'English (America)', 'English (America)', 'America', EveryLanguages.ENGLISH,)
    public static readonly EUROPEAN_ENGLISH =    new class EveryLanguages_EuropeanEnglish extends EveryLanguages.ChildCompleted<'en-EU', 'en-EU'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.AMERICAN_ENGLISH.isCurrent
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanEnglish']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanEnglish
        }

    }('en-EU', 'en-EU', 'English (Europe)', 'English (Europe)', 'Europe', EveryLanguages.ENGLISH,)
    public static readonly FRENCH =              new class EveryLanguages_French extends EveryLanguages.ParentCompleted<'fr', 'fr'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }


        public override get isCurrent(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isCurrent || EveryLanguages.EUROPEAN_FRENCH.isCurrent
        }

        public override get isDefaultLanguage(): boolean {
            return EveryLanguages.CANADIAN_FRENCH.isDefaultLanguage || EveryLanguages.EUROPEAN_FRENCH.isDefaultLanguage
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['french']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.french
        }

        public override original<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['originalFrench']
        public override original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.originalFrench
        }

    }('fr', 'fr', 'French', 'Français',)
    public static readonly CANADIAN_FRENCH =     new class EveryLanguages_CanadianFrench extends EveryLanguages.ChildCompleted<'fr-CA', 'fr-CA'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.EUROPEAN_FRENCH.isCurrent
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['canadianFrench']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.canadianFrench
        }

    }('fr-CA', 'fr-CA', 'French (Canada)', 'Français (Canada)', 'Canada', EveryLanguages.FRENCH,)
    public static readonly EUROPEAN_FRENCH =     new class EveryLanguages_EuropeanFrench extends EveryLanguages.ChildCompleted<'fr-EU', 'fr-EU'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.CANADIAN_FRENCH.isCurrent
        }

        public override get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanFrench']
        public override get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanFrench
        }

    }('fr-EU', 'fr-EU', 'French (Europe)', 'Français (Europe)', 'Europe', EveryLanguages.FRENCH,)
    public static readonly GERMAN =              new class EveryLanguages_German extends EveryLanguages.StandaloneUnfinished<'de', 'de'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['german']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.german
        }

    }('de', 'de', 'German', 'Deutsche',)
    public static readonly SPANISH =             new class EveryLanguages_Spanish extends EveryLanguages.ParentUnfinished<'es', 'es'> {

        //region -------------------- Space getter methods --------------------

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        //endregion -------------------- Space getter methods --------------------

        public override get isCurrent(): boolean {
            return EveryLanguages.AMERICAN_SPANISH.isCurrent || EveryLanguages.EUROPEAN_SPANISH.isCurrent
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

    }('es', 'es', 'Spanish', 'Español',)
    public static readonly AMERICAN_SPANISH =    new class EveryLanguages_AmericanSpanish extends EveryLanguages.ChildUnfinished<'es-AM', 'es-US'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.AMERICAN_SPANISH.isCurrent
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanSpanish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.americanSpanish
        }

    }('es-AM', 'es-US', 'Spanish (America)', 'Español (America)', 'America', EveryLanguages.SPANISH,)
    public static readonly EUROPEAN_SPANISH =    new class EveryLanguages_EuropeanSpanish extends EveryLanguages.ChildUnfinished<'es-EU', 'es-EU'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.AMERICAN_SPANISH.isCurrent
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanSpanish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanSpanish
        }

    }('es-EU', 'es-EU', 'Spanish (Europe)', 'Español (Europa)', 'Europe', EveryLanguages.SPANISH,)
    public static readonly ITALIAN =             new class EveryLanguages_Italian extends EveryLanguages.StandaloneUnfinished<'it', 'it'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['italian']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.italian
        }

    }('it', 'it', 'Italian', 'Italiano',)
    public static readonly DUTCH =               new class EveryLanguages_Dutch extends EveryLanguages.StandaloneUnfinished<'nl', 'nl'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['dutch']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.dutch
        }

    }('nl', 'nl', 'Dutch', 'Nederlands',)
    public static readonly PORTUGUESE =          new class EveryLanguages_Portuguese extends EveryLanguages.ParentUnfinished<'pt', 'pt'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }


        public override get isCurrent(): boolean {
            return EveryLanguages.AMERICAN_PORTUGUESE.isCurrent || EveryLanguages.EUROPEAN_PORTUGUESE.isCurrent
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

    }('pt', 'pt', 'Portuguese', 'Português',)
    public static readonly AMERICAN_PORTUGUESE = new class EveryLanguages_AmericanPortuguese extends EveryLanguages.ChildUnfinished<'pt-AM', 'pt-US'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.EUROPEAN_PORTUGUESE.isCurrent
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['americanPortuguese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.americanPortuguese
        }

    }('pt-AM', 'pt-US', 'Portuguese (America)', 'Português (América)', 'America', EveryLanguages.PORTUGUESE,)
    public static readonly EUROPEAN_PORTUGUESE = new class EveryLanguages_EuropeanPortuguese extends EveryLanguages.ChildUnfinished<'pt-EU', 'pt-EU'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.AMERICAN_PORTUGUESE.isCurrent
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['europeanPortuguese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.europeanPortuguese
        }

    }('pt-EU', 'pt-EU', 'Portuguese (Europe)', 'Português (Europa)', 'Europe', EveryLanguages.PORTUGUESE,)
    public static readonly RUSSIAN =             new class EveryLanguages_Russian extends EveryLanguages.StandaloneUnfinished<'ru', 'ru'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['russian']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.russian
        }

    }('ru', 'ru', 'Russian', 'русский',)
    public static readonly JAPANESE =            new class EveryLanguages_Japanese extends EveryLanguages.StandaloneUnfinished<'ja', 'ja'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITHOUT_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['japanese']
        protected override _get<T>(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.japanese
        }

    }('ja', 'ja', 'Japanese', '日本語',)
    public static readonly CHINESE =             new class EveryLanguages_Chinese extends EveryLanguages.ParentUnfinished<'zh', 'zh'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITHOUT_SPACE
        }


        public override get isCurrent(): boolean {
            return EveryLanguages.TRADITIONAL_CHINESE.isCurrent || EveryLanguages.SIMPLIFIED_CHINESE.isCurrent
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

    }('zh', 'zh', 'Chinese', '中国人',)
    public static readonly TRADITIONAL_CHINESE = new class EveryLanguages_TraditionalChinese extends EveryLanguages.ChildUnfinished<'zh-tw', 'zh-TW'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.SIMPLIFIED_CHINESE.isCurrent
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['traditionalChinese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.traditionalChinese
        }

    }('zh-tw', 'zh-TW', 'Traditional chinese', '繁體中文', 'Traditional', EveryLanguages.CHINESE,)
    public static readonly SIMPLIFIED_CHINESE =  new class EveryLanguages_SimplifiedChinese extends EveryLanguages.ChildUnfinished<'zh-cn', 'zh-CN'> {

        public override get isCurrentOrAssociatedWithIt(): boolean {
            return this.isCurrent && EveryLanguages.TRADITIONAL_CHINESE.isCurrent
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['simplifiedChinese']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.simplifiedChinese
        }

    }('zh-cn', 'zh-CN', 'Simplified chinese', '简体中文', 'Simplified', EveryLanguages.CHINESE,)
    public static readonly KOREAN =              new class EveryLanguages_Korean extends EveryLanguages.StandaloneUnfinished<'ko', 'ko'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_EVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['korean']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.korean
        }

    }('ko', 'ko', 'Korean', '한국어',)

    public static readonly HEBREW =              new class EveryLanguages_Hebrew extends EveryLanguages.StandaloneUnfinished<'he', 'he'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['hebrew']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.hebrew
        }

    }('he', 'he', 'Hebrew', 'עִברִית',)
    public static readonly POLISH =              new class EveryLanguages_Polish extends EveryLanguages.StandaloneUnfinished<'pl', 'pl'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['polish']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.polish
        }

    }('pl', 'pl', 'Polish', 'Polski',)
    public static readonly UKRAINIAN =           new class EveryLanguages_Ukrainian extends EveryLanguages.StandaloneUnfinished<'uk', 'uk'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['ukrainian']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.ukrainian
        }

    }('uk', 'uk', 'Ukrainian', 'Український',)
    public static readonly GREEK =               new class EveryLanguages_Greek extends EveryLanguages.StandaloneUnfinished<'el', 'el'> {

        protected override get _spaceParameters() {
            return EveryLanguages._SPACE_UNEVEN_LANGUAGE_WITH_SPACE
        }

        protected override _get<T, U extends AnyClassWithEveryLanguages<T> = AnyClassWithEveryLanguages<T>, >(classWithEveryLanguages: U,): U['greek']
        protected override _get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
            return classWithEveryLanguages.greek
        }

    }('el', 'el', 'Greek', 'ελληνικά',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_EveryLanguages> = class CompanionEnum_EveryLanguages
        extends CompanionEnumWithCurrentAndSetCurrentEvent<EveryLanguages, typeof EveryLanguages>
        implements CompanionEnumDeclaration_EveryLanguages {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EveryLanguages

        private constructor() {
            super(EveryLanguages,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EveryLanguages()
        }

        //endregion -------------------- Singleton usage --------------------

        protected override readonly _DEFAULT = EveryLanguages.AMERICAN_ENGLISH

        protected override _onSetCurrent(value: EveryLanguages,) {
            super._onSetCurrent(value,)
            void i18n.changeLanguage(value.projectAcronym,)
            document.querySelector('html[lang]',)?.setAttribute('lang', value.projectAcronym,)
        }


        public getValueByName(value: Nullable<| EveryLanguages | string>,): EveryLanguages {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it =>
                it.projectAcronym === value
                || it.internationalAcronym === value
                || it.englishName === value
                || it.originalName === value)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

        public getValueByAcronym(value: Nullable<| EveryLanguages | string>,): EveryLanguages {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null acronym.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it =>
                it.projectAcronym === value
                || it.internationalAcronym === value)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this acronym "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    protected static readonly _SPACE_EVEN_LANGUAGE_WITH_SPACE: SpaceParameterReceived = [true, true, false,]
    protected static readonly _SPACE_EVEN_LANGUAGE_WITHOUT_SPACE: SpaceParameterReceived = [false, true,]
    protected static readonly _SPACE_UNEVEN_LANGUAGE_WITH_SPACE: SpaceParameterReceived = [true, false,]

    readonly #isACompleteLanguage: boolean

    #spaceParameter?: SpaceParameters
    #isASpaceEvenLanguage?: boolean

    readonly #projectAcronym
    readonly #internationalAcronym
    readonly #englishName: PossibleEnglishName
    readonly #originalName: PossibleOriginalName
    #children?: PossibleChildrenLanguages

    #space?: PossibleSpaceCharacter
    #points?: PossiblePoints_Array
    #comma?: PossibleComma
    #unionTrait?: PossibleUnionTrait
    #commercialAnd?: PossibleCommercialAnd
    #parentheses?: PossibleParentheses_Array
    #brackets?: PossibleBrackets_Array
    #braces?: PossibleBraces_Array
    #chevrons?: PossibleChevrons_Array
    #slashes?: PossibleSlashes_Array
    #romainLowercaseAlphabet?: PossibleLowercaseRomainAlphabet_Array
    #romainUppercaseAlphabet?: PossibleUppercaseRomainAlphabet_Array
    #numbers?: PossibleNumbers_Array

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(isACompleteLanguage: boolean, projectAcronym: ACRONYM, internationalAcronym: INTERNATIONAL_ACRONYM, englishName: PossibleEnglishName, originalName: PossibleOriginalName, differenceWords: NullOrString<PossibleDifferentWord> = null, parent: NullOr<EveryLanguages> = null,) {
        super()
        this.#isACompleteLanguage = isACompleteLanguage
        this.#projectAcronym = projectAcronym
        this.#internationalAcronym = internationalAcronym
        this.#englishName = englishName
        this.#originalName = originalName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get isACompleteLanguage(): boolean {
        return this.#isACompleteLanguage
    }

    //region -------------------- Space getter methods --------------------

    protected abstract get _spaceParameters(): SpaceParameterReceived

    private get __spaceParameters(): SpaceParameters {
        if (this.#spaceParameter != null)
            return this.#spaceParameter

        const spaceParameters = this._spaceParameters
        if (spaceParameters.length === 3)
            return this.#spaceParameter = spaceParameters
        return this.#spaceParameter = [spaceParameters[0], spaceParameters[1], spaceParameters[1],]
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

    public get projectAcronym(): ACRONYM {
        return this.#projectAcronym
    }

    public get internationalAcronym(): INTERNATIONAL_ACRONYM {
        return this.#internationalAcronym
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName
    }

    public get originalName(): PossibleOriginalName {
        return this.#originalName
    }

    public abstract get differentWords(): NullOrString<PossibleDifferentWord>

    public abstract get parent(): NullOr<EveryLanguages>

    public get children(): PossibleChildrenLanguages {
        return this.#children ??= EveryLanguages.Companion.values.filter(it => it.parent != null,)
            .filter(it => it !== this,)
            .filter(it => it.parent === this,)
            .toArray() as PossibleChildrenLanguages
    }

    public get isDefaultLanguage(): boolean {
        return this === EveryLanguages.Companion.defaultValue
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
        return this.#comma ??= Characters.COMMA.getCharacter(this.isASpaceEvenLanguage,)
    }

    public get unionTrait(): PossibleUnionTrait {
        return this.#unionTrait ??= Characters.UNION_TRAIT.getCharacter(this.isASpaceEvenLanguage,)
    }


    public get commercialAnd(): PossibleCommercialAnd {
        return this.#commercialAnd ??= Characters.COMMERCIAL_AND.getCharacter(this.isASpaceEvenLanguage,)
    }


    public get parentheses(): PossibleParentheses_Array {
        return this.#parentheses ??= getParentheses(this.isASpaceEvenLanguage,)
    }

    public get startingParenthesis(): PossibleStartingParentheses {
        return this.parentheses[0]
    }

    public get endingParenthesis(): PossibleEndingParentheses {
        return this.parentheses[1]
    }


    public get brackets(): PossibleBrackets_Array {
        return this.#brackets ??= getBrackets(this.isASpaceEvenLanguage,)
    }

    public get startingBrackets(): PossibleStartingBracket {
        return this.brackets[0]
    }

    public get endingBrackets(): PossibleEndingBracket {
        return this.brackets[1]
    }


    public get braces(): PossibleBraces_Array {
        return this.#braces ??= getBraces(this.isASpaceEvenLanguage,)
    }

    public get startingBraces(): PossibleStartingBrace {
        return this.braces[0]
    }

    public get endingBraces(): PossibleEndingBrace {
        return this.braces[1]
    }


    public get chevrons(): PossibleChevrons_Array {
        return this.#chevrons ??= getChevrons(this.isASpaceEvenLanguage,)
    }

    public get startingChevrons(): PossibleStartingChevron {
        return this.chevrons[0]
    }

    public get endingChevrons(): PossibleEndingChevron {
        return this.chevrons[1]
    }


    public get slashes(): PossibleSlashes_Array {
        return this.#slashes ??= getSlashes(this.isASpaceEvenLanguage,)
    }

    public get slash(): PossibleSlash {
        return this.slashes[0]
    }

    public get verticalSlash(): PossibleVerticalSlash {
        return this.slashes[1]
    }


    public get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Array {
        return this.#romainLowercaseAlphabet ??= getLowercaseLetters(this.isASpaceEvenLanguage,)
    }

    public get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Array {
        return this.#romainUppercaseAlphabet ??= getUppercaseLetters(this.isASpaceEvenLanguage,)
    }


    public get numbers(): PossibleNumbers_Array {
        return this.#numbers ??= getNumbers(this.isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace,)
    }


    public character<const C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<this['isASpaceEvenLanguage'], C>
    public character<const C extends string, >(character: C,): VariableCharacterByString<this['isASpaceEvenLanguage'], C>
    public character(character: string,) {
        return CharacterCompanion.getCharacter(this.isASpaceEvenLanguage, character,)
    }

    //endregion -------------------- Characters getter methods --------------------
    //region -------------------- Getter & setter methods (current) --------------------

    public get isCurrent(): boolean {
        return this === EveryLanguages.Companion.currentOrNull
    }

    public get isCurrentOrAssociatedWithIt(): boolean {
        return this.isCurrent
    }

    //endregion -------------------- Getter & setter methods (current) --------------------

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T

    public original<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): | T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>
    public original<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): NullOr<| T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>>
    public original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,) {
        return this.parent?.original<T>(classWithEveryLanguages,) ?? this.get(classWithEveryLanguages,)
    }

    //region -------------------- Transformation methods --------------------

    public textInParentheses<S extends string, >(text: S,): TextInParentheses<this['isASpaceEvenLanguage'], S>
    public textInParentheses(text: string,) {
        return textInParentheses(this.isASpaceEvenLanguage, text,)
    }

    public textInBrackets<S extends string, >(text: S,): TextInBrackets<this['isASpaceEvenLanguage'], S>
    public textInBrackets(text: string,) {
        return textInBrackets(this.isASpaceEvenLanguage, text,)
    }

    public textInBraces<S extends string, >(text: S,): TextInBraces<this['isASpaceEvenLanguage'], S>
    public textInBraces(text: string,) {
        return textInBraces(this.isASpaceEvenLanguage, text,)
    }

    public textInChevrons<S extends string, >(text: S,): TextInChevrons<this['isASpaceEvenLanguage'], S>
    public textInChevrons(text: string,) {
        return textInChevrons(this.isASpaceEvenLanguage, text,)
    }

    //endregion -------------------- Transformation methods --------------------

    //endregion -------------------- Methods --------------------

}

export namespace EveryLanguages {

    /** The companion instance of a {@link EveryLanguages} */
    export const Companion = EveryLanguages.CompanionEnum.get

}

type SpaceParameterReceived = | [hasSpace: boolean, isSpaceEvenLanguage: boolean,] | readonly [hasSpace: boolean, isSpaceEvenLanguageExcludingPointsAndSpace: boolean, isSpaceEvenLanguagePointsAndSpace: boolean,]
type SpaceParameters = readonly [hasSpace: boolean, isSpaceEvenLanguageExcludingPointsAndSpace: boolean, isSpaceEvenLanguagePointsAndSpace: boolean,]
type PossibleChildrenLanguages = readonly [EveryLanguages, EveryLanguages,] | EmptyArray
