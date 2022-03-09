import type {EveryAlternativeAcronym_EntityLimit, EveryConditionToUnlockIt_MiiCostume, EveryConditionToUnlockIt_MysteryMushroom, EveryEnglishName_EntityLimit, EveryEnglishNameOrUnknown_EntityLimit, EveryPossibleAcronym_EntityBehaviour, EveryPossibleAcronym_EntityLimit, EveryPossibleAcronym_GameReference, EveryPossibleAcronym_GameStyle, EveryPossibleAcronymWithPokemonGeneration_GameReference, EveryPossibleCategory_MiiCostume, EveryPossibleEnglishName_EntityLimitType, EveryPossibleEnglishName_SoundEffect, EveryPossibleEnglishName_SoundEffectCategory, EveryPossibleEnglishNameOnFile_MysteryMushroom, EveryPossibleMode_MiiCostume, EveryPossibleName_Entity, EveryPossibleName_EntityCategory, EveryPossibleName_EntityGroup, EveryPossibleName_EntityLimit, EveryPossibleName_GameReference, EveryPossibleName_Theme, EveryPossibleName_ThemeNightEffect, EveryPossibleSimpleName_Version, EveryPossibleTranslationKey_EntityBehaviour, EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom, EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom, HeaderTypesForConvertorDefinition, StringConstant, UnknownCharacter, UnknownReference} from './HeaderTypesForConvertorDefinition';

import type {EntityBehaviours}                  from '../../behaviour/EntityBehaviours';
import type {EntityCategories}                  from '../../entityCategory/EntityCategories';
import type {EntityLimits}                      from '../../entityLimit/EntityLimits';
import type {EntityLimitTypes}                  from '../../entityLimit/EntityLimitTypes';
import type {Entities}                          from '../../entity/Entities';
import type {GameReferences}                    from '../../gameReference/GameReferences';
import type {GameStyles}                        from '../../gameStyle/GameStyles';
import type {MiiCostumeCategories}              from '../../miiCostumeCategory/MiiCostumeCategories';
import type {MiiCostumes}                       from '../../miiCostume/MiiCostumes';
import type {MysteryMushrooms}                  from '../../mysteryMushroom/MysteryMushrooms';
import type {NightEffects as ThemeNightEffects} from '../../theme/NightEffects';
import type {SoundEffectCategories}             from '../../soundEffectCategory/SoundEffectCategories';
import type {SoundEffects}                      from '../../soundEffect/SoundEffects';
import type {Themes}                            from '../../theme/Themes';
import type {Versions}                          from '../../version/Versions';

