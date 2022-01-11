import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                        from '../../ClassWithEnglishName';
import type {EnumArray, EnumArray_EnglishName, MiddleSoundEffectImage, Names, Ordinals, PossibleEnglishName, PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2, PossibleEnglishName_SMM2, PossibleImagePath_SMM1, PossibleImagePath_SMM2, PossibleNonNullableValue, PossibleStringValue, PossibleValue, StartingSoundEffectImage} from './SoundEffects.types';
import type {StaticReference}                                                                                                                                                                                                                                                                                                             from '../../../util/enum/Enum.types';

import {Enum}            from '../../../util/enum/Enum';
import {StringContainer} from '../../StringContainer';

export class SoundEffects
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SHOCK =                  new SoundEffects('Shock',                      '1-1',  '1.1', );
    public static readonly SCREAM =                 new SoundEffects('Scream',                     '1-2',  '1.2', );
    public static readonly LAUGHTER =               new SoundEffects('Laughter',                   '10-1', '1.3', );
    public static readonly GUFFAW =                 new SoundEffects('Guffaw',                     null,   '1.4', );
    public static readonly BOOO =                   new SoundEffects('Booo!',                      null,   '1.5', );
    public static readonly CHEER =                  new SoundEffects('Cheer',                      '5-2',  '1.6', );
    public static readonly BABY =                   new SoundEffects('Baby',                       '11-1', '1.7', );
    public static readonly PARTY_POPPER =           new SoundEffects('Party Popper',               null,   '1.8', );
    public static readonly APPLAUSE =               new SoundEffects('Applause',                   '5-1',  '1.9', );
    public static readonly NEAR_MISS =              new SoundEffects('Near Miss',                  null,   '1.10',);

    public static readonly CLATTER =                new SoundEffects('Clatter',                    '2-1',  '2.1', );
    public static readonly DRAMA =                  new SoundEffects('Drama!',                     '2-2',  '2.2', );
    public static readonly KICK =                   new SoundEffects('Kick',                       '3-1',  '2.3', );
    public static readonly JUMP =                   new SoundEffects('Jump',                       '3-2',  '2.4', );
    public static readonly HONK_HONK =              new SoundEffects('Honk Honk',                  '11-2', '2.5', );
    public static readonly PUNCH =                  new SoundEffects('Punch',                      '7-1',  '2.6', );
    public static readonly OINK =                   new SoundEffects('Oink',                       null,   '2.7', );
    public static readonly KUH_THUNK =              new SoundEffects('Kuh-thunk!',                 null,   '2.8', );
    public static readonly BEEP =                   new SoundEffects('Beep!',                      null,   '2.9', );
    public static readonly NINJA_ATTACK =           new SoundEffects('Ninja Attack!',              null,   '2.10',);
    public static readonly ZAP =                    new SoundEffects('Zap!',                       null,   '2.11',);

    public static readonly DING_DONG =              new SoundEffects('Ding Dong',                 '12-1',  '3.1',  );
    public static readonly BZZZT =                  new SoundEffects('Bzzzt!',                    '12-2',  '3.2',  );
    public static readonly GLORY =                  new SoundEffects('Glory',                     '6-1',   '3.3',  );
    public static readonly DOOM =                   new SoundEffects('Doom',                      '6-2' ,  '3.4',  );
    public static readonly YEAH =                   new SoundEffects('Yeah!',                     null,    '3.5',  );
    public static readonly AWW =                    new SoundEffects('Aww...',                    null,    '3.6',  );

    public static readonly FIREWORKS =              new SoundEffects('Fireworks',                 '7-2',   '4.1',  );
    public static readonly AUDIENCE =               new SoundEffects('Audience',                  null,    '4.2',  );
    public static readonly SCATTING =               new SoundEffects('Scatting',                  null,    '4.3',  );
    public static readonly BIRD_CHIRPING =          new SoundEffects('Bird\'s Chirping',          '10-2',  null,   );
    public static readonly SPARK =                  new SoundEffects('Spark',                     null,    '4.4',  );
    public static readonly TRADITIONAL =            new SoundEffects('Traditional',               null,    '4.5',  );
    public static readonly ELECTRIC_GUITAR =        new SoundEffects('Electric Guitar',           null,    '4.6',  );
    public static readonly DISTORTION =             new SoundEffects('Distortion',                '13-2',  null,   );
    public static readonly TWISTY_TURNY =           new SoundEffects('Twisty Turny',              null,    '4.7',  );
    public static readonly WOOZY =                  new SoundEffects('Woozy',                     null,    '4.8',  );
    public static readonly TELEPHONE =              new SoundEffects('Telephone',                 '13-1',  null,   );
    public static readonly FLASH =                  new SoundEffects('Flash',                     null,    '4.9',  );

    public static readonly PEACEFUL =               new SoundEffects('Peaceful',                  null,    '5.1',  );
    public static readonly HORROR =                 new SoundEffects('Horror',                    null,    '5.2',  );
    public static readonly BONUS_MUSIC =            new SoundEffects('Bonus Music',               '9-2',   '5.3',  );
    public static readonly FESTIVE_MUSIC =          new SoundEffects('Festive Music',             '8-1',   null,   );
    public static readonly RAVE_MUSIC =             new SoundEffects('Rave Music',                '8-2',   null,   );
    public static readonly HEARTBEAT =              new SoundEffects('Heartbeat',                 '4-1',   '5.4',  );
    public static readonly SILENCE =                new SoundEffects('Silence',                   '4-2',   '5.5',  );
    public static readonly BIRD_TWEETING_NOISE =    new SoundEffects('Bird\'s Tweeting Noise',    '14-1',  null,   );
    public static readonly CHICKEN_CLUCKING_NOISE = new SoundEffects('Chicken\'s Clucking Noise', '14-2',  null,   );
    public static readonly BOSS_MUSIC =             new SoundEffects('Boss Music',                '9-1',   '5.6',  );
    public static readonly FINAL_BOSS =             new SoundEffects('Final Boss',                null,    '5.7',  );
    public static readonly SUPER_MARIO_KART =       new SoundEffects('Super Mario Kart',          null,    '5.8',  );
    public static readonly SUPER_MARIO_64 =         new SoundEffects('Super Mario 64',            null,    '5.9',  );
    public static readonly SUPER_MARIO_SUNSHINE =   new SoundEffects('Super Mario Sunshine',      null,    '5.10', );
    public static readonly SUPER_MARIO_GALAXY =     new SoundEffects('Super Mario Galaxy',        null,    '5.11', );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: SoundEffects;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #SMM1ImagePath: | PossibleImagePath_SMM1 | null;
    readonly #SMM2ImagePath: | PossibleImagePath_SMM2 | null;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName_SMM1AndSMM2, SMM1PartialImage: MiddleSoundEffectImage, SMM2PartialImage: StartingSoundEffectImage,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM1, PossibleEnglishName_SMM1AndSMM2>, SMM1PartialImage: MiddleSoundEffectImage, SMM2PartialImage: null,)
    private constructor(englishName: Exclude<PossibleEnglishName_SMM2, PossibleEnglishName_SMM1AndSMM2>, SMM1PartialImage: null, SMM2PartialImage: StartingSoundEffectImage,)
    private constructor(englishName: PossibleEnglishName, SMM1PartialImage: | MiddleSoundEffectImage | null, SMM2PartialImage: StartingSoundEffectImage | null,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#SMM1ImagePath = SMM1PartialImage == null ? null : `/sound effects/SMM1/${SMM1PartialImage} - ${englishName as PossibleEnglishName_SMM1}.png`;
        this.#SMM2ImagePath = SMM2PartialImage == null ? null : `/sound effects/SMM2/${SMM2PartialImage} - ${englishName as PossibleEnglishName_SMM2}.png`;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get SMM1ImagePath(): | PossibleImagePath_SMM1 | null {
        return this.#SMM1ImagePath;
    }

    public get SMM2ImagePath(): | PossibleImagePath_SMM2 | null {
        return this.#SMM2ImagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): EnumArray_EnglishName {
        return this.values.map(soundEffect => soundEffect.englishName) as unknown as EnumArray_EnglishName;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<SoundEffects> {
        return SoundEffects;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof SoundEffects[N]
    public static getValue(name: PossibleStringValue,): SoundEffects
    public static getValue(name: string,): | SoundEffects | null
    public static getValue<I extends SoundEffects = SoundEffects, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): SoundEffects
    public static getValue(value: PossibleValue,): | SoundEffects | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(soundEffectCategory => soundEffectCategory.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
