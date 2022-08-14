import {lazy} from 'react';

import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './GameStyleAppOption.types';
import type {GameStyles}                                                                                                                                                            from '../../core/gameStyle/GameStyles';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperty';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component';
import {CommonOptions}                 from './CommonOptions';
import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {Enum}                          from '../../util/enum/Enum';
import {ProjectLanguages}              from '../../lang/ProjectLanguages';
import {Themes}                        from '../../core/theme/Themes';
import {Times}                         from '../../core/time/Times';

//region -------------------- dynamic imports --------------------

const NightEffectComponent =       lazy(() => import( '../../core/nightEffect/NightEffect.component'));
const YesOrNoResultTextComponent = lazy(() => import( '../tools/text/YesOrNoResultTextComponent'));

//endregion -------------------- dynamic imports --------------------

export abstract class GameStyleAppOption
    extends Enum<Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =             new class GameStyleAppOption_Images extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,): PossibleRenderReactElement {
            return enumeration.renderSingleComponent;
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,};
        }

    }();
    public static readonly NAME =              new class GameStyleAppOption_Name extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,): PossibleRenderReactElement {
            return CommonOptions.get.getNameContent(enumeration);
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader;
        }

    }();
    public static readonly GAME =              new class GameStyleAppOption_Game extends GameStyleAppOption {

        protected override _createContentOption({reference,}: GameStyles,): PossibleRenderReactElement {
            return [
                <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMaker1}/>,
                <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMakerFor3DS}/>,
                <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMaker2}/>,
            ];
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.gameHeaderWithAllGames;
        }

    }();
    public static readonly NIGHT_DESERT_WIND = new class GameStyleAppOption_NightDesertWind extends GameStyleAppOption {

        protected override _createContentOption({reference,}: GameStyles,): PossibleRenderReactElement {
                return <NightEffectComponent gameStyle={reference}/>;
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'nightDesertWind',
                element: <div className="night-desert-wind-effect-container">{Themes.DESERT.renderSingleComponent(false)}{Times.NIGHT.renderSingleComponent}</div>,
                tooltip: {
                    namespace: 'gameContent', translationKey: 'Wind effect (night desert)',
                    replace: {
                        night: '--night--',//TODO add night reference
                        desert: ProjectLanguages.currentLanguage.get(Themes.DESERT.reference)!.toLowerCase(),
                    },
                },
            };
        }

    }();

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: GameStyleAppOption;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EveryEntitiesApp} and get by {@link EntityAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => GameStyles;

    #appOptionWithContent?: AppOptionWithContent;
    #appOptionWithTable?: AppOptionWithTable;

    //endregion -------------------- Fields --------------------

    private constructor() {
        super();
    }

    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: GameStyles,): PossibleRenderReactElement;

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION()),);
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent;

    private get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),);
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<GameStyleAppOption> {
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
