import type {PossibleEnglishName_SoundEffect}  from '../../gameReference/GameReferences.types';
import type {SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types';
import type {SoundEffects}                     from './SoundEffects';

export type PossibleNonNullableValue = | SoundEffects | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | SoundEffects | number | string | null | undefined;

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

    PEACEFUL, HORROR, BONUS_MUSIC, FESTIVE_MUSIC, RAVE_MUSIC,
    HEARTBEAT, SILENCE, BIRD_TWEETING_NOISE, CHICKEN_CLUCKING_NOISE,
    BOSS_MUSIC, FINAL_BOSS,
    SUPER_MARIO_KART, SUPER_MARIO_64, SUPER_MARIO_SUNSHINE, SUPER_MARIO_GALAXY,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names =
    | 'SHOCK' | 'SCREAM' | 'LAUGHTER' | 'GUFFAW' | 'BOOO'
    | 'CHEER' | 'BABY' | 'PARTY_POPPER' | 'APPLAUSE' | 'NEAR_MISS'

    | 'CLATTER' | 'DRAMA' | 'KICK' | 'JUMP' | 'HONK_HONK'
    | 'PUNCH' | 'OINK' | 'KUH_THUNK' | 'BEEP' | 'NINJA_ATTACK'
    | 'ZAP'

    | 'DING_DONG' | 'BZZZT' | 'GLORY' | 'DOOM' | 'YEAH'
    | 'AWW'

    | 'FIREWORKS' | 'AUDIENCE' | 'SCATTING'
    | 'BIRD_CHIRPING' | 'SPARK' | 'TRADITIONAL' | 'ELECTRIC_GUITAR' | 'DISTORTION'
    | 'TWISTY_TURNY' | 'WOOZY' | 'TELEPHONE' | 'FLASH'

    | 'PEACEFUL' | 'HORROR' | 'BONUS_MUSIC' | 'FESTIVE_MUSIC' | 'RAVE_MUSIC'
    | 'HEARTBEAT' | 'SILENCE' | 'BIRD_TWEETING_NOISE' | 'CHICKEN_CLUCKING_NOISE'
    | 'BOSS_MUSIC' | 'FINAL_BOSS'
    | `SUPER_MARIO_${| 'KART' | '64' | 'SUNSHINE' | 'GALAXY'}`;

export type PossibleEnglishName_Games = PossibleEnglishName_SoundEffect;
export type PossibleEnglishName_SMM1AndSMM2 =
    | 'Shock' | 'Scream' | 'Laughter' | 'Cheer' | 'Baby'
    | 'Applause'

    | 'Clatter' | 'Drama!' | 'Kick' | 'Jump' | 'Honk Honk'
    | 'Punch'

    | 'Ding Dong' | 'Bzzzt!' | 'Glory' | 'Doom'

    | 'Fireworks'

    | 'Bonus Music' | 'Heartbeat' | 'Silence' | 'Boss Music';
export type PossibleEnglishName_SMM1 =
    | PossibleEnglishName_SMM1AndSMM2
    | 'Bird\'s Chirping' | 'Distortion' | 'Telephone'

    | `${| 'Festive' | 'Rave'} Music` | `${| 'Bird\'s Tweeting' | 'Chicken\'s Clucking'} Noise`;
export type PossibleEnglishName_SMM2 =
    | PossibleEnglishName_SMM1AndSMM2
    | 'Guffaw' | 'Booo!' | 'Party Popper'
    | 'Near Miss'

    | 'Oink' | 'Kuh-thunk!' | 'Beep!' | 'Ninja Attack!' | 'Zap!'

    | 'Yeah!' | 'Aww...'

    | 'Audience' | 'Scatting' | 'Spark' | 'Traditional' | 'Electric Guitar'
    | 'Twisty Turny' | 'Woozy' | 'Flash'

    | 'Peaceful' | 'Horror' | 'Final Boss'
    | PossibleEnglishName_Games;
export type PossibleEnglishName = | PossibleEnglishName_SMM1 | PossibleEnglishName_SMM2;

export type MiddleSoundEffectImage = `${| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14}-${| 1 | 2}`;
export type PossibleImagePath_SMM1 = `/sound effects/SMM1/${MiddleSoundEffectImage} - ${PossibleEnglishName_SMM1}.png`;

type EveryPossibleSoundEffectStarting = `${| 1 | 2 | 3 | 4 | 5}.${| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}`;
type ExcludedPossibleSoundEffectStarting = | '1.11' | `3.${| 7 | 8 | 9 | 10 | 11}` | `4.${| 10 | 11}`;
export type StartingSoundEffectImage = Exclude<EveryPossibleSoundEffectStarting, ExcludedPossibleSoundEffectStarting>;
export type PossibleImagePath_SMM2 = `/sound effects/SMM2/${StartingSoundEffectImage} - ${PossibleEnglishName_SMM2}.png`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends SoundEffects = SoundEffects, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends SoundEffects = SoundEffects, > = readonly [
    SimpleEnum<T>['SHOCK'], SimpleEnum<T>['SCREAM'], SimpleEnum<T>['LAUGHTER'], SimpleEnum<T>['GUFFAW'], SimpleEnum<T>['BOOO'],
    SimpleEnum<T>['CHEER'], SimpleEnum<T>['BABY'], SimpleEnum<T>['PARTY_POPPER'], SimpleEnum<T>['APPLAUSE'], SimpleEnum<T>['NEAR_MISS'],

    SimpleEnum<T>['CLATTER'], SimpleEnum<T>['DRAMA'], SimpleEnum<T>['KICK'], SimpleEnum<T>['JUMP'], SimpleEnum<T>['HONK_HONK'],
    SimpleEnum<T>['PUNCH'], SimpleEnum<T>['OINK'], SimpleEnum<T>['KUH_THUNK'], SimpleEnum<T>['BEEP'], SimpleEnum<T>['NINJA_ATTACK'],
    SimpleEnum<T>['ZAP'],

    SimpleEnum<T>['DING_DONG'], SimpleEnum<T>['BZZZT'], SimpleEnum<T>['GLORY'], SimpleEnum<T>['DOOM'], SimpleEnum<T>['YEAH'],
    SimpleEnum<T>['AWW'],

    SimpleEnum<T>['FIREWORKS'], SimpleEnum<T>['AUDIENCE'], SimpleEnum<T>['SCATTING'],
    SimpleEnum<T>['BIRD_CHIRPING'], SimpleEnum<T>['SPARK'], SimpleEnum<T>['TRADITIONAL'], SimpleEnum<T>['ELECTRIC_GUITAR'], SimpleEnum<T>['DISTORTION'],
    SimpleEnum<T>['TWISTY_TURNY'], SimpleEnum<T>['WOOZY'], SimpleEnum<T>['TELEPHONE'], SimpleEnum<T>['FLASH'],

    SimpleEnum<T>['PEACEFUL'], SimpleEnum<T>['HORROR'], SimpleEnum<T>['BONUS_MUSIC'], SimpleEnum<T>['FESTIVE_MUSIC'], SimpleEnum<T>['RAVE_MUSIC'],
    SimpleEnum<T>['HEARTBEAT'], SimpleEnum<T>['SILENCE'], SimpleEnum<T>['BIRD_TWEETING_NOISE'], SimpleEnum<T>['CHICKEN_CLUCKING_NOISE'],
    SimpleEnum<T>['BOSS_MUSIC'], SimpleEnum<T>['FINAL_BOSS'],
    SimpleEnum<T>['SUPER_MARIO_KART'], SimpleEnum<T>['SUPER_MARIO_64'], SimpleEnum<T>['SUPER_MARIO_SUNSHINE'], SimpleEnum<T>['SUPER_MARIO_GALAXY'],

];
export type EnumArray_EnglishName = readonly [
    'Shock', 'Scream', 'Laughter', 'Guffaw', 'Booo!',
    'Cheer', 'Baby', 'Party Popper', 'Applause', 'Near Miss',

    'Clatter', 'Drama!', 'Kick', 'Jump', 'Honk Honk',
    'Punch', 'Oink', 'Kuh-thunk!', 'Beep!', 'Ninja Attack!',
    'Zap!',

    'Ding Dong', 'Bzzzt!', 'Glory', 'Doom', 'Yeah!',
    'Aww...',

    'Fireworks', 'Audience', 'Scatting', 'Bird\'s Chirping', 'Spark',
    'Traditional', 'Electric Guitar', 'Distortion', 'Twisty Turny', 'Woozy',
    'Telephone', 'Flash',

    'Peaceful', 'Horror', 'Bonus Music', 'Festive Music', 'Rave Music',
    'Heartbeat', 'Silence', 'Bird\'s Tweeting Noise', 'Chicken\'s Clucking Noise',
    'Boss Music', 'Final Boss',
    'Super Mario Kart', 'Super Mario 64', 'Super Mario Sunshine', 'Super Mario Galaxy',
];

//endregion -------------------- Array types --------------------
