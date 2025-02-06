import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOr}                 from '@joookiwi/type'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}   from 'app/options/CourseTagAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {CourseTags}        from 'core/courseTag/CourseTags'

import {CommonOptions}  from 'app/options/CommonOptions'
import {TableOption}    from 'app/tools/table/TableOption'
import {unfinishedText} from 'app/tools/text/UnfinishedText'

export abstract class CourseTagAppOption
    extends TableOption<CourseTags, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class CourseTagAppOption_Name extends CourseTagAppOption {

        public override renderContent(enumeration: CourseTags,): ReactJSXElement {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly FIRST_APPEARANCE = new class CourseTagAppOption_Name extends CourseTagAppOption {

        public override renderContent(enumeration: CourseTags,): NullOr<ReactJSXElement> {
            const value = enumeration.reference.firstAppearance
            if (value == null)
                return null
            return <small className="text-body text-opacity-50">{value.simpleName}</small>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'first-appearance', element: unfinishedText('First appearance',),}
        }

    }('first-appearance',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<CourseTagAppOption, typeof CourseTagAppOption> = class CompanionEnum_CourseTagAppOption
        extends CompanionEnum<CourseTagAppOption, typeof CourseTagAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_CourseTagAppOption

        private constructor() {
            super(CourseTagAppOption,)
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
