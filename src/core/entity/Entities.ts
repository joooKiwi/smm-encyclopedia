import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                        from 'core/ClassWithEnglishName'
import type {ClassWithReference}                          from 'core/ClassWithReference'
import type {ClassWithNullableEditorVoiceSoundFileHolder} from 'core/editorVoice/ClassWithEditorVoiceSoundFileHolder'
import type {EditorVoiceSound}                            from 'core/editorVoice/sound/EditorVoiceSound'
import type {Names, Ordinals, PossibleEnglishName}        from 'core/entity/Entities.types'
import type {Entity}                                      from 'core/entity/Entity'
import type {ClearConditionImage}                         from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}                                 from 'core/entity/images/editor/EditorImage'
import type {InGameImage}                                 from 'core/entity/images/inGame/InGameImage'
import type {UniqueImage}                                 from 'core/entity/images/unique/UniqueImage'
import type {UnusedImage_BigMushroom}                     from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                         from 'core/entity/images/unused/UnusedImage_Regular'
import type {CompanionEnumByNameWithValidationSingleton}  from 'util/enumerable/Singleton.types'

import {EditorVoices}                      from 'core/editorVoice/EditorVoices'
import {ClearConditionEntityImages}        from 'core/entity/ClearConditionEntityImages'
import type {EditorEntityImages}           from 'core/entity/EditorEntityImages'
import {EntityLoader}                      from 'core/entity/Entity.loader'
import {InGameEntityImages}                from 'core/entity/InGameEntityImages'
import {UnusedEntityImages}                from 'core/entity/UnusedEntityImages'
import {UnusedBigMushroomEntityImages}     from 'core/entity/UnusedBigMushroomEntityImages'
import * as ImageCreator                   from 'core/entity/images/imageCreator'
import {EmptyClearConditionImage}          from 'core/entity/images/clearCondition/EmptyClearConditionImage'
import {EmptyEditorImage}                  from 'core/entity/images/editor/EmptyEditorImage'
import {EmptyInGameImage}                  from 'core/entity/images/inGame/EmptyInGameImage'
import {EmptyUniqueImage}                  from 'core/entity/images/unique/EmptyUniqueImage'
import {StringContainer}                   from 'util/StringContainer'
import {Import}                            from 'util/DynamicImporter'
import {getValueByEnglishName}             from 'util/utilitiesMethods'
import {CompanionEnumByNameWithValidation} from 'util/enumerable/companion/CompanionEnumByNameWithValidation'

/**
 * @recursiveReference<{@link ClearConditionEntityImages}>
 * @recursiveReference<{@link EditorVoices}>
 * @recursiveReference<{@link EditorEntityImages}>
 * @recursiveReference<{@link EntityLoader}>
 * @recursiveReference<{@link InGameEntityImages}>
 * @recursiveReference<{@link UnusedEntityImages}>
 * @recursiveReference<{@link UnusedBigMushroomEntityImages}>
 */
