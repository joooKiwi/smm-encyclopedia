import {lazy} from 'react';

import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundEffectAppOption.types';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperty';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component';
import {CommonOptions}                 from './CommonOptions';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {Enum}                          from '../../util/enum/Enum';
import {Games}                         from '../../core/game/Games';
import {SoundEffects}                  from '../../core/soundEffect/SoundEffects';
import {SoundEffectCategories}         from '../../core/soundEffectCategory/SoundEffectCategories';

//region -------------------- dynamic imports --------------------

const SoundEffectComponent = lazy(() => import( '../../core/soundEffect/SoundEffect.component'));

//endregion -------------------- dynamic imports --------------------

export abstract class SoundEffectAppOption
    extends Enum<Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    public static readonly GAME =             new class GameStyleAppOption_Game extends SoundEffectAppOption {

        protected override _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumerable = SoundEffectAppOption.CALLBACK_TO_GET_ENUMERATION();

                return [
                    SoundEffectAppOption.renderSMM1And3DSImage(enumerable),
                    SoundEffectAppOption.renderSMM2Image(enumerable),
                ];
            };
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.gameHeaderWithMainGames;
        }

    }();
    public static readonly NAME =             new class GameStyleAppOption_Name extends SoundEffectAppOption {

        protected override _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumeration = SoundEffectAppOption.CALLBACK_TO_GET_ENUMERATION();

                return CommonOptions.get.getNameContent(enumeration);
            };
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader;
        }

    }();
    public static readonly CATEGORY =         new class GameStyleAppOption_Category extends SoundEffectAppOption {

        protected override _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumerable = SoundEffectAppOption.CALLBACK_TO_GET_ENUMERATION(),
                    reference = enumerable.reference;

                return CommonOptions.get.getCategoryContent(enumerable, () => SoundEffectCategories.getValue(reference.categoryEnglish)!.imagePath,);
            };
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.categoryHeader;
        }

    }();
    public static readonly PLAYER_BEHAVIOUR = new class GameStyleAppOption_PlayerBehaviour extends SoundEffectAppOption {

        protected override _createContentOption(): () => PossibleRenderReactElement {
            return () => {
                const enumerable = SoundEffectAppOption.CALLBACK_TO_GET_ENUMERATION(),
                    reference = enumerable.reference;

                return <>--{reference.translationKey}--</>;
            };
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'player behaviour', element: <>--Player behaviour--</>/*<GameContentTranslationComponent translationKey="Player behaviour"/>*/,};
        }

    }();

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: SoundEffectAppOption;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EveryEntitiesApp} and get by {@link EntityAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => SoundEffects;

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

    public static renderSMM1And3DSImage(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference;

        return reference.isInSuperMarioMaker1 ? <SoundEffectComponent reference={enumerable} name={reference} game={Games.SUPER_MARIO_MAKER_1}/> : EMPTY_REACT_ELEMENT;
    }

    public static renderSMM2Image(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference;

        return reference.isInSuperMarioMaker2 ? <SoundEffectComponent reference={enumerable} name={reference} game={Games.SUPER_MARIO_MAKER_2}/> : EMPTY_REACT_ELEMENT;
    }

    protected abstract _createContentOption(): () => PossibleRenderReactElement;

    protected get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(this._createContentOption(),);
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent;

    protected get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),);
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<SoundEffectAppOption> {
        return SoundEffectAppOption;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends SoundEffectAppOption = SoundEffectAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): SoundEffectAppOption
    public static getValue(value: PossibleValue,): | SoundEffectAppOption | null
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
