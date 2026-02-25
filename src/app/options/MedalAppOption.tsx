import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}   from 'app/options/MedalAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {Medals}            from 'core/medal/Medals'

import {CommonOptions}                              from 'app/options/CommonOptions'
import {TableOption}                                from 'app/tools/table/TableOption'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import AmountOfStarToUnlock                         from 'core/medal/component/AmountOfStarToUnlock'
import HonorMedalImage                              from 'core/medal/component/HonorMedalImage'
import MaximumQuantityOfCoursesToBeUploaded         from 'core/medal/component/MaximumQuantityOfCoursesToBeUploaded'
import MedalIcon                                    from 'core/medal/component/MedalIcon'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

export abstract class MedalAppOption
    extends TableOption<Medals, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class MedalAppOption_Icon extends MedalAppOption {

        public override renderContent(enumeration: Medals,): ReactJSXElement {
            return <MedalIcon reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class MedalAppOption_Name extends MedalAppOption {

        public override renderContent(enumeration: Medals,): ReactJSXElement {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly MAXIMUM_AMOUNT_OF_COURSE_TO_UPLOAD = new class MedalAppOption_Name extends MedalAppOption {

        public override renderContent(enumeration: Medals,): ReactJSXElement {
            return <MaximumQuantityOfCoursesToBeUploaded reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            const {COURSE,} = OtherWordInTheGames
            const courses = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName.toLowerCase(),)

            return {key: 'maximum', element: contentTranslation('Maximum.m',), tooltip: gameContentTranslation('medal.Maximum amount of courses to be uploaded', {courses: courses,},),}
        }

    }('maximum-amount-of-course-to-upload',)
    public static readonly AMOUNT_OF_STAR_TO_UNLOCK = new class MedalAppOption_Name extends MedalAppOption {

        public override renderContent(enumeration: Medals,): ReactJSXElement {
            return <AmountOfStarToUnlock reference={enumeration}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'star', element: <HonorMedalImage/>, tooltip: gameContentTranslation('medal.Amount of star to unlock',),}
        }

    }('amount-of-star-to-unlock',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<MedalAppOption, typeof MedalAppOption> = class CompanionEnum_MedalAppOption
        extends CompanionEnum<MedalAppOption, typeof MedalAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MedalAppOption

        private constructor() {
            super(MedalAppOption,)
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
