import type {CanSurviveInTheLavaOrThePoison, PossibleLightSource, PossibleWeight}                                                                                                                                                                                        from 'core/entityTypes'
import type {PossibleAcronym as PossibleAcronym_EntityBehaviour, PossibleTranslationKeys as PossibleTranslationKey_EntityBehaviour}                                                                                                                                      from 'core/behaviour/EntityBehaviours.types'
import type {PossibleEnglishName as PossibleEnglishName_CharacterName, PossibleUniqueEnglishName as PossibleUniqueEnglishName_CharacterName}                                                                                                                             from 'core/characterName/CharacterNames.types'
import type {PossibleEnglishName as PossibleEnglishName_CourseTag, PossibleMakerCentralName}                                                                                                                                                                             from 'core/courseTag/CourseTags.types'
import type {PossibleEnglishName as PossibleEnglishName_Entity}                                                                                                                                                                                                          from 'core/entity/Entities.types'
import type {LimitAmountType, PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment, PossibleRenderedObjectLimitTypeComment}                                                       from 'core/entity/properties/limit/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_EntityCategory}                                                                                                                                                                                                  from 'core/entityCategory/EntityCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_EntityLimitType}                                                                                                                                                                                                 from 'core/entityLimit/EntityLimitTypes.types'
import type {PossibleAcronym as PossibleAcronym_EntityLimit, PossibleAlternativeAcronym as PossibleAlternativeAcronym_EntityLimit, PossibleAlternativeEnglishName as PossibleAlternativeEnglishName_EntityLimit, PossibleEnglishName as PossibleEnglishName_EntityLimit} from 'core/entityLimit/EntityLimits.types'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount, PossibleLimitAmount_SMM2_UnknownAmount}                                                                                                                from 'core/entityLimit/EntityLimit.template'
import type {PossibleAcronym as PossibleAcronym_GameReference, PossibleEnglishName as PossibleEnglishName_GameReference}                                                                                                                                                 from 'core/gameReference/GameReferences.types'
import type {PossibleAcronym as PossibleAcronym_GameStyle}                                                                                                                                                                                                               from 'core/gameStyle/GameStyles.types'
import type {PossibleEnglishName as PossibleEnglishName_Instrument}                                                                                                                                                                                                      from 'core/instrument/Instruments.types'
import type {PossibleMixedInstrument as PossibleMixedName_Instrument}                                                                                                                                                                                                    from 'core/instrument/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_MiiCostume}                                                                                                                                                                                                      from 'core/miiCostume/MiiCostumes.types'
import type {PossibleEnglishName as PossibleEnglishName_MiiCostumeCategory}                                                                                                                                                                                              from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleUniqueEnglishName as UniqueEnglishName_MysteryMushroom}                                                                                                                                                                                             from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PokemonGeneration}                                                                                                                                                                                                                                          from 'core/mysteryMushroom/MysteryMushroom.template'
import type {PossibleConditionToUnlockIt as PossibleConditionToUnlockIt_MysteryMushroom}                                                                                                                                                                                 from 'core/mysteryMushroom/properties/UnlockProperty'
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom}                                                                                                                                                                    from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom}                                                                                                                                                                       from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleEnglishName as PossibleEnglishName_Theme_NightEffect}                                                                                                                                                                                               from 'core/nightEffect/NightEffects.types'
import type {PossibleEnglishName as PossibleEnglishName_OfficialNotification, PossibleEnglishNameWithEveryAmount as PossibleEnglishName_OfficialNotificationWithEveryAmount}                                                                                             from 'core/officialNotification/OfficialNotifications.types'
import type {PossibleEnglishName as PossibleEnglishName_PredefinedMessage}                                                                                                                                                                                               from 'core/predefinedMessage/PredefinedMessages.types'
import type {PossibleEnglishName as PossibleEnglishName_SoundEffect}                                                                                                                                                                                                     from 'core/soundEffect/SoundEffects.types'
import type {PossibleEnglishName as PossibleEnglishName_SoundEffectCategory}                                                                                                                                                                                             from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_Theme}                                                                                                                                                                                                           from 'core/theme/Themes.types'
import type {PossibleName as PossibleName_Version, PossibleName_SMM1 as PossibleName_Version_SMM, PossibleName_SMM2 as PossibleName_Version_SMM2, PossibleName_SMM3DS as PossibleName_Version_SMM3DS}                                                                    from 'core/version/Versions.types'
import type {UnknownCharacter, UnknownReference}                                                                                                                                                                                                                         from 'util/types/variables'
import type {NullOr}                                                                                                                                                                                                                                                     from 'util/types/nullable'

import {INFINITY, UNKNOWN_REFERENCE} from 'util/commonVariables'
import {EntityBehaviours}            from 'core/behaviour/EntityBehaviours'
import {CharacterNames}              from 'core/characterName/CharacterNames'
import {Entities}                    from 'core/entity/Entities'
import {EntityCategories}            from 'core/entityCategory/EntityCategories'
import {EntityLimitTypes}            from 'core/entityLimit/EntityLimitTypes'
import {EntityLimits}                from 'core/entityLimit/EntityLimits'
import {GameStyles}                  from 'core/gameStyle/GameStyles'
import {GameReferences}              from 'core/gameReference/GameReferences'
import {Instruments}                 from 'core/instrument/Instruments'
import {NightEffects}                from 'core/nightEffect/NightEffects'
import {MiiCostumeCategories}        from 'core/miiCostumeCategory/MiiCostumeCategories'
import {MiiCostumes}                 from 'core/miiCostume/MiiCostumes'
import {MysteryMushrooms}            from 'core/mysteryMushroom/MysteryMushrooms'
import {OfficialNotifications}       from 'core/officialNotification/OfficialNotifications'
import {PredefinedMessages}          from 'core/predefinedMessage/PredefinedMessages'
import {SoundEffects}                from 'core/soundEffect/SoundEffects'
import {SoundEffectCategories}       from 'core/soundEffectCategory/SoundEffectCategories'
import {Themes}                      from 'core/theme/Themes'
import {Versions}                    from 'core/version/Versions'
import {CourseTags}                  from 'core/courseTag/CourseTags'

/**
 * @singleton
 * @see GameReferences
 * @see GameStyles
 * @see Entities
 * @see EntityBehaviours
 * @see Themes
 * @see NightEffects
 * @see EntityCategories
 * @see EntityLimits
 * @see EntityLimitTypes
 * @see SoundEffects
 * @see SoundEffectCategories
 * @see MiiCostumes
 * @see MiiCostumeCategories
 * @see MysteryMushrooms
 * @see Versions
 */
export class EveryTypes {

    //region -------------------- Singleton usage --------------------

    static #instance?: EveryTypes

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Fields --------------------

    #everyPossibleAcronym_gameReference?: readonly PossibleAcronym_GameReference[]
    #everyPossiblePokemonGeneration_gameReference?: readonly PokemonGeneration[]
    #everyPossibleName_gameReference?: readonly PossibleEnglishName_GameReference[]

    #everyPossibleAcronym_gameStyle?: readonly PossibleAcronym_GameStyle[]

    #everyPossibleName_characterName?: readonly PossibleEnglishName_CharacterName[]
    #everyPossibleUniqueName_characterName?: readonly PossibleUniqueEnglishName_CharacterName[]

    #everyPossibleName_entity?: readonly PossibleEnglishName_Entity[]
    #everyPossibleWeight_entity?: readonly NonNullable<Exclude<PossibleWeight, UnknownCharacter>>[]
    #everyPossibleLightSource_entity?: readonly NonNullable<Exclude<PossibleLightSource, UnknownCharacter>>[]
    #everyPossibleSurviveConditionInDeadlyLiquid_entity?: readonly NonNullable<Exclude<CanSurviveInTheLavaOrThePoison, | boolean | UnknownCharacter>>[]
    #everyPossibleLimitAmountType_entity?: readonly NonNullable<Exclude<LimitAmountType, | boolean | UnknownCharacter>>[]
    #everyPossibleGEL_entity?: readonly PossibleGeneralEntityLimitComment[]
    #everyPossibleGELGlobal_entity?: readonly PossibleGeneralGlobalEntityLimitComment[]
    #everyPossiblePJL_entity?: readonly PossibleProjectileEntityLimitComment[]
    #everyPossibleObjectRenderedLimit_entity?: readonly PossibleRenderedObjectLimitTypeComment[]
    #everyPossibleOtherLimitComment_entity?: readonly PossibleOtherLimitComment[]

