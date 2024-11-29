import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {indexOfFirstByArray}                     from '@joookiwi/collection'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleEnglishName}                      from 'core/entity/Entities.types'
import type {ClearConditionImageFile, EditorImageFile, InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {ClearConditionEntityImage}                                 from 'core/entity/images/ClearConditionEntityImage'
import type {EntityImage}                                               from 'core/entity/images/EntityImage'
import type {EditorEntityImage}                                         from 'core/entity/images/EditorEntityImage'
import type {InGameEntityImage}                                         from 'core/entity/images/InGameEntityImage'
import type {EditorImage}                                               from 'core/entity/images/editor/EditorImage'
import type {InGameImage}                                               from 'core/entity/images/inGame/InGameImage'
import type {ClassWithEnglishName}                                      from 'core/ClassWithEnglishName'
import type {ClassWithImage}                                            from 'util/ClassWithImage'

import {ClearConditionEntityImages}         from 'core/entity/ClearConditionEntityImages'
import {EditorEntityImages}                 from 'core/entity/EditorEntityImages'
import {Entities}                           from 'core/entity/Entities'
import {InGameEntityImages}                 from 'core/entity/InGameEntityImages'
import {ClearConditionEntityImageContainer} from 'core/entity/images/ClearConditionEntityImage.container'
import {EmptyEntityImage}                   from 'core/entity/images/EmptyEntityImage'
import {EditorEntityImageContainer}         from 'core/entity/images/EditorEntityImage.container'
import {InGameEntityImageContainer}         from 'core/entity/images/InGameEntityImage.container'
import {EditorImageContainer}               from 'core/entity/images/editor/EditorImage.container'
import {GameStyles}                         from 'core/gameStyle/GameStyles'
import {ClearConditionImage}                from 'core/entity/images/clearCondition/ClearConditionImage'

import SMB3 = GameStyles.SMB3
import SMW =  GameStyles.SMW

/**
 * The images used in the main page of {@link EntityApp}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class EntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<EntityImage> {

    //region -------------------- Sub class --------------------

    /** A subclass of an {@link EntityImages} to hold a non-existant {@link EntityImage} ({@link EmptyEntityImage}) */
    private static readonly Null = class NullEntityImages extends EntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyEntityImage.get
        }

        public override get image(): EmptyEntityImage { return this.#image }

    }

    private static readonly ExistantEditor = (() => {
        abstract class ExistantEditorEntityImages<const NAME extends PossibleEnglishName,
            const IMAGE extends EditorImageFile, >
            extends EntityImages {

            readonly #englishName
            readonly #reference
            #image?: EditorEntityImage<IMAGE>

            public constructor(englishName: NAME, reference: ClassWithImage<EditorImage<IMAGE>>,) {
                super()
                this.#englishName = englishName
                this.#reference = reference
            }

            public override get englishName(): NAME { return this.#englishName }

            public override get image(): EditorEntityImage<IMAGE> { return this.#image ??= new EditorEntityImageContainer(this._createImage(this.#reference.image,),) }

            protected abstract _createImage(image: EditorImage<IMAGE>,): EditorImage<IMAGE>

        }

        return ExistantEditorEntityImages
    })()


    /** A subclass of an {@link EntityImages} to hold an existant {@link EditorEntityImage} */
    private static readonly Editor = class EditorEntityImages<const NAME extends PossibleEnglishName,
        const IMAGE extends EditorImageFile, >
        extends EntityImages {

        readonly #englishName
        readonly #reference
        #image?: EditorEntityImage<IMAGE>

        public constructor(englishName: NAME, reference: ClassWithImage<EditorImage<IMAGE>>,) {
            super()
            this.#englishName = englishName
            this.#reference = reference
        }

        public override get englishName(): NAME { return this.#englishName }

        public override get image(): EditorEntityImage<IMAGE> { return this.#image ??= new EditorEntityImageContainer(this.#reference.image,) }

    }

    /** A subclass of an {@link EntityImages} to hold an existant {@link ClearConditionEntityImage} */
    private static readonly ClearCondition = class ClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const IMAGE extends ClearConditionImageFile, >
        extends EntityImages {

        readonly #englishName
        readonly #reference
        #image?: ClearConditionEntityImage<IMAGE>

        public constructor(englishName: NAME, reference: ClassWithImage<ClearConditionImage<IMAGE>>,) {
            super()
            this.#englishName = englishName
            this.#reference = reference
        }

        public override get englishName(): NAME { return this.#englishName }

        public override get image(): ClearConditionEntityImage<IMAGE> { return this.#image ??= new ClearConditionEntityImageContainer(this.#reference.image,) }

    }

    /** A subclass of an {@link EntityImages} to hold an existant {@link InGameEntityImage} */
    private static readonly InGame = class InGameEntityImages<const NAME extends PossibleEnglishName,
        const IMAGE extends InGameImageFile, >
        extends EntityImages {

        readonly #englishName
        readonly #reference
        #image?: InGameEntityImage<IMAGE>

        public constructor(englishName: NAME, reference: ClassWithImage<InGameImage<IMAGE>>,) {
            super()
            this.#englishName = englishName
            this.#reference = reference
        }

        public override get englishName(): NAME { return this.#englishName }

        public override get image(): InGameEntityImage<IMAGE> {
            return this.#image ??= new InGameEntityImageContainer(this.#reference.image,)
        }

    }

    //region -------------------- Sub class (predefined) --------------------

    /**
     * A subclass of an {@link EntityImages} to hold an existant {@link EditorEntityImage}
     * without the blue variant images that are in {@link SMB} and {@link SMB3}
     */
    private static readonly EditorWithNoBlueVariantDuplicate = class EditorWithNoBlueVariantDuplicateEntityImages<const NAME extends PossibleEnglishName,
        const IMAGE extends EditorImageFile, >
        extends EntityImages.ExistantEditor<NAME, IMAGE> {

        protected override _createImage(image: EditorImage<IMAGE>) {
            const images = image.imagesWithAssociation
            const size = images.length
            const smb3ImageIndex = indexOfFirstByArray(images, it => it[1] === SMB3,)
            const smwImageIndex = indexOfFirstByArray(images, it => it[1] === SMW,)
            if (size === smwImageIndex + 2) //without sm3dw
                return new EditorImageContainer([
                    images[0]!, images[1]!,
                    images[smb3ImageIndex]!, images[smb3ImageIndex + 1]!,
                    images[smwImageIndex]!,
                    images[smwImageIndex + 1]!,//nsmbu
                ],)
            return new EditorImageContainer([
                images[0]!, images[1]!,
                images[smb3ImageIndex]!, images[smb3ImageIndex + 1]!,
                images[smwImageIndex]!,
                images[smwImageIndex + 1]!,//nsmbu
                images[smwImageIndex + 2]!,//sm3dw
            ],)
        }

    }


    /** A subclass of an {@link EntityImages} to hold an existant {@link EditorEntityImage} for only the {@link BRIDGE} */
    private static readonly EditorAsBridge = class EditorAsBridgeEntityImages
        extends EntityImages.ExistantEditor<'Bridge', typeof EditorEntityImages['BRIDGE']['image']['images'][number]> {

        public constructor() { super('Bridge', EditorEntityImages.BRIDGE,) }

        protected override _createImage(image: EditorImage<typeof EditorEntityImages['BRIDGE']['image']['images'][number]>,) {
            const images = image.imagesWithAssociation
            return new EditorImageContainer([
                images[0]!, images[1]!, images[2]!, images[3]!, images[4]!,//smb
                images[6]!, images[7]!, images[8]!,//smb3
                images[9]!, images[10]!, images[11]!, images[12]!,//smw
                images[15]!, images[16]!, images[17]!, images[18]!, images[19]!, images[20]!, images[21]!, images[22]!, images[23]!,//nsmbu
            ],)
        }

    }

    /** A subclass of an {@link EntityImages} to hold an existant {@link EditorEntityImage} for only the {@link BRICK_BLOCK} */
    private static readonly EditorAsBrickBlock = class EditorAsBrickBlockEntityImages
        extends EntityImages.ExistantEditor<'Brick Block', typeof EditorEntityImages['BRICK_BLOCK']['image']['images'][number]> {

        public constructor() { super('Brick Block', EditorEntityImages.BRICK_BLOCK,) }

        protected override _createImage(image: EditorImage<typeof EditorEntityImages['BRICK_BLOCK']['image']['images'][number]>,) {
            const images = image.imagesWithAssociation
            return new EditorImageContainer([
                images[0]!, images[1]!, images[2]!, images[3]!, images[5]!,//smb
                images[6]!, images[7]!,//smb3
                images[9]!,//smw
                images[10]!,//nsmbu
            ],)
        }

    }

    /** A subclass of an {@link EntityImages} to hold an existant {@link EditorEntityImage} for only the {@link CRISTAL_BLOCK} */
    private static readonly EditorAsCristalBlock = class EditorAsCristalBlockEntityImages
        extends EntityImages.ExistantEditor<'Cristal Block', typeof EditorEntityImages['CRISTAL_BLOCK']['image']['images'][number]> {

        public constructor() { super('Cristal Block', EditorEntityImages.CRISTAL_BLOCK,) }

        protected override _createImage(image: EditorImage<typeof EditorEntityImages['CRISTAL_BLOCK']['image']['images'][number]>,) {
            return new EditorImageContainer([image.imagesWithAssociation[0]!,],)
        }

    }

    /** A subclass of an {@link EntityImages} to hold an existant {@link EditorEntityImage} for only the {@link HARD_BLOCK} */
    private static readonly EditorAsHardBlock = class EditorAsHardBlockEntityImages
        extends EntityImages.ExistantEditor<'Hard Block', typeof EditorEntityImages['HARD_BLOCK']['image']['images'][number]> {

        public constructor() { super('Hard Block', EditorEntityImages.HARD_BLOCK,) }

        protected override _createImage(image: EditorImage<typeof EditorEntityImages['HARD_BLOCK']['image']['images'][number]>,) {
            const images = image.imagesWithAssociation
            return new EditorImageContainer([
                images[0]!, images[1]!, images[3]!, images[4]!, images[5]!, images[7]!,//smb
                images[9]!, images[11]!,//smb3
                images[12]!, images[13]!,//smw
                images[16]!, images[17]!,//nsmbu
            ],)
        }

    }

    /** A subclass of an {@link EntityImages} to hold an existant {@link EditorEntityImage} for only the {@link TREE} */
    private static readonly EditorAsTree = class EditorAsTreeEntityImages
        extends EntityImages.ExistantEditor<'Tree', typeof EditorEntityImages['TREE']['image']['images'][number]> {

        public constructor() { super('Tree', EditorEntityImages.TREE,) }

        protected override _createImage(image: EditorImage<typeof EditorEntityImages['TREE']['image']['images'][number]>,) {
            const images = image.imagesWithAssociation
            return new EditorImageContainer([images[0]!, images[1]!, images[2]!, images[3]!, images[4]!,],)
        }

    }

    //endregion -------------------- Sub class (predefined) --------------------

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new EntityImages.Editor('Ground', EditorEntityImages.GROUND,)
    public static readonly START_GROUND =                                  new EntityImages.Null()
    public static readonly GOAL_GROUND =                                   new EntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new EntityImages.Editor('Steep Slope', EditorEntityImages.STEEP_SLOPE,)
    public static readonly GENTLE_SLOPE =                                  new EntityImages.Editor('Gentle Slope', EditorEntityImages.GENTLE_SLOPE,)

    public static readonly START_BLOCK =                                   new EntityImages.InGame('Start Block', InGameEntityImages.START_BLOCK,)
    public static readonly OCCLUDE_BLOCK =                                 new EntityImages.Null()

    public static readonly WATER =                                         new EntityImages.InGame('Water', InGameEntityImages.WATER,)
    public static readonly LAVA =                                          new EntityImages.InGame('Lava', InGameEntityImages.LAVA,)
    public static readonly POISON =                                        new EntityImages.InGame('Poison', InGameEntityImages.POISON,)

    public static readonly PIPE =                                          new EntityImages.Editor('Pipe', EditorEntityImages.PIPE,)
    public static readonly CLEAR_PIPE =                                    new EntityImages.Editor('Clear Pipe', EditorEntityImages.CLEAR_PIPE,)

    public static readonly SPIKE_TRAP =                                    new EntityImages.Editor('Spike Trap', EditorEntityImages.SPIKE_TRAP,)
    public static readonly JELECTRO =                                      new EntityImages.Editor('Jelectro', EditorEntityImages.JELECTRO,)
    public static readonly SEA_URCHIN =                                    new EntityImages.Editor('Sea Urchin', EditorEntityImages.SEA_URCHIN,)
    public static readonly SPIKE_BLOCK =                                   new EntityImages.Editor('Spike Block', EditorEntityImages.SPIKE_BLOCK,)

    public static readonly MUSHROOM_PLATFORM =                             new EntityImages.Editor('Mushroom Platform', EditorEntityImages.MUSHROOM_PLATFORM,)
    public static readonly SEMISOLID_PLATFORM =                            new EntityImages.Editor('Semisolid Platform', EditorEntityImages.SEMISOLID_PLATFORM,)
    public static readonly BRIDGE =                                        new EntityImages.EditorAsBridge()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new EntityImages.EditorAsBrickBlock()
    public static readonly CRISTAL_BLOCK =                                 new EntityImages.EditorAsCristalBlock()
    public static readonly ROTATING_BLOCK =                                new EntityImages.Editor('Rotating Block', EditorEntityImages.ROTATING_BLOCK,)

    public static readonly HARD_BLOCK =                                    new EntityImages.EditorAsHardBlock()
    public static readonly ROCK_BLOCK =                                    new EntityImages.Editor('Rock Block', EditorEntityImages.ROCK_BLOCK,)

    public static readonly QUESTION_MARK_BLOCK =                           new EntityImages.Editor('? Block', EditorEntityImages.QUESTION_MARK_BLOCK,)
    public static readonly HIDDEN_BLOCK =                                  new EntityImages.Editor('Hidden Block', EditorEntityImages.HIDDEN_BLOCK,)
    public static readonly EMPTY_BLOCK =                                   new EntityImages.InGame('Empty Block', InGameEntityImages.EMPTY_BLOCK,)

    public static readonly EXCLAMATION_MARK_BLOCK =                        new EntityImages.Editor('! Block', EditorEntityImages.EXCLAMATION_MARK_BLOCK,)

    public static readonly NOTE_BLOCK =                                    new EntityImages.Editor('Note Block', EditorEntityImages.NOTE_BLOCK,)
    public static readonly MUSIC_BLOCK =                                   new EntityImages.Editor('Music Block', EditorEntityImages.MUSIC_BLOCK,)

    public static readonly DONUT_BLOCK =                                   new EntityImages.Editor('Donut Block', EditorEntityImages.DONUT_BLOCK,)

    public static readonly CLOUD_BLOCK =                                   new EntityImages.Editor('Cloud Block', EditorEntityImages.CLOUD_BLOCK,)

    public static readonly ON_OFF_SWITCH =                                 new EntityImages.Editor('ON/OFF Switch', EditorEntityImages.ON_OFF_SWITCH,)
    public static readonly DOTTED_LINE_BLOCK =                             new EntityImages.Editor('Dotted-Line Block', EditorEntityImages.DOTTED_LINE_BLOCK,)

    public static readonly P_BLOCK =                                       new EntityImages.Editor('P Block', EditorEntityImages.P_BLOCK,)

    public static readonly BLINKING_BLOCK =                                new EntityImages.Editor('Blinking Block', EditorEntityImages.BLINKING_BLOCK,)

    public static readonly ICE_BLOCK =                                     new EntityImages.Editor('Ice Block', EditorEntityImages.ICE_BLOCK,)
    public static readonly ICICLE =                                        new EntityImages.Editor('Icicle', EditorEntityImages.ICICLE,)

    public static readonly COIN =                                          new EntityImages.Editor('Coin', EditorEntityImages.COIN,)
    public static readonly FROZEN_COIN =                                   new EntityImages.Editor('Frozen Coin', EditorEntityImages.FROZEN_COIN,)
    public static readonly TEN_COIN =                                      new EntityImages.Editor('10-Coin', EditorEntityImages.TEN_COIN,)
    public static readonly THIRTY_COIN =                                   new EntityImages.Editor('30-Coin', EditorEntityImages.THIRTY_COIN,)
    public static readonly FIFTY_COIN =                                    new EntityImages.Editor('50-Coin', EditorEntityImages.FIFTY_COIN,)
    public static readonly PINK_COIN =                                     new EntityImages.Editor('Pink Coin', EditorEntityImages.PINK_COIN,)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new EntityImages.Editor('Super Mushroom', EditorEntityImages.SUPER_MUSHROOM,)

    public static readonly FIRE_FLOWER =                                   new EntityImages.Editor('Fire Flower', EditorEntityImages.FIRE_FLOWER,)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new EntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new EntityImages.Editor('Superball Flower', EditorEntityImages.SUPERBALL_FLOWER,)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new EntityImages.InGame('Superball thrown by a player', InGameEntityImages.SUPERBALL_THROWN_BY_A_PLAYER,)

    public static readonly MYSTERY_MUSHROOM =                              new EntityImages.InGame('Mystery Mushroom', InGameEntityImages.MYSTERY_MUSHROOM,)
    public static readonly WEIRD_MUSHROOM =                                new EntityImages.InGame('Weird Mushroom', InGameEntityImages.WEIRD_MUSHROOM,)

    public static readonly MASTER_SWORD =                                  new EntityImages.Editor('Master Sword', EditorEntityImages.MASTER_SWORD,)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new EntityImages.InGame('Bomb thrown by a Link', InGameEntityImages.BOMB_THROWN_BY_A_LINK,)
    public static readonly ARROW_THROWN_BY_A_LINK =                        new EntityImages.InGame('Arrow thrown by a Link', InGameEntityImages.ARROW_THROWN_BY_A_LINK,)

    public static readonly BIG_MUSHROOM =                                  new EntityImages.Editor('Big Mushroom', EditorEntityImages.BIG_MUSHROOM,)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new EntityImages.InGame('Big Mushroom (classic)', InGameEntityImages.BIG_MUSHROOM_CLASSIC,)
    public static readonly BIG_MUSHROOM_MODERN =                           new EntityImages.InGame('Big Mushroom (modern)', InGameEntityImages.BIG_MUSHROOM_MODERN,)

    public static readonly SMB2_MUSHROOM =                                 new EntityImages.Editor('SMB2 Mushroom', EditorEntityImages.SMB2_MUSHROOM,)

    public static readonly SUPER_LEAF =                                    new EntityImages.Editor('Super Leaf', EditorEntityImages.SUPER_LEAF,)

    public static readonly FROG_SUIT =                                     new EntityImages.Editor('Frog Suit', EditorEntityImages.FROG_SUIT,)

    public static readonly CAPE_FEATHER =                                  new EntityImages.Editor('Cape Feather', EditorEntityImages.CAPE_FEATHER,)

    public static readonly POWER_BALLOON =                                 new EntityImages.Editor('Power Balloon', EditorEntityImages.POWER_BALLOON,)

    public static readonly PROPELLER_MUSHROOM =                            new EntityImages.Editor('Propeller Mushroom', EditorEntityImages.PROPELLER_MUSHROOM,)

    public static readonly SUPER_ACORN =                                   new EntityImages.Editor('Super Acorn', EditorEntityImages.SUPER_ACORN,)

    public static readonly SUPER_BELL =                                    new EntityImages.Editor('Super Bell', EditorEntityImages.SUPER_BELL,)

    public static readonly SUPER_HAMMER =                                  new EntityImages.Editor('Super Hammer', EditorEntityImages.SUPER_HAMMER,)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new EntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new EntityImages.Editor('Boomerang Flower', EditorEntityImages.BOOMERANG_FLOWER,)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new EntityImages.Null()

    public static readonly CANNON_BOX =                                    new EntityImages.Editor('Cannon Box', EditorEntityImages.CANNON_BOX,)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new EntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new EntityImages.Editor('Propeller Box', EditorEntityImages.PROPELLER_BOX,)

    public static readonly GOOMBA_MASK =                                   new EntityImages.Editor('Goomba Mask', EditorEntityImages.GOOMBA_MASK,)

    public static readonly BULLET_BILL_MASK =                              new EntityImages.Editor('Bullet Bill Mask', EditorEntityImages.BULLET_BILL_MASK,)

    public static readonly RED_POW_BOX =                                   new EntityImages.Editor('Red POW Box', EditorEntityImages.RED_POW_BOX,)

    public static readonly SUPER_STAR =                                    new EntityImages.Editor('Super Star', EditorEntityImages.SUPER_STAR,)

    public static readonly ONE_UP_MUSHROOM =                               new EntityImages.Editor('1-Up Mushroom', EditorEntityImages.ONE_UP_MUSHROOM,)
    public static readonly ROTTEN_MUSHROOM =                               new EntityImages.Editor('Rotten Mushroom', EditorEntityImages.ROTTEN_MUSHROOM,)

    public static readonly SHOE_GOOMBA =                                   new EntityImages.InGame('Shoe Goomba', InGameEntityImages.SHOE_GOOMBA,)
    public static readonly SHOE =                                          new EntityImages.InGame('Shoe', InGameEntityImages.SHOE,)
    public static readonly STILETTO_GOOMBA =                               new EntityImages.InGame('Stiletto Goomba', InGameEntityImages.STILETTO_GOOMBA,)
    public static readonly STILETTO =                                      new EntityImages.InGame('Stiletto', InGameEntityImages.STILETTO,)
    public static readonly YOSHI_EGG =                                     new EntityImages.Editor('Yoshi’s Egg', EditorEntityImages.YOSHI_EGG,)
    public static readonly YOSHI =                                         new EntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new EntityImages.InGame('Fire thrown by a Yoshi',  InGameEntityImages.FIRE_THROWN_BY_A_YOSHI,)
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new EntityImages.InGame('Poison thrown by a Yoshi',  InGameEntityImages.POISON_THROWN_BY_A_YOSHI,)
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new EntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new EntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new EntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new EntityImages.Editor('Red Yoshi’s Egg', EditorEntityImages.RED_YOSHI_EGG,)
    public static readonly RED_YOSHI =                                     new EntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new EntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new EntityImages.Editor('Goomba', EditorEntityImages.GOOMBA,)
    public static readonly GALOOMBA =                                      new EntityImages.Editor('Galoomba', EditorEntityImages.GALOOMBA,)
    public static readonly GOOMBRAT =                                      new EntityImages.Editor('Goombrat', EditorEntityImages.GOOMBRAT,)
    public static readonly GOOMBUD =                                       new EntityImages.Editor('Goombud', EditorEntityImages.GOOMBUD,)

    public static readonly GREEN_KOOPA_TROOPA =                            new EntityImages.Editor('Green Koopa Troopa', EditorEntityImages.GREEN_KOOPA_TROOPA,)
    public static readonly RED_KOOPA_TROOPA =                              new EntityImages.Editor('Red Koopa Troopa', EditorEntityImages.RED_KOOPA_TROOPA,)
    public static readonly GREEN_BEACH_KOOPA =                             new EntityImages.InGame('Green Beach Koopa', InGameEntityImages.GREEN_BEACH_KOOPA,)
    public static readonly RED_BEACH_KOOPA =                               new EntityImages.InGame('Red Beach Koopa', InGameEntityImages.RED_BEACH_KOOPA,)
    public static readonly GREEN_KOOPA_SHELL =                             new EntityImages.ClearCondition('Green Koopa Shell', ClearConditionEntityImages.GREEN_KOOPA_SHELL,)
    public static readonly RED_KOOPA_SHELL =                               new EntityImages.Null()

    public static readonly DRY_BONES =                                     new EntityImages.Editor('Dry Bones', EditorEntityImages.DRY_BONES,)
    public static readonly PARABONES =                                     new EntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new EntityImages.InGame('Bone thrown by a Dry Bones', InGameEntityImages.BONE_THROWN_BY_A_DRY_BONES,)
    public static readonly DRY_BONES_SHELL =                               new EntityImages.Editor('Dry Bones Shell', EditorEntityImages.DRY_BONES_SHELL,)

    public static readonly BUZZY_BEETLE =                                  new EntityImages.EditorWithNoBlueVariantDuplicate('Buzzy Beetle', EditorEntityImages.BUZZY_BEETLE,)
    public static readonly PARA_BEETLE =                                   new EntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new EntityImages.EditorWithNoBlueVariantDuplicate('Buzzy Shell', EditorEntityImages.BUZZY_SHELL,)

    public static readonly SPINY =                                         new EntityImages.Editor('Spiny', EditorEntityImages.SPINY,)
    public static readonly WINGED_SPINY =                                  new EntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new EntityImages.InGame('(Winged Spiny’s projectile)', InGameEntityImages.WINGED_SPINY_PROJECTILE,)
    public static readonly SPINY_EGG =                                     new EntityImages.InGame('Spiny Egg', InGameEntityImages.SPINY_EGG,)
    public static readonly SPINY_SHELL =                                   new EntityImages.Editor('Spiny Shell', EditorEntityImages.SPINY_SHELL,)

    public static readonly SPIKE_TOP =                                     new EntityImages.Editor('Spike Top', EditorEntityImages.SPIKE_TOP,)
    public static readonly WINGED_SPIKE_TOP =                              new EntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new EntityImages.Editor('Fast Spike Top', EditorEntityImages.FAST_SPIKE_TOP,)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new EntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new EntityImages.Editor('Skipsqueak', EditorEntityImages.SKIPSQUEAK,)
    public static readonly SPINY_SKIPSQUEAK =                              new EntityImages.Editor('Spiny Skipsqueak', EditorEntityImages.SPINY_SKIPSQUEAK,)

    public static readonly ANT_TROOPER =                                   new EntityImages.Editor('Ant Trooper', EditorEntityImages.ANT_TROOPER,)
    public static readonly HORNED_ANT_TROOPER =                            new EntityImages.Editor('Horned Ant Trooper', EditorEntityImages.HORNED_ANT_TROOPER,)

    public static readonly STINGBY =                                       new EntityImages.Editor('Stingby', EditorEntityImages.STINGBY,)

    public static readonly CHEEP_CHEEP =                                   new EntityImages.Editor('Cheep Cheep', EditorEntityImages.CHEEP_CHEEP,)
    public static readonly BLURPS =                                        new EntityImages.Editor('Blurps', EditorEntityImages.BLURPS,)
    public static readonly DEEP_CHEEP =                                    new EntityImages.Editor('Deep Cheep', EditorEntityImages.DEEP_CHEEP,)
    public static readonly FISH_BONE =                                     new EntityImages.Editor('Fish Bone', EditorEntityImages.FISH_BONE,)

    public static readonly BLOOPER =                                       new EntityImages.Editor('Blooper', EditorEntityImages.BLOOPER,)
    public static readonly BLOOPER_NANNY =                                 new EntityImages.Editor('Blooper Nanny', EditorEntityImages.BLOOPER_NANNY,)
    public static readonly BABY_BLOOPER =                                  new EntityImages.InGame('Baby Blooper', InGameEntityImages.BABY_BLOOPER,)

    public static readonly PORCUPUFFER =                                   new EntityImages.Editor('Porcupuffer', EditorEntityImages.PORCUPUFFER,)

    public static readonly WIGGLER =                                       new EntityImages.Editor('Wiggler', EditorEntityImages.WIGGLER,)
    public static readonly ANGRY_WIGGLER =                                 new EntityImages.Editor('Angry Wiggler', EditorEntityImages.ANGRY_WIGGLER,)

    public static readonly PIRANHA_PLANT =                                 new EntityImages.Editor('Piranha Plant', EditorEntityImages.PIRANHA_PLANT,)
    public static readonly JUMPING_PIRANHA_PLANT =                         new EntityImages.Editor('Jumping Piranha Plant', EditorEntityImages.JUMPING_PIRANHA_PLANT,)
    public static readonly FIRE_PIRANHA_PLANT =                            new EntityImages.Editor('Fire Piranha Plant', EditorEntityImages.FIRE_PIRANHA_PLANT,)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new EntityImages.Null()
    public static readonly MUNCHER =                                       new EntityImages.EditorWithNoBlueVariantDuplicate('Muncher', EditorEntityImages.MUNCHER,)
    public static readonly PIRANHA_CREEPER =                               new EntityImages.Editor('Piranha Creeper', EditorEntityImages.PIRANHA_CREEPER,)

    public static readonly CHAIN_CHOMP =                                   new EntityImages.EditorWithNoBlueVariantDuplicate('Chain Chomp', EditorEntityImages.CHAIN_CHOMP,)
    public static readonly UNCHAINED_CHOMP =                               new EntityImages.EditorWithNoBlueVariantDuplicate('Unchained Chomp', EditorEntityImages.UNCHAINED_CHOMP,)
    public static readonly CHAIN_CHOMP_STUMP =                             new EntityImages.Null()

    public static readonly SPIKE =                                         new EntityImages.Editor('Spike', EditorEntityImages.SPIKE,)
    public static readonly SPIKE_BALL =                                    new EntityImages.EditorWithNoBlueVariantDuplicate('Spike Ball', EditorEntityImages.SPIKE_BALL,)
    public static readonly SNOWBALL =                                      new EntityImages.Editor('Snowball', EditorEntityImages.SNOWBALL,)

    public static readonly LAKITU =                                        new EntityImages.Editor('Lakitu', EditorEntityImages.LAKITU,)
    public static readonly LAKITU_CLOUD =                                  new EntityImages.Editor('Lakitu’s Cloud', EditorEntityImages.LAKITU_CLOUD,)

    public static readonly BOO =                                           new EntityImages.Editor('Boo', EditorEntityImages.BOO,)
    public static readonly STRETCH =                                       new EntityImages.Editor('Stretch', EditorEntityImages.STRETCH,)
    public static readonly BOO_BUDDIES =                                   new EntityImages.Editor('Boo Buddies', EditorEntityImages.BOO_BUDDIES,)
    public static readonly PEEPA =                                         new EntityImages.Editor('Peepa', EditorEntityImages.PEEPA,)

    public static readonly BOB_OMB =                                       new EntityImages.EditorWithNoBlueVariantDuplicate('Bob-omb', EditorEntityImages.BOB_OMB,)
    public static readonly LIT_BOB_OMB =                                   new EntityImages.Editor('Lit Bob-omb', EditorEntityImages.LIT_BOB_OMB,)

    public static readonly POKEY =                                         new EntityImages.Editor('Pokey', EditorEntityImages.POKEY,)
    public static readonly SNOW_POKEY =                                    new EntityImages.Editor('Snow Pokey', EditorEntityImages.SNOW_POKEY,)

    public static readonly THWOMP =                                        new EntityImages.Editor('Thwomp', EditorEntityImages.THWOMP,)

    public static readonly MONTY_MOLE =                                    new EntityImages.Editor('Monty Mole', EditorEntityImages.MONTY_MOLE,)
    public static readonly ROCKY_WRENCH =                                  new EntityImages.Editor('Rocky Wrench', EditorEntityImages.ROCKY_WRENCH,)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new EntityImages.InGame('Wrench thrown by a Rocky Wrench', InGameEntityImages.WRENCH_THROWN_BY_A_ROCKY_WRENCH,)

    public static readonly MAGIKOOPA =                                     new EntityImages.Editor('Magikoopa', EditorEntityImages.MAGIKOOPA,)
    public static readonly MAGIKOOPA_PROJECTILE =                          new EntityImages.InGame('(Magikoopa’s projectile)', InGameEntityImages.MAGIKOOPA_PROJECTILE,)

    public static readonly HAMMER_BRO =                                    new EntityImages.Editor('Hammer Bro', EditorEntityImages.HAMMER_BRO,)
    public static readonly SLEDGE_BRO =                                    new EntityImages.Editor('Sledge Bro', EditorEntityImages.SLEDGE_BRO,)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new EntityImages.InGame('Hammer thrown by a Hammer / Sledge Bro', InGameEntityImages.HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO,)
    public static readonly FIRE_BRO =                                      new EntityImages.Editor('Fire Bro', EditorEntityImages.FIRE_BRO,)
    public static readonly HEAVY_FIRE_BRO =                                new EntityImages.Editor('Heavy Fire Bro', EditorEntityImages.HEAVY_FIRE_BRO,)
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new EntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new EntityImages.Editor('Lava Bubble', EditorEntityImages.LAVA_BUBBLE,)

    public static readonly MECHAKOOPA =                                    new EntityImages.Editor('Mechakoopa', EditorEntityImages.MECHAKOOPA,)
    public static readonly BLASTA_MECHAKOOPA =                             new EntityImages.Editor('Blasta Mechakoopa', EditorEntityImages.BLASTA_MECHAKOOPA,)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new EntityImages.InGame('Homing Missile thrown by a Blasta Mechakoopa', InGameEntityImages.HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA,)
    public static readonly ZAPPA_MECHAKOOPA =                              new EntityImages.Editor('Zappa Mechakoopa', EditorEntityImages.ZAPPA_MECHAKOOPA,)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new EntityImages.Null()

    public static readonly CHARVAARGH =                                    new EntityImages.Editor('Charvaargh', EditorEntityImages.CHARVAARGH,)

    public static readonly BULLY =                                         new EntityImages.Editor('Bully', EditorEntityImages.BULLY,)

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new EntityImages.EditorWithNoBlueVariantDuplicate('Bill Blaster', EditorEntityImages.BILL_BLASTER,)
    public static readonly BULLET_BILL =                                   new EntityImages.ClearCondition('Bullet Bill', ClearConditionEntityImages.BULLET_BILL,)
    public static readonly BULL_EYE_BLASTER =                              new EntityImages.Editor('Bull’s-Eye Blaster', EditorEntityImages.BULL_EYE_BLASTER,)
    public static readonly BULL_EYE_BILL =                                 new EntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new EntityImages.Null()

    public static readonly BANZAI_BILL =                                   new EntityImages.EditorWithNoBlueVariantDuplicate('Banzai Bill', EditorEntityImages.BANZAI_BILL,)
    public static readonly BULL_EYE_BANZAI =                               new EntityImages.Editor('Bull’s-Eye Banzai', EditorEntityImages.BULL_EYE_BANZAI,)
    public static readonly CAT_BANZAI_BILL =                               new EntityImages.Editor('Cat Banzai Bill', EditorEntityImages.CAT_BANZAI_BILL,)

    public static readonly CANNON =                                        new EntityImages.EditorWithNoBlueVariantDuplicate('Cannon', EditorEntityImages.CANNON,)
    public static readonly CANNONBALL =                                    new EntityImages.Null()
    public static readonly RED_CANNON =                                    new EntityImages.Editor('Red Cannon', EditorEntityImages.RED_CANNON,)
    public static readonly RED_CANNONBALL =                                new EntityImages.Null()

    public static readonly BURNER =                                        new EntityImages.Editor('Burner', EditorEntityImages.BURNER,)

    public static readonly FIRE_BAR =                                      new EntityImages.InGame('Fire Bar', InGameEntityImages.FIRE_BAR,)

    public static readonly SKEWER =                                        new EntityImages.EditorWithNoBlueVariantDuplicate('Skewer', EditorEntityImages.SKEWER,)

    public static readonly KOOPA_CLOWN_CAR =                               new EntityImages.Editor('Koopa Clown Car', EditorEntityImages.KOOPA_CLOWN_CAR,)
    public static readonly JUNIOR_CLOWN_CAR =                              new EntityImages.Editor('Junior Clown Car', EditorEntityImages.JUNIOR_CLOWN_CAR,)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new EntityImages.Editor('Fire Koopa Clown Car', EditorEntityImages.FIRE_KOOPA_CLOWN_CAR,)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new EntityImages.Editor('Fire Junior Clown Car', EditorEntityImages.FIRE_JUNIOR_CLOWN_CAR,)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new EntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new EntityImages.Editor('Koopa Troopa Car', EditorEntityImages.KOOPA_TROOPA_CAR,)
    public static readonly CAR =                                           new EntityImages.Null()

    public static readonly GRINDER =                                       new EntityImages.Editor('Grinder', EditorEntityImages.GRINDER,)

    public static readonly ANGRY_SUN =                                     new EntityImages.Editor('Angry Sun', EditorEntityImages.ANGRY_SUN,)
    public static readonly MOON =                                          new EntityImages.Editor('Moon', EditorEntityImages.MOON,)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new EntityImages.Editor('Bowser', EditorEntityImages.BOWSER,)
    public static readonly MEOWSER =                                       new EntityImages.Editor('Meowser', EditorEntityImages.MEOWSER,)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new EntityImages.InGame('Fire thrown by a Bowser', InGameEntityImages.FIRE_THROWN_BY_A_BOWSER,)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new EntityImages.InGame('Falling Fire thrown by a Bowser', InGameEntityImages.FALLING_FIRE_THROWN_BY_A_BOWSER,)

    public static readonly BOWSER_JR =                                     new EntityImages.Editor('Bowser Jr.', EditorEntityImages.BOWSER_JR,)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new EntityImages.Null()

    public static readonly BOOM_BOOM =                                     new EntityImages.Editor('Boom Boom', EditorEntityImages.BOOM_BOOM,)
    public static readonly POM_POM =                                       new EntityImages.Editor('Pom Pom', EditorEntityImages.POM_POM,)
    public static readonly POM_POM_CLONE =                                 new EntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new EntityImages.Null()

    public static readonly LARRY =                                         new EntityImages.Editor('Larry', EditorEntityImages.LARRY,)
    public static readonly LARRY_WAND =                                    new EntityImages.InGame('Larry’s Wand', InGameEntityImages.LARRY_WAND,)
    public static readonly LARRY_PROJECTILE =                              new EntityImages.InGame('(Larry’s projectile)', InGameEntityImages.LARRY_PROJECTILE,)

    public static readonly IGGY =                                          new EntityImages.Editor('Iggy', EditorEntityImages.IGGY,)
    public static readonly IGGY_WAND =                                     new EntityImages.InGame('Iggy’s Wand', InGameEntityImages.IGGY_WAND,)
    public static readonly IGGY_PROJECTILE =                               new EntityImages.InGame('(Iggy’s projectile)', InGameEntityImages.IGGY_PROJECTILE,)

    public static readonly WENDY =                                         new EntityImages.Editor('Wendy', EditorEntityImages.WENDY,)
    public static readonly WENDY_WAND =                                    new EntityImages.InGame('Wendy’s Wand', InGameEntityImages.WENDY_WAND,)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new EntityImages.InGame('Candy Ring thrown by a Wendy', InGameEntityImages.CANDY_RING_THROWN_BY_A_WENDY,)
    public static readonly WENDY_PROJECTILE =                              new EntityImages.Null()

    public static readonly LEMMY =                                         new EntityImages.Editor('Lemmy', EditorEntityImages.LEMMY,)
    public static readonly LEMMY_WAND =                                    new EntityImages.InGame('Lemmy’s Wand', InGameEntityImages.LEMMY_WAND,)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new EntityImages.InGame('Magic Ball thrown by a Lemmy', InGameEntityImages.MAGIC_BALL_THROWN_BY_A_LEMMY,)
    public static readonly LEMMY_PROJECTILE =                              new EntityImages.Null()

    public static readonly ROY =                                           new EntityImages.Editor('Roy', EditorEntityImages.ROY,)
    public static readonly ROY_WAND =                                      new EntityImages.InGame('Roy’s Wand', InGameEntityImages.ROY_WAND,)
    public static readonly ROY_PROJECTILE =                                new EntityImages.InGame('(Roy’s projectile)', InGameEntityImages.ROY_PROJECTILE,)

    public static readonly MORTON =                                        new EntityImages.Editor('Morton', EditorEntityImages.MORTON,)
    public static readonly MORTON_WAND =                                   new EntityImages.InGame('Morton’s Wand', InGameEntityImages.MORTON_WAND,)
    public static readonly MORTON_THROWN_PROJECTILE =                      new EntityImages.InGame('(Morton’s Thrown projectile)', InGameEntityImages.MORTON_THROWN_PROJECTILE,)
    public static readonly MORTON_GROUND_PROJECTILE =                      new EntityImages.InGame('(Morton’s Ground projectile)', InGameEntityImages.MORTON_GROUND_PROJECTILE,)

    public static readonly LUDWIG =                                        new EntityImages.Editor('Ludwig', EditorEntityImages.LUDWIG,)
    public static readonly LUDWIG_WAND =                                   new EntityImages.InGame('Ludwig’s Wand', InGameEntityImages.LUDWIG_WAND,)
    public static readonly LUDWIG_PROJECTILE =                             new EntityImages.InGame('(Ludwig’s projectile)', InGameEntityImages.LUDWIG_PROJECTILE,)

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new EntityImages.Editor('Bumper', EditorEntityImages.BUMPER,)

    public static readonly SWINGING_CLAW =                                 new EntityImages.Editor('Swinging Claw', EditorEntityImages.SWINGING_CLAW,)

    public static readonly TWISTER =                                       new EntityImages.Editor('Twister', EditorEntityImages.TWISTER,)

    public static readonly ONE_WAY_WALL =                                  new EntityImages.Editor('One-Way Wall', EditorEntityImages.ONE_WAY_WALL,)

    public static readonly TRACK =                                         new EntityImages.Editor('Track', EditorEntityImages.TRACK,)
    public static readonly TRACK_BLOCK =                                   new EntityImages.Editor('Track Block', EditorEntityImages.TRACK_BLOCK,)

    public static readonly VINE =                                          new EntityImages.Editor('Vine', EditorEntityImages.VINE,)
    public static readonly TREE =                                          new EntityImages.EditorAsTree()

    public static readonly STARTING_ARROW =                                new EntityImages.Null()
    public static readonly ARROW_SIGN =                                    new EntityImages.Editor('Arrow Sign', EditorEntityImages.ARROW_SIGN,)

    public static readonly CHECKPOINT_FLAG =                               new EntityImages.Editor('Checkpoint Flag', EditorEntityImages.CHECKPOINT_FLAG,)
    public static readonly GOAL_POLE =                                     new EntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new EntityImages.Null()
    public static readonly GIANT_GATE =                                    new EntityImages.Null()

    public static readonly CASTLE =                                        new EntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new EntityImages.Null()
    public static readonly AXE =                                           new EntityImages.InGame('Axe', InGameEntityImages.AXE,)

    public static readonly DASH_BLOCK =                                    new EntityImages.Editor('Dash Block', EditorEntityImages.DASH_BLOCK,)

    public static readonly SNAKE_BLOCK =                                   new EntityImages.Editor('Snake Block', EditorEntityImages.SNAKE_BLOCK,)
    public static readonly FAST_SNAKE_BLOCK =                              new EntityImages.Editor('Fast Snake Block', EditorEntityImages.FAST_SNAKE_BLOCK,)

    public static readonly CONVEYOR_BELT =                                 new EntityImages.Editor('Conveyor Belt', EditorEntityImages.CONVEYOR_BELT,)
    public static readonly FAST_CONVEYOR_BELT =                            new EntityImages.Editor('Fast Conveyor Belt', EditorEntityImages.FAST_CONVEYOR_BELT,)

    public static readonly MUSHROOM_TRAMPOLINE =                           new EntityImages.Editor('Mushroom Trampoline', EditorEntityImages.MUSHROOM_TRAMPOLINE,)
    public static readonly ON_OFF_TRAMPOLINE =                             new EntityImages.Editor('ON/OFF Trampoline', EditorEntityImages.ON_OFF_TRAMPOLINE,)

    public static readonly LIFT =                                          new EntityImages.Editor('Lift', EditorEntityImages.LIFT,)
    public static readonly FLIMSY_LIFT =                                   new EntityImages.Editor('Flimsy Lift', EditorEntityImages.FLIMSY_LIFT,)
    public static readonly CLOUD_LIFT =                                    new EntityImages.Editor('Cloud Lift', EditorEntityImages.CLOUD_LIFT,)

    public static readonly SEESAW =                                        new EntityImages.Editor('Seesaw', EditorEntityImages.SEESAW,)

    public static readonly LAVA_LIFT =                                     new EntityImages.Editor('Lava Lift', EditorEntityImages.LAVA_LIFT,)
    public static readonly FAST_LAVA_LIFT =                                new EntityImages.Editor('Fast Lava Lift', EditorEntityImages.FAST_LAVA_LIFT,)

    public static readonly CRATE =                                         new EntityImages.Editor('Crate', EditorEntityImages.CRATE,)

    public static readonly KEY =                                           new EntityImages.Editor('Key', EditorEntityImages.KEY,)
    public static readonly CURSED_KEY =                                    new EntityImages.Editor('Cursed Key', EditorEntityImages.CURSED_KEY,)
    public static readonly PHANTO =                                        new EntityImages.InGame('Phanto', InGameEntityImages.PHANTO,)

    public static readonly TRAMPOLINE =                                    new EntityImages.Editor('Trampoline', EditorEntityImages.TRAMPOLINE,)
    public static readonly HOP_CHOPS =                                     new EntityImages.Editor('Hop-Chops', EditorEntityImages.HOP_CHOPS,)

    public static readonly POW_BLOCK =                                     new EntityImages.Editor('POW Block', EditorEntityImages.POW_BLOCK,)
    public static readonly RED_POW_BLOCK =                                 new EntityImages.Editor('Red POW Block', EditorEntityImages.RED_POW_BLOCK,)

    public static readonly P_SWITCH =                                      new EntityImages.Editor('P Switch', EditorEntityImages.P_SWITCH,)

    public static readonly STONE =                                         new EntityImages.ClearCondition('Stone', ClearConditionEntityImages.STONE,)

    public static readonly WARP_DOOR =                                     new EntityImages.Editor('Warp Door', EditorEntityImages.WARP_DOOR,)
    public static readonly P_WARP_DOOR =                                   new EntityImages.Editor('P Warp Door', EditorEntityImages.P_WARP_DOOR,)
    public static readonly KEY_DOOR =                                      new EntityImages.Editor('Key Door', EditorEntityImages.KEY_DOOR,)

    public static readonly WARP_BOX =                                      new EntityImages.Editor('Warp Box', EditorEntityImages.WARP_BOX,)
    public static readonly WARP_BOX_WITH_KEY =                             new EntityImages.Editor('Warp Box (With Key)', EditorEntityImages.WARP_BOX_WITH_KEY,)

    public static readonly WING =                                          new EntityImages.Editor('Wing', EditorEntityImages.WING,)
    public static readonly PARACHUTE =                                     new EntityImages.Editor('Parachute', EditorEntityImages.PARACHUTE,)

    public static readonly TOAD =                                          new EntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new EntityImages.Null()

    public static readonly BUBBLE =                                        new EntityImages.InGame('Bubble', InGameEntityImages.BUBBLE,)

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EntityImages, typeof EntityImages, Entities, typeof Entities>
        = class CompanionEnum_EntityImages
        extends CompanionEnumWithParent<EntityImages, typeof EntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityImages

        private constructor() {
            super(EntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityImages()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    #englishName?: PossibleEnglishName
    #englishNameInHtml?: string

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName?:PossibleEnglishName,)
    private constructor() { super() }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName { return this.#englishName ??= this.parent.englishName }

    public get englishNameInHtml(): string { return this.#englishNameInHtml ??= this.parent.englishNameInHtml }

    public abstract get image(): EntityImage

    //endregion -------------------- Getter methods --------------------

}
