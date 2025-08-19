import type {Array, Nullable, NullOr} from '@joookiwi/type'
import {Enum}                         from '@joookiwi/enumerable'

import type {Names, Ordinals}                   from 'core/music/Musics.types'
import type {CompanionEnumByReferenceSingleton} from 'util/enumerable/Singleton.types'

import type {SoundEffects}        from 'core/soundEffect/SoundEffects'
import type {Themes}              from 'core/theme/Themes'
import {Import}                   from 'util/DynamicImporter'
import {CompanionEnumByReference} from 'util/enumerable/companion/CompanionEnumByReference'

/**
 * @recursiveReference<{@link SoundEffects}>
 * @deprecated Use the individual {@link Tracks} instead
 */
export class Musics
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly TITLE_SCREEN =         new Musics()

    public static readonly GROUND =               new class Musics_Ground extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.GROUND
        }

    }()
    public static readonly UNDERGROUND =          new class Musics_Underground extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.UNDERGROUND
        }

    }()
    public static readonly UNDERWATER =           new class Musics_Underwater extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.UNDERWATER
        }

    }()
    public static readonly DESERT =               new class Musics_Desert extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.DESERT
        }

    }()
    public static readonly SNOW =                 new class Musics_Snow extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.SNOW
        }

    }()
    public static readonly SKY =                  new class Musics_Sky extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.SKY
        }

    }()
    public static readonly FOREST =               new class Musics_Forest extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.FOREST
        }

    }()
    public static readonly GHOST_HOUSE =          new class Musics_GhostHouse extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.GHOST_HOUSE
        }

    }()
    public static readonly AIRSHIP =              new class Musics_Airship extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.AIRSHIP
        }

    }()
    public static readonly CASTLE =               new class Musics_Castle extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.CASTLE
        }

    }()

    public static readonly VOLCANO =              new class Musics_Volcano extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.VOLCANO
        }

    }()
    public static readonly SPACE =                new class Musics_Space extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.SPACE
        }

    }()

    public static readonly STAR =                 new Musics()
    public static readonly P_SWITCH =             new Musics()

    public static readonly NINJA_ATTACK =         new class Musics_Audience extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.NINJA_ATTACK
        }

    }()
    public static readonly AUDIENCE =             new class Musics_Audience extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.AUDIENCE
        }

    }()
    public static readonly SCATTING =             new class Musics_Scatting extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SCATTING
        }

    }()
    public static readonly TRADITIONAL =          new class Musics_Traditional extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.TRADITIONAL
        }

    }()
    public static readonly PEACEFUL =             new class Musics_Peaceful extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.PEACEFUL
        }

    }()

    public static readonly BONUS =                new class Musics_Bonus extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BONUS_MUSIC
        }

    }()
    public static readonly BOSS =                 new class Musics_Boss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BOSS_MUSIC
        }

    }()
    public static readonly FINAL_BOSS =           new class Musics_FinalBoss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.FINAL_BOSS_MUSIC
        }

    }()

    public static readonly SUPER_MARIO_KART =     new class Musics_SuperMarioKart extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

    }()
    public static readonly SUPER_MARIO_64 =       new class Musics_SuperMario64 extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

    }()
    public static readonly SUPER_MARIO_SUNSHINE = new class Musics_SuperMarioSunshine extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC
        }

    }()
    public static readonly SUPER_MARIO_GALAXY =   new class Musics_SuperMarioGalaxy extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_GALAXY_MUSIC
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByReferenceSingleton<| Themes | SoundEffects, Musics, typeof Musics> = class CompanionEnum_Musics
        extends CompanionEnumByReference<| Themes | SoundEffects, Musics, typeof Musics> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Musics

        private constructor() {
            super(Musics,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Musics()
        }

        //endregion -------------------- Singleton usage --------------------

        protected override readonly _EXCLUDED_NAMES = ['SMK', 'SM64', 'SMS', 'SMG',] as const satisfies Array<keyof typeof Musics>

        public override getValueByReference(value: Nullable<| Musics | Themes | SoundEffects>,): Musics {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null reference.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = value instanceof Import.Themes
                ? this.values.findFirstOrNull(it => it.themeReference === value,)
                : this.values.findFirstOrNull(it => it.soundEffectReference === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this reference "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    #themeReference?: NullOr<Themes>
    #soundEffectReference?: NullOr<SoundEffects>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected _createThemeReference(): NullOr<Themes> {
        return null
    }

    public get themeReference(): NullOr<Themes> {
        const value = this.#themeReference
        if (value !== undefined)
            return value
        return this.#themeReference = this._createThemeReference()
    }


    protected _createSoundEffectReference(): NullOr<SoundEffects> {
        return null
    }

    public get soundEffectReference(): NullOr<SoundEffects> {
        const value = this.#soundEffectReference
        if (value !== undefined)
            return value
        return this.#soundEffectReference = this._createSoundEffectReference()
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace Musics {// eslint-disable-line @typescript-eslint/no-namespace

    /** An alias of {@link Musics.SUPER_MARIO_KART} */
    export const SMK = Musics.SUPER_MARIO_KART
    /** An alias of {@link Musics.SUPER_MARIO_64} */
    export const SM64 = Musics.SUPER_MARIO_64
    /** An alias of {@link Musics.SUPER_MARIO_SUNSHINE} */
    export const SMS = Musics.SUPER_MARIO_SUNSHINE
    /** An alias of {@link Musics.SUPER_MARIO_GALAXY} */
    export const SMG = Musics.SUPER_MARIO_GALAXY

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).Musics = Musics
