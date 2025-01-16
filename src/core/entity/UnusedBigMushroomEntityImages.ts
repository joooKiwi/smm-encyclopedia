import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {Array}                              from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithImage}                       from 'util/ClassWithImage'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {UnusedSmm1ImageFile_BigMushroom}      from 'core/entity/file/EntityImageFile'
import type {UnusedImage_BigMushroom}              from 'core/entity/images/unused/UnusedImage_BigMushroom'

import {Entities}                         from 'core/entity/Entities'
import {unusedBigMushroomImage}           from 'core/entity/file/fileCreator'
import {EmptyUnusedImage_BigMushroom}     from 'core/entity/images/unused/EmptyUnusedImage_BigMushroom'
import {UnusedImage_BigMushroomContainer} from 'core/entity/images/unused/UnusedImage_BigMushroom.container'
import {ArrayAsCollection}                from 'util/collection/ArrayAsCollection'

/**
 * An {@link Entities} class made to hold a {@link UnusedImage_BigMushroom}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class UnusedBigMushroomEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<UnusedImage_BigMushroom> {

    //region -------------------- Sub class --------------------

    /**
     * A subclass of an {@link UnusedBigMushroomEntityImages} to hold
     * a non-existant {@link UnusedImage_BigMushroom} ({@link EmptyUnusedImage_BigMushroom})
     */
    private static readonly Null = class NullUnusedBigMushroomEntityImages extends UnusedBigMushroomEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyUnusedImage_BigMushroom.get
        }

        public override get image(): EmptyUnusedImage_BigMushroom { return this.#image }

    }

    /**
     * A subclass of an {@link UnusedBigMushroomEntityImages} to hold
     * and an existant {@link UnusedImage_BigMushroom}
     */
    private static readonly Existant = class ExistantUnusedBigMushroomEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string ,
        const FILE_NAME extends string, >
        extends UnusedBigMushroomEntityImages {

        readonly #englishName
        #image?: UnusedImage_BigMushroom<UnusedSmm1ImageFile_BigMushroom<FOLDER_NAME, FILE_NAME, NAME>>
        readonly #fileNames

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, ...fileNames: Array<FILE_NAME>) {
            super()
            this.#englishName = englishName
            this.#fileNames = fileNames
        }

        public override get englishName(): NAME { return this.#englishName }

        public get image(): UnusedImage_BigMushroom<UnusedSmm1ImageFile_BigMushroom<FOLDER_NAME, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const folderName = this.folderName
            return this.#image = new UnusedImage_BigMushroomContainer(new ArrayAsCollection(this.#fileNames,).map(it => unusedBigMushroomImage(this, folderName, it,),),)
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly START_GROUND =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly GENTLE_SLOPE =                                  new UnusedBigMushroomEntityImages.Null()

    public static readonly START_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly OCCLUDE_BLOCK =                                 new UnusedBigMushroomEntityImages.Null()

    public static readonly WATER =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly LAVA =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly POISON =                                        new UnusedBigMushroomEntityImages.Null()

    public static readonly PIPE =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly CLEAR_PIPE =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly SPIKE_TRAP =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly JELECTRO =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly SEA_URCHIN =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly SPIKE_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM =                             new UnusedBigMushroomEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM =                            new UnusedBigMushroomEntityImages.Null()
    public static readonly BRIDGE =                                        new UnusedBigMushroomEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly CRISTAL_BLOCK =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly ROTATING_BLOCK =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly HARD_BLOCK =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly ROCK_BLOCK =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK =                           new UnusedBigMushroomEntityImages.Null()
    public static readonly HIDDEN_BLOCK =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly EMPTY_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK =                        new UnusedBigMushroomEntityImages.Null()

    public static readonly NOTE_BLOCK =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly MUSIC_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly DONUT_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly CLOUD_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly ON_OFF_SWITCH =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK =                             new UnusedBigMushroomEntityImages.Null()

    public static readonly P_BLOCK =                                       new UnusedBigMushroomEntityImages.Null()

    public static readonly BLINKING_BLOCK =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly ICE_BLOCK =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly ICICLE =                                        new UnusedBigMushroomEntityImages.Null()

    public static readonly COIN =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly FROZEN_COIN =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly TEN_COIN =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly THIRTY_COIN =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly FIFTY_COIN =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly PINK_COIN =                                     new UnusedBigMushroomEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly FIRE_FLOWER =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new UnusedBigMushroomEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new UnusedBigMushroomEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly WEIRD_MUSHROOM =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly MASTER_SWORD =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly BOMB_THROWN_BY_A_LINK =                         new UnusedBigMushroomEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK =                        new UnusedBigMushroomEntityImages.Null()

    public static readonly BIG_MUSHROOM =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly BIG_MUSHROOM_CLASSIC =                          new UnusedBigMushroomEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN =                           new UnusedBigMushroomEntityImages.Null()

    public static readonly SMB2_MUSHROOM =                                 new UnusedBigMushroomEntityImages.Null()

    public static readonly SUPER_LEAF =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly FROG_SUIT =                                     new UnusedBigMushroomEntityImages.Null()

    public static readonly CAPE_FEATHER =                                  new UnusedBigMushroomEntityImages.Null()

    public static readonly POWER_BALLOON =                                 new UnusedBigMushroomEntityImages.Null()

    public static readonly PROPELLER_MUSHROOM =                            new UnusedBigMushroomEntityImages.Null()

    public static readonly SUPER_ACORN =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly SUPER_BELL =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly SUPER_HAMMER =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new UnusedBigMushroomEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new UnusedBigMushroomEntityImages.Null()

    public static readonly CANNON_BOX =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new UnusedBigMushroomEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new UnusedBigMushroomEntityImages.Null()

    public static readonly GOOMBA_MASK =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly BULLET_BILL_MASK =                              new UnusedBigMushroomEntityImages.Null()

    public static readonly RED_POW_BOX =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly SUPER_STAR =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly ONE_UP_MUSHROOM =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly ROTTEN_MUSHROOM =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly SHOE_GOOMBA =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly SHOE =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly STILETTO_GOOMBA =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly STILETTO =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly YOSHI_EGG =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly YOSHI =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new UnusedBigMushroomEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new UnusedBigMushroomEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new UnusedBigMushroomEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new UnusedBigMushroomEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_YOSHI =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new UnusedBigMushroomEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new UnusedBigMushroomEntityImages.Existant('Goomba', 'Kuribo D', 'damage.0', 'swim.0', 'swim.1', 'walk.0', 'walk.1', 'kutsu',)
    public static readonly GALOOMBA =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly GOOMBRAT =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly GOOMBUD =                                       new UnusedBigMushroomEntityImages.Null()

    public static readonly GREEN_KOOPA_TROOPA =                            new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_KOOPA_TROOPA =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly GREEN_BEACH_KOOPA =                             new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_KOOPA_SHELL =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly DRY_BONES =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly PARABONES =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new UnusedBigMushroomEntityImages.Null()
    public static readonly DRY_BONES_SHELL =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly BUZZY_BEETLE =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly PARA_BEETLE =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly SPINY =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly WINGED_SPINY =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new UnusedBigMushroomEntityImages.Null()
    public static readonly SPINY_EGG =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly SPINY_SHELL =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly SPIKE_TOP =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly WINGED_SPIKE_TOP =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new UnusedBigMushroomEntityImages.Null()
    public static readonly FAST_WINGED_SPIKE_TOP =                         new UnusedBigMushroomEntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly SPINY_SKIPSQUEAK =                              new UnusedBigMushroomEntityImages.Null()

    public static readonly ANT_TROOPER =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly HORNED_ANT_TROOPER =                            new UnusedBigMushroomEntityImages.Null()

    public static readonly STINGBY =                                       new UnusedBigMushroomEntityImages.Null()

    public static readonly GREEN_CHEEP_CHEEP =                             new UnusedBigMushroomEntityImages.Null()
    public static readonly BLURPS =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly DEEP_CHEEP =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_CHEEP_CHEEP =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly FISH_BONE =                                     new UnusedBigMushroomEntityImages.Null()

    public static readonly BLOOPER =                                       new UnusedBigMushroomEntityImages.Null()
    public static readonly BLOOPER_NANNY =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new UnusedBigMushroomEntityImages.Null()

    public static readonly PORCUPUFFER =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly WIGGLER =                                       new UnusedBigMushroomEntityImages.Null()
    public static readonly ANGRY_WIGGLER =                                 new UnusedBigMushroomEntityImages.Null()

    public static readonly PIRANHA_PLANT =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly JUMPING_PIRANHA_PLANT =                         new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_PIRANHA_PLANT =                            new UnusedBigMushroomEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new UnusedBigMushroomEntityImages.Null()
    public static readonly MUNCHER =                                       new UnusedBigMushroomEntityImages.Null()
    public static readonly PIRANHA_CREEPER =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly CHAIN_CHOMP =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly UNCHAINED_CHOMP =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly CHAIN_CHOMP_STUMP =                             new UnusedBigMushroomEntityImages.Null()

    public static readonly SPIKE =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly SPIKE_BALL =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly SNOWBALL =                                      new UnusedBigMushroomEntityImages.Null()

    public static readonly LAKITU =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly LAKITU_CLOUD =                                  new UnusedBigMushroomEntityImages.Null()

    public static readonly BOO =                                           new UnusedBigMushroomEntityImages.Null()
    public static readonly STRETCH =                                       new UnusedBigMushroomEntityImages.Existant('Stretch', 'Necchi', 'wait.0', 'wait.2', 'out.4',)
    public static readonly BOO_BUDDIES =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly PEEPA =                                         new UnusedBigMushroomEntityImages.Null()

    public static readonly BOB_OMB =                                       new UnusedBigMushroomEntityImages.Null()
    public static readonly LIT_BOB_OMB =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly POKEY =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly SNOW_POKEY =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly THWOMP =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly SIDEWAYS_THWOMP =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly ROCKY_WRENCH =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new UnusedBigMushroomEntityImages.Null()

    public static readonly MAGIKOOPA =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly MAGIKOOPA_PROJECTILE =                          new UnusedBigMushroomEntityImages.Null()

    public static readonly HAMMER_BRO =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly SLEDGE_BRO =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_BRO =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO =                                new UnusedBigMushroomEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new UnusedBigMushroomEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly MECHAKOOPA =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly BLASTA_MECHAKOOPA =                             new UnusedBigMushroomEntityImages.Null()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new UnusedBigMushroomEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new UnusedBigMushroomEntityImages.Null()

    public static readonly CHARVAARGH =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly BULLY =                                         new UnusedBigMushroomEntityImages.Null()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new UnusedBigMushroomEntityImages.Null()
    public static readonly BULLET_BILL =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly BULL_EYE_BLASTER =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly BULL_EYE_BILL =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly BULL_EYE_BANZAI =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly CAT_BANZAI_BILL =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly CANNON =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly CANNONBALL =                                    new UnusedBigMushroomEntityImages.Existant('Cannonball', 'SenkanHoudai D', 'senkan_houdai_ball',)
    public static readonly RED_CANNON =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_CANNONBALL =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly BURNER =                                        new UnusedBigMushroomEntityImages.Null()

    public static readonly FIRE_BAR =                                      new UnusedBigMushroomEntityImages.Null()

    public static readonly SKEWER =                                        new UnusedBigMushroomEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR =                               new UnusedBigMushroomEntityImages.Existant('Koopa Clown Car', 'KoopaClown', 'wait.4', 'wait.5', 'wait.6', 'wait.7', 'anger.4', 'anger.5', 'anger.6', 'anger.7', 'blink.4', 'blink.5', 'blink.6', 'blink.7', 'weep.4', 'weep.5', 'weep.6', 'weep.7', 'iron_ball.1', 'tear.1',)
    public static readonly JUNIOR_CLOWN_CAR =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new UnusedBigMushroomEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new UnusedBigMushroomEntityImages.Null()
    public static readonly CAR =                                           new UnusedBigMushroomEntityImages.Null()

    public static readonly GRINDER =                                       new UnusedBigMushroomEntityImages.Null()

    public static readonly ANGRY_SUN =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly MOON =                                          new UnusedBigMushroomEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new UnusedBigMushroomEntityImages.Existant('Bowser', 'Koopa', 'fire.1',)
    public static readonly MEOWSER =                                       new UnusedBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new UnusedBigMushroomEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new UnusedBigMushroomEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_BOWSER =                     new UnusedBigMushroomEntityImages.Null()

    public static readonly BOWSER_JR =                                     new UnusedBigMushroomEntityImages.Existant('Bowser Jr.', 'KoopaJr', 'fire.1',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new UnusedBigMushroomEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly POM_POM =                                       new UnusedBigMushroomEntityImages.Null()
    public static readonly POM_POM_CLONE =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new UnusedBigMushroomEntityImages.Null()

    public static readonly LARRY =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly LARRY_WAND =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly LARRY_PROJECTILE =                              new UnusedBigMushroomEntityImages.Null()

    public static readonly IGGY =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly IGGY_WAND =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly IGGY_PROJECTILE =                               new UnusedBigMushroomEntityImages.Null()

    public static readonly WENDY =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly WENDY_WAND =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new UnusedBigMushroomEntityImages.Null()
    public static readonly WENDY_PROJECTILE =                              new UnusedBigMushroomEntityImages.Null()

    public static readonly LEMMY =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly LEMMY_WAND =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new UnusedBigMushroomEntityImages.Null()
    public static readonly LEMMY_PROJECTILE =                              new UnusedBigMushroomEntityImages.Null()

    public static readonly ROY =                                           new UnusedBigMushroomEntityImages.Null()
    public static readonly ROY_WAND =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly ROY_PROJECTILE =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly MORTON =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly MORTON_WAND =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE =                      new UnusedBigMushroomEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE =                      new UnusedBigMushroomEntityImages.Null()

    public static readonly LUDWIG =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly LUDWIG_WAND =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE =                             new UnusedBigMushroomEntityImages.Null()

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new UnusedBigMushroomEntityImages.Null()

    public static readonly SWINGING_CLAW =                                 new UnusedBigMushroomEntityImages.Null()

    public static readonly TWISTER =                                       new UnusedBigMushroomEntityImages.Null()

    public static readonly ONE_WAY_WALL =                                  new UnusedBigMushroomEntityImages.Null()

    public static readonly TRACK =                                         new UnusedBigMushroomEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()

    public static readonly VINE =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly TREE =                                          new UnusedBigMushroomEntityImages.Null()

    public static readonly STARTING_ARROW =                                new UnusedBigMushroomEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly CHECKPOINT_FLAG =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly GOAL_POLE =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new UnusedBigMushroomEntityImages.Null()
    public static readonly GIANT_GATE =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly CASTLE =                                        new UnusedBigMushroomEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new UnusedBigMushroomEntityImages.Null()
    public static readonly AXE =                                           new UnusedBigMushroomEntityImages.Null()

    public static readonly DASH_BLOCK =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly SNAKE_BLOCK =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly FAST_SNAKE_BLOCK =                              new UnusedBigMushroomEntityImages.Null()

    public static readonly CONVEYOR_BELT =                                 new UnusedBigMushroomEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT =                            new UnusedBigMushroomEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE =                           new UnusedBigMushroomEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE =                             new UnusedBigMushroomEntityImages.Null()

    public static readonly LIFT =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly FLIMSY_LIFT =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly CLOUD_LIFT =                                    new UnusedBigMushroomEntityImages.Null()

    public static readonly SEESAW =                                        new UnusedBigMushroomEntityImages.Null()

    public static readonly LAVA_LIFT =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly FAST_LAVA_LIFT =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly CRATE =                                         new UnusedBigMushroomEntityImages.Null()

    public static readonly KEY =                                           new UnusedBigMushroomEntityImages.Null()
    public static readonly CURSED_KEY =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly PHANTO =                                        new UnusedBigMushroomEntityImages.Null()

    public static readonly TRAMPOLINE =                                    new UnusedBigMushroomEntityImages.Null()
    public static readonly SIDEWAYS_TRAMPOLINE =                           new UnusedBigMushroomEntityImages.Null()
    public static readonly HOP_CHOPS =                                     new UnusedBigMushroomEntityImages.Null()

    public static readonly POW_BLOCK =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly RED_POW_BLOCK =                                 new UnusedBigMushroomEntityImages.Null()

    public static readonly P_SWITCH =                                      new UnusedBigMushroomEntityImages.Null()

    public static readonly STONE =                                         new UnusedBigMushroomEntityImages.Null()

    public static readonly WARP_DOOR =                                     new UnusedBigMushroomEntityImages.Null()
    public static readonly P_WARP_DOOR =                                   new UnusedBigMushroomEntityImages.Null()
    public static readonly KEY_DOOR =                                      new UnusedBigMushroomEntityImages.Null()

    public static readonly WARP_BOX =                                      new UnusedBigMushroomEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY =                             new UnusedBigMushroomEntityImages.Null()

    public static readonly WING =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly PARACHUTE =                                     new UnusedBigMushroomEntityImages.Null()

    public static readonly TOAD =                                          new UnusedBigMushroomEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new UnusedBigMushroomEntityImages.Null()

    public static readonly BUBBLE =                                        new UnusedBigMushroomEntityImages.Null()

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<UnusedBigMushroomEntityImages, typeof UnusedBigMushroomEntityImages, Entities, typeof Entities>
        = class CompanionEnum_UnusedBigMushroomEntityImages
        extends CompanionEnumWithParent<UnusedBigMushroomEntityImages, typeof UnusedBigMushroomEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_UnusedBigMushroomEntityImages

        private constructor() {
            super(UnusedBigMushroomEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_UnusedBigMushroomEntityImages()
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

    public abstract get image(): UnusedImage_BigMushroom

    //endregion -------------------- Getter methods --------------------

}

