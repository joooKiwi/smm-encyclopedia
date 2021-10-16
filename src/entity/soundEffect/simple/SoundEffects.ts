import type {PossibleSoundEffectsEnglishName, SoundEffectsArray, SoundEffectsEnglishNameArray, SoundEffectsNames, SoundEffectsOrdinals} from './SoundEffects.types';

import {Enum} from '../../../util/enum/Enum';

export class SoundEffects
    extends Enum {

    //region -------------------- Enum instances --------------------

    public static readonly SHOCK =                    new SoundEffects('Shock',                       );
    public static readonly SCREAM =                   new SoundEffects('Scream',                      );
    public static readonly LAUGHTER =                 new SoundEffects('Laughter',                    );
    public static readonly GUFAW =                    new SoundEffects('Gufaw',                       );
    public static readonly BOOO =                     new SoundEffects('Booo!',                       );
    public static readonly CHEER =                    new SoundEffects('Cheer',                       );
    public static readonly BABY =                     new SoundEffects('Baby',                        );
    public static readonly PARTY_POPPER =             new SoundEffects('Party Popper',                );
    public static readonly APPLAUSE =                 new SoundEffects('Applause',                    );
    public static readonly NEAR_MISS =                new SoundEffects('Near Miss',                   );

    public static readonly CLATTER =                  new SoundEffects('Clatter',                     );
    public static readonly DRAMA =                    new SoundEffects('Drama!',                      );
    public static readonly KICK =                     new SoundEffects('Kick',                        );
    public static readonly JUMP =                     new SoundEffects('Jump',                        );
    public static readonly HONK_HONK =                new SoundEffects('Honk Honk',                   );
    public static readonly PUNCH =                    new SoundEffects('Punch',                       );
    public static readonly OINK =                     new SoundEffects('Oink',                        );
    public static readonly KUH_THUNK =                new SoundEffects('Kuh-thunk!',                  );
    public static readonly BEEP =                     new SoundEffects('Beep!',                        );
    public static readonly NINJA_ATTACK =             new SoundEffects('Ninja Attack!',               );
    public static readonly ZAP =                      new SoundEffects('Zap!',                        );

    public static readonly DING_DONG =                 new SoundEffects('Ding Dong',                  );
    public static readonly BZZZT =                     new SoundEffects('Bzzzt!',                     );
    public static readonly GLORY =                     new SoundEffects('Glory',                      );
    public static readonly DOOM =                      new SoundEffects('Doom',                       );
    public static readonly YEAH =                      new SoundEffects('Yeah!',                      );
    public static readonly AWW =                       new SoundEffects('Aww...',                     );

    public static readonly FIREWORKS =                 new SoundEffects('Fireworks',                  );
    public static readonly AUDIENCE =                  new SoundEffects('Audience',                   );
    public static readonly SCATTING =                  new SoundEffects('Scatting',                   );
    public static readonly BIRD_CHIRPING =             new SoundEffects('Bird\'s Chirping',           );
    public static readonly SPARK =                     new SoundEffects('Spark',                      );
    public static readonly TRADITIONAL =               new SoundEffects('Traditional',                );
    public static readonly ELECTRIC_GUITAR =           new SoundEffects('Electric Guitar',            );
    public static readonly DISTORTION =                new SoundEffects('Distortion',                 );
    public static readonly TWISTY_TURNY =              new SoundEffects('Twisty Turny',               );
    public static readonly WOOZY =                     new SoundEffects('Woozy',                      );
    public static readonly TELEPHONE =                 new SoundEffects('Telephone',                  );
    public static readonly FLASH =                     new SoundEffects('Flash',                      );

    public static readonly PEACEFUL =                  new SoundEffects('Peaceful',                   );
    public static readonly HORROR =                    new SoundEffects('Horror',                     );
    public static readonly BONUS_MUSIC =               new SoundEffects('Bonus Music',                );
    public static readonly FESTIVE_MUSIC =             new SoundEffects('Festive Music',              );
    public static readonly RAVE_MUSIC =                new SoundEffects('Rave Music',                 );
    public static readonly HEARTBEAT =                 new SoundEffects('Heartbeat',                  );
    public static readonly SILENCE =                   new SoundEffects('Silence',                    );
    public static readonly BIRD_TWEETING_NOISE =       new SoundEffects('Bird\'s Tweeting Noise',     );
    public static readonly CHICKEN_CLUCKING_NOISE =    new SoundEffects('Chicken\'s Clucking Noise',  );
    public static readonly BOSS_MUSIC =                new SoundEffects('Boss Music',                 );
    public static readonly FINAL_BOSS =                new SoundEffects('Final Boss',                 );
    public static readonly SUPER_MARIO_KART =          new SoundEffects('Super Mario Kart',           );
    public static readonly SUPER_MARIO_64 =            new SoundEffects('Super Mario 64',             );
    public static readonly SUPER_MARIO_SUNSHINE =      new SoundEffects('Super Mario Sunshine',       );
    public static readonly SUPER_MARIO_GALAXY =        new SoundEffects('Super Mario Galaxy',         );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: SoundEffectsArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleSoundEffectsEnglishName,) {
        super(SoundEffects);
        this.#englishName = englishName;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleSoundEffectsEnglishName {
        return this.#englishName;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): SoundEffectsEnglishNameArray {
        return this.values.map(soundEffect => soundEffect.englishName) as unknown as SoundEffectsEnglishNameArray;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends SoundEffectsOrdinals = SoundEffectsOrdinals>(ordinal: O,): SoundEffectsArray[O]
    public static getValue<O extends number = number>(ordinal: O,): | NonNullable<SoundEffectsArray[O]> | null
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
            this.SHOCK, this.SCREAM, this.LAUGHTER, this.GUFAW, this.BOOO,
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
