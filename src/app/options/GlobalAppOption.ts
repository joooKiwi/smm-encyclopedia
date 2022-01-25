import type {AppOptionStatic}                                                                                                                                                       from './AppOption';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './GlobalAppOption.types';
import type {GlobalAppState, PossibleImageAnimation}                                                                                                                                from '../AppStates.types';
import type {ReactComponentWithState}                                                                                                                                               from '../../util/react/ReactComponent';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AbstractAppOption} from './AbstractAppOption';
import {Enum}              from '../../util/enum/Enum';
import {GlobalThemeOption} from './GlobalThemeOption';


export abstract class GlobalAppOption<T extends | boolean | PossibleImageAnimation | GlobalThemeOption = | boolean | PossibleImageAnimation | GlobalThemeOption, >
    extends AbstractAppOption<T, GlobalAppState, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGES =      new class GlobalAppOption_Images extends GlobalAppOption<PossibleImageAnimation> {

        protected _get(state: GlobalAppState,): PossibleImageAnimation {
            return state.images;
        }

        protected _set(nextState: GlobalAppState, value: PossibleImageAnimation,): void {
            nextState.images = value;
        }

    }(true,);
    public static readonly SOUNDS =      new class GlobalAppOption_Sounds extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.sounds;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.sounds = value;
        }

    }(true,);

    public static readonly SMM1 =        new class GlobalAppOption_SMM1 extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.game['1'];
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.game['1'] = value;
        }

    }(false,);
    public static readonly SMM2 =        new class GlobalAppOption_SMM2 extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.game['2'];
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.game['2'] = value;
        }

    }(true,);

    public static readonly SMB =         new class GlobalAppOption_SMB extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SMB;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SMB = value;
        }

    }(true,);
    public static readonly SMB3 =        new class GlobalAppOption_SMB3 extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SMB3;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SMB3 = value;
        }

    }(true,);
    public static readonly SMW =         new class GlobalAppOption_SMW extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SMW;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SMW = value;
        }

    }(true,);
    public static readonly NSMBU =       new class GlobalAppOption_NSMBU extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.gameStyle.NSMBU;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.NSMBU = value;
        }

    }(true,);
    public static readonly SM3DW =       new class GlobalAppOption_SM3DW extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SM3DW;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SM3DW = value;
        }

    }(true,);

    public static readonly GROUND =      new class GlobalAppOption_Ground extends GlobalAppOption<GlobalThemeOption> {

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.ground;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.ground = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly UNDERGROUND = new class GlobalAppOption_Underground extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.underground;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.underground = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly UNDERWATER =  new class GlobalAppOption_Underwater extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.underwater;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.underwater = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly DESERT =      new class GlobalAppOption_Desert extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.desert;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.desert = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly SNOW =        new class GlobalAppOption_Snow extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.snow;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.snow = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly SKY =         new class GlobalAppOption_Sky extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.sky;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.sky = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly FOREST =      new class GlobalAppOption_Forest extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.forest;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.forest = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly GHOST_HOUSE = new class GlobalAppOption_GhostHouse extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.ghostHouse;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.ghostHouse = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly AIRSHIP =     new class GlobalAppOption_Airship extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.airship;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.airship = value;
        }

    }(new GlobalThemeOption(),);
    public static readonly CASTLE =      new class GlobalAppOption_Castle extends GlobalAppOption<GlobalThemeOption>{

        protected _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.castle;
        }

        protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.castle = value;
        }

    }(new GlobalThemeOption(),);

    public static readonly DAY =         new class GlobalAppOption_Day extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.time.day;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.time.day = value;
        }

    }(true,);
    public static readonly NIGHT =       new class GlobalAppOption_Night extends GlobalAppOption<boolean> {

        protected _get(state: GlobalAppState,): boolean {
            return state.time.night;
        }

        protected _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.time.night = value;
        }

    }(true,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: GlobalAppOption;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE: ReactComponentWithState<GlobalAppState>;

    //endregion -------------------- Attributes --------------------

    private constructor(defaultValue: T,) {
        super(defaultValue,);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE(): ReactComponentWithState<GlobalAppState> {
        return this.#REFERENCE;
    }

    public static set REFERENCE(value: ReactComponentWithState<GlobalAppState>,) {
        this.#REFERENCE = value;
    }

    public static get createDefaultState(): GlobalAppState {
        return {
            images: this.IMAGES._lastValueRetrieved,
            sounds: this.SOUNDS._lastValueRetrieved,
            game: {
                1: this.SMM1._lastValueRetrieved,
                2: this.SMM2._lastValueRetrieved,
            },
            gameStyle: {
                SMB: this.SMB._lastValueRetrieved,
                SMB3: this.SMB3._lastValueRetrieved,
                SMW: this.SMW._lastValueRetrieved,
                NSMBU: this.NSMBU._lastValueRetrieved,
                SM3DW: this.SM3DW._lastValueRetrieved,
            },
            theme: {
                ground: this.GROUND._lastValueRetrieved,
                underground: this.UNDERGROUND._lastValueRetrieved,
                underwater: this.UNDERWATER._lastValueRetrieved,
                desert: this.DESERT._lastValueRetrieved,
                snow: this.SNOW._lastValueRetrieved,
                sky: this.SKY._lastValueRetrieved,
                forest: this.FOREST._lastValueRetrieved,
                ghostHouse: this.GHOST_HOUSE._lastValueRetrieved,
                airship: this.AIRSHIP._lastValueRetrieved,
                castle: this.CASTLE._lastValueRetrieved,
            },
            time: {
                day: this.DAY._lastValueRetrieved,
                night: this.NIGHT._lastValueRetrieved,
            },
        };
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<GlobalAppOption> & AppOptionStatic<GlobalAppState> {
        return GlobalAppOption;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends GlobalAppOption = GlobalAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): GlobalAppOption
    public static getValue(value: PossibleValue,): | GlobalAppOption | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------
}