export class Entities
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<Entity>,
        ClassWithNullableEditorVoiceSoundFileHolder {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new class Entities_Ground extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Ground',)
    public static readonly START_GROUND =                                  new Entities('Start Ground',)
    public static readonly GOAL_GROUND =                                   new Entities('Goal Ground',)

    public static readonly STEEP_SLOPE =                                   new class Entities_SteepSlope extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Steep Slope',)
    public static readonly GENTLE_SLOPE =                                  new class Entities_GentleSlope extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Gentle Slope',)

    public static readonly START_BLOCK =                                   new Entities('Start Block',)
    public static readonly OCCLUDE_BLOCK =                                 new Entities('Occlude Block',)

    public static readonly WATER =                                         new Entities('Water',)
    public static readonly LAVA =                                          new Entities('Lava',)
    public static readonly POISON =                                        new Entities('Poison',)

    public static readonly PIPE =                                          new class Entities_Pipe extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Pipe',)
    public static readonly CLEAR_PIPE =                                    new class Entities_ClearPipe extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Clear Pipe',)

    public static readonly SPIKE_TRAP =                                    new class Entities_SpikeTrap extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Spike Trap',)
    public static readonly JELECTRO =                                      new class Entities_Jelectro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmb3ImagesInEditor(this,)
        }

    }('Jelectro',)
    public static readonly SEA_URCHIN =                                    new class Entities_SeaUrchin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Sea Urchin',)
    public static readonly SPIKE_BLOCK =                                   new class Entities_SpikeBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Spike Block',)

    public static readonly MUSHROOM_PLATFORM =                             new class Entities_MushroomPlatform extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Mushroom Platform',)
    public static readonly SEMISOLID_PLATFORM =                            new class Entities_SemisolidPlatform extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Semisolid Platform',)
    public static readonly BRIDGE =                                        new class Entities_Bridge extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueBridgeImages(this,)
        }

    }('Bridge',)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new class Entities_BrickBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueBrickBlockImages(this,)
        }

    }('Brick Block',)
    public static readonly CRISTAL_BLOCK =                                 new class Entities_CristalBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueCristalBlockImages(this,)
        }

    }('Cristal Block',)
    public static readonly ROTATING_BLOCK =                                new class Entities_RotatingBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Rotating Block',)

    public static readonly HARD_BLOCK =                                    new class Entities_HardBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueHardBlockImages(this,)
        }

    }('Hard Block',)
    public static readonly ROCK_BLOCK =                                    new class Entities_RockBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Rock Block',)

    public static readonly QUESTION_MARK_BLOCK =                           new class Entities_QuestionMarkBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('? Block',)
    public static readonly HIDDEN_BLOCK =                                  new class Entities_HiddenBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Hidden Block',)
    public static readonly EMPTY_BLOCK =                                   new Entities('Empty Block',)

    public static readonly EXCLAMATION_MARK_BLOCK =                        new class Entities_ExclamationMarkBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('! Block',)

    public static readonly NOTE_BLOCK =                                    new class Entities_NoteBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Note Block',)
    public static readonly MUSIC_BLOCK =                                   new class Entities_MusicBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Music Block',)

    public static readonly DONUT_BLOCK =                                   new class Entities_DonutBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Donut Block',)

    public static readonly CLOUD_BLOCK =                                   new class Entities_CloudBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Cloud Block',)

    public static readonly ON_OFF_SWITCH =                                 new class Entities_OnOffBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('ON/OFF Switch',)
    public static readonly DOTTED_LINE_BLOCK =                             new class Entities_DottedLineBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Dotted-Line Block',)

    public static readonly P_BLOCK =                                       new class Entities_PBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('P Block',)

    public static readonly BLINKING_BLOCK =                                new class Entities_BlinkingBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Blinking Block',)

    public static readonly ICE_BLOCK =                                     new class Entities_IceBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Ice Block',)
    public static readonly ICICLE =                                        new class Entities_Icicle extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Icicle',)

    public static readonly COIN =                                          new class Entities_Coin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Coin',)
    public static readonly FROZEN_COIN =                                   new class Entities_FrozenCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Frozen Coin',)
    public static readonly TEN_COIN =                                      new class Entities_TenCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('10-Coin',)
    public static readonly THIRTY_COIN =                                   new class Entities_ThirtyCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('30-Coin',)
    public static readonly FIFTY_COIN =                                    new class Entities_FiftyCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('50-Coin',)
    public static readonly PINK_COIN =                                     new class Entities_PinkCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Pink Coin',)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new class Entities_SuperMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Super Mushroom',)

    public static readonly FIRE_FLOWER =                                   new class Entities_FireFlower extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Fire Flower',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',)

    public static readonly SUPERBALL_FLOWER =                              new class Entities_SuperballFlower extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

    }('Superball Flower',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new Entities('Superball thrown by a player',)

    public static readonly MYSTERY_MUSHROOM =                              new Entities('Mystery Mushroom',)
    public static readonly WEIRD_MUSHROOM =                                new Entities('Weird Mushroom',)

    public static readonly MASTER_SWORD =                                  new class Entities_MasterSword extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

    }('Master Sword',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new Entities('Bomb thrown by a Link',)
    public static readonly ARROW_THROWN_BY_A_LINK =                        new Entities('Arrow thrown by a Link',)

    public static readonly BIG_MUSHROOM =                                  new class Entities_BigMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

    }('Big Mushroom',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new Entities('Big Mushroom (classic)',)
    public static readonly BIG_MUSHROOM_MODERN =                           new Entities('Big Mushroom (modern)',)

    public static readonly SMB2_MUSHROOM =                                 new class Entities_SMB2Mushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

    }('SMB2 Mushroom',)

    public static readonly SUPER_LEAF =                                    new class Entities_SuperLeaf extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmb3ImagesInEditor(this,)
        }

    }('Super Leaf',)

    public static readonly FROG_SUIT =                                     new class Entities_FrogSuit extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmb3ImagesInEditor(this,)
        }

    }('Frog Suit',)

    public static readonly CAPE_FEATHER =                                  new class Entities_CapeFeather extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Cape Feather',)

    public static readonly POWER_BALLOON =                                 new class Entities_PowerBalloon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Power Balloon',)

    public static readonly PROPELLER_MUSHROOM =                            new class Entities_PropellerMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

    }('Propeller Mushroom',)

    public static readonly SUPER_ACORN =                                   new class Entities_SuperAcorn extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

    }('Super Acorn',)

    public static readonly SUPER_BELL =                                    new class Entities_SuperBell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Super Bell',)

    public static readonly SUPER_HAMMER =                                  new class Entities_SuperHammer extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Super Hammer',)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',)

    public static readonly BOOMERANG_FLOWER =                              new class Entities_BoomerangFlower extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Boomerang Flower',)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',)

    public static readonly CANNON_BOX =                                    new class Entities_CannonBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Cannon Box',)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',)

    public static readonly PROPELLER_BOX =                                 new class Entities_PropellerBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Propeller Box',)

    public static readonly GOOMBA_MASK =                                   new class Entities_GoombaMask extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Goomba Mask',)

    public static readonly BULLET_BILL_MASK =                              new class Entities_BulletBillMask extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Bullet Bill Mask',)

    public static readonly RED_POW_BOX =                                   new class Entities_RedPowBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Red POW Box',)

    public static readonly SUPER_STAR =                                    new class Entities_SuperStar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Super Star',)

    public static readonly ONE_UP_MUSHROOM =                               new class Entities_OneUpMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('1-Up Mushroom',)
    public static readonly ROTTEN_MUSHROOM =                               new class Entities_RottenMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Rotten Mushroom',)

    public static readonly SHOE_GOOMBA =                                   new class Entities_ShoeGoomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInEditor(this,)
        }

    }('Shoe Goomba',)
    public static readonly SHOE =                                          new class Entities_Shoe extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInClearCondition(this,)
        }

    }('Shoe',)
    public static readonly STILETTO_GOOMBA =                               new class Entities_StilettoGoomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInEditor(this,)
        }

    }('Stiletto Goomba',)
    public static readonly STILETTO =                                      new class Entities_Stiletto extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInInGame(this,)
        }

    }('Stiletto',)
    public static readonly YOSHI_EGG =                                     new class Entities_YoshiEgg extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwAndNsmbuImagesInEditor(this,)
        }

    }('Yoshi\'s Egg',)
    public static readonly YOSHI =                                         new Entities('Yoshi',)
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new Entities('Fire thrown by a Yoshi',)
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new Entities('Poison thrown by a Yoshi',)
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',)
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new Entities('Wrench thrown by a Yoshi',)
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',)
    public static readonly RED_YOSHI_EGG =                                 new class Entities_RedYoshiEgg extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwAndNsmbuImagesInEditor(this,)
        }

    }('Red Yoshi\'s Egg',)
    public static readonly RED_YOSHI =                                     new Entities('Red Yoshi',)
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new class Entities_Goomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Goomba',)
    public static readonly GALOOMBA =                                      new class Entities_Galoomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Galoomba',)
    public static readonly GOOMBRAT =                                      new class Entities_Goombrat extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Goombrat',)
    public static readonly GOOMBUD =                                       new class Entities_Goombud extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Goombud',)

    public static readonly GREEN_KOOPA_TROOPA =                            new class Entities_GreenKoopaTroopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Green Koopa Troopa',)
    public static readonly RED_KOOPA_TROOPA =                              new Entities('Red Koopa Troopa',)
    public static readonly GREEN_BEACH_KOOPA =                             new Entities('Green Beach Koopa',)
    public static readonly RED_BEACH_KOOPA =                               new Entities('Red Beach Koopa',)
    public static readonly GREEN_KOOPA_SHELL =                             new Entities('Green Koopa Shell',)
    public static readonly RED_KOOPA_SHELL =                               new Entities('Red Koopa Shell',)

    public static readonly DRY_BONES =                                     new class Entities_DryBones extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Dry Bones',)
    public static readonly PARABONES =                                     new Entities('Parabones',)
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',)
    public static readonly DRY_BONES_SHELL =                               new class Entities_DryBonesShell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Dry Bones Shell',)

    public static readonly BUZZY_BEETLE =                                  new class Entities_BuzzyBeetle extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Buzzy Beetle',)
    public static readonly PARA_BEETLE =                                   new Entities('Para-Beetle',)
    public static readonly BUZZY_SHELL =                                   new class Entities_BuzzyShell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Buzzy Shell',)

    public static readonly SPINY =                                         new class Entities_Spiny extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Spiny',)
    public static readonly WINGED_SPINY =                                  new Entities('Winged Spiny',)
    public static readonly WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny\'s projectile)',)
    public static readonly SPINY_EGG =                                     new Entities('Spiny Egg',)
    public static readonly SPINY_SHELL =                                   new class Entities_SpinyShell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Spiny Shell',)

    public static readonly SPIKE_TOP =                                     new class Entities_SpikeTop extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Spike Top',)
    public static readonly WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',)
    public static readonly FAST_SPIKE_TOP =                                new class Entities_FastSpikeTop extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Fast Spike Top',)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',)

    public static readonly SKIPSQUEAK =                                    new class Entities_Skipsqueak extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Skipsqueak',)
    public static readonly SPINY_SKIPSQUEAK =                              new class Entities_SpinySkipsqueak extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Spiny Skipsqueak',)

    public static readonly ANT_TROOPER =                                   new class Entities_AntTrooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Ant Trooper',)
    public static readonly HORNED_ANT_TROOPER =                            new class Entities_HornedAntTrooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Horned Ant Trooper',)

    public static readonly STINGBY =                                       new class Entities_Stingby extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Stingby',)

    public static readonly CHEEP_CHEEP =                                   new class Entities_CheepCheep extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Cheep Cheep',)
    public static readonly BLURPS =                                        new class Entities_Blurps extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Blurps',)
    public static readonly DEEP_CHEEP =                                    new class Entities_DeepCheep extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

    }('Deep Cheep',)
    public static readonly FISH_BONE =                                     new class Entities_FishBone extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Fish Bone',)

    public static readonly BLOOPER =                                       new class Entities_Blooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Blooper',)
    public static readonly BLOOPER_NANNY =                                 new class Entities_BlooperNanny extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Blooper Nanny',)
    public static readonly BABY_BLOOPER =                                  new class Entities_BabyBlooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInInGame(this,)
        }

    }('Baby Blooper',)

    public static readonly PORCUPUFFER =                                   new class Entities_Porcupuffer extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Porcupuffer',)

    public static readonly WIGGLER =                                       new class Entities_Wiggler extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Wiggler',)
    public static readonly ANGRY_WIGGLER =                                 new class Entities_AngryWiggler extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Angry Wiggler',)

    public static readonly PIRANHA_PLANT =                                 new class Entities_PiranhaPlant extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSmwImagesInEditor(this,)
        }

    }('Piranha Plant',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new class Entities_JumpingPiranhaPlant extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Jumping Piranha Plant',)
    public static readonly FIRE_PIRANHA_PLANT =                            new class Entities_FirePiranhaPlant extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

    }('Fire Piranha Plant',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',)
    public static readonly MUNCHER =                                       new class Entities_Muncher extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Muncher',)
    public static readonly PIRANHA_CREEPER =                               new class Entities_PiranhaCreeper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Piranha Creeper',)

    public static readonly CHAIN_CHOMP =                                   new class Entities_ChainChomp extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Chain Chomp',)
    public static readonly UNCHAINED_CHOMP =                               new class Entities_UnchainedChomp extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Unchained Chomp',)
    public static readonly CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp\'s Stump',)

    public static readonly SPIKE =                                         new class Entities_Spike extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Spike',)
    public static readonly SPIKE_BALL =                                    new class Entities_SpikeBall extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueSpikeBallImages(this,)
        }

    }('Spike Ball',)
    public static readonly SNOWBALL =                                      new class Entities_Snowball extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Snowball',)

    public static readonly LAKITU =                                        new class Entities_Lakitu extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Lakitu',)
    public static readonly LAKITU_CLOUD =                                  new class Entities_LakituCloud extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Lakitu\'s Cloud',)

    public static readonly BOO =                                           new class Entities_Boo extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Boo',)
    public static readonly STRETCH =                                       new Entities('Stretch',)
    public static readonly BOO_BUDDIES =                                   new class Entities_BooBuddies extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Boo Buddies',)
    public static readonly PEEPA =                                         new class Entities_Peepa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Peepa',)

    public static readonly BOB_OMB =                                       new class Entities_BobOmb extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Bob-omb',)
    public static readonly LIT_BOB_OMB =                                   new class Entities_LitBobOmb extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Lit Bob-omb',)

    public static readonly POKEY =                                         new class Entities_Pokey extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Pokey',)
    public static readonly SNOW_POKEY =                                    new Entities('Snow Pokey',)

    public static readonly THWOMP =                                        new class Entities_Thwomp extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Thwomp',)

    public static readonly MONTY_MOLE =                                    new class Entities_MontyMole extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Monty Mole',)
    public static readonly ROCKY_WRENCH =                                  new class Entities_RockyWrench extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Rocky Wrench',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',)

    public static readonly MAGIKOOPA =                                     new class Entities_Magikoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Magikoopa',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa\'s projectile)',)

    public static readonly HAMMER_BRO =                                    new class Entities_HammerBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Hammer Bro',)
    public static readonly SLEDGE_BRO =                                    new class Entities_SledgeBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Sledge Bro',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',)
    public static readonly FIRE_BRO =                                      new class Entities_FireBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Fire Bro',)
    public static readonly HEAVY_FIRE_BRO =                                new class Entities_HeavyFireBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Heavy Fire Bro',)
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',)

    public static readonly LAVA_BUBBLE =                                   new class Entities_LavaBubble extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Lava Bubble',)

    public static readonly MECHAKOOPA =                                    new class Entities_Mechakoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Mechakoopa',)
    public static readonly BLASTA_MECHAKOOPA =                             new class Entities_BlastaMechakoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Blasta Mechakoopa',)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa',)
    public static readonly ZAPPA_MECHAKOOPA =                              new class Entities_ZappaMechakoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Zappa Mechakoopa',)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',)

    public static readonly CHARVAARGH =                                    new class Entities_Charvaargh extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Charvaargh',)

    public static readonly BULLY =                                         new class Entities_Bully extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Bully',)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new class Entities_BillBlaster extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Bill Blaster',)
    public static readonly BULLET_BILL =                                   new Entities('Bullet Bill',)
    public static readonly BULL_EYE_BLASTER =                              new class Entities_BullEyeBlaster extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Bull\'s-Eye Blaster',)
    public static readonly BULL_EYE_BILL =                                 new Entities('Bull\'s-Eye Bill',)
    public static readonly CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',)

    public static readonly BANZAI_BILL =                                   new class Entities_BanzaiBill extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Banzai Bill',)
    public static readonly BULL_EYE_BANZAI =                               new class Entities_BullEyeBanzai extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Bull\'s-Eye Banzai',)
    public static readonly CAT_BANZAI_BILL =                               new class Entities_CatBanzaiBill extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Cat Banzai Bill',)

    public static readonly CANNON =                                        new class Entities_Cannon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Cannon',)
    public static readonly CANNONBALL =                                    new Entities('Cannonball',)
    public static readonly RED_CANNON =                                    new class Entities_RedCannon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Red Cannon',)
    public static readonly RED_CANNONBALL =                                new Entities('Red Cannonball',)

    public static readonly BURNER =                                        new class Entities_Burner extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Burner',)

    public static readonly FIRE_BAR =                                      new class Entities_FireBar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Fire Bar',)

    public static readonly SKEWER =                                        new class Entities_Skewer extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

    }('Skewer',)

    public static readonly KOOPA_CLOWN_CAR =                               new class Entities_KoopaClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotNsmbuAndSm3dwImagesInEditor(this,)
        }

    }('Koopa Clown Car',)
    public static readonly JUNIOR_CLOWN_CAR =                              new class Entities_JuniorClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

    }('Junior Clown Car',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new class Entities_FireKoopaClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotNsmbuAndSm3dwImagesInEditor(this,)
        }

    }('Fire Koopa Clown Car',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new class Entities_FireJuniorClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

    }('Fire Junior Clown Car',)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire [Koopa / Junior] Clown Car',)

    public static readonly KOOPA_TROOPA_CAR =                              new class Entities_KoopaTroopaCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Koopa Troopa Car',)
    public static readonly CAR =                                           new Entities('Car',)

    public static readonly GRINDER =                                       new class Entities_Grinder extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Grinder',)

    public static readonly ANGRY_SUN =                                     new class Entities_AngrySun extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Angry Sun',)
    public static readonly MOON =                                          new class Entities_Moon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Moon',)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new class Entities_Bowser extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Bowser',)
    public static readonly MEOWSER =                                       new class Entities_Meowser extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Meowser',)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',)

    public static readonly BOWSER_JR =                                     new class Entities_BowserJr extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Bowser Jr.',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',)

    public static readonly BOOM_BOOM =                                     new class Entities_BoomBoom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Boom Boom',)
    public static readonly POM_POM =                                       new class Entities_PomPom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Pom Pom',)
    public static readonly POM_POM_CLONE =                                 new Entities('Pom Pom\'s clone',)
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',)

    public static readonly LARRY =                                         new class Entities_Larry extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Larry',)
    public static readonly LARRY_WAND =                                    new Entities('Larry\'s Wand',)
    public static readonly LARRY_PROJECTILE =                              new Entities('(Larry\'s projectile)',)

    public static readonly IGGY =                                          new class Entities_Iggy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Iggy',)
    public static readonly IGGY_WAND =                                     new Entities('Iggy\'s Wand',)
    public static readonly IGGY_PROJECTILE =                               new Entities('(Iggy\'s projectile)',)

    public static readonly WENDY =                                         new class Entities_Wendy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Wendy',)
    public static readonly WENDY_WAND =                                    new Entities('Wendy\'s Wand',)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new Entities('Candy Ring thrown by a Wendy',)
    public static readonly WENDY_PROJECTILE =                              new Entities('(Wendy\'s projectile)',)// An only unused projectile //TODO add unused Wendy projectile (SMB, SMB3, SMW)

    public static readonly LEMMY =                                         new class Entities_Lemmy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Lemmy',)
    public static readonly LEMMY_WAND =                                    new Entities('Lemmy\'s Wand',)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new Entities('Magic Ball thrown by a Lemmy',)
    public static readonly LEMMY_PROJECTILE =                              new Entities('(Lemmy\'s projectile)',)// An only unused projectile //TODO add unused Lemmy projectile (SMB)

    public static readonly ROY =                                           new class Entities_Roy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Roy',)
    public static readonly ROY_WAND =                                      new Entities('Roy\'s Wand',)
    public static readonly ROY_PROJECTILE =                                new Entities('(Roy\'s projectile)',)

    public static readonly MORTON =                                        new class Entities_Morton extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Morton',)
    public static readonly MORTON_WAND =                                   new Entities('Morton\'s Wand',)
    public static readonly MORTON_THROWN_PROJECTILE =                      new Entities('(Morton\'s Thrown projectile)',)
    public static readonly MORTON_GROUND_PROJECTILE =                      new Entities('(Morton\'s Ground projectile)',)

    public static readonly LUDWIG =                                        new class Entities_Ludwig extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Ludwig',)
    public static readonly LUDWIG_WAND =                                   new Entities('Ludwig\'s Wand',)
    public static readonly LUDWIG_PROJECTILE =                             new Entities('(Ludwig\'s projectile)',)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new class Entities_Bumper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Bumper',)

    public static readonly SWINGING_CLAW =                                 new class Entities_SwingingClaw extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Swinging Claw',)

    public static readonly TWISTER =                                       new class Entities_Twister extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Twister',)

    public static readonly ONE_WAY_WALL =                                  new class Entities_OneWayWall extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('One-Way Wall',)

    public static readonly TRACK =                                         new class Entities_Track extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Track',)
    public static readonly TRACK_BLOCK =                                   new class Entities_TrackBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Track Block',)

    public static readonly VINE =                                          new class Entities_Vine extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Vine',)
    public static readonly TREE =                                          new class Entities_Tree extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueTreeImages(this,)
        }

    }('Tree',)

    public static readonly STARTING_ARROW =                                new Entities('Starting Arrow',)//A background entity
    public static readonly ARROW_SIGN =                                    new class Entities_ArrowSign extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Arrow Sign',)

    public static readonly CHECKPOINT_FLAG =                               new class Entities_CheckpointFlag extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Checkpoint Flag',)
    public static readonly GOAL_POLE =                                     new Entities('Goal Pole',)//An interactable partially solid & background entity
    public static readonly GOAL_WITH_CARDS =                               new Entities('Cards Roulette',)//An interactable background entity
    public static readonly GIANT_GATE =                                    new Entities('Giant Gate',)//An interactable background entity

    public static readonly CASTLE =                                        new Entities('Castle',)//A background entity
    public static readonly ENDING_CASTLE_DOOR =                            new Entities('Ending Castle Door',)//A background entity
    public static readonly AXE =                                           new Entities('Axe',)//An interactable partially solid & background entity

    public static readonly DASH_BLOCK =                                    new class Entities_DashBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Dash Block',)

    public static readonly SNAKE_BLOCK =                                   new class Entities_SnakeBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Snake Block',)
    public static readonly FAST_SNAKE_BLOCK =                              new class Entities_FastSnakeBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Fast Snake Block',)

    public static readonly CONVEYOR_BELT =                                 new class Entities_ConveyorBelt extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Conveyor Belt',)
    public static readonly FAST_CONVEYOR_BELT =                            new class Entities_FastConveyorBelt extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Fast Conveyor Belt',)

    public static readonly MUSHROOM_TRAMPOLINE =                           new class Entities_MushroomTrampoline extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Mushroom Trampoline',)
    public static readonly ON_OFF_TRAMPOLINE =                             new class Entities_OnOffTrampoline extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('ON/OFF Trampoline',)

    public static readonly LIFT =                                          new class Entities_List extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Lift',)
    public static readonly FLIMSY_LIFT =                                   new class Entities_FlimsyLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Flimsy Lift',)
    public static readonly CLOUD_LIFT =                                    new class Entities_CloudLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Cloud Lift',)

    public static readonly SEESAW =                                        new class Entities_Seesaw extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Seesaw',)

    public static readonly LAVA_LIFT =                                     new class Entities_LavaLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Lava Lift',)
    public static readonly FAST_LAVA_LIFT =                                new class Entities_FastLavaLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

    }('Fast Lava Lift',)

    public static readonly CRATE =                                         new class Entities_Crate extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Crate',)

    public static readonly KEY =                                           new class Entities_Key extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Key',)
    public static readonly CURSED_KEY =                                    new class Entities_CursedKey extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

    }('Cursed Key',)
    public static readonly PHANTO =                                        new Entities('Phanto',)

    public static readonly TRAMPOLINE =                                    new class Entities_Trampoline extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Trampoline',)
    public static readonly HOP_CHOPS =                                     new class Entities_HopChops extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Hop-Chops',)

    public static readonly POW_BLOCK =                                     new class Entities_PowBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('POW Block',)
    public static readonly RED_POW_BLOCK =                                 new class Entities_RedPowBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Red POW Block',)

    public static readonly P_SWITCH =                                      new class Entities_PSwitch extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('P Switch',)

    public static readonly STONE =                                         new Entities('Stone',)

    public static readonly WARP_DOOR =                                     new class Entities_WarpDoor extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Warp Door',)
    public static readonly P_WARP_DOOR =                                   new class Entities_PWarpDoor extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('P Warp Door',)
    public static readonly KEY_DOOR =                                      new class Entities_KeyDoor extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Key Door',)

    public static readonly WARP_BOX =                                      new class Entities_WarpBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Warp Box',)
    public static readonly WARP_BOX_WITH_KEY =                             new class Entities_WarpBoxWithKey extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

    }('Warp Box (With Key)',)

    public static readonly WING =                                          new class Entities_Wing extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Wing',)
    public static readonly PARACHUTE =                                     new class Entities_Parachute extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

    }('Parachute',)

    public static readonly TOAD =                                          new Entities('Toad',)
    public static readonly CAGED_TOADETTE =                                new Entities('Caged Toadette',)//A background entity

    public static readonly BUBBLE =                                        new Entities('Bubble',)//An interactable entity

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameWithValidationSingleton<Entities, typeof Entities> = class CompanionEnum_Entities
        extends CompanionEnumByNameWithValidation<Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Entities()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| Entities | string>,): Entities {
            return getValueByEnglishName(value, this,)
        }

        public override hasValueByName(value: Nullable<| Entities | string>,): boolean {
            if (value == null)
                return false
            if (value instanceof this.instance)
                return true
            return this.instance.everyEnglishNames.includes(value as never,)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Entity>
    static #everyEnglishNames?: readonly PossibleEnglishName[]

    #reference?: Entity
    readonly #englishNameContainer
    #uniqueImage?: UniqueImage
    #editorImage?: EditorImage
    #clearConditionImage?: ClearConditionImage
    #inGameImage?: InGameImage
    #unusedRegularImage?: UnusedImage_Regular
    #unusedBigMushroomImage?: UnusedImage_BigMushroom

    #editorVoiceSound?: NullOr<EditorVoiceSound>

    #editorVoiceReference?: NullOr<EditorVoices>
    #editorEntityImageReference?: EditorEntityImages
    #clearConditionEntityImageReference?: ClearConditionEntityImages
    #inGameEntityImageReference?: InGameEntityImages
    #unusedEntityImageReference?: UnusedEntityImages
    #unusedBigMushroomEntityImageReference?: UnusedBigMushroomEntityImages

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Getter methods (reference) --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Entity> {
        return this.#REFERENCE_MAP ??= EntityLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Entity {
        return this.#reference ??= Entities.REFERENCE_MAP.get(this.englishName)!
    }

    //endregion -------------------- Getter methods (reference) --------------------
    //region -------------------- Getter methods (english name) --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }

    //endregion -------------------- Getter methods (english name) --------------------
    //region -------------------- Getter methods (image) --------------------

    //region -------------------- unique image --------------------

    protected _createUniqueImage(): NullOr<UniqueImage> {
        return null
    }

    public get uniqueImage(): UniqueImage {
        if (this.#uniqueImage != null)
            return this.#uniqueImage

        const value = this._createUniqueImage()
        if (value != null)
            return this.#uniqueImage = value

        const editorImage = this.editorImage
        const clearConditionImage = this.clearConditionImage
        const inGameImage = this.inGameImage

        const isEmptyEditor = editorImage instanceof EmptyEditorImage
        const isEmptyClearCondition = clearConditionImage instanceof EmptyClearConditionImage
        const isEmptyInGame = inGameImage instanceof EmptyInGameImage
        if (isEmptyEditor && isEmptyClearCondition && isEmptyInGame)
            return this.#uniqueImage = EmptyUniqueImage.get

        if (!isEmptyEditor && isEmptyClearCondition && isEmptyInGame)
            return this.#uniqueImage = ImageCreator.uniqueImageFromEditor(this, editorImage, clearConditionImage, inGameImage,)
        if (isEmptyEditor && !isEmptyClearCondition && isEmptyInGame)
            return this.#uniqueImage = ImageCreator.uniqueImageFromClearCondition(this, editorImage, clearConditionImage, inGameImage,)

        if (isEmptyEditor && isEmptyClearCondition && !isEmptyInGame)
            return this.#uniqueImage = ImageCreator.uniqueImageFromInGame(this, editorImage, clearConditionImage, inGameImage,)

        console.error(`The unique image could not be determined for the "Entities.${this.name}". Please specify the type in the "Entities._createUniqueImage()".`,)
        return this.#uniqueImage = EmptyUniqueImage.get
    }

    //endregion -------------------- unique image --------------------
    //region -------------------- image --------------------

    public get editorImage(): EditorImage { return this.#editorImage ??= this.entityEditorImageReference.image }

    public get clearConditionImage(): ClearConditionImage { return this.#clearConditionImage ??= this.clearConditionEntityImageReference.image }

    public get inGameImage(): InGameImage { return this.#inGameImage ??= this.inGameEntityImageReference.image }

    public get unusedImage(): UnusedImage_Regular { return this.#unusedRegularImage ??= this.unusedEntityImageReference.image }

    public get unusedBigMushroomImage(): UnusedImage_BigMushroom { return this.#unusedBigMushroomImage ??= this.unusedBigMushroomEntityImageReference.image }

    //endregion -------------------- image --------------------

    //endregion -------------------- Getter methods (image) --------------------
    //region -------------------- Getter methods (sound) --------------------

    //region -------------------- editor sound --------------------

    public get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSound> {
        const value = this.#editorVoiceSound
        if (value !== undefined)
            return value
        return this.#editorVoiceSound = this.editorVoiceReference?.editorVoiceSoundFileHolder ?? null
    }

    //endregion -------------------- editor sound --------------------

    //endregion -------------------- Getter methods (sound) --------------------
    //region -------------------- Getter methods (linked reference) --------------------

    public get editorVoiceReference(): NullOr<EditorVoices> {
        const value = this.#editorVoiceReference
        if (value !== undefined)
            return value

        //@ts-ignore: This is only to verify if it exists by its name (it is faster than using the companion enum)
        const reference = EditorVoices[this.name] as UndefinedOr<EditorVoices>
        if (reference != null)
            return this.#editorVoiceReference = reference

        const companion = EditorVoices.CompanionEnum.get
        if (companion.hasReference(this,))
            return this.#editorVoiceReference = companion.getValueByEntity(this,)
        return this.#editorVoiceReference = null
    }

    public get entityEditorImageReference(): EditorEntityImages { return this.#editorEntityImageReference ??= Import.EditorEntityImages[this.name] }

    public get clearConditionEntityImageReference(): ClearConditionEntityImages { return this.#clearConditionEntityImageReference ??= ClearConditionEntityImages[this.name] }

    public get inGameEntityImageReference(): InGameEntityImages { return this.#inGameEntityImageReference ??= InGameEntityImages[this.name] }

    public get unusedEntityImageReference(): UnusedEntityImages { return this.#unusedEntityImageReference ??= UnusedEntityImages[this.name] }

    public get unusedBigMushroomEntityImageReference(): UnusedBigMushroomEntityImages { return this.#unusedBigMushroomEntityImageReference ??= UnusedBigMushroomEntityImages[this.name] }

    //endregion -------------------- Getter methods (linked reference) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.#everyEnglishNames ??= this.CompanionEnum.get.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Methods --------------------

}

// Entities.values.filter(it => it.uniqueImage !== EmptyUniqueImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, Array.from(it.uniqueImage.map.values(), it => it.map(it => it.name,),).flat(),),)
// Entities.values.filter(it => it.editorImage !== EmptyEditorImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, it.editorImage.all.map(it => it.name,),),)
// Entities.values.filter(it => it.clearConditionImage !== EmptyClearConditionImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, GameStyles.values.map(it2 => it.clearConditionImage.get(it2,),).toArray().flat().map(it => it.name,),),)
// Entities.values.filter(it => it.inGameImage !== EmptyInGameImage.get,).map(it => console.log(`${it.englishName}\n\t`, it.inGameImage,),)
// Entities.values.filter(it => it.unusedImage.all.size !== 0,).forEach(it => console.log(`${it.englishName}\n\t`, [...it.unusedImage.all.entries(),].map(it => it[1]).flat(2),),)
// Entities.values.filter(it => it.unusedBigMushroomImage.all.length !== 0,).forEach(it => console.log(`${it.englishName}\n\t`, it.unusedBigMushroomImage.all.flat(),),)

// TODO remove this test variable when the application will be complete
// @ts-ignore
(window.test ??= {}).Entities = Entities
