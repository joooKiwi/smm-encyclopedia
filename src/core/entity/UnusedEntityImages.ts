import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {Array}                              from '@joookiwi/type'
import {forEachByArray}                          from '@joookiwi/collection'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {UnusedImageFile}                      from 'core/entity/file/EntityImageFile'
import type {UnusedImage_Regular}                  from 'core/entity/images/unused/UnusedImage_Regular'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}                     from 'core/entity/Entities'
import {unusedImage}                  from 'core/entity/file/fileCreator'
import {EmptyUnusedImage_Regular}     from 'core/entity/images/unused/EmptyUnusedImage_Regular'
import {UnusedImage_RegularContainer} from 'core/entity/images/unused/UnusedImage_Regular.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'
import {join}                         from 'util/utilitiesMethods'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW

/**
 * An {@link Entities} class made to hold a {@link UnusedImage_Regular}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class UnusedEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<UnusedImage_Regular> {

    //region -------------------- Sub class --------------------

    /**
     * A subclass of an {@link UnusedEntityImages} to hold
     * a non-existant {@link UnusedImage_Regular} ({@link EmptyUnusedImage_Regular})
     */
    private static readonly Null = class NullEditorEntityImages extends UnusedEntityImages {

        readonly #regularImage

        public constructor() {
            super()
            this.#regularImage = EmptyUnusedImage_Regular.get
        }

        public override get image(): EmptyUnusedImage_Regular { return this.#regularImage }

    }

    /** An abstract subclass of an {@link UnusedEntityImages} to hold a specific {@link PossibleEnglishName} */
    private static readonly Existant = (() => {
        abstract class ExistantUnusedEntityImages<const NAME extends PossibleEnglishName, > extends UnusedEntityImages {

            readonly #englishName

            protected constructor(englishName: NAME,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME { return this.#englishName }

        }

        return ExistantUnusedEntityImages
    })()


    /**
     * A subclass of an {@link UnusedEntityImages} to hold
     * an existant {@link UnusedImage_Regular} in only 1 {@link GameStyles}
     * and a non-existant {@link UnusedImage_BigMushroom} ({@link EmptyUnusedImage_BigMushroom})
     */
    private static readonly ExistantIn1GameStyle = class ExistantIn1GameStyleUnusedEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends UnusedEntityImages.Existant<NAME> {

        #image?: UnusedImage_Regular<UnusedImageFile<FOLDER_NAME, FILE_NAME, NAME>>
        readonly #gameStyle
        readonly #folderName
        readonly #fileNames

        public constructor(englishName: NAME, gameStyle: GameStyles, folderName: FOLDER_NAME, ...fileNames: Array<FILE_NAME>) {
            super(englishName,)
            this.#gameStyle = gameStyle
            this.#folderName = folderName
            this.#fileNames = fileNames
        }

        public override get image(): UnusedImage_Regular<UnusedImageFile<FOLDER_NAME, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const gameStyle = this.#gameStyle
            const folderName = this.#folderName
            return this.#image = new UnusedImage_RegularContainer(this.#fileNames.map(it => [gameStyle, unusedImage(this, folderName, it,),] as const,),)
        }

    }

    /**
     * A subclass of an {@link UnusedEntityImages} to hold
     * an existant {@link UnusedImage_Regular} in only 2 {@link GameStyles}
     * and a non-existant {@link UnusedImage_BigMushroom} ({@link EmptyUnusedImage_BigMushroom})
     */
    private static readonly ExistantIn2GameStyle = class ExistantIn2GameStyleUnusedEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME_1 extends string,
        const FILE_NAME_1 extends string,
        const FOLDER_NAME_2 extends string,
        const FILE_NAME_2 extends string, >
        extends UnusedEntityImages.Existant<NAME> {

        #image?: UnusedImage_Regular<| UnusedImageFile<FOLDER_NAME_1, FILE_NAME_1, NAME> | UnusedImageFile<FOLDER_NAME_2, FILE_NAME_2, NAME>>
        readonly #gameStyle1
        readonly #folderName1
        readonly #fileNames1
        readonly #gameStyle2
        readonly #folderName2
        readonly #fileNames2

        public constructor(englishName: NAME,
                           gameStyle1: GameStyles, folderName1: FOLDER_NAME_1, fileNames1: Array<FILE_NAME_1>,
                           gameStyle2: GameStyles, folderName2: FOLDER_NAME_2, fileNames2: Array<FILE_NAME_2>,) {
            super(englishName,)
            this.#gameStyle1 = gameStyle1
            this.#folderName1 = folderName1
            this.#fileNames1 = fileNames1
            this.#gameStyle2 = gameStyle2
            this.#folderName2 = folderName2
            this.#fileNames2 = fileNames2
        }

        public override get image(): UnusedImage_Regular<| UnusedImageFile<FOLDER_NAME_1, FILE_NAME_1, NAME> | UnusedImageFile<FOLDER_NAME_2, FILE_NAME_2, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const gameStyle1 = this.#gameStyle1
            const gameStyle2 = this.#gameStyle2
            const folderName1 = this.#folderName1
            const folderName2 = this.#folderName2

            return this.#image = new UnusedImage_RegularContainer(join<readonly [GameStyles, | UnusedImageFile<FOLDER_NAME_1, FILE_NAME_1, NAME> | UnusedImageFile<FOLDER_NAME_2, FILE_NAME_2, NAME>,]>(
                this.#fileNames1.map(it => [gameStyle1, unusedImage(this, folderName1, it,),] as const,),
                this.#fileNames2.map(it => [gameStyle2, unusedImage(this, folderName2, it,),] as const,),
            ),)
        }

    }

    /**
     * A subclass of an {@link UnusedEntityImages} to hold
     * an existant {@link UnusedImage_Regular} in only 3 {@link GameStyles}
     * and a non-existant {@link UnusedImage_BigMushroom} ({@link EmptyUnusedImage_BigMushroom})
     */
    private static readonly ExistantIn3GameStyle = class ExistantIn3GameStyleUnusedEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME_1 extends string,
        const FILE_NAME_1 extends string,
        const FOLDER_NAME_2 extends string,
        const FILE_NAME_2 extends string,
        const FOLDER_NAME_3 extends string,
        const FILE_NAME_3 extends string, >
        extends UnusedEntityImages.Existant<NAME> {

        #image?: UnusedImage_Regular<| UnusedImageFile<FOLDER_NAME_1, FILE_NAME_1, NAME> | UnusedImageFile<FOLDER_NAME_2, FILE_NAME_2, NAME> | UnusedImageFile<FOLDER_NAME_3, FILE_NAME_3, NAME>>
        readonly #gameStyle1
        readonly #folderName1
        readonly #fileNames1
        readonly #gameStyle2
        readonly #folderName2
        readonly #fileNames2
        readonly #gameStyle3
        readonly #folderName3
        readonly #fileNames3

        public constructor(englishName: NAME,
                           gameStyle1: GameStyles, folderName1: FOLDER_NAME_1, fileNames1: Array<FILE_NAME_1>,
                           gameStyle2: GameStyles, folderName2: FOLDER_NAME_2, fileNames2: Array<FILE_NAME_2>,
                           gameStyle3: GameStyles, folderName3: FOLDER_NAME_3, fileNames3: Array<FILE_NAME_3>,) {
            super(englishName,)
            this.#gameStyle1 = gameStyle1
            this.#folderName1 = folderName1
            this.#fileNames1 = fileNames1
            this.#gameStyle2 = gameStyle2
            this.#folderName2 = folderName2
            this.#fileNames2 = fileNames2
            this.#gameStyle3 = gameStyle3
            this.#folderName3 = folderName3
            this.#fileNames3 = fileNames3
        }

        public override get image(): UnusedImage_Regular<| UnusedImageFile<FOLDER_NAME_1, FILE_NAME_1, NAME> | UnusedImageFile<FOLDER_NAME_2, FILE_NAME_2, NAME> | UnusedImageFile<FOLDER_NAME_3, FILE_NAME_3, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileNames1 = this.#fileNames1
            const fileNames2 = this.#fileNames2
            const fileNames3 = this.#fileNames3
            const images = new Array<readonly [GameStyles, | UnusedImageFile<FOLDER_NAME_1, FILE_NAME_1, NAME> | UnusedImageFile<FOLDER_NAME_2, FILE_NAME_2, NAME> | UnusedImageFile<FOLDER_NAME_3, FILE_NAME_3, NAME>,]>(
                fileNames1.length + fileNames2.length + fileNames3.length,)

            let index = -1

            const gameStyle1 = this.#gameStyle1
            const folderName1 = this.#folderName1
            forEachByArray(fileNames1, it => images[++index] = [gameStyle1, unusedImage(this, folderName1, it,),],)

            const gameStyle2 = this.#gameStyle2
            const folderName2 = this.#folderName2
            forEachByArray(fileNames2, it => images[++index] = [gameStyle2, unusedImage(this, folderName2, it,),],)

            const folderName3 = this.#folderName3
            const gameStyle3 = this.#gameStyle3
            forEachByArray(fileNames3, it => images[++index] = [gameStyle3, unusedImage(this, folderName3, it,),],)

            return new UnusedImage_RegularContainer(images,)
        }

    }

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
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

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

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new UnusedEntityImages.Null()
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
    public static readonly STRETCH =                                       new UnusedEntityImages.ExistantIn3GameStyle('Stretch', SMB, 'M1 - Enemy - Necchi', ['wait.0', 'out.4',], SMB3, 'M3 - Enemy - Necchi', ['wait.0', 'out.4',], SMW, 'MW - Enemy - Necchi', ['wait.0', 'out.4',],)
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

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new UnusedEntityImages.Null()
    public static readonly BULLET_BILL =                                   new UnusedEntityImages.Null()
    public static readonly BULL_EYE_BLASTER =                              new UnusedEntityImages.Null()
    public static readonly BULL_EYE_BILL =                                 new UnusedEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new UnusedEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new UnusedEntityImages.Null()
    public static readonly BULL_EYE_BANZAI =                               new UnusedEntityImages.Null()
    public static readonly CAT_BANZAI_BILL =                               new UnusedEntityImages.Null()

    public static readonly CANNON =                                        new UnusedEntityImages.Null()
    public static readonly CANNONBALL =                                    new UnusedEntityImages.Null()
    public static readonly RED_CANNON =                                    new UnusedEntityImages.Null()
    public static readonly RED_CANNONBALL =                                new UnusedEntityImages.Null()

    public static readonly BURNER =                                        new UnusedEntityImages.Null()

    public static readonly FIRE_BAR =                                      new UnusedEntityImages.Null()

    public static readonly SKEWER =                                        new UnusedEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR =                               new UnusedEntityImages.ExistantIn1GameStyle('Koopa Clown Car', SMW, 'MW - Enemy - KoopaClown', 'weep.4', 'weep.5', 'weep.6', 'weep.7',)
    public static readonly JUNIOR_CLOWN_CAR =                              new UnusedEntityImages.Null()
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new UnusedEntityImages.Null()
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new UnusedEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new UnusedEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new UnusedEntityImages.Null()
    public static readonly CAR =                                           new UnusedEntityImages.Null()

    public static readonly GRINDER =                                       new UnusedEntityImages.Null()

    public static readonly ANGRY_SUN =                                     new UnusedEntityImages.Null()
    public static readonly MOON =                                          new UnusedEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new UnusedEntityImages.Null()
    public static readonly MEOWSER =                                       new UnusedEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new UnusedEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new UnusedEntityImages.Null()

    public static readonly BOWSER_JR =                                     new UnusedEntityImages.Null()
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
    public static readonly WENDY_PROJECTILE =                              new UnusedEntityImages.ExistantIn3GameStyle('(Wendy\'s projectile)', SMB, 'M1 - Enemy - Wendy', ['effect.0', 'effect.1', 'effect.2',], SMB3, 'M3 - Enemy - Wendy', ['effect.0', 'effect.1', 'effect.2',], SMW, 'MW - Enemy - Wendy', ['effect.0', 'effect.1', 'effect.2',],)

    public static readonly LEMMY =                                         new UnusedEntityImages.Null()
    public static readonly LEMMY_WAND =                                    new UnusedEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new UnusedEntityImages.Null()
    public static readonly LEMMY_PROJECTILE =                              new UnusedEntityImages.ExistantIn1GameStyle('(Lemmy\'s projectile)', SMB, 'M1 - Enemy - Lemmy', 'effect.1', 'effect.2',)

    public static readonly ROY =                                           new UnusedEntityImages.Null()
    public static readonly ROY_WAND =                                      new UnusedEntityImages.Null()
    public static readonly ROY_PROJECTILE =                                new UnusedEntityImages.Null()

    public static readonly MORTON =                                        new UnusedEntityImages.Null()
    public static readonly MORTON_WAND =                                   new UnusedEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE =                      new UnusedEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE =                      new UnusedEntityImages.ExistantIn1GameStyle('(Morton\'s Ground projectile)', SMB3, 'M3 - Enemy - Morton', 'fire.2',)

    public static readonly LUDWIG =                                        new UnusedEntityImages.Null()
    public static readonly LUDWIG_WAND =                                   new UnusedEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE =                             new UnusedEntityImages.Null()

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new UnusedEntityImages.Null()

    public static readonly SWINGING_CLAW =                                 new UnusedEntityImages.Null()

    public static readonly TWISTER =                                       new UnusedEntityImages.Null()

    public static readonly ONE_WAY_WALL =                                  new UnusedEntityImages.Null()

    public static readonly TRACK =                                         new UnusedEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new UnusedEntityImages.Null()

    public static readonly VINE =                                          new UnusedEntityImages.ExistantIn3GameStyle('Vine', SMB, 'M1 - Object Block - Tuta', ['wait.1',], SMB3,  'M3 - Object Block - Tuta', ['wait.2',], SMW, 'MW - Object Block - Tuta', ['wait.2',],)
    public static readonly TREE =                                          new UnusedEntityImages.Null()

    public static readonly STARTING_ARROW =                                new UnusedEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new UnusedEntityImages.Null()

    public static readonly CHECKPOINT_FLAG =                               new UnusedEntityImages.Null()
    public static readonly GOAL_POLE =                                     new UnusedEntityImages.ExistantIn1GameStyle('Goal Pole', SMB, 'M1 - Object - Goalpole', 'goalpole.1',)
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

    public static readonly P_SWITCH =                                      new UnusedEntityImages.ExistantIn2GameStyle('P Switch', SMB, 'M1 - Object - PSwitch', ['wait.0', 'wait.1', 'wait.2',], NSMBU, 'WU - Object - PSwitch', ['down_switch_hatena_Alb.000', 'down_switch_hatena_Alb.004',],)

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
        = class CompanionEnum_UnusedEntityImages
        extends CompanionEnumWithParent<UnusedEntityImages, typeof UnusedEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_UnusedEntityImages

        private constructor() {
            super(UnusedEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_UnusedEntityImages()
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

    public abstract get image(): UnusedImage_Regular

    //endregion -------------------- Getter methods --------------------

}
