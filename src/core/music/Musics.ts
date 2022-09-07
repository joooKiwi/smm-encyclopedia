import type {BackgroundMusic}                                                                                                                                                       from './backgroundMusic/BackgroundMusic';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Music.types';
import type {ObjectHolder}                                                                                                                                                          from '../../util/holder/ObjectHolder';
import type {SingleSoundEffectMusic}                                                                                                                                                from './soundEffect/SingleSoundEffectMusic';
import type {SoundEffectMusicWithDifferentEditor}                                                                                                                                   from './soundEffect/SoundEffectMusicWithDifferentEditor';
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect}                                                                                                              from './backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {BackgroundMusicContainer}                                          from './backgroundMusic/BackgroundMusic.container';
import {Enum}                                                              from '../../util/enum/Enum';
import {Enumerable}                                                        from '../../util/enum/Enumerable';
import {Import}                                                            from '../../util/DynamicImporter';
import {NonChangeableSoundEffectBackgroundMusicContainer}                  from './backgroundMusic/NonChangeableSoundEffectBackgroundMusic.container';
import {ObjectHolders}                                                     from '../../util/holder/objectHolders';
import {ObjectHolderContainer}                                             from '../../util/holder/ObjectHolder.container';
import {NonChangeableSoundEffectBackgroundMusic}                           from './backgroundMusic/NonChangeableSoundEffectBackgroundMusic';
import {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer} from './backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect.container';
import {SingleSoundEffectMusicContainer}                                   from './soundEffect/SingleSoundEffectMusic.container';
import {SoundEffectMusicWithDifferentEditorContainer}                      from './soundEffect/SoundEffectMusicWithDifferentEditor.container';
import type {SoundEffects}                                                 from '../soundEffect/SoundEffects';
import type {Themes}                                                       from '../theme/Themes';

/**
 * @todo add other musics (from title screen, theme, star, p-switch)
 * @todo change the BackgroundMusicContainer creation in a builder instead
 * @recursiveReference {@link SoundEffects}
 */
