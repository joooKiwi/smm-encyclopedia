import {lazy} from 'react';

import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './ThemeAppOption.types';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';
import type {Themes}                                                                                                                                                                from '../../core/theme/Themes';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperty';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';

import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component';
import {BASE_PATH}                     from '../../variables';
import {CommonOptions}                 from './CommonOptions';
import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {Enum}                          from '../../util/enum/Enum';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Games}                         from '../../core/game/Games';
import {Times}                         from '../../core/time/Times';
import YesOrNoResultTextComponent      from '../tools/text/YesOrNoResultTextComponent';

//region -------------------- dynamic imports --------------------

const Image =                lazy(() => import('../tools/images/Image'));
const NightEffectComponent = lazy(() => import('../../core/nightEffect/NightEffect.component'));

//endregion -------------------- dynamic imports --------------------

/**
 * @todo change the SMM1 & SMM2 yes/no result into something different like the sounds or other things
 * @fixme if the yes/no is still in used after the change, use Texts.renderYesNoComponent() instead.
 */
export abstract class ThemeAppOption
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =                  new class ThemeAppOption_Image extends ThemeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = ThemeAppOption.CALLBACK_TO_GET_ENUMERATION();

                return [
                    enumeration.renderSingleComponent(false),
                    enumeration.endlessMarioImagePath == null ? EMPTY_REACT_ELEMENT :
                        <Image source={enumeration.endlessMarioImagePath} fallbackName={`Endless Mario Image (${enumeration.englishName})`}/>,
                ];
            };
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,
                subHeaders: [
                    {key: 'image-empty', element: EMPTY_REACT_ELEMENT,},
                    {key: 'image-endless-mario', element: <>--Endless Mario--</>},
                ],
            };
        }

    }();
    public static readonly NAME =                   new class ThemeAppOptionName extends ThemeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => CommonOptions.get.getNameContent(ThemeAppOption.CALLBACK_TO_GET_ENUMERATION());
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return CommonOptions.get.nameHeader;
        }

    }();
    public static readonly COURSE_AND_WORLD_THEME = new class ThemeAppOption_CourseAndWorldTheme extends ThemeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = ThemeAppOption.CALLBACK_TO_GET_ENUMERATION();
                const reference = enumeration.reference;

                return [
                    <YesOrNoResultTextComponent boolean={reference.isInCourseTheme}/>,
                    <YesOrNoResultTextComponent boolean={reference.isInWorldTheme}/>,
                ];
            };
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'theme', element: <>--course & world theme--</>,
                subHeaders: [
                    {
                        key: 'isInTheCourseTheme', element: <Image source={`/${BASE_PATH}/theme/Course theme.tiff`} fallbackName="Course theme"/>,
                        tooltip: {namespace: 'gameContent', translationKey: 'Is in the course theme',},
                    },
                    {
                        key: 'isInTheWorldTheme', element: <Image source={`/${BASE_PATH}/theme/World theme.tiff`} fallbackName="World theme"/>,
                        tooltip: {namespace: 'gameContent', translationKey: 'Is in the world theme',},
                    },
                ],
            };
        }
    }();
    public static readonly GAME =                   new class ThemeAppOption_Game extends ThemeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = ThemeAppOption.CALLBACK_TO_GET_ENUMERATION();
                const reference = enumeration.reference;

                return [
                    <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMaker1}/>,
                    <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMakerFor3DS}/>,
                    <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMaker2}/>,
                ];
            };
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,
                subHeaders: [
                    {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'isInSuperMarioMakerForNintendo3DS', alt: Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.englishName, path: Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.imagePath,},
                    {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            };
        }

    }();
    public static readonly NIGHT_EFFECT =           new class ThemeAppOption_NightEffect extends ThemeAppOption {

        protected override _createContentOption(): PossibleOptionWithContent {
            return () => {
                const enumeration = ThemeAppOption.CALLBACK_TO_GET_ENUMERATION();
                const {courseTheme,} = enumeration.reference;

                return <NightEffectComponent theme={courseTheme}/>;
            };
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return {
                key: 'effect', element: <Image source={Times.NIGHT.imagePath} fallbackName={`effect - ${Times.NIGHT.englishName}`}/>,
                tooltip: {
                    namespace: 'gameContent', translationKey: 'Effect (night)',
                    replace: {night: '--night effect name--',},//TODO add translation for the night effect name
                    // replace: {night: translation(Times.NIGHT.englishName).toLowerCase(),},
                },
            };
        }

    }();

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: ThemeAppOption;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link ThemeAppOption} and get by {@link EveryThemesApp}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => Themes;

    #appOptionWithContent?: AppOptionWithContent;
    #appOptionWithTable?: AppOptionWithTable;

    //endregion -------------------- Attributes --------------------

    private constructor() {
        super();
    }

    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(): PossibleOptionWithContent;

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(this._createContentOption(),);
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): PossibleOptionWithTable;

    private get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),);
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<ThemeAppOption> {
        return ThemeAppOption;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends ThemeAppOption = ThemeAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): ThemeAppOption
    public static getValue(value: PossibleValue,): | ThemeAppOption | null
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

type PossibleOptionWithContent = (() => PossibleRenderReactElement);
type PossibleOptionWithTable = SingleHeaderContent;
