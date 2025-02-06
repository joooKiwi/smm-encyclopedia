import type {Array, Nullable, NullOr} from '@joookiwi/type'
import {Enum}                         from '@joookiwi/enumerable'

import type {Names, Ordinals}                                          from 'core/music/Musics.types'
import type {BackgroundMusic}                                          from 'core/music/backgroundMusic/BackgroundMusic'
import type {NonChangeableSoundEffectBackgroundMusic}                  from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic'
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import type {SingleSoundEffectMusic}                                   from 'core/music/soundEffect/SingleSoundEffectMusic'
import type {SoundEffectMusicWithDifferentEditor}                      from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'
import type {CompanionEnumByReferenceSingleton}                        from 'util/enumerable/Singleton.types'

import {BackgroundMusicContainer}                                          from 'core/music/backgroundMusic/BackgroundMusic.container'
import {NonChangeableSoundEffectBackgroundMusicContainer}                  from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic.container'
import {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect.container'
import {SingleSoundEffectMusicContainer}                                   from 'core/music/soundEffect/SingleSoundEffectMusic.container'
import {SoundEffectMusicWithDifferentEditorContainer}                      from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor.container'
import type {SoundEffects}                                                 from 'core/soundEffect/SoundEffects'
import type {Themes}                                                       from 'core/theme/Themes'
import {Tracks}                                                            from 'core/track/Tracks'
import {Import}                                                            from 'util/DynamicImporter'
import {CompanionEnumByReference}                                          from 'util/enumerable/companion/CompanionEnumByReference'

/**
 * @todo add other musics (from title screen, theme, star, p-switch)
 * @recursiveReference<{@link SoundEffects}>
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

        protected override _createMusic() {
            return new SoundEffectMusicWithDifferentEditorContainer(Tracks.NINJA_ATTACK.file, Tracks.NINJA_ATTACK_EDITOR.file,)
        }

    }()
    public static readonly AUDIENCE =             new class Musics_Audience extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.AUDIENCE
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer(Tracks.AUDIENCE.file,)
        }

    }()
    public static readonly SCATTING =             new class Musics_Scatting extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SCATTING
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer(Tracks.SCATTING.file,)
        }

    }()
    public static readonly TRADITIONAL =          new class Musics_Traditional extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.TRADITIONAL
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer(Tracks.TRADITIONAL.file,)
        }

    }()
    public static readonly PEACEFUL =             new class Musics_Peaceful extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.PEACEFUL
        }

        protected override _createMusic() {
            return new SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer(Tracks.PEACEFUL_LINK.file, Tracks.PEACEFUL_SMB2.file,)
        }

    }()

    public static readonly BONUS =                new class Musics_Bonus extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BONUS_MUSIC
        }

        protected override _createMusic() {
            return new BackgroundMusicContainer(
                Tracks.BONUS_SMB_EDITOR.file,
                Tracks.BONUS_SMB.file,
                Tracks.BONUS_SMB_FAST.file,

                Tracks.BONUS_LINK.file,
                Tracks.BONUS_LINK_FAST.file,

                Tracks.BONUS_SMB2.file,
                Tracks.BONUS_SMB2_FAST.file,

                Tracks.BONUS_SMB3_EDITOR.file,
                Tracks.BONUS_SMB3.file,
                Tracks.BONUS_SMB3_FAST.file,

                Tracks.BONUS_SMW_EDITOR.file,
                Tracks.BONUS_SMW.file,
                null,
                Tracks.BONUS_SMW_FAST.file,
                null,

                Tracks.BONUS_NSMBU_EDITOR.file,
                Tracks.BONUS_NSMBU.file,
                Tracks.BONUS_NSMBU_YOSHI.file,
                Tracks.BONUS_NSMBU_FAST.file,
                Tracks.BONUS_NSMBU_YOSHI_FAST.file,

                Tracks.BONUS_SM3DW_EDITOR.file,
                Tracks.BONUS_SM3DW.file,
                null,
                Tracks.BONUS_SM3DW_FAST.file,
                null,
            )
        }

    }()
    public static readonly BOSS =                 new class Musics_Boss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BOSS_MUSIC
        }

        protected override _createMusic() {
            return new BackgroundMusicContainer(
                Tracks.BOSS_SMB_EDITOR.file,
                Tracks.BOSS_SMB.file,
                Tracks.BOSS_SMB_FAST.file,

                Tracks.BOSS_LINK.file,
                Tracks.BOSS_LINK_FAST.file,

                Tracks.BOSS_SMB2.file,
                Tracks.BOSS_SMB2_FAST.file,

                Tracks.BOSS_SMB3_EDITOR.file,
                Tracks.BOSS_SMB3.file,
                Tracks.BOSS_SMB3_FAST.file,

                Tracks.BOSS_SMW.file,
                Tracks.BOSS_SMW.file,
                null,
                Tracks.BOSS_SMW_FAST.file,
                null,

                Tracks.BOSS_NSMBU_EDITOR.file,
                Tracks.BOSS_NSMBU.file,
                null,
                Tracks.BOSS_NSMBU_FAST.file,
                null,

                Tracks.BOSS_SM3DW_EDITOR.file,
                Tracks.BOSS_SM3DW.file,
                null,
                Tracks.BOSS_SM3DW_FAST.file,
                null,
            )
        }

    }()
    public static readonly FINAL_BOSS =           new class Musics_FinalBoss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.FINAL_BOSS_MUSIC
        }

        protected override _createMusic() {
            const smb3Editor = Tracks.FINAL_BOSS_SMB3_EDITOR.file
            const smb3 = Tracks.FINAL_BOSS_SMB3.file
            const smb3Fast = Tracks.FINAL_BOSS_SMB3_FAST.file

            return new BackgroundMusicContainer(
                smb3Editor,
                smb3,
                smb3Fast,

                Tracks.FINAL_BOSS_LINK.file,
                Tracks.FINAL_BOSS_LINK_FAST.file,

                Tracks.FINAL_BOSS_SMB2.file,
                Tracks.FINAL_BOSS_SMB2_FAST.file,

                smb3Editor,
                smb3,
                smb3Fast,

                Tracks.FINAL_BOSS_SMW_EDITOR.file,
                Tracks.FINAL_BOSS_SMW.file,
                null,
                Tracks.FINAL_BOSS_SMW_FAST.file,
                null,

                Tracks.FINAL_BOSS_NSMBU_EDITOR.file,
                Tracks.FINAL_BOSS_NSMBU.file,
                null,
                Tracks.FINAL_BOSS_NSMBU_FAST.file,
                null,

                Tracks.FINAL_BOSS_SM3DW_EDITOR.file,
                Tracks.FINAL_BOSS_SM3DW.file,
                null,
                Tracks.FINAL_BOSS_SM3DW_FAST.file,
                null,
            )
        }

    }()

    public static readonly SUPER_MARIO_KART =     new class Musics_SuperMarioKart extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(Tracks.SMK.file, Tracks.SMK_FAST.file,)
        }

    }()
    public static readonly SUPER_MARIO_64 =       new class Musics_SuperMario64 extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(Tracks.SM64.file, Tracks.SM64_FAST.file,)
        }

    }()
    public static readonly SUPER_MARIO_SUNSHINE = new class Musics_SuperMarioSunshine extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(Tracks.SMS.file, Tracks.SMS_FAST.file,)
        }

    }()
    public static readonly SUPER_MARIO_GALAXY =   new class Musics_SuperMarioGalaxy extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_GALAXY_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(Tracks.SMG.file, Tracks.SMG_FAST.file,)
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

    #music?: NullOr<PossibleMusic>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Other reference methods --------------------

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

    //endregion -------------------- Other reference methods --------------------
    //region -------------------- Music methods --------------------

    protected _createMusic(): NullOr<PossibleMusic> {
        return null
    }

    /** @deprecated This method should no longer be used. The individual music or sound effect are better */
    public get music(): NullOr<PossibleMusic> {
        const value = this.#music
        if (value !== undefined)
            return value
        return this.#music = this._createMusic()
    }

    //endregion -------------------- Music methods --------------------

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

type PossibleMusic = | SingleSoundEffectMusic | SoundEffectMusicWithDifferentEditor | BackgroundMusic | NonChangeableSoundEffectBackgroundMusic | SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect
