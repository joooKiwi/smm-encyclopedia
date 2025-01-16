import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleAppOptionValue} from 'app/options/global/GlobalAppOption.types'
import type {ReactState}        from 'util/react/ReactState'

import {isInProduction}    from 'variables'
import {ImageAnimations}   from 'app/options/global/ImageAnimations'
import {Images}            from 'app/options/global/Images'
import {GlobalThemeOption} from 'app/options/global/GlobalThemeOption'
import {Sounds}            from 'app/options/global/Sounds'
import {Texts}             from 'app/options/global/Texts'

/**
 * @todo Change to a different kind of option (that can work with the url directly)
 * @deprecated This class has been partially implemented in global ways (in the url)
 */
export class GlobalAppOption<T extends PossibleAppOptionValue = PossibleAppOptionValue, >
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGES =           new GlobalAppOption(Images.YES,)
    public static readonly IMAGE_ANIMATIONS = new GlobalAppOption(ImageAnimations.YES,)
    public static readonly SOUNDS =           new GlobalAppOption(Sounds.YES,)
    public static readonly TEXTS =            new GlobalAppOption(Texts.YES,)

    // public static readonly SMM1 =             new GlobalAppOption(false,)
    // public static readonly SMM3DS =           new GlobalAppOption(false,)
    // public static readonly SMM2 =             new GlobalAppOption(true,)
    //
    // public static readonly SMB =              new GlobalAppOption(true,)
    // public static readonly SMB3 =             new GlobalAppOption(true,)
    // public static readonly SMW =              new GlobalAppOption(true,)
    // public static readonly NSMBU =            new GlobalAppOption(true,)
    // public static readonly SM3DW =            new GlobalAppOption(true,)

    public static readonly GROUND =           new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly UNDERGROUND =      new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly UNDERWATER =       new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly DESERT =           new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly SNOW =             new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly SKY =              new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly FOREST =           new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly GHOST_HOUSE =      new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly AIRSHIP =          new GlobalAppOption(GlobalThemeOption.ALL,)
    public static readonly CASTLE =           new GlobalAppOption(GlobalThemeOption.ALL,)

    // public static readonly DAY =              new GlobalAppOption(true,)
    // public static readonly NIGHT =            new GlobalAppOption(true,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<GlobalAppOption, typeof GlobalAppOption> = class CompanionEnum_GlobalAppOption
        extends CompanionEnum<GlobalAppOption, typeof GlobalAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_GlobalAppOption

        private constructor() {
            super(GlobalAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_GlobalAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #defaultValue

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(defaultValue: T,) {
        super()
        this.#defaultValue = defaultValue
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    /**@deprecated The method should no longer be used*/public get get(): T {
        if (!isInProduction)
            console.warn(`The get method in "${this.constructor.name}" is deprecated.`)
        return this.#defaultValue
    }


    /**@deprecated The method should no longer be used*/public set(value: T,): this
    /**@deprecated The method should no longer be used*/public set(value: T, nextState: ReactState,): this
    public set(): this {
        if (!isInProduction)
            console.warn(`The set value in "${this.constructor.name}" is deprecated, a new method will be under its way!`)
        return this
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