    #everyPossibleAcronym_entityBehaviour?: readonly PossibleAcronym_EntityBehaviour[]
    #everyPossibleTranslationKey_entityBehaviour?: readonly PossibleTranslationKey_EntityBehaviour[]

    #everyPossibleName_entityGroup?: EveryPossibleName_EntityGroup

    #everyPossibleName_theme?: readonly PossibleEnglishName_Theme[]
    #everyPossibleName_themeNightEffect?: readonly PossibleEnglishName_Theme_NightEffect[]

    #everyPossibleName_entityCategory?: readonly PossibleEnglishName_EntityCategory[]

    #everyPossibleAcronym_limit?: readonly PossibleAcronym_EntityLimit[]
    #everyPossibleAlternativeAcronym_limit?: readonly PossibleAlternativeAcronym_EntityLimit[]
    #everyPossibleName_limit?: readonly PossibleEnglishName_EntityLimit[]
    #everyPossibleName_editorLimit?: readonly PossibleEnglishName_EntityLimit[]
    #everyPossibleName_playLimit?: readonly PossibleEnglishName_EntityLimit[]
    #everyPossibleAlternativeName_limit?: readonly PossibleAlternativeEnglishName_EntityLimit[]
    #everyPossibleAmount_smm1And3ds_limit?: readonly PossibleLimitAmount_SMM1And3DS_Amount[]
    #everyPossibleAmount_smm2_limit?: readonly (| PossibleLimitAmount_SMM2_Amount | PossibleLimitAmount_SMM2_UnknownAmount)[]
    #everyPossibleComment_limit?: readonly NonNullable<PossibleLimitAmount_Comment>[]
    #everyPossibleName_limitType?: readonly PossibleEnglishName_EntityLimitType[]

    #everyPossibleName_soundEffect?: readonly PossibleEnglishName_SoundEffect[]
    #everyPossibleName_soundEffectCategory?: readonly PossibleEnglishName_SoundEffectCategory[]

    #everyPossibleName_courseTag?: readonly PossibleEnglishName_CourseTag[]
    #everyPossibleMakerCentralName_courseTag?: readonly PossibleMakerCentralName[]

    #everyPossibleName_MiiCostume?: readonly PossibleEnglishName_MiiCostume[]
    #everyPossibleName_MiiCostumeCategory?: readonly PossibleEnglishName_MiiCostumeCategory[]

    #everyPossibleEnglishNameOnFile_mysteryMushroom?: readonly UniqueEnglishName_MysteryMushroom[]
    #everyPossibleConditionToUnlockIt_mysteryMushroom?: readonly PossibleConditionToUnlockIt_MysteryMushroom[]
    #everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom?: EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom
    #everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom?: EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom

    #everyPossibleNameWithAmount_officialNotification?: readonly PossibleNameWithEveryAmount_OfficialNotification[]

    #everyPossibleName_predefinedMessage?: readonly PossibleEnglishName_PredefinedMessage[]

    #everyPossibleName_instrument?: readonly PossibleEnglishName_Instrument[]
    #everyPossibleMixedName_instrument?: readonly PossibleMixedName_Instrument[]

    #everyPossibleName_version?: readonly PossibleName_Version[]
    #everyPossibleName_version_smm?: readonly PossibleName_Version_SMM[]
    #everyPossibleName_version_smm3ds?: readonly PossibleName_Version_SMM3DS[]
    #everyPossibleName_version_smm2?: readonly PossibleName_Version_SMM2[]

    //endregion -------------------- Fields --------------------

    //region -------------------- Game reference --------------------

    public get everyPossibleAcronym_gameReference() {
        return this.#everyPossibleAcronym_gameReference ??= GameReferences.values.map(it => it.acronym).toArray()
    }

    public get everyPossiblePokemonGeneration_gameReference() {
        return this.#everyPossiblePokemonGeneration_gameReference ??= ['Pokémon gen 1', 'Pokémon gen 4', 'Pokémon gen 6',]
    }

    public get everyPossibleName_gameReference() {
        return this.#everyPossibleName_gameReference ??= GameReferences.values.map(it => it.englishName).toArray()
    }

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public get everyPossibleAcronym_gameStyle() {
        return this.#everyPossibleAcronym_gameStyle ??= GameStyles.values.map(limit => limit.acronym).toArray()
    }

    //endregion -------------------- Game style --------------------
    //region -------------------- Character name --------------------

