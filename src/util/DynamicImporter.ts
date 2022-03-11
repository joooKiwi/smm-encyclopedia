import type {ClassThatIsAvailableFromTheStartContainer} from '../core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container';
import type {EntityBehaviours}                          from '../core/behaviour/EntityBehaviours';
import type {EntityCategories}                          from '../core/entityCategory/EntityCategories';
import type {EntityLimitAmountContainer}                from '../core/entityLimit/properties/EntityLimitAmount.container';
import type {EntityLimits}                              from '../core/entityLimit/EntityLimits';
import type {EntityLimitTypes}                          from '../core/entityLimit/EntityLimitTypes';
import type {Entities}                                  from '../core/entity/Entities';
import type {EmptyEntity}                               from '../core/entity/EmptyEntity';
import type {EmptyEntityLimit}                          from '../core/entityLimit/EmptyEntityLimit';
import type {EmptyEntityLimitAmount}                    from '../core/entityLimit/properties/EmptyEntityLimitAmount';
import type {GameReferences}                            from '../core/gameReference/GameReferences';
import type {Games}                                     from '../core/game/Games';
import type {GameStyles}                                from '../core/gameStyle/GameStyles';
import type {LimitPropertyContainer}                    from '../core/entity/properties/limit/LimitProperty.container';
import type {MiiCostumeCategories}                      from '../core/miiCostumeCategory/MiiCostumeCategories';
import type {MiiCostumes}                               from '../core/miiCostume/MiiCostumes';
import type {MysteryMushrooms}                          from '../core/mysteryMushroom/MysteryMushrooms';
import type {NightEffects}                              from '../core/theme/NightEffects';
import type {SoundEffectCategories}                     from '../core/soundEffectCategory/SoundEffectCategories';
import type {SoundEffects}                              from '../core/soundEffect/SoundEffects';
import type {ThemePropertyContainer}                    from '../core/entity/properties/ThemeProperty.container';
import type {Themes}                                    from '../core/theme/Themes';
import type {TimePropertyContainer}                     from '../core/entity/properties/TimeProperty.container';
import type {Times}                                     from '../core/time/Times';
import type {Versions}                                  from '../core/version/Versions';