export class Musics
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly TITLE_SCREEN = new Musics();

    public static readonly GROUND = new class Musics_Ground extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.GROUND;
        }

    }();
    public static readonly UNDERGROUND = new class Musics_Underground extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.UNDERGROUND;
        }

    }();
    public static readonly UNDERWATER = new class Musics_Underwater extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.UNDERWATER;
        }

    }();
    public static readonly DESERT = new class Musics_Desert extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.DESERT;
        }

    }();
    public static readonly SNOW = new class Musics_Snow extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.SNOW;
        }

    }();
    public static readonly SKY = new class Musics_Sky extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.SKY;
        }

    }();
    public static readonly FOREST = new class Musics_Forest extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.FOREST;
        }

    }();
    public static readonly GHOST_HOUSE = new class Musics_GhostHouse extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.GHOST_HOUSE;
        }

    }();
    public static readonly AIRSHIP = new class Musics_Airship extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.AIRSHIP;
        }

    }();
    public static readonly CASTLE = new class Musics_Castle extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.CASTLE;
        }

    }();

    public static readonly VOLCANO = new class Musics_Volcano extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.VOLCANO;
        }

    }();
    public static readonly SPACE = new class Musics_Space extends Musics {

        protected override _createThemeReference() {
            return Import.Themes.SPACE;
        }

    }();

    public static readonly STAR = new Musics();
    public static readonly P_SWITCH = new Musics();

    public static readonly NINJA_ATTACK = new class Musics_Audience extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.NINJA_ATTACK;
        }

        protected override _createMusic() {
            return new SoundEffectMusicWithDifferentEditorContainer('BGM_Otoasobi_Dtbt_Murasame', 'BGM_Otoasobi_Dtbt_MurasameIcon',);
        }

    }();
    public static readonly AUDIENCE = new class Musics_Audience extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.AUDIENCE;
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer('se_otoasobi_clowd',);
        }

    }();
    public static readonly SCATTING = new class Musics_Scatting extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.SCATTING;
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer('otoasobi_scat',);
        }

    }();
    public static readonly TRADITIONAL = new class Musics_Traditional extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.TRADITIONAL;
        }

        protected override _createMusic() {
            return new SingleSoundEffectMusicContainer('se_otoasobi_ohayashi',);
        }

    }();
    public static readonly PEACEFUL = new class Musics_Peaceful extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.PEACEFUL;
        }

        protected override _createMusic() {
            return new SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer('M1_BGM_Otoasobi_Link_Healing', 'BGM_M1_USA_Ending',);
        }

    }();

    public static readonly BONUS = new class Musics_Bonus extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.BONUS_MUSIC;
        }

        protected override _createMusic() {
            return new BackgroundMusicContainer('M1_BGM_Otoasobi_Bonus', 'M1_BGM_Otoasobi_Bonus', 'M1_BGM_Otoasobi_BonusHurry',
                'M1_BGM_Otoasobi_Link_Bonus', 'M1_BGM_Otoasobi_Link_BonusHurry',
                'BGM_M1_USA_CharacterSelect', 'BGM_M1_USA_CharacterSelect_hurry',
                'M3_BGM_Otoasobi_Bonus', 'M3_BGM_Otoasobi_Bonus', 'M3_BGM_Otoasobi_BonusHurry',
                'MW_BGM_Otoasobi_Bonus', 'MW_BGM_Otoasobi_Bonus', null, 'MW_BGM_Otoasobi_BonusHurry', null,
                'WU_BGM_Otoasobi_Bonus - Track 1', 'WU_BGM_Otoasobi_Bonus - Track 1', 'WU_BGM_Otoasobi_Bonus - Track 2', 'WU_BGM_Otoasobi_BonusHurry - Track 1', 'WU_BGM_Otoasobi_BonusHurry - Track 2',
                '3W_BGM_Otoasobi_Bonus', '3W_BGM_Otoasobi_Bonus', null, '3W_BGM_Otoasobi_BonusHurry', null,
            );
        }

    }();
    public static readonly BOSS = new class Musics_Boss extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.BOSS_MUSIC;
        }

        protected override _createMusic() {
            return new BackgroundMusicContainer('M1_BGM_Otoasobi_Boss', 'M1_BGM_Otoasobi_Boss', 'M1_BGM_Otoasobi_BossHurry',
                'M1_BGM_Link_Boss', 'M1_BGM_Link_Boss_Hurry',
                'BGM_M1_USA_Boss', 'BGM_M1_USA_LastBoss_hurry',
                'M3_BGM_Otoasobi_Boss', 'M3_BGM_Otoasobi_Boss', 'M3_BGM_Otoasobi_BossHurry',
                'MW_BGM_Otoasobi_Boss', 'MW_BGM_Otoasobi_Boss', null, 'MW_BGM_Otoasobi_BossHurry', null,
                'WU_BGM_Otoasobi_Boss', 'WU_BGM_Otoasobi_Boss', null, 'WU_BGM_Otoasobi_BossHurry', null,
                '3W_BGM_Otoasobi_Boss', '3W_BGM_Otoasobi_Boss', null, '3W_BGM_Otoasobi_BossHurry', null,
            );
        }

    }();
    public static readonly FINAL_BOSS = new class Musics_FinalBoss extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.FINAL_BOSS_MUSIC;
        }

        protected override _createMusic() {
            return new BackgroundMusicContainer('M3_BGM_Otoasobi_LastBoss', 'M3_BGM_Otoasobi_LastBoss', 'M3_BGM_Otoasobi_LastBossHurry',
                'M1_BGM_Link_LastBoss', 'M1_BGM_Link_LastBoss_Hurry',
                'BGM_M1_USA_LastBoss', 'BGM_M1_USA_LastBoss_hurry',
                'M3_BGM_Otoasobi_LastBoss', 'M3_BGM_Otoasobi_LastBoss', 'M3_BGM_Otoasobi_LastBossHurry',
                'MW_BGM_Otoasobi_LastBossIcon', 'MW_BGM_Otoasobi_LastBoss', null, 'MW_BGM_Otoasobi_LastBossHurry', null,
                'WU_BGM_Otoasobi_LastBoss', 'WU_BGM_Otoasobi_LastBoss', null, 'WU_BGM_Otoasobi_LastBossHurry', null,
                '3W_BGM_Otoasobi_LastBoss', '3W_BGM_Otoasobi_LastBoss', null, '3W_BGM_Otoasobi_LastBossHurry', null,
            );
        }

    }();

    public static readonly SUPER_MARIO_KART = new class Musics_SuperMarioKart extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC;
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer('BGM_Otoasobi_SFCMarioKart_Circuit', 'BGM_Otoasobi_SFCMarioKartHurry_Circuit',);
        }

    }();
    public static readonly SUPER_MARIO_64 = new class Musics_SuperMario64 extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.SUPER_MARIO_64_MUSIC;
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer('BGM_Otoasobi_SuperMario64_Slider', 'BGM_Otoasobi_SuperMario64Hurry_Slider',);
        }

    }();
    public static readonly SUPER_MARIO_SUNSHINE = new class Musics_SuperMarioSunshine extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC;
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer('BGM_Otoasobi_MarioSunshine_DolphicTown', 'BGM_Otoasobi_MarioSunshineHurry_DolphicTown',);
        }

    }();
    public static readonly SUPER_MARIO_GALAXY = new class Musics_SuperMarioGalaxy extends Musics {

        protected override _createSoundEffectHolder() {
            return Import.SoundEffects.SUPER_MARIO_GALAXY_MUSIC;
        }

        protected override _createMusic() {
            return new NonChangeableSoundEffectBackgroundMusicContainer('BGM_Otoasobi_MarioGalaxy_WindGarden', 'BGM_Otoasobi_MarioGalaxyHurry_WindGarden',);
        }

    }();

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Musics;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    #gameStyleHolder?: ObjectHolder<| Themes | null>;
    #soundEffectHolder?: ObjectHolder<| SoundEffects | null>;

    #music?: ObjectHolder<| PossibleMusic | null>;

    //endregion -------------------- Fields --------------------

    private constructor() {
        super();
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Other reference methods --------------------

    protected _createThemeReference(): | Themes | null {
        return null;
    }

    private get __themeReference(): ObjectHolder<| Themes | null> {
        if (this.#gameStyleHolder == null) {
            const value = this._createThemeReference();
            this.#gameStyleHolder = value == null ? ObjectHolders.NULL : new ObjectHolderContainer<Themes>(value);
        }
        return this.#gameStyleHolder;
    }

    public get themeReference(): | Themes | null {
        return this.__themeReference.get;
    }


    protected _createSoundEffectHolder(): | SoundEffects | null {
        return null;
    }

    private get __soundEffectReference(): ObjectHolder<| SoundEffects | null> {
        if (this.#soundEffectHolder == null) {
            const value = this._createSoundEffectHolder();
            this.#soundEffectHolder = value == null ? ObjectHolders.NULL : new ObjectHolderContainer(value);
        }
        return this.#soundEffectHolder;
    }

    public get soundEffectReference(): | SoundEffects | null {
        return this.__soundEffectReference.get;
    }

    //endregion -------------------- Other reference methods --------------------
    //region -------------------- Music methods --------------------

    protected _createMusic(): | PossibleMusic | null {
        return null;
    }

    private get __music(): ObjectHolder<| PossibleMusic | null> {
        if (this.#music == null) {
            const value = this._createMusic();
            this.#music = value == null ? ObjectHolders.NULL : new ObjectHolderContainer(value);
        }
        return this.#music;
    }

    public get music(): | PossibleMusic | null {
        return this.__music.get;
    }

    //endregion -------------------- Music methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<Musics> {
        return Musics;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByEnumerable(value: Enumerable,) {
        return value instanceof Import.Themes
            ? this.values.find(enumerable => enumerable.themeReference === value) ?? null
            : value instanceof Import.SoundEffects ? this.values.find(enumerable => enumerable.soundEffectReference === value) ?? null
                : null;
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
        return Enum.getValueOn<Musics>(this, value,);
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

type PossibleMusic = | SingleSoundEffectMusic | SoundEffectMusicWithDifferentEditor | BackgroundMusic | NonChangeableSoundEffectBackgroundMusic | SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect;
