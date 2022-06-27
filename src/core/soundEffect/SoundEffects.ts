import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                            from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                                                              from '../ClassWithReference';
import type {EnumArray, EnumArray_EnglishName, EnumArray_Games, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2, PossibleEnglishName_SMM2, PossibleImagePath_SMM1, PossibleImagePath_SMM2, PossibleNonNullableValue, PossibleStringValue, PossibleValue, SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from './SoundEffects.types';
import type {SoundEffect}                                                                                                                                                                                                                                                                                                                                                                                                                     from './SoundEffect';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                 from '../../util/enum/Enum.types';

import {BASE_PATH}          from '../../variables';
import {Enum}               from '../../util/enum/Enum';
import {Import}             from '../../util/DynamicImporter';
import SoundEffectComponent from './SoundEffect.component';
import {StringContainer}    from '../../util/StringContainer';

/**
 * @recursiveReference {@link SoundEffectLoader}
 * @classWithDynamicImport {@link SoundEffectLoader}
 */
export class SoundEffects
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffect>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ SHOCK;
    public static/* readonly*/ SCREAM;
    public static/* readonly*/ LAUGHTER;
    public static/* readonly*/ GUFFAW;
    public static/* readonly*/ BOOO;
    public static/* readonly*/ CHEER;
    public static/* readonly*/ BABY;
    public static/* readonly*/ PARTY_POPPER;
    public static/* readonly*/ APPLAUSE;
    public static/* readonly*/ NEAR_MISS;

    public static/* readonly*/ CLATTER;
    public static/* readonly*/ DRAMA;
    public static/* readonly*/ KICK;
    public static/* readonly*/ JUMP;
    public static/* readonly*/ HONK_HONK;
    public static/* readonly*/ PUNCH;
    public static/* readonly*/ OINK;
    public static/* readonly*/ KUH_THUNK;
    public static/* readonly*/ BEEP;
    public static/* readonly*/ NINJA_ATTACK;
    public static/* readonly*/ ZAP;

    public static/* readonly*/ DING_DONG;
    public static/* readonly*/ BZZZT;
    public static/* readonly*/ GLORY;
    public static/* readonly*/ DOOM;
    public static/* readonly*/ YEAH;
    public static/* readonly*/ AWW;

    public static/* readonly*/ FIREWORKS;
    public static/* readonly*/ AUDIENCE;
    public static/* readonly*/ SCATTING;
    public static/* readonly*/ BIRD_CHIRPING;
    public static/* readonly*/ SPARK;
    public static/* readonly*/ TRADITIONAL;
    public static/* readonly*/ ELECTRIC_GUITAR;
    public static/* readonly*/ DISTORTION;
    public static/* readonly*/ TWISTY_TURNY;
    public static/* readonly*/ WOOZY;
    public static/* readonly*/ TELEPHONE;
    public static/* readonly*/ FLASH;

    public static/* readonly*/ PEACEFUL;
    public static/* readonly*/ HORROR;
    public static/* readonly*/ BONUS_MUSIC;
    public static/* readonly*/ FESTIVE_MUSIC;
    public static/* readonly*/ RAVE_MUSIC;
    public static/* readonly*/ HEARTBEAT;
    public static/* readonly*/ SILENCE;
    public static/* readonly*/ BIRD_TWEETING_NOISE;
    public static/* readonly*/ CHICKEN_CLUCKING_NOISE;
    public static/* readonly*/ BOSS_MUSIC;
    public static/* readonly*/ FINAL_BOSS;
    public static/* readonly*/ SUPER_MARIO_KART;
    public static/* readonly*/ SUPER_MARIO_64;
    public static/* readonly*/ SUPER_MARIO_SUNSHINE;
    public static/* readonly*/ SUPER_MARIO_GALAXY;

    static {
        this.SHOCK =                  new SoundEffects('Shock',                      '00_00',             'Shock',);
        this.SCREAM =                 new SoundEffects('Scream',                     '00_01',             'Scream',);
        this.LAUGHTER =               new SoundEffects('Laughter',                   '09_00',             'Laughter',);
        this.GUFFAW =                 new SoundEffects('Guffaw',                     null,                'LoudLaughter',);
        this.BOOO =                   new SoundEffects('Booo!',                      null,                'Boo',);
        this.CHEER =                  new SoundEffects('Cheer',                      '04_01',             'Cheer',);
        this.BABY =                   new SoundEffects('Baby',                       '10_00',             'Baby',);
        this.PARTY_POPPER =           new SoundEffects('Party Popper',               null,                'Cracker',);
        this.APPLAUSE =               new SoundEffects('Applause',                   '04_00',             'Applause',);
        this.NEAR_MISS =              new SoundEffects('Near Miss',                  null,                'Incident',);

        this.CLATTER =                new SoundEffects('Clatter',                    '01_00',             'Clatter',);
        this.DRAMA =                  new SoundEffects('Drama!',                     '01_01',             'Drama',);
        this.KICK =                   new SoundEffects('Kick',                       '02_00',             'Kick',);
        this.JUMP =                   new SoundEffects('Jump',                       '02_01',             'Jump',);
        this.HONK_HONK =              new SoundEffects('Honk Honk',                  '10_01',             'Honk',);
        this.PUNCH =                  new SoundEffects('Punch',                      '06_00',             'Punch',);
        this.OINK =                   new SoundEffects('Oink',                       null,                'Whoopee',);
        this.KUH_THUNK =              new SoundEffects('Kuh-thunk!',                 null,                'Focus',);
        this.BEEP =                   new SoundEffects('Beep!',                      null,                'Glitch',);
        this.NINJA_ATTACK =           new SoundEffects('Ninja Attack!',              null,                'Uproar',);
        this.ZAP =                    new SoundEffects('Zap!',                       null,                'Discord',);

        this.DING_DONG =              new SoundEffects('Ding Dong',                 '11_00',              'Ding',);
        this.BZZZT =                  new SoundEffects('Bzzzt!',                    '11_01',              'Bzzzt',);
        this.GLORY =                  new SoundEffects('Glory',                     '05_00',              'Glory',);
        this.DOOM =                   new SoundEffects('Doom',                      '05_01',              'Doom',);
        this.YEAH =                   new SoundEffects('Yeah!',                     null,                 'Admiration',);
        this.AWW =                    new SoundEffects('Aww...',                    null,                 'Anguish',);

        this.FIREWORKS =              new SoundEffects('Fireworks',                 '06_01',              'Fireworks',);
        this.AUDIENCE =               new SoundEffects('Audience',                  null,                 'Audience',);
        this.SCATTING =               new SoundEffects('Scatting',                  null,                 'Scat',);
        this.BIRD_CHIRPING =          new SoundEffects('Bird\'s Chirping',          '09_01',              null,);
        this.SPARK =                  new SoundEffects('Spark',                     null,                 'Firecracker',);
        this.TRADITIONAL =            new SoundEffects('Traditional',               null,                 'Ohayasi',);
        this.ELECTRIC_GUITAR =        new SoundEffects('Electric Guitar',           null,                 'ElectricGuitar',);
        this.DISTORTION =             new SoundEffects('Distortion',                '12_01',              null,);
        this.TWISTY_TURNY =           new SoundEffects('Twisty Turny',              null,                 'Filter',);
        this.WOOZY =                  new SoundEffects('Woozy',                     null,                 'SoundEffect',);
        this.TELEPHONE =              new SoundEffects('Telephone',                 '12_00',              null,);
        this.FLASH =                  new SoundEffects('Flash',                     null,                 'Halo',);

        this.PEACEFUL =               new SoundEffects('Peaceful',                  null,                 'Calm',);
        this.HORROR =                 new SoundEffects('Horror',                    null,                 'Unrest',);
        this.BONUS_MUSIC =            new SoundEffects('Bonus Music',               '08_01',              'Bonus',);
        this.FESTIVE_MUSIC =          new SoundEffects('Festive Music',             '07_00',              null,);
        this.RAVE_MUSIC =             new SoundEffects('Rave Music',                '07_01',              null,);
        this.HEARTBEAT =              new SoundEffects('Heartbeat',                 '03_00',              'Heartbeat',);
        this.SILENCE =                new SoundEffects('Silence',                   '03_01',              'Silence',);
        this.BIRD_TWEETING_NOISE =    new SoundEffects('Bird\'s Tweeting Noise',    ['13_00', '14_00',],  null,);
        this.CHICKEN_CLUCKING_NOISE = new SoundEffects('Chicken\'s Clucking Noise', ['13_01', '14_01',],  null,);
        this.BOSS_MUSIC =             new SoundEffects('Boss Music',                '08_00',              'Boss',);
        this.FINAL_BOSS =             new SoundEffects('Final Boss',                null,                 'LastBoss',);
        this.SUPER_MARIO_KART =       new SoundEffects('Super Mario Kart',          null,                 'Mario00',);
        this.SUPER_MARIO_64 =         new SoundEffects('Super Mario 64',            null,                 'Mario01',);
        this.SUPER_MARIO_SUNSHINE =   new SoundEffects('Super Mario Sunshine',      null,                 'Mario02',);
        this.SUPER_MARIO_GALAXY =     new SoundEffects('Super Mario Galaxy',        null,                 'Mario03',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: SoundEffects;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, SoundEffect>;
    static #soundEffect_games?: EnumArray_Games;

    #reference?: SoundEffect;
    readonly #englishName;
    readonly #SMM1ImagePath: | readonly [PossibleImagePath_SMM1,] | readonly [PossibleImagePath_SMM1, PossibleImagePath_SMM1,] | null;
    readonly #SMM2ImagePath: | PossibleImagePath_SMM2 | null;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName_SMM1AndSMM2, imageNumber_smm1: | SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,], imageName_smm2: SoundEffectImageName_SMM2,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2>, imageNumber_smm1: SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,], imageName_smm2: null,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM2, PossibleEnglishName_SMM1AndSMM2>, imageNumber_smm1: null, imageName_smm2: SoundEffectImageName_SMM2,)
    private constructor(englishName: PossibleEnglishName, imageNumber_smm1: | SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,] | null, imageName_smm2: SoundEffectImageName_SMM2 | null,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#SMM1ImagePath = imageNumber_smm1 == null ? null : typeof imageNumber_smm1 == 'string'
            ? [`/${BASE_PATH}/sound effect/Edit_Lyt_P_SE${imageNumber_smm1}.tiff`]
            : [`/${BASE_PATH}/sound effect/Edit_Lyt_P_SE${imageNumber_smm1[0]}.tiff`, `/${BASE_PATH}/sound effect/Edit_Lyt_P_SE${imageNumber_smm1[1]}.tiff`,];
        this.#SMM2ImagePath = imageName_smm2 == null ? null : `/${BASE_PATH}/sound effect/Lyt_E_P_SE_${imageName_smm2}.tiff`;
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, SoundEffect> {
        return this.#REFERENCE_MAP ??= Import.SoundEffectLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): SoundEffect {
        return this.#reference ??= SoundEffects.REFERENCE_MAP.get(this.englishName)!;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get SMM1ImagePath(): | readonly [PossibleImagePath_SMM1,] | readonly [PossibleImagePath_SMM1, PossibleImagePath_SMM1,] | null {
        return this.#SMM1ImagePath;
    }

    public get SMM2ImagePath(): | PossibleImagePath_SMM2 | null {
        return this.#SMM2ImagePath;
    }


    public static get soundEffect_games(): EnumArray_Games {
        return this.#soundEffect_games ??= [this.SUPER_MARIO_KART, this.SUPER_MARIO_64, this.SUPER_MARIO_SUNSHINE, this.SUPER_MARIO_GALAXY,];
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get renderSingleComponent() {
        return SoundEffectComponent.render(this);
    }

    public static get everyEnglishNames(): EnumArray_EnglishName {
        return this.values.map(soundEffect => soundEffect.englishName) as unknown as EnumArray_EnglishName;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<SoundEffects> {
        return SoundEffects;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends SoundEffects = SoundEffects, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): SoundEffects
    public static getValue(value: PossibleValue,): | SoundEffects | null
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
