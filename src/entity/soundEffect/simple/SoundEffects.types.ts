import type {SimpleEnum}   from '../../../util/enum/Enum.types';
import type {SoundEffects} from './SoundEffects';

//region -------------------- Number types --------------------

export type SoundEffectsOrdinals = | 0 | 1 | 2 | 3 | 4;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type SoundEffectsNames =
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

export type PossibleSoundEffectsEnglishNameGames = `Super Mario ${| 'Kart' | '64' | 'Sunshine' | 'Galaxy'}`;
export type PossibleSoundEffectsEnglishNameInBothGames =
    | 'Shock' | 'Scream' | 'Laughter' | 'Cheer' | 'Baby'
    | 'Applause'

    | 'Clatter' | 'Drama!' | 'Kick' | 'Jump' | 'Honk Honk'
    | 'Punch'

    | 'Ding Dong' | 'Bzzzt!' | 'Glory' | 'Doom'

    | 'Fireworks'

    | 'Bonus Music' | 'Heartbeat' | 'Silence' | 'Boss Music';
export type PossibleSoundEffectsInSMM1EnglishName =
    | PossibleSoundEffectsEnglishNameInBothGames
    | 'Bird\'s Chirping' | 'Distortion' | 'Telephone'

    | `${| 'Festive' | 'Rave'} Music` | `${| 'Bird\'s Tweeting' | 'Chicken\'s Clucking'} Noise`;
export type PossibleSoundEffectsInSMM2EnglishName =
    | PossibleSoundEffectsEnglishNameInBothGames
    | 'Guffaw' | 'Booo!' | 'Party Popper'
    | 'Near Miss'

    | 'Oink' | 'Kuh-thunk!' | 'Beep!' | 'Ninja Attack!' | 'Zap!'

    | 'Yeah!' | 'Aww...'

    | 'Audience' | 'Scatting' | 'Spark' | 'Traditional' | 'Electric Guitar'
    | 'Twisty Turny' | 'Woozy' | 'Flash'

    | 'Peaceful' | 'Horror' | 'Final Boss'
    | PossibleSoundEffectsEnglishNameGames;
export type PossibleSoundEffectsEnglishName = | PossibleSoundEffectsInSMM1EnglishName | PossibleSoundEffectsInSMM2EnglishName;

export type MiddleSoundEffectImage = `${| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14}-${|1|2}`;
export type PossibleSMM1SoundEffectImagePath = `/sound effects/SMM1/${MiddleSoundEffectImage} - ${PossibleSoundEffectsInSMM1EnglishName}.png`;

type EveryPossibleSoundEffectStarting = `${| 1 | 2 | 3 | 4 | 5}.${| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}`;
type ExcludedPossibleSoundEffectStarting = | '1.11' | `3.${| 7 | 8 | 9 | 10 | 11}` | `4.${| 10 | 11}`;
export type StartingSoundEffectImage = Exclude<EveryPossibleSoundEffectStarting, ExcludedPossibleSoundEffectStarting>;
export type PossibleSMM2SoundEffectImagePath = `/sound effects/SMM2/${StartingSoundEffectImage} - ${PossibleSoundEffectsInSMM2EnglishName}.png`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleSoundEffects<T = SoundEffects, > = SimpleEnum<SoundEffectsNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type SoundEffectsArray<T = SoundEffects, > = readonly [
    SimpleSoundEffects<T>['SHOCK'], SimpleSoundEffects<T>['SCREAM'], SimpleSoundEffects<T>['LAUGHTER'], SimpleSoundEffects<T>['GUFFAW'], SimpleSoundEffects<T>['BOOO'],
    SimpleSoundEffects<T>['CHEER'], SimpleSoundEffects<T>['BABY'], SimpleSoundEffects<T>['PARTY_POPPER'], SimpleSoundEffects<T>['APPLAUSE'], SimpleSoundEffects<T>['NEAR_MISS'],

    SimpleSoundEffects<T>['CLATTER'], SimpleSoundEffects<T>['DRAMA'], SimpleSoundEffects<T>['KICK'], SimpleSoundEffects<T>['JUMP'], SimpleSoundEffects<T>['HONK_HONK'],
    SimpleSoundEffects<T>['PUNCH'], SimpleSoundEffects<T>['OINK'], SimpleSoundEffects<T>['KUH_THUNK'], SimpleSoundEffects<T>['BEEP'], SimpleSoundEffects<T>['NINJA_ATTACK'],
    SimpleSoundEffects<T>['ZAP'],

    SimpleSoundEffects<T>['DING_DONG'], SimpleSoundEffects<T>['BZZZT'], SimpleSoundEffects<T>['GLORY'], SimpleSoundEffects<T>['DOOM'], SimpleSoundEffects<T>['YEAH'],
    SimpleSoundEffects<T>['AWW'],

    SimpleSoundEffects<T>['FIREWORKS'], SimpleSoundEffects<T>['AUDIENCE'], SimpleSoundEffects<T>['SCATTING'],
    SimpleSoundEffects<T>['BIRD_CHIRPING'], SimpleSoundEffects<T>['SPARK'], SimpleSoundEffects<T>['TRADITIONAL'], SimpleSoundEffects<T>['ELECTRIC_GUITAR'], SimpleSoundEffects<T>['DISTORTION'],
    SimpleSoundEffects<T>['TWISTY_TURNY'], SimpleSoundEffects<T>['WOOZY'], SimpleSoundEffects<T>['TELEPHONE'], SimpleSoundEffects<T>['FLASH'],

    SimpleSoundEffects<T>['PEACEFUL'], SimpleSoundEffects<T>['HORROR'], SimpleSoundEffects<T>['BONUS_MUSIC'], SimpleSoundEffects<T>['FESTIVE_MUSIC'], SimpleSoundEffects<T>['RAVE_MUSIC'],
    SimpleSoundEffects<T>['HEARTBEAT'], SimpleSoundEffects<T>['SILENCE'], SimpleSoundEffects<T>['BIRD_TWEETING_NOISE'], SimpleSoundEffects<T>['CHICKEN_CLUCKING_NOISE'],
    SimpleSoundEffects<T>['BOSS_MUSIC'], SimpleSoundEffects<T>['FINAL_BOSS'],
    SimpleSoundEffects<T>['SUPER_MARIO_KART'], SimpleSoundEffects<T>['SUPER_MARIO_64'], SimpleSoundEffects<T>['SUPER_MARIO_SUNSHINE'], SimpleSoundEffects<T>['SUPER_MARIO_GALAXY'],

];
export type SoundEffectsEnglishNameArray = readonly ['Feelings', 'Stingers', 'Reactions', 'Animations', 'Music',];

//endregion -------------------- Array types --------------------