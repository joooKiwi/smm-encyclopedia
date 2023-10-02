import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/SampleCourseAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {SampleCourses}       from 'core/sampleCourse/SampleCourses'

import {CommonOptions}                  from 'app/options/CommonOptions'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import {gameContentTranslation}         from 'lang/components/translationMethods'

export abstract class SampleCourseAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<SampleCourses> {

    //region -------------------- Enum instances --------------------

    public static readonly NUMBER = new class SampleCourseAppOption_Number extends SampleCourseAppOption {

        protected override _createContentOption({reference: {worldNumber, firstNumberInFirst10MarioChallenges,}}: SampleCourses,): ReactElement {
            if (firstNumberInFirst10MarioChallenges == null)
                return <span className="number-container">{worldNumber}</span>
            return <span className="number-container">{worldNumber}<sub className="opacity-75">({firstNumberInFirst10MarioChallenges})</sub></span>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'number', element: <span><UnfinishedText>Level number</UnfinishedText><br/><sub className="opacity-75">({unfinishedText('with 1st-time in 10 Mario Challenges')})</sub></span>,
            }
        }


    }()
    public static readonly NAME = new class SampleCourseAppOption_Name extends SampleCourseAppOption {

        protected override _createContentOption(enumeration: SampleCourses,): ReactElement {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader
        }


    }()
    public static readonly GAME_STYLE_AND_AREAS = new class SampleCourseAppOption_GameStyleAndAreas extends SampleCourseAppOption {

        protected override _createContentOption({reference,}: SampleCourses,): ReactElement {
            const themeInSubArea = reference.themeInSubArea
            if (themeInSubArea == null)
                return <div className="gameStyleAndAreas-container d-flex">
                    {reference.gameStyle.renderSingleComponent}
                    <div className="ps-2">
                        {reference.themeInMainArea.renderSingleComponent(true,)}
                    </div>
                </div>
            return <div className="gameStyleAndAreas-container d-flex">
                {reference.gameStyle.renderSingleComponent}
                <div className="ps-2">
                    {reference.themeInMainArea.renderSingleComponent(true,)}
                </div>
                <div className="ps-1">
                    {themeInSubArea.renderSingleComponent(true,)}
                </div>
            </div>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'gameStyleAndAreas', element: unfinishedText('Game style & areas',),}
        }


    }()
    public static readonly TIME = new class SampleCourseAppOption_Time extends SampleCourseAppOption {

        protected override _createContentOption({reference,}: SampleCourses,): ReactElement {
            return <span>{reference.amountOfTime} <UnfinishedText>seconds</UnfinishedText></span>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'time', element: gameContentTranslation('time.singular',),}
        }


    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static CompanionEnum: CompanionEnumSingleton<SampleCourseAppOption, typeof SampleCourseAppOption> = class CompanionEnum_SampleCourseAppOption
        extends CompanionEnum<SampleCourseAppOption, typeof SampleCourseAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SampleCourseAppOption

        private constructor() {
            super(SampleCourseAppOption,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: SampleCourses,): ReactElement

    public renderContent(enumeration: SampleCourses,): readonly [ReactElement,] {
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