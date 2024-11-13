import type {NullOr} from '@joookiwi/type'

import type {PossibleEnglishName_SoundEffect} from 'core/gameReference/GameReferences.types'
import type {SoundEffects}                    from 'core/soundEffect/SoundEffects'
import type {SMM1SoundEffectImageFile}        from 'core/soundEffect/file/SoundEffectImageFile'

enum Enum {

    SHOCK, SCREAM, LAUGHTER, GUFFAW, BOOO,
    CHEER, BABY, PARTY_POPPER, APPLAUSE, NEAR_MISS,

    CLATTER, DRAMA, KICK, JUMP, HONK_HONK,
    PUNCH, OINK, KUH_THUNK, BEEP, NINJA_ATTACK,
    ZAP,

    DING_DONG, BZZZT, GLORY, DOOM, YEAH,
    AWW,

    FIREWORKS, AUDIENCE, SCATTING, BIRD_CHIRPING, SPARK,
    TRADITIONAL, ELECTRIC_GUITAR, DISTORTION, TWISTY_TURNY, WOOZY,
    TELEPHONE, FLASH,

    PEACEFUL, HORROR, FESTIVE_MUSIC, RAVE_MUSIC,
    HEARTBEAT, SILENCE, BIRD_TWEETING_NOISE, CHICKEN_CLUCKING_NOISE,

    BONUS_MUSIC, BOSS_MUSIC, FINAL_BOSS_MUSIC,
    SUPER_MARIO_KART_MUSIC, SUPER_MARIO_64_MUSIC, SUPER_MARIO_SUNSHINE_MUSIC, SUPER_MARIO_GALAXY_MUSIC,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName = | PossibleEnglishName_SMM1 | PossibleEnglishName_SMM2
export type PossibleEnglishName_Games = PossibleEnglishName_SoundEffect
export type PossibleEnglishName_SMM1AndSMM2 =
    | 'Shock' | 'Scream' | 'Laughter' | 'Cheer' | 'Baby'
    | 'Applause'

    | 'Clatter' | 'Drama!' | 'Kick' | 'Jump' | 'Honk Honk'
    | 'Punch'

    | 'Ding Dong' | 'Bzzzt!' | 'Glory' | 'Doom'

    | 'Fireworks'

    | 'Heartbeat' | 'Silence'

    | 'Bonus Music' | 'Boss Music'
export type PossibleEnglishName_SMM1 =
    | PossibleEnglishName_SMM1AndSMM2
    | 'Bird\'s Chirping' | 'Distortion' | 'Telephone'

    | `${| 'Festive' | 'Rave'} Music` | `${| 'Bird\'s Tweeting' | 'Chicken\'s Clucking'} Noise`
export type PossibleEnglishName_SMM2 =
    | PossibleEnglishName_SMM1AndSMM2
    | 'Guffaw' | 'Booo!' | 'Party Popper'
    | 'Near Miss'

    | 'Oink' | 'Kuh-thunk!' | 'Beep!' | 'Ninja Attack!' | 'Zap!'

    | 'Yeah!' | 'Aww...'

    | 'Audience' | 'Scatting' | 'Spark' | 'Traditional' | 'Electric Guitar'
    | 'Twisty Turny' | 'Woozy' | 'Flash'

    | 'Peaceful' | 'Horror'

    | 'Final Boss'
    | PossibleEnglishName_Games

//endregion -------------------- English name --------------------
//region -------------------- Image (SMM1) --------------------

export type PossibleSMM1ImageFiles = NullOr<| readonly [SMM1SoundEffectImageFile,] | readonly [SMM1SoundEffectImageFile, SMM1SoundEffectImageFile,]>
export type SoundEffectImageNumber_SMM1 = `${`0${| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | 10 | 11 | 12 | 13 | 14}_0${| 0 | 1}`

//endregion -------------------- Image (SMM1) --------------------
//region -------------------- Image (SMM2) --------------------

export type SoundEffectImageName_SMM2 =
    | 'Shock' | 'Scream'
    | `${| EmptyString | 'Loud'}Laughter` | 'Boo'
    | 'Cheer' | 'Baby'
    | 'Cracker' | 'Applause'
    | 'Incident' | 'Clatter' | 'Drama'

    | 'Kick' | 'Jump'
    | 'Honk' | 'Punch' | 'Whoopee'
    | 'Focus' | 'Glitch'
    | 'Uproar' | 'Discord'

    | 'Ding' | 'Bzzzt'
    | 'Glory' | 'Doom'
    | 'Admiration' | 'Anguish'

    | 'Fireworks' | 'Audience' | 'Scat'
    | 'Firecracker' | 'Ohayasi'
    | 'ElectricGuitar' | 'Filter' | 'SoundEffect' | 'Halo'

    | 'Calm' | 'Unrest'
    | 'Heartbeat' | 'Silence'

    | 'Bonus' | `${| EmptyString | 'Last'}Boss`
    | `Mario0${| 0 | 1 | 2 | 3}`

//endregion -------------------- Image (SMM2) --------------------
//region -------------------- Array types --------------------

export type SoundEffectGames = readonly [
    typeof SoundEffects['SUPER_MARIO_KART_MUSIC'],
    typeof SoundEffects['SUPER_MARIO_64_MUSIC'],
    typeof SoundEffects['SUPER_MARIO_SUNSHINE_MUSIC'],
    typeof SoundEffects['SUPER_MARIO_GALAXY_MUSIC'],
]

//endregion -------------------- Array types --------------------
