import type {ClassThatIsAvailableFromTheStartContainer} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container'
import type {ClassThatIsAvailableFromTheStartProvider}  from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider'
import type {EntityBehaviours}                          from 'core/behaviour/EntityBehaviours'
import type {CharacterNames}                            from 'core/characterName/CharacterNames'
import type {CourseTags}                                from 'core/courseTag/CourseTags'
import type {EntityCategories}                          from 'core/entityCategory/EntityCategories'
import type {EntityLimits}                              from 'core/entityLimit/EntityLimits'
import type {EntityLimitTypes}                          from 'core/entityLimit/EntityLimitTypes'
import type {Entities}                                  from 'core/entity/Entities'
import type {EntityLoader}                              from 'core/entity/Entity.loader'
import type {GameReferences}                            from 'core/gameReference/GameReferences'
import type {GameStyles}                                from 'core/gameStyle/GameStyles'
import type {Instruments}                               from 'core/instrument/Instruments'
import type {MiiCostumeCategories}                      from 'core/miiCostumeCategory/MiiCostumeCategories'
import type {MiiCostumes}                               from 'core/miiCostume/MiiCostumes'
import type {Musics}                                    from 'core/music/Musics'
import type {MysteryMushrooms}                          from 'core/mysteryMushroom/MysteryMushrooms'
import type {NightEffects}                              from 'core/nightEffect/NightEffects'
import type {OfficialNotifications}                     from 'core/officialNotification/OfficialNotifications'
import type {PredefinedMessages}                        from 'core/predefinedMessage/PredefinedMessages'
import type {SoundEffectCategories}                     from 'core/soundEffectCategory/SoundEffectCategories'
import type {SoundEffects}                              from 'core/soundEffect/SoundEffects'
import type {Themes}                                    from 'core/theme/Themes'
import type {Times}                                     from 'core/time/Times'
import type {Versions}                                  from 'core/version/Versions'

/**
 * <p>
 * A class that has for purpose to dynamically import some class
 * that have some heavy dependencies or some recursive dependencies (not direct recursive, but indirect one).
 * </p>
 * <p>
 *     By importing this class, no other classes are imported, they will be imported once the specific method is used.
 *     But to use <u>object deconstruction</u> defeat the whole purpose of this class.
 * </p>
 *
 * @singleton
 */
export class DynamicImporter {

    //region -------------------- Singleton usage --------------------

    static #instance?: DynamicImporter

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Fields --------------------

    //region -------------------- "Character name" fields --------------------

    #CharacterNames?: typeof CharacterNames

    //endregion -------------------- "Character name" fields --------------------
    //region -------------------- Entity fields --------------------

    #Entities?: typeof Entities
    #EntityLoader?: typeof EntityLoader

    //endregion -------------------- Entity fields --------------------
    //region -------------------- "Entity limit" fields --------------------

    #EntityLimits?: typeof EntityLimits

    #EntityLimitTypes?: typeof EntityLimitTypes

    //endregion -------------------- "Entity limit" fields --------------------
    //region -------------------- "Entity category" fields --------------------

    #EntityCategories?: typeof EntityCategories

    //endregion -------------------- "Entity category" fields --------------------
    //region -------------------- Theme fields --------------------

    #Themes?: typeof Themes

    #NightEffects?: typeof NightEffects

    //endregion -------------------- Theme fields --------------------
    //region -------------------- Time fields --------------------

    #Times?: typeof Times

    //endregion -------------------- Time fields --------------------
    //region -------------------- "Game reference" fields --------------------

    #GameReferences?: typeof GameReferences

    //endregion -------------------- "Game reference" fields --------------------
    //region -------------------- "Game style" fields --------------------

    #GameStyles?: typeof GameStyles

    //endregion -------------------- "Game style" fields --------------------
    //region -------------------- "Entity behaviour" fields --------------------

    #EntityBehaviours?: typeof EntityBehaviours

    //endregion -------------------- "Entity behaviour" fields --------------------
    //region -------------------- "Sound effect" fields --------------------

    #SoundEffects?: typeof SoundEffects

    #SoundEffectCategories?: typeof SoundEffectCategories

    //endregion -------------------- "Sound effect" fields --------------------
    //region -------------------- "Mystery Mushroom" fields --------------------

    #MysteryMushrooms?: typeof MysteryMushrooms

    //endregion -------------------- "Sound effect" fields --------------------
    //region -------------------- "Mii costume" fields --------------------

    #MiiCostumes?: typeof MiiCostumes

    #MiiCostumeCategories?: typeof MiiCostumeCategories

    //endregion -------------------- "Mii costume" fields --------------------
    //region -------------------- "Official notification" fields --------------------

    #OfficialNotifications?: typeof OfficialNotifications

    //endregion -------------------- "Official notification" fields --------------------
    //region -------------------- "Course tag" fields --------------------

    #CourseTags?: typeof CourseTags

    //endregion -------------------- "Course tag" fields --------------------
    //region -------------------- "Predefined message" fields --------------------

    #PredefinedMessages?: typeof PredefinedMessages

    //endregion -------------------- "Predefined message" fields --------------------
    //region -------------------- Instrument fields --------------------

    #Instruments?: typeof Instruments

    //endregion -------------------- Instrument fields --------------------
    //region -------------------- Music fields --------------------

    #Musics?: typeof Musics

    //endregion -------------------- Music fields --------------------
    //region -------------------- Version fields --------------------

    #Versions?: typeof Versions

    //endregion -------------------- Version fields --------------------
    //region -------------------- Other fields --------------------

    #ClassThatIsAvailableFromTheStartContainer?: typeof ClassThatIsAvailableFromTheStartContainer
    #ClassThatIsAvailableFromTheStartProvider?: typeof ClassThatIsAvailableFromTheStartProvider

    //endregion -------------------- Other fields --------------------

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Character name getter methods --------------------

    public get CharacterNames(): typeof CharacterNames {
        return this.#CharacterNames ??= require('../core/characterName/CharacterNames').CharacterNames
    }

    //endregion -------------------- Character name getter methods --------------------
    //region -------------------- Entity getter methods --------------------

    public get Entities(): typeof Entities {
        return this.#Entities ??= require('../core/entity/Entities').Entities
    }

    public get EntityLoader(): typeof EntityLoader {
        return this.#EntityLoader ??= require('../core/entity/Entity.loader').EntityLoader
    }

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- "Entity limit" getter methods --------------------

    public get EntityLimits(): typeof EntityLimits {
        return this.#EntityLimits ??= require('../core/entityLimit/EntityLimits').EntityLimits
    }


    public get EntityLimitTypes(): typeof EntityLimitTypes {
        return this.#EntityLimitTypes ??= require('../core/entityLimit/EntityLimitTypes').EntityLimitTypes
    }

    //endregion -------------------- "Entity limit" getter methods --------------------
    //region -------------------- "Entity category" getter methods --------------------

    public get EntityCategories(): typeof EntityCategories {
        return this.#EntityCategories ??= require('../core/entityCategory/EntityCategories').EntityCategories
    }

    //endregion -------------------- "Entity category" getter methods --------------------
    //region -------------------- Theme getter methods --------------------

    public get Themes(): typeof Themes {
        return this.#Themes ??= require('../core/theme/Themes').Themes
    }


    public get NightEffects(): typeof NightEffects {
        return this.#NightEffects ??= require('../core/nightEffect/NightEffects').NightEffects
    }

    //endregion -------------------- Theme getter methods --------------------
    //region -------------------- Time getter methods --------------------

    public get Times(): typeof Times {
        return this.#Times ??= require('../core/time/Times').Times
    }

    //endregion -------------------- Theme getter methods --------------------
    //region -------------------- "Game reference" getter methods --------------------

    public get GameReferences(): typeof GameReferences {
        return this.#GameReferences ??= require('../core/gameReference/GameReferences').GameReferences
    }

    //endregion -------------------- "Game reference" getter methods --------------------
    //region -------------------- "Game style" getter methods --------------------

    public get GameStyles(): typeof GameStyles {
        return this.#GameStyles ??= require('../core/gameStyle/GameStyles').GameStyles
    }

    //endregion -------------------- Game getter methods --------------------
    //region -------------------- "Entity behaviour" getter methods --------------------

