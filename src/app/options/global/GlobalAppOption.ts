import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAppOptionValue, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './GlobalAppOption.types';
import type {GlobalAppState}                                                                                                                                                                                from '../../AppStates.types';
import type {StaticReference}                                                                                                                                                                               from '../../../util/enum/Enum.types';

import {AbstractAppOption} from '../AbstractAppOption';
import {Enum}              from '../../../util/enum/Enum';
import {ImageAnimations}   from './ImageAnimations';
import {Images}            from './Images';
import {GlobalThemeOption} from './GlobalThemeOption';
import {Sounds}            from './Sounds';
import {Texts}             from './Texts';

/**
 * @todo Change to a different kind of option (that can work with the url directly)
 */
export abstract class GlobalAppOption<T extends PossibleAppOptionValue = PossibleAppOptionValue, >
    extends AbstractAppOption<T, GlobalAppState, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGES =           new class GlobalAppOption_Images extends GlobalAppOption<Images> {}(Images.YES,);
    public static readonly IMAGE_ANIMATIONS = new class GlobalAppOption_Images extends GlobalAppOption<ImageAnimations> {}(ImageAnimations.YES,);
    public static readonly SOUNDS =           new class GlobalAppOption_Sounds extends GlobalAppOption<Sounds> {}(Sounds.YES,);
    public static readonly TEXTS =           new class GlobalAppOption_Sounds extends GlobalAppOption<Texts> {}(Texts.YES,);

    public static readonly SMM1 =             new class GlobalAppOption_SMM1 extends GlobalAppOption<boolean> {}(false,);
    public static readonly SMM3DS =           new class GlobalAppOption_SMM3DS extends GlobalAppOption<boolean> {}(false,);
    public static readonly SMM2 =             new class GlobalAppOption_SMM2 extends GlobalAppOption<boolean> {}(true,);

    public static readonly SMB =              new class GlobalAppOption_SMB extends GlobalAppOption<boolean> {}(true,);
    public static readonly SMB3 =             new class GlobalAppOption_SMB3 extends GlobalAppOption<boolean> {}(true,);
    public static readonly SMW =              new class GlobalAppOption_SMW extends GlobalAppOption<boolean> {}(true,);
    public static readonly NSMBU =            new class GlobalAppOption_NSMBU extends GlobalAppOption<boolean> {}(true,);
    public static readonly SM3DW =            new class GlobalAppOption_SM3DW extends GlobalAppOption<boolean> {}(true,);

    public static readonly GROUND =           new class GlobalAppOption_Ground extends GlobalAppOption<GlobalThemeOption> {}(GlobalThemeOption.ALL,);
    public static readonly UNDERGROUND =      new class GlobalAppOption_Underground extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly UNDERWATER =       new class GlobalAppOption_Underwater extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly DESERT =           new class GlobalAppOption_Desert extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly SNOW =             new class GlobalAppOption_Snow extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly SKY =              new class GlobalAppOption_Sky extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly FOREST =           new class GlobalAppOption_Forest extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly GHOST_HOUSE =      new class GlobalAppOption_GhostHouse extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly AIRSHIP =          new class GlobalAppOption_Airship extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);
    public static readonly CASTLE =           new class GlobalAppOption_Castle extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,);

    public static readonly DAY =              new class GlobalAppOption_Day extends GlobalAppOption<boolean> {}(true,);
    public static readonly NIGHT =            new class GlobalAppOption_Night extends GlobalAppOption<boolean> {}(true,);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: GlobalAppOption;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    //endregion -------------------- Attributes --------------------

    private constructor(defaultValue: T,) {
        super(defaultValue,);
    }

    //region -------------------- Getter methods --------------------

    public static get createDefaultState(): GlobalAppState {
        return {
        };
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<GlobalAppOption> {
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
