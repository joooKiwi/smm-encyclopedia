import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {SingleHeaderContent}  from 'app/tools/table/SimpleHeader'
import type {Names, Ordinals}      from 'app/options/MiiCostumeCategoryAppOption.types'
import type {AppOption}            from 'app/options/AppOption'
import type {MiiCostumeCategories} from 'core/miiCostumeCategory/MiiCostumeCategories'

import {CommonOptions}        from 'app/options/CommonOptions'
import MiiCostumeCategoryIcon from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'

export abstract class MiiCostumeCategoryAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<MiiCostumeCategories> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class MiiCostumeCategoryAppOption_Icon extends MiiCostumeCategoryAppOption {

        protected override _createContentOption(enumeration: MiiCostumeCategories,) {
            return <MiiCostumeCategoryIcon reference={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class MiiCostumeCategoryAppOption_Name extends MiiCostumeCategoryAppOption {

        protected override _createContentOption(enumeration: MiiCostumeCategories,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<MiiCostumeCategoryAppOption, typeof MiiCostumeCategoryAppOption> = class CompanionEnum_MiiCostumeCategoryAppOption
        extends CompanionEnum<MiiCostumeCategoryAppOption, typeof MiiCostumeCategoryAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MiiCostumeCategoryAppOption

        private constructor() {
            super(MiiCostumeCategoryAppOption,)
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

    protected abstract _createContentOption(enumeration: MiiCostumeCategories,): ReactElement

    public renderContent(enumeration: MiiCostumeCategories,): readonly [ReactElement,] {
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
