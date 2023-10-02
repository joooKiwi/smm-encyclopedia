import type {CollectionHolder, CollectionIterator}              from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals}                                          from 'core/music/Musics.types'
import type {BackgroundMusic}                                          from 'core/music/backgroundMusic/BackgroundMusic'
import type {NonChangeableSoundEffectBackgroundMusic}                  from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic'
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import type {SingleSoundEffectMusic}                                   from 'core/music/soundEffect/SingleSoundEffectMusic'
import type {SoundEffectMusicWithDifferentEditor}                      from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'

import * as MusicCreator   from 'core/music/musicCreator'
import * as FileCreator    from 'core/music/file/fileCreator'
import type {SoundEffects} from 'core/soundEffect/SoundEffects'
import type {Themes}       from 'core/theme/Themes'
import {Import}            from 'util/DynamicImporter'

/**
 * @todo add other musics (from title screen, theme, star, p-switch)
 * @recursiveReference {@link SoundEffects}
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
            return MusicCreator.linkAndSmb2BackgroundMusic(
                FileCreator.repeatableDuringThePlay('M1_BGM_Otoasobi_Link_Healing', 148_074,),
                FileCreator.repeatableDuringThePlay('BGM_M1_USA_Ending', 368_993,),
            )
        }

    }()

    public static readonly BONUS =                new class Musics_Bonus extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BONUS_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.backgroundMusic(
                FileCreator.nonRepeatable('M1_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('M1_BGM_Otoasobi_Bonus', 4,),
                FileCreator.repeatableAtTheEnd('M1_BGM_Otoasobi_BonusHurry',),

                FileCreator.repeatableDuringThePlay('M1_BGM_Otoasobi_Link_Bonus', 148_531,),
                FileCreator.repeatableDuringThePlay('M1_BGM_Otoasobi_Link_BonusHurry', 122_177,),

                FileCreator.repeatableDuringThePlay('BGM_M1_USA_CharacterSelect', 172_512,),
                FileCreator.repeatableDuringThePlay('BGM_M1_USA_CharacterSelect_hurry', 129_152,),

                FileCreator.nonRepeatable('M3_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('M3_BGM_Otoasobi_Bonus', 244,),
                FileCreator.repeatableAtTheEnd('M3_BGM_Otoasobi_BonusHurry',),

                FileCreator.nonRepeatable('MW_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('MW_BGM_Otoasobi_Bonus', 97_302,),
                null,
                FileCreator.repeatableDuringThePlay('MW_BGM_Otoasobi_BonusHurry', 83_895,),
                null,

                FileCreator.nonRepeatable('WU_BGM_Otoasobi_Bonus - Track 1',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_Bonus - Track 1', 49_563,),
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_Bonus - Track 2', 49_563,),
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_BonusHurry - Track 1', 94_334,),
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_BonusHurry - Track 2', 94_334,),

                FileCreator.nonRepeatable('3W_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('3W_BGM_Otoasobi_Bonus', 233_756,),
                null,
                FileCreator.repeatableDuringThePlay('3W_BGM_Otoasobi_BonusHurry', 241_918,),
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
                FileCreator.repeatableDuringThePlay('M1_BGM_Otoasobi_Boss', 265_559,),
                FileCreator.repeatableDuringThePlay('M1_BGM_Otoasobi_BossHurry', 220_012,),

                FileCreator.repeatableDuringThePlay('M1_BGM_Link_Boss', 15_931,),
                FileCreator.repeatableDuringThePlay('M1_BGM_Link_Boss_Hurry', 11_872,),

                FileCreator.repeatableDuringThePlay('BGM_M1_USA_Boss', 115_011,),
                FileCreator.repeatableDuringThePlay('BGM_M1_USA_LastBoss_hurry', 102_231,),

                FileCreator.nonRepeatable('M3_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('M3_BGM_Otoasobi_Boss', 206_172,),
                FileCreator.repeatableDuringThePlay('M3_BGM_Otoasobi_BossHurry', 198_170,),

                FileCreator.nonRepeatable('MW_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('MW_BGM_Otoasobi_Boss', 69_552,),
                null,
                FileCreator.repeatableDuringThePlay('MW_BGM_Otoasobi_BossHurry', 187_181,),
                null,

                FileCreator.nonRepeatable('WU_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_Boss', 280_392,),
                null,
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_BossHurry', 236_907,),
                null,

                FileCreator.nonRepeatable('3W_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('3W_BGM_Otoasobi_Boss', 233_238,),
                null,
                FileCreator.repeatableDuringThePlay('3W_BGM_Otoasobi_BossHurry', 267_965,),
                null,
            )
        }

    }()
    public static readonly FINAL_BOSS =           new class Musics_FinalBoss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.FINAL_BOSS_MUSIC
        }

        protected override _createMusic() {
            const smb3Editor = FileCreator.nonRepeatable('M3_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                smb3 = FileCreator.repeatableDuringThePlay('M3_BGM_Otoasobi_LastBoss', 89_453,),
                smb3Fast = FileCreator.repeatableDuringThePlay('M3_BGM_Otoasobi_LastBossHurry', 76_674,)

            return MusicCreator.backgroundMusic(
                smb3Editor,
                smb3,
                smb3Fast,

                FileCreator.repeatableDuringThePlay('M1_BGM_Link_LastBoss', 23_984,),
                FileCreator.repeatableDuringThePlay('M1_BGM_Link_LastBoss_Hurry', 20_284,),

                FileCreator.repeatableDuringThePlay('BGM_M1_USA_LastBoss', 115_011,),
                FileCreator.repeatableDuringThePlay('BGM_M1_USA_LastBoss_hurry', 102_231,),

                smb3Editor,
                smb3,
                smb3Fast,

                FileCreator.nonRepeatable('MW_BGM_Otoasobi_LastBossIcon',),//README for some reason, it is set at 1 in the files (but it is ignored)
                FileCreator.repeatableDuringThePlay('MW_BGM_Otoasobi_LastBoss', 90_251,),
                null,
                FileCreator.repeatableDuringThePlay('MW_BGM_Otoasobi_LastBossHurry', 72_957,),
                null,

                FileCreator.nonRepeatable('WU_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_LastBoss', 487_912,),
                null,
                FileCreator.repeatableDuringThePlay('WU_BGM_Otoasobi_LastBossHurry', 454_360,),
                null,

                FileCreator.nonRepeatable('3W_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                FileCreator.repeatableDuringThePlay('3W_BGM_Otoasobi_LastBoss', 2_794_396,),
                null,
                FileCreator.repeatableDuringThePlay('3W_BGM_Otoasobi_LastBossHurry', 2_307_013,),
                null,
            )
        }

    }()

    public static readonly SUPER_MARIO_KART =     new class Musics_SuperMarioKart extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_SFCMarioKart_Circuit', 130_927,),
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_SFCMarioKartHurry_Circuit', 102_494,),
            )
        }

    }()
    public static readonly SUPER_MARIO_64 =       new class Musics_SuperMario64 extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_SuperMario64_Slider', 181_140,),
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_SuperMario64Hurry_Slider', 151_154,),
            )
        }

    }()
    public static readonly SUPER_MARIO_SUNSHINE = new class Musics_SuperMarioSunshine extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_MarioSunshine_DolphicTown', 434_950,),
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_MarioSunshineHurry_DolphicTown', 392_890,),
            )
        }

    }()
    public static readonly SUPER_MARIO_GALAXY =   new class Musics_SuperMarioGalaxy extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_GALAXY_MUSIC
        }

        protected override _createMusic() {
            return MusicCreator.nonChangeableBackgroundMusic(
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_MarioGalaxy_WindGarden', 419_760,),
                FileCreator.repeatableDuringThePlay('BGM_Otoasobi_MarioGalaxyHurry_WindGarden', 353_407),
            )
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<Musics, typeof Musics> = class CompanionEnum_Musics
        extends CompanionEnum<Musics, typeof Musics> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Musics

        private constructor() {
            super(Musics,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Musics()
        }

        //endregion -------------------- Singleton usage --------------------

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
        if (this.#themeReference === undefined)
            return this.#themeReference = this._createThemeReference()
        return this.#themeReference
    }


    protected _createSoundEffectReference(): NullOr<SoundEffects> {
        return null
    }

    public get soundEffectReference(): NullOr<SoundEffects> {
        if (this.#soundEffectReference === undefined)
            return this.#soundEffectReference = this._createSoundEffectReference()
        return this.#soundEffectReference
    }

    //endregion -------------------- Other reference methods --------------------
    //region -------------------- Music methods --------------------

    protected _createMusic(): NullOr<PossibleMusic> {
        return null
    }

    public get music(): NullOr<PossibleMusic> {
        if (this.#music === undefined)
            return this.#music = this._createMusic()
        return this.#music
    }

    //endregion -------------------- Music methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByReference(value: Nullable<| Musics | Themes | SoundEffects>,): Musics {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = value instanceof Import.Themes
            ? this.values.find(it => it.themeReference === value)
            : this.values.find(it => it.soundEffectReference === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this reference "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Musics>,): Musics {
        return Musics.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Musics> {
        return Musics.CompanionEnum.get.values
    }

    public static [Symbol.iterator](): CollectionIterator<Musics> {
        return Musics.CompanionEnum.get[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleMusic = | SingleSoundEffectMusic | SoundEffectMusicWithDifferentEditor | BackgroundMusic | NonChangeableSoundEffectBackgroundMusic | SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect
