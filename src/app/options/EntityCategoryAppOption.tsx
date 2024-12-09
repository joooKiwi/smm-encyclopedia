import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}  from 'app/options/EntityCategoryAppOption.types'
import type {EntityCategories} from 'core/entityCategory/EntityCategories'

import {CommonOptions}    from 'app/options/CommonOptions'
import {TableOption}      from 'app/tools/table/TableOption'
import EntityCategoryIcon from 'core/entityCategory/component/EntityCategoryIcon'

export abstract class EntityCategoryAppOption
    extends TableOption<EntityCategories, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class EntityCategoryAppOption_Icon extends EntityCategoryAppOption {

        public override renderContent(enumeration: EntityCategories,) {
            return <EntityCategoryIcon reference={enumeration}/>
        }

        public override renderHeader() {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class EntityCategoryAppOption_Name extends EntityCategoryAppOption {

        public override renderContent(enumeration: EntityCategories,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
            return CommonOptions.get.nameHeader
        }

    }('name',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<EntityCategoryAppOption, typeof EntityCategoryAppOption> = class CompanionEnum_EntityCategoryAppOption
        extends CompanionEnum<EntityCategoryAppOption, typeof EntityCategoryAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityCategoryAppOption

        private constructor() {
            super(EntityCategoryAppOption,)
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
