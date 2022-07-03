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

    public static readonly IMAGES =           new class GlobalAppOption_Images extends GlobalAppOption<Images> {

        protected override _get(state: GlobalAppState,): Images {
            return state.images;
        }

        protected override _set(nextState: GlobalAppState, value: Images,): void {
            nextState.images = value;
        }

    }(Images.YES,);
    public static readonly IMAGE_ANIMATIONS = new class GlobalAppOption_Images extends GlobalAppOption<ImageAnimations> {

        protected override _get(state: GlobalAppState,): ImageAnimations {
            return state.imageAnimations;
        }

        protected override _set(nextState: GlobalAppState, value: ImageAnimations,): void {
            nextState.imageAnimations = value;
        }

    }(ImageAnimations.YES,);
    public static readonly SOUNDS =           new class GlobalAppOption_Sounds extends GlobalAppOption<Sounds> {

        protected override _get(state: GlobalAppState,): Sounds {
            return state.sounds;
        }

        protected override _set(nextState: GlobalAppState, value: Sounds,): void {
            nextState.sounds = value;
        }

    }(Sounds.YES,);
    public static readonly TEXTS =           new class GlobalAppOption_Sounds extends GlobalAppOption<Texts> {

        protected override _get(state: GlobalAppState,): Texts {
            return state.texts;
        }

        protected override _set(nextState: GlobalAppState, value: Texts,): void {
            nextState.texts = value;
        }

    }(Texts.YES,);

    public static readonly SMM1 =             new class GlobalAppOption_SMM1 extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.game['1'];
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.game['1'] = value;
        }

    }(false,);
    public static readonly SMM3DS =           new class GlobalAppOption_SMM3DS extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.game['3DS'];
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.game['3DS'] = value;
        }

    }(false,);
    public static readonly SMM2 =             new class GlobalAppOption_SMM2 extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.game['2'];
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.game['2'] = value;
        }

    }(true,);

    public static readonly SMB =              new class GlobalAppOption_SMB extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SMB;
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SMB = value;
        }

    }(true,);
    public static readonly SMB3 =             new class GlobalAppOption_SMB3 extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SMB3;
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SMB3 = value;
        }

    }(true,);
    public static readonly SMW =              new class GlobalAppOption_SMW extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SMW;
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SMW = value;
        }

    }(true,);
    public static readonly NSMBU =            new class GlobalAppOption_NSMBU extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.gameStyle.NSMBU;
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.NSMBU = value;
        }

    }(true,);
    public static readonly SM3DW =            new class GlobalAppOption_SM3DW extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.gameStyle.SM3DW;
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.gameStyle.SM3DW = value;
        }

    }(true,);

    public static readonly GROUND =           new class GlobalAppOption_Ground extends GlobalAppOption<GlobalThemeOption> {

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.ground;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.ground = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly UNDERGROUND =      new class GlobalAppOption_Underground extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.underground;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.underground = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly UNDERWATER =       new class GlobalAppOption_Underwater extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.underwater;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.underwater = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly DESERT =           new class GlobalAppOption_Desert extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.desert;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.desert = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly SNOW =             new class GlobalAppOption_Snow extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.snow;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.snow = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly SKY =              new class GlobalAppOption_Sky extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.sky;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.sky = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly FOREST =           new class GlobalAppOption_Forest extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.forest;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.forest = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly GHOST_HOUSE =      new class GlobalAppOption_GhostHouse extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.ghostHouse;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.ghostHouse = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly AIRSHIP =          new class GlobalAppOption_Airship extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.airship;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.airship = value;
        }

    }(GlobalThemeOption.ALL,);
    public static readonly CASTLE =           new class GlobalAppOption_Castle extends GlobalAppOption<GlobalThemeOption>{

        protected override _get(state: GlobalAppState,): GlobalThemeOption {
            return state.theme.castle;
        }

        protected override _set(nextState: GlobalAppState, value: GlobalThemeOption,): void {
            nextState.theme.castle = value;
        }

    }(GlobalThemeOption.ALL,);

    public static readonly DAY =              new class GlobalAppOption_Day extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.time.day;
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
            nextState.time.day = value;
        }

    }(true,);
    public static readonly NIGHT =            new class GlobalAppOption_Night extends GlobalAppOption<boolean> {

        protected override _get(state: GlobalAppState,): boolean {
            return state.time.night;
        }

        protected override _set(nextState: GlobalAppState, value: boolean,): void {
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

    protected override get _static(): StaticReference<GlobalAppOption> & AppOptionStatic<GlobalAppState> {
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
