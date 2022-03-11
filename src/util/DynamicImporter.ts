import type {BasicImageContainer}                       from '../core/mysteryMushroom/image/BasicImage.container';
import type {ClassThatIsAvailableFromTheStartContainer} from '../core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container';
import type {ClearConditionImageBuilder}                from '../core/entity/images/clearCondition/ClearConditionImage.builder';
import type {ClearConditionImageFactory}                from '../core/entity/images/clearCondition/ClearConditionImage.factory';
import type {EditorImageBuilder}                        from '../core/entity/images/editor/EditorImage.builder';
import type {EditorImageFactory}                        from '../core/entity/images/editor/EditorImage.factory';
import type {EditorVoices}                              from '../core/editorVoice/EditorVoices';
import type {EntityBehaviourLoader}                     from '../core/behaviour/EntityBehaviour.loader';
import type {EntityBehaviours}                          from '../core/behaviour/EntityBehaviours';
import type {EntityCategoryLoader}                      from '../core/entityCategory/EntityCategory.loader';
import type {EntityCategories}                          from '../core/entityCategory/EntityCategories';
import type {EntityLimitAmountContainer}                from '../core/entityLimit/properties/EntityLimitAmount.container';
import type {EntityLimitLoader}                         from '../core/entityLimit/EntityLimit.loader';
import type {EntityLimits}                              from '../core/entityLimit/EntityLimits';
import type {EntityLimitTypes}                          from '../core/entityLimit/EntityLimitTypes';
import type {EntityLoader}                              from '../core/entity/Entity.loader';
import type {Entities}                                  from '../core/entity/Entities';
import type {EmptyEditorVoiceSound}                     from '../core/editorVoice/EmptyEditorVoiceSound';
import type {EmptyEntity}                               from '../core/entity/EmptyEntity';
import type {EmptyEntityLimit}                          from '../core/entityLimit/EmptyEntityLimit';
import type {EmptyEntityLimitAmount}                    from '../core/entityLimit/properties/EmptyEntityLimitAmount';
import type {GameReferenceLoader}                       from '../core/gameReference/GameReference.loader';
import type {GameReferences}                            from '../core/gameReference/GameReferences';
import type {GameStyleLoader}                           from '../core/gameStyle/GameStyle.loader';
import type {GameStyles}                                from '../core/gameStyle/GameStyles';
import type {ImageWithJapaneseContainer}                from '../core/mysteryMushroom/image/ImageWithJapanese.container';
import type {ImageWithLeftVariationContainer}           from '../core/mysteryMushroom/image/ImageWithLeftVariation.container';
import type {ImageWithUnderwaterVariationContainer}     from '../core/mysteryMushroom/image/ImageWithUnderwaterVariation.container';
import type {InGameImage_SMM1Builder}                   from '../core/entity/images/inGame/InGameImage_SMM1.builder';
import type {InGameImageFactory}                        from '../core/entity/images/inGame/InGameImage.factory';
import type {LimitPropertyContainer}                    from '../core/entity/properties/limit/LimitProperty.container';
import type {MiiCostumeCategories}                      from '../core/miiCostumeCategory/MiiCostumeCategories';
import type {MiiCostumeCategoryLoader}                  from '../core/miiCostumeCategory/MiiCostumeCategory.loader';
import type {MiiCostumeLoader}                          from '../core/miiCostume/MiiCostume.loader';
import type {MiiCostumes}                               from '../core/miiCostume/MiiCostumes';
import type {MysteryMushroomLoader}                     from '../core/mysteryMushroom/MysteryMushroom.loader';
import type {MysteryMushrooms}                          from '../core/mysteryMushroom/MysteryMushrooms';
import type {NightEffects}                              from '../core/theme/NightEffects';
import type {NoImage}                                   from '../core/mysteryMushroom/image/NoImage';
import type {NoSound}                                   from '../core/mysteryMushroom/sound/NoSound';
import type {SoundContainer}                            from '../core/mysteryMushroom/sound/Sound.container';
import type {SoundEffectCategories}                     from '../core/soundEffectCategory/SoundEffectCategories';
import type {SoundEffectCategoryLoader}                 from '../core/soundEffectCategory/SoundEffectCategory.loader';
import type {SoundEffectLoader}                         from '../core/soundEffect/SoundEffect.loader';
import type {SoundEffects}                              from '../core/soundEffect/SoundEffects';
import type {ThemePropertyContainer}                    from '../core/entity/properties/ThemeProperty.container';
import type {ThemeLoader}                               from '../core/theme/Theme.loader';
import type {Themes}                                    from '../core/theme/Themes';
import type {TimePropertyContainer}                     from '../core/entity/properties/TimeProperty.container';
import type {Times}                                     from '../core/time/Times';
import type {UnusedImage_BigMushroomBuilder}            from '../core/entity/images/unused/UnusedImage_BigMushroom.builder';
import type {UnusedImage_RegularBuilder}                from '../core/entity/images/unused/UnusedImage_Regular.builder';
import type {UnusedImageFactory}                        from '../core/entity/images/unused/UnusedImage.factory';
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

    //region -------------------- Entity attributes --------------------

    #EntityLoader?: typeof EntityLoader;
    #Entities?: typeof Entities;
    #EmptyEntity?: typeof EmptyEntity;

    #ClearConditionImageBuilder?: typeof ClearConditionImageBuilder;
    #ClearConditionImageFactory?: typeof ClearConditionImageFactory;
    #EditorImageBuilder?: typeof EditorImageBuilder;
    #EditorImageFactory?: typeof EditorImageFactory;
    #EmptyEditorVoiceSound?: typeof EmptyEditorVoiceSound;
    #InGameImage_SMM1Builder?: typeof InGameImage_SMM1Builder;
    #InGameImageFactory?: typeof InGameImageFactory;
    #UnusedImage_BigMushroomBuilder?: typeof UnusedImage_BigMushroomBuilder;
    #UnusedImage_RegularBuilder?: typeof UnusedImage_RegularBuilder;
    #UnusedImageFactory?: typeof UnusedImageFactory;

    #LimitPropertyContainer?: typeof LimitPropertyContainer;
    #ThemePropertyContainer?: typeof ThemePropertyContainer;
    #TimePropertyContainer?: typeof TimePropertyContainer;

    #EditorVoices?: typeof EditorVoices;

    //endregion -------------------- Entity attributes --------------------
    //region -------------------- "Entity limit" attributes --------------------

    #EntityLimitLoader?: typeof EntityLimitLoader;
    #EntityLimits?: typeof EntityLimits;
    #EmptyEntityLimit?: typeof EmptyEntityLimit;
    #EmptyEntityLimitAmount?: typeof EmptyEntityLimitAmount;
    #EntityLimitAmountContainer?: typeof EntityLimitAmountContainer;
    #EntityLimitTypes?: typeof EntityLimitTypes;

    //endregion -------------------- "Entity limit" attributes --------------------
    //region -------------------- "Entity category" attributes --------------------

    #EntityCategoryLoader?: typeof EntityCategoryLoader;
    #EntityCategories?: typeof EntityCategories;

    //endregion -------------------- "Entity category" attributes --------------------
    //region -------------------- Theme attributes --------------------

    #ThemeLoader?: typeof ThemeLoader;
    #Themes?: typeof Themes;

    #NightEffects?: typeof NightEffects;

    //endregion -------------------- Theme attributes --------------------
    //region -------------------- Time attributes --------------------

    #Times?: typeof Times;

    //endregion -------------------- Time attributes --------------------
    //region -------------------- "Game reference" attributes --------------------

    #GameReferenceLoader?: typeof GameReferenceLoader;
    #GameReferences?: typeof GameReferences;

    //endregion -------------------- "Game reference" attributes --------------------
    //region -------------------- "Game style" attributes --------------------

    #GameStyleLoader?: typeof GameStyleLoader;
    #GameStyles?: typeof GameStyles;
    //endregion -------------------- "Game style" attributes --------------------
    //region -------------------- "Entity behaviour" attributes --------------------

    #EntityBehaviourLoader?: typeof EntityBehaviourLoader;
    #EntityBehaviours?: typeof EntityBehaviours;

    //endregion -------------------- "Entity behaviour" attributes --------------------
    //region -------------------- "Sound effect" attributes --------------------

    #SoundEffectLoader?: typeof SoundEffectLoader;
    #SoundEffects?: typeof SoundEffects;
    #SoundEffectCategoryLoader?: typeof SoundEffectCategoryLoader;
    #SoundEffectCategories?: typeof SoundEffectCategories;

    //endregion -------------------- "Sound effect" attributes --------------------
    //region -------------------- "Mystery Mushroom" attributes --------------------

    #MysteryMushroomLoader?: typeof MysteryMushroomLoader;
    #MysteryMushrooms?: typeof MysteryMushrooms;

    #NoImage?: typeof NoImage;
    #BasicImageContainer?: typeof BasicImageContainer;
    #ImageWithUnderwaterVariationContainer?: typeof ImageWithUnderwaterVariationContainer;
    #ImageWithLeftVariationContainer?: typeof ImageWithLeftVariationContainer;
    #ImageWithJapaneseContainer?: typeof ImageWithJapaneseContainer;

    #NoSound?: typeof NoSound;
    #SoundContainer?: typeof SoundContainer;

    //endregion -------------------- "Sound effect" attributes --------------------
    //region -------------------- "Mii costume" attributes --------------------

    #MiiCostumeLoader?: typeof MiiCostumeLoader;
    #MiiCostumes?: typeof MiiCostumes;

    #MiiCostumeCategoryLoader?: typeof MiiCostumeCategoryLoader;
    #MiiCostumeCategories?: typeof MiiCostumeCategories;

    //endregion -------------------- "Mii costume" attributes --------------------
    //region -------------------- Version attributes --------------------

    #Versions?: typeof Versions;

    //endregion -------------------- Version attributes --------------------
    //region -------------------- Other attributes --------------------

    #ClassThatIsAvailableFromTheStartContainer?: typeof ClassThatIsAvailableFromTheStartContainer;

    //endregion -------------------- Other attributes --------------------

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Entity getter methods --------------------

    public get EntityLoader(): typeof EntityLoader {
        return this.#EntityLoader ??= require('../core/entity/Entity.loader').EntityLoader;
    }

    public get Entities(): typeof Entities {
        return this.#Entities ??= require('../core/entity/Entities').Entities;
    }

    public get EmptyEntity(): typeof EmptyEntity {
        return this.#EmptyEntity ??= require('../core/entity/EmptyEntity').EmptyEntity;
    }


    public get ClearConditionImageBuilder(): typeof ClearConditionImageBuilder {
        return this.#ClearConditionImageBuilder ??= require('../core/entity/images/clearCondition/ClearConditionImage.builder').ClearConditionImageBuilder;
    }

    public get ClearConditionImageFactory(): typeof ClearConditionImageFactory {
        return this.#ClearConditionImageFactory ??= require('../core/entity/images/clearCondition/ClearConditionImage.factory').ClearConditionImageFactory;
    }

    public get EditorImageBuilder(): typeof EditorImageBuilder {
        return this.#EditorImageBuilder ??= require('../core/entity/images/editor/EditorImage.builder').EditorImageBuilder;
    }

    public get EditorImageFactory(): typeof EditorImageFactory {
        return this.#EditorImageFactory ??= require('../core/entity/images/editor/EditorImage.factory').EditorImageFactory;
    }

    public get EmptyEditorVoiceSound(): typeof EmptyEditorVoiceSound {
        return this.#EmptyEditorVoiceSound ??= require('../core/editorVoice/EmptyEditorVoiceSound').EmptyEditorVoiceSound;
    }

    public get InGameImage_SMM1Builder(): typeof InGameImage_SMM1Builder {
        return this.#InGameImage_SMM1Builder ??= require('../core/entity/images/inGame/InGameImage_SMM1.builder').InGameImage_SMM1Builder;
    }

    public get InGameImageFactory(): typeof InGameImageFactory {
        return this.#InGameImageFactory ??= require('../core/entity/images/inGame/InGameImage.factory').InGameImageFactory;
    }

    public get UnusedImage_BigMushroomBuilder(): typeof UnusedImage_BigMushroomBuilder {
        return this.#UnusedImage_BigMushroomBuilder ??= require('../core/entity/images/unused/UnusedImage_BigMushroom.builder').UnusedImage_BigMushroomBuilder;
    }

    public get UnusedImage_RegularBuilder(): typeof UnusedImage_RegularBuilder {
        return this.#UnusedImage_RegularBuilder ??= require('../core/entity/images/unused/UnusedImage_Regular.builder').UnusedImage_RegularBuilder;
    }

    public get UnusedImageFactory(): typeof UnusedImageFactory {
        return this.#UnusedImageFactory ??= require('../core/entity/images/unused/UnusedImage.factory').UnusedImageFactory;
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


    public get EditorVoices(): typeof EditorVoices {
        return this.#EditorVoices ??= require('../core/editorVoice/EditorVoices').EditorVoices;
    }

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- "Entity limit" getter methods --------------------

    public get EntityLimitLoader(): typeof EntityLimitLoader {
        return this.#EntityLimitLoader ??= require('../core/entityLimit/EntityLimit.loader').EntityLimitLoader;
    }

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
        return this.#NightEffects ??= require('../core/theme/NightEffects').NightEffects;
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

    public get NoImage(): typeof NoImage {
        return this.#NoImage ??= require('../core/mysteryMushroom/image/NoImage').NoImage;
    }

    public get BasicImageContainer(): typeof BasicImageContainer {
        return this.#BasicImageContainer ??= require('../core/mysteryMushroom/image/BasicImage.container').BasicImageContainer;
    }

    public get ImageWithUnderwaterVariationContainer(): typeof ImageWithUnderwaterVariationContainer {
        return this.#ImageWithUnderwaterVariationContainer ??= require('../core/mysteryMushroom/image/ImageWithUnderwaterVariation.container').ImageWithUnderwaterVariationContainer;
    }

    public get ImageWithLeftVariationContainer(): typeof ImageWithLeftVariationContainer {
        return this.#ImageWithLeftVariationContainer ??= require('../core/mysteryMushroom/image/ImageWithLeftVariation.container').ImageWithLeftVariationContainer;
    }

    public get ImageWithJapaneseContainer(): typeof ImageWithJapaneseContainer {
        return this.#ImageWithJapaneseContainer ??= require('../core/mysteryMushroom/image/ImageWithJapanese.container').ImageWithJapaneseContainer;
    }

    public get NoSound(): typeof NoSound {
        return this.#NoSound ??= require('../core/mysteryMushroom/sound/NoSound').NoSound;
    }

    public get SoundContainer(): typeof SoundContainer {
        return this.#SoundContainer ??= require('../core/mysteryMushroom/sound/Sound.container').SoundContainer;
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
