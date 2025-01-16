import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Medals}          from 'core/medal/Medals'
import type {Names, Ordinals} from 'app/options/MedalAppOption.types'

import {CommonOptions} from 'app/options/CommonOptions'
import {TableOption}   from 'app/tools/table/TableOption'
import MedalIcon       from 'core/medal/component/MedalIcon'

export abstract class MedalAppOption
    extends TableOption<Medals, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class MedalAppOption_Icon extends MedalAppOption {

        public override renderContent(enumeration: Medals,) {
            return <MedalIcon reference={enumeration}/>
        }

        public override renderHeader() {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class MedalAppOption_Name extends MedalAppOption {

        public override renderContent(enumeration: Medals,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    //TODO add the 2 other properties of a Medal (max # of level to upload / # of star to unlock it)

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
