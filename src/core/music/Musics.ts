import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'

import type {Names, Ordinals}                                          from 'core/music/Musics.types'
import type {BackgroundMusic}                                          from 'core/music/backgroundMusic/BackgroundMusic'
import type {NonChangeableSoundEffectBackgroundMusic}                  from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic'
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import type {SingleSoundEffectMusic}                                   from 'core/music/soundEffect/SingleSoundEffectMusic'
import type {SoundEffectMusicWithDifferentEditor}                      from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'
import type {Nullable, NullOr}                                         from 'util/types/nullable'
import type {ObjectHolder}                                             from 'util/holder/ObjectHolder'

import {BackgroundMusicContainer}                                          from 'core/music/backgroundMusic/BackgroundMusic.container'
import {NonChangeableSoundEffectBackgroundMusicContainer}                  from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic.container'
import {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect.container'
import {NonRepeatableMusicSoundFile as NonRepeatable}                      from 'core/music/file/NonRepeatableMusicSoundFile'
import {RepeatableDuringThePlayMusicSoundFile as RepeatableDuringThePlay}  from 'core/music/file/RepeatableDuringThePlayMusicSoundFile'
import {RepeatableAtTheEndMusicSoundFile as RepeatableAtTheEnd}            from 'core/music/file/RepeatableAtTheEndMusicSoundFile'
import {SingleSoundEffectMusicContainer}                                   from 'core/music/soundEffect/SingleSoundEffectMusic.container'
import {SoundEffectMusicWithDifferentEditorContainer}                      from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor.container'
import type {SoundEffects}                                                 from 'core/soundEffect/SoundEffects'
import type {Themes}                                                       from 'core/theme/Themes'
import {Import}                                                            from 'util/DynamicImporter'
import {FramePerMillisecond as Time}                                       from 'util/file/sound/time/FramePerMillisecond'
import {ObjectHolders}                                                     from 'util/holder/ObjectHolders'
import {ObjectHolderContainer}                                             from 'util/holder/ObjectHolder.container'

/**
 * @todo add other musics (from title screen, theme, star, p-switch)
 * @todo change the BackgroundMusicContainer creation in a builder instead
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
            return new SoundEffectMusicWithDifferentEditorContainer(
                new NonRepeatable('BGM_Otoasobi_Dtbt_Murasame',),
                new NonRepeatable('BGM_Otoasobi_Dtbt_MurasameIcon',),
            )
        }

    }()
    public static readonly AUDIENCE =             new class Musics_Audience extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.AUDIENCE
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer(new NonRepeatable('se_otoasobi_clowd',),)
        }

    }()
    public static readonly SCATTING =             new class Musics_Scatting extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SCATTING
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer(new NonRepeatable('otoasobi_scat',),)
        }

    }()
    public static readonly TRADITIONAL =          new class Musics_Traditional extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.TRADITIONAL
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer(new NonRepeatable('se_otoasobi_ohayashi',),)
        }

    }()
    public static readonly PEACEFUL =             new class Musics_Peaceful extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.PEACEFUL
        }

        protected override _createMusic() {
            return new SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer(
                new RepeatableDuringThePlay('M1_BGM_Otoasobi_Link_Healing', new Time(148_074,),),
                new RepeatableDuringThePlay('BGM_M1_USA_Ending', new Time(368_993,),),
            )
        }

    }()

    public static readonly BONUS =                new class Musics_Bonus extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.BONUS_MUSIC
        }

        protected override _createMusic() {
            return new BackgroundMusicContainer(
                new NonRepeatable('M1_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('M1_BGM_Otoasobi_Bonus', new Time(4,),),
                new RepeatableAtTheEnd('M1_BGM_Otoasobi_BonusHurry',),

                new RepeatableDuringThePlay('M1_BGM_Otoasobi_Link_Bonus', new Time(148_531,),),
                new RepeatableDuringThePlay('M1_BGM_Otoasobi_Link_BonusHurry', new Time(122_177,),),

                new RepeatableDuringThePlay('BGM_M1_USA_CharacterSelect', new Time(172_512,),),
                new RepeatableDuringThePlay('BGM_M1_USA_CharacterSelect_hurry', new Time(129_152,),),

                new NonRepeatable('M3_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('M3_BGM_Otoasobi_Bonus', new Time(244,),),
                new RepeatableAtTheEnd('M3_BGM_Otoasobi_BonusHurry',),

                new NonRepeatable('MW_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('MW_BGM_Otoasobi_Bonus', new Time(97_302,),),
                null,
                new RepeatableDuringThePlay('MW_BGM_Otoasobi_BonusHurry', new Time(83_895,),),
                null,

                new NonRepeatable('WU_BGM_Otoasobi_Bonus - Track 1',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_Bonus - Track 1', new Time(49_563,),),
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_Bonus - Track 2', new Time(49_563,),),
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_BonusHurry - Track 1', new Time(94_334,),),
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_BonusHurry - Track 2', new Time(94_334,),),

                new NonRepeatable('3W_BGM_Otoasobi_Bonus',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('3W_BGM_Otoasobi_Bonus', new Time(233_756,),),
                null,
                new RepeatableDuringThePlay('3W_BGM_Otoasobi_BonusHurry', new Time(241_918,),),
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
                new NonRepeatable('M1_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('M1_BGM_Otoasobi_Boss', new Time(265_559,),),
                new RepeatableDuringThePlay('M1_BGM_Otoasobi_BossHurry', new Time(220_012,),),

                new RepeatableDuringThePlay('M1_BGM_Link_Boss', new Time(15_931,),),
                new RepeatableDuringThePlay('M1_BGM_Link_Boss_Hurry', new Time(11_872,),),

                new RepeatableDuringThePlay('BGM_M1_USA_Boss', new Time(115_011,),),
                new RepeatableDuringThePlay('BGM_M1_USA_LastBoss_hurry', new Time(102_231,),),

                new NonRepeatable('M3_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('M3_BGM_Otoasobi_Boss', new Time(206_172,),),
                new RepeatableDuringThePlay('M3_BGM_Otoasobi_BossHurry', new Time(198_170,),),

                new NonRepeatable('MW_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('MW_BGM_Otoasobi_Boss', new Time(69_552,),),
                null,
                new RepeatableDuringThePlay('MW_BGM_Otoasobi_BossHurry', new Time(187_181,),),
                null,

                new NonRepeatable('WU_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_Boss', new Time(280_392,),),
                null,
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_BossHurry', new Time(236_907,),),
                null,

                new NonRepeatable('3W_BGM_Otoasobi_Boss',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('3W_BGM_Otoasobi_Boss', new Time(233_238,),),
                null,
                new RepeatableDuringThePlay('3W_BGM_Otoasobi_BossHurry', new Time(267_965,),),
                null,
            )
        }

    }()
    public static readonly FINAL_BOSS =           new class Musics_FinalBoss extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.FINAL_BOSS_MUSIC
        }

        protected override _createMusic() {
            const smb3Editor = new NonRepeatable('M3_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                smb3 = new RepeatableDuringThePlay('M3_BGM_Otoasobi_LastBoss', new Time(89_453,),),
                smb3Fast = new RepeatableDuringThePlay('M3_BGM_Otoasobi_LastBossHurry', new Time(76_674,),)

            return new BackgroundMusicContainer(
                smb3Editor,
                smb3,
                smb3Fast,

                new RepeatableDuringThePlay('M1_BGM_Link_LastBoss', new Time(23_984,),),
                new RepeatableDuringThePlay('M1_BGM_Link_LastBoss_Hurry', new Time(20_284,),),

                new RepeatableDuringThePlay('BGM_M1_USA_LastBoss', new Time(115_011,),),
                new RepeatableDuringThePlay('BGM_M1_USA_LastBoss_hurry', new Time(102_231,),),

                smb3Editor,
                smb3,
                smb3Fast,

                new NonRepeatable('MW_BGM_Otoasobi_LastBossIcon',),//README for some reason, it is set at 1 in the files (but it is ignored)
                new RepeatableDuringThePlay('MW_BGM_Otoasobi_LastBoss', new Time(90_251,),),
                null,
                new RepeatableDuringThePlay('MW_BGM_Otoasobi_LastBossHurry', new Time(72_957,),),
                null,

                new NonRepeatable('WU_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_LastBoss', new Time(487_912,),),
                null,
                new RepeatableDuringThePlay('WU_BGM_Otoasobi_LastBossHurry', new Time(454_360,),),
                null,

                new NonRepeatable('3W_BGM_Otoasobi_LastBoss',),//TODO replace with specific time interval
                new RepeatableDuringThePlay('3W_BGM_Otoasobi_LastBoss', new Time(2_794_396,),),
                null,
                new RepeatableDuringThePlay('3W_BGM_Otoasobi_LastBossHurry', new Time(2_307_013,),),
                null,
            )
        }

    }()

    public static readonly SUPER_MARIO_KART =     new class Musics_SuperMarioKart extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(
                new RepeatableDuringThePlay('BGM_Otoasobi_SFCMarioKart_Circuit', new Time(130_927,),),
                new RepeatableDuringThePlay('BGM_Otoasobi_SFCMarioKartHurry_Circuit', new Time(102_494,),),
            )
        }

    }()
    public static readonly SUPER_MARIO_64 =       new class Musics_SuperMario64 extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(
                new RepeatableDuringThePlay('BGM_Otoasobi_SuperMario64_Slider', new Time(181_140,),),
                new RepeatableDuringThePlay('BGM_Otoasobi_SuperMario64Hurry_Slider', new Time(151_154,),),
            )
        }

    }()
    public static readonly SUPER_MARIO_SUNSHINE = new class Musics_SuperMarioSunshine extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(
                new RepeatableDuringThePlay('BGM_Otoasobi_MarioSunshine_DolphicTown', new Time(434_950,),),
                new RepeatableDuringThePlay('BGM_Otoasobi_MarioSunshineHurry_DolphicTown', new Time(392_890,),),
            )
        }

    }()
    public static readonly SUPER_MARIO_GALAXY =   new class Musics_SuperMarioGalaxy extends Musics {

        protected override _createSoundEffectReference() {
            return Import.SoundEffects.SUPER_MARIO_GALAXY_MUSIC
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer(
                new RepeatableDuringThePlay('BGM_Otoasobi_MarioGalaxy_WindGarden', new Time(419_760,),),
                new RepeatableDuringThePlay('BGM_Otoasobi_MarioGalaxyHurry_WindGarden', new Time(353_407),),
            )
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<Musics, typeof Musics>> = class CompanionEnum_Musics
        extends BasicCompanionEnum<Musics, typeof Musics> {

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

    #gameStyleHolder?: ObjectHolder<NullOr<Themes>>
    #soundEffectHolder?: ObjectHolder<NullOr<SoundEffects>>

    #music?: ObjectHolder<NullOr<PossibleMusic>>

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

    private get __themeReference(): ObjectHolder<NullOr<Themes>> {
        if (this.#gameStyleHolder == null) {
            const value = this._createThemeReference()
            this.#gameStyleHolder = value == null ? ObjectHolders.NULL : new ObjectHolderContainer<Themes>(value)
        }
        return this.#gameStyleHolder
    }

    public get themeReference(): NullOr<Themes> {
        return this.__themeReference.get
    }


    protected _createSoundEffectReference(): NullOr<SoundEffects> {
        return null
    }

    private get __soundEffectReference(): ObjectHolder<NullOr<SoundEffects>> {
        if (this.#soundEffectHolder == null) {
            const value = this._createSoundEffectReference()
            this.#soundEffectHolder = value == null ? ObjectHolders.NULL : new ObjectHolderContainer(value)
        }
        return this.#soundEffectHolder
    }

    public get soundEffectReference(): NullOr<SoundEffects> {
        return this.__soundEffectReference.get
    }

    //endregion -------------------- Other reference methods --------------------
    //region -------------------- Music methods --------------------

    protected _createMusic(): NullOr<PossibleMusic> {
        return null
    }

    private get __music(): ObjectHolder<NullOr<PossibleMusic>> {
        if (this.#music == null) {
            const value = this._createMusic()
            this.#music = value == null ? ObjectHolders.NULL : new ObjectHolderContainer(value)
        }
        return this.#music
    }

    public get music(): NullOr<PossibleMusic> {
        return this.__music.get
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

    public static* [Symbol.iterator](): IterableIterator<Musics> {
        yield* Musics.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleMusic = | SingleSoundEffectMusic | SoundEffectMusicWithDifferentEditor | BackgroundMusic | NonChangeableSoundEffectBackgroundMusic | SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect
