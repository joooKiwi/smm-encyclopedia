import type {SimpleEnum}   from '../../../util/enum/Enum.types';
import type {SoundEffects} from './SoundEffects';

//region -------------------- Number types --------------------

export type SoundEffectsOrdinals = | 0 | 1 | 2 | 3 | 4;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type SoundEffectsNames =
    | 'SHOCK' | 'SCREAM' | 'LAUGHTER' | 'GUFAW' | 'BOOO'
    | 'CHEER' | 'BABY' | 'PARTY_POPPER' | 'APPLAUSE' | 'NEAR_MISS'

    | 'CLATTER' | 'DRAMA' | 'KICK' | 'JUMP' | 'HONK_HONK'
    | 'PUNCH' | 'OINK' | 'KUH_THUNK' | 'BEEP' | 'NINJA_ATTACK'
    | 'ZAP'

    | 'DING_DONG' | 'BZZZT' | 'GLORY' | 'DOOM' | 'YEAH'
    | 'AWW'

    | 'FIREWORKS' | '_FESTIVE_MUSIC_' | '_RAVE_MUSIC_' | 'AUDIENCE' | 'SCATTING'
    | '_CALM_SILENCE_' | 'SPARK' | 'TRADITIONAL' | 'ELECTRIC_GUITAR' | '_DISTORTION_'
    | 'TWISTY_TURNY' | 'WOOZY' | '_TELEPHONE_' | 'FLASH'

    | 'PEACEFUL' | 'HORROR' | 'BONUS_MUSIC' | 'HEARTBEAT' | 'SILENCE'
    | '_BIRD_TWEETING_NOISE_' | '_CHICKEN_S_CLUCKING_NOISE'
    | 'BOSS_MUSIC' | 'FINAL_BOSS'
    | `SUPER_MARIO_${| 'KART' | '64' | 'SUNSHINE' | 'GALAXY'}`;

export type PossibleSoundEffectsEnglishName =
    | 'Shock' | 'Scream' | 'Laughter' | 'Gufaw' | 'Booo!'
    | 'Cheer' | 'Baby' | 'Party Popper' | 'Applause' | 'Near Miss'

    | 'Clatter' | 'Drama!' | 'Kick' | 'Jump' | 'Honk Honk'
    | 'Punch' | 'Oink' | 'Kuh-thunk!' | 'Beep' | 'Ninja Attack!'
    | 'Zap!'

    | 'Ding Dong' | 'Bzzzt!' | 'Glory' | 'Doom' | 'Yeah!'
    | 'Aww...'

    | 'Fireworks' | '(Festive Music)' | '(Rave Music)' | 'Audience' | 'Scatting'
    | '(Calm Silence)' | 'Spark' | 'Traditional' | 'Electric Guitar' | '(Distortion)'
    | 'Twisty Turny' | 'Woozy' | '(Telephone)' | 'Flash'

    | 'Peaceful' | 'Horror' | 'Bonus Music' | 'Heartbeat' | 'Silence'
    | '(Bird Tweeting Noise)' | '(Chicken\'s Clucking Noise)'
    | 'Boss Music' | 'Final Boss'
    | `Super Mario ${| 'Kart' | '64' | 'Sunshine' | 'Galaxy'}`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleSoundEffects<T = SoundEffects, > = SimpleEnum<SoundEffectsNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type SoundEffectsArray<T = SoundEffects, > = readonly [
    SimpleSoundEffects<T>['SHOCK'], SimpleSoundEffects<T>['SCREAM'], SimpleSoundEffects<T>['LAUGHTER'], SimpleSoundEffects<T>['GUFAW'], SimpleSoundEffects<T>['BOOO'],
    SimpleSoundEffects<T>['CHEER'], SimpleSoundEffects<T>['BABY'], SimpleSoundEffects<T>['PARTY_POPPER'], SimpleSoundEffects<T>['APPLAUSE'], SimpleSoundEffects<T>['NEAR_MISS'],

    SimpleSoundEffects<T>['CLATTER'], SimpleSoundEffects<T>['DRAMA'], SimpleSoundEffects<T>['KICK'], SimpleSoundEffects<T>['JUMP'], SimpleSoundEffects<T>['HONK_HONK'],
    SimpleSoundEffects<T>['PUNCH'], SimpleSoundEffects<T>['OINK'], SimpleSoundEffects<T>['KUH_THUNK'], SimpleSoundEffects<T>['BEEP'], SimpleSoundEffects<T>['NINJA_ATTACK'],
    SimpleSoundEffects<T>['ZAP'],

    SimpleSoundEffects<T>['DING_DONG'], SimpleSoundEffects<T>['BZZZT'], SimpleSoundEffects<T>['GLORY'], SimpleSoundEffects<T>['DOOM'], SimpleSoundEffects<T>['YEAH'],
    SimpleSoundEffects<T>['AWW'],

    SimpleSoundEffects<T>['FIREWORKS'], SimpleSoundEffects<T>['_FESTIVE_MUSIC_'], SimpleSoundEffects<T>['_RAVE_MUSIC_'], SimpleSoundEffects<T>['AUDIENCE'], SimpleSoundEffects<T>['SCATTING'],
    SimpleSoundEffects<T>['_CALM_SILENCE_'], SimpleSoundEffects<T>['SPARK'], SimpleSoundEffects<T>['TRADITIONAL'], SimpleSoundEffects<T>['ELECTRIC_GUITAR'], SimpleSoundEffects<T>['_DISTORTION_'],
    SimpleSoundEffects<T>['TWISTY_TURNY'], SimpleSoundEffects<T>['WOOZY'], SimpleSoundEffects<T>['_TELEPHONE_'], SimpleSoundEffects<T>['FLASH'],

    SimpleSoundEffects<T>['PEACEFUL'], SimpleSoundEffects<T>['HORROR'], SimpleSoundEffects<T>['BONUS_MUSIC'], SimpleSoundEffects<T>['HEARTBEAT'], SimpleSoundEffects<T>['SILENCE'],
    SimpleSoundEffects<T>['_BIRD_TWEETING_NOISE_'], SimpleSoundEffects<T>['_CHICKEN_S_CLUCKING_NOISE'],
    SimpleSoundEffects<T>['BOSS_MUSIC'], SimpleSoundEffects<T>['FINAL_BOSS'],
    SimpleSoundEffects<T>['SUPER_MARIO_KART'], SimpleSoundEffects<T>['SUPER_MARIO_64'], SimpleSoundEffects<T>['SUPER_MARIO_SUNSHINE'], SimpleSoundEffects<T>['SUPER_MARIO_GALAXY'],

];
export type SoundEffectsEnglishNameArray = readonly ['Feelings', 'Stingers', 'Reactions', 'Animations', 'Music',];

//endregion -------------------- Array types --------------------
