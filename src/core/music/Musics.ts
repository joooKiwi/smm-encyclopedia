import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals}                                          from 'core/music/Musics.types'
import type {BackgroundMusic}                                          from 'core/music/backgroundMusic/BackgroundMusic'
import type {NonChangeableSoundEffectBackgroundMusic}                  from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic'
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import type {SingleSoundEffectMusic}                                   from 'core/music/soundEffect/SingleSoundEffectMusic'
import type {SoundEffectMusicWithDifferentEditor}                      from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'
import type {CompanionEnumByReferenceSingleton}                        from 'util/enumerable/Singleton.types'

import {IndividualMusics}         from 'core/music/IndividualMusics'
import * as MusicCreator          from 'core/music/musicCreator'
import * as FileCreator           from 'core/music/file/fileCreator'
import type {SoundEffects}        from 'core/soundEffect/SoundEffects'
import type {Themes}              from 'core/theme/Themes'
import {Import}                   from 'util/DynamicImporter'
import {CompanionEnumByReference} from 'util/enumerable/companion/CompanionEnumByReference'

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
            return MusicCreator.separatedSoundEffectMusic('BGM_Otoasobi_Dtbt_Murasame', 'BGM_Otoasobi_Dtbt_MurasameIcon',)
        }

    }()
    public static readonly AUDIENCE =             new class Musics_Audience extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.AUDIENCE
        }

        protected override _createMusic() {
            return MusicCreator.singleSoundEffectMusic('se_otoasobi_clowd',)
        }

    }()
    public static readonly SCATTING =             new class Musics_Scatting extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SCATTING
        }

        protected override _createMusic() {
            return MusicCreator.singleSoundEffectMusic('otoasobi_scat',)
        }

    }()
    public static readonly TRADITIONAL =          new class Musics_Traditional extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.TRADITIONAL
        }

        protected override _createMusic() {
            return MusicCreator.singleSoundEffectMusic('se_otoasobi_ohayashi',)
        }

    }()
    public static readonly PEACEFUL =             new class Musics_Peaceful extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.PEACEFUL
        }

        protected override _createMusic() {
            return MusicCreator.linkAndSmb2BackgroundMusic(IndividualMusics.PEACEFUL_LINK.file, IndividualMusics.PEACEFUL_SMB2.file,)
        }

    }()

    public static readonly BONUS =                new class Musics_Bonus extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BONUS_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.backgroundMusic(
                FileCreator.nonRepeatable('M1_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                IndividualMusics.BONUS_SMB.file,
                IndividualMusics.BONUS_SMB_FAST.file,

                IndividualMusics.BONUS_LINK.file,
                IndividualMusics.BONUS_LINK_FAST.file,

                IndividualMusics.BONUS_SMB2.file,
                IndividualMusics.BONUS_SMB2_FAST.file,

                FileCreator.nonRepeatable('M3_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                IndividualMusics.BONUS_SMB3.file,
                IndividualMusics.BONUS_SMB3_FAST.file,

                FileCreator.nonRepeatable('MW_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                IndividualMusics.BONUS_SMW.file,
                null,
                IndividualMusics.BONUS_SMW_FAST.file,
                null,

                FileCreator.nonRepeatable('WU_BGM_Otoasobi_Bonus - Track 1',),//TODO replace with specific time interval
                IndividualMusics.BONUS_NSMBU.file,
                IndividualMusics.BONUS_NSMBU_YOSHI.file,
                IndividualMusics.BONUS_NSMBU_FAST.file,
                IndividualMusics.BONUS_NSMBU_YOSHI_FAST.file,

                FileCreator.nonRepeatable('3W_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                IndividualMusics.BONUS_SM3DW.file,
                null,
                IndividualMusics.BONUS_SM3DW_FAST.file,
                null,
            )
        }

    }()
    public static readonly BOSS =                 new class Musics_Boss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BOSS_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.backgroundMusic(
                FileCreator.nonRepeatable('M1_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                IndividualMusics.BOSS_SMB.file,
                IndividualMusics.BOSS_SMB_FAST.file,

                IndividualMusics.BOSS_LINK.file,
                IndividualMusics.BOSS_LINK_FAST.file,

                IndividualMusics.BOSS_SMB2.file,
                IndividualMusics.BOSS_SMB2_FAST.file,

                FileCreator.nonRepeatable('M3_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                IndividualMusics.BOSS_SMB3.file,
                IndividualMusics.BOSS_SMB3_FAST.file,

                FileCreator.nonRepeatable('MW_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                IndividualMusics.BOSS_SMW.file,
                null,
                IndividualMusics.BOSS_SMW_FAST.file,
                null,

                FileCreator.nonRepeatable('WU_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                IndividualMusics.BOSS_NSMBU.file,
                null,
                IndividualMusics.BOSS_NSMBU_FAST.file,
                null,

                FileCreator.nonRepeatable('3W_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                IndividualMusics.BOSS_SM3DW.file,
                null,
                IndividualMusics.BOSS_SM3DW_FAST.file,
                null,
            )
        }

    }()
    public static readonly FINAL_BOSS =           new class Musics_FinalBoss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.FINAL_BOSS_MUSIC
        }

        protected override _createMusic() {
            const smb3Editor = FileCreator.nonRepeatable('M3_BGM_Otoasobi_LastBoss',)//TODO replace with specific time interval
            const smb3 = IndividualMusics.FINAL_BOSS_SMB3.file
            const smb3Fast = IndividualMusics.FINAL_BOSS_SMB3_FAST.file

            return MusicCreator.backgroundMusic(
                smb3Editor,
                smb3,
                smb3Fast,

                IndividualMusics.FINAL_BOSS_LINK.file,
                IndividualMusics.FINAL_BOSS_LINK_FAST.file,

                IndividualMusics.FINAL_BOSS_SMB2.file,
                IndividualMusics.FINAL_BOSS_SMB2_FAST.file,

                smb3Editor,
                smb3,
                smb3Fast,

                FileCreator.nonRepeatable('MW_BGM_Otoasobi_LastBossIcon',),//README for some reason, it is set at 1 in the files (but it is ignored)
                IndividualMusics.FINAL_BOSS_SMW.file,
                null,
                IndividualMusics.FINAL_BOSS_SMW_FAST.file,
                null,

                FileCreator.nonRepeatable('WU_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                IndividualMusics.FINAL_BOSS_NSMBU.file,
                null,
                IndividualMusics.FINAL_BOSS_NSMBU_FAST.file,
                null,

                FileCreator.nonRepeatable('3W_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                IndividualMusics.FINAL_BOSS_SM3DW.file,
                null,
                IndividualMusics.FINAL_BOSS_SM3DW_FAST.file,
                null,
            )
        }

    }()

    public static readonly SUPER_MARIO_KART =     new class Musics_SuperMarioKart extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(IndividualMusics.SMK.file, IndividualMusics.SMK_FAST.file,)
        }

    }()
    public static readonly SUPER_MARIO_64 =       new class Musics_SuperMario64 extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(IndividualMusics.SM64.file, IndividualMusics.SM64_FAST.file,)
        }

    }()
    public static readonly SUPER_MARIO_SUNSHINE = new class Musics_SuperMarioSunshine extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(IndividualMusics.SMS.file, IndividualMusics.SMS_FAST.file,)
        }

    }()
    public static readonly SUPER_MARIO_GALAXY =   new class Musics_SuperMarioGalaxy extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_GALAXY_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(IndividualMusics.SMG.file, IndividualMusics.SMG_FAST.file,)
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

        public override getValueByReference(value: Nullable<| Musics | Themes | SoundEffects>,): Musics {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null reference.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = value instanceof Import.Themes
                ? this.values.find(it => it.themeReference === value,)
                : this.values.find(it => it.soundEffectReference === value,)
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

type PossibleMusic = | SingleSoundEffectMusic | SoundEffectMusicWithDifferentEditor | BackgroundMusic | NonChangeableSoundEffectBackgroundMusic | SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect
