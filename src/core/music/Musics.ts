import type {BackgroundMusic}                                                                                                                                                       from './backgroundMusic/BackgroundMusic'
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Music.types'
import type {ObjectHolder}                                                                                                                                                          from '../../util/holder/ObjectHolder'
import type {SingleSoundEffectMusic}                                                                                                                                                from './soundEffect/SingleSoundEffectMusic'
import type {SoundEffectMusicWithDifferentEditor}                                                                                                                                   from './soundEffect/SoundEffectMusicWithDifferentEditor'
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect}                                                                                                              from './backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types'

import {BackgroundMusicContainer}                                          from './backgroundMusic/BackgroundMusic.container'
import {Enum}                                                              from '../../util/enum/Enum'
import {Enumerable}                                                        from '../../util/enum/Enumerable'
import {FramePerMillisecond as Time}                                       from '../../util/sound/time/FramePerMillisecond'
import {Import}                                                            from '../../util/DynamicImporter'
import {NonChangeableSoundEffectBackgroundMusicContainer}                  from './backgroundMusic/NonChangeableSoundEffectBackgroundMusic.container'
import {NonRepeatableMusicSoundFile as NonRepeatable}                      from './file/NonRepeatableMusicSoundFile'
import {ObjectHolders}                                                     from '../../util/holder/objectHolders'
import {ObjectHolderContainer}                                             from '../../util/holder/ObjectHolder.container'
import {NonChangeableSoundEffectBackgroundMusic}                           from './backgroundMusic/NonChangeableSoundEffectBackgroundMusic'
import {RepeatableDuringThePlayMusicSoundFile as RepeatableDuringThePlay}  from './file/RepeatableDuringThePlayMusicSoundFile'
import {RepeatableAtTheEndMusicSoundFile as RepeatableAtTheEnd}            from './file/RepeatableAtTheEndMusicSoundFile'
import {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer} from './backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect.container'
import {SingleSoundEffectMusicContainer}                                   from './soundEffect/SingleSoundEffectMusic.container'
import {SoundEffectMusicWithDifferentEditorContainer}                      from './soundEffect/SoundEffectMusicWithDifferentEditor.container'
import type {SoundEffects}                                                 from '../soundEffect/SoundEffects'
import type {Themes}                                                       from '../theme/Themes'

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
    //region -------------------- Enum fields --------------------

    static [index: number]: Musics

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    #gameStyleHolder?: ObjectHolder<| Themes | null>
    #soundEffectHolder?: ObjectHolder<| SoundEffects | null>

    #music?: ObjectHolder<| PossibleMusic | null>

    //endregion -------------------- Fields --------------------

    private constructor() {
        super()
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Other reference methods --------------------

    protected _createThemeReference(): | Themes | null {
        return null
    }

    private get __themeReference(): ObjectHolder<| Themes | null> {
        if (this.#gameStyleHolder == null) {
            const value = this._createThemeReference()
            this.#gameStyleHolder = value == null ? ObjectHolders.NULL : new ObjectHolderContainer<Themes>(value)
        }
        return this.#gameStyleHolder
    }

    public get themeReference(): | Themes | null {
        return this.__themeReference.get
    }


    protected _createSoundEffectReference(): | SoundEffects | null {
        return null
    }

    private get __soundEffectReference(): ObjectHolder<| SoundEffects | null> {
        if (this.#soundEffectHolder == null) {
            const value = this._createSoundEffectReference()
            this.#soundEffectHolder = value == null ? ObjectHolders.NULL : new ObjectHolderContainer(value)
        }
        return this.#soundEffectHolder
    }

    public get soundEffectReference(): | SoundEffects | null {
        return this.__soundEffectReference.get
    }

    //endregion -------------------- Other reference methods --------------------
    //region -------------------- Music methods --------------------

    protected _createMusic(): | PossibleMusic | null {
        return null
    }

    private get __music(): ObjectHolder<| PossibleMusic | null> {
        if (this.#music == null) {
            const value = this._createMusic()
            this.#music = value == null ? ObjectHolders.NULL : new ObjectHolderContainer(value)
        }
        return this.#music
    }

    public get music(): | PossibleMusic | null {
        return this.__music.get
    }

    //endregion -------------------- Music methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<Musics> {
        return Musics
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByEnumerable(value: Enumerable,) {
        return value instanceof Import.Themes
            ? this.values.find(enumerable => enumerable.themeReference === value) ?? null
            : value instanceof Import.SoundEffects ? this.values.find(enumerable => enumerable.soundEffectReference === value) ?? null
                : null
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Musics = Musics, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Musics
    public static getValue(value: PossibleValue,): | Musics | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn<Musics>(this, value,)
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleMusic = | SingleSoundEffectMusic | SoundEffectMusicWithDifferentEditor | BackgroundMusic | NonChangeableSoundEffectBackgroundMusic | SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect