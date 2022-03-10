import type {EveryAlternativeAcronym_EntityLimit, EveryConditionToUnlockIt_MiiCostume, EveryConditionToUnlockIt_MysteryMushroom, EveryEnglishNameOrUnknown_EntityLimit, EveryPossibleAcronym_EntityBehaviour, EveryPossibleAcronym_EntityLimit, EveryPossibleAcronym_GameReference, EveryPossibleAcronym_GameStyle, EveryPossibleAcronymWithPokemonGeneration_GameReference, EveryPossibleCategory_MiiCostume, EveryPossibleEnglishName_EntityLimitType, EveryPossibleEnglishName_SoundEffect, EveryPossibleEnglishName_SoundEffectCategory, EveryPossibleEnglishNameOnFile_MysteryMushroom, EveryPossibleMode_MiiCostume, EveryPossibleName_Entity, EveryPossibleName_EntityCategory, EveryPossibleName_EntityGroup, EveryPossibleName_EntityLimit, EveryPossibleName_GameReference, EveryPossibleName_Theme, EveryPossibleName_ThemeNightEffect, EveryPossibleSimpleName_Version, EveryPossibleTranslationKey_EntityBehaviour, EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom, EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom, HeaderTypesForConvertorDefinition, StringConstant, UnknownCharacter, UnknownReference} from './HeaderTypesForConvertorDefinition';

import type {EntityBehaviours}      from '../../behaviour/EntityBehaviours';
import type {EntityCategories}      from '../../entityCategory/EntityCategories';
import type {EntityLimits}          from '../../entityLimit/EntityLimits';
import type {EntityLimitTypes}      from '../../entityLimit/EntityLimitTypes';
import type {Entities}              from '../../entity/Entities';
import type {GameReferences}        from '../../gameReference/GameReferences';
import type {GameStyles}            from '../../gameStyle/GameStyles';
import {lazy}                       from '../../../util/utilitiesMethods';
import type {MiiCostumeCategories}  from '../../miiCostumeCategory/MiiCostumeCategories';
import type {MiiCostumes}           from '../../miiCostume/MiiCostumes';
import type {MysteryMushrooms}      from '../../mysteryMushroom/MysteryMushrooms';
import type {NightEffects}               from '../../theme/NightEffects';
import type {SoundEffectCategories} from '../../soundEffectCategory/SoundEffectCategories';
import type {SoundEffects}          from '../../soundEffect/SoundEffects';
import type {Themes}                from '../../theme/Themes';
import type {Versions}              from '../../version/Versions';

//region -------------------- Dynamic imports --------------------

const _GameReferences =        lazy(() => require('../../gameReference/GameReferences').GameReferences as typeof GameReferences);
const _GameStyles =            lazy(() => require('../../gameStyle/GameStyles').GameStyles as typeof GameStyles);
const _Entities =              lazy(() => require('../../entity/Entities').Entities as typeof Entities);
const _EntityBehaviours =      lazy(() => require('../../behaviour/EntityBehaviours').EntityBehaviours as typeof EntityBehaviours);
// const _EntityGroups =          lazy(()=> require('../../entityGroup/EntityGroup').EntityGroups as typeof EntityGroups);
const _Themes =                lazy(() => require('../../theme/Themes').Themes as typeof Themes);
const _NightEffects =          lazy(() => require('../../theme/NightEffects').NightEffects as typeof NightEffects);
const _EntityCategories =      lazy(() => require('../../entityCategory/EntityCategories').EntityCategories as typeof EntityCategories);
const _EntityLimits =          lazy(() => require('../../entityLimit/EntityLimits').EntityLimits as typeof EntityLimits);
const _EntityLimitTypes =      lazy(() => require('../../entityLimit/EntityLimitTypes').EntityLimitTypes as typeof EntityLimitTypes);
const _SoundEffects =          lazy(() => require('../../soundEffect/SoundEffects').SoundEffects as typeof SoundEffects);
const _SoundEffectCategories = lazy(() => require('../../soundEffectCategory/SoundEffectCategories').SoundEffectCategories as typeof SoundEffectCategories);
// const _MiiCostumes =           lazy(() => require('../../miiCostume/MiiCostume').MiiCostumes as typeof MiiCostumes);
const _MiiCostumeCategories =  lazy(() => require('../../miiCostumeCategory/MiiCostumeCategories').MiiCostumeCategories as typeof MiiCostumeCategories);
const _MysteryMushrooms =      lazy(() => require('../../mysteryMushroom/MysteryMushrooms').MysteryMushrooms as typeof MysteryMushrooms);
const _Versions =              lazy(() => require('../../version/Versions').Versions as typeof Versions);

//endregion -------------------- Dynamic imports --------------------

/**
 * @singleton
 */
class HeaderTypesForConvertorForTestAndDevelopment
    implements HeaderTypesForConvertorDefinition {

    //region -------------------- Singleton usage --------------------

    static #instance?: HeaderTypesForConvertorForTestAndDevelopment;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Attributes --------------------

    static readonly #UNKNOWN_CHARACTER: UnknownCharacter = '?';
    static readonly #UNKNOWN_REFERENCE: UnknownReference = '???';

    //region -------------------- Array attributes --------------------

    #everyPossibleGameReferenceAcronym?: EveryPossibleAcronym_GameReference;
    #everyPossibleGameReferenceAcronymWithPokemonGeneration?: EveryPossibleAcronymWithPokemonGeneration_GameReference;
    #everyPossibleGameReferenceEnglishName?: EveryPossibleName_GameReference;

    #everyPossibleGameStyleAcronym?: EveryPossibleAcronym_GameStyle;

    #everyPossibleEntityNames?: EveryPossibleName_Entity;

    #everyPossibleBehavioursAcronyms?: EveryPossibleAcronym_EntityBehaviour;
    #everyPossibleBehavioursTranslationKeys?: EveryPossibleTranslationKey_EntityBehaviour;

    #everyPossibleGroupNames?: EveryPossibleName_EntityGroup;

    #everyPossibleName_theme?: EveryPossibleName_Theme;
    #everyPossibleName_themeNightEffect?: EveryPossibleName_ThemeNightEffect;

    #everyPossibleEntityCategoriesNames?: EveryPossibleName_EntityCategory;

    #everyPossibleLimitsAcronyms?: EveryPossibleAcronym_EntityLimit;
    #everyAlternativeLimitAcronyms?: EveryAlternativeAcronym_EntityLimit;
    #everyPossibleLimitsNames?: EveryPossibleName_EntityLimit;
    #everyLimitsNamesOrUnknown?: EveryEnglishNameOrUnknown_EntityLimit;

    #everyPossibleLimitTypesNames?: EveryPossibleEnglishName_EntityLimitType;

    #everyPossibleSoundEffectsNames?: EveryPossibleEnglishName_SoundEffect;
    #everyPossibleSoundEffectCategoriesNames?: EveryPossibleEnglishName_SoundEffectCategory;

    #everyPossibleConditionToUnlockIt_MiiCostume?: EveryConditionToUnlockIt_MiiCostume;
    #everyPossibleMode_MiiCostume?: EveryPossibleMode_MiiCostume;
    #everyPossibleName_MiiCostumeCategory?: EveryPossibleCategory_MiiCostume;

    #everyPossibleMysteryMushroomsIndividualNames?: EveryPossibleEnglishNameOnFile_MysteryMushroom;
    #everyPossibleConditionToUnlockIt_mysteryMushroom?: EveryConditionToUnlockIt_MysteryMushroom;
    #everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom?: EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom;
    #everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom?: EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom;

    #everyPossibleName_version?: EveryPossibleSimpleName_Version;

    //endregion -------------------- Array attributes --------------------

    //endregion -------------------- Attributes --------------------

    //region -------------------- Game reference --------------------

    public get everyPossibleGameReferenceAcronym() {
        return this.#everyPossibleGameReferenceAcronym ??= _GameReferences.get.everyAcronyms;
    }

    public get everyPossibleGameReferenceAcronymWithPokemonGeneration() {
        return this.#everyPossibleGameReferenceAcronymWithPokemonGeneration ??= [
            ...this.everyPossibleGameReferenceAcronym,
            'Pokémon gen 1', 'Pokémon gen 4', 'Pokémon gen 6',
        ];
    }

    public get everyPossibleGameReferenceEnglishName() {
        return this.#everyPossibleGameReferenceEnglishName ??= _GameReferences.get.everyEnglishNames;
    }

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public get everyPossibleGameStyleAcronym() {
        return this.#everyPossibleGameStyleAcronym ??= _GameStyles.get.everyAcronyms;
    }

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public get everyPossibleEntityNames() {
        return this.#everyPossibleEntityNames ??= _Entities.get.everyEnglishNames;
    }

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public get everyPossibleBehavioursAcronyms() {
        return this.#everyPossibleBehavioursAcronyms ??= _EntityBehaviours.get.everyAcronyms;
    }

    public get everyPossibleBehavioursTranslationKeys() {
        return this.#everyPossibleBehavioursTranslationKeys ??= _EntityBehaviours.get.everyTranslationKeys;
    }

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public get everyPossibleGroupNames() {
        //TODO implements this methods
        return this.#everyPossibleGroupNames ??= [];
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    public get everyPossibleName_theme(): EveryPossibleName_Theme {
        return this.#everyPossibleName_theme ??= _Themes.get.everyEnglishNames;
    }

    public get everyPossibleName_themeNightEffect(): EveryPossibleName_ThemeNightEffect {
        return this.#everyPossibleName_themeNightEffect ??= _NightEffects.get.everyEnglishNames;
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public get everyPossibleEntityCategoriesNames() {
        return this.#everyPossibleEntityCategoriesNames ??= _EntityCategories.get.everyEnglishNames;
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity limit --------------------

    public get everyPossibleLimitsAcronyms() {
        return this.#everyPossibleLimitsAcronyms ??= [..._EntityLimits.get.everyAcronyms, ..._EntityLimits.get.everyAlternativeAcronyms,];
    }

    public get everyAlternativeLimitAcronyms() {
        return this.#everyAlternativeLimitAcronyms ??= _EntityLimits.get.everyAlternativeAcronyms;
    }

    public get everyPossibleLimitsNames() {
        return this.#everyPossibleLimitsNames ??= [..._EntityLimits.get.everyEnglishNames, ..._EntityLimits.get.everyAlternativeEnglishNames,];
    }

    public get everyLimitsNamesOrUnknown() {
        return this.#everyLimitsNamesOrUnknown ??= [HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_CHARACTER, ..._EntityLimits.get.everyEnglishNames,];
    }

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public get everyPossibleLimitTypesNames() {
        return this.#everyPossibleLimitTypesNames ??= _EntityLimitTypes.get.everyEnglishNames;
    }

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public get everyPossibleSoundEffectsNames() {
        return this.#everyPossibleSoundEffectsNames ??= _SoundEffects.get.everyEnglishNames;
    }

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public get everyPossibleSoundEffectCategoriesNames() {
        return this.#everyPossibleSoundEffectCategoriesNames ??= _SoundEffectCategories.get.everyEnglishNames;
    }

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------

    public get everyPossibleConditionToUnlockIt_MiiCostume() {
        return this.#everyPossibleConditionToUnlockIt_MiiCostume ??= ([
            '1 stamp', ([4, 7, 10, 11, 14, 17, 20,] as const).map(amount => `${amount} stamps` as const),
            (['1st', '2nd', '3rd',] as const).map(position => `${position} place` as const),
            (['Bronze', 'Silver', 'Gold',] as const).map(position => `${position} medal` as const),
            'All jobs', 'Finish all jobs', 'Finish rebuilding castle',
            (['Partrick', 'Purple Toad', 'Soundfrog', 'Undodog', 'Yamamura',] as const).map(name => `Finish all 3 jobs (${name})` as const),
            'Finish all 3 jobs (Purple Toad) + Hit Middle ? Block',
            (['1st', '2nd', '3rd',] as const).map(position => `Finish ${position} job (Peach)` as const),
            ([1, 2, 3, 4, 5, 10, 100,] as const).map(amount => `Clear ${amount}` as const),
            ([
                ([1, 10, 100,] as const).map(amount => `1st clear → ${amount}` as const),
                ([1, 10, 100, 500, 1000, 3000, 5000, 10000,] as const).map(amount => `Clear ${amount}` as const),
                'Like', 'Upload',
                ([10, 100, 500, 1000, 3000,] as const).map(amount => `Play ${amount}` as const),
                ([100, 500, 1000, 2000, 5000,] as const).map(amount => `Receive ${amount} play` as const), 'Receive feedback',
            ] as const).flat().map(text => `Course → ${text}` as const),
            ([10, 100, 300, 500, 1000,] as const).map(amount => `High score → ${amount}` as const),
            ([2000, 5000, 7000,] as const).map(amount => `Maker Point → Earn ${amount}` as const),
            (['Post', 'Receive',] as const).map(text => `${text} a comment` as const),
            (['feedback (a lot)', 'like',] as const).map(text => `Receive ${text}` as const),
            'Upload a level',
            (['A', 'B', 'C', 'S', 'S+',] as const).map(rank => `Rank ${rank}` as const),
            ([2, 5, 10,] as const).map(amount => `Win ${amount} consecutive match` as const), 'Win match',
            ([
                ([10, 100, 500,] as const).map(amount => `Hold ${amount}` as const),
                'Set 1',
            ] as const).flat().map(text => `World Record → ${text}` as const),
        ] as const).flat();
    }

    public get everyPossibleMode_MiiCostume() {
        return this.#everyPossibleMode_MiiCostume ??= ([
            'Endless Mario', (['easy', 'normal', 'expert', 'super expert',] as const).map(mode => `Endless Mario (${mode})` as const),
            'Story Mode', (['VS', 'Co-op',] as const).map(mode => `Multiplayer ${mode}` as const), 'Leaderboard', 'Super World', 'Ninji Speedrun',
        ] as const).flat();
    }

    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    public get everyPossibleName_MiiCostumeCategory() {
        return this.#everyPossibleName_MiiCostumeCategory ??= _MiiCostumeCategories.get.everyEnglishNames;
    }

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public get everyPossibleMysteryMushroomIndividualEnglishNames() {
        return this.#everyPossibleMysteryMushroomsIndividualNames ??= _MysteryMushrooms.get.everyIndividualEnglishNames;
    }

    public get everyPossibleConditionToUnlockIt_mysteryMushroom() {
        return this.#everyPossibleConditionToUnlockIt_mysteryMushroom ??= [
            'Unlock Mystery Mushroom',
            '100 Mario (easy)', '100 Mario (normal)', '100 Mario (expert)', '100 Mario (super expert)',
            'Gnat Attack (normal)', 'Gnat Attack (hard)',
            'Complete Event', 'Complete 3 Events (by Arino)',
        ];
    }

    public get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom() {
        return this.#everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom ??= [
            HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_REFERENCE,
            'Introduction', 'Startup', 'Game over',
            'Level finished', 'Level finished?', 'Race finished',
            'Airship completed', 'Timed event completed', 'Course completed',
            'Perfect score obtained', 'Upgrade obtained', 'Important item obtained',
            'Star collected', 'Triforce collected',
            'Boss key obtained', 'Boss defeated',
            'New technique acquired', 'Gym Leader victory', 'Rank up', 'Secret area discovered', 'Declaring the Splatfest\'s winning team',
            'Bowser\'s arrival', 'Link meets Zelda for the 1st time', 'Ganon encounter',
            '3DS preview jingle',
        ];
    }

    public get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom() {
        return this.#everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom ??= [
            HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_REFERENCE,
            'Game over', 'Defeated', 'Error sound',
            'Boss defeated', 'Dog laughing',
            'Lost a life', 'Lost an Arwing', 'Falling offscreen',
            'Eliminated from the race', 'Eliminated from the course', 'Player has fainted',
            'Minigame lost', 'Round lost',
            'Timed event failed', 'Ran out of energy', 'Practice Catcher result jingle',
            'Bowser\'s death', 'Mario saying "Mama mia"', 'Zelda\'s Lullaby', 'Link caught by Moblins', 'K.K. howling', 'Pikmin death',
        ];
    }

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Version --------------------

    public get everyPossibleName_version() {
        return this.#everyPossibleName_version ??= _Versions.get.everySimpleNames;
    }

    //endregion -------------------- Version --------------------

}

/**
 * @singleton
 */
class HeaderTypesForConvertorForProduction
    implements HeaderTypesForConvertorDefinition {

    //region -------------------- Singleton usage --------------------

    static #instance?: HeaderTypesForConvertorForProduction;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Attributes --------------------

    static readonly #STRING_VALUE: StringConstant = 'string';
    // static readonly #NUMBER_VALUE: NumberConstant = 'number';
    // static readonly #STRING_AND_NUMBER: StringAndNumber = [this.#STRING_VALUE, this.#NUMBER_VALUE,];
    // static readonly #EMPTY_ARRAY: EmptyArray = [];

    //endregion -------------------- Attributes --------------------

    //region -------------------- Game reference --------------------

    public readonly everyPossibleGameReferenceAcronym = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleGameReferenceAcronymWithPokemonGeneration = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleGameReferenceEnglishName = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public readonly everyPossibleGameStyleAcronym = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public readonly everyPossibleEntityNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public readonly everyPossibleBehavioursAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleBehavioursTranslationKeys = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public readonly everyPossibleGroupNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    public readonly everyPossibleName_theme = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleName_themeNightEffect = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public readonly everyPossibleEntityCategoriesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    public readonly everyPossibleLimitsAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyAlternativeLimitAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleLimitsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyLimitsNamesOrUnknown = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public readonly everyPossibleLimitTypesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public readonly everyPossibleSoundEffectsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public readonly everyPossibleSoundEffectCategoriesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------

    public readonly everyPossibleConditionToUnlockIt_MiiCostume = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleMode_MiiCostume = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    public readonly everyPossibleName_MiiCostumeCategory = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public readonly everyPossibleMysteryMushroomIndividualEnglishNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleConditionToUnlockIt_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Version --------------------

    public readonly everyPossibleName_version = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Version --------------------

}

/**
 * <p>
 *  A dynamic variable to make the production built faster.
 *  Mainly to avoid any useless validations (since they will never be used)
 *  and to avoid any {@link Array array} creation that will never be used.
 * </p>
 *
 * <p>
 *  The constant is made of the {@link HeaderTypesForConvertorForProduction production build (HeaderTypesForConvertorForProduction)}
 *  and the {@link HeaderTypesForConvertorForTestAndDevelopment test & development build (HeaderTypesForConvertorForTestAndDevelopment)}.
 * </p>
 * @see HeaderTypesForConvertorDefinition
 */
const HeaderTypesForConvertor: HeaderTypesForConvertorDefinition = process.env.NODE_ENV === 'production' ? HeaderTypesForConvertorForProduction.get : HeaderTypesForConvertorForTestAndDevelopment.get;
export {HeaderTypesForConvertor};
