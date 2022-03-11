import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                            from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                                                              from '../ClassWithReference';
import type {EnumArray, EnumArray_EnglishName, EnumArray_Games, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2, PossibleEnglishName_SMM2, PossibleImagePath_SMM1, PossibleImagePath_SMM2, PossibleNonNullableValue, PossibleStringValue, PossibleValue, SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from './SoundEffects.types';
import type {SoundEffect}                                                                                                                                                                                                                                                                                                                                                                                                                     from './SoundEffect';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                 from '../../util/enum/Enum.types';

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

    public static readonly SHOCK =                  new SoundEffects('Shock',                      '00_00',             'Shock',);
    public static readonly SCREAM =                 new SoundEffects('Scream',                     '00_01',             'Scream',);
    public static readonly LAUGHTER =               new SoundEffects('Laughter',                   '09_00',             'Laughter',);
    public static readonly GUFFAW =                 new SoundEffects('Guffaw',                     null,                'LoudLaughter',);
    public static readonly BOOO =                   new SoundEffects('Booo!',                      null,                'Boo',);
    public static readonly CHEER =                  new SoundEffects('Cheer',                      '04_01',             'Cheer',);
    public static readonly BABY =                   new SoundEffects('Baby',                       '10_00',             'Baby',);
    public static readonly PARTY_POPPER =           new SoundEffects('Party Popper',               null,                'Cracker',);
    public static readonly APPLAUSE =               new SoundEffects('Applause',                   '04_00',             'Applause',);
    public static readonly NEAR_MISS =              new SoundEffects('Near Miss',                  null,                'Incident',);

    public static readonly CLATTER =                new SoundEffects('Clatter',                    '01_00',             'Clatter',);
    public static readonly DRAMA =                  new SoundEffects('Drama!',                     '01_01',             'Drama',);
    public static readonly KICK =                   new SoundEffects('Kick',                       '02_00',             'Kick',);
    public static readonly JUMP =                   new SoundEffects('Jump',                       '02_01',             'Jump',);
    public static readonly HONK_HONK =              new SoundEffects('Honk Honk',                  '10_01',             'Honk',);
    public static readonly PUNCH =                  new SoundEffects('Punch',                      '06_00',             'Punch',);
    public static readonly OINK =                   new SoundEffects('Oink',                       null,                'Whoopee',);
    public static readonly KUH_THUNK =              new SoundEffects('Kuh-thunk!',                 null,                'Focus',);
    public static readonly BEEP =                   new SoundEffects('Beep!',                      null,                'Glitch',);
    public static readonly NINJA_ATTACK =           new SoundEffects('Ninja Attack!',              null,                'Uproar',);
    public static readonly ZAP =                    new SoundEffects('Zap!',                       null,                'Discord',);

    public static readonly DING_DONG =              new SoundEffects('Ding Dong',                 '11_00',              'Ding',);
    public static readonly BZZZT =                  new SoundEffects('Bzzzt!',                    '11_01',              'Bzzzt',);
    public static readonly GLORY =                  new SoundEffects('Glory',                     '05_00',              'Glory',);
    public static readonly DOOM =                   new SoundEffects('Doom',                      '05_01',              'Doom',);
    public static readonly YEAH =                   new SoundEffects('Yeah!',                     null,                 'Admiration',);
    public static readonly AWW =                    new SoundEffects('Aww...',                    null,                 'Anguish',);

    public static readonly FIREWORKS =              new SoundEffects('Fireworks',                 '06_01',              'Fireworks',);
    public static readonly AUDIENCE =               new SoundEffects('Audience',                  null,                 'Audience',);
    public static readonly SCATTING =               new SoundEffects('Scatting',                  null,                 'Scat',);
    public static readonly BIRD_CHIRPING =          new SoundEffects('Bird\'s Chirping',          '09_01',              null,);
    public static readonly SPARK =                  new SoundEffects('Spark',                     null,                 'Firecracker',);
    public static readonly TRADITIONAL =            new SoundEffects('Traditional',               null,                 'Ohayasi',);
    public static readonly ELECTRIC_GUITAR =        new SoundEffects('Electric Guitar',           null,                 'ElectricGuitar',);
    public static readonly DISTORTION =             new SoundEffects('Distortion',                '12_01',              null,);
    public static readonly TWISTY_TURNY =           new SoundEffects('Twisty Turny',              null,                 'Filter',);
    public static readonly WOOZY =                  new SoundEffects('Woozy',                     null,                 'SoundEffect',);
    public static readonly TELEPHONE =              new SoundEffects('Telephone',                 '12_00',              null,);
    public static readonly FLASH =                  new SoundEffects('Flash',                     null,                 'Halo',);

    public static readonly PEACEFUL =               new SoundEffects('Peaceful',                  null,                 'Calm',);
    public static readonly HORROR =                 new SoundEffects('Horror',                    null,                 'Unrest',);
    public static readonly BONUS_MUSIC =            new SoundEffects('Bonus Music',               '08_01',              'Bonus',);
    public static readonly FESTIVE_MUSIC =          new SoundEffects('Festive Music',             '07_00',              null,);
    public static readonly RAVE_MUSIC =             new SoundEffects('Rave Music',                '07_01',              null,);
    public static readonly HEARTBEAT =              new SoundEffects('Heartbeat',                 '03_00',              'Heartbeat',);
    public static readonly SILENCE =                new SoundEffects('Silence',                   '03_01',              'Silence',);
    public static readonly BIRD_TWEETING_NOISE =    new SoundEffects('Bird\'s Tweeting Noise',    ['13_00', '14_00',],  null,);
    public static readonly CHICKEN_CLUCKING_NOISE = new SoundEffects('Chicken\'s Clucking Noise', ['13_01', '14_01',],  null,);
    public static readonly BOSS_MUSIC =             new SoundEffects('Boss Music',                '08_00',              'Boss',);
    public static readonly FINAL_BOSS =             new SoundEffects('Final Boss',                null,                 'LastBoss',);
    public static readonly SUPER_MARIO_KART =       new SoundEffects('Super Mario Kart',          null,                 'Mario00',);
    public static readonly SUPER_MARIO_64 =         new SoundEffects('Super Mario 64',            null,                 'Mario01',);
    public static readonly SUPER_MARIO_SUNSHINE =   new SoundEffects('Super Mario Sunshine',      null,                 'Mario02',);
    public static readonly SUPER_MARIO_GALAXY =     new SoundEffects('Super Mario Galaxy',        null,                 'Mario03',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: SoundEffects;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #reference?: SoundEffect;
    readonly #englishName;
    readonly #SMM1ImagePath: | readonly [PossibleImagePath_SMM1,] | readonly [PossibleImagePath_SMM1, PossibleImagePath_SMM1,] | null;
    readonly #SMM2ImagePath: | PossibleImagePath_SMM2 | null;
    static #soundEffect_games?: EnumArray_Games;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName_SMM1AndSMM2, imageNumber_smm1: | SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,], imageName_smm2: SoundEffectImageName_SMM2,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2>, imageNumber_smm1: SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,], imageName_smm2: null,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM2, PossibleEnglishName_SMM1AndSMM2>, imageNumber_smm1: null, imageName_smm2: SoundEffectImageName_SMM2,)
    private constructor(englishName: PossibleEnglishName, imageNumber_smm1: | SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,] | null, imageName_smm2: SoundEffectImageName_SMM2 | null,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#SMM1ImagePath = imageNumber_smm1 == null ? null : typeof imageNumber_smm1 == 'string'
            ? [`/sound effect/Edit_Lyt_P_SE${imageNumber_smm1}.tiff`]
            : [`/sound effect/Edit_Lyt_P_SE${imageNumber_smm1[0]}.tiff`, `/sound effect/Edit_Lyt_P_SE${imageNumber_smm1[1]}.tiff`,];
        this.#SMM2ImagePath = imageName_smm2 == null ? null : `/sound effect/Lyt_E_P_SE_${imageName_smm2}.tiff`;
    }

    //region -------------------- Getter methods --------------------

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): SoundEffect {
        return this.#reference ??= Import.SoundEffectLoader.get.load().get(this.englishName)!;
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

    protected get _static(): StaticReference<SoundEffects> {
        return SoundEffects;
    }


    protected static _getValueByString(value: string,) {
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


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
