import type {ClassThatIsAvailableFromTheStartContainer} from '../core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container';
import type {CourseTagLoader}                           from '../core/courseTag/CourseTag.loader';
import type {CourseTags}                                from '../core/courseTag/CourseTags';
import type {EntityBehaviourLoader}                     from '../core/behaviour/EntityBehaviour.loader';
import type {EntityBehaviours}                          from '../core/behaviour/EntityBehaviours';
import type {EntityCategoryLoader}                      from '../core/entityCategory/EntityCategory.loader';
import type {EntityCategories}                          from '../core/entityCategory/EntityCategories';
import type {EntityLimitLoader}                         from '../core/entityLimit/EntityLimit.loader';
import type {EntityLimits}                              from '../core/entityLimit/EntityLimits';
import type {EntityLimitTypes}                          from '../core/entityLimit/EntityLimitTypes';
import type {EntityLoader}                              from '../core/entity/Entity.loader';
import type {Entities}                                  from '../core/entity/Entities';
import type {GameReferenceLoader}                       from '../core/gameReference/GameReference.loader';
import type {GameReferences}                            from '../core/gameReference/GameReferences';
import type {GameStyleLoader}                           from '../core/gameStyle/GameStyle.loader';
import type {GameStyles}                                from '../core/gameStyle/GameStyles';
import type {InstrumentLoader}                          from '../core/instrument/Instrument.loader';
import type {Instruments}                               from '../core/instrument/Instruments';
import type {MiiCostumeCategories}                      from '../core/miiCostumeCategory/MiiCostumeCategories';
import type {MiiCostumeCategoryLoader}                  from '../core/miiCostumeCategory/MiiCostumeCategory.loader';
import type {MiiCostumeLoader}                          from '../core/miiCostume/MiiCostume.loader';
import type {MiiCostumes}                               from '../core/miiCostume/MiiCostumes';
import type {MysteryMushroomLoader}                     from '../core/mysteryMushroom/MysteryMushroom.loader';
import type {MysteryMushrooms}                          from '../core/mysteryMushroom/MysteryMushrooms';
import type {NightEffects}                              from '../core/nightEffect/NightEffects';
import type {OfficialNotifications}                     from '../core/officialNotification/OfficialNotifications';
import type {PredefinedMessageLoader}                   from '../core/predefinedMessage/PredefinedMessage.loader';
import type {PredefinedMessages}                        from '../core/predefinedMessage/PredefinedMessages';
import type {SoundEffectCategories}                     from '../core/soundEffectCategory/SoundEffectCategories';
import type {SoundEffectCategoryLoader}                 from '../core/soundEffectCategory/SoundEffectCategory.loader';
import type {SoundEffectLoader}                         from '../core/soundEffect/SoundEffect.loader';
import type {SoundEffects}                              from '../core/soundEffect/SoundEffects';
import type {ThemeLoader}                               from '../core/theme/Theme.loader';
import type {Themes}                                    from '../core/theme/Themes';
import type {Times}                                     from '../core/time/Times';
import type {Versions}                                  from '../core/version/Versions';

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

    static #instance?: DynamicImporter;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Fields --------------------

    //region -------------------- Entity fields --------------------

    #EntityLoader?: typeof EntityLoader;
    #Entities?: typeof Entities;

    //endregion -------------------- Entity fields --------------------
    //region -------------------- "Entity limit" fields --------------------

    #EntityLimitLoader?: typeof EntityLimitLoader;
    #EntityLimits?: typeof EntityLimits;

    #EntityLimitTypes?: typeof EntityLimitTypes;

    //endregion -------------------- "Entity limit" fields --------------------
    //region -------------------- "Entity category" fields --------------------

    #EntityCategoryLoader?: typeof EntityCategoryLoader;
    #EntityCategories?: typeof EntityCategories;

    //endregion -------------------- "Entity category" fields --------------------
    //region -------------------- Theme fields --------------------

    #ThemeLoader?: typeof ThemeLoader;
    #Themes?: typeof Themes;

    #NightEffects?: typeof NightEffects;

    //endregion -------------------- Theme fields --------------------
    //region -------------------- Time fields --------------------

    #Times?: typeof Times;

    //endregion -------------------- Time fields --------------------
    //region -------------------- "Game reference" fields --------------------

    #GameReferenceLoader?: typeof GameReferenceLoader;
    #GameReferences?: typeof GameReferences;

    //endregion -------------------- "Game reference" fields --------------------
    //region -------------------- "Game style" fields --------------------

    #GameStyleLoader?: typeof GameStyleLoader;
    #GameStyles?: typeof GameStyles;

    //endregion -------------------- "Game style" fields --------------------
    //region -------------------- "Entity behaviour" fields --------------------

    #EntityBehaviourLoader?: typeof EntityBehaviourLoader;
    #EntityBehaviours?: typeof EntityBehaviours;

    //endregion -------------------- "Entity behaviour" fields --------------------
    //region -------------------- "Sound effect" fields --------------------

    #SoundEffectLoader?: typeof SoundEffectLoader;
    #SoundEffects?: typeof SoundEffects;

    #SoundEffectCategoryLoader?: typeof SoundEffectCategoryLoader;
    #SoundEffectCategories?: typeof SoundEffectCategories;

    //endregion -------------------- "Sound effect" fields --------------------
    //region -------------------- "Mystery Mushroom" fields --------------------

    #MysteryMushroomLoader?: typeof MysteryMushroomLoader;
    #MysteryMushrooms?: typeof MysteryMushrooms;

    //endregion -------------------- "Sound effect" fields --------------------
    //region -------------------- "Mii costume" fields --------------------

    #MiiCostumeLoader?: typeof MiiCostumeLoader;
    #MiiCostumes?: typeof MiiCostumes;

    #MiiCostumeCategoryLoader?: typeof MiiCostumeCategoryLoader;
    #MiiCostumeCategories?: typeof MiiCostumeCategories;

    //endregion -------------------- "Mii costume" fields --------------------
    //region -------------------- "Official notification" fields --------------------

    #OfficialNotifications?: typeof OfficialNotifications;

    //endregion -------------------- "Official notification" fields --------------------
    //region -------------------- "Course tag" fields --------------------

    #CourseTags?: typeof CourseTags;
    #CourseTagLoader?: typeof CourseTagLoader;

    //endregion -------------------- "Course tag" fields --------------------
    //region -------------------- "Predefined message" fields --------------------

    #PredefinedMessages?: typeof PredefinedMessages;
    #PredefinedMessageLoader?: typeof PredefinedMessageLoader;

    //endregion -------------------- "Predefined message" fields --------------------
    //region -------------------- Instrument fields --------------------

    #Instruments?: typeof Instruments;
    #InstrumentLoader?: typeof InstrumentLoader;

    //endregion -------------------- Instrument fields --------------------
    //region -------------------- Version fields --------------------

    #Versions?: typeof Versions;

    //endregion -------------------- Version fields --------------------
    //region -------------------- Other fields --------------------

    #ClassThatIsAvailableFromTheStartContainer?: typeof ClassThatIsAvailableFromTheStartContainer;

    //endregion -------------------- Other fields --------------------

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Entity getter methods --------------------

    public get EntityLoader(): typeof EntityLoader {
        return this.#EntityLoader ??= require('../core/entity/Entity.loader').EntityLoader;
    }

    public get Entities(): typeof Entities {
        return this.#Entities ??= require('../core/entity/Entities').Entities;
    }


    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- "Entity limit" getter methods --------------------

    public get EntityLimitLoader(): typeof EntityLimitLoader {
        return this.#EntityLimitLoader ??= require('../core/entityLimit/EntityLimit.loader').EntityLimitLoader;
    }

    public get EntityLimits(): typeof EntityLimits {
        return this.#EntityLimits ??= require('../core/entityLimit/EntityLimits').EntityLimits;
    }


    public get EntityLimitTypes(): typeof EntityLimitTypes {
        return this.#EntityLimitTypes ??= require('../core/entityLimit/EntityLimitTypes').EntityLimitTypes;
    }

    //endregion -------------------- "Entity limit" getter methods --------------------
    //region -------------------- "Entity category" getter methods --------------------

    public get EntityCategoryLoader(): typeof EntityCategoryLoader {
        return this.#EntityCategoryLoader ??= require('../core/entityCategory/EntityCategory.loader').EntityCategoryLoader;
    }

    public get EntityCategories(): typeof EntityCategories {
        return this.#EntityCategories ??= require('../core/entityCategory/EntityCategories').EntityCategories;
    }

    //endregion -------------------- "Entity category" getter methods --------------------
    //region -------------------- Theme getter methods --------------------

    public get ThemeLoader(): typeof ThemeLoader {
        return this.#ThemeLoader ??= require('../core/theme/Theme.loader').ThemeLoader;
    }

    public get Themes(): typeof Themes {
        return this.#Themes ??= require('../core/theme/Themes').Themes;
    }

    public get NightEffects(): typeof NightEffects {
        return this.#NightEffects ??= require('../core/nightEffect/NightEffects').NightEffects;
    }

    //endregion -------------------- Theme getter methods --------------------
    //region -------------------- Time getter methods --------------------

    public get Times(): typeof Times {
        return this.#Times ??= require('../core/time/Times').Times;
    }

    //endregion -------------------- Theme getter methods --------------------
    //region -------------------- "Game reference" getter methods --------------------

    public get GameReferences(): typeof GameReferences {
        return this.#GameReferences ??= require('../core/gameReference/GameReferences').GameReferences;
    }

    get GameReferenceLoader(): typeof GameReferenceLoader {
        return this.#GameReferenceLoader ??= require('../core/gameReference/GameReference.loader').GameReferenceLoader;
    }

    //endregion -------------------- "Game reference" getter methods --------------------
    //region -------------------- "Game style" getter methods --------------------

    public get GameStyleLoader(): typeof GameStyleLoader {
        return this.#GameStyleLoader ??= require('../core/gameStyle/GameStyle.loader').GameStyleLoader;
    }

    public get GameStyles(): typeof GameStyles {
        return this.#GameStyles ??= require('../core/gameStyle/GameStyles').GameStyles;
    }

    //endregion -------------------- Game getter methods --------------------
    //region -------------------- "Entity behaviour" getter methods --------------------

    public get EntityBehaviourLoader(): typeof EntityBehaviourLoader {
        return this.#EntityBehaviourLoader ??= require('../core/behaviour/EntityBehaviour.loader').EntityBehaviourLoader;
    }

    public get EntityBehaviours(): typeof EntityBehaviours {
        return this.#EntityBehaviours ??= require('../core/behaviour/EntityBehaviours').EntityBehaviours;
    }

    //endregion -------------------- "Entity behaviour" getter methods --------------------
    //region -------------------- "Sound effect" getter methods --------------------

    public get SoundEffectLoader(): typeof SoundEffectLoader {
        return this.#SoundEffectLoader ??= require('../core/soundEffect/SoundEffect.loader').SoundEffectLoader;
    }

    public get SoundEffects(): typeof SoundEffects {
        return this.#SoundEffects ??= require('../core/soundEffect/SoundEffects').SoundEffects;
    }


    public get SoundEffectCategoryLoader(): typeof SoundEffectCategoryLoader {
        return this.#SoundEffectCategoryLoader ??= require('../core/soundEffectCategory/SoundEffectCategory.loader').SoundEffectCategoryLoader;
    }

    public get SoundEffectCategories(): typeof SoundEffectCategories {
        return this.#SoundEffectCategories ??= require('../core/soundEffectCategory/SoundEffectCategories').SoundEffectCategories;
    }

    //endregion -------------------- "Sound effect" getter methods --------------------
    //region -------------------- "Mystery Mushroom" getter methods --------------------

    public get MysteryMushroomLoader(): typeof MysteryMushroomLoader {
        return this.#MysteryMushroomLoader ??= require('../core/mysteryMushroom/MysteryMushroom.loader').MysteryMushroomLoader;
    }

    public get MysteryMushrooms(): typeof MysteryMushrooms {
        return this.#MysteryMushrooms ??= require('../core/mysteryMushroom/MysteryMushrooms').MysteryMushrooms;
    }

    //endregion -------------------- "Mystery Mushroom" getter methods --------------------
    //region -------------------- "Mii costume" getter methods --------------------

    public get MiiCostumeLoader(): typeof MiiCostumeLoader {
        return this.#MiiCostumeLoader ??= require('../core/miiCostume/MiiCostume.loader').MiiCostumeLoader;
    }

    public get MiiCostumes(): typeof MiiCostumes {
        return this.#MiiCostumes ??= require('../core/miiCostume/MiiCostumes').MiiCostumes;
    }

    public get MiiCostumeCategoryLoader(): typeof MiiCostumeCategoryLoader {
        return this.#MiiCostumeCategoryLoader ??= require('../core/miiCostumeCategory/MiiCostumeCategory.loader').MiiCostumeCategoryLoader;
    }

    public get MiiCostumeCategories(): typeof MiiCostumeCategories {
        return this.#MiiCostumeCategories ??= require('../core/miiCostumeCategory/MiiCostumeCategories').MiiCostumeCategories;
    }

    //endregion -------------------- "Mii costume" getter methods --------------------
    //region -------------------- "Official notification" getter methods --------------------

    get OfficialNotifications(): typeof OfficialNotifications {
        return this.#OfficialNotifications ??= require('../core/officialNotification/OfficialNotifications').OfficialNotifications;
    }

    //endregion -------------------- "Official notification" getter methods --------------------
    //region -------------------- "Course tag" fields --------------------

    public get CourseTags(): typeof CourseTags {
        return this.#CourseTags ??= require('../core/courseTag/CourseTags').CourseTags;
    }

    public get CourseTagLoader(): typeof CourseTagLoader {
        return this.#CourseTagLoader ??= require('../core/courseTag/CourseTag.loader').CourseTagLoader;
    }

    //endregion -------------------- "Course tag" fields --------------------
    //region -------------------- "Predefined message" fields --------------------

    public get PredefinedMessages(): typeof PredefinedMessages {
        return this.#PredefinedMessages ??= require('../core/predefinedMessage/PredefinedMessages').PredefinedMessages;
    }

    public get PredefinedMessageLoader(): typeof PredefinedMessageLoader {
        return this.#PredefinedMessageLoader ??= require('../core/predefinedMessage/PredefinedMessage.loader').PredefinedMessageLoader;
    }

    //endregion -------------------- "Predefined message" fields --------------------
    //region -------------------- "Instrument" getter methods --------------------

    public get Instruments(): typeof Instruments {
        return this.#Instruments ??= require('../core/instrument/Instruments').Instruments;
    }

    public get InstrumentLoader(): typeof InstrumentLoader {
        return this.#InstrumentLoader ??= require('../core/instrument/Instrument.loader').InstrumentLoader;
    }

    //endregion -------------------- "Instrument" getter methods --------------------
    //region -------------------- "Version" getter methods --------------------

    public get Versions(): typeof Versions {
        return this.#Versions ??= require('../core/version/Versions').Versions;
    }

    //endregion -------------------- "Version" getter methods --------------------
    //region -------------------- Other getter methods --------------------

    public get ClassThatIsAvailableFromTheStartContainer(): typeof ClassThatIsAvailableFromTheStartContainer {
        return this.#ClassThatIsAvailableFromTheStartContainer ??= require('../core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container').ClassThatIsAvailableFromTheStartContainer;
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
export const Import = DynamicImporter.get;
