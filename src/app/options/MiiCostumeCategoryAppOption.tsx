import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}      from 'app/options/MiiCostumeCategoryAppOption.types'
import type {MiiCostumeCategories} from 'core/miiCostumeCategory/MiiCostumeCategories'

import {CommonOptions}        from 'app/options/CommonOptions'
import {TableOption}          from 'app/tools/table/TableOption'
import MiiCostumeCategoryIcon from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'

export abstract class MiiCostumeCategoryAppOption
    extends TableOption<MiiCostumeCategories, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class MiiCostumeCategoryAppOption_Icon extends MiiCostumeCategoryAppOption {

        public override renderContent(enumeration: MiiCostumeCategories,) {
            return <MiiCostumeCategoryIcon reference={enumeration}/>
        }

        public override renderHeader() {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class MiiCostumeCategoryAppOption_Name extends MiiCostumeCategoryAppOption {

        public override renderContent(enumeration: MiiCostumeCategories,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
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
