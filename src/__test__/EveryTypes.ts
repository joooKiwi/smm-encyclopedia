import type {Array, StringArray} from '@joookiwi/type'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {CanSurviveInTheLavaOrThePoison, PossibleLightSource, PossibleWeight}                                                                                                                                                                from 'core/entityTypes'
import type {PossibleAcronym as PossibleAcronym_EntityBehaviour, PossibleTranslationKeys as PossibleTranslationKey_EntityBehaviour}                                                                                                              from 'core/behaviour/EntityBehaviours.types'
import type {PossibleEnglishName as PossibleEnglishName_CharacterName, PossibleUniqueEnglishName as PossibleUniqueEnglishName_CharacterName}                                                                                                     from 'core/characterName/CharacterNames.types'
import type {PossibleEnglishName as PossibleEnglishName_CourseTag, PossibleMakerCentralName}                                                                                                                                                     from 'core/courseTag/CourseTags.types'
import type {PossibleEnglishName as PossibleEnglishName_Entity}                                                                                                                                                                                  from 'core/entity/Entities.types'
import type {LimitAmountType, PossibleGeneralGlobalLimitComment, PossibleGeneralLimitComment, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment}                                                 from 'core/entity/properties/limit/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_EntityCategory}                                                                                                                                                                          from 'core/entityCategory/EntityCategories.types'
import type {PossibleAcronym as PossibleAcronym_GameReference, PossibleEnglishName as PossibleEnglishName_GameReference}                                                                                                                         from 'core/gameReference/GameReferences.types'
import type {PossibleAcronym as PossibleAcronym_GameStyle}                                                                                                                                                                                       from 'core/gameStyle/GameStyles.types'
import type {PossibleEnglishName as PossibleEnglishName_Instrument}                                                                                                                                                                              from 'core/instrument/Instruments.types'
import type {PossibleMixedInstrument as PossibleMixedName_Instrument}                                                                                                                                                                            from 'core/instrument/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_LimitType}                                                                                                                                                                               from 'core/limit/LimitTypes.types'
import type {PossibleAcronym as PossibleAcronym_Limit, PossibleAlternativeAcronym as PossibleAlternativeAcronym_Limit, PossibleAlternativeEnglishName as PossibleAlternativeEnglishName_Limit, PossibleEnglishName as PossibleEnglishName_Limit} from 'core/limit/Limits.types'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount, PossibleLimitDescription as PossibleLimitDescription_Limit}                                                                    from 'core/limit/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_Medal}                                                                                                                                                                                   from 'core/medal/Medals.types'
import type {PossibleEnglishName as PossibleEnglishName_MiiCostume}                                                                                                                                                                              from 'core/miiCostume/MiiCostumes.types'
import type {PossibleEnglishName as PossibleEnglishName_MiiCostumeCategory}                                                                                                                                                                      from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleUniqueEnglishName as UniqueEnglishName_MysteryMushroom}                                                                                                                                                                     from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PokemonGeneration, PossibleConditionToUnlockIt as PossibleConditionToUnlockIt_MysteryMushroom}                                                                                                                                      from 'core/mysteryMushroom/loader.types'
import type {TranslationKeyOnDeath as PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom, TranslationKeyOnGoalPole as PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom}                                                       from 'core/mysteryMushroom/MysteryMushroom.types'
import type {PossibleEnglishName as PossibleEnglishName_Theme_NightEffect}                                                                                                                                                                       from 'core/nightEffect/NightEffects.types'
import type {PossibleReleaseDate as PossibleReleaseDate_OfficialCourse, PossibleRemovalDate as PossibleRemovalDate_OfficialCourse, PossibleReward as PossibleReward_OfficialCourse}                                                              from 'core/officialCourse/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_OfficialCourse}                                                                                                                                                                          from 'core/officialCourse/OfficialCourses.types'
import type {PossibleEnglishName as PossibleEnglishName_OfficialNotification, PossibleEnglishNameWithEveryAmount as PossibleEnglishName_OfficialNotificationWithEveryAmount}                                                                     from 'core/officialNotification/OfficialNotifications.types'
import type {PossibleEnglishName as PossibleEnglishName_OtherWordInTheGame, PossibleEnglishName_Plural as PossiblePluralEnglishName_OtherWordInTheGame, PossibleEnglishName_Singular as PossibleSingularEnglishName_OtherWordInTheGame}          from 'core/otherWordInTheGame/OtherWordInTheGames.types'
import type {PossibleEnglishName as PossibleEnglishName_PredefinedMessage}                                                                                                                                                                       from 'core/predefinedMessage/PredefinedMessages.types'
import type {PossibleWorldNumber as PossibleWorldNumber_SampleCourse}                                                                                                                                                                            from 'core/sampleCourse/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_SoundEffect}                                                                                                                                                                             from 'core/soundEffect/SoundEffects.types'
import type {PossibleEnglishName as PossibleEnglishName_SoundEffectCategory}                                                                                                                                                                     from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_Theme}                                                                                                                                                                                   from 'core/theme/Themes.types'
import type {PossibleName as PossibleName_Version, PossibleName_SMM1 as PossibleName_Version_SMM, PossibleName_SMM2 as PossibleName_Version_SMM2, PossibleName_SMM3DS as PossibleName_Version_SMM3DS}                                            from 'core/version/Versions.types'

