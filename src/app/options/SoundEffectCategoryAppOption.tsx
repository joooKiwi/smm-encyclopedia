import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}       from 'app/options/SoundEffectCategoryAppOption.types'
import type {SoundEffectCategories} from 'core/soundEffectCategory/SoundEffectCategories'

import {CommonOptions}         from 'app/options/CommonOptions'
import {TableOption}           from 'app/tools/table/TableOption'
import SoundEffectCategoryIcon from 'core/soundEffectCategory/component/SoundEffectCategoryIcon'

export abstract class SoundEffectCategoryAppOption
    extends TableOption<SoundEffectCategories, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class SoundEffectCategoryAppOption_Icon extends SoundEffectCategoryAppOption {

        public override renderContent(enumeration: SoundEffectCategories,) {
            return <SoundEffectCategoryIcon reference={enumeration}/>
        }

        public override renderHeader() {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class SoundEffectCategoryAppOption_Name extends SoundEffectCategoryAppOption {

        public override renderContent(enumeration: SoundEffectCategories,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
            return CommonOptions.get.nameHeader
        }

    }('name',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<SoundEffectCategoryAppOption, typeof SoundEffectCategoryAppOption> = class CompanionEnum_SoundEffectCategoryAppOption
        extends CompanionEnum<SoundEffectCategoryAppOption, typeof SoundEffectCategoryAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffectCategoryAppOption

        private constructor() {
            super(SoundEffectCategoryAppOption,)
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
