import type {EntityBehaviours}              from 'core/behaviour/EntityBehaviours'
import type {CharacterNames}                from 'core/characterName/CharacterNames'
import type {CourseTags}                    from 'core/courseTag/CourseTags'
import type {EntityCategories}              from 'core/entityCategory/EntityCategories'
import type {ClearConditionEntityImages}    from 'core/entity/ClearConditionEntityImages'
import type {EditorEntityImages}            from 'core/entity/EditorEntityImages'
import type {Entities}                      from 'core/entity/Entities'
import type {EntityImages}                  from 'core/entity/EntityImages'
import type {EntityLoader}                  from 'core/entity/Entity.loader'
import type {InGameEntityImages}            from 'core/entity/InGameEntityImages'
import type {UnusedEntityImages}            from 'core/entity/UnusedEntityImages'
import type {UnusedBigMushroomEntityImages} from 'core/entity/UnusedBigMushroomEntityImages'
import type {Games}                         from 'core/game/Games'
import type {GameReferences}                from 'core/gameReference/GameReferences'
import type {GameStyles}                    from 'core/gameStyle/GameStyles'
import type {Instruments}                   from 'core/instrument/Instruments'
import type {Limits}                        from 'core/limit/Limits'
import type {LimitTypes}                    from 'core/limit/LimitTypes'
import type {MiiCostumeCategories}          from 'core/miiCostumeCategory/MiiCostumeCategories'
import type {MiiCostumes}                   from 'core/miiCostume/MiiCostumes'
import type {Musics}                        from 'core/music/Musics'
import type {MysteryMushrooms}              from 'core/mysteryMushroom/MysteryMushrooms'
import type {NightEffects}                  from 'core/nightEffect/NightEffects'
import type {OfficialNotifications}         from 'core/officialNotification/OfficialNotifications'
import type {PredefinedMessages}            from 'core/predefinedMessage/PredefinedMessages'
import type {SoundEffectCategories}         from 'core/soundEffectCategory/SoundEffectCategories'
import type {SoundEffects}                  from 'core/soundEffect/SoundEffects'
import type {Themes}                        from 'core/theme/Themes'
import type {Times}                         from 'core/time/Times'
import type {Versions}                      from 'core/version/Versions'

/**
 * A class that has for purpose to dynamically import some class
 * that have some heavy dependencies or some recursive dependencies (not direct recursive, but indirect one).
 *
 * By importing this class, no other classes are imported, they will be imported once the specific method is used.
 * But to use <u>object deconstruction</u> defeat the whole purpose of this class.
 *
 * @singleton
 */
export class DynamicImporter {

    //region -------------------- Singleton usage --------------------

    static #instance?: DynamicImporter

    private constructor() {}

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

    #EntityImages?: typeof EntityImages
    #EditorEntityImages?: typeof EditorEntityImages
    #ClearConditionEntityImages?: typeof ClearConditionEntityImages
    #InGameEntityImages?: typeof InGameEntityImages
    #UnusedEntityImages?: typeof UnusedEntityImages
    #UnusedBigMushroomEntityImages?: typeof UnusedBigMushroomEntityImages

    //endregion -------------------- Entity fields --------------------
    //region -------------------- "Limit" fields --------------------

    #Limits?: typeof Limits

    #LimitTypes?: typeof LimitTypes

    //endregion -------------------- "Limit" fields --------------------
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
    //region -------------------- "Game" fields --------------------

    #Games?: typeof Games

    //endregion -------------------- "Game" fields --------------------
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


    public get EntityImages(): typeof EntityImages {
        return this.#EntityImages ??= require('../core/entity/EntityImages').EntityImages
    }

    public get EditorEntityImages(): typeof EditorEntityImages {
        return this.#EditorEntityImages ??= require('../core/entity/EditorEntityImages').EditorEntityImages
    }

    public get ClearConditionEntityImages(): typeof ClearConditionEntityImages {
        return this.#ClearConditionEntityImages ??= require('../core/entity/ClearConditionEntityImages').ClearConditionEntityImages
    }

    public get InGameEntityImages(): typeof InGameEntityImages {
        return this.#InGameEntityImages ??= require('../core/entity/InGameEntityImages').InGameEntityImages
    }

    public get UnusedEntityImages(): typeof UnusedEntityImages {
        return this.#UnusedEntityImages ??= require('../core/entity/UnusedEntityImages').UnusedEntityImages
    }

    public get UnusedBigMushroomEntityImages(): typeof UnusedBigMushroomEntityImages {
        return this.#UnusedBigMushroomEntityImages ??= require('../core/entity/UnusedBigMushroomEntityImages').UnusedBigMushroomEntityImages
    }

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- "Limit" getter methods --------------------

    public get Limits(): typeof Limits {
        return this.#Limits ??= require('../core/limit/Limits').Limits
    }


    public get LimitTypes(): typeof LimitTypes {
        return this.#LimitTypes ??= require('../core/limit/LimitTypes').LimitTypes
    }

    //endregion -------------------- "Limit" getter methods --------------------
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
    //region -------------------- "Game" getter methods --------------------

    public get Games(): typeof Games {
        return this.#Games ??= require('../core/game/Games').Games
    }

    //endregion -------------------- "Game" getter methods --------------------
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

    //endregion -------------------- Getter methods --------------------

}

/**
 * An alias of the dynamic importer.
 *
 * It also directly use the {@link DynamicImporter.get} to remove redundancy.
 * @see DynamicImporter
 */
export const Import = DynamicImporter.get