/**
 * @classWithDynamicImport
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

    //region -------------------- Enum reference attributes --------------------

    #gameReferences?: typeof GameReferences;
    #gameStyles?: typeof GameStyles;
    #entities?: typeof Entities;
    #entityBehaviours?: typeof EntityBehaviours;
    // #entityGroups?: typeof EntityGroups;
    #themes?: typeof Themes;
    #themeNightEffects?: typeof ThemeNightEffects;
    #entityCategories?: typeof EntityCategories;
    #entityLimits?: typeof EntityLimits;
    #entityLimitTypes?: typeof EntityLimitTypes;
    #soundEffects?: typeof SoundEffects;
    #soundEffectCategories?: typeof SoundEffectCategories;
    #mysteryMushrooms?: typeof MysteryMushrooms;
    #miiCostumes?: typeof MiiCostumes;
    #miiCostumeCategories?: typeof MiiCostumeCategories;
    #versions?: typeof Versions;

    //endregion -------------------- Enum reference attributes --------------------
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
    #everyLimitsNames?: EveryEnglishName_EntityLimit;
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

    //region -------------------- Enum reference getter reference --------------------

    public get gameReferences(): typeof GameReferences {
        return this.#gameReferences ??= require('../../gameReference/GameReferences').GameReferences;
    }

    public get gameStyles(): typeof GameStyles {
        return this.#gameStyles ??= require('../../gameStyle/GameStyles').GameStyles;
    }

    public get entities(): typeof Entities {
        return this.#entities ??= require('../../entity/Entities').Entities;
    }

    public get entityBehaviours(): typeof EntityBehaviours {
        return this.#entityBehaviours ??= require('../../behaviour/EntityBehaviours').EntityBehaviours;
    }

    // public get entityGroups(): typeof EntityCategories {
    //     return this.#entityGroups ??= require('../../entityGroup/EntityGroup').EntityGroup;
    // }

    public get themes(): typeof Themes {
        return this.#themes ??= require('../../theme/Themes').Themes;
    }

    public get themeNightEffects(): typeof ThemeNightEffects {
        return this.#themeNightEffects ??= require('../../theme/NightEffects').NightEffects;
    }

    public get entityCategories(): typeof EntityCategories {
        return this.#entityCategories ??= require('../../entityCategory/EntityCategories').EntityCategories;
    }

    public get entityLimits(): typeof EntityLimits {
        return this.#entityLimits ??= require('../../entityLimit/EntityLimits').EntityLimits;
    }

    public get entityLimitTypes(): typeof EntityLimitTypes {
        return this.#entityLimitTypes ??= require('../../entityLimit/EntityLimitTypes').EntityLimitTypes;
    }

    public get soundEffects(): typeof SoundEffects {
        return this.#soundEffects ??= require('../../soundEffect/SoundEffects').SoundEffects;
    }

    public get soundEffectCategories(): typeof SoundEffectCategories {
        return this.#soundEffectCategories ??= require('../../soundEffectCategory/SoundEffectCategories').SoundEffectCategories;
    }

    public get miiCostumes(): typeof MiiCostumes {
        return this.#miiCostumes ??= require('../../miiCostume/MiiCostume').MiiCostumes;
    }

    public get miiCostumeCategories(): typeof MiiCostumeCategories {
        return this.#miiCostumeCategories ??= require('../../miiCostumeCategory/MiiCostumeCategories').MiiCostumeCategories;
    }

    public get mysteryMushrooms(): typeof MysteryMushrooms {
        return this.#mysteryMushrooms ??= require('../../mysteryMushroom/MysteryMushrooms').MysteryMushrooms;
    }

    public get versions(): typeof Versions {
        return this.#versions ??= require('../../version/Versions').Versions;
    }

    //endregion -------------------- Enum reference getter reference --------------------
    //region -------------------- Game reference --------------------

    public get everyPossibleGameReferenceAcronym() {
        return this.#everyPossibleGameReferenceAcronym ??= this.gameReferences.everyAcronyms;
    }

    public get everyPossibleGameReferenceAcronymWithPokemonGeneration() {
        return this.#everyPossibleGameReferenceAcronymWithPokemonGeneration ??= [
            ...this.gameReferences.everyAcronyms,
            'Pokémon gen 1', 'Pokémon gen 4', 'Pokémon gen 6',
        ];
    }

    public get everyPossibleGameReferenceEnglishName() {
        return this.#everyPossibleGameReferenceEnglishName ??= this.gameReferences.everyEnglishNames;
    }

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public get everyPossibleGameStyleAcronym() {
        return this.#everyPossibleGameStyleAcronym ??= this.gameStyles.everyAcronyms;
    }

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public get everyPossibleEntityNames() {
        return this.#everyPossibleEntityNames ??= this.entities.everyEnglishNames;
    }

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public get everyPossibleBehavioursAcronyms() {
        return this.#everyPossibleBehavioursAcronyms ??= this.entityBehaviours.everyAcronyms;
    }

    public get everyPossibleBehavioursTranslationKeys() {
        return this.#everyPossibleBehavioursTranslationKeys ??= this.entityBehaviours.everyTranslationKeys;
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
        return this.#everyPossibleName_theme ??= this.themes.everyEnglishNames;
    }

    public get everyPossibleName_themeNightEffect(): EveryPossibleName_ThemeNightEffect {
        return this.#everyPossibleName_themeNightEffect ??= this.themeNightEffects.everyEnglishNames;
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public get everyPossibleEntityCategoriesNames() {
        return this.#everyPossibleEntityCategoriesNames ??= this.entityCategories.everyEnglishNames;
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity limit --------------------

    public get everyPossibleLimitsAcronyms() {
        return this.#everyPossibleLimitsAcronyms ??= [...this.entityLimits.everyAcronyms, ...this.entityLimits.everyAlternativeAcronyms,];
    }

    public get everyAlternativeLimitAcronyms() {
        return this.#everyAlternativeLimitAcronyms ??= this.entityLimits.everyAlternativeAcronyms;
    }

    public get everyPossibleLimitsNames() {
        return this.#everyPossibleLimitsNames ??= [...this.entityLimits.everyEnglishNames, ...this.entityLimits.everyAlternativeEnglishNames,];
    }

    public get everyLimitsNames() {
        return this.#everyLimitsNames ??= this.entityLimits.everyEnglishNames;
    }

    public get everyLimitsNamesOrUnknown() {
        return this.#everyLimitsNamesOrUnknown ??= [HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_CHARACTER, ...this.entityLimits.everyEnglishNames,];
    }

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public get everyPossibleLimitTypesNames() {
        return this.#everyPossibleLimitTypesNames ??= this.entityLimitTypes.everyEnglishNames;
    }

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public get everyPossibleSoundEffectsNames() {
        return this.#everyPossibleSoundEffectsNames ??= this.soundEffects.everyEnglishNames;
    }

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public get everyPossibleSoundEffectCategoriesNames() {
        return this.#everyPossibleSoundEffectCategoriesNames ??= this.soundEffectCategories.everyEnglishNames;
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
        return this.#everyPossibleName_MiiCostumeCategory ??= this.miiCostumeCategories.everyEnglishNames;
    }

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public get everyPossibleMysteryMushroomIndividualEnglishNames() {
        return this.#everyPossibleMysteryMushroomsIndividualNames ??= this.mysteryMushrooms.everyIndividualEnglishNames;
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
        return this.#everyPossibleName_version ??= this.versions.everySimpleNames;
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
    public readonly everyLimitsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
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
