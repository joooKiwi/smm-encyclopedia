import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {ImageName_UnusedSMM1Regular}          from 'core/entity/file/EntityImageFile.unused'
import type {UnusedImage_BigMushroom}              from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                  from 'core/entity/images/unused/UnusedImage_Regular'

import {Entities}                     from 'core/entity/Entities'
import * as ImageCreator              from 'core/entity/images/unusedImageCreator'
import {EmptyUnusedImage_BigMushroom} from 'core/entity/images/unused/EmptyUnusedImage_BigMushroom'
import {EmptyUnusedImage_Regular}     from 'core/entity/images/unused/EmptyUnusedImage_Regular'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/**
 * An {@link Entities} class made to hold both a {@link UnusedImage_Regular} and a {@link UnusedImage_BigMushroom}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class UnusedEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Sub class --------------------

    /**
     * A subclass of an {@link UnusedEntityImages} to hold both
     * a non-existant {@link UnusedImage_Regular} ({@link EmptyUnusedImage_Regular})
     * and a non-existant {@link UnusedImage_BigMushroom} ({@link EmptyUnusedImage_BigMushroom})
     */
    private static readonly Null = class NullEditorEntityImages extends UnusedEntityImages {

        readonly #regularImage
        readonly #bigMushroomImage

        public constructor() {
            super()
            this.#regularImage = EmptyUnusedImage_Regular.get
            this.#bigMushroomImage = EmptyUnusedImage_BigMushroom.get
        }

        public override get regularImage(): EmptyUnusedImage_Regular {
            return this.#regularImage
        }

        public override get bigMushroomImage(): EmptyUnusedImage_BigMushroom {
            return this.#bigMushroomImage
        }

    }

    /**
     * A subclass of an {@link UnusedEntityImages} to hold
     * an existant {@link UnusedImage_Regular}
     * and a non-existant {@link UnusedImage_BigMushroom} ({@link EmptyUnusedImage_BigMushroom})
     */
    private static readonly Regular = (() => {
        abstract class RegularUnusedEntityImages extends UnusedEntityImages {

            #image?: UnusedImage_Regular
            readonly #bigMushroomImage

            public constructor() {
                super()
                this.#bigMushroomImage = EmptyUnusedImage_BigMushroom.get
            }

            /**
             * Create the <b>unused</b> regular image
             *
             * @onlyCalledOnce
             * @onlyCalledBy<{@link regularImage}>
             */
            protected abstract _createImage(): UnusedImage_Regular

            public override get regularImage(): UnusedImage_Regular {
                return this.#image ??= this._createImage()
            }

            public override get bigMushroomImage(): EmptyUnusedImage_BigMushroom {
                return this.#bigMushroomImage
            }

        }

        return RegularUnusedEntityImages
    })()

    /**
     * A subclass of an {@link UnusedEntityImages} to hold
     * a non-existant {@link UnusedImage_Regular} ({@link EmptyUnusedImage_Regular})
     * and an existant {@link UnusedImage_BigMushroom}
     */
    private static readonly BigMushroom = (() => {
        abstract class BigMushroomUnusedEntityImages extends UnusedEntityImages {

            readonly #regularImage
            #image?: UnusedImage_BigMushroom

            public constructor() {
                super()
                this.#regularImage = EmptyUnusedImage_Regular.get
            }

            public override get regularImage(): EmptyUnusedImage_Regular {
                return this.#regularImage
            }

            /**
             * Create the <b>unused</b> Big Mushroom image
             *
             * @onlyCalledOnce
             * @onlyCalledBy<{@link bigMushroomImage}>
             */
            protected abstract _createImage(): UnusedImage_BigMushroom

            public override get bigMushroomImage(): UnusedImage_BigMushroom { return this.#image ??= this._createImage() }

        }

        return BigMushroomUnusedEntityImages
    })()

    /**
     * A subclass of an {@link UnusedEntityImages} to hold
     * an existant {@link UnusedImage_Regular}
     * and an existant {@link UnusedImage_BigMushroom}
     */
    private static readonly Both = (() => {
        abstract class BothUnusedEntityImages extends UnusedEntityImages {

            #regularImage?: UnusedImage_Regular
            #bigMushroomImage?: UnusedImage_BigMushroom

            public constructor() { super() }

            /**
             * Create the <b>unused</b> regular image
             *
             * @onlyCalledOnce
             * @onlyCalledBy<{@link regularImage}>
             */
            protected abstract _createUnusedRegularImage(): UnusedImage_Regular

            public override get regularImage(): UnusedImage_Regular { return this.#regularImage ??= this._createUnusedRegularImage() }

            /**
             * Create the <b>unused</b> Big Mushroom image
             *
             * @onlyCalledOnce
             * @onlyCalledBy<{@link bigMushroomImage}>
             */
            protected abstract _createUnusedBigMushroomImage(): UnusedImage_BigMushroom

            public override get bigMushroomImage(): UnusedImage_BigMushroom { return this.#bigMushroomImage ??= this._createUnusedBigMushroomImage() }

        }

        return BothUnusedEntityImages
    })()

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new UnusedEntityImages.Null()
    public static readonly START_GROUND =                                  new UnusedEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new UnusedEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new UnusedEntityImages.Null()
    public static readonly GENTLE_SLOPE =                                  new UnusedEntityImages.Null()

    public static readonly START_BLOCK =                                   new UnusedEntityImages.Null()
    public static readonly OCCLUDE_BLOCK =                                 new UnusedEntityImages.Null()

    public static readonly WATER =                                         new UnusedEntityImages.Null()
    public static readonly LAVA =                                          new UnusedEntityImages.Null()
    public static readonly POISON =                                        new UnusedEntityImages.Null()

    public static readonly PIPE =                                          new UnusedEntityImages.Null()
    public static readonly CLEAR_PIPE =                                    new UnusedEntityImages.Null()

    public static readonly SPIKE_TRAP =                                    new UnusedEntityImages.Null()
    public static readonly JELECTRO =                                      new UnusedEntityImages.Null()
    public static readonly SEA_URCHIN =                                    new UnusedEntityImages.Null()
    public static readonly SPIKE_BLOCK =                                   new UnusedEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM =                             new UnusedEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM =                            new UnusedEntityImages.Null()
    public static readonly BRIDGE =                                        new UnusedEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new UnusedEntityImages.Null()
    public static readonly CRISTAL_BLOCK =                                 new UnusedEntityImages.Null()
    public static readonly ROTATING_BLOCK =                                new UnusedEntityImages.Null()

    public static readonly HARD_BLOCK =                                    new UnusedEntityImages.Null()
    public static readonly ROCK_BLOCK =                                    new UnusedEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK =                           new UnusedEntityImages.Null()
    public static readonly HIDDEN_BLOCK =                                  new UnusedEntityImages.Null()
    public static readonly EMPTY_BLOCK =                                   new UnusedEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK =                        new UnusedEntityImages.Null()

    public static readonly NOTE_BLOCK =                                    new UnusedEntityImages.Null()
    public static readonly MUSIC_BLOCK =                                   new UnusedEntityImages.Null()

    public static readonly DONUT_BLOCK =                                   new UnusedEntityImages.Null()

    public static readonly CLOUD_BLOCK =                                   new UnusedEntityImages.Null()

    public static readonly ON_OFF_SWITCH =                                 new UnusedEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK =                             new UnusedEntityImages.Null()

    public static readonly P_BLOCK =                                       new UnusedEntityImages.Null()

    public static readonly BLINKING_BLOCK =                                new UnusedEntityImages.Null()

    public static readonly ICE_BLOCK =                                     new UnusedEntityImages.Null()
    public static readonly ICICLE =                                        new UnusedEntityImages.Null()

    public static readonly COIN =                                          new UnusedEntityImages.Null()
    public static readonly FROZEN_COIN =                                   new UnusedEntityImages.Null()
    public static readonly TEN_COIN =                                      new UnusedEntityImages.Null()
    public static readonly THIRTY_COIN =                                   new UnusedEntityImages.Null()
    public static readonly FIFTY_COIN =                                    new UnusedEntityImages.Null()
    public static readonly PINK_COIN =                                     new UnusedEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new UnusedEntityImages.Null()

    public static readonly FIRE_FLOWER =                                   new UnusedEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new UnusedEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new UnusedEntityImages.Null()
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new UnusedEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM =                              new UnusedEntityImages.Null()
    public static readonly WEIRD_MUSHROOM =                                new UnusedEntityImages.Null()

    public static readonly MASTER_SWORD =                                  new UnusedEntityImages.Null()
    public static readonly BOMB_THROWN_BY_A_LINK =                         new UnusedEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK =                        new UnusedEntityImages.Null()

    public static readonly BIG_MUSHROOM =                                  new UnusedEntityImages.Null()
    public static readonly BIG_MUSHROOM_CLASSIC =                          new UnusedEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN =                           new UnusedEntityImages.Null()

    public static readonly SMB2_MUSHROOM =                                 new UnusedEntityImages.Null()

    public static readonly SUPER_LEAF =                                    new UnusedEntityImages.Null()

    public static readonly FROG_SUIT =                                     new UnusedEntityImages.Null()

    public static readonly CAPE_FEATHER =                                  new UnusedEntityImages.Null()

    public static readonly POWER_BALLOON =                                 new UnusedEntityImages.Null()

    public static readonly PROPELLER_MUSHROOM =                            new UnusedEntityImages.Null()

    public static readonly SUPER_ACORN =                                   new UnusedEntityImages.Null()

    public static readonly SUPER_BELL =                                    new UnusedEntityImages.Null()
    public static readonly SUPER_HAMMER =                                  new UnusedEntityImages.Null()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new UnusedEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new UnusedEntityImages.Null()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new UnusedEntityImages.Null()

    public static readonly CANNON_BOX =                                    new UnusedEntityImages.Null()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new UnusedEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new UnusedEntityImages.Null()

    public static readonly GOOMBA_MASK =                                   new UnusedEntityImages.Null()

    public static readonly BULLET_BILL_MASK =                              new UnusedEntityImages.Null()

    public static readonly RED_POW_BOX =                                   new UnusedEntityImages.Null()

    public static readonly SUPER_STAR =                                    new UnusedEntityImages.Null()

    public static readonly ONE_UP_MUSHROOM =                               new UnusedEntityImages.Null()
    public static readonly ROTTEN_MUSHROOM =                               new UnusedEntityImages.Null()

    public static readonly SHOE_GOOMBA =                                   new UnusedEntityImages.Null()
    public static readonly SHOE =                                          new UnusedEntityImages.Null()
    public static readonly STILETTO_GOOMBA =                               new UnusedEntityImages.Null()
    public static readonly STILETTO =                                      new UnusedEntityImages.Null()
    public static readonly YOSHI_EGG =                                     new UnusedEntityImages.Null()
    public static readonly YOSHI =                                         new UnusedEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new UnusedEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new UnusedEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new UnusedEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new UnusedEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new UnusedEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new UnusedEntityImages.Null()
    public static readonly RED_YOSHI =                                     new UnusedEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new UnusedEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new class UnusedEntityImages_Goomba extends UnusedEntityImages.BigMushroom {

        protected override _createImage(): UnusedImage_BigMushroom {
            return ImageCreator.unusedBigMushroomImages(this, 'Kuribo D', [
                ['damage.0',],
                ['swim.0', 'swim.1',],
                ['walk.0', 'walk.1',],
                ['kutsu',],
            ],)
        }

    }()
    public static readonly GALOOMBA =                                      new UnusedEntityImages.Null()
    public static readonly GOOMBRAT =                                      new UnusedEntityImages.Null()
    public static readonly GOOMBUD =                                       new UnusedEntityImages.Null()

    public static readonly GREEN_KOOPA_TROOPA =                            new UnusedEntityImages.Null()
    public static readonly RED_KOOPA_TROOPA =                              new UnusedEntityImages.Null()
    public static readonly GREEN_BEACH_KOOPA =                             new UnusedEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new UnusedEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new UnusedEntityImages.Null()
    public static readonly RED_KOOPA_SHELL =                               new UnusedEntityImages.Null()

    public static readonly DRY_BONES =                                     new UnusedEntityImages.Null()
    public static readonly PARABONES =                                     new UnusedEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new UnusedEntityImages.Null()
    public static readonly DRY_BONES_SHELL =                               new UnusedEntityImages.Null()

    public static readonly BUZZY_BEETLE =                                  new UnusedEntityImages.Null()
    public static readonly PARA_BEETLE =                                   new UnusedEntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new UnusedEntityImages.Null()

    public static readonly SPINY =                                         new UnusedEntityImages.Null()
    public static readonly WINGED_SPINY =                                  new UnusedEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new UnusedEntityImages.Null()
    public static readonly SPINY_EGG =                                     new UnusedEntityImages.Null()
    public static readonly SPINY_SHELL =                                   new UnusedEntityImages.Null()

    public static readonly SPIKE_TOP =                                     new UnusedEntityImages.Null()
    public static readonly WINGED_SPIKE_TOP =                              new UnusedEntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new UnusedEntityImages.Null()
    public static readonly FAST_WINGED_SPIKE_TOP =                         new UnusedEntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new UnusedEntityImages.Null()
    public static readonly SPINY_SKIPSQUEAK =                              new UnusedEntityImages.Null()

    public static readonly ANT_TROOPER =                                   new UnusedEntityImages.Null()
    public static readonly HORNED_ANT_TROOPER =                            new UnusedEntityImages.Null()

    public static readonly STINGBY =                                       new UnusedEntityImages.Null()

    public static readonly CHEEP_CHEEP =                                   new UnusedEntityImages.Null()
    public static readonly BLURPS =                                        new UnusedEntityImages.Null()
    public static readonly DEEP_CHEEP =                                    new UnusedEntityImages.Null()
    public static readonly FISH_BONE =                                     new UnusedEntityImages.Null()

    public static readonly BLOOPER =                                       new UnusedEntityImages.Null()
    public static readonly BLOOPER_NANNY =                                 new UnusedEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new UnusedEntityImages.Null()

    public static readonly PORCUPUFFER =                                   new UnusedEntityImages.Null()

    public static readonly WIGGLER =                                       new UnusedEntityImages.Null()
    public static readonly ANGRY_WIGGLER =                                 new UnusedEntityImages.Null()

    public static readonly PIRANHA_PLANT =                                 new UnusedEntityImages.Null()
    public static readonly JUMPING_PIRANHA_PLANT =                         new UnusedEntityImages.Null()
    public static readonly FIRE_PIRANHA_PLANT =                            new UnusedEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new UnusedEntityImages.Null()
    public static readonly MUNCHER =                                       new UnusedEntityImages.Null()
    public static readonly PIRANHA_CREEPER =                               new UnusedEntityImages.Null()

    public static readonly CHAIN_CHOMP =                                   new UnusedEntityImages.Null()
    public static readonly UNCHAINED_CHOMP =                               new UnusedEntityImages.Null()
    public static readonly CHAIN_CHOMP_STUMP =                             new UnusedEntityImages.Null()

    public static readonly SPIKE =                                         new UnusedEntityImages.Null()
    public static readonly SPIKE_BALL =                                    new UnusedEntityImages.Null()
    public static readonly SNOWBALL =                                      new UnusedEntityImages.Null()

    public static readonly LAKITU =                                        new UnusedEntityImages.Null()
    public static readonly LAKITU_CLOUD =                                  new UnusedEntityImages.Null()

    public static readonly BOO =                                           new UnusedEntityImages.Null()
    public static readonly STRETCH =                                       new class UnusedEntityImages_Stretch extends UnusedEntityImages.Both {

        protected override _createUnusedRegularImage(): UnusedImage_Regular {
            return ImageCreator.unusedRegularInMultipleStyleSMM1Images(this, 'Enemy - Necchi', [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,], ['wait.0', 'out.4',],)
        }

        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.unusedBigMushroomImages(this, 'Necchi', [['wait.0', 'wait.2',], ['out.4',],],)
        }

    }()
    public static readonly BOO_BUDDIES =                                   new UnusedEntityImages.Null()
    public static readonly PEEPA =                                         new UnusedEntityImages.Null()

    public static readonly BOB_OMB =                                       new UnusedEntityImages.Null()
    public static readonly LIT_BOB_OMB =                                   new UnusedEntityImages.Null()

    public static readonly POKEY =                                         new UnusedEntityImages.Null()
    public static readonly SNOW_POKEY =                                    new UnusedEntityImages.Null()

    public static readonly THWOMP =                                        new UnusedEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new UnusedEntityImages.Null()
    public static readonly ROCKY_WRENCH =                                  new UnusedEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new UnusedEntityImages.Null()

    public static readonly MAGIKOOPA =                                     new UnusedEntityImages.Null()
    public static readonly MAGIKOOPA_PROJECTILE =                          new UnusedEntityImages.Null()

    public static readonly HAMMER_BRO =                                    new UnusedEntityImages.Null()
    public static readonly SLEDGE_BRO =                                    new UnusedEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new UnusedEntityImages.Null()
    public static readonly FIRE_BRO =                                      new UnusedEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO =                                new UnusedEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new UnusedEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new UnusedEntityImages.Null()

    public static readonly MECHAKOOPA =                                    new UnusedEntityImages.Null()
    public static readonly BLASTA_MECHAKOOPA =                             new UnusedEntityImages.Null()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new UnusedEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA =                              new UnusedEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new UnusedEntityImages.Null()

    public static readonly CHARVAARGH =                                    new UnusedEntityImages.Null()

    public static readonly BULLY =                                         new UnusedEntityImages.Null()

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new UnusedEntityImages.Null()
    public static readonly BULLET_BILL =                                   new UnusedEntityImages.Null()
    public static readonly BULL_EYE_BLASTER =                              new UnusedEntityImages.Null()
    public static readonly BULL_EYE_BILL =                                 new UnusedEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new UnusedEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new UnusedEntityImages.Null()
    public static readonly BULL_EYE_BANZAI =                               new UnusedEntityImages.Null()
    public static readonly CAT_BANZAI_BILL =                               new UnusedEntityImages.Null()

    public static readonly CANNON =                                        new UnusedEntityImages.Null()
    public static readonly CANNONBALL =                                    new class UnusedEntityImages_Cannonball extends UnusedEntityImages.BigMushroom {

        protected override _createImage(): UnusedImage_BigMushroom {
            return ImageCreator.singleUnusedBigMushroomImages(this, 'SenkanHoudai D', 'senkan_houdai_ball',)
        }

    }()
    public static readonly RED_CANNON =                                    new UnusedEntityImages.Null()
    public static readonly RED_CANNONBALL =                                new UnusedEntityImages.Null()

    public static readonly BURNER =                                        new UnusedEntityImages.Null()

    public static readonly FIRE_BAR =                                      new UnusedEntityImages.Null()

    public static readonly SKEWER =                                        new UnusedEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR =                               new class UnusedEntityImages_KoopaClownCar extends UnusedEntityImages.Both {

        protected override _createUnusedRegularImage(): UnusedImage_Regular {
            return ImageCreator.singleUnusedRegularSMM1Images(this, 'Enemy - KoopaClown', GameStyles.SUPER_MARIO_WORLD, ['weep.4', 'weep.5', 'weep.6', 'weep.7',],)
        }

        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.unusedBigMushroomImages(this, 'KoopaClown', [
                ['wait.4', 'wait.5', 'wait.6', 'wait.7',],
                ['anger.4', 'anger.5', 'anger.6', 'anger.7',],
                ['blink.4', 'blink.5', 'blink.6', 'blink.7',],
                ['weep.4', 'weep.5', 'weep.6', 'weep.7',],
                ['iron_ball.1',],
                ['tear.1',],
            ],)
        }

    }()
    public static readonly JUNIOR_CLOWN_CAR =                              new UnusedEntityImages.Null()
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new UnusedEntityImages.Null()
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new UnusedEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new UnusedEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new UnusedEntityImages.Null()
    public static readonly CAR =                                           new UnusedEntityImages.Null()

    public static readonly GRINDER =                                       new UnusedEntityImages.Null()

    public static readonly ANGRY_SUN =                                     new UnusedEntityImages.Null()
    public static readonly MOON =                                          new UnusedEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new class UnusedEntityImages_Bowser extends UnusedEntityImages.BigMushroom {

        protected override _createImage(): UnusedImage_BigMushroom {
            return ImageCreator.singleUnusedBigMushroomImages(this, 'Koopa', 'fire.1',)
        }

    }()
    public static readonly MEOWSER =                                       new UnusedEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new UnusedEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new UnusedEntityImages.Null()

    public static readonly BOWSER_JR =                                     new class UnusedEntityImages_BowserJr extends UnusedEntityImages.BigMushroom {

        protected override _createImage(): UnusedImage_BigMushroom {
            return ImageCreator.singleUnusedBigMushroomImages(this, 'KoopaJr', 'fire.1',)
        }

    }()
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new UnusedEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new UnusedEntityImages.Null()
    public static readonly POM_POM =                                       new UnusedEntityImages.Null()
    public static readonly POM_POM_CLONE =                                 new UnusedEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new UnusedEntityImages.Null()

    public static readonly LARRY =                                         new UnusedEntityImages.Null()
    public static readonly LARRY_WAND =                                    new UnusedEntityImages.Null()
    public static readonly LARRY_PROJECTILE =                              new UnusedEntityImages.Null()

    public static readonly IGGY =                                          new UnusedEntityImages.Null()
    public static readonly IGGY_WAND =                                     new UnusedEntityImages.Null()
    public static readonly IGGY_PROJECTILE =                               new UnusedEntityImages.Null()

    public static readonly WENDY =                                         new UnusedEntityImages.Null()
    public static readonly WENDY_WAND =                                    new UnusedEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new UnusedEntityImages.Null()
    public static readonly WENDY_PROJECTILE =                              new UnusedEntityImages.Null()//TODO add unused Wendy projectile (SMB, SMB3, SMW)

    public static readonly LEMMY =                                         new UnusedEntityImages.Null()
    public static readonly LEMMY_WAND =                                    new UnusedEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new UnusedEntityImages.Null()
    public static readonly LEMMY_PROJECTILE =                              new UnusedEntityImages.Null()//TODO add unused Lemmy projectile (SMB)

    public static readonly ROY =                                           new UnusedEntityImages.Null()
    public static readonly ROY_WAND =                                      new UnusedEntityImages.Null()
    public static readonly ROY_PROJECTILE =                                new UnusedEntityImages.Null()

    public static readonly MORTON =                                        new UnusedEntityImages.Null()
    public static readonly MORTON_WAND =                                   new UnusedEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE =                      new UnusedEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE =                      new UnusedEntityImages.Null()

    public static readonly LUDWIG =                                        new UnusedEntityImages.Null()
    public static readonly LUDWIG_WAND =                                   new UnusedEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE =                             new UnusedEntityImages.Null()

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new UnusedEntityImages.Null()

    public static readonly SWINGING_CLAW =                                 new UnusedEntityImages.Null()

    public static readonly TWISTER =                                       new UnusedEntityImages.Null()

    public static readonly ONE_WAY_WALL =                                  new UnusedEntityImages.Null()

    public static readonly TRACK =                                         new UnusedEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new UnusedEntityImages.Null()

    public static readonly VINE =                                          new class UnusedEntityImages_Vine extends UnusedEntityImages.Regular {

        protected override _createImage(): UnusedImage_Regular {
            const wait2 = ['wait.2',] as const satisfies readonly ImageName_UnusedSMM1Regular[]

            return ImageCreator.unusedRegularSMM1Images(this, 'Object Block - Tuta', [
                [GameStyles.SUPER_MARIO_BROS, ['wait.1',],],
                [GameStyles.SUPER_MARIO_BROS_3, wait2,],
                [GameStyles.SUPER_MARIO_WORLD, wait2,],
            ],)
        }

    }()
    public static readonly TREE =                                          new UnusedEntityImages.Null()

    public static readonly STARTING_ARROW =                                new UnusedEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new UnusedEntityImages.Null()

    public static readonly CHECKPOINT_FLAG =                               new UnusedEntityImages.Null()
    public static readonly GOAL_POLE =                                     new class UnusedEntityImages_GoalPole extends UnusedEntityImages.Regular {

        protected override _createImage(): UnusedImage_Regular {
            return ImageCreator.singleUnusedRegularSMM1Images(this, 'Object - Goalpole', GameStyles.SUPER_MARIO_BROS, ['goalpole.1',],)
        }

    }()
    public static readonly GOAL_WITH_CARDS =                               new UnusedEntityImages.Null()
    public static readonly GIANT_GATE =                                    new UnusedEntityImages.Null()

    public static readonly CASTLE =                                        new UnusedEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new UnusedEntityImages.Null()
    public static readonly AXE =                                           new UnusedEntityImages.Null()

    public static readonly DASH_BLOCK =                                    new UnusedEntityImages.Null()

    public static readonly SNAKE_BLOCK =                                   new UnusedEntityImages.Null()
    public static readonly FAST_SNAKE_BLOCK =                              new UnusedEntityImages.Null()

    public static readonly CONVEYOR_BELT =                                 new UnusedEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT =                            new UnusedEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE =                           new UnusedEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE =                             new UnusedEntityImages.Null()

    public static readonly LIFT =                                          new UnusedEntityImages.Null()
    public static readonly FLIMSY_LIFT =                                   new UnusedEntityImages.Null()
    public static readonly CLOUD_LIFT =                                    new UnusedEntityImages.Null()

    public static readonly SEESAW =                                        new UnusedEntityImages.Null()

    public static readonly LAVA_LIFT =                                     new UnusedEntityImages.Null()
    public static readonly FAST_LAVA_LIFT =                                new UnusedEntityImages.Null()

    public static readonly CRATE =                                         new UnusedEntityImages.Null()

    public static readonly KEY =                                           new UnusedEntityImages.Null()
    public static readonly CURSED_KEY =                                    new UnusedEntityImages.Null()
    public static readonly PHANTO =                                        new UnusedEntityImages.Null()

    public static readonly TRAMPOLINE =                                    new UnusedEntityImages.Null()
    public static readonly HOP_CHOPS =                                     new UnusedEntityImages.Null()

    public static readonly POW_BLOCK =                                     new UnusedEntityImages.Null()
    public static readonly RED_POW_BLOCK =                                 new UnusedEntityImages.Null()

    public static readonly P_SWITCH =                                      new class UnusedEntityImages_PSwitch extends UnusedEntityImages.Regular {

        protected override _createImage(): UnusedImage_Regular {
            return ImageCreator.unusedRegularSMM1Images(this, 'Object - PSwitch', [
                [GameStyles.SUPER_MARIO_BROS, ['wait.0', 'wait.1', 'wait.2',],],
                [GameStyles.NEW_SUPER_MARIO_BROS_U, ['down_switch_hatena_Alb.000', 'down_switch_hatena_Alb.004',],],
            ],)
        }

    }()

    public static readonly STONE =                                         new UnusedEntityImages.Null()

    public static readonly WARP_DOOR =                                     new UnusedEntityImages.Null()
    public static readonly P_WARP_DOOR =                                   new UnusedEntityImages.Null()
    public static readonly KEY_DOOR =                                      new UnusedEntityImages.Null()

    public static readonly WARP_BOX =                                      new UnusedEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY =                             new UnusedEntityImages.Null()

    public static readonly WING =                                          new UnusedEntityImages.Null()
    public static readonly PARACHUTE =                                     new UnusedEntityImages.Null()

    public static readonly TOAD =                                          new UnusedEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new UnusedEntityImages.Null()

    public static readonly BUBBLE =                                        new UnusedEntityImages.Null()

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<UnusedEntityImages, typeof UnusedEntityImages, Entities, typeof Entities>
        = class CompanionEnum_Entities
        extends CompanionEnumWithParent<UnusedEntityImages, typeof UnusedEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(UnusedEntityImages, Entities,)
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

    #regularImage?: UnusedImage_Regular
    #bigMushroomImage?: UnusedImage_BigMushroom

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() { super() }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName { return this.#englishName ??= this.parent.englishName }

    public get englishNameInHtml(): string { return this.#englishNameInHtml ??= this.parent.englishNameInHtml }

    public abstract get regularImage(): UnusedImage_Regular

    public abstract get bigMushroomImage(): UnusedImage_BigMushroom

    //endregion -------------------- Getter methods --------------------

}
