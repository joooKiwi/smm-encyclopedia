import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {InGameImage}                          from 'core/entity/images/inGame/InGameImage'
import type {InGameImage_SMM1}                     from 'core/entity/images/inGame/InGameImage_SMM1'
import type {InGameImage_SMM2}                     from 'core/entity/images/inGame/InGameImage_SMM2'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}         from 'core/entity/Entities'
import * as ImageCreator  from 'core/entity/images/inGameImageCreator'
import {EmptyInGameImage} from 'core/entity/images/inGame/EmptyInGameImage'
import {GameStyles}       from 'core/gameStyle/GameStyles'

/**
 * An {@link InGameEntityImages} class made to hold an {@link InGameImage}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class InGameEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<InGameImage> {

    //region -------------------- Sub class --------------------

    /** A subclass of an {@link InGameEntityImages} to hold a non-existant {@link InGameImage} ({@link EmptyInGameImage}) */
    private static readonly Null = class NullEditorEntityImages extends InGameEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyInGameImage.get
        }

        public override get image(): EmptyInGameImage { return this.#image }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} */
    private static readonly Existant = (() => {
        abstract class ExistantEditorEntityImages extends InGameEntityImages {

            #image?: InGameImage

            public constructor() { super() }

            /**
             * Create the <b>in game</b> image
             *
             * @onlyCalledOnce
             * @onlyCalledBy<{@link image}>
             */
            protected abstract _createImage(): InGameImage

            public override get image(): InGameImage { return this.#image ??= this._createImage() }

        }

        return ExistantEditorEntityImages
    })()

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new InGameEntityImages.Null()
    public static readonly START_GROUND =                                  new InGameEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new InGameEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new InGameEntityImages.Null()
    public static readonly GENTLE_SLOPE =                                  new InGameEntityImages.Null()

    public static readonly START_BLOCK =                                   new class InGameEntityImages_StartBlock extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.startBlock(this,)
        }

    }()
    public static readonly OCCLUDE_BLOCK =                                 new InGameEntityImages.Null()

    public static readonly WATER =                                         new class InGameEntityImages_Water extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.water(this,)
        }

    }()
    public static readonly LAVA =                                          new class InGameEntityImages_Lava extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.dangerousLiquid(this, 'Object - MagmaHalf',)
        }

    }()
    public static readonly POISON =                                        new class InGameEntityImages_Poison extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.dangerousLiquid(this, 'Object - PoisonHalf',)
        }

    }()

    public static readonly PIPE =                                          new InGameEntityImages.Null()
    public static readonly CLEAR_PIPE =                                    new InGameEntityImages.Null()

    public static readonly SPIKE_TRAP =                                    new InGameEntityImages.Null()
    public static readonly JELECTRO =                                      new InGameEntityImages.Null()
    public static readonly SEA_URCHIN =                                    new InGameEntityImages.Null()
    public static readonly SPIKE_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM =                             new InGameEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM =                            new InGameEntityImages.Null()
    public static readonly BRIDGE =                                        new InGameEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new InGameEntityImages.Null()
    public static readonly CRISTAL_BLOCK =                                 new InGameEntityImages.Null()
    public static readonly ROTATING_BLOCK =                                new InGameEntityImages.Null()

    public static readonly HARD_BLOCK =                                    new InGameEntityImages.Null()
    public static readonly ROCK_BLOCK =                                    new InGameEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK =                           new InGameEntityImages.Null()
    public static readonly HIDDEN_BLOCK =                                  new InGameEntityImages.Null()
    public static readonly EMPTY_BLOCK =                                   new class InGameEntityImages_EmptyBlock extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.only2DStyle(this, 'Object - BlockKara', 'wait.0',)
        }

    }()

    public static readonly EXCLAMATION_MARK_BLOCK =                        new InGameEntityImages.Null()

    public static readonly NOTE_BLOCK =                                    new InGameEntityImages.Null()
    public static readonly MUSIC_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly DONUT_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly CLOUD_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly ON_OFF_SWITCH =                                 new InGameEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK =                             new InGameEntityImages.Null()

    public static readonly P_BLOCK =                                       new InGameEntityImages.Null()

    public static readonly BLINKING_BLOCK =                                new InGameEntityImages.Null()

    public static readonly ICE_BLOCK =                                     new InGameEntityImages.Null()
    public static readonly ICICLE =                                        new InGameEntityImages.Null()

    public static readonly COIN =                                          new InGameEntityImages.Null()
    public static readonly FROZEN_COIN =                                   new InGameEntityImages.Null()
    public static readonly TEN_COIN =                                      new InGameEntityImages.Null()
    public static readonly THIRTY_COIN =                                   new InGameEntityImages.Null()
    public static readonly FIFTY_COIN =                                    new InGameEntityImages.Null()
    public static readonly PINK_COIN =                                     new InGameEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new InGameEntityImages.Null()

    public static readonly FIRE_FLOWER =                                   new InGameEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new InGameEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new InGameEntityImages.Null()
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new class InGameEntityImages_SuperballThrownByAPlayer extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.all(this, 'Object - Superball', GameStyles.SUPER_MARIO_BROS, 'superball',)
        }

    }()

    public static readonly MYSTERY_MUSHROOM =                              new class InGameEntityImages_MysteryMushroom extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM1 {
            return ImageCreator.smm1(this, 'Kinoko2', GameStyles.SUPER_MARIO_BROS,)
        }

    }()
    public static readonly WEIRD_MUSHROOM =                                new class InGameEntityImages_WeirdMushroom extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM1 {
            return ImageCreator.smm1(this, 'KinokoFunny', GameStyles.SUPER_MARIO_BROS,)
        }

    }()

    public static readonly MASTER_SWORD =                                  new InGameEntityImages.Null()
    public static readonly BOMB_THROWN_BY_A_LINK =                         new class InGameEntityImages_BombThrownByALink extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multiple(this, 'Enemy - LinkBomb', GameStyles.SUPER_MARIO_BROS, ['wait.0', 'walk.0', 'walk.1',],)
        }

    }()
    public static readonly ARROW_THROWN_BY_A_LINK =                        new class InGameEntityImages_ArrowThrownByALink extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.all(this, 'Object - Arrow', GameStyles.SUPER_MARIO_BROS, 'arrow',)
        }

    }()

    public static readonly BIG_MUSHROOM =                                  new InGameEntityImages.Null()
    public static readonly BIG_MUSHROOM_CLASSIC =                          new class InGameEntityImages_BigMushroom_Classic extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM1 {
            return ImageCreator.allSmm1(this, 'MegaKinoko',)
        }

    }()
    public static readonly BIG_MUSHROOM_MODERN =                           new class InGameEntityImages_BigMushroom_Modern extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM1 {
            return ImageCreator.allSmm1(this, 'MegaKinoko2',)
        }

    }()

    public static readonly SMB2_MUSHROOM =                                 new InGameEntityImages.Null()

    public static readonly SUPER_LEAF =                                    new InGameEntityImages.Null()

    public static readonly FROG_SUIT =                                     new InGameEntityImages.Null()

    public static readonly CAPE_FEATHER =                                  new InGameEntityImages.Null()

    public static readonly POWER_BALLOON =                                 new InGameEntityImages.Null()

    public static readonly PROPELLER_MUSHROOM =                            new InGameEntityImages.Null()

    public static readonly SUPER_ACORN =                                   new InGameEntityImages.Null()

    public static readonly SUPER_BELL =                                    new InGameEntityImages.Null()

    public static readonly SUPER_HAMMER =                                  new InGameEntityImages.Null()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new InGameEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new InGameEntityImages.Null()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new InGameEntityImages.Null()

    public static readonly CANNON_BOX =                                    new InGameEntityImages.Null()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new InGameEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new InGameEntityImages.Null()

    public static readonly GOOMBA_MASK =                                   new InGameEntityImages.Null()

    public static readonly BULLET_BILL_MASK =                              new InGameEntityImages.Null()

    public static readonly RED_POW_BOX =                                   new InGameEntityImages.Null()

    public static readonly SUPER_STAR =                                    new InGameEntityImages.Null()

    public static readonly ONE_UP_MUSHROOM =                               new InGameEntityImages.Null()
    public static readonly ROTTEN_MUSHROOM =                               new InGameEntityImages.Null()

    public static readonly SHOE_GOOMBA =                                   new InGameEntityImages.Null()
    public static readonly SHOE =                                          new class InGameEntityImages_Shoe extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInMultiple(this, 'Enemy - KutsuKuriboA', [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,], ['wait.0', 'wait.1',],)
        }

    }()
    public static readonly STILETTO_GOOMBA =                               new InGameEntityImages.Null()
    public static readonly STILETTO =                                      new class InGameEntityImages_Stiletto extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInMultiple(this, 'Enemy - KutsuKuriboB', [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,], ['wait.0', 'wait.1',],)
        }

    }()
    public static readonly YOSHI_EGG =                                     new class InGameEntityImages_YoshiEgg extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multiple(this, 'Enemy - KutsuKuriboA', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU yoshi egg (if present)
        }

    }()
    public static readonly YOSHI =                                         new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new class InGameEntityImages_FireThrownByAYoshi extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multiple(this, 'Player - YoshiFire', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU "Yoshi fire thrown" if present
        }

    }()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new class InGameEntityImages_PoisonThrownByAYoshi extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multiple(this, 'Player - YoshiPoison', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU "Yoshi poison thrown" if present
        }

    }()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new InGameEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new InGameEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new InGameEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new class InGameEntityImages_RedYoshiEgg extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multiple(this, 'Enemy - KutsuKuriboB', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU yoshi egg (if present)
        }

    }()
    public static readonly RED_YOSHI =                                     new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new InGameEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new InGameEntityImages.Null()
    public static readonly GALOOMBA =                                      new InGameEntityImages.Null()
    public static readonly GOOMBRAT =                                      new InGameEntityImages.Null()
    public static readonly GOOMBUD =                                       new InGameEntityImages.Null()

    public static readonly GREEN_KOOPA_TROOPA =                            new InGameEntityImages.Null()
    public static readonly RED_KOOPA_TROOPA =                              new InGameEntityImages.Null()
    public static readonly GREEN_BEACH_KOOPA =                             new InGameEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new InGameEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new InGameEntityImages.Null()
    public static readonly RED_KOOPA_SHELL =                               new InGameEntityImages.Null()

    public static readonly DRY_BONES =                                     new InGameEntityImages.Null()
    public static readonly PARABONES =                                     new InGameEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new InGameEntityImages.Null()
    public static readonly DRY_BONES_SHELL =                               new InGameEntityImages.Null()

    public static readonly BUZZY_BEETLE =                                  new InGameEntityImages.Null()
    public static readonly PARA_BEETLE =                                   new InGameEntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new InGameEntityImages.Null()

    public static readonly SPINY =                                         new InGameEntityImages.Null()
    public static readonly WINGED_SPINY =                                  new InGameEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new InGameEntityImages.Null()
    public static readonly SPINY_EGG =                                     new InGameEntityImages.Null()
    public static readonly SPINY_SHELL =                                   new InGameEntityImages.Null()

    public static readonly SPIKE_TOP =                                     new InGameEntityImages.Null()
    public static readonly WINGED_SPIKE_TOP =                              new InGameEntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new InGameEntityImages.Null()
    public static readonly FAST_WINGED_SPIKE_TOP =                         new InGameEntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new InGameEntityImages.Null()
    public static readonly SPINY_SKIPSQUEAK =                              new InGameEntityImages.Null()

    public static readonly ANT_TROOPER =                                   new InGameEntityImages.Null()
    public static readonly HORNED_ANT_TROOPER =                            new InGameEntityImages.Null()

    public static readonly STINGBY =                                       new InGameEntityImages.Null()

    public static readonly CHEEP_CHEEP =                                   new InGameEntityImages.Null()
    public static readonly BLURPS =                                        new InGameEntityImages.Null()
    public static readonly DEEP_CHEEP =                                    new InGameEntityImages.Null()
    public static readonly FISH_BONE =                                     new InGameEntityImages.Null()

    public static readonly BLOOPER =                                       new InGameEntityImages.Null()
    public static readonly BLOOPER_NANNY =                                 new InGameEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new class InGameEntityImages_BabyBlooper extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.babyBlooper(this, )
        }

    }()

    public static readonly PORCUPUFFER =                                   new InGameEntityImages.Null()

    public static readonly WIGGLER =                                       new InGameEntityImages.Null()
    public static readonly ANGRY_WIGGLER =                                 new InGameEntityImages.Null()

    public static readonly PIRANHA_PLANT =                                 new InGameEntityImages.Null()
    public static readonly JUMPING_PIRANHA_PLANT =                         new InGameEntityImages.Null()
    public static readonly FIRE_PIRANHA_PLANT =                            new InGameEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new InGameEntityImages.Null()
    public static readonly MUNCHER =                                       new InGameEntityImages.Null()
    public static readonly PIRANHA_CREEPER =                               new InGameEntityImages.Null()

    public static readonly CHAIN_CHOMP =                                   new InGameEntityImages.Null()
    public static readonly UNCHAINED_CHOMP =                               new InGameEntityImages.Null()
    public static readonly CHAIN_CHOMP_STUMP =                             new InGameEntityImages.Null()

    public static readonly SPIKE =                                         new InGameEntityImages.Null()
    public static readonly SPIKE_BALL =                                    new InGameEntityImages.Null()
    public static readonly SNOWBALL =                                      new InGameEntityImages.Null()

    public static readonly LAKITU =                                        new InGameEntityImages.Null()
    public static readonly LAKITU_CLOUD =                                  new InGameEntityImages.Null()

    public static readonly BOO =                                           new InGameEntityImages.Null()
    public static readonly STRETCH =                                       new InGameEntityImages.Null()
    public static readonly BOO_BUDDIES =                                   new InGameEntityImages.Null()
    public static readonly PEEPA =                                         new InGameEntityImages.Null()

    public static readonly BOB_OMB =                                       new InGameEntityImages.Null()
    public static readonly LIT_BOB_OMB =                                   new InGameEntityImages.Null()

    public static readonly POKEY =                                         new InGameEntityImages.Null()
    public static readonly SNOW_POKEY =                                    new InGameEntityImages.Null()

    public static readonly THWOMP =                                        new InGameEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new InGameEntityImages.Null()
    public static readonly ROCKY_WRENCH =                                  new InGameEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new InGameEntityImages.Null()

    public static readonly MAGIKOOPA =                                     new InGameEntityImages.Null()
    public static readonly MAGIKOOPA_PROJECTILE =                          new InGameEntityImages.Null()

    public static readonly HAMMER_BRO =                                    new InGameEntityImages.Null()
    public static readonly SLEDGE_BRO =                                    new InGameEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new InGameEntityImages.Null()
    public static readonly FIRE_BRO =                                      new InGameEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO =                                new InGameEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new InGameEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new InGameEntityImages.Null()

    public static readonly MECHAKOOPA =                                    new InGameEntityImages.Null()
    public static readonly BLASTA_MECHAKOOPA =                             new InGameEntityImages.Null()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new InGameEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA =                              new InGameEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new InGameEntityImages.Null()

    public static readonly CHARVAARGH =                                    new InGameEntityImages.Null()

    public static readonly BULLY =                                         new InGameEntityImages.Null()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new InGameEntityImages.Null()
    public static readonly BULLET_BILL =                                   new InGameEntityImages.Null()
    public static readonly BULL_EYE_BLASTER =                              new InGameEntityImages.Null()
    public static readonly BULL_EYE_BILL =                                 new InGameEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new InGameEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new InGameEntityImages.Null()
    public static readonly BULL_EYE_BANZAI =                               new InGameEntityImages.Null()
    public static readonly CAT_BANZAI_BILL =                               new InGameEntityImages.Null()

    public static readonly CANNON =                                        new InGameEntityImages.Null()
    public static readonly CANNONBALL =                                    new InGameEntityImages.Null()
    public static readonly RED_CANNON =                                    new InGameEntityImages.Null()
    public static readonly RED_CANNONBALL =                                new InGameEntityImages.Null()

    public static readonly BURNER =                                        new InGameEntityImages.Null()

    public static readonly FIRE_BAR =                                      new InGameEntityImages.Null()

    public static readonly SKEWER =                                        new InGameEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR =                               new InGameEntityImages.Null()
    public static readonly JUNIOR_CLOWN_CAR =                              new InGameEntityImages.Null()
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new InGameEntityImages.Null()
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new InGameEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new InGameEntityImages.Null()
    public static readonly CAR =                                           new InGameEntityImages.Null()

    public static readonly GRINDER =                                       new InGameEntityImages.Null()

    public static readonly ANGRY_SUN =                                     new InGameEntityImages.Null()
    public static readonly MOON =                                          new InGameEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new InGameEntityImages.Null()
    public static readonly MEOWSER =                                       new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new InGameEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new InGameEntityImages.Null()

    public static readonly BOWSER_JR =                                     new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new InGameEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new InGameEntityImages.Null()
    public static readonly POM_POM =                                       new InGameEntityImages.Null()
    public static readonly POM_POM_CLONE =                                 new InGameEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new InGameEntityImages.Null()

    public static readonly LARRY =                                         new InGameEntityImages.Null()
    public static readonly LARRY_WAND =                                    new class InGameEntityImages_LarryWand extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingWand(this, 'Enemy - Larry',)
        }

    }()
    public static readonly LARRY_PROJECTILE =                              new class InGameEntityImages_LarryProjectile extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingProjectile(this, 'Enemy - Larry',)
        }

    }()

    public static readonly IGGY =                                          new InGameEntityImages.Null()
    public static readonly IGGY_WAND =                                     new class InGameEntityImages_IggyWand extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingWand(this, 'Enemy - Iggy',)
        }

    }()
    public static readonly IGGY_PROJECTILE =                               new class InGameEntityImages_IggyProjectile extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingProjectile(this, 'Enemy - Iggy',)
        }

    }()

    public static readonly WENDY =                                         new InGameEntityImages.Null()
    public static readonly WENDY_WAND =                                    new class InGameEntityImages_WendyWand extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingWand(this, 'Enemy - Wendy',)
        }

    }()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new class InGameEntityImages_CandyRingThrownByAWendy extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.candyRing(this,)
        }

    }()
    public static readonly WENDY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly LEMMY =                                         new InGameEntityImages.Null()
    public static readonly LEMMY_WAND =                                    new class InGameEntityImages_LemmyWand extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingWand(this, 'Enemy - Lemmy',)
        }

    }()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new class InGameEntityImages_MagicBallThrownByALemmy extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.magicBall(this,)
        }

    }()
    public static readonly LEMMY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly ROY =                                           new InGameEntityImages.Null()
    public static readonly ROY_WAND =                                      new class InGameEntityImages_RoyWand extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingWand(this, 'Enemy - Roy',)
        }

    }()
    public static readonly ROY_PROJECTILE =                                new class InGameEntityImages_RoyProjectile extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingProjectile(this, 'Enemy - Roy',)
        }

    }()

    public static readonly MORTON =                                        new InGameEntityImages.Null()
    public static readonly MORTON_WAND =                                   new class InGameEntityImages_MortonWand extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingWand(this, 'Enemy - Morton',)
        }

    }()
    public static readonly MORTON_THROWN_PROJECTILE =                      new class InGameEntityImages_MortonThrownProjectile extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingProjectile(this, 'Enemy - Morton',)
        }

    }()
    public static readonly MORTON_GROUND_PROJECTILE =                      new class InGameEntityImages_MortonGroundProjectile extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.mortonGroundProjectile(this,)
        }
        //TODO add unused morton fire.2 in SMB3

    }()

    public static readonly LUDWIG =                                        new InGameEntityImages.Null()
    public static readonly LUDWIG_WAND =                                   new class InGameEntityImages_LudwigWand extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingWand(this, 'Enemy - Ludwig',)
        }

    }()
    public static readonly LUDWIG_PROJECTILE =                             new class InGameEntityImages_LudwigProjectile extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.koopalingProjectile(this, 'Enemy - Ludwig',)
        }

    }()

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new InGameEntityImages.Null()

    public static readonly SWINGING_CLAW =                                 new InGameEntityImages.Null()

    public static readonly TWISTER =                                       new InGameEntityImages.Null()

    public static readonly ONE_WAY_WALL =                                  new InGameEntityImages.Null()

    public static readonly TRACK =                                         new InGameEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly VINE =                                          new InGameEntityImages.Null()
    public static readonly TREE =                                          new InGameEntityImages.Null()

    public static readonly STARTING_ARROW =                                new InGameEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new InGameEntityImages.Null()

    public static readonly CHECKPOINT_FLAG =                               new InGameEntityImages.Null()
    public static readonly GOAL_POLE =                                     new InGameEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new InGameEntityImages.Null()
    public static readonly GIANT_GATE =                                    new InGameEntityImages.Null()

    public static readonly CASTLE =                                        new InGameEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new InGameEntityImages.Null()
    public static readonly AXE =                                           new InGameEntityImages.Null()

    public static readonly DASH_BLOCK =                                    new InGameEntityImages.Null()

    public static readonly SNAKE_BLOCK =                                   new InGameEntityImages.Null()
    public static readonly FAST_SNAKE_BLOCK =                              new InGameEntityImages.Null()

    public static readonly CONVEYOR_BELT =                                 new InGameEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT =                            new InGameEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE =                           new InGameEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE =                             new InGameEntityImages.Null()

    public static readonly LIFT =                                          new InGameEntityImages.Null()
    public static readonly FLIMSY_LIFT =                                   new InGameEntityImages.Null()
    public static readonly CLOUD_LIFT =                                    new InGameEntityImages.Null()

    public static readonly SEESAW =                                        new InGameEntityImages.Null()

    public static readonly LAVA_LIFT =                                     new InGameEntityImages.Null()
    public static readonly FAST_LAVA_LIFT =                                new InGameEntityImages.Null()

    public static readonly CRATE =                                         new InGameEntityImages.Null()

    public static readonly KEY =                                           new InGameEntityImages.Null()
    public static readonly CURSED_KEY =                                    new InGameEntityImages.Null()
    public static readonly PHANTO =                                        new class InGameEntityImages_Phanto extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.multiple(this, 'Object - Phanto', GameStyles.SUPER_MARIO_BROS, ['wait.0', 'wait.1', 'wait.2', 'wait.3',],)
        }

    }()

    public static readonly TRAMPOLINE =                                    new InGameEntityImages.Null()
    public static readonly HOP_CHOPS =                                     new InGameEntityImages.Null()

    public static readonly POW_BLOCK =                                     new InGameEntityImages.Null()
    public static readonly RED_POW_BLOCK =                                 new InGameEntityImages.Null()

    public static readonly P_SWITCH =                                      new InGameEntityImages.Null()

    public static readonly STONE =                                         new InGameEntityImages.Null()

    public static readonly WARP_DOOR =                                     new InGameEntityImages.Null()
    public static readonly P_WARP_DOOR =                                   new InGameEntityImages.Null()
    public static readonly KEY_DOOR =                                      new InGameEntityImages.Null()

    public static readonly WARP_BOX =                                      new InGameEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY =                             new InGameEntityImages.Null()

    public static readonly WING =                                          new InGameEntityImages.Null()
    public static readonly PARACHUTE =                                     new InGameEntityImages.Null()

    public static readonly TOAD =                                          new InGameEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new InGameEntityImages.Null()

    public static readonly BUBBLE =                                        new class InGameEntityImages_Bubble extends InGameEntityImages.Existant {

        protected override _createImage(): InGameImage_SMM2 {
            return ImageCreator.bubble(this,)
        }

    }()

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<InGameEntityImages, typeof InGameEntityImages, Entities, typeof Entities> = class CompanionEnum_Entities
        extends CompanionEnumWithParent<InGameEntityImages, typeof InGameEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(InGameEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Entities()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    #englishName?: PossibleEnglishName
    #englishNameInHtml?: string

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() { super() }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName { return this.#englishName ??= this.parent.englishName }

    public get englishNameInHtml(): string { return this.#englishNameInHtml ??= this.parent.englishNameInHtml }

    public abstract get image(): InGameImage

    //endregion -------------------- Getter methods --------------------

}