    public get everyPossibleName_characterName() {
        return this.#everyPossibleName_characterName ??= CharacterNames.values.map(it => it.englishName).toArray()
    }

    public get everyPossibleUniqueName_characterName() {
        return this.#everyPossibleUniqueName_characterName ??= CharacterNames.values.map(it => it.uniqueEnglishName).toArray()
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


    public get everyPossibleGEL_entity() {
        return this.#everyPossibleGEL_entity ??= ['Only when collected (30 frames)', 'As a group', 'Can overflow limit', 'Can overfill limit', 'Continue firing → GEL is max',]
    }

    public get everyPossibleGELGlobal_entity() {
        return this.#everyPossibleGELGlobal_entity ??= ['Not on track', 'While holding an entity',]
    }

    public get everyPossiblePJL_entity() {
        return this.#everyPossiblePJL_entity ??= ['Temporary as it comes out', 'Each one separated', 'Always reserve 1 projectile', 'By player, can overfill limit', 'Can only spawn (available) based → limits',]
    }

    public get everyPossibleObjectRenderedLimit_entity() {
        return this.#everyPossibleObjectRenderedLimit_entity ??= ['Only when not dotted', 'Only if not hit', 'Only if not hit?',]
    }

    public get everyPossibleOtherLimitComment_entity() {
        return this.#everyPossibleOtherLimitComment_entity ??= ['Only falling coin',]
    }

//endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public get everyPossibleAcronym_entityBehaviour() {
        return this.#everyPossibleAcronym_entityBehaviour ??= EntityBehaviours.values.map(it => it.acronym).toArray()
    }

    public get everyPossibleTranslationKey_entityBehaviour() {
        return this.#everyPossibleTranslationKey_entityBehaviour ??= EntityBehaviours.values.map(it => it.translationKey).toArray()
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
        return this.#everyPossibleName_theme ??= Themes.values.map(it => it.englishName).toArray()
    }

    public get everyPossibleName_themeNightEffect() {
        return this.#everyPossibleName_themeNightEffect ??= NightEffects.values.map(it => it.englishName).toArray()
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public get everyPossibleName_entityCategory() {
        return this.#everyPossibleName_entityCategory ??= EntityCategories.values.map(it => it.englishName).toArray()
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity limit --------------------

    public get everyPossibleAcronym_limit() {
        return this.#everyPossibleAcronym_limit ??= [...EntityLimits.values.map(it => it.acronym).filterNonNull().toSet(),]
    }

    public get everyPossibleAlternativeAcronym_limit() {
        return this.#everyPossibleAlternativeAcronym_limit ??= [...EntityLimits.values.map(it => it.alternativeAcronym).filterNonNull().toSet(),]
    }


    public get everyPossibleName_limit() {
        return this.#everyPossibleName_limit ??= EntityLimits.values.map(it => it.englishName).toArray()
    }

    public get everyPossibleName_editorLimit() {
        return this.#everyPossibleName_editorLimit ??= EntityLimits.editorEntityLimits.map(it => it.englishName)
    }

    public get everyPossibleName_playLimit() {
        return this.#everyPossibleName_playLimit ??= EntityLimits.whilePlayingEntityLimits.map(it => it.englishName)
    }

    public get everyPossibleAlternativeName_limit() {
        return this.#everyPossibleAlternativeName_limit ??= EntityLimits.values.map(it => it.alternativeEnglishName).filterNonNull().toArray()
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
            10, '10?', 50,
            100, 200, 300, 400, '400?', 483, 500, '500?', 999,
            1500, 2000, 4000,
        ]
    }

    public get everyPossibleComment_limit() {
        return this.#everyPossibleComment_limit ??= ['Crash online if met', 'Per player', 'Per pair', 'Per section', 'In a single frame',]
    }


    public get everyPossibleName_limitType() {
        return this.#everyPossibleName_limitType ??= EntityLimitTypes.values.map(type => type.englishName).toArray()
    }

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Sound effect --------------------

    public get everyPossibleName_soundEffect() {
        return this.#everyPossibleName_soundEffect ??= SoundEffects.values.map(it => it.englishName).toArray()
    }

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public get everyPossibleName_soundEffectCategory() {
        return this.#everyPossibleName_soundEffectCategory ??= SoundEffectCategories.values.map(it => it.englishName).toArray()
    }

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Course tag --------------------

    public get everyPossibleName_courseTag() {
        return this.#everyPossibleName_courseTag ??= CourseTags.values.map(it => it.englishName).toArray()
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
        return this.#everyPossibleName_MiiCostume ??= MiiCostumes.values.map(it => it.englishName).toArray()
    }


    public get everyPossibleName_MiiCostumeCategory() {
        return this.#everyPossibleName_MiiCostumeCategory ??= MiiCostumeCategories.values.map(it => it.englishName).toArray()
    }

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public get everyPossibleUniqueEnglishName_mysteryMushroom() {
        return this.#everyPossibleEnglishNameOnFile_mysteryMushroom ??= MysteryMushrooms.values.map(it => it.uniqueEnglishName).toArray()
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
            UNKNOWN_REFERENCE,
            'Introduction', 'Startup', 'Game over',
            'Level finished', 'Level finished?', 'Race finished',
            'Airship completed', 'Timed event completed', 'Course completed',
            'Perfect score obtained', 'Upgrade obtained', 'Important item obtained',
            'Star collected', 'Triforce collected',
            'Boss key obtained', 'Boss defeated',
            'New technique acquired', 'Gym Leader victory', 'Rank up', 'Secret area discovered', 'Declaring the Splatfest\'s winning team',
            'Bowser\'s arrival', 'Link meets Zelda for the 1st time', 'Ganon encounter',
            '3DS preview jingle',
        ]
    }