import {EntityBehaviours}      from 'core/behaviour/EntityBehaviours'
import {CharacterNames}        from 'core/characterName/CharacterNames'
import {Entities}              from 'core/entity/Entities'
import {EntityCategories}      from 'core/entityCategory/EntityCategories'
import {Games}                 from 'core/game/Games'
import {GameStyles}            from 'core/gameStyle/GameStyles'
import {GameReferences}        from 'core/gameReference/GameReferences'
import {Instruments}           from 'core/instrument/Instruments'
import {LimitTypes}            from 'core/limit/LimitTypes'
import {Limits}                from 'core/limit/Limits'
import {Medals}                from 'core/medal/Medals'
import {NightEffects}          from 'core/nightEffect/NightEffects'
import {MiiCostumeCategories}  from 'core/miiCostumeCategory/MiiCostumeCategories'
import {MiiCostumes}           from 'core/miiCostume/MiiCostumes'
import {MysteryMushrooms}      from 'core/mysteryMushroom/MysteryMushrooms'
import {OfficialCourses}       from 'core/officialCourse/OfficialCourses'
import {OfficialNotifications} from 'core/officialNotification/OfficialNotifications'
import {OtherWordInTheGames}   from 'core/otherWordInTheGame/OtherWordInTheGames'
import {PredefinedMessages}    from 'core/predefinedMessage/PredefinedMessages'
import {SampleCourses}         from 'core/sampleCourse/SampleCourses'
import {SoundEffects}          from 'core/soundEffect/SoundEffects'
import {SoundEffectCategories} from 'core/soundEffectCategory/SoundEffectCategories'
import {Themes}                from 'core/theme/Themes'
import {Versions}              from 'core/version/Versions'
import {CourseTags}            from 'core/courseTag/CourseTags'
import {INFINITY}              from 'util/commonVariables'
import {ArrayAsCollection}     from 'util/collection/ArrayAsCollection'

import ALL_GAME_STYLES =      GameStyles.ALL
import ALL_GAME_STYLES_SMM1 = GameStyles.ALL_SMM1
import ALL_THEMES =           Themes.ALL
import COURSE_THEMES_SMM1 =   Themes.COURSE_THEMES_SMM1
import SMM1 =                 Games.SMM1
import SMM2 =                 Games.SMM2
import SMM3DS =               Games.SMM3DS

/**
 * @singleton
 * @see GameReferences
 * @see GameStyles
 * @see CharacterNames
 * @see Entities
 * @see EntityBehaviours
 * @see Themes
 * @see NightEffects
 * @see EntityCategories
 * @see Limits
 * @see LimitTypes
 * @see SoundEffects
 * @see SoundEffectCategories
 * @see CourseTags
 * @see MiiCostumes
 * @see MiiCostumeCategories
 * @see MysteryMushrooms
 * @see OfficialNotifications
 * @see PredefinedMessages
 * @see SampleCourses
 * @see Medals
 * @see Instruments
 * @see Versions
 * @see OtherWordInTheGames
 */
export class EveryTypes {

    //region -------------------- Singleton usage --------------------

    static #instance?: EveryTypes

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Fields --------------------

    #everyPossibleAcronym_gameReference?: Array<PossibleAcronym_GameReference>
    #everyPossiblePokemonGeneration_gameReference?: Array<PokemonGeneration>
    #everyPossibleName_gameReference?: Array<PossibleEnglishName_GameReference>

    #everyPossibleAcronym_gameStyle?: Array<PossibleAcronym_GameStyle>
    #everyPossibleAcronym_gameStyle_smm1?: Array<PossibleAcronym_GameStyle>

    #everyPossibleName_characterName?: Array<PossibleEnglishName_CharacterName>
    #everyPossibleUniqueName_characterName?: Array<PossibleUniqueEnglishName_CharacterName>

    #everyPossibleName_entity?: Array<PossibleEnglishName_Entity>
    #everyPossibleWeight_entity?: Array<NonNullable<Exclude<PossibleWeight, UnknownCharacter>>>
    #everyPossibleLightSource_entity?: Array<NonNullable<Exclude<PossibleLightSource, UnknownCharacter>>>
    #everyPossibleSurviveConditionInDeadlyLiquid_entity?: Array<NonNullable<Exclude<CanSurviveInTheLavaOrThePoison, | boolean | UnknownCharacter>>>
    #everyPossibleLimitAmountType_entity?: Array<NonNullable<Exclude<LimitAmountType, | boolean | UnknownCharacter>>>
    #everyPossibleGELComment_entity?: Array<PossibleGeneralLimitComment>
    #everyPossibleGELGlobalComment_entity?: Array<PossibleGeneralGlobalLimitComment>
    #everyPossiblePJLComment_entity?: Array<PossibleProjectileLimitComment>
    #everyPossibleObjectRenderedLimitComment_entity?: Array<PossibleRenderedObjectLimitTypeComment>
    #everyPossibleOtherLimitComment_entity?: Array<PossibleOtherLimitComment>

    #everyPossibleAcronym_entityBehaviour?: Array<PossibleAcronym_EntityBehaviour>
    #everyPossibleTranslationKey_entityBehaviour?: Array<PossibleTranslationKey_EntityBehaviour>

    #everyPossibleName_entityGroup?: EveryPossibleName_EntityGroup

    #everyPossibleName_theme?: Array<PossibleEnglishName_Theme>
    #everyPossibleName_courseTheme_smm1?: Array<PossibleEnglishName_Theme>
    #everyPossibleName_themeNightEffect?: Array<PossibleEnglishName_Theme_NightEffect>

    #everyPossibleName_entityCategory?: Array<PossibleEnglishName_EntityCategory>

    #everyPossibleAcronym_limit?: Array<PossibleAcronym_Limit>
    #everyPossibleAlternativeAcronym_limit?: Array<PossibleAlternativeAcronym_Limit>
    #everyPossibleName_limit?: Array<PossibleEnglishName_Limit>
    #everyPossibleName_editorLimit?: Array<PossibleEnglishName_Limit>
    #everyPossibleName_playLimit?: Array<PossibleEnglishName_Limit>
    #everyPossibleAlternativeName_limit?: Array<PossibleAlternativeEnglishName_Limit>
    #everyPossibleAmount_smm1And3ds_limit?: Array<PossibleLimitAmount_SMM1And3DS_Amount>
    #everyPossibleAmount_smm2_limit?: Array<PossibleLimitAmount_SMM2_Amount>
    #everyPossibleComment_limit?: Array<NonNullable<PossibleLimitAmount_Comment>>
    #everyPossibleDescription_limit?: Array<PossibleLimitDescription_Limit>
    #everyPossibleName_limitType?: Array<PossibleEnglishName_LimitType>

    #everyPossibleName_soundEffect?: Array<PossibleEnglishName_SoundEffect>
    #everyPossibleName_soundEffectCategory?: Array<PossibleEnglishName_SoundEffectCategory>

    #everyPossibleName_courseTag?: Array<PossibleEnglishName_CourseTag>
    #everyPossibleMakerCentralName_courseTag?: Array<PossibleMakerCentralName>

    #everyPossibleName_MiiCostume?: Array<PossibleEnglishName_MiiCostume>
    #everyPossibleName_MiiCostumeCategory?: Array<PossibleEnglishName_MiiCostumeCategory>

    #everyPossibleEnglishNameOnFile_mysteryMushroom?: Array<UniqueEnglishName_MysteryMushroom>
    #everyPossibleConditionToUnlockIt_mysteryMushroom?: Array<PossibleConditionToUnlockIt_MysteryMushroom>
    #everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom?: Array<PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom>
    #everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom?: Array<PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom>

    #everyPossibleEnglishName_officialCourse?: Array<PossibleEnglishName_OfficialCourse>
    #everyPossibleReward_officialCourse?: Array<PossibleReward_OfficialCourse>
    #everyPossibleReleaseDate_officialCourse?: Array<PossibleReleaseDate_OfficialCourse>
    #everyPossibleRemovalDate_officialCourse?: Array<NonNullable<Exclude<PossibleRemovalDate_OfficialCourse, UnknownReference>>>

    #everyPossibleNameWithAmount_officialNotification?: Array<PossibleNameWithEveryAmount_OfficialNotification>

    #everyPossibleName_predefinedMessage?: Array<PossibleEnglishName_PredefinedMessage>

    #everyPossibleWorldNumber_SampleCourse?: Array<PossibleWorldNumber_SampleCourse>

    #everyPossibleName_medal?: Array<PossibleEnglishName_Medal>

    #everyPossibleName_instrument?: Array<PossibleEnglishName_Instrument>
    #everyPossibleMixedName_instrument?: Array<PossibleMixedName_Instrument>

    #everyPossibleName_version?: Array<PossibleName_Version>
    #everyPossibleName_version_smm?: Array<PossibleName_Version_SMM>
    #everyPossibleName_version_smm3ds?: Array<PossibleName_Version_SMM3DS>
    #everyPossibleName_version_smm2?: Array<PossibleName_Version_SMM2>

    #everyPossibleName_otherWordInTheGame?: Array<PossibleEnglishName_OtherWordInTheGame>
    #everyPossibleSingularName_otherWordInTheGame?: Array<PossibleSingularEnglishName_OtherWordInTheGame>
    #everyPossiblePluralName_otherWordInTheGame?: Array<PossiblePluralEnglishName_OtherWordInTheGame>

    //endregion -------------------- Fields --------------------

    //region -------------------- Game reference --------------------

    public get everyPossibleAcronym_gameReference() {
        return this.#everyPossibleAcronym_gameReference ??= GameReferences.Companion.values.map(it => it.acronym,).toArray()
    }

    public get everyPossiblePokemonGeneration_gameReference() {
        return this.#everyPossiblePokemonGeneration_gameReference ??= ['Pokémon gen 1', 'Pokémon gen 4', 'Pokémon gen 6',]
    }

    public get everyPossibleName_gameReference() {
        return this.#everyPossibleName_gameReference ??= GameReferences.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public get everyPossibleAcronym_gameStyle() {
        return this.#everyPossibleAcronym_gameStyle ??= new ArrayAsCollection(ALL_GAME_STYLES,).map(it => it.acronym,).toArray()
    }

    public get everyPossibleAcronym_gameStyle_smm1() {
        return this.#everyPossibleAcronym_gameStyle_smm1 ??= new ArrayAsCollection(ALL_GAME_STYLES_SMM1,).map(it => it.acronym,).toArray()
    }

    //endregion -------------------- Game style --------------------
    //region -------------------- Character name --------------------

    public get everyPossibleName_characterName() {
        return this.#everyPossibleName_characterName ??= CharacterNames.everyEnglishNames
    }

    public get everyPossibleUniqueName_characterName() {
        return this.#everyPossibleUniqueName_characterName ??= CharacterNames.Companion.values.map(it => it.uniqueEnglishName,).toArray()
    }

    //endregion -------------------- Character name --------------------
    //region -------------------- Entity --------------------

    public get everyPossibleName_entity() {
        return this.#everyPossibleName_entity ??= Entities.everyEnglishNames
    }


    public get everyPossibleWeight_entity() {
        return this.#everyPossibleWeight_entity ??= [0, 1, '½', 2, '1 per segment (1 to 8)', '2 (any height)',]
    }

