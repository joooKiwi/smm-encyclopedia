import type {AppOptionStatic}                                                                                                                                                                               from '../AppOption';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAppOptionValue, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './GlobalAppOption.types';
import type {GlobalAppState}                                                                                                                                                                                from '../../AppStates.types';
import type {ReactComponentWithState}                                                                                                                                                                       from '../../../util/react/ReactComponent';
import type {StaticReference}                                                                                                                                                                               from '../../../util/enum/Enum.types';

import {AbstractAppOption} from '../AbstractAppOption';
import {Enum}              from '../../../util/enum/Enum';
import {ImageAnimations}   from './ImageAnimations';
import {Images}            from './Images';
import {GlobalThemeOption} from './GlobalThemeOption';
import {Sounds}            from './Sounds';
import {Texts}             from './Texts';

export abstract class GlobalAppOption<T extends PossibleAppOptionValue = PossibleAppOptionValue, >
    extends AbstractAppOption<T, GlobalAppState, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ IMAGES;
    public static/* readonly*/ IMAGE_ANIMATIONS;
    public static/* readonly*/ SOUNDS;
    public static/* readonly*/ TEXTS;

    public static/* readonly*/ SMM1;
    public static/* readonly*/ SMM3DS;
    public static/* readonly*/ SMM2;

    public static/* readonly*/ SMB;
    public static/* readonly*/ SMB3;
    public static/* readonly*/ SMW;
    public static/* readonly*/ NSMBU;
    public static/* readonly*/ SM3DW;

    public static/* readonly*/ GROUND;
    public static/* readonly*/ UNDERGROUND;
    public static/* readonly*/ UNDERWATER;
    public static/* readonly*/ DESERT;
    public static/* readonly*/ SNOW;
    public static/* readonly*/ SKY;
    public static/* readonly*/ FOREST;
    public static/* readonly*/ GHOST_HOUSE;
    public static/* readonly*/ AIRSHIP;
    public static/* readonly*/ CASTLE;

    public static/* readonly*/ DAY;
    public static/* readonly*/ NIGHT;

    static {
        this.IMAGES =           new class GlobalAppOption_Images extends GlobalAppOption<Images> {

            protected _get(state: GlobalAppState,): Images {
                return state.images;
            }

            protected _set(nextState: GlobalAppState, value: Images,): void {
                nextState.images = value;
            }

        }(Images.YES,);
        this.IMAGE_ANIMATIONS = new class GlobalAppOption_Images extends GlobalAppOption<ImageAnimations> {

            protected _get(state: GlobalAppState,): ImageAnimations {
                return state.imageAnimations;
            }

            protected _set(nextState: GlobalAppState, value: ImageAnimations,): void {
                nextState.imageAnimations = value;
            }

        }(ImageAnimations.YES,);
        this.SOUNDS =           new class GlobalAppOption_Sounds extends GlobalAppOption<Sounds> {

            protected _get(state: GlobalAppState,): Sounds {
                return state.sounds;
            }

            protected _set(nextState: GlobalAppState, value: Sounds,): void {
                nextState.sounds = value;
            }

        }(Sounds.YES,);
        this.TEXTS =           new class GlobalAppOption_Sounds extends GlobalAppOption<Texts> {

            protected _get(state: GlobalAppState,): Texts {
                return state.texts;
            }

            protected _set(nextState: GlobalAppState, value: Texts,): void {
                nextState.texts = value;
            }

        }(Texts.YES,);

        this.SMM1 =             new class GlobalAppOption_SMM1 extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.game['1'];
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.game['1'] = value;
            }

        }(false,);
        this.SMM3DS =           new class GlobalAppOption_SMM3DS extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.game['3DS'];
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.game['3DS'] = value;
            }

        }(false,);
        this.SMM2 =             new class GlobalAppOption_SMM2 extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.game['2'];
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.game['2'] = value;
            }

        }(true,);

        this.SMB =              new class GlobalAppOption_SMB extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.gameStyle.SMB;
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.gameStyle.SMB = value;
            }

        }(true,);
        this.SMB3 =             new class GlobalAppOption_SMB3 extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.gameStyle.SMB3;
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.gameStyle.SMB3 = value;
            }

        }(true,);
        this.SMW =              new class GlobalAppOption_SMW extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.gameStyle.SMW;
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.gameStyle.SMW = value;
            }

        }(true,);
        this.NSMBU =            new class GlobalAppOption_NSMBU extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.gameStyle.NSMBU;
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.gameStyle.NSMBU = value;
            }

        }(true,);
        this.SM3DW =            new class GlobalAppOption_SM3DW extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.gameStyle.SM3DW;
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.gameStyle.SM3DW = value;
            }

        }(true,);

        this.GROUND =           new class GlobalAppOption_Ground extends GlobalAppOption<GlobalThemeOption> {

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.ground;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.ground = value;
            }

        }(GlobalThemeOption.ALL,);
        this.UNDERGROUND =      new class GlobalAppOption_Underground extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.underground;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.underground = value;
            }

        }(GlobalThemeOption.ALL,);
        this.UNDERWATER =       new class GlobalAppOption_Underwater extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.underwater;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.underwater = value;
            }

        }(GlobalThemeOption.ALL,);
        this.DESERT =           new class GlobalAppOption_Desert extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.desert;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.desert = value;
            }

        }(GlobalThemeOption.ALL,);
        this.SNOW =             new class GlobalAppOption_Snow extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.snow;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.snow = value;
            }

        }(GlobalThemeOption.ALL,);
        this.SKY =              new class GlobalAppOption_Sky extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.sky;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.sky = value;
            }

        }(GlobalThemeOption.ALL,);
        this.FOREST =           new class GlobalAppOption_Forest extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.forest;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.forest = value;
            }

        }(GlobalThemeOption.ALL,);
        this.GHOST_HOUSE =      new class GlobalAppOption_GhostHouse extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.ghostHouse;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.ghostHouse = value;
            }

        }(GlobalThemeOption.ALL,);
        this.AIRSHIP =          new class GlobalAppOption_Airship extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.airship;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.airship = value;
            }

        }(GlobalThemeOption.ALL,);
        this.CASTLE =           new class GlobalAppOption_Castle extends GlobalAppOption<GlobalThemeOption>{

            protected _get(state: GlobalAppState,): GlobalThemeOption {
                return state.theme.castle;
            }

            protected _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
                nextState.theme.castle = value;
            }

        }(GlobalThemeOption.ALL,);

        this.DAY =              new class GlobalAppOption_Day extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.time.day;
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.time.day = value;
            }

        }(true,);
        this.NIGHT =            new class GlobalAppOption_Night extends GlobalAppOption<boolean> {

            protected _get(state: GlobalAppState,): boolean {
                return state.time.night;
            }

            protected _set(nextState: GlobalAppState, value: boolean,): void {
                nextState.time.night = value;
            }

        }(true,);
    }

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
            imageAnimations:this.IMAGE_ANIMATIONS._lastValueRetrieved,
            sounds: this.SOUNDS._lastValueRetrieved,
            texts: this.TEXTS._lastValueRetrieved,
            game: {
                1: this.SMM1._lastValueRetrieved,
                '3DS': this.SMM3DS._lastValueRetrieved,
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

    //region -------------------- Enum value methods --------------------

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