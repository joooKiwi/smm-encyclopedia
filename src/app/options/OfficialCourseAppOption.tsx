import {CompanionEnum, CompanionEnumSingleton, Enum} from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/OfficialCourseAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import {OfficialCourses}          from 'core/officialCourse/OfficialCourses'

import {CommonOptions}                  from 'app/options/CommonOptions'
import Image                            from 'app/tools/images/Image'
import TextComponent                    from 'app/tools/text/TextComponent'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import SimpleDate                       from 'lang/date/SimpleDate'
import {UNKNOWN_REFERENCE}              from 'util/commonVariables'

export abstract class OfficialCourseAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<OfficialCourses> {

    //region -------------------- Enum instances --------------------

    public static readonly REWARD = new class OfficialCourseAppOption_Reward extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,): ReactElement {
            return <>{enumeration.reference.reward.map(it => <Image partialId="mysteryMushroomImage" file={it.waitingImage[0]}/>,)}</>
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

        protected override _createContentOption(enumeration: OfficialCourses,): ReactElement {
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

        protected override _createContentOption(enumeration: OfficialCourses,): ReactElement {
            const reference = enumeration.reference
            const subArea = reference.courseThemeInTheSubArea

            if(subArea == null)
                return <div className="d-flex flex-column align-items-center">
                    {reference.gameStyle.renderSingleComponent}
                    <div className="w-100 my-1"/>
                    {reference.courseThemeInTheMainArea.renderSingleComponent(true,)}
                </div>
            return <div className="d-flex flex-column align-items-center">
                {reference.gameStyle.renderSingleComponent}
                <div className="w-100 my-1"/>
                <div className="d-flex">
                    {reference.courseThemeInTheMainArea.renderSingleComponent(true,)}
                    <div className="me-1"/>
                    {reference.courseThemeInTheSubArea?.renderSingleComponent(true,)}
                </div>
            </div>
        }

        protected override _createTableHeaderOption() {
            return {key: 'gameStyleAndThemes', element: unfinishedText(gameContentTranslation('game style.singular',) + ' & ' + gameContentTranslation('theme.plural',),),} satisfies SingleHeaderContent
        }

    }('gameStyleAndThemes',)
    public static readonly TIME = new class OfficialCourseAppOption_Time extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,): ReactElement {
            return <span>{enumeration.reference.amountOfTime} <UnfinishedText>seconds</UnfinishedText></span>
        }

        protected override _createTableHeaderOption() {
            return {key: 'time', element: gameContentTranslation('time.singular'),} satisfies SingleHeaderContent
        }

    }('time',)
    public static readonly AVAILABILITY = new class OfficialCourseAppOption_Availability extends OfficialCourseAppOption {

        protected override _createContentOption(enumeration: OfficialCourses,): ReactElement {
            const reference = enumeration.reference
            const releaseDate = reference.releaseDate
            const removalDate = reference.removalDate

            if (removalDate == null)
                return <div><SimpleDate date={releaseDate}/>{unfinishedText(' to the game end-life',)}</div>
            if (removalDate === UNKNOWN_REFERENCE)
                return <div><SimpleDate date={releaseDate}/>{unfinishedText(' to an unknown date',)}</div>
            return <div><SimpleDate date={releaseDate}/>{unfinishedText(' to ',)}<SimpleDate date={removalDate}/></div>
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
