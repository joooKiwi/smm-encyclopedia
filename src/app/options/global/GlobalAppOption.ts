import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {GlobalAppState}                          from 'app/AppStates.types'
import type {Names, Ordinals, PossibleAppOptionValue} from 'app/options/global/GlobalAppOption.types'

import {AbstractAppOption} from 'app/options/AbstractAppOption'
import {ImageAnimations}   from 'app/options/global/ImageAnimations'
import {Images}            from 'app/options/global/Images'
import {GlobalThemeOption} from 'app/options/global/GlobalThemeOption'
import {Sounds}            from 'app/options/global/Sounds'
import {Texts}             from 'app/options/global/Texts'

/**
 * @todo Change to a different kind of option (that can work with the url directly)
 */
export abstract class GlobalAppOption<T extends PossibleAppOptionValue = PossibleAppOptionValue, >
    extends AbstractAppOption<T, GlobalAppState, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGES =           new class GlobalAppOption_Images extends GlobalAppOption<Images> {}(Images.YES,)
    public static readonly IMAGE_ANIMATIONS = new class GlobalAppOption_Images extends GlobalAppOption<ImageAnimations> {}(ImageAnimations.YES,)
    public static readonly SOUNDS =           new class GlobalAppOption_Sounds extends GlobalAppOption<Sounds> {}(Sounds.YES,)
    public static readonly TEXTS =            new class GlobalAppOption_Sounds extends GlobalAppOption<Texts> {}(Texts.YES,)

    public static readonly SMM1 =             new class GlobalAppOption_SMM1 extends GlobalAppOption<boolean> {}(false,)
    public static readonly SMM3DS =           new class GlobalAppOption_SMM3DS extends GlobalAppOption<boolean> {}(false,)
    public static readonly SMM2 =             new class GlobalAppOption_SMM2 extends GlobalAppOption<boolean> {}(true,)

    public static readonly SMB =              new class GlobalAppOption_SMB extends GlobalAppOption<boolean> {}(true,)
    public static readonly SMB3 =             new class GlobalAppOption_SMB3 extends GlobalAppOption<boolean> {}(true,)
    public static readonly SMW =              new class GlobalAppOption_SMW extends GlobalAppOption<boolean> {}(true,)
    public static readonly NSMBU =            new class GlobalAppOption_NSMBU extends GlobalAppOption<boolean> {}(true,)
    public static readonly SM3DW =            new class GlobalAppOption_SM3DW extends GlobalAppOption<boolean> {}(true,)

    public static readonly GROUND =           new class GlobalAppOption_Ground extends GlobalAppOption<GlobalThemeOption> {}(GlobalThemeOption.ALL,)
    public static readonly UNDERGROUND =      new class GlobalAppOption_Underground extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly UNDERWATER =       new class GlobalAppOption_Underwater extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly DESERT =           new class GlobalAppOption_Desert extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly SNOW =             new class GlobalAppOption_Snow extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly SKY =              new class GlobalAppOption_Sky extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly FOREST =           new class GlobalAppOption_Forest extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly GHOST_HOUSE =      new class GlobalAppOption_GhostHouse extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly AIRSHIP =          new class GlobalAppOption_Airship extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)
    public static readonly CASTLE =           new class GlobalAppOption_Castle extends GlobalAppOption<GlobalThemeOption>{}(GlobalThemeOption.ALL,)

    public static readonly DAY =              new class GlobalAppOption_Day extends GlobalAppOption<boolean> {}(true,)
    public static readonly NIGHT =            new class GlobalAppOption_Night extends GlobalAppOption<boolean> {}(true,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: GlobalAppOption

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    //endregion -------------------- Fields --------------------

    private constructor(defaultValue: T,) {
        super(defaultValue,)
    }

    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return GlobalAppOption
    }

    public static getValue(value: PossibleValueByEnumerable<GlobalAppOption>,): GlobalAppOption {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<GlobalAppOption> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<GlobalAppOption> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}
