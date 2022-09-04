import type {BasePath}                                                                                                                                                                                                                                     from '../../variables';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {PossibleEnglishName_SoundEffect}                                                                                                                                                                                                              from '../gameReference/GameReferences.types';
import type {SoundEffects as RealEnum}                                                                                                                                                                                                                     from './SoundEffects';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | RealEnum | number | string | null | undefined;

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

    BONUS_MUSIC, BOSS_MUSIC, FINAL_BOSS,
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

    | 'PEACEFUL' | 'HORROR' | 'FESTIVE_MUSIC' | 'RAVE_MUSIC'
    | 'HEARTBEAT' | 'SILENCE' | 'BIRD_TWEETING_NOISE' | 'CHICKEN_CLUCKING_NOISE'

    | 'BONUS_MUSIC' | 'BOSS_MUSIC' | 'FINAL_BOSS'
    | `SUPER_MARIO_${| 'KART' | '64' | 'SUNSHINE' | 'GALAXY'}`;

export type PossibleEnglishName_Games = PossibleEnglishName_SoundEffect;
export type PossibleEnglishName_SMM1AndSMM2 =
    | 'Shock' | 'Scream' | 'Laughter' | 'Cheer' | 'Baby'
    | 'Applause'

    | 'Clatter' | 'Drama!' | 'Kick' | 'Jump' | 'Honk Honk'
    | 'Punch'

    | 'Ding Dong' | 'Bzzzt!' | 'Glory' | 'Doom'

    | 'Fireworks'

    | 'Heartbeat' | 'Silence'

    | 'Bonus Music' | 'Boss Music';
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

    | 'Peaceful' | 'Horror'

    | 'Final Boss'
    | PossibleEnglishName_Games;
export type PossibleEnglishName = | PossibleEnglishName_SMM1 | PossibleEnglishName_SMM2;

//region -------------------- Image path (SMM1) --------------------

export type SoundEffectImageNumber_SMM1 = `${`0${| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | 10 | 11 | 12 | 13 | 14}_0${| 0 | 1}`;
export type PossibleImagePath_SMM1 = `/${BasePath}/sound effect/Edit_Lyt_P_SE${SoundEffectImageNumber_SMM1}.tiff`;

//endregion -------------------- Image path (SMM1) --------------------
//region -------------------- Image path (SMM2) --------------------

export type SoundEffectImageName_SMM2 =
    | 'Shock' | 'Scream'
    | `${| '' | 'Loud'}Laughter` | 'Boo'
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

    | 'Bonus' | `${| '' | 'Last'}Boss`
    | `Mario0${| 0 | 1 | 2 | 3}`;
export type PossibleImagePath_SMM2 = `/${BasePath}/sound effect/Lyt_E_P_SE_${SoundEffectImageName_SMM2}.tiff`;

//endregion -------------------- Image path (SMM2) --------------------

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
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

    SimpleEnum<T>['PEACEFUL'], SimpleEnum<T>['HORROR'], SimpleEnum<T>['FESTIVE_MUSIC'], SimpleEnum<T>['RAVE_MUSIC'],
    SimpleEnum<T>['HEARTBEAT'], SimpleEnum<T>['SILENCE'], SimpleEnum<T>['BIRD_TWEETING_NOISE'], SimpleEnum<T>['CHICKEN_CLUCKING_NOISE'],

    SimpleEnum<T>['BONUS_MUSIC'], SimpleEnum<T>['BOSS_MUSIC'], SimpleEnum<T>['FINAL_BOSS'],
    SimpleEnum<T>['SUPER_MARIO_KART'], SimpleEnum<T>['SUPER_MARIO_64'], SimpleEnum<T>['SUPER_MARIO_SUNSHINE'], SimpleEnum<T>['SUPER_MARIO_GALAXY'],

];
export type EnumArray_Games<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['SUPER_MARIO_KART'],
    SimpleEnum<T>['SUPER_MARIO_64'],
    SimpleEnum<T>['SUPER_MARIO_SUNSHINE'],
    SimpleEnum<T>['SUPER_MARIO_GALAXY'],
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

    'Peaceful', 'Horror', 'Festive Music', 'Rave Music',
    'Heartbeat', 'Silence', 'Bird\'s Tweeting Noise', 'Chicken\'s Clucking Noise',

    'Bonus Music', 'Boss Music', 'Final Boss',
    'Super Mario Kart', 'Super Mario 64', 'Super Mario Sunshine', 'Super Mario Galaxy',
];

//endregion -------------------- Array types --------------------
