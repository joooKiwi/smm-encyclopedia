import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                    from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                      from '../ClassWithReference';
import type {EnumArray, EnumArray_EnglishName, EnumArray_Games, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2, PossibleEnglishName_SMM2, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundEffects.types';
import type {PossibleSMM1ImagePath, PossibleSMM2ImagePath, SoundEffectImage}                                                                                                                                                                                                                                                          from './image/SoundEffectImage';
import type {SoundEffect}                                                                                                                                                                                                                                                                                                             from './SoundEffect';
import type {StaticReference}                                                                                                                                                                                                                                                                                                         from '../../util/enum/Enum.types';

import {Enum}                        from '../../util/enum/Enum';
import {Import}                      from '../../util/DynamicImporter';
import {SMM1SoundEffectImage}        from './image/SMM1SoundEffectImage';
import {SMM2SoundEffectImage}        from './image/SMM2SoundEffectImage';
import {SoundEffectImageInBothGames} from './image/SoundEffectImageInBothGames';
import SoundEffectComponent          from './SoundEffect.component';
import {StringContainer}             from '../../util/StringContainer';

/**
 * @todo change the images to a different format than the constructor one.
 * @recursiveReference {@link SoundEffectLoader}
 * @classWithDynamicImport {@link SoundEffectLoader}
 */
export class SoundEffects
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffect>,
        ClassWithEnglishName<PossibleEnglishName>,
        SoundEffectImage {

    //region -------------------- Enum instances --------------------

    public static readonly SHOCK =                  new SoundEffects('Shock',                     new SoundEffectImageInBothGames('00_00', 'Shock',),);
    public static readonly SCREAM =                 new SoundEffects('Scream',                    new SoundEffectImageInBothGames('00_01', 'Scream',),);
    public static readonly LAUGHTER =               new SoundEffects('Laughter',                  new SoundEffectImageInBothGames('09_00', 'Laughter',),);
    public static readonly GUFFAW =                 new SoundEffects('Guffaw',                    new SMM2SoundEffectImage('LoudLaughter',),);
    public static readonly BOOO =                   new SoundEffects('Booo!',                     new SMM2SoundEffectImage('Boo',),);
    public static readonly CHEER =                  new SoundEffects('Cheer',                     new SoundEffectImageInBothGames('04_01', 'Cheer',),);
    public static readonly BABY =                   new SoundEffects('Baby',                      new SoundEffectImageInBothGames('10_00', 'Baby',),);
    public static readonly PARTY_POPPER =           new SoundEffects('Party Popper',              new SMM2SoundEffectImage('Cracker',),);
    public static readonly APPLAUSE =               new SoundEffects('Applause',                  new SoundEffectImageInBothGames('04_00', 'Applause',),);
    public static readonly NEAR_MISS =              new SoundEffects('Near Miss',                 new SMM2SoundEffectImage('Incident',),);

    public static readonly CLATTER =                new SoundEffects('Clatter',                   new SoundEffectImageInBothGames('01_00', 'Clatter',),);
    public static readonly DRAMA =                  new SoundEffects('Drama!',                    new SoundEffectImageInBothGames('01_01', 'Drama',),);
    public static readonly KICK =                   new SoundEffects('Kick',                      new SoundEffectImageInBothGames('02_00', 'Kick',),);
    public static readonly JUMP =                   new SoundEffects('Jump',                      new SoundEffectImageInBothGames('02_01', 'Jump',),);
    public static readonly HONK_HONK =              new SoundEffects('Honk Honk',                 new SoundEffectImageInBothGames('10_01', 'Honk',),);
    public static readonly PUNCH =                  new SoundEffects('Punch',                     new SoundEffectImageInBothGames('06_00', 'Punch',),);
    public static readonly OINK =                   new SoundEffects('Oink',                      new SMM2SoundEffectImage('Whoopee',),);
    public static readonly KUH_THUNK =              new SoundEffects('Kuh-thunk!',                new SMM2SoundEffectImage('Focus',),);
    public static readonly BEEP =                   new SoundEffects('Beep!',                     new SMM2SoundEffectImage('Glitch',),);
    public static readonly NINJA_ATTACK =           new SoundEffects('Ninja Attack!',             new SMM2SoundEffectImage('Uproar',),);
    public static readonly ZAP =                    new SoundEffects('Zap!',                      new SMM2SoundEffectImage('Discord',),);

    public static readonly DING_DONG =              new SoundEffects('Ding Dong',                 new SoundEffectImageInBothGames('11_00', 'Ding',),);
    public static readonly BZZZT =                  new SoundEffects('Bzzzt!',                    new SoundEffectImageInBothGames('11_01', 'Bzzzt',),);
    public static readonly GLORY =                  new SoundEffects('Glory',                     new SoundEffectImageInBothGames('05_00', 'Glory',),);
    public static readonly DOOM =                   new SoundEffects('Doom',                      new SoundEffectImageInBothGames('05_01', 'Doom',),);
    public static readonly YEAH =                   new SoundEffects('Yeah!',                     new SMM2SoundEffectImage('Admiration',),);
    public static readonly AWW =                    new SoundEffects('Aww...',                    new SMM2SoundEffectImage('Anguish',),);

    public static readonly FIREWORKS =              new SoundEffects('Fireworks',                 new SoundEffectImageInBothGames('06_01', 'Fireworks',),);
    public static readonly AUDIENCE =               new SoundEffects('Audience',                  new SMM2SoundEffectImage('Audience',),);
    public static readonly SCATTING =               new SoundEffects('Scatting',                  new SMM2SoundEffectImage('Scat',),);
    public static readonly BIRD_CHIRPING =          new SoundEffects('Bird\'s Chirping',          new SMM1SoundEffectImage('09_01',),);
    public static readonly SPARK =                  new SoundEffects('Spark',                     new SMM2SoundEffectImage('Firecracker',),);
    public static readonly TRADITIONAL =            new SoundEffects('Traditional',               new SMM2SoundEffectImage('Ohayasi',),);
    public static readonly ELECTRIC_GUITAR =        new SoundEffects('Electric Guitar',           new SMM2SoundEffectImage('ElectricGuitar',),);
    public static readonly DISTORTION =             new SoundEffects('Distortion',                new SMM1SoundEffectImage('12_01',),);
    public static readonly TWISTY_TURNY =           new SoundEffects('Twisty Turny',              new SMM2SoundEffectImage('Filter',),);
    public static readonly WOOZY =                  new SoundEffects('Woozy',                     new SMM2SoundEffectImage('SoundEffect',),);
    public static readonly TELEPHONE =              new SoundEffects('Telephone',                 new SMM1SoundEffectImage('12_00',),);
    public static readonly FLASH =                  new SoundEffects('Flash',                     new SMM2SoundEffectImage('Halo',),);

    public static readonly PEACEFUL =               new SoundEffects('Peaceful',                  new SMM2SoundEffectImage('Calm',),);
    public static readonly HORROR =                 new SoundEffects('Horror',                    new SMM2SoundEffectImage('Unrest',),);
    public static readonly BONUS_MUSIC =            new SoundEffects('Bonus Music',               new SoundEffectImageInBothGames('08_01', 'Bonus',),);
    public static readonly FESTIVE_MUSIC =          new SoundEffects('Festive Music',             new SMM1SoundEffectImage('07_00',),);
    public static readonly RAVE_MUSIC =             new SoundEffects('Rave Music',                new SMM1SoundEffectImage('07_01',),);
    public static readonly HEARTBEAT =              new SoundEffects('Heartbeat',                 new SoundEffectImageInBothGames('03_00', 'Heartbeat',),);
    public static readonly SILENCE =                new SoundEffects('Silence',                   new SoundEffectImageInBothGames('03_01', 'Silence',),);
    public static readonly BIRD_TWEETING_NOISE =    new SoundEffects('Bird\'s Tweeting Noise',    new SMM1SoundEffectImage('13_00', '14_00',),);
    public static readonly CHICKEN_CLUCKING_NOISE = new SoundEffects('Chicken\'s Clucking Noise', new SMM1SoundEffectImage('13_01', '14_01',),);
    public static readonly BOSS_MUSIC =             new SoundEffects('Boss Music',                new SoundEffectImageInBothGames('08_00', 'Boss',),);
    public static readonly FINAL_BOSS =             new SoundEffects('Final Boss',                new SMM2SoundEffectImage('LastBoss',),);
    public static readonly SUPER_MARIO_KART =       new SoundEffects('Super Mario Kart',          new SMM2SoundEffectImage('Mario02',),);
    public static readonly SUPER_MARIO_64 =         new SoundEffects('Super Mario 64',            new SMM2SoundEffectImage('Mario01',),);
    public static readonly SUPER_MARIO_SUNSHINE =   new SoundEffects('Super Mario Sunshine',      new SMM2SoundEffectImage('Mario02',),);
    public static readonly SUPER_MARIO_GALAXY =     new SoundEffects('Super Mario Galaxy',        new SMM2SoundEffectImage('Mario03',),);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: SoundEffects;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, SoundEffect>;
    static #soundEffect_games?: EnumArray_Games;

    #reference?: SoundEffect;
    readonly #englishName;
    readonly #images: SoundEffectImage;

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName_SMM1AndSMM2, images: SoundEffectImageInBothGames,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2>, images: SMM1SoundEffectImage,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM2, PossibleEnglishName_SMM1AndSMM2>, images: SMM2SoundEffectImage,)
    private constructor(englishName: PossibleEnglishName, images: SoundEffectImage,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#images = images;
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

    //region -------------------- Getter methods (image) --------------------

    public get images(): SoundEffectImage {
        return this.#images;
    }

    public get SMM1ImagePath(): PossibleSMM1ImagePath {
        return this.images.SMM1ImagePath;
    }

    public get SMM2ImagePath(): PossibleSMM2ImagePath {
        return this.images.SMM2ImagePath;
    }

    //endregion -------------------- Getter methods (image) --------------------


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