    public get EntityBehaviours(): typeof EntityBehaviours {
        return this.#EntityBehaviours ??= require('../core/behaviour/EntityBehaviours').EntityBehaviours
    }

    //endregion -------------------- "Entity behaviour" getter methods --------------------
    //region -------------------- "Sound effect" getter methods --------------------

    public get SoundEffects(): typeof SoundEffects {
        return this.#SoundEffects ??= require('../core/soundEffect/SoundEffects').SoundEffects
    }


    public get SoundEffectCategories(): typeof SoundEffectCategories {
        return this.#SoundEffectCategories ??= require('../core/soundEffectCategory/SoundEffectCategories').SoundEffectCategories
    }

    //endregion -------------------- "Sound effect" getter methods --------------------
    //region -------------------- "Mystery Mushroom" getter methods --------------------

    public get MysteryMushrooms(): typeof MysteryMushrooms {
        return this.#MysteryMushrooms ??= require('../core/mysteryMushroom/MysteryMushrooms').MysteryMushrooms
    }

    //endregion -------------------- "Mystery Mushroom" getter methods --------------------
    //region -------------------- "Mii costume" getter methods --------------------

    public get MiiCostumes(): typeof MiiCostumes {
        return this.#MiiCostumes ??= require('../core/miiCostume/MiiCostumes').MiiCostumes
    }


    public get MiiCostumeCategories(): typeof MiiCostumeCategories {
        return this.#MiiCostumeCategories ??= require('../core/miiCostumeCategory/MiiCostumeCategories').MiiCostumeCategories
    }

    //endregion -------------------- "Mii costume" getter methods --------------------
    //region -------------------- "Official notification" getter methods --------------------

    public get OfficialNotifications(): typeof OfficialNotifications {
        return this.#OfficialNotifications ??= require('../core/officialNotification/OfficialNotifications').OfficialNotifications
    }

    //endregion -------------------- "Official notification" getter methods --------------------
    //region -------------------- "Course tag" fields --------------------

    public get CourseTags(): typeof CourseTags {
        return this.#CourseTags ??= require('../core/courseTag/CourseTags').CourseTags
    }

    //endregion -------------------- "Course tag" fields --------------------
    //region -------------------- "Predefined message" fields --------------------

    public get PredefinedMessages(): typeof PredefinedMessages {
        return this.#PredefinedMessages ??= require('../core/predefinedMessage/PredefinedMessages').PredefinedMessages
    }

    //endregion -------------------- "Predefined message" fields --------------------
    //region -------------------- "Instrument" getter methods --------------------

    public get Instruments(): typeof Instruments {
        return this.#Instruments ??= require('../core/instrument/Instruments').Instruments
    }

    //endregion -------------------- "Instrument" getter methods --------------------
    //region -------------------- "Music" getter methods --------------------

    public get Musics(): typeof Musics {
        return this.#Musics ??= require('../core/music/Musics').Musics
    }

    //endregion -------------------- "Music" getter methods --------------------
    //region -------------------- "Version" getter methods --------------------

    public get Versions(): typeof Versions {
        return this.#Versions ??= require('../core/version/Versions').Versions
    }

    //endregion -------------------- "Version" getter methods --------------------
    //region -------------------- Other getter methods --------------------

    public get ClassThatIsAvailableFromTheStartContainer(): typeof ClassThatIsAvailableFromTheStartContainer {
        return this.#ClassThatIsAvailableFromTheStartContainer ??= require('../core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container').ClassThatIsAvailableFromTheStartContainer
    }

    public get ClassThatIsAvailableFromTheStartProvider(): typeof ClassThatIsAvailableFromTheStartProvider {
        return this.#ClassThatIsAvailableFromTheStartProvider ??= require('../core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider').ClassThatIsAvailableFromTheStartProvider
    }

    //endregion -------------------- Other getter methods --------------------

    //endregion -------------------- Getter methods --------------------

}

/**
 * An alias of the dynamic importer.
 *
 * It also directly use the {@link DynamicImporter.get} to remove redundancy.
 * @see DynamicImporter
 */
export const Import = DynamicImporter.get
