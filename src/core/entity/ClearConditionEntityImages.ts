import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {ClearConditionImage}                  from 'core/entity/images/clearCondition/ClearConditionImage'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}        from 'core/entity/Entities'
import * as ImageCreator from 'core/entity/images/clearConditionImageCreator'
import {EmptyClearConditionImage} from 'core/entity/images/clearCondition/EmptyClearConditionImage'

/**
 * An {@link Entities} class made to hold a {@link ClearConditionImage}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class ClearConditionEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<ClearConditionImage> {

    //region -------------------- Sub class --------------------

    /** A subclass of an {@link ClearConditionEntityImages} to hold a non-existant {@link ClearConditionImage} ({@link EmptyClearConditionImage}) */
    private static readonly Null = class NullClearConditionImages extends ClearConditionEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyClearConditionImage.get
        }

        public override get image(): EmptyClearConditionImage { return this.#image }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link EditorImage} */
    private static readonly Existant = (() => {
        abstract class ExistantClearConditionEntityImages extends ClearConditionEntityImages {

            #image?: ClearConditionImage

            public constructor() { super() }

            /**
             * Create the <b>clear condition</b> image
             *
             * @onlyCalledBy<{@link image}>
             * @onlyCalledOnce
             */
            protected abstract _createImage(): ClearConditionImage

            public override get image(): ClearConditionImage { return this.#image ??= this._createImage() }

        }

        return ExistantClearConditionEntityImages
    })()

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND = new ClearConditionEntityImages.Null()
    public static readonly START_GROUND = new ClearConditionEntityImages.Null()
    public static readonly GOAL_GROUND = new ClearConditionEntityImages.Null()

    public static readonly STEEP_SLOPE = new ClearConditionEntityImages.Null()
    public static readonly GENTLE_SLOPE = new ClearConditionEntityImages.Null()

    public static readonly START_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly OCCLUDE_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly WATER = new ClearConditionEntityImages.Null()
    public static readonly LAVA = new ClearConditionEntityImages.Null()
    public static readonly POISON = new ClearConditionEntityImages.Null()

    public static readonly PIPE = new ClearConditionEntityImages.Null()
    public static readonly CLEAR_PIPE = new ClearConditionEntityImages.Null()

    public static readonly SPIKE_TRAP = new ClearConditionEntityImages.Null()
    public static readonly JELECTRO = new ClearConditionEntityImages.Null()
    public static readonly SEA_URCHIN = new ClearConditionEntityImages.Null()
    public static readonly SPIKE_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM = new ClearConditionEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM = new ClearConditionEntityImages.Null()
    public static readonly BRIDGE = new ClearConditionEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly CRISTAL_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly ROTATING_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly HARD_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly ROCK_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly HIDDEN_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly EMPTY_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly NOTE_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly MUSIC_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly DONUT_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly CLOUD_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly ON_OFF_SWITCH = new ClearConditionEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly P_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly BLINKING_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly ICE_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly ICICLE = new ClearConditionEntityImages.Null()

    public static readonly COIN = new class ClearConditionEntityImages_Coin extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Coin_00',)
        }

    }()
    public static readonly FROZEN_COIN = new ClearConditionEntityImages.Null()
    public static readonly TEN_COIN = new class ClearConditionEntityImages_TenCoin extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, '10Coin_00',)
        }

    }()
    public static readonly THIRTY_COIN = new class ClearConditionEntityImages_ThirtyCoin extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, '10Coin_01',)
        }

    }()
    public static readonly FIFTY_COIN = new class ClearConditionEntityImages_FiftyCoin extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, '10Coin_02',)
        }

    }()
    public static readonly PINK_COIN = new ClearConditionEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM = new class ClearConditionEntityImages_SuperMushroom extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'SuperKinoko_00',)
        }

    }()

    public static readonly FIRE_FLOWER = new class ClearConditionEntityImages_FireFlower extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'FireFlower_00',)
        }

    }()
    public static readonly FIREBALL_THROWN_BY_A_PLAYER = new ClearConditionEntityImages.Null()

    public static readonly SUPERBALL_FLOWER = new class ClearConditionEntityImages_SuperballFlower extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmb(this, 'FireFlower_01',)
        }

    }()
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER = new ClearConditionEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM = new ClearConditionEntityImages.Null()
    public static readonly WEIRD_MUSHROOM = new ClearConditionEntityImages.Null()

    public static readonly MASTER_SWORD = new class ClearConditionEntityImages_MasterSword extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmb(this, 'SuperKinoko_01',)
        }

    }()
    public static readonly BOMB_THROWN_BY_A_LINK = new ClearConditionEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK = new ClearConditionEntityImages.Null()

    public static readonly BIG_MUSHROOM = new class ClearConditionEntityImages_BigMushroom extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmb(this, 'DekaKinoko_00',)
        }

    }()
    public static readonly BIG_MUSHROOM_CLASSIC = new ClearConditionEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN = new ClearConditionEntityImages.Null()

    public static readonly SMB2_MUSHROOM = new class ClearConditionEntityImages_SMB2Mushroom extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmb(this, 'KinokoUSA_00')
        }

    }()

    public static readonly SUPER_LEAF = new class ClearConditionEntityImages_SuperLeaf extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmb3(this, 'SuperKonoha_00',)
        }

    }()

    public static readonly FROG_SUIT = new class ClearConditionEntityImages_FrogSuit extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmb3(this, 'FrogSuit_00',)
        }

    }()

    public static readonly CAPE_FEATHER = new class ClearConditionEntityImages_CapeFeather extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'MantleWing_00',)
        }

    }()

    public static readonly POWER_BALLOON = new class ClearConditionEntityImages_PowerBalloon extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'PowerBalloon_00',)
        }

    }()

    public static readonly PROPELLER_MUSHROOM = new class ClearConditionEntityImages_PropellerMushroom extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlyNsmbu(this, 'PropellerKinoko_00',)
        }

    }()

    public static readonly SUPER_ACORN = new class ClearConditionEntityImages_SuperAcorn extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlyNsmbu(this, 'SuperDonguri_00',)
        }

    }()

    public static readonly SUPER_BELL = new class ClearConditionEntityImages_SuperBell extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'SuperBell_00',)
        }

    }()

    public static readonly SUPER_HAMMER = new class ClearConditionEntityImages_SuperHammer extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'SuperHammer_00',)
        }

    }()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER = new ClearConditionEntityImages.Null()

    public static readonly BOOMERANG_FLOWER = new class ClearConditionEntityImages_BoomerangFlower extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'BoomerangFlower_00',)
        }

    }()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER = new ClearConditionEntityImages.Null()

    public static readonly CANNON_BOX = new class ClearConditionEntityImages_CannonBox extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'BoxKiller_00',)
        }

    }()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER = new ClearConditionEntityImages.Null()

    public static readonly PROPELLER_BOX = new class ClearConditionEntityImages_PropellerBox extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'BoxPropeller_00',)
        }

    }()

    public static readonly GOOMBA_MASK = new class ClearConditionEntityImages_GoombaMask extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'BoxKuribo_00',)
        }

    }()

    public static readonly BULLET_BILL_MASK = new class ClearConditionEntityImages_BulletBillMask extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'BoxKillerPlayer_00',)
        }

    }()

    public static readonly RED_POW_BOX = new class ClearConditionEntityImages_RedPowBox extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'BoxPow_00',)
        }

    }()

    public static readonly SUPER_STAR = new class ClearConditionEntityImages_SuperStar extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'SuperStar_00',)
        }

    }()

    public static readonly ONE_UP_MUSHROOM = new class ClearConditionEntityImages_OneUpMushroom extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, '1upKinoko_00',)
        }

    }()
    public static readonly ROTTEN_MUSHROOM = new ClearConditionEntityImages.Null()

    public static readonly SHOE_GOOMBA = new ClearConditionEntityImages.Null()
    public static readonly SHOE = new class ClearConditionEntityImages_Shoe extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmbAndSmb3(this, 'KutsuKuribo_00',)
        }

    }()
    public static readonly STILETTO_GOOMBA = new ClearConditionEntityImages.Null()
    public static readonly STILETTO = new ClearConditionEntityImages.Null()
    public static readonly YOSHI_EGG = new class ClearConditionEntityImages_YoshiEgg extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmwAndNsmbu(this, 'YosshiEgg_00',)
        }

    }()
    public static readonly YOSHI = new ClearConditionEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI = new ClearConditionEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI = new ClearConditionEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI = new ClearConditionEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI = new ClearConditionEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI = new ClearConditionEntityImages.Null()
    public static readonly RED_YOSHI_EGG = new ClearConditionEntityImages.Null()
    public static readonly RED_YOSHI = new ClearConditionEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI = new ClearConditionEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA = new class ClearConditionEntityImages_Goomba extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'Kuribo_00',)
        }

    }()
    public static readonly GALOOMBA = new class ClearConditionEntityImages_Galoomba extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'Kuribo_01',)
        }

    }()
    public static readonly GOOMBRAT = new class ClearConditionEntityImages_Goombrat extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSmwAndSm3dw(this, 'Kuribo_01',)
        }

    }()
    public static readonly GOOMBUD = new class ClearConditionEntityImages_Goombud extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'Kuribo_01',)
        }

    }()

    public static readonly GREEN_KOOPA_TROOPA = new class ClearConditionEntityImages_GreenKoopaTroopa extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Nokonoko_00',)
        }

    }()
    public static readonly RED_KOOPA_TROOPA = new ClearConditionEntityImages.Null()
    public static readonly GREEN_BEACH_KOOPA = new ClearConditionEntityImages.Null()
    public static readonly RED_BEACH_KOOPA = new ClearConditionEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL = new class ClearConditionEntityImages_GreenKoopaShell extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSmb(this, 'NokonokoShell_00',)
        }

    }()
    public static readonly RED_KOOPA_SHELL = new ClearConditionEntityImages.Null()

    public static readonly DRY_BONES = new class ClearConditionEntityImages_DryBones extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Karon_00',)
        }

    }()
    public static readonly PARABONES = new ClearConditionEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES = new ClearConditionEntityImages.Null()
    public static readonly DRY_BONES_SHELL = new class ClearConditionEntityImages_DryBonesShell extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Karon_01',)
        }

    }()

    public static readonly BUZZY_BEETLE = new class ClearConditionEntityImages_BuzzyBeetle extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Met_00',)
        }

    }()
    public static readonly PARA_BEETLE = new ClearConditionEntityImages.Null()
    public static readonly BUZZY_SHELL = new class ClearConditionEntityImages_BuzzyShell extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Met_01',)
        }

    }()

    public static readonly SPINY = new class ClearConditionEntityImages_Spiny extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Togezo_00',)
        }

    }()
    public static readonly WINGED_SPINY = new ClearConditionEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE = new ClearConditionEntityImages.Null()
    public static readonly SPINY_EGG = new ClearConditionEntityImages.Null()
    public static readonly SPINY_SHELL = new class ClearConditionEntityImages_SpinyShell extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Togezo_01',)
        }

    }()

    public static readonly SPIKE_TOP = new class ClearConditionEntityImages_SpikeTop extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'TogeMet_00',)
        }

    }()
    public static readonly WINGED_SPIKE_TOP = new ClearConditionEntityImages.Null()
    public static readonly FAST_SPIKE_TOP = new ClearConditionEntityImages.Null()
    public static readonly FAST_WINGED_SPIKE_TOP = new ClearConditionEntityImages.Null()

    public static readonly SKIPSQUEAK = new class ClearConditionEntityImages_Skipsqueak extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Pyonchu_00',)
        }

    }()
    public static readonly SPINY_SKIPSQUEAK = new ClearConditionEntityImages.Null()

    public static readonly ANT_TROOPER = new class ClearConditionEntityImages_AntTrooper extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Arihei_00',)
        }

    }()
    public static readonly HORNED_ANT_TROOPER = new ClearConditionEntityImages.Null()

    public static readonly STINGBY = new class ClearConditionEntityImages_Stingby extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Hacchin_00',)
        }

    }()

    public static readonly CHEEP_CHEEP = new class ClearConditionEntityImages_CheepCheep extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSmwAndNsmbu(this, 'Pukupuku_00',)
        }

    }()
    public static readonly BLURPS = new class ClearConditionEntityImages_Blurps extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'Pukupuku_01',)
        }

    }()
    public static readonly DEEP_CHEEP = new class ClearConditionEntityImages_DeepCheep extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlyNsmbu(this, 'Pukupuku_01',)
        }

    }()
    public static readonly FISH_BONE = new class ClearConditionEntityImages_FishBone extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'FishBone_00',)
        }

    }()

    public static readonly BLOOPER = new class ClearConditionEntityImages_Blooper extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Gesso_00',)
        }

    }()
    public static readonly BLOOPER_NANNY = new ClearConditionEntityImages.Null()
    public static readonly BABY_BLOOPER = new ClearConditionEntityImages.Null()

    public static readonly PORCUPUFFER = new class ClearConditionEntityImages_Porcupuffer extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Fugumannen_00',)
        }

    }()

    public static readonly WIGGLER = new class ClearConditionEntityImages_Wiggler extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Hanachan_00',)
        }

    }()
    public static readonly ANGRY_WIGGLER = new ClearConditionEntityImages.Null()

    public static readonly PIRANHA_PLANT = new class ClearConditionEntityImages_PiranhaPlant extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSmw(this, 'Pakkun_00',)
        }

    }()
    public static readonly JUMPING_PIRANHA_PLANT = new class ClearConditionEntityImages_JumpingPiranhaPlant extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'Pakkun_00',)
        }

    }()
    public static readonly FIRE_PIRANHA_PLANT = new class ClearConditionEntityImages_FirePiranhaPlant extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySmw(this, 'Pakkun_01',)
        }

    }()
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT = new ClearConditionEntityImages.Null()
    public static readonly MUNCHER = new class ClearConditionEntityImages_Muncher extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'BlackPakkun_00',)
        }

    }()
    public static readonly PIRANHA_CREEPER = new class ClearConditionEntityImages_PiranhaCreeper extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'PackunPipe_00',)
        }

    }()

    public static readonly CHAIN_CHOMP = new ClearConditionEntityImages.Null()
    public static readonly UNCHAINED_CHOMP = new class ClearConditionEntityImages_UnchainedChomp extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Wanwan_00',)
        }

    }()
    public static readonly CHAIN_CHOMP_STUMP = new ClearConditionEntityImages.Null()

    public static readonly SPIKE = new class ClearConditionEntityImages_Spike extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Gabon_00',)
        }

    }()
    public static readonly SPIKE_BALL = new ClearConditionEntityImages.Null()
    public static readonly SNOWBALL = new ClearConditionEntityImages.Null()

    public static readonly LAKITU = new class ClearConditionEntityImages_Lakitu extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Jugem_00',)
        }

    }()
    public static readonly LAKITU_CLOUD = new class ClearConditionEntityImages_LakituCloud extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Jugem_01',)
        }

    }()

    public static readonly BOO = new class ClearConditionEntityImages_Boo extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Teresa_00',)
        }

    }()
    public static readonly STRETCH = new ClearConditionEntityImages.Null()
    public static readonly BOO_BUDDIES = new ClearConditionEntityImages.Null()
    public static readonly PEEPA = new class ClearConditionEntityImages_Peepa extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Teresa_01',)
        }

    }()

    public static readonly BOB_OMB = new class ClearConditionEntityImages_BobOmb extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Bombhei_00',)
        }

    }()
    public static readonly LIT_BOB_OMB = new ClearConditionEntityImages.Null()

    public static readonly POKEY = new class ClearConditionEntityImages_Pokey extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Sambo_00',)
        }

    }()
    public static readonly SNOW_POKEY = new ClearConditionEntityImages.Null()

    public static readonly THWOMP = new class ClearConditionEntityImages_Thwomp extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Dossun_00',)
        }

    }()

    public static readonly MONTY_MOLE = new class ClearConditionEntityImages_MontyMole extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'ChoroPoo_00',)
        }

    }()
    public static readonly ROCKY_WRENCH = new class ClearConditionEntityImages_RockyWrench extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Poo_00',)
        }

    }()
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH = new ClearConditionEntityImages.Null()

    public static readonly MAGIKOOPA = new class ClearConditionEntityImages_Magikoopa extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Kameck_00',)
        }

    }()
    public static readonly MAGIKOOPA_PROJECTILE = new ClearConditionEntityImages.Null()

    public static readonly HAMMER_BRO = new class ClearConditionEntityImages_HammerBro extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Bros_00',)
        }

    }()
    public static readonly SLEDGE_BRO = new class ClearConditionEntityImages_SledgeBro extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'MegaBros_00',)
        }

    }()
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO = new ClearConditionEntityImages.Null()
    public static readonly FIRE_BRO = new ClearConditionEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO = new ClearConditionEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO = new ClearConditionEntityImages.Null()

    public static readonly LAVA_BUBBLE = new class ClearConditionEntityImages_LavaBubble extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Bubble_00',)
        }

    }()

    public static readonly MECHAKOOPA = new class ClearConditionEntityImages_Mechakoopa extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'KoopaMecha_00',)
        }

    }()
    public static readonly BLASTA_MECHAKOOPA = new ClearConditionEntityImages.Null()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA = new ClearConditionEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA = new ClearConditionEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new ClearConditionEntityImages.Null()

    public static readonly CHARVAARGH = new class ClearConditionEntityImages_Charvaargh extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'MagmaFish_00',)
        }

    }()

    public static readonly BULLY = new class ClearConditionEntityImages_Bully extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Donketsu_00',)
        }

    }()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER = new ClearConditionEntityImages.Null()
    public static readonly BULLET_BILL = new class ClearConditionEntityImages_BulletBill extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Killer_00',)
        }

    }()
    public static readonly BULL_EYE_BLASTER = new ClearConditionEntityImages.Null()
    public static readonly BULL_EYE_BILL = new ClearConditionEntityImages.Null()
    public static readonly CAT_BULLET_BILL = new ClearConditionEntityImages.Null()

    public static readonly BANZAI_BILL = new class ClearConditionEntityImages_BanzaiBill extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'MagnumKiller_00',)
        }

    }()
    public static readonly BULL_EYE_BANZAI = new ClearConditionEntityImages.Null()
    public static readonly CAT_BANZAI_BILL = new ClearConditionEntityImages.Null()

    public static readonly CANNON = new ClearConditionEntityImages.Null()
    public static readonly CANNONBALL = new ClearConditionEntityImages.Null()
    public static readonly RED_CANNON = new ClearConditionEntityImages.Null()
    public static readonly RED_CANNONBALL = new ClearConditionEntityImages.Null()

    public static readonly BURNER = new ClearConditionEntityImages.Null()

    public static readonly FIRE_BAR = new ClearConditionEntityImages.Null()

    public static readonly SKEWER = new ClearConditionEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR = new class ClearConditionEntityImages_KoopaClownCar extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notNsmbuAndSm3dw(this, 'KoopaClown_00',)
        }

    }()
    public static readonly JUNIOR_CLOWN_CAR = new class ClearConditionEntityImages_JuniorClownCar extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlyNsmbu(this, 'KoopaClown_00',)
        }

    }()
    public static readonly FIRE_KOOPA_CLOWN_CAR = new ClearConditionEntityImages.Null()
    public static readonly FIRE_JUNIOR_CLOWN_CAR = new ClearConditionEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR = new ClearConditionEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR = new class ClearConditionEntityImages_KoopaTroopaCar extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'KoopaCar_00',)
        }

    }()
    public static readonly CAR = new ClearConditionEntityImages.Null()

    public static readonly GRINDER = new ClearConditionEntityImages.Null()

    public static readonly ANGRY_SUN = new class ClearConditionEntityImages_AngrySun extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'SunMoon_00',)
        }

    }()
    public static readonly MOON = new ClearConditionEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER = new class ClearConditionEntityImages_Bowser extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Koopa_00',)
        }

    }()
    public static readonly MEOWSER = new class ClearConditionEntityImages_Meowser extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Koopa_00',)
        }

    }()
    public static readonly FIRE_THROWN_BY_A_BOWSER = new ClearConditionEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER = new ClearConditionEntityImages.Null()

    public static readonly BOWSER_JR = new class ClearConditionEntityImages_BowserJr extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'KoopaJr_00',)
        }

    }()
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR = new ClearConditionEntityImages.Null()

    public static readonly BOOM_BOOM = new class ClearConditionEntityImages_BoomBoom extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'Bunbun_00',)
        }

    }()
    public static readonly POM_POM = new class ClearConditionEntityImages_PomPom extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'Bunbun_01',)
        }

    }()
    public static readonly POM_POM_CLONE = new ClearConditionEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM = new ClearConditionEntityImages.Null()

    public static readonly LARRY = new class ClearConditionEntityImages_Larry extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Larry_00',)
        }

    }()
    public static readonly LARRY_WAND = new ClearConditionEntityImages.Null()
    public static readonly LARRY_PROJECTILE = new ClearConditionEntityImages.Null()

    public static readonly IGGY = new class ClearConditionEntityImages_Iggy extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Iggy_00',)
        }

    }()
    public static readonly IGGY_WAND = new ClearConditionEntityImages.Null()
    public static readonly IGGY_PROJECTILE = new ClearConditionEntityImages.Null()

    public static readonly WENDY = new class ClearConditionEntityImages_Wendy extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Wendy_00',)
        }

    }()
    public static readonly WENDY_WAND = new ClearConditionEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY = new ClearConditionEntityImages.Null()
    public static readonly WENDY_PROJECTILE = new ClearConditionEntityImages.Null()

    public static readonly LEMMY = new class ClearConditionEntityImages_Lemmy extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Lemmy_00',)
        }

    }()
    public static readonly LEMMY_WAND = new ClearConditionEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY = new ClearConditionEntityImages.Null()
    public static readonly LEMMY_PROJECTILE = new ClearConditionEntityImages.Null()

    public static readonly ROY = new class ClearConditionEntityImages_Roy extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Roy_00',)
        }

    }()
    public static readonly ROY_WAND = new ClearConditionEntityImages.Null()
    public static readonly ROY_PROJECTILE = new ClearConditionEntityImages.Null()

    public static readonly MORTON = new class ClearConditionEntityImages_Morton extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Morton_00',)
        }

    }()
    public static readonly MORTON_WAND = new ClearConditionEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE = new ClearConditionEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE = new ClearConditionEntityImages.Null()

    public static readonly LUDWIG = new class ClearConditionEntityImages_Ludwig extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'Ludwig_00',)
        }

    }()
    public static readonly LUDWIG_WAND = new ClearConditionEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE = new ClearConditionEntityImages.Null()

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER = new ClearConditionEntityImages.Null()

    public static readonly SWINGING_CLAW = new class ClearConditionEntityImages_SwingingClaw extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSm3dw(this, 'BurankoCrane_00',)
        }

    }()

    public static readonly TWISTER = new ClearConditionEntityImages.Null()

    public static readonly ONE_WAY_WALL = new ClearConditionEntityImages.Null()

    public static readonly TRACK = new ClearConditionEntityImages.Null()
    public static readonly TRACK_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly VINE = new ClearConditionEntityImages.Null()
    public static readonly TREE = new class ClearConditionEntityImages_Tree extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'BellTree_00',)
        }

    }()

    public static readonly STARTING_ARROW = new ClearConditionEntityImages.Null()
    public static readonly ARROW_SIGN = new ClearConditionEntityImages.Null()

    public static readonly CHECKPOINT_FLAG = new ClearConditionEntityImages.Null()
    public static readonly GOAL_POLE = new ClearConditionEntityImages.Null()
    public static readonly GOAL_WITH_CARDS = new ClearConditionEntityImages.Null()
    public static readonly GIANT_GATE = new ClearConditionEntityImages.Null()

    public static readonly CASTLE = new ClearConditionEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR = new ClearConditionEntityImages.Null()
    public static readonly AXE = new ClearConditionEntityImages.Null()

    public static readonly DASH_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly SNAKE_BLOCK = new ClearConditionEntityImages.Null()
    public static readonly FAST_SNAKE_BLOCK = new ClearConditionEntityImages.Null()

    public static readonly CONVEYOR_BELT = new ClearConditionEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT = new ClearConditionEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE = new ClearConditionEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE = new ClearConditionEntityImages.Null()

    public static readonly LIFT = new ClearConditionEntityImages.Null()
    public static readonly FLIMSY_LIFT = new ClearConditionEntityImages.Null()
    public static readonly CLOUD_LIFT = new ClearConditionEntityImages.Null()

    public static readonly SEESAW = new ClearConditionEntityImages.Null()

    public static readonly LAVA_LIFT = new ClearConditionEntityImages.Null()
    public static readonly FAST_LAVA_LIFT = new ClearConditionEntityImages.Null()

    public static readonly CRATE = new class ClearConditionEntityImages_Crate extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'WoodBox_00',)
        }

    }()

    public static readonly KEY = new ClearConditionEntityImages.Null()
    public static readonly CURSED_KEY = new ClearConditionEntityImages.Null()
    public static readonly PHANTO = new ClearConditionEntityImages.Null()

    public static readonly TRAMPOLINE = new class ClearConditionEntityImages_Trampoline extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSmb(this, 'JumpStep_00',)
        }

    }()
    public static readonly HOP_CHOPS = new ClearConditionEntityImages.Null()

    public static readonly POW_BLOCK = new class ClearConditionEntityImages_PowBlock extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'PowBlock_00',)
        }

    }()
    public static readonly RED_POW_BLOCK = new class ClearConditionEntityImages_RedPowBlock extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.onlySm3dw(this, 'PowBlock_01',)
        }

    }()

    public static readonly P_SWITCH = new class ClearConditionEntityImages_PSwitch extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.all(this, 'PSwitch_00',)
        }

    }()

    public static readonly STONE = new class ClearConditionEntityImages_Stone extends ClearConditionEntityImages.Existant {

        protected override _createImage(): ClearConditionImage {
            return ImageCreator.notSmb(this, 'Stone_00',)
        }

    }()

    public static readonly WARP_DOOR = new ClearConditionEntityImages.Null()
    public static readonly P_WARP_DOOR = new ClearConditionEntityImages.Null()
    public static readonly KEY_DOOR = new ClearConditionEntityImages.Null()

    public static readonly WARP_BOX = new ClearConditionEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY = new ClearConditionEntityImages.Null()

    public static readonly WING = new ClearConditionEntityImages.Null()
    public static readonly PARACHUTE = new ClearConditionEntityImages.Null()

    public static readonly TOAD = new ClearConditionEntityImages.Null()
    public static readonly CAGED_TOADETTE = new ClearConditionEntityImages.Null()

    public static readonly BUBBLE = new ClearConditionEntityImages.Null()

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<ClearConditionEntityImages, typeof ClearConditionEntityImages, Entities, typeof Entities>
        = class CompanionEnum_ClearConditionEntityImages
        extends CompanionEnumWithParent<ClearConditionEntityImages, typeof ClearConditionEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ClearConditionEntityImages

        private constructor() {
            super(ClearConditionEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ClearConditionEntityImages()
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


    public abstract get image(): ClearConditionImage

    //endregion -------------------- Getter methods --------------------

}