    public get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom() {
        return this.#everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom ??= [
            UNKNOWN_REFERENCE,
            'Game over', 'Defeated', 'Error sound',
            'Boss defeated', 'Dog laughing',
            'Lost a life', 'Lost an Arwing', 'Falling offscreen',
            'Eliminated from the race', 'Eliminated from the course', 'Player has fainted',
            'Minigame lost', 'Round lost',
            'Timed event failed', 'Ran out of energy', 'Practice Catcher result jingle',
            'Bowser\'s death', 'Mario saying "Mama mia"', 'Zelda\'s Lullaby', 'Link caught by Moblins', 'K.K. howling', 'Pikmin death',
        ]
    }

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official notification --------------------

    public get everyPossibleNameWithAmount_officialNotification() {
        return this.#everyPossibleNameWithAmount_officialNotification ??= OfficialNotifications.values.map(it => [it.englishName, it.additionalEnglishName,]).toArray().flat(2)
    }

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    public get everyPossibleName_predefinedMessage() {
        return this.#everyPossibleName_predefinedMessage ??= PredefinedMessages.values.map(it => it.englishName).toArray()
    }

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Instrument --------------------

    public get everyPossibleName_instrument() {
        return this.#everyPossibleName_instrument ??= Instruments.values.map(it => it.englishName).toArray()
    }

    public get everyPossibleMixedName_instrument() {
        return this.#everyPossibleMixedName_instrument ??= ['Unchain Chomp → Piano 1\nStump → Mokugyo', 'Regular → Cymbal\nSideway → Hi-hat', 'Bottom → Hello\nTop → Ok']
    }

    //endregion -------------------- Instrument --------------------
    //region -------------------- Version --------------------

    public get everyPossibleName_version() {
        return this.#everyPossibleName_version ??= Versions.everyNames
    }

    public get everyPossibleName_version_smm() {
        return this.#everyPossibleName_version_smm ??= Versions.everyNames_smm1
    }

    public get everyPossibleName_version_smm3ds() {
        return this.#everyPossibleName_version_smm3ds ??= Versions.everyNames_smm3ds
    }

    public get everyPossibleName_version_smm2() {
        return this.#everyPossibleName_version_smm2 ??= Versions.everyNames_smm2
    }

    //endregion -------------------- Version --------------------

}

//region -------------------- External types --------------------

type EveryPossibleName_EntityGroup = readonly string[]

//region -------------------- Mystery Mushroom --------------------

type EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom, NullOr<UnknownReference>> | UnknownReference)[]

type EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom, NullOr<UnknownReference>> | UnknownReference)[]

//endregion -------------------- Mystery Mushroom --------------------
//region -------------------- Official notification --------------------

type PossibleNameWithEveryAmount_OfficialNotification = PossibleEnglishName_OfficialNotification | PossibleEnglishName_OfficialNotificationWithEveryAmount

//endregion -------------------- Official notification --------------------

//endregion -------------------- External types --------------------
