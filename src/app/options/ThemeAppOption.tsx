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
import {CommonOptions}                 from './CommonOptions';
import ContentTranslationComponent     from '../../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {Enum}                          from '../../util/enum/Enum';
import {Times}                         from '../../core/time/Times';

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
            return () => {
                const enumerable = ThemeAppOption.CALLBACK_TO_GET_ENUMERATION();

                return <div className="nameWithContent-container">
                    <div className="col-10">
                        {CommonOptions.get.getGameContent(enumerable)}
                        {CommonOptions.get.getNameContent(enumerable)}
                    </div>
                    <div className="col-2">{CommonOptions.get.getThemeContent(enumerable)}</div>
                </div>;
            };
        }

        protected override _createTableHeaderOption(): PossibleOptionWithTable {
            return CommonOptions.get.nameHeader;
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
    //region -------------------- Enum fields --------------------

    static [index: number]: ThemeAppOption;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link ThemeAppOption} and get by {@link EveryThemesApp}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => Themes;

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
