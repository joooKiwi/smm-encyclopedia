import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/CourseTagAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {CourseTags}          from 'core/courseTag/CourseTags'

import {CommonOptions}  from 'app/options/CommonOptions'
import {unfinishedText} from 'app/tools/text/UnfinishedText'

export abstract class CourseTagAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<CourseTags> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class CourseTagAppOption_Name extends CourseTagAppOption {

        protected override _createContentOption(enumeration: CourseTags,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly FIRST_APPEARANCE = new class CourseTagAppOption_Name extends CourseTagAppOption {

        protected override _createContentOption(enumeration: CourseTags,) {
            const value = enumeration.reference.firstAppearance
            if (value == null)
                return null
            return <small className="text-body text-opacity-50">{value.simpleName}</small>
        }

        protected override _createTableHeaderOption() {
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

    protected abstract _createContentOption(enumeration: CourseTags,): ReactElement

    public renderContent(enumeration: CourseTags,): readonly [ReactElement,] {
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
