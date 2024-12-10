import type {CollectionHolder}                   from '@joookiwi/collection'
import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {Array, EmptyString}                 from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithImage}                       from 'util/ClassWithImage'
import type {InGameSmm1ImageFile_BigMushroom}      from 'core/entity/file/EntityImageFile'
import type {InGameImage_BigMushroom}              from 'core/entity/images/inGame/InGameImage_BigMushroom'

import {Entities}                         from 'core/entity/Entities'
import {bigMushroomImage}                 from 'core/entity/file/fileCreator'
import {EmptyInGameImage_BigMushroom}     from 'core/entity/images/inGame/EmptyInGameImage_BigMushroom'
import {InGameImage_BigMushroomContainer} from 'core/entity/images/inGame/InGameImage_BigMushroom.container'
import {join}                             from 'util/utilitiesMethods'
import {ArrayAsCollection}                from 'util/collection/ArrayAsCollection'

/**
 * A {@link InGameBigMushroomEntityImages} class made to hold an {@link InGameImage_BigMushroom}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class InGameBigMushroomEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<InGameImage_BigMushroom> {

    //region -------------------- Sub class --------------------

    /**
     * A subclass of an {@link InGameBigMushroomEntityImages} to hold
     * a non-existant {@link InGameImage_BigMushroom} ({@link EmptyInGameImage_BigMushroom})
     */
    private static readonly Null = class Null_InGameBigMushroomEntityImages extends InGameBigMushroomEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyInGameImage_BigMushroom.get
        }

        public override get image(): EmptyInGameImage_BigMushroom { return this.#image }

    }

    /** An abstract subclass of an {@link InGameBigMushroomEntityImages} to hold a specific {@link PossibleEnglishName} and the fileNames */
    private static readonly Existant = (() => {
        abstract class Existant_InGameBigMushroomEntityImages<const NAME extends PossibleEnglishName,
            const FOLDER_NAME extends string,
            const FILE_NAME extends string, >
            extends InGameBigMushroomEntityImages {

            readonly #englishName
            #image?: InGameImage_BigMushroom<InGameSmm1ImageFile_BigMushroom<FOLDER_NAME, FILE_NAME, NAME>>

            public constructor(englishName: NAME, private readonly fileNames: Array<FILE_NAME>,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME {
                return this.#englishName
            }

            public get image(): InGameImage_BigMushroom<InGameSmm1ImageFile_BigMushroom<FOLDER_NAME, FILE_NAME, NAME>> {
                return this.#image ??= new InGameImage_BigMushroomContainer(this._createImageFiles(this.fileNames,),)
            }

            protected abstract _createImageFiles(fileNames: Array<FILE_NAME>,): CollectionHolder<InGameSmm1ImageFile_BigMushroom<FOLDER_NAME, FILE_NAME, NAME>>

        }

        return Existant_InGameBigMushroomEntityImages
    })()


    /** A subclass of an {@link InGameBigMushroomEntityImages} to hold an existant {@link InGameSmm1ImageFile_BigMushroom} stored in only 1 folder */
    private static readonly ExistantIn1Folder = class ExistantIn1Folder_InGameBigMushroomEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameBigMushroomEntityImages.Existant<NAME, FOLDER_NAME, FILE_NAME> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, ...fileNames: Array<FILE_NAME>) {
            super(englishName, fileNames,)
        }

        protected override _createImageFiles(fileNames: Array<FILE_NAME>,) {
            const folderName = this.folderName
            return new ArrayAsCollection(fileNames,).map(it => bigMushroomImage(this, folderName, it,),)
        }

    }

    /** A subclass of an {@link InGameBigMushroomEntityImages} to hold an existant {@link InGameSmm1ImageFile_BigMushroom} stored in 2 different folder */
    private static readonly ExistantIn2Folder = class ExistantIn2Folder_InGameBigMushroomEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameBigMushroomEntityImages.Existant<NAME, `${FOLDER_NAME}${| EmptyString | ' D'}`, FILE_NAME> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, ...fileNames: Array<FILE_NAME>) {
            super(englishName, fileNames,)
        }

        protected override _createImageFiles(fileNames: Array<FILE_NAME>,) {
            const folderName = this.folderName
            const folderNameAlt = `${folderName} D` as const
            return new ArrayAsCollection(join<InGameSmm1ImageFile_BigMushroom<`${FOLDER_NAME}${| EmptyString | ' D'}`, FILE_NAME, NAME>>(
                new ArrayAsCollection(fileNames).map(it => bigMushroomImage(this, folderName, it,),),
                new ArrayAsCollection(fileNames).map(it => bigMushroomImage(this, folderNameAlt, it,),),
            ),)
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new InGameBigMushroomEntityImages.Null()
    public static readonly START_GROUND =                                  new InGameBigMushroomEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly GENTLE_SLOPE =                                  new InGameBigMushroomEntityImages.Null()

    public static readonly START_BLOCK =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly OCCLUDE_BLOCK =                                 new InGameBigMushroomEntityImages.Null()

    public static readonly WATER =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly LAVA =                                          new InGameBigMushroomEntityImages.Null()
    public static readonly POISON =                                        new InGameBigMushroomEntityImages.Null()

    public static readonly PIPE =                                          new InGameBigMushroomEntityImages.Null()
    public static readonly CLEAR_PIPE =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly SPIKE_TRAP =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly JELECTRO =                                      new InGameBigMushroomEntityImages.Null()
    public static readonly SEA_URCHIN =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly SPIKE_BLOCK =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM =                             new InGameBigMushroomEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM =                            new InGameBigMushroomEntityImages.Null()
    public static readonly BRIDGE =                                        new InGameBigMushroomEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly CRISTAL_BLOCK =                                 new InGameBigMushroomEntityImages.Null()
    public static readonly ROTATING_BLOCK =                                new InGameBigMushroomEntityImages.Null()

    public static readonly HARD_BLOCK =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly ROCK_BLOCK =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK =                           new InGameBigMushroomEntityImages.Null()
    public static readonly HIDDEN_BLOCK =                                  new InGameBigMushroomEntityImages.Null()
    public static readonly EMPTY_BLOCK =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK =                        new InGameBigMushroomEntityImages.Null()

    public static readonly NOTE_BLOCK =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly MUSIC_BLOCK =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly DONUT_BLOCK =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly CLOUD_BLOCK =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly ON_OFF_SWITCH =                                 new InGameBigMushroomEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK =                             new InGameBigMushroomEntityImages.Null()

    public static readonly P_BLOCK =                                       new InGameBigMushroomEntityImages.Null()

    public static readonly BLINKING_BLOCK =                                new InGameBigMushroomEntityImages.Null()

    public static readonly ICE_BLOCK =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly ICICLE =                                        new InGameBigMushroomEntityImages.Null()

    public static readonly COIN =                                          new InGameBigMushroomEntityImages.Null()
    public static readonly FROZEN_COIN =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly TEN_COIN =                                      new InGameBigMushroomEntityImages.Null()
    public static readonly THIRTY_COIN =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly FIFTY_COIN =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly PINK_COIN =                                     new InGameBigMushroomEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new InGameBigMushroomEntityImages.Null()

    public static readonly FIRE_FLOWER =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new InGameBigMushroomEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new InGameBigMushroomEntityImages.Null()
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new InGameBigMushroomEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM =                              new InGameBigMushroomEntityImages.Null()
    public static readonly WEIRD_MUSHROOM =                                new InGameBigMushroomEntityImages.Null()

    public static readonly MASTER_SWORD =                                  new InGameBigMushroomEntityImages.Null()
    public static readonly BOMB_THROWN_BY_A_LINK =                         new InGameBigMushroomEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK =                        new InGameBigMushroomEntityImages.Null()

    public static readonly BIG_MUSHROOM =                                  new InGameBigMushroomEntityImages.Null()
    public static readonly BIG_MUSHROOM_CLASSIC =                          new InGameBigMushroomEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN =                           new InGameBigMushroomEntityImages.Null()

    public static readonly SMB2_MUSHROOM =                                 new InGameBigMushroomEntityImages.Null()

    public static readonly SUPER_LEAF =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly FROG_SUIT =                                     new InGameBigMushroomEntityImages.Null()

    public static readonly CAPE_FEATHER =                                  new InGameBigMushroomEntityImages.Null()

    public static readonly POWER_BALLOON =                                 new InGameBigMushroomEntityImages.Null()

    public static readonly PROPELLER_MUSHROOM =                            new InGameBigMushroomEntityImages.Null()

    public static readonly SUPER_ACORN =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly SUPER_BELL =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly SUPER_HAMMER =                                  new InGameBigMushroomEntityImages.Null()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new InGameBigMushroomEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new InGameBigMushroomEntityImages.Null()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new InGameBigMushroomEntityImages.Null()

    public static readonly CANNON_BOX =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new InGameBigMushroomEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new InGameBigMushroomEntityImages.Null()

    public static readonly GOOMBA_MASK =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly BULLET_BILL_MASK =                              new InGameBigMushroomEntityImages.Null()

    public static readonly RED_POW_BOX =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly SUPER_STAR =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly ONE_UP_MUSHROOM =                               new InGameBigMushroomEntityImages.Null()
    public static readonly ROTTEN_MUSHROOM =                               new InGameBigMushroomEntityImages.Null()

    public static readonly SHOE_GOOMBA =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly SHOE =                                          new InGameBigMushroomEntityImages.ExistantIn1Folder('Shoe', 'KutsuKuriboA', 'wait.0', 'wait.1',)
    public static readonly STILETTO_GOOMBA =                               new InGameBigMushroomEntityImages.Null()
    public static readonly STILETTO =                                      new InGameBigMushroomEntityImages.ExistantIn1Folder('Stiletto', 'KutsuKuriboB', 'wait.0', 'wait.1',)
    public static readonly YOSHI_EGG =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly YOSHI =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new InGameBigMushroomEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new InGameBigMushroomEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new InGameBigMushroomEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new InGameBigMushroomEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new InGameBigMushroomEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new InGameBigMushroomEntityImages.Null()
    public static readonly RED_YOSHI =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new InGameBigMushroomEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new InGameBigMushroomEntityImages.ExistantIn2Folder('Goomba', 'Kuribo', 'damage.0', 'kutsu.0', 'swim.0', 'swim.1', 'walk.0', 'walk.1',)
    public static readonly GALOOMBA =                                      new InGameBigMushroomEntityImages.Null()
    public static readonly GOOMBRAT =                                      new InGameBigMushroomEntityImages.Null()
    public static readonly GOOMBUD =                                       new InGameBigMushroomEntityImages.Null()

    public static readonly GREEN_KOOPA_TROOPA =                            new InGameBigMushroomEntityImages.ExistantIn1Folder('Green Koopa Troopa', 'NokonokoA', 'revival.0', 'revival.1', 'revival.2', 'shell.0', 'shell.1', 'shell.2', 'shell.3', 'walk.0', 'walk.1',)
    public static readonly RED_KOOPA_TROOPA =                              new InGameBigMushroomEntityImages.ExistantIn1Folder('Red Koopa Troopa', 'NokonokoB', 'revival.0', 'revival.1', 'revival.2', 'shell.0', 'shell.1', 'shell.2', 'shell.3', 'walk.0', 'walk.1',)
    public static readonly GREEN_BEACH_KOOPA =                             new InGameBigMushroomEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new InGameBigMushroomEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new InGameBigMushroomEntityImages.Null()
    public static readonly RED_KOOPA_SHELL =                               new InGameBigMushroomEntityImages.Null()

    public static readonly DRY_BONES =                                     new InGameBigMushroomEntityImages.ExistantIn1Folder('Dry Bones', 'Karon', 'break_modelA', 'break_modelB', 'break_modelC', 'damage.0', 'damage.1', 'revival.0', 'revival.1', 'shake.0', 'shake.1', 'walk.0', 'walk.1',)
    public static readonly PARABONES =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new InGameBigMushroomEntityImages.Null()
    public static readonly DRY_BONES_SHELL =                               new InGameBigMushroomEntityImages.Null()

    public static readonly BUZZY_BEETLE =                                  new InGameBigMushroomEntityImages.ExistantIn2Folder('Buzzy Beetle', 'Met', 'shell.0', 'shell.1', 'shell.2', 'shell.3', 'walk.0', 'walk.1',)
    public static readonly PARA_BEETLE =                                   new InGameBigMushroomEntityImages.ExistantIn2Folder('Para-Beetle', 'Met', 'fly.0', 'fly.1', )
    public static readonly BUZZY_SHELL =                                   new InGameBigMushroomEntityImages.ExistantIn2Folder('Buzzy Shell', 'Met', 'shellkara.0', 'shellkara.1', 'shellkara.2', 'shellkara.3',)

    public static readonly SPINY =                                         new InGameBigMushroomEntityImages.ExistantIn1Folder('Spiny', 'Togezo', 'shell.0', 'shell.1', 'shell.2', 'shell.3', 'walk.0', 'walk.1',)
    public static readonly WINGED_SPINY =                                  new InGameBigMushroomEntityImages.ExistantIn1Folder('Winged Spiny', 'Togezo', 'fly.0', 'fly.1',)
    public static readonly WINGED_SPINY_PROJECTILE =                       new InGameBigMushroomEntityImages.ExistantIn1Folder('(Winged Spiny’s projectile)', 'toge.0',)
    public static readonly SPINY_EGG =                                     new InGameBigMushroomEntityImages.ExistantIn1Folder('Spiny Egg', 'Paipo', 'wait.0', 'wait.1',)
    public static readonly SPINY_SHELL =                                   new InGameBigMushroomEntityImages.ExistantIn1Folder('Spiny Shell', 'Togezo', 'shellkara.0', 'shellkara.1', 'shellkara.2', 'shellkara.3',)

    public static readonly SPIKE_TOP =                                     new InGameBigMushroomEntityImages.ExistantIn1Folder('Spike Top', 'TogemetA', 'walk.0', 'walk.1',)
    public static readonly WINGED_SPIKE_TOP =                              new InGameBigMushroomEntityImages.ExistantIn1Folder('Winged Spike Top', 'TogemetA', 'fly.0', 'fly.1',)
    public static readonly FAST_SPIKE_TOP =                                new InGameBigMushroomEntityImages.ExistantIn1Folder('Fast Spike Top', 'TogemetB', 'walk.0', 'walk.1',)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new InGameBigMushroomEntityImages.ExistantIn1Folder('Fast Winged Spike Top', 'TogemetB', 'fly.0', 'fly.1',)

    public static readonly SKIPSQUEAK =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly SPINY_SKIPSQUEAK =                              new InGameBigMushroomEntityImages.Null()

    public static readonly ANT_TROOPER =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly HORNED_ANT_TROOPER =                            new InGameBigMushroomEntityImages.Null()

    public static readonly STINGBY =                                       new InGameBigMushroomEntityImages.Null()

    public static readonly GREEN_CHEEP_CHEEP =                             new InGameBigMushroomEntityImages.ExistantIn1Folder('Green Cheep Cheep', 'PukupukuA', 'wait.0', 'wait.1',)
    public static readonly BLURPS =                                        new InGameBigMushroomEntityImages.Null()
    public static readonly DEEP_CHEEP =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly RED_CHEEP_CHEEP =                               new InGameBigMushroomEntityImages.ExistantIn1Folder('Red Cheep Cheep', 'PukupukuB', 'wait.0', 'wait.1',)
    public static readonly FISH_BONE =                                     new InGameBigMushroomEntityImages.ExistantIn1Folder('Fish Bone', 'Fishbone', 'attack.0', 'attack.1', 'break_modelA', 'break_modelB', 'break_modelC', 'swim.0', 'swim.1',)

    public static readonly BLOOPER =                                       new InGameBigMushroomEntityImages.ExistantIn1Folder('Blooper', 'Gesso', 'wait.0', 'wait.1',)
    public static readonly BLOOPER_NANNY =                                 new InGameBigMushroomEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new InGameBigMushroomEntityImages.ExistantIn1Folder('Baby Blooper', 'GessoMini', 'wait.0', 'wait.1',)

    public static readonly PORCUPUFFER =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly WIGGLER =                                       new InGameBigMushroomEntityImages.ExistantIn1Folder('Wiggler', 'Hanachan', 'head.0', 'fly.0', 'walk.0', 'walk.1',)
    public static readonly ANGRY_WIGGLER =                                 new InGameBigMushroomEntityImages.ExistantIn1Folder('Angry Wiggler', 'Hanachan', 'head_angry.0', 'fly_angry.0', 'walk_angry.0', 'walk_angry.1',)

    public static readonly PIRANHA_PLANT =                                 new InGameBigMushroomEntityImages.ExistantIn1Folder('Piranha Plant', 'Pakkun', 'wait.0', 'wait.1',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new InGameBigMushroomEntityImages.Null()
    public static readonly FIRE_PIRANHA_PLANT =                            new InGameBigMushroomEntityImages.ExistantIn1Folder('Fire Piranha Plant', 'FirePakkun', 'down.0', 'down.1', 'up.0', 'up.1',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new InGameBigMushroomEntityImages.Null()
    public static readonly MUNCHER =                                       new InGameBigMushroomEntityImages.ExistantIn2Folder('Muncher', 'BlackPakkun', 'wait.0', 'wait.1',)
    public static readonly PIRANHA_CREEPER =                               new InGameBigMushroomEntityImages.Null()

    public static readonly CHAIN_CHOMP =                                   new InGameBigMushroomEntityImages.ExistantIn2Folder('Chain Chomp', 'Wanwan', 'chain.0', 'wait.0', 'wait.1',)
    public static readonly UNCHAINED_CHOMP =                               new InGameBigMushroomEntityImages.Null()
    public static readonly CHAIN_CHOMP_STUMP =                             new InGameBigMushroomEntityImages.ExistantIn2Folder('Chain Chomp’s Stump', 'Wanwan', 'kui.0',)

    public static readonly SPIKE =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly SPIKE_BALL =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly SNOWBALL =                                      new InGameBigMushroomEntityImages.Null()

    public static readonly LAKITU =                                        new InGameBigMushroomEntityImages.ExistantIn1Folder('Lakitu', 'Jugem', 'throw.0', 'wait.0',)
    public static readonly LAKITU_CLOUD =                                  new InGameBigMushroomEntityImages.ExistantIn1Folder('Lakitu’s Cloud', 'JugemCloud', 'wait.0',)

    public static readonly BOO =                                           new InGameBigMushroomEntityImages.ExistantIn1Folder('Boo', 'Teresa', 'wait.0', 'walk.0',)
    public static readonly STRETCH =                                       new InGameBigMushroomEntityImages.ExistantIn1Folder('Stretch', 'Necchi', 'out.0', 'out.1', 'out.2', 'out.3', 'wait.0',)
    public static readonly BOO_BUDDIES =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly PEEPA =                                         new InGameBigMushroomEntityImages.Null()

    public static readonly BOB_OMB =                                       new InGameBigMushroomEntityImages.ExistantIn2Folder('Bob-omb', 'Bombhei', 'damage.0', 'fly.0', 'walk.0', 'walk.1',)
    public static readonly LIT_BOB_OMB =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly POKEY =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly SNOW_POKEY =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly THWOMP =                                        new InGameBigMushroomEntityImages.ExistantIn1Folder('Thwomp', 'Dossun', 'wait.0',)
    public static readonly SIDEWAYS_THWOMP =                               new InGameBigMushroomEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new InGameBigMushroomEntityImages.ExistantIn1Folder('Monty Mole', 'Choropoo', 'appear.0', 'walk.0', 'walk.1',)
    public static readonly ROCKY_WRENCH =                                  new InGameBigMushroomEntityImages.ExistantIn1Folder('Rocky Wrench', 'Poo', 'damage.0', 'damage.1', 'throw.0', 'throw.1', 'wait.0', 'wait2.0',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new InGameBigMushroomEntityImages.ExistantIn1Folder('Wrench thrown by a Rocky Wrench', 'Poo', 'hammer.0', 'hammer.1', 'hammer.2', 'hammer.3',)

    public static readonly MAGIKOOPA =                                     new InGameBigMushroomEntityImages.ExistantIn1Folder('Magikoopa', 'Kameck', 'throw.0', 'throw.1', 'wait.0', 'wait2.0', 'wait2.1',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new InGameBigMushroomEntityImages.ExistantIn1Folder('(Magikoopa’s projectile)', 'Kameck', 'effect.0', 'effect.1', 'effect.2', 'wing_wait.0', 'wing_wait.1',)

    public static readonly HAMMER_BRO =                                    new InGameBigMushroomEntityImages.ExistantIn1Folder('Hammer Bro', 'Bros', 'throw.0', 'throw.1', 'walk.0', 'walk.1',)
    public static readonly SLEDGE_BRO =                                    new InGameBigMushroomEntityImages.ExistantIn1Folder('Sledge Bro', 'BrosMega', 'throw.0', 'throw.1', 'walk.0', 'walk.1',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new InGameBigMushroomEntityImages.ExistantIn1Folder('Hammer thrown by a Hammer / Sledge Bro', 'Bros', 'hammer.0',)
    public static readonly FIRE_BRO =                                      new InGameBigMushroomEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO =                                new InGameBigMushroomEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new InGameBigMushroomEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new InGameBigMushroomEntityImages.ExistantIn1Folder('Lava Bubble', 'Bubble', 'wait.0',)

    public static readonly MECHAKOOPA =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly BLASTA_MECHAKOOPA =                             new InGameBigMushroomEntityImages.Null()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new InGameBigMushroomEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA =                              new InGameBigMushroomEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new InGameBigMushroomEntityImages.Null()

    public static readonly CHARVAARGH =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly BULLY =                                         new InGameBigMushroomEntityImages.Null()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new InGameBigMushroomEntityImages.ExistantIn2Folder('Bill Blaster', 'KillerHoudai', 'search.0', 'unit.0', 'unit_search.0', 'wait.0',)
    public static readonly BULLET_BILL =                                   new InGameBigMushroomEntityImages.ExistantIn2Folder('Bullet Bill', 'Killer', 'wait.0',)
    public static readonly BULL_EYE_BLASTER =                              new InGameBigMushroomEntityImages.ExistantIn2Folder('Bull’s-Eye Blaster', 'KillerHoudai', 'search.0', 'unit.0', 'unit_search.0', 'wait.0',)
    public static readonly BULL_EYE_BILL =                                 new InGameBigMushroomEntityImages.ExistantIn2Folder('Bull’s-Eye Bill', 'Killer', 'search.0',)
    public static readonly CAT_BULLET_BILL =                               new InGameBigMushroomEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly BULL_EYE_BANZAI =                               new InGameBigMushroomEntityImages.Null()
    public static readonly CAT_BANZAI_BILL =                               new InGameBigMushroomEntityImages.Null()

    public static readonly CANNON =                                        new InGameBigMushroomEntityImages.ExistantIn2Folder('Cannon', 'SenkanHoudai', 'senkan_houdai_base', 'senkan_houdai_housein')
    public static readonly CANNONBALL =                                    new InGameBigMushroomEntityImages.ExistantIn2Folder('Cannonball', 'SenkanHoudai', 'senkan_houdai_ball.0', 'senkan_houdai_ball.1', 'senkan_houdai_ball.2', 'senkan_houdai_ball.3',)
    public static readonly RED_CANNON =                                    new InGameBigMushroomEntityImages.ExistantIn2Folder('Red Cannon', 'SenkanHoudai', 'search', 'senkan_houdai_search')
    public static readonly RED_CANNONBALL =                                new InGameBigMushroomEntityImages.ExistantIn2Folder('Cannonball', 'SenkanHoudai', 'senkan_houdai_ball_search.0', 'senkan_houdai_ball_search.1', 'senkan_houdai_ball_search.2', 'senkan_houdai_ball_search.3',)

    public static readonly BURNER =                                        new InGameBigMushroomEntityImages.Null()

    public static readonly FIRE_BAR =                                      new InGameBigMushroomEntityImages.Null()

    public static readonly SKEWER =                                        new InGameBigMushroomEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR =                               new InGameBigMushroomEntityImages.ExistantIn1Folder('Koopa Clown Car', 'KoopaClown', 'anger.0', 'anger.1', 'anger.2', 'anger.3', 'blink.0', 'blink.1', 'blink.2', 'blink.3', 'wait.0', 'wait.1', 'wait.2', 'wait.3', 'weep.0', 'weep.1', 'weep.2', 'weep.3',)
    public static readonly JUNIOR_CLOWN_CAR =                              new InGameBigMushroomEntityImages.Null()
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new InGameBigMushroomEntityImages.ExistantIn1Folder('Fire Koopa Clown Car', 'KoopaClownFire', 'anger.0', 'anger.1', 'anger.2', 'anger.3', 'blink.0', 'blink.1', 'blink.2', 'blink.3', 'wait.0', 'wait.1', 'wait.2', 'wait.3', 'weep.0', 'weep.1', 'weep.2', 'weep.3',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new InGameBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new InGameBigMushroomEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new InGameBigMushroomEntityImages.Null()
    public static readonly CAR =                                           new InGameBigMushroomEntityImages.Null()

    public static readonly GRINDER =                                       new InGameBigMushroomEntityImages.Null()

    public static readonly ANGRY_SUN =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly MOON =                                          new InGameBigMushroomEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new InGameBigMushroomEntityImages.ExistantIn1Folder('Bowser', 'Koopa', 'fall.0', 'fall.1', 'fire.0', 'fire.1', 'wait.0', 'wait.1',)
    public static readonly MEOWSER =                                       new InGameBigMushroomEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new InGameBigMushroomEntityImages.ExistantIn1Folder('Fire thrown by a Bowser', 'Koopa', 'fire.0', 'fire.1',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new InGameBigMushroomEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_BOWSER =                     new InGameBigMushroomEntityImages.ExistantIn1Folder('Hammer thrown by a Bowser', 'Koopa', 'hammer.0',)

    public static readonly BOWSER_JR =                                     new InGameBigMushroomEntityImages.ExistantIn1Folder('Bowser Jr.', 'KoopaJr', 'before.0', 'fall.0', 'fall.1', 'fire.0', 'fire.1', 'shell.0', 'shell.1', 'shell.2', 'shell.3', 'wait.0', 'wait.1',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new InGameBigMushroomEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly POM_POM =                                       new InGameBigMushroomEntityImages.Null()
    public static readonly POM_POM_CLONE =                                 new InGameBigMushroomEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new InGameBigMushroomEntityImages.Null()

    public static readonly LARRY =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly LARRY_WAND =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly LARRY_PROJECTILE =                              new InGameBigMushroomEntityImages.Null()

    public static readonly IGGY =                                          new InGameBigMushroomEntityImages.Null()
    public static readonly IGGY_WAND =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly IGGY_PROJECTILE =                               new InGameBigMushroomEntityImages.Null()

    public static readonly WENDY =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly WENDY_WAND =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new InGameBigMushroomEntityImages.Null()
    public static readonly WENDY_PROJECTILE =                              new InGameBigMushroomEntityImages.Null()

    public static readonly LEMMY =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly LEMMY_WAND =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new InGameBigMushroomEntityImages.Null()
    public static readonly LEMMY_PROJECTILE =                              new InGameBigMushroomEntityImages.Null()

    public static readonly ROY =                                           new InGameBigMushroomEntityImages.Null()
    public static readonly ROY_WAND =                                      new InGameBigMushroomEntityImages.Null()
    public static readonly ROY_PROJECTILE =                                new InGameBigMushroomEntityImages.Null()

    public static readonly MORTON =                                        new InGameBigMushroomEntityImages.Null()
    public static readonly MORTON_WAND =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE =                      new InGameBigMushroomEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE =                      new InGameBigMushroomEntityImages.Null()

    public static readonly LUDWIG =                                        new InGameBigMushroomEntityImages.Null()
    public static readonly LUDWIG_WAND =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE =                             new InGameBigMushroomEntityImages.Null()

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new InGameBigMushroomEntityImages.Null()

    public static readonly SWINGING_CLAW =                                 new InGameBigMushroomEntityImages.Null()

    public static readonly TWISTER =                                       new InGameBigMushroomEntityImages.Null()

    public static readonly ONE_WAY_WALL =                                  new InGameBigMushroomEntityImages.Null()

    public static readonly TRACK =                                         new InGameBigMushroomEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new InGameBigMushroomEntityImages.Null()

    public static readonly VINE =                                          new InGameBigMushroomEntityImages.Null()
    public static readonly TREE =                                          new InGameBigMushroomEntityImages.Null()

    public static readonly STARTING_ARROW =                                new InGameBigMushroomEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly CHECKPOINT_FLAG =                               new InGameBigMushroomEntityImages.Null()
    public static readonly GOAL_POLE =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new InGameBigMushroomEntityImages.Null()
    public static readonly GIANT_GATE =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly CASTLE =                                        new InGameBigMushroomEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new InGameBigMushroomEntityImages.Null()
    public static readonly AXE =                                           new InGameBigMushroomEntityImages.Null()

    public static readonly DASH_BLOCK =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly SNAKE_BLOCK =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly FAST_SNAKE_BLOCK =                              new InGameBigMushroomEntityImages.Null()

    public static readonly CONVEYOR_BELT =                                 new InGameBigMushroomEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT =                            new InGameBigMushroomEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE =                           new InGameBigMushroomEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE =                             new InGameBigMushroomEntityImages.Null()

    public static readonly LIFT =                                          new InGameBigMushroomEntityImages.Null()
    public static readonly FLIMSY_LIFT =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly CLOUD_LIFT =                                    new InGameBigMushroomEntityImages.Null()

    public static readonly SEESAW =                                        new InGameBigMushroomEntityImages.Null()

    public static readonly LAVA_LIFT =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly FAST_LAVA_LIFT =                                new InGameBigMushroomEntityImages.Null()

    public static readonly CRATE =                                         new InGameBigMushroomEntityImages.Null()

    public static readonly KEY =                                           new InGameBigMushroomEntityImages.Null()
    public static readonly CURSED_KEY =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly PHANTO =                                        new InGameBigMushroomEntityImages.Null()

    public static readonly TRAMPOLINE =                                    new InGameBigMushroomEntityImages.Null()
    public static readonly SIDEWAYS_TRAMPOLINE =                           new InGameBigMushroomEntityImages.Null()
    public static readonly HOP_CHOPS =                                     new InGameBigMushroomEntityImages.Null()

    public static readonly POW_BLOCK =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly RED_POW_BLOCK =                                 new InGameBigMushroomEntityImages.Null()

    public static readonly P_SWITCH =                                      new InGameBigMushroomEntityImages.Null()

    public static readonly STONE =                                         new InGameBigMushroomEntityImages.Null()

    public static readonly WARP_DOOR =                                     new InGameBigMushroomEntityImages.Null()
    public static readonly P_WARP_DOOR =                                   new InGameBigMushroomEntityImages.Null()
    public static readonly KEY_DOOR =                                      new InGameBigMushroomEntityImages.Null()

    public static readonly WARP_BOX =                                      new InGameBigMushroomEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY =                             new InGameBigMushroomEntityImages.Null()

    public static readonly WING =                                          new InGameBigMushroomEntityImages.ExistantIn1Folder('Wing', 'WingCommon', 'wait.0', 'wait.1',)
    public static readonly PARACHUTE =                                     new InGameBigMushroomEntityImages.Null()

    public static readonly TOAD =                                          new InGameBigMushroomEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new InGameBigMushroomEntityImages.Null()

    public static readonly BUBBLE =                                        new InGameBigMushroomEntityImages.Null()

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<InGameBigMushroomEntityImages, typeof InGameBigMushroomEntityImages, Entities, typeof Entities> = class CompanionEnum_BigMushroomEntityImages
        extends CompanionEnumWithParent<InGameBigMushroomEntityImages, typeof InGameBigMushroomEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_BigMushroomEntityImages

        private constructor() {
            super(InGameBigMushroomEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_BigMushroomEntityImages()
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

    public abstract get image(): InGameImage_BigMushroom

    //endregion -------------------- Getter methods --------------------

}
