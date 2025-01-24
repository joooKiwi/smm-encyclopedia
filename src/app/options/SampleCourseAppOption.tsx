import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}   from 'app/options/SampleCourseAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {SampleCourses}     from 'core/sampleCourse/SampleCourses'

import {CommonOptions}                  from 'app/options/CommonOptions'
import {TableOption}                    from 'app/tools/table/TableOption'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import LevelGameStyleAndTheme           from 'core/_component/LevelGameStyleAndTheme'
import {ProjectLanguages}               from 'lang/ProjectLanguages'
import {gameContentTranslation}         from 'lang/components/translationMethods'

import LanguageCompanion = ProjectLanguages.Companion

export abstract class SampleCourseAppOption
    extends TableOption<SampleCourses, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly LEVEL_NUMBER = new class SampleCourseAppOption_Number extends SampleCourseAppOption {

        public override renderContent({reference: {worldNumber, firstNumberInFirst10MarioChallenges,}}: SampleCourses,): ReactJSXElement {
            if (firstNumberInFirst10MarioChallenges == null)
                return <span className="number-container">{worldNumber}</span>
            return <span className="number-container">{worldNumber}<sub className="opacity-75">({firstNumberInFirst10MarioChallenges})</sub></span>
        }

        public override renderHeader(): SimpleReactHeader {
            return {
                key: 'levelNumber', element: <span><UnfinishedText>Level number</UnfinishedText><br/><sub className="opacity-75">{LanguageCompanion.current.textInParentheses(unfinishedText('with 1st-time in 10 Mario Challenges',),)}</sub></span>,
            }
        }

    }('levelNumber',)
    public static readonly NAME = new class SampleCourseAppOption_Name extends SampleCourseAppOption {

        public override renderContent(enumeration: SampleCourses,): ReactJSXElement {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly GAME_STYLE_AND_AREAS = new class SampleCourseAppOption_GameStyleAndAreas extends SampleCourseAppOption {

        public override renderContent({reference,}: SampleCourses,): ReactJSXElement {
            return <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.themeInMainArea} subArea={reference.themeInSubArea} in2Line/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'gameStyleAndAreas', element: unfinishedText(gameContentTranslation('game style.singular',) + unfinishedText(' & areas'),),}
        }

    }('gameStyleAndAreas')
    public static readonly TIME = new class SampleCourseAppOption_Time extends SampleCourseAppOption {

        public override renderContent({reference,}: SampleCourses,): ReactJSXElement {
            return <span>{reference.amountOfTime} <UnfinishedText>seconds</UnfinishedText></span>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'time', element: gameContentTranslation('time.singular',),}
        }

    }('time',)

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

    private constructor(associatedClass: string,) {
        super(associatedClass,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
