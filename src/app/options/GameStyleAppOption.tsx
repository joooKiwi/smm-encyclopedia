import {lazy} from 'react';

import type {AppOptionStatic}                                                                                                                                                       from './AppOption';
import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './GameStyleAppOption.types';
import type {GameStyleAppStates}                                                                                                                                                    from '../AppStates.types';
import type {GameStyles}                                                                                                                                                            from '../../core/gameStyle/GameStyles';
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
import {Enum}                          from '../../util/enum/Enum';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Games}                         from '../../core/game/Games';
import {ProjectLanguages}              from '../../lang/ProjectLanguages';
import {Themes}                        from '../../core/theme/Themes';
import {Times}                         from '../../core/time/Times';

//region -------------------- dynamic imports --------------------

const NightEffectComponent =       lazy(() => import( '../../core/nightEffect/NightEffect.component'));
const YesOrNoResultTextComponent = lazy(() => import( '../tools/text/YesOrNoResultTextComponent'));

//endregion -------------------- dynamic imports --------------------

export abstract class GameStyleAppOption
    extends AbstractAppOption<boolean, GameStyleAppStates, Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =             new class GameStyleAppOption_Images extends GameStyleAppOption {

        protected override _get(state: GameStyleAppStates,): boolean {
            return state.display.section.image;
        }

        protected override _set(nextState: GameStyleAppStates, value: boolean,): void {
            nextState.display.section.image = value;
        }

        protected override get _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumerable = GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION();
                return enumerable.renderSingleComponent;
            };
        }

        protected override get _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,}
        }

    }(true,);
    public static readonly NAME =              new class GameStyleAppOption_Name extends GameStyleAppOption {

        protected override _get(state: GameStyleAppStates,): boolean {
            return state.display.section.name;
        }

        protected override _set(nextState: GameStyleAppStates, value: boolean,): void {
            nextState.display.section.name = value;
        }

        protected override get _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumeration = GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION();

                return CommonOptions.get.getNameContent(enumeration)
            };
        }

        protected override get _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader;
        }

    }(true,);
    public static readonly GAME =              new class GameStyleAppOption_Game extends GameStyleAppOption {

        protected override _get(state: GameStyleAppStates,): boolean {
            return state.display.section.game;
        }

        protected override _set(nextState: GameStyleAppStates, value: boolean,) {
            nextState.display.section.game = value;
        }

        protected override get _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumerable = GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION();
                const gameStyle = enumerable.reference;
                return [
                    <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker1}/>,
                    <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMakerFor3DS}/>,
                    <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker2}/>,
                ];
            };
        }

        protected override get _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,
                subHeaders: [
                    {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'isInSuperMarioMakerFor3DS', alt: Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.englishName, path: Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS.imagePath,},
                    {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            }
        }

    }(true,);
    public static readonly NIGHT_DESERT_WIND = new class GameStyleAppOption_NightDesertWind extends GameStyleAppOption {

        protected override _get(state: GameStyleAppStates,): boolean {
            return state.display.section.nightDesertWind;
        }

        protected override _set(nextState: GameStyleAppStates, value: boolean,) {
            nextState.display.section.nightDesertWind = value;
        }

        protected override get _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumerable = GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION();
                const gameStyle = enumerable.reference;

                return <NightEffectComponent gameStyle={gameStyle}/>;
            };
        }

        protected override get _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'nightDesertWind',
                element: <div className="night-desert-wind-effect-container">{Themes.DESERT.renderSingleComponent(false)}{Times.NIGHT.renderSingleComponent}</div>,
                tooltip: {
                    namespace: 'gameContent', translationKey: 'Wind effect (night desert)',
                    replace: {
                        night: '--night--',//TODO add night reference
                        desert: ProjectLanguages.currentLanguage.get(Themes.DESERT.reference[0])!.toLowerCase(),
                    },
                },
            }
        }

    }(true,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: GameStyleAppOption;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE: ReactComponentWithState<GameStyleAppStates>;
    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EveryEntitiesApp} and get by {@link EntityAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => GameStyles;

    #appOptionWithContent?: AppOptionWithContent;
    #appOptionWithTable?: AppOptionWithTable;

    //endregion -------------------- Attributes --------------------

    private constructor(defaultValue: boolean,) {
        super(defaultValue,);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE(): ReactComponentWithState<GameStyleAppStates> {
        return this.#REFERENCE;
    }

    public static set REFERENCE(value: ReactComponentWithState<GameStyleAppStates>,) {
        this.#REFERENCE = value;
    }

    public static get createDefaultState(): GameStyleAppStates {
        return {
            display: {
                section: {
                    image: GameStyleAppOption.IMAGE._lastValueRetrieved,
                    name: GameStyleAppOption.NAME._lastValueRetrieved,
                    game: GameStyleAppOption.GAME._lastValueRetrieved,
                    nightDesertWind: GameStyleAppOption.NIGHT_DESERT_WIND._lastValueRetrieved,
                },
            },
        };
    }


    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract get _createContentOption(): () => PossibleRenderReactElement;

    protected get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(this._createContentOption,);
    }

    public get renderContent(): readonly ReactElement[] {
        return this.get
            ? this.__appOptionWithContent.renderContent
            : EMPTY_ARRAY;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract get _createTableHeaderOption(): SingleHeaderContent;

    protected get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption,);
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.get
            ? this.__appOptionWithTable.renderTableHeader
            : null;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<GameStyleAppOption> & AppOptionStatic<GameStyleAppStates> {
        return GameStyleAppOption;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends GameStyleAppOption = GameStyleAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): GameStyleAppOption
    public static getValue(value: PossibleValue,): | GameStyleAppOption | null
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
