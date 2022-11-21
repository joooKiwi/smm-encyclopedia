import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {lazy}                                                                    from 'react'

import type {AppOptionWithContent, PossibleRenderReactElement} from './component/AppOptionWithContent'
import type {AppOptionWithTable}                               from './component/AppOptionWithTable'
import type {MiiCostumeAppStates}                              from '../AppStates.types'
import type {MiiCostumes}                                      from '../../core/miiCostume/MiiCostumes'
import type {Names, Ordinals}                                  from './MiiCostumeAppOption.types'
import type {ReactElement}                                     from '../../util/react/ReactProperties'
import type {SingleHeaderContent}                              from '../tools/table/SimpleHeader'

import {AbstractAppOption}             from './AbstractAppOption'
import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component'
import {CommonOptions}                 from './CommonOptions'
import {contentTranslation}            from '../../lang/components/translationMethods'
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables'
import {EmptyAppOption}                from './component/EmptyAppOption'
import {MiiCostumeCategories}          from '../../core/miiCostumeCategory/MiiCostumeCategories'

//region -------------------- dynamic imports --------------------

const Image = lazy(() => import('../tools/images/Image'))

//endregion -------------------- dynamic imports --------------------

/**
 * @todo convert the "_createTableHeaderOption" to have the enumerable as an argument and to be non-null
 * @todo Change CATEGORY to use {IMAGE, TEXT or NO} instead of 2 different options.
 */
export abstract class MiiCostumeAppOption
    extends AbstractAppOption<boolean, MiiCostumeAppStates, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =                 new class MiiCostumeAppOption_Image extends MiiCostumeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION()

                return <Image source={enumeration.imagePath} fallbackName={`${enumeration.englishName} - image`}/>
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {key: 'image', element: contentTranslation('Image'),}
        }

    }(true,)
    public static readonly NAME =                  new class MiiCostumeAppOption_Name extends MiiCostumeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => CommonOptions.get.getNameContent(MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION())
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return CommonOptions.get.nameHeader
        }

    }(true,)
    public static readonly OFFICIAL_NOTIFICATION = new class MiiCostumeAppOption_ConditionToUnlockIt extends MiiCostumeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION()
                const miiCostume = enumeration.reference

                const {officialNotification} = miiCostume

                return officialNotification == null
                    ? EMPTY_REACT_ELEMENT
                    : officialNotification.createSimpleTranslationComponent(miiCostume.english, miiCostume.officialNotificationAmount,)

            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            //TODO add new translation to the header value.
            return {key: 'officialNotification', element: '--Official notification--',}
        }

    }(true,)

    public static readonly CATEGORY =              new class MiiCostumeAppOption_Category extends MiiCostumeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION(),
                    categoryName = enumeration.reference.categoryContainer.nameContainer

                return CommonOptions.get.getCategoryContent(enumeration,
                    () => MiiCostumeAppOption.CATEGORY_AS_TEXT.get
                        ? categoryName
                        : MiiCostumeCategories.getValueByName(categoryName.english).imagePath,)
            }
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return CommonOptions.get.categoryHeader
        }

    }(true,)
    /**
     * Tell whenever a {@link MiiCostumeAppOption.CATEGORY category} is displayed
     * as a text (<i>true</i>) or an image (<i>false</i>).
     */
    public static readonly CATEGORY_AS_TEXT =      new class MiiCostumeAppOption_CategoryAsText extends MiiCostumeAppOption {
    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: MiiCostumeAppOption

    //endregion -------------------- Enum fields --------------------
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

    private constructor(defaultValue: boolean,) {
        super(defaultValue,)
    }

    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected _createContentOption(): PossibleOptionWithContent {
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

    protected _createTableHeaderOption(): PossibleOptionWithTable {
        return null
    }

    protected get __appOptionWithTable(): AppOptionWithTable {
        if (this.#appOptionWithTable == null) {
            const content = this._createTableHeaderOption()
            this.#appOptionWithTable = content == null ? EmptyAppOption.get : new AppOptionWithTableComponent(() => content,)
        }
        return this.#appOptionWithTable
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return MiiCostumeAppOption
    }

    public static getValue(value: PossibleValueByEnumerable<MiiCostumeAppOption>,): MiiCostumeAppOption {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<MiiCostumeAppOption> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------
}

type PossibleOptionWithContent = | (() => PossibleRenderReactElement) | null
type PossibleOptionWithTable = | SingleHeaderContent | null
