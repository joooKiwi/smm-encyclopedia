import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/OfficialCourseAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {OfficialCourses}     from 'core/officialCourse/OfficialCourses'

import {CommonOptions}                  from 'app/options/CommonOptions'
import TextComponent                    from 'app/tools/text/TextComponent'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import LevelGameStyleAndTheme           from 'core/_component/LevelGameStyleAndTheme'
import OfficialCourseAvailability       from 'core/officialCourse/component/OfficialCourseAvailability'
import OfficialCourseReward             from 'core/officialCourse/component/OfficialCourseReward'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import {UNKNOWN_REFERENCE}              from 'util/commonVariables'

export abstract class OfficialCourseAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<OfficialCourses> {

    //region -------------------- Enum instances --------------------

    public static readonly REWARD = new class OfficialCourseAppOption_Reward extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,): NonNullReactElement {
            return <OfficialCourseReward reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return {key: 'time', element: unfinishedText('Reward',),} satisfies SingleHeaderContent
        }

    }('reward',)
    public static readonly NAME = new class OfficialCourseAppOption_Name extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly DESCRIPTION = new class OfficialCourseAppOption_Description extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,): NonNullReactElement {
            const reference = enumeration.reference
            const value = reference.descriptionLanguageValue

            if (value === UNKNOWN_REFERENCE)
                return <TextComponent content={reference.descriptionEnglish} isUnknown/>
            return <TextComponent content={value}/>
        }

        protected override _createTableHeaderOption() {
            return {key: 'time', element: unfinishedText('Description',),} satisfies SingleHeaderContent
        }

    }('description',)
    public static readonly GAME_STYLE_AND_THEMES = new class OfficialCourseAppOption_GameStyleAndThemes extends OfficialCourseAppOption {

        protected override _createContentOption({reference,}: OfficialCourses,): NonNullReactElement {
            return <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.courseThemeInTheMainArea} subArea={reference.courseThemeInTheSubArea} in2Line/>
        }

        protected override _createTableHeaderOption() {
            return {key: 'gameStyleAndThemes', element: unfinishedText(gameContentTranslation('game style.singular',) + ' & ' + gameContentTranslation('theme.plural',),),} satisfies SingleHeaderContent
        }

    }('gameStyleAndAreas',)
    public static readonly TIME = new class OfficialCourseAppOption_Time extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,): NonNullReactElement {
            return <span>{enumeration.reference.amountOfTime} <UnfinishedText>seconds</UnfinishedText></span>
        }

        protected override _createTableHeaderOption() {
            return {key: 'time', element: gameContentTranslation('time.singular',),} satisfies SingleHeaderContent
        }

    }('time',)
    public static readonly AVAILABILITY = new class OfficialCourseAppOption_Availability extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,): NonNullReactElement {
            return <OfficialCourseAvailability reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return {key: 'availability', element: unfinishedText('Availability',),} satisfies SingleHeaderContent
        }

    }('availability',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<OfficialCourseAppOption, typeof OfficialCourseAppOption> = class CompanionEnum_OfficialCourseAppOption
        extends CompanionEnum<OfficialCourseAppOption, typeof OfficialCourseAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_OfficialCourseAppOption

        private constructor() {
            super(OfficialCourseAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_OfficialCourseAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #associatedClass
    readonly #additionalClasses

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super()
        this.#additionalClasses = [this.#associatedClass = associatedClass,] as const
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get associatedClass(): string {
        return this.#associatedClass
    }

    public get additionalClasses(): readonly [string,] {
        return this.#additionalClasses
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: OfficialCourses,): ReactElement

    public renderContent(enumeration: OfficialCourses,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    public renderTableHeader(): SingleHeaderContent {
        return this._createTableHeaderOption()
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------

}
