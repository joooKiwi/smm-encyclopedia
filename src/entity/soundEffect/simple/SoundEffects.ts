import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                      from '../../ClassWithEnglishName';
import type {MiddleSoundEffectImage, PossibleSMM1SoundEffectImagePath, PossibleSMM2SoundEffectImagePath, PossibleSoundEffectsEnglishName, PossibleSoundEffectsEnglishNameInBothGames, PossibleSoundEffectsInSMM1EnglishName, PossibleSoundEffectsInSMM2EnglishName, SoundEffectsArray, SoundEffectsEnglishNameArray, SoundEffectsNames, SoundEffectsOrdinals, StartingSoundEffectImage} from './SoundEffects.types';

import {Enum} from '../../../util/enum/Enum';

export class SoundEffects
    extends Enum
    implements ClassWithEnglishName<PossibleSoundEffectsEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SHOCK =                  new SoundEffects('Shock',                      '1',        '1.1', );
    public static readonly SCREAM =                 new SoundEffects('Scream',                     '1 (alt)',  '1.2', );
    public static readonly LAUGHTER =               new SoundEffects('Laughter',                   '8',        '1.3', );
    public static readonly GUFFAW =                 new SoundEffects('Guffaw',                     null,       '1.4', );
    public static readonly BOOO =                   new SoundEffects('Booo!',                      null,       '1.5', );
    public static readonly CHEER =                  new SoundEffects('Cheer',                      '4 (alt)',  '1.6', );
    public static readonly BABY =                   new SoundEffects('Baby',                       '9',        '1.7', );
    public static readonly PARTY_POPPER =           new SoundEffects('Party Popper',               null,       '1.8', );
    public static readonly APPLAUSE =               new SoundEffects('Applause',                   '4',        '1.9', );
    public static readonly NEAR_MISS =              new SoundEffects('Near Miss',                  null,       '1.10',);

    public static readonly CLATTER =                new SoundEffects('Clatter',                    '2',        '2.1', );
    public static readonly DRAMA =                  new SoundEffects('Drama!',                     '2 (alt)',  '2.2', );
    public static readonly KICK =                   new SoundEffects('Kick',                       '3',        '2.3', );
    public static readonly JUMP =                   new SoundEffects('Jump',                       '3 (alt)',  '2.4', );
    public static readonly HONK_HONK =              new SoundEffects('Honk Honk',                  '9 (alt)',  '2.5', );
    public static readonly PUNCH =                  new SoundEffects('Punch',                      '6',        '2.6', );
    public static readonly OINK =                   new SoundEffects('Oink',                       null,       '2.7', );
    public static readonly KUH_THUNK =              new SoundEffects('Kuh-thunk!',                 null,       '2.8', );
    public static readonly BEEP =                   new SoundEffects('Beep!',                      null,       '2.9', );
    public static readonly NINJA_ATTACK =           new SoundEffects('Ninja Attack!',              null,       '2.10',);
    public static readonly ZAP =                    new SoundEffects('Zap!',                       null,       '2.11',);

    public static readonly DING_DONG =              new SoundEffects('Ding Dong',                 '10',       '3.1',  );
    public static readonly BZZZT =                  new SoundEffects('Bzzzt!',                    '10 (alt)', '3.2',  );
    public static readonly GLORY =                  new SoundEffects('Glory',                     '5',        '3.3',  );
    public static readonly DOOM =                   new SoundEffects('Doom',                      '5 (alt)' , '3.4',  );
    public static readonly YEAH =                   new SoundEffects('Yeah!',                     null,       '3.5',  );
    public static readonly AWW =                    new SoundEffects('Aww...',                    null,       '3.6',  );

    public static readonly FIREWORKS =              new SoundEffects('Fireworks',                 '6 (alt)',  '4.1',  );
    public static readonly AUDIENCE =               new SoundEffects('Audience',                  null,       '4.2',  );
    public static readonly SCATTING =               new SoundEffects('Scatting',                  null,       '4.3',  );
    public static readonly BIRD_CHIRPING =          new SoundEffects('Bird\'s Chirping',          '8 (alt)',  null,   );
    public static readonly SPARK =                  new SoundEffects('Spark',                     null,       '4.4',  );
    public static readonly TRADITIONAL =            new SoundEffects('Traditional',               null,       '4.5',  );
    public static readonly ELECTRIC_GUITAR =        new SoundEffects('Electric Guitar',           null,       '4.6',  );
    public static readonly DISTORTION =             new SoundEffects('Distortion',                '11 (alt)', null,   );
    public static readonly TWISTY_TURNY =           new SoundEffects('Twisty Turny',              null,       '4.7',  );
    public static readonly WOOZY =                  new SoundEffects('Woozy',                     null,       '4.8',  );
    public static readonly TELEPHONE =              new SoundEffects('Telephone',                 '11',       null,   );
    public static readonly FLASH =                  new SoundEffects('Flash',                     null,       '4.9',  );

    public static readonly PEACEFUL =               new SoundEffects('Peaceful',                  null,       '5.1',  );
    public static readonly HORROR =                 new SoundEffects('Horror',                    null,       '5.2',  );
    public static readonly BONUS_MUSIC =            new SoundEffects('Bonus Music',               '12 (alt)', '5.3',  );
    public static readonly FESTIVE_MUSIC =          new SoundEffects('Festive Music',             '7',        null,   );
    public static readonly RAVE_MUSIC =             new SoundEffects('Rave Music',                '7 (alt)',  null,   );
    public static readonly HEARTBEAT =              new SoundEffects('Heartbeat',                 '13',       '5.4',  );
    public static readonly SILENCE =                new SoundEffects('Silence',                   '13 (alt)', '5.5',  );
    public static readonly BIRD_TWEETING_NOISE =    new SoundEffects('Bird\'s Tweeting Noise',    '14',       null,   );
    public static readonly CHICKEN_CLUCKING_NOISE = new SoundEffects('Chicken\'s Clucking Noise', '14 (alt)', null,   );
    public static readonly BOSS_MUSIC =             new SoundEffects('Boss Music',                '12',       '5.6',  );
    public static readonly FINAL_BOSS =             new SoundEffects('Final Boss',                null,       '5.7',  );
    public static readonly SUPER_MARIO_KART =       new SoundEffects('Super Mario Kart',          null,       '5.8',  );
    public static readonly SUPER_MARIO_64 =         new SoundEffects('Super Mario 64',            null,       '5.9',  );
    public static readonly SUPER_MARIO_SUNSHINE =   new SoundEffects('Super Mario Sunshine',      null,       '5.10', );
    public static readonly SUPER_MARIO_GALAXY =     new SoundEffects('Super Mario Galaxy',        null,       '5.11', );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: SoundEffectsArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #SMM1ImagePath: | PossibleSMM1SoundEffectImagePath | null;
    readonly #SMM2ImagePath: | PossibleSMM2SoundEffectImagePath | null;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleSoundEffectsEnglishNameInBothGames, SMM1PartialImage: MiddleSoundEffectImage, SMM2PartialImage: StartingSoundEffectImage,)
    private constructor(englishName: Exclude<PossibleSoundEffectsInSMM1EnglishName, PossibleSoundEffectsEnglishNameInBothGames>, SMM1PartialImage: MiddleSoundEffectImage, SMM2PartialImage: null,)
    private constructor(englishName: Exclude<PossibleSoundEffectsInSMM2EnglishName, PossibleSoundEffectsEnglishNameInBothGames>, SMM1PartialImage: null, SMM2PartialImage: StartingSoundEffectImage,)
    private constructor(englishName: PossibleSoundEffectsEnglishName, SMM1PartialImage: | MiddleSoundEffectImage | null, SMM2PartialImage: StartingSoundEffectImage | null,) {
        super(SoundEffects);
        this.#englishName = englishName;
        this.#SMM1ImagePath = SMM1PartialImage == null ? null : `/game/sound effects/SMM1/${SMM1PartialImage} - ${englishName as PossibleSoundEffectsInSMM1EnglishName}.png`;
        this.#SMM2ImagePath = SMM2PartialImage == null ? null : `/game/sound effects/SMM2/${SMM2PartialImage} - ${englishName as PossibleSoundEffectsInSMM2EnglishName}.png`;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleSoundEffectsEnglishName {
        return this.#englishName;
    }

    public get SMM1ImagePath(): | PossibleSMM1SoundEffectImagePath | null {
        return this.#SMM1ImagePath;
    }

    public get SMM2ImagePath(): | PossibleSMM2SoundEffectImagePath | null {
        return this.#SMM2ImagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): SoundEffectsEnglishNameArray {
        return this.values.map(soundEffect => soundEffect.englishName) as unknown as SoundEffectsEnglishNameArray;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends SoundEffectsOrdinals = SoundEffectsOrdinals, >(ordinal: O,): SoundEffectsArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<SoundEffectsArray[O]> | null
    public static getValue(name: | SoundEffectsNames | PossibleSoundEffectsEnglishName,): SoundEffects
    public static getValue(name: string,): | SoundEffects | null
    public static getValue<I extends SoundEffects = SoundEffects, >(instance: I,): I
    public static getValue(value: | SoundEffects | string | number | null | undefined,): | SoundEffects | null
    public static getValue(value: | SoundEffects | string | number | null | undefined,): | SoundEffects | null {
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

    public static get values(): SoundEffectsArray {
        return this.#VALUES ??= [
            this.SHOCK, this.SCREAM, this.LAUGHTER, this.GUFFAW, this.BOOO,
            this.CHEER, this.BABY, this.PARTY_POPPER, this.APPLAUSE, this.NEAR_MISS,

            this.CLATTER, this.DRAMA, this.KICK, this.JUMP, this.HONK_HONK,
            this.PUNCH, this.OINK, this.KUH_THUNK, this.BEEP, this.NINJA_ATTACK,
            this.ZAP,

            this.DING_DONG, this.BZZZT, this.GLORY, this.DOOM, this.YEAH,
            this.AWW,

            this.FIREWORKS, this.AUDIENCE, this.SCATTING, this.BIRD_CHIRPING, this.SPARK,
            this.TRADITIONAL, this.ELECTRIC_GUITAR, this.DISTORTION, this.TWISTY_TURNY, this.WOOZY,
            this.TELEPHONE, this.FLASH,

            this.PEACEFUL, this.HORROR, this.BONUS_MUSIC, this.FESTIVE_MUSIC, this.RAVE_MUSIC,
            this.HEARTBEAT, this.SILENCE, this.BIRD_TWEETING_NOISE, this.CHICKEN_CLUCKING_NOISE,
            this.BOSS_MUSIC, this.FINAL_BOSS,
            this.SUPER_MARIO_KART, this.SUPER_MARIO_64, this.SUPER_MARIO_SUNSHINE, this.SUPER_MARIO_GALAXY,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
