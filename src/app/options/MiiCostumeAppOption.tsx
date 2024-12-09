import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}     from 'app/options/MiiCostumeAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {MiiCostumes}         from 'core/miiCostume/MiiCostumes'

import {CommonOptions}        from 'app/options/CommonOptions'
import {TableOption}          from 'app/tools/table/TableOption'
import MiiCostumeImage        from 'core/miiCostume/component/MiiCostumeImage'
import {MiiCostumeCategories} from 'core/miiCostumeCategory/MiiCostumeCategories'
import MiiCostumeCategoryIcon from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'
import {contentTranslation}   from 'lang/components/translationMethods'

import CategoryCompanion = MiiCostumeCategories.Companion

export abstract class MiiCostumeAppOption
    extends TableOption<MiiCostumes, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =                 new class MiiCostumeAppOption_Image extends MiiCostumeAppOption {

        public override renderContent(enumeration: MiiCostumes,) {
            return <MiiCostumeImage reference={enumeration}/>
        }

        public override renderHeader(): SingleHeaderContent {
            return {key: 'image', element: contentTranslation('Image',),}
        }

    }('image',)
    public static readonly NAME =                  new class MiiCostumeAppOption_Name extends MiiCostumeAppOption {

        public override renderContent(enumeration: MiiCostumes,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly OFFICIAL_NOTIFICATION = new class MiiCostumeAppOption_ConditionToUnlockIt extends MiiCostumeAppOption {

        public override renderContent(enumeration: MiiCostumes,) {
            const miiCostume = enumeration.reference
            return miiCostume.officialNotification?.createSimpleTranslationComponent(miiCostume.english, miiCostume.officialNotificationAmount,)
        }

        public override renderHeader(): SingleHeaderContent {
            //TODO add new translation to the header value.
            return {key: 'officialNotification', element: '--Official notification--',}
        }

    }('officialNotification')

    public static readonly CATEGORY =              new class MiiCostumeAppOption_Category extends MiiCostumeAppOption {

        public override renderContent(enumeration: MiiCostumes,) {
            return <MiiCostumeCategoryIcon reference={CategoryCompanion.getValueByName(enumeration.reference.categoryAmericanEnglish,)}/>
        }

        public override renderHeader() {
            return CommonOptions.get.categoryHeader
        }

    }('category',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<MiiCostumeAppOption, typeof MiiCostumeAppOption> = class CompanionEnum_MiiCostumeAppOption
        extends CompanionEnum<MiiCostumeAppOption, typeof MiiCostumeAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MiiCostumeAppOption

        private constructor() {
            super(MiiCostumeAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_MiiCostumeAppOption()
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
