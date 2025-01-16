import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}     from 'app/options/OfficialCourseAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {OfficialCourses}     from 'core/officialCourse/OfficialCourses'

import {CommonOptions}                  from 'app/options/CommonOptions'
import {TableOption}                    from 'app/tools/table/TableOption'
import TextComponent                    from 'app/tools/text/TextComponent'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import LevelGameStyleAndTheme           from 'core/_component/LevelGameStyleAndTheme'
import OfficialCourseAvailability       from 'core/officialCourse/component/OfficialCourseAvailability'
import OfficialCourseReward             from 'core/officialCourse/component/OfficialCourseReward'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import {UNKNOWN_REFERENCE}              from 'util/commonVariables'

export abstract class OfficialCourseAppOption
    extends TableOption<OfficialCourses, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly REWARD = new class OfficialCourseAppOption_Reward extends OfficialCourseAppOption {

        public override renderContent(enumeration: OfficialCourses,): NonNullReactElement {
            return <OfficialCourseReward reference={enumeration}/>
        }

        public override renderHeader() {
            return {key: 'reward', element: unfinishedText('Reward',),} satisfies SingleHeaderContent
        }

    }('reward',)
    public static readonly NAME = new class OfficialCourseAppOption_Name extends OfficialCourseAppOption {

        public override renderContent(enumeration: OfficialCourses,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly DESCRIPTION = new class OfficialCourseAppOption_Description extends OfficialCourseAppOption {

        public override renderContent(enumeration: OfficialCourses,): NonNullReactElement {
            const reference = enumeration.reference
            const value = reference.descriptionLanguageValue

            if (value === UNKNOWN_REFERENCE)
                return <TextComponent content={reference.descriptionEnglish} isUnknown/>
            return <TextComponent content={value}/>
        }

        public override renderHeader() {
            return {key: 'description', element: unfinishedText('Description',),} satisfies SingleHeaderContent
        }

    }('description',)
    public static readonly GAME_STYLE_AND_AREAS = new class OfficialCourseAppOption_GameStyleAndThemes extends OfficialCourseAppOption {

        public override renderContent({reference,}: OfficialCourses,): NonNullReactElement {
            return <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.courseThemeInTheMainArea} subArea={reference.courseThemeInTheSubArea} in2Line/>
        }

        public override renderHeader() {
            return {key: 'gameStyleAndAreas', element: unfinishedText(gameContentTranslation('game style.singular',) + unfinishedText(' & areas'),),} satisfies SingleHeaderContent
        }

    }('gameStyleAndAreas',)
    public static readonly TIME = new class OfficialCourseAppOption_Time extends OfficialCourseAppOption {

        public override renderContent(enumeration: OfficialCourses,): NonNullReactElement {
            return <span>{enumeration.reference.amountOfTime} <UnfinishedText>seconds</UnfinishedText></span>
        }

        public override renderHeader() {
            return {key: 'time', element: gameContentTranslation('time.singular',),} satisfies SingleHeaderContent
        }

    }('time',)
    public static readonly AVAILABILITY = new class OfficialCourseAppOption_Availability extends OfficialCourseAppOption {

        public override renderContent(enumeration: OfficialCourses,): NonNullReactElement {
            return <OfficialCourseAvailability reference={enumeration}/>
        }

        public override renderHeader() {
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
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super(associatedClass,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
