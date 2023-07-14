import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals}                                  from 'app/options/MiiCostumeAppOption.types'
import type {AppOptionWithContent, PossibleRenderReactElement} from 'app/options/component/AppOptionWithContent'
import type {AppOptionWithTable}                               from 'app/options/component/AppOptionWithTable'
import type {SingleHeaderContent}                              from 'app/tools/table/SimpleHeader'
import type {MiiCostumes}                                      from 'core/miiCostume/MiiCostumes'
import type {ReactElement}                                     from 'util/react/ReactProperties'
import type {NullOr}                                           from 'util/types/nullable'

import {CommonOptions}                 from 'app/options/CommonOptions'
import {AppOptionWithContentComponent} from 'app/options/component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}   from 'app/options/component/AppOptionWithTable.component'
import {EmptyAppOption}                from 'app/options/component/EmptyAppOption'
import Image                           from 'app/tools/images/Image'
import {MiiCostumeCategories}          from 'core/miiCostumeCategory/MiiCostumeCategories'
import {contentTranslation}            from 'lang/components/translationMethods'

/**
 * @todo convert the "_createTableHeaderOption" to have the enumerable as an argument and to be non-null
 * @todo Change CATEGORY to use {IMAGE, TEXT or NONE} instead of 2 different options.
 */
export abstract class MiiCostumeAppOption
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =                 new class MiiCostumeAppOption_Image extends MiiCostumeAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION()

                return <Image file={enumeration.imageFile}/>
            }
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'image', element: contentTranslation('Image'),}
        }

    }()
    public static readonly NAME =                  new class MiiCostumeAppOption_Name extends MiiCostumeAppOption {

        protected override _createContentOption() {
            return () => CommonOptions.get.getNameContent(MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION())
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly OFFICIAL_NOTIFICATION = new class MiiCostumeAppOption_ConditionToUnlockIt extends MiiCostumeAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION()
                const miiCostume = enumeration.reference

                return miiCostume.officialNotification?.createSimpleTranslationComponent(miiCostume.english, miiCostume.officialNotificationAmount,)
            }
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            //TODO add new translation to the header value.
            return {key: 'officialNotification', element: '--Official notification--',}
        }

    }()

    public static readonly CATEGORY =              new class MiiCostumeAppOption_Category extends MiiCostumeAppOption {

        protected override _createContentOption() {
            return () => {
                const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION(),
                    categoryName = enumeration.reference.categoryContainer.nameContainer

                return CommonOptions.get.getCategoryContent(enumeration, () => MiiCostumeCategories.getValueByName(categoryName.english).imageFile,)
            }
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.categoryHeader
        }

    }()
    /**
     * Tell whenever a {@link MiiCostumeAppOption.CATEGORY category} is displayed
     * as a text (<i>true</i>) or an image (<i>false</i>).
     */
    public static readonly CATEGORY_AS_TEXT =      new class MiiCostumeAppOption_CategoryAsText extends MiiCostumeAppOption {}()

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

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link MiiCostumeApp} and get by {@link MiiCostumeAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => MiiCostumes

    #appOptionWithContent?: AppOptionWithContent
    #appOptionWithTable?: AppOptionWithTable

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected _createContentOption(): NullOr<() => PossibleRenderReactElement> {
        return null
    }

    private get __appOptionWithContent(): AppOptionWithContent {
        if (this.#appOptionWithContent == null) {
            const content = this._createContentOption()
            this.#appOptionWithContent = content == null
                ? EmptyAppOption.get
                : new AppOptionWithContentComponent(content,)
        }
        return this.#appOptionWithContent
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected _createTableHeaderOption(): NullOr<SingleHeaderContent> {
        return null
    }

    protected get __appOptionWithTable(): AppOptionWithTable {
        if (this.#appOptionWithTable == null) {
            const content = this._createTableHeaderOption()
            this.#appOptionWithTable = content == null ? EmptyAppOption.get : new AppOptionWithTableComponent(() => content,)
        }
        return this.#appOptionWithTable
    }

    public get renderTableHeader(): NullOr<SingleHeaderContent> {
        return this.__appOptionWithTable.renderTableHeader
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<MiiCostumeAppOption>,): MiiCostumeAppOption {
        return MiiCostumeAppOption.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<MiiCostumeAppOption> {
        return MiiCostumeAppOption.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<MiiCostumeAppOption> {
        yield* MiiCostumeAppOption.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
