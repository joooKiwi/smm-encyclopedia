import {lazy} from 'react';

import type {AppOptionStatic}                                                                                                                                                       from './AppOption';
import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './MiiCostumeAppOption.types';
import type {MiiCostumeAppStates}                                                                                                                                                   from '../AppStates.types';
import type {MiiCostumes}                                                                                                                                                           from '../../core/miiCostume/MiiCostumes';
import type {ReactComponentWithState}                                                                                                                                               from '../../util/react/ReactComponent';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperty';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AbstractAppOption}             from './AbstractAppOption';
import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component';
import {CommonOptions}                 from './CommonOptions';
import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {EMPTY_ARRAY}                   from '../../util/emptyVariables';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {EmptyAppOption}                from './component/EmptyAppOption';
import {Enum}                          from '../../util/enum/Enum';
import {MiiCostumeCategories}          from '../../core/miiCostumeCategory/MiiCostumeCategories';
import {ViewDisplays}                  from '../withInterpreter/ViewDisplays';

//region -------------------- dynamic imports --------------------

const Image =         lazy(() => import('../tools/images/Image'));

//endregion -------------------- dynamic imports --------------------

export abstract class MiiCostumeAppOption
    extends AbstractAppOption<boolean, MiiCostumeAppStates, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ IMAGE;
    public static/* readonly*/ NAME;
    public static/* readonly*/ OFFICIAL_NOTIFICATION;

    public static/* readonly*/ CATEGORY;
    /**
     * Tell whenever a {@link MiiCostumeAppOption.CATEGORY category} is displayed
     * as a text (<i>true</i>) or an image (<i>false</i>).
     */
    public static/* readonly*/ CATEGORY_AS_TEXT;

    static {
        this.IMAGE =                  new class MiiCostumeAppOption_Image extends MiiCostumeAppOption {

            protected override _get(state: MiiCostumeAppStates,): boolean {
                return state.display.section.image;
            }

            protected override _set(nextState: MiiCostumeAppStates, value: boolean,): void {
                nextState.display.section.image = value;
            }

            protected override get _createContentOption(): PossibleOptionWithContent {
                return () => {
                    const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION();

                    return <Image source={enumeration.imagePath} fallbackName={`${enumeration.englishName} - image`}/>;
                };
            }

            protected override get _createTableHeaderOption(): PossibleOptionWithTable {
                return {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,};
            }

        }(true,);
        this.NAME =                   new class MiiCostumeAppOption_Name extends MiiCostumeAppOption {

            protected override _get(state: MiiCostumeAppStates,): boolean {
                return state.display.section.name;
            }

            protected override _set(nextState: MiiCostumeAppStates, value: boolean,): void {
                nextState.display.section.name = value;
            }

            protected override get _createContentOption(): PossibleOptionWithContent {
                return () => CommonOptions.get.getNameContent(MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION());
            }

            protected override get _createTableHeaderOption(): PossibleOptionWithTable {
                return CommonOptions.get.nameHeader;
            }

        }(true,);
        this.OFFICIAL_NOTIFICATION =  new class MiiCostumeAppOption_ConditionToUnlockIt extends MiiCostumeAppOption {

            protected override _get(state: MiiCostumeAppStates,): boolean {
                return state.display.section.conditionToUnlockIt;
            }

            protected override _set(nextState: MiiCostumeAppStates, value: boolean,): void {
                nextState.display.section.conditionToUnlockIt = value;
            }

            protected override get _createContentOption(): PossibleOptionWithContent {
                return () => {
                    const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION();
                    const miiCostume = enumeration.reference;

                    const {officialNotification} = miiCostume;

                    return officialNotification == null
                        ? EMPTY_REACT_ELEMENT
                        : officialNotification.createSimpleTranslationComponent(miiCostume.english, miiCostume.officialNotificationAmount,);

                };
            }

            protected override get _createTableHeaderOption(): PossibleOptionWithTable {
                //TODO add new translation to the header value.
                return {key: 'officialNotification', element: <>--Official notification--</>,};
            }

        }(true,);

        this.CATEGORY =               new class MiiCostumeAppOption_Category extends MiiCostumeAppOption {

            protected override _get(state: MiiCostumeAppStates,): boolean {
                return state.display.section.category;
            }

            protected override _set(nextState: MiiCostumeAppStates, value: boolean,) {
                nextState.display.section.category = value;
            }

            protected override get _createContentOption(): PossibleOptionWithContent {
                return () => {
                    const enumeration = MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION(),
                        categoryName = enumeration.reference.categoryContainer.nameContainer;

                    return CommonOptions.get.getCategoryContent(enumeration,
                        () => MiiCostumeAppOption.CATEGORY_AS_TEXT.get
                            ? categoryName
                            : MiiCostumeCategories.getValue(categoryName.english)!.imagePath,);
                };
            }

            protected override get _createTableHeaderOption(): PossibleOptionWithTable {
                return CommonOptions.get.categoryHeader;
            }

        }(true,);
        this.CATEGORY_AS_TEXT =       new class MiiCostumeAppOption_CategoryAsText extends MiiCostumeAppOption {

            protected override _get(state: MiiCostumeAppStates,): boolean {
                return state.display.asText.category;
            }

            protected override _set(nextState: MiiCostumeAppStates, value: boolean,) {
                nextState.display.asText.category = value;
            }

        }(false,);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: MiiCostumeAppOption;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE: ReactComponentWithState<MiiCostumeAppStates>;
    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EveryEntitiesApp} and get by {@link EntityAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => MiiCostumes;

    #appOptionWithContent?: AppOptionWithContent;
    #appOptionWithTable?: AppOptionWithTable;

    //endregion -------------------- Attributes --------------------

    private constructor(defaultValue: boolean,) {
        super(defaultValue,);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE(): ReactComponentWithState<MiiCostumeAppStates> {
        return this.#REFERENCE;
    }

    public static set REFERENCE(value: ReactComponentWithState<MiiCostumeAppStates>,) {
        this.#REFERENCE = value;
    }

    public static get createDefaultState(): MiiCostumeAppStates {
        return {
            typeDisplayed: ViewDisplays.TABLE,
            display: {
                section: {
                    image: MiiCostumeAppOption.IMAGE._lastValueRetrieved,
                    name: MiiCostumeAppOption.NAME._lastValueRetrieved,
                    conditionToUnlockIt: MiiCostumeAppOption.OFFICIAL_NOTIFICATION._lastValueRetrieved,
                    category: MiiCostumeAppOption.CATEGORY._lastValueRetrieved,
                },
                asText: {
                    category: MiiCostumeAppOption.CATEGORY_AS_TEXT._lastValueRetrieved,
                },
            },
        };
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected get _createContentOption(): PossibleOptionWithContent {
        return null;
    }

    protected get __appOptionWithContent(): AppOptionWithContent {
        if (this.#appOptionWithContent == null) {
            const content = this._createContentOption;
            this.#appOptionWithContent = content == null
                ? EmptyAppOption.get
                : new AppOptionWithContentComponent(content,);
        }
        return this.#appOptionWithContent;
    }

    public get renderContent(): readonly ReactElement[] {
        return this.get
            ? this.__appOptionWithContent.renderContent
            : EMPTY_ARRAY;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected get _createTableHeaderOption(): PossibleOptionWithTable {
        return null;
    }

    protected get __appOptionWithTable(): AppOptionWithTable {
        if (this.#appOptionWithTable == null) {
            const content = this._createTableHeaderOption;
            this.#appOptionWithTable = content == null ? EmptyAppOption.get : new AppOptionWithTableComponent(() => content,);
        }
        return this.#appOptionWithTable;
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.get
            ? this.__appOptionWithTable.renderTableHeader
            : null;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<MiiCostumeAppOption> & AppOptionStatic<MiiCostumeAppStates> {
        return MiiCostumeAppOption;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends MiiCostumeAppOption = MiiCostumeAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): MiiCostumeAppOption
    public static getValue(value: PossibleValue,): | MiiCostumeAppOption | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------
}

type PossibleOptionWithContent = | (() => PossibleRenderReactElement) | null;
type PossibleOptionWithTable = | SingleHeaderContent | null;
