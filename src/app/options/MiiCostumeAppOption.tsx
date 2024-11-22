import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOr} from "@joookiwi/type"
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/MiiCostumeAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {MiiCostumes}         from 'core/miiCostume/MiiCostumes'

import {CommonOptions}        from 'app/options/CommonOptions'
import MiiCostumeImage        from 'core/miiCostume/component/MiiCostumeImage'
import {MiiCostumeCategories} from 'core/miiCostumeCategory/MiiCostumeCategories'
import MiiCostumeCategoryIcon from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'
import {contentTranslation}   from 'lang/components/translationMethods'

import CategoryCompanion = MiiCostumeCategories.Companion

/**
 * @todo convert the "_createTableHeaderOption" to have the enumerable as an argument and to be non-null
 * @todo Change CATEGORY to use {IMAGE, TEXT or NONE} instead of 2 different options.
 */
export abstract class MiiCostumeAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<MiiCostumes> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =                 new class MiiCostumeAppOption_Image extends MiiCostumeAppOption {

        protected override _createContentOption(enumeration: MiiCostumes,) {
            return <MiiCostumeImage reference={enumeration}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'image', element: contentTranslation('Image',),}
        }

    }('image',)
    public static readonly NAME =                  new class MiiCostumeAppOption_Name extends MiiCostumeAppOption {

        protected override _createContentOption(enumeration: MiiCostumes,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly OFFICIAL_NOTIFICATION = new class MiiCostumeAppOption_ConditionToUnlockIt extends MiiCostumeAppOption {

        protected override _createContentOption(enumeration: MiiCostumes,) {
            const miiCostume = enumeration.reference
            return miiCostume.officialNotification?.createSimpleTranslationComponent(miiCostume.english, miiCostume.officialNotificationAmount,)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            //TODO add new translation to the header value.
            return {key: 'officialNotification', element: '--Official notification--',}
        }

    }('officialNotification')

    public static readonly CATEGORY =              new class MiiCostumeAppOption_Category extends MiiCostumeAppOption {

        protected override _createContentOption(enumeration: MiiCostumes,) {
            return <MiiCostumeCategoryIcon reference={CategoryCompanion.getValueByName(enumeration.reference.categoryAmericanEnglish,)}/>
        }

        protected override _createTableHeaderOption() {
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

    protected _createContentOption(enumeration: MiiCostumes,): ReactElement {
        throw new ReferenceError(`The MiiCostumeAppOption.${this.name} cannot create a content option`,)
    }

    public renderContent(enumeration: MiiCostumes,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected _createTableHeaderOption(): NullOr<SingleHeaderContent> {
        throw new ReferenceError(`The MiiCostumeAppOption.${this.name} cannot create a table header option`,)
    }

    public renderTableHeader(): NullOr<SingleHeaderContent> {
        const content = this._createTableHeaderOption()
        if (content == null)
            return null
        return content
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------

}