    public get everyPossibleLightSource_entity() {
        return this.#everyPossibleLightSource_entity ??= [
            'Full light', 'Dim light',
            'Full light when falling', 'Full light when collected', 'Full light when shooting',
            'Dim light / Full light when falling or collected',
            'Project a light in front of them', 'Only when lit',
        ]
    }

    public get everyPossibleSurviveConditionInDeadlyLiquid_entity() {
        return this.#everyPossibleSurviveConditionInDeadlyLiquid_entity ??= ['Explode', 'Castle', 'Castle / Night Forest', 'Float', 'Melt to Coin', 'Only inside the ground',]
    }


    public get everyPossibleLimitAmountType_entity() {
        return this.#everyPossibleLimitAmountType_entity ??= [
            1, 2, '1?', INFINITY,
            'For each entity', 'For each clone (2-4)',
            'For each objects (4)',
            'For each projectile', 'For each projectile (1)',
            'For each projectiles', 'For each projectiles (2)', 'For each projectiles (3)',
            'For each projectiles (4)', 'For each projectiles (5)', 'For each projectiles (6)',
            'For each projectiles (10?)', 'For each projectiles (1|3)', 'For each projectiles (3-5)', 'For each projectiles (NSMU → 2, [SMB,SMB3,SMW] → 3)',
        ]
    }


    public get everyPossibleGELComment_entity() {
        return this.#everyPossibleGELComment_entity ??= ['Only when collected (30 frames)', 'As a group', 'Can overflow limit', 'Can overfill limit', 'Continue firing → GEL is max',]
    }

    public get everyPossibleGELGlobalComment_entity() {
        return this.#everyPossibleGELGlobalComment_entity ??= ['Not on track', 'While holding an entity',]
    }

    public get everyPossiblePJLComment_entity() {
        return this.#everyPossiblePJLComment_entity ??= ['Temporary as it comes out', 'Each one separated', 'Always reserve 1 projectile', 'By player, can overfill limit', 'Can only spawn (available) based → limits',]
    }

    public get everyPossibleObjectRenderedLimitComment_entity() {
        return this.#everyPossibleObjectRenderedLimitComment_entity ??= ['Only when not dotted', 'Only if not hit', 'Only if not hit?',]
    }

    public get everyPossibleOtherLimitComment_entity() {
        return this.#everyPossibleOtherLimitComment_entity ??= ['Only falling coin',]
    }

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public get everyPossibleAcronym_entityBehaviour() {
        return this.#everyPossibleAcronym_entityBehaviour ??= EntityBehaviours.CompanionEnum.get.values.map(it => it.acronym,).toArray()
    }

    public get everyPossibleTranslationKey_entityBehaviour() {
        return this.#everyPossibleTranslationKey_entityBehaviour ??= EntityBehaviours.CompanionEnum.get.values.map(it => it.translationKey,).toArray()
    }

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public get everyPossibleName_entityGroup() {
        //TODO implements this methods
        return this.#everyPossibleName_entityGroup ??= []
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    public get everyPossibleName_theme() {
        return this.#everyPossibleName_theme ??= new ArrayAsCollection(ALL_THEMES,).map(it => it.englishName,).toArray()
    }

    public get everyPossibleName_courseTheme_smm1() {
        return this.#everyPossibleName_courseTheme_smm1 ??= new ArrayAsCollection(COURSE_THEMES_SMM1,).map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Theme (night effect) --------------------

    public get everyPossibleName_themeNightEffect() {
        return this.#everyPossibleName_themeNightEffect ??= NightEffects.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Theme (night effect) --------------------
    //region -------------------- Entity category --------------------

    public get everyPossibleName_entityCategory() {
        return this.#everyPossibleName_entityCategory ??= EntityCategories.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Limit --------------------

    public get everyPossibleAcronym_limit() {
        return this.#everyPossibleAcronym_limit ??= new GenericCollectionHolder(Limits.Companion.values.map(it => it.acronym,).filterNotNull().toSet(),).toArray()
    }

    public get everyPossibleAlternativeAcronym_limit() {
        return this.#everyPossibleAlternativeAcronym_limit ??= new GenericCollectionHolder(Limits.Companion.values.map(it => it.alternativeAcronym,).filterNotNull().toSet(),).toArray()
    }


    public get everyPossibleName_limit() {
        return this.#everyPossibleName_limit ??= Limits.Companion.values.map(it => it.englishName,).toArray()
    }

    public get everyPossibleName_editorLimit() {
        return this.#everyPossibleName_editorLimit ??= new ArrayAsCollection(Limits.EDITOR,).map(it => it.englishName,).toArray()
    }

    public get everyPossibleName_playLimit() {
        return this.#everyPossibleName_playLimit ??= new ArrayAsCollection(Limits.PLAY,).map(it => it.englishName,).toArray()
    }

    public get everyPossibleAlternativeName_limit() {
        return this.#everyPossibleAlternativeName_limit ??= Limits.Companion.values.map(it => it.alternativeEnglishName,).filterNotNull().toArray()
    }


    public get everyPossibleAmount_smm1And3ds_limit() {
        return this.#everyPossibleAmount_smm1And3ds_limit ??= [
            1, 2, 3, 4, 5, 6, 8,
            10, 50,
            100, 200, 300, 400,
            2000,
        ]
    }

    public get everyPossibleAmount_smm2_limit() {
        return this.#everyPossibleAmount_smm2_limit ??= [
            1, 2, 3, 4, 5, 6, 7, 8,
            10, 50,
            100, 200, 300, 400, 401, 483, 500, 999,
            1500, 2000, 4000,
        ]
    }

    public get everyPossibleComment_limit() {
        return this.#everyPossibleComment_limit ??= ['Crash online if met', 'Is pitch black if met', 'In a single frame', 'Per player', 'Per pair', 'Per section',]
    }

    public get everyPossibleDescription_limit() {
        return this.#everyPossibleDescription_limit ??= [
            'Most enemy and some blocks being present',
            'Power-up (in game code) being present',
            'Coin in a loose state',
            'Sound effects being placed',
            'Entity having corpse (animation in game code) being present (in 1 frame)',
            'Entity marked as projectile (in game code)',
            'Entity that can emit light source',
            'Ground blocks being placed',
            'Blocks being placed',
            'Platforms, slopes, Conveyor Belt, Pipe, Clear Pipe, Vine being placed',
            'Clear Pipe being placed',
            'Vine growing or has grown',
            'Checkpoint Flag being placed',
            'Track being placed',
            'Snake Block being placed',
            '! Block being placed',
            'Track Block being placed',
            'Icicle being placed',
            'One-Way Wall, Arrow Sign, Dash Block being placed',
            'Maximum entity held by 1 Twister',
            'Snowball thrown by 1 Spike',
            'Maximum clear condition amount in 1 level',
            'Entity having an animation (in game code) being rendered (in 1 frame)',
            '10-Coin, 30-Coin, 50-Coin being placed',
            'Pink Coin being placed',
            'Coin (in loose state) collected in 1 frame',
            'Key held by 1 player',
            'Entity marked as a power-up (in game code) being placed',
            'Fireball being thrown',
            'Superball being thrown',
            'Bomb being thrown',
            'Builder Box being thrown',
            'Boomerang being thrown',
            'Cannonball being thrown',
            'Yoshi being present',
            'Most enemy and some blocks being placed',
            'Charvaargh being placed',
            'Piranha Creeper being placed',
            'Bowser, Bowser Jr. being placed',
            'Boom Boom, Pom Pom being placed',
            'Koopaling being placed',
            'Angry Sun, Moon being placed',
            'Phanto being present',
            'Koopa Troopa Car being placed',
            'Warp Doors being placed',
            'Warp Boxes being placed',
            'Warpable Pipes being placed',
        ]
    }

    //endregion -------------------- Limit --------------------
    //region -------------------- Limit type --------------------

    public get everyPossibleName_limitType() {
        return this.#everyPossibleName_limitType ??= LimitTypes.Companion.values.map(type => type.englishName,).toArray()
    }

    //endregion -------------------- Limit type --------------------
    //region -------------------- Sound effect --------------------

    public get everyPossibleName_soundEffect() {
        return this.#everyPossibleName_soundEffect ??= SoundEffects.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public get everyPossibleName_soundEffectCategory() {
        return this.#everyPossibleName_soundEffectCategory ??= SoundEffectCategories.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Course tag --------------------

    public get everyPossibleName_courseTag() {
        return this.#everyPossibleName_courseTag ??= CourseTags.Companion.values.map(it => it.englishName,).toArray()
    }

    public get everyPossibleMakerCentralName_courseTag() {
        return this.#everyPossibleMakerCentralName_courseTag ??= [
            'Standard', 'Puzzle', 'Speedrun', 'Autoscroll', 'Auto',
            'Short', 'Shooter', 'One Player Only', 'Multiplayer', 'Themed',
            'Music', 'Pixel Art', 'Technical', 'Boss', 'Link',
        ]
    }

    //endregion -------------------- Course tag --------------------
    //region -------------------- Mii costume --------------------

    public get everyPossibleName_MiiCostume() {
        return this.#everyPossibleName_MiiCostume ??= MiiCostumes.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    public get everyPossibleName_MiiCostumeCategory() {
        return this.#everyPossibleName_MiiCostumeCategory ??= MiiCostumeCategories.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public get everyPossibleUniqueEnglishName_mysteryMushroom() {
        return this.#everyPossibleEnglishNameOnFile_mysteryMushroom ??= MysteryMushrooms.Companion.values.map(it => it.uniqueEnglishName,).toArray()
    }

    public get everyPossibleConditionToUnlockIt_mysteryMushroom() {
        return this.#everyPossibleConditionToUnlockIt_mysteryMushroom ??= [
            'Unlock Mystery Mushroom',
            '100 Mario (easy)', '100 Mario (normal)', '100 Mario (expert)', '100 Mario (super expert)',
            'Gnat Attack (normal)', 'Gnat Attack (hard)',
            'Complete Event', 'Complete 3 Events (by Arino)',
        ]
    }

    public get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom() {
        return this.#everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom ??= [
            'Introduction', 'Startup', 'Game over',
            'Level finished', 'Level finished?', 'Race finished',
            'Airship completed', 'Timed event completed', 'Course completed',
            'Perfect score obtained', 'Upgrade obtained', 'Important item obtained',
            'Star collected', 'Triforce collected',
            'Boss key obtained', 'Boss defeated',
            'New technique acquired', 'Gym Leader victory', 'Rank up', 'Secret area discovered', 'Declaring the Splatfest’s winning team',
            'Bowser’s arrival', 'Link meets Zelda for the 1st time', 'Ganon encounter',
            '3DS preview jingle',
        ]
    }

    public get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom() {
        return this.#everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom ??= [
            'Game over', 'Defeated', 'Error sound',
            'Boss defeated', 'Dog laughing',
            'Lost a life', 'Lost an Arwing', 'Falling offscreen',
            'Eliminated from the race', 'Eliminated from the course', 'Player has fainted',
            'Minigame lost', 'Round lost',
            'Timed event failed', 'Ran out of energy', 'Practice Catcher result jingle',
            'Bowser’s death', 'Mario saying "Mama mia"', 'Zelda’s Lullaby', 'Link caught by Moblins', 'K.K. howling', 'Pikmin death',
        ]
    }

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official course --------------------

    public get everyPossibleEnglishName_officialCourse() {
        return this.#everyPossibleEnglishName_officialCourse ??= OfficialCourses.Companion.values.map(it => it.englishName,).toArray()
    }

    public get everyPossibleReward_officialCourse() {
        return this.#everyPossibleReward_officialCourse ??= [
            'Dr. Kawashima', 'Undodog', 'Callie / Marie',
            'Shaun the Sheep', 'Kitty White / Melody', 'Popo & Nana',
            'BABYMETAL', 'Starfy', 'Yu Ayasaki',
            'Toadette', 'Wolf Link', 'Mary O.',
            'Statue Mario', 'Barbara the Bat', 'Chitoge Kirisaki',
            'Bulbasaur / Charmander / Squirtle',
            'Professor E. Gadd', 'Daisy', 'Yamamura',
            'Bike', 'Sky Pop', 'Birdo',
            'Captain Toad', 'Mr. Saturn', 'Master Belch',
            'Arcade bunny', 'Felyne', 'GLA',
            'Mario Trio', 'Frog Mario',
            'Necky', 'Cat Mario', 'Cat Peach',
            'SUPER MARIO KUN', 'Totem Link', 'Arino KACHO',
        ]
    }

    public get everyPossibleReleaseDate_officialCourse() {
        return this.#everyPossibleReleaseDate_officialCourse ??= [
            '2017-10-27',
            '2016-12-21',
            '2016-11-25',
            '2016-07-08',
            '2016-06-03',
            '2016-05-27', '2016-05-13',
            '2016-04-08', '2016-04-01',
            '2016-03-21', '2016-03-18', '2016-03-10', '2016-03-09', '2016-03-04', '2016-02-26',
            '2016-02-19', '2016-02-12', '2016-02-05',
            '2016-01-30', '2016-01-15', '2016-01-13', '2016-01-07',
            '2015-12-31', '2015-12-25', '2015-12-19', '2015-12-18', '2015-12-16', '2015-12-10', '2015-12-03',
            '2015-11-27', '2015-11-12', '2015-11-11', '2015-11-06', '2015-11-05',
        ]
    }

    public get everyPossibleRemovalDate_officialCourse() {
        return this.#everyPossibleRemovalDate_officialCourse ??= ['2016-02-22',]
    }

    //endregion -------------------- Official course --------------------
    //region -------------------- Official notification --------------------

    public get everyPossibleNameWithAmount_officialNotification() {
        return this.#everyPossibleNameWithAmount_officialNotification ??= OfficialNotifications.Companion.values.map(it => [it.englishName, it.additionalEnglishName,],).toArray().flat(2,)
    }

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    public get everyPossibleName_predefinedMessage() {
        return this.#everyPossibleName_predefinedMessage ??= PredefinedMessages.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Sample course --------------------

    public get everyPossibleWorldNumber_SampleCourse() {
        return this.#everyPossibleWorldNumber_SampleCourse ??= SampleCourses.Companion.values.map(it => it.name,).toArray()
    }

    //endregion -------------------- Sample course --------------------
    //region -------------------- Medal --------------------

    public get everyPossibleName_medal() {
        return this.#everyPossibleName_medal ??= Medals.Companion.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Medal --------------------
    //region -------------------- Instrument --------------------

    public get everyPossibleName_instrument() {
        return this.#everyPossibleName_instrument ??= Instruments.Companion.values.map(it => it.englishName,).toArray()
    }

    public get everyPossibleMixedName_instrument() {
        return this.#everyPossibleMixedName_instrument ??= ['Unchain Chomp → Piano 1\nStump → Mokugyo', 'Bottom → Hello\nTop → Ok',]
    }

    //endregion -------------------- Instrument --------------------
    //region -------------------- Version --------------------

    public get everyPossibleName_version() {
        return this.#everyPossibleName_version ??= Versions.Companion.values.map(it => it.simpleName,).toArray()
    }

    public get everyPossibleName_version_smm() {
        return this.#everyPossibleName_version_smm ??= Versions.Companion.values.filter(it => it.game === SMM1,).map(it => it.simpleName as PossibleName_Version_SMM,).toArray()
    }

    public get everyPossibleName_version_smm3ds() {
        return this.#everyPossibleName_version_smm3ds ??= Versions.Companion.values.filter(it => it.game === SMM3DS,).map(it => it.simpleName as PossibleName_Version_SMM3DS,).toArray()
    }

    public get everyPossibleName_version_smm2() {
        return this.#everyPossibleName_version_smm2 ??= Versions.Companion.values.filter(it => it.game === SMM2,).map(it => it.simpleName as PossibleName_Version_SMM2,).toArray()
    }

    //endregion -------------------- Version --------------------
    //region -------------------- Other word in the game --------------------

    public get everyPossibleName_otherWordInTheGame() {
        return this.#everyPossibleName_otherWordInTheGame ??= new ArrayAsCollection(OtherWordInTheGames.CompanionEnum.get.values.map(it => [it.singularEnglishName, it.pluralEnglishName,],).toArray().flat(),).filterNotNull().toArray()
    }

    public get everyPossibleSingularName_otherWordInTheGame() {
        return this.#everyPossibleSingularName_otherWordInTheGame ??= OtherWordInTheGames.CompanionEnum.get.values.map(it => it.singularEnglishName,).toArray()
    }

    public get everyPossiblePluralName_otherWordInTheGame() {
        return this.#everyPossiblePluralName_otherWordInTheGame ??= OtherWordInTheGames.CompanionEnum.get.values.map(it => it.pluralEnglishName,).filterNotNull().toArray()
    }

    //endregion -------------------- Other word in the game --------------------

}

//region -------------------- External types --------------------

type EveryPossibleName_EntityGroup = StringArray

//region -------------------- Official notification --------------------

type PossibleNameWithEveryAmount_OfficialNotification = PossibleEnglishName_OfficialNotification | PossibleEnglishName_OfficialNotificationWithEveryAmount

//endregion -------------------- Official notification --------------------

//endregion -------------------- External types --------------------