/**
 * <p>
 * A class that has for purpose to dynamically import some class
 * that have some heavy dependencies or some recursive dependencies.
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

    //region -------------------- Attributes --------------------

    #Entities?: typeof Entities;
    #EmptyEntity?: typeof EmptyEntity;
    #LimitPropertyContainer?: typeof LimitPropertyContainer;
    #ThemePropertyContainer?: typeof ThemePropertyContainer;
    #TimePropertyContainer?: typeof TimePropertyContainer;

    #EntityLimits?: typeof EntityLimits;
    #EmptyEntityLimit?: typeof EmptyEntityLimit;
    #EmptyEntityLimitAmount?: typeof EmptyEntityLimitAmount;
    #EntityLimitAmountContainer?: typeof EntityLimitAmountContainer;
    #EntityLimitTypes?: typeof EntityLimitTypes;

    #EntityCategories?: typeof EntityCategories;

    #Themes?: typeof Themes;
    #NightEffects?: typeof NightEffects;

    #Times?: typeof Times;

    #GameReferences?: typeof GameReferences;
    #GameStyles?: typeof GameStyles;
    #Games?: typeof Games;

    #EntityBehaviours?: typeof EntityBehaviours;

    #SoundEffects?: typeof SoundEffects;
    #SoundEffectCategories?: typeof SoundEffectCategories;

    #MysteryMushrooms?: typeof MysteryMushrooms;

    #MiiCostumeCategories?: typeof MiiCostumeCategories;
    #MiiCostumes?: typeof MiiCostumes;

    #Versions?: typeof Versions;

    #ClassThatIsAvailableFromTheStartContainer?: typeof ClassThatIsAvailableFromTheStartContainer;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Entity getter methods --------------------

    public get Entities(): typeof Entities {
        return this.#Entities ??= require('../core/entity/Entities').Entities;
    }

    public get EmptyEntity(): typeof EmptyEntity {
        return this.#EmptyEntity ??= require('../core/entity/EmptyEntity').EmptyEntity;
    }

    public get LimitPropertyContainer(): typeof LimitPropertyContainer {
        return this.#LimitPropertyContainer ??= require('../core/entity/properties/limit/LimitProperty.container').LimitPropertyContainer;
    }

    public get ThemePropertyContainer(): typeof ThemePropertyContainer {
        return this.#ThemePropertyContainer ??= require('../core/entity/properties/ThemeProperty.container').ThemePropertyContainer;
    }

    public get TimePropertyContainer(): typeof TimePropertyContainer {
        return this.#TimePropertyContainer ??= require('../core/entity/properties/TimeProperty.container').TimePropertyContainer;
    }

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- "Entity limit" getter methods --------------------

    public get EntityLimits(): typeof EntityLimits {
        return this.#EntityLimits ??= require('../core/entityLimit/EntityLimits').EntityLimits;
    }

    public get EmptyEntityLimit(): typeof EmptyEntityLimit {
        return this.#EmptyEntityLimit ??= require('../core/entityLimit/EmptyEntityLimit').EmptyEntityLimit;
    }

    public get EmptyEntityLimitAmount(): typeof EmptyEntityLimitAmount {
        return this.#EmptyEntityLimitAmount ??= require('../core/entityLimit/properties/EmptyEntityLimitAmount').EmptyEntityLimitAmount;
    }

    public get EntityLimitAmountContainer(): typeof EntityLimitAmountContainer {
        return this.#EntityLimitAmountContainer ??= require('../core/entityLimit/properties/EntityLimitAmount.container').EntityLimitAmountContainer;
    }

    public get EntityLimitTypes(): typeof EntityLimitTypes {
        return this.#EntityLimitTypes ??= require('../core/entityLimit/EntityLimitTypes').EntityLimitTypes;
    }

    //endregion -------------------- "Entity limit" getter methods --------------------
    //region -------------------- "Entity category" getter methods --------------------

    public get EntityCategories(): typeof EntityCategories {
        return this.#EntityCategories ??= require('../core/entityCategory/EntityCategories').EntityCategories;
    }

    //endregion -------------------- "Entity category" getter methods --------------------
    //region -------------------- Theme getter methods --------------------

    public get Themes(): typeof Themes {
        return this.#Themes ??= require('../core/theme/Themes').Themes;
    }

    public get NightEffects(): typeof NightEffects {
        return this.#NightEffects ??= require('../core/theme/NightEffects').NightEffects;
    }

    //endregion -------------------- Theme getter methods --------------------
    //region -------------------- Time getter methods --------------------

    public get Times(): typeof Times {
        return this.#Times ??= require('../core/time/Times').Times;
    }

    //endregion -------------------- Theme getter methods --------------------
    //region -------------------- Game getter methods --------------------

    public get GameReferences(): typeof GameReferences {
        return this.#GameReferences ??= require('../core/gameReference/GameReferences').GameReferences;
    }

    public get GameStyles(): typeof GameStyles {
        return this.#GameStyles ??= require('../core/gameStyle/GameStyles').GameStyles;
    }

    /**
     * @deprecated
     * @constructor
     */
    public get Games(): typeof Games {
        return this.#Games ??= require('../core/game/Games').Games;
    }

    //endregion -------------------- Game getter methods --------------------
    //region -------------------- "Entity behaviour" getter methods --------------------

    public get EntityBehaviours(): typeof EntityBehaviours {
        return this.#EntityBehaviours ??= require('../core/behaviour/EntityBehaviours').EntityBehaviours;
    }

    //endregion -------------------- "Entity behaviour" getter methods --------------------
    //region -------------------- "Sound effect" getter methods --------------------

    public get SoundEffects(): typeof SoundEffects {
        return this.#SoundEffects ??= require('../core/soundEffect/SoundEffects').SoundEffects;
    }

    public get SoundEffectCategories(): typeof SoundEffectCategories {
        return this.#SoundEffectCategories ??= require('../core/soundEffectCategory/SoundEffectCategories').SoundEffectCategories;
    }

    //endregion -------------------- "Sound effect" getter methods --------------------
    //region -------------------- "Mystery Mushroom" getter methods --------------------

    public get MysteryMushrooms(): typeof MysteryMushrooms {
        return this.#MysteryMushrooms ??= require('../core/mysteryMushroom/MysteryMushrooms').MysteryMushrooms;
    }

    //endregion -------------------- "Mystery Mushroom" getter methods --------------------
    //region -------------------- "Mii costume" getter methods --------------------

    public get MiiCostumeCategories(): typeof MiiCostumeCategories {
        return this.#MiiCostumeCategories ??= require('../core/miiCostumeCategory/MiiCostumeCategories').MiiCostumeCategories;
    }

    public get MiiCostumes(): typeof MiiCostumes {
        return this.#MiiCostumes ??= require('../core/miiCostume/MiiCostumes').MiiCostumes;
    }

    //endregion -------------------- "Mii costume" getter methods --------------------
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
