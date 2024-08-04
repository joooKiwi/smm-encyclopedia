import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {EditorImage}                          from 'core/entity/images/editor/EditorImage'
import type {PowerUpEditorImage}                   from 'core/entity/images/editor/PowerUpEditorImage'
import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}         from 'core/entity/Entities'
import * as ImageCreator  from 'core/entity/images/editorImageCreator'
import {EmptyEditorImage} from 'core/entity/images/editor/EmptyEditorImage'
import {Themes}           from 'core/theme/Themes'

/**
 * An {@link Entities} class made to hold an {@link EditorImage}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class EditorEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<EditorImage> {

    //region -------------------- Sub class --------------------

    /** A subclass of an {@link EditorEntityImages} to hold a non-existant {@link EditorImage} ({@link EmptyEditorImage}) */
    private static readonly Null = class NullEditorEntityImages extends EditorEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyEditorImage.get
        }

        public override get image(): EmptyEditorImage { return this.#image }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} */
    private static readonly Existant = (() => {
        abstract class ExistantEditorEntityImages extends EditorEntityImages {

            #image?: EditorImage

            public constructor() { super() }

            /**
             * Create the editor image
             *
             * @onlyCalledBy<{@link image}>
             * @onlyCalledOnce
             */
            protected abstract _createImage(): EditorImage

            public override get image(): EditorImage { return this.#image ??= this._createImage() }

        }

        return ExistantEditorEntityImages
    })()

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND = new class EditorEntityImages_Ground extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorGroundOrSlopeImages(this, 'Ground',)
        }

    }()
    public static readonly START_GROUND = new EditorEntityImages.Null()
    public static readonly GOAL_GROUND = new EditorEntityImages.Null()

    public static readonly STEEP_SLOPE = new class EditorEntityImages_SteepSlope extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorGroundOrSlopeImages(this, 'slope_l45',)
        }

    }()
    public static readonly GENTLE_SLOPE = new class EditorEntityImages_GentleSlope extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorGroundOrSlopeImages(this, 'slope_l30',)
        }

    }()

    public static readonly START_BLOCK = new EditorEntityImages.Null()
    public static readonly OCCLUDE_BLOCK = new EditorEntityImages.Null()

    public static readonly WATER = new EditorEntityImages.Null()
    public static readonly LAVA = new EditorEntityImages.Null()
    public static readonly POISON = new EditorEntityImages.Null()

    public static readonly PIPE = new class EditorEntityImages_Pipe extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorPipeImages(this,)
        }

    }()
    public static readonly CLEAR_PIPE = new class EditorEntityImages_ClearPipe extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'ToumeiDokan_00',)
        }

    }()

    public static readonly SPIKE_TRAP = new class EditorEntityImages_SpikeTrap extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(this, 'Toge_00', 'Toge_snow_night_00',)
        }

    }()
    public static readonly JELECTRO = new class EditorEntityImages_Jelectro extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmb3Images(this, 'Toge_water_00', Themes.UNDERWATER,)
        }

    }()
    public static readonly SEA_URCHIN = new class EditorEntityImages_SeaUrchin extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Toge_water_00', Themes.UNDERWATER,)
        }

    }()
    public static readonly SPIKE_BLOCK = new class EditorEntityImages_SpikeBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['TogeBlock_00', 'TogeBlock_01', 'TogeBlock_02',],)
        }

    }()

    public static readonly MUSHROOM_PLATFORM = new class EditorEntityImages_MushroomPlatform extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorMushroomPlatformImages(this,)
        }

    }()
    public static readonly SEMISOLID_PLATFORM = new class EditorEntityImages_SemisolidPlatform extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorSemisolidPlatformImages(this,)
        }

    }()
    public static readonly BRIDGE = new class EditorEntityImages_Bridge extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorBridgeImages(this,)
        }

    }()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK = new class EditorEntityImages_BrickBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorBrickBlockImages(this,)
        }

    }()
    public static readonly CRISTAL_BLOCK = new class EditorEntityImages_CristalBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorCristalBlockImages(this,)
        }

    }()
    public static readonly ROTATING_BLOCK = new class EditorEntityImages_RotatingBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'RengaBlock_00',)
        }

    }()

    public static readonly HARD_BLOCK = new class EditorEntityImages_HardBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorHardBlockImages(this,)
        }

    }()
    public static readonly ROCK_BLOCK = new class EditorEntityImages_RockBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'HardBlock_00',)
        }

    }()

    public static readonly QUESTION_MARK_BLOCK = new class EditorEntityImages_QuestionMarkBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNightSnowInSmbAndSmb3Images(this, 'HatenaBlock_00', 'HatenaBlock_snow_night_00',)
        }

    }()
    public static readonly HIDDEN_BLOCK = new class EditorEntityImages_HiddenBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'ClearBlock_00',)
        }

    }()
    public static readonly EMPTY_BLOCK = new EditorEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK = new class EditorEntityImages_ExclamationMarkBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BikkuriBlock_00',)
        }

    }()

    public static readonly NOTE_BLOCK = new class EditorEntityImages_NoteBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(this, 'OnpuBlock_00', 'OnpuBlock_snow_night_00',)
        }

    }()
    public static readonly MUSIC_BLOCK = new class EditorEntityImages_MusicBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(this, 'OnpuBlock_01', 'OnpuBlock_snow_night_01',)
        }

    }()

    public static readonly DONUT_BLOCK = new class EditorEntityImages_DonutBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNightSnowInSmbAndSmb3Images(this, 'ChikuwaBlock_00', 'ChikuwaBlock_snow_night_00',)
        }

    }()

    public static readonly CLOUD_BLOCK = new class EditorEntityImages_CloudBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorCloudBlockImages(this,)
        }

    }()

    public static readonly ON_OFF_SWITCH = new class EditorEntityImages_OnOffBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'OnOffSwitch_00',)
        }

    }()
    public static readonly DOTTED_LINE_BLOCK = new class EditorEntityImages_DottedLineBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['OnOffBlock_00', 'OnOffBlock_01',],)
        }

    }()

    public static readonly P_BLOCK = new class EditorEntityImages_PBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['PBlock_00', 'PBlock_01',],)
        }

    }()

    public static readonly BLINKING_BLOCK = new class EditorEntityImages_BlinkingBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['Chikachika_00', 'Chikachika_01',],)
        }

    }()

    public static readonly ICE_BLOCK = new class EditorEntityImages_IceBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNightSnowInSmb3Images(this, 'IceBlock_00', 'IceBlock_snow_night_00',)
        }

    }()
    public static readonly ICICLE = new class EditorEntityImages_Icicle extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['Icicle_00', 'Icicle_01',],)
        }

    }()

    public static readonly COIN = new class EditorEntityImages_Coin extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Coin_00',)
        }

    }()
    public static readonly FROZEN_COIN = new class EditorEntityImages_FrozenCoin extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmb3Images(this, 'Coin_01', 'Coin_snow_night_01',)
        }

    }()
    public static readonly TEN_COIN = new class EditorEntityImages_TenCoin extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, '10Coin_00',)
        }

    }()
    public static readonly THIRTY_COIN = new class EditorEntityImages_ThirtyCoin extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, '10Coin_01',)
        }

    }()
    public static readonly FIFTY_COIN = new class EditorEntityImages_FiftyCoin extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, '10Coin_02',)
        }

    }()
    public static readonly PINK_COIN = new class EditorEntityImages_PinkCoin extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'PinkCoin_00',)
        }

    }()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM = new class EditorEntityImages_SuperMushroom extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SuperKinoko_00',)
        }

    }()

    public static readonly FIRE_FLOWER = new class EditorEntityImages_FireFlower extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorImages(this, 'FireFlower_00', 'FireFlowerUni_00',)
        }

    }()
    public static readonly FIREBALL_THROWN_BY_A_PLAYER = new EditorEntityImages.Null()

    public static readonly SUPERBALL_FLOWER = new class EditorEntityImages_SuperballFlower extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmbImages(this, 'FireFlower_01', 'FireFlowerUni_01',)
        }

    }()
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER = new EditorEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM = new EditorEntityImages.Null()
    public static readonly WEIRD_MUSHROOM = new EditorEntityImages.Null()

    public static readonly MASTER_SWORD = new class EditorEntityImages_MasterSword extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmbImages(this, 'SuperKinoko_01',)
        }

    }()
    public static readonly BOMB_THROWN_BY_A_LINK = new EditorEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK = new EditorEntityImages.Null()

    public static readonly BIG_MUSHROOM = new class EditorEntityImages_BigMushroom extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmbImages(this, 'DekaKinoko_00', 'DekaKinokoUni_00',)
        }

    }()
    public static readonly BIG_MUSHROOM_CLASSIC = new EditorEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN = new EditorEntityImages.Null()

    public static readonly SMB2_MUSHROOM = new class EditorEntityImages_SMB2Mushroom extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmbImages(this, 'KinokoUSA_00', 'KinokoUSAUni_00')
        }

    }()

    public static readonly SUPER_LEAF = new class EditorEntityImages_SuperLeaf extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmb3Images(this, 'SuperKonoha_00', 'SuperKonohaUni_00',)
        }

    }()

    public static readonly FROG_SUIT = new class EditorEntityImages_FrogSuit extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmb3Images(this, 'FrogSuit_00', 'FrogSuitUni_00',)
        }

    }()

    public static readonly CAPE_FEATHER = new class EditorEntityImages_CapeFeather extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmwImages(this, 'MantleWing_00', 'MantleWingUni_00',)
        }

    }()

    public static readonly POWER_BALLOON = new class EditorEntityImages_PowerBalloon extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmwImages(this, 'PowerBalloon_00', 'PowerBalloonUni_00',)
        }

    }()

    public static readonly PROPELLER_MUSHROOM = new class EditorEntityImages_PropellerMushroom extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInNsmbuImages(this, 'PropellerKinoko_00', 'PropellerKinokoUni_00',)
        }

    }()

    public static readonly SUPER_ACORN = new class EditorEntityImages_SuperAcorn extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInNsmbuImages(this, 'SuperDonguri_00', 'SuperDonguriUni_00',)
        }

    }()

    public static readonly SUPER_BELL = new class EditorEntityImages_SuperBell extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSm3dwImages(this, 'SuperBell_00', 'SuperBellUni_00',)
        }

    }()

    public static readonly SUPER_HAMMER = new class EditorEntityImages_SuperHammer extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSm3dwImages(this, 'SuperHammer_00', 'SuperHammerUni_00',)
        }

    }()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER = new EditorEntityImages.Null()

    public static readonly BOOMERANG_FLOWER = new class EditorEntityImages_BoomerangFlower extends EditorEntityImages.Existant {

        protected override _createImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSm3dwImages(this, 'BoomerangFlower_00', 'BoomerangFlowerUni_00',)
        }

    }()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER = new EditorEntityImages.Null()

    public static readonly CANNON_BOX = new class EditorEntityImages_CannonBox extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxKiller_00',)
        }

    }()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER = new EditorEntityImages.Null()

    public static readonly PROPELLER_BOX = new class EditorEntityImages_PropellerBox extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxPropeller_00',)
        }

    }()

    public static readonly GOOMBA_MASK = new class EditorEntityImages_GoombaMask extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxKuribo_00',)
        }

    }()

    public static readonly BULLET_BILL_MASK = new class EditorEntityImages_BulletBillMask extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxKillerPlayer_00',)
        }

    }()

    public static readonly RED_POW_BOX = new class EditorEntityImages_RedPowBox extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxPow_00',)
        }

    }()

    public static readonly SUPER_STAR = new class EditorEntityImages_SuperStar extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SuperStar_00',)
        }

    }()

    public static readonly ONE_UP_MUSHROOM = new class EditorEntityImages_OneUpMushroom extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, '1upKinoko_00',)
        }

    }()
    public static readonly ROTTEN_MUSHROOM = new class EditorEntityImages_RottenMushroom extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'DokuKinoko_00',)
        }

    }()

    public static readonly SHOE_GOOMBA = new class EditorEntityImages_ShoeGoomba extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmbAndSmb3Images(this, 'KutsuKuribo_00',)
        }

    }()
    public static readonly SHOE = new EditorEntityImages.Null()
    public static readonly STILETTO_GOOMBA = new class EditorEntityImages_StilettoGoomba extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmbAndSmb3Images(this, 'KutsuKuribo_01',)
        }

    }()
    public static readonly STILETTO = new EditorEntityImages.Null()
    public static readonly YOSHI_EGG = new class EditorEntityImages_YoshiEgg extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwAndNsmbuImages(this, 'YosshiEgg_00',)
        }

    }()
    public static readonly YOSHI = new EditorEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI = new EditorEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI = new EditorEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI = new EditorEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI = new EditorEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI = new EditorEntityImages.Null()
    public static readonly RED_YOSHI_EGG = new class EditorEntityImages_RedYoshiEgg extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwAndNsmbuImages(this, 'YosshiEggRed_00',)
        }

    }()
    public static readonly RED_YOSHI = new EditorEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI = new EditorEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA = new class EditorEntityImages_Goomba extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSmwImages(this, 'Kuribo_00',)
        }

    }()
    public static readonly GALOOMBA = new class EditorEntityImages_Galoomba extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Kuribo_00',)
        }

    }()
    public static readonly GOOMBRAT = new class EditorEntityImages_Goombrat extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSmwAndSm3dwImages(this, 'Kuribo_01',)
        }

    }()
    public static readonly GOOMBUD = new class EditorEntityImages_Goombud extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Kuribo_01',)
        }

    }()

    public static readonly GREEN_KOOPA_TROOPA = new class EditorEntityImages_GreenKoopaTroopa extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Nokonoko_00',)
        }

    }()
    public static readonly RED_KOOPA_TROOPA = new class EditorEntityImages_RedKoopaTroopa extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Nokonoko_01',)
        }

    }()
    public static readonly GREEN_BEACH_KOOPA = new EditorEntityImages.Null()
    public static readonly RED_BEACH_KOOPA = new EditorEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL = new EditorEntityImages.Null()
    public static readonly RED_KOOPA_SHELL = new EditorEntityImages.Null()

    public static readonly DRY_BONES = new class EditorEntityImages_DryBones extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Karon_00',)
        }

    }()
    public static readonly PARABONES = new EditorEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES = new EditorEntityImages.Null()
    public static readonly DRY_BONES_SHELL = new class EditorEntityImages_DryBonesShell extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Karon_01',)
        }

    }()

    public static readonly BUZZY_BEETLE = new class EditorEntityImages_BuzzyBeetle extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Met', 0,)
        }

    }()
    public static readonly PARA_BEETLE = new EditorEntityImages.Null()
    public static readonly BUZZY_SHELL = new class EditorEntityImages_BuzzyShell extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Met', 1,)
        }

    }()

    public static readonly SPINY = new class EditorEntityImages_Spiny extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Togezo_00',)
        }

    }()
    public static readonly WINGED_SPINY = new EditorEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE = new EditorEntityImages.Null()
    public static readonly SPINY_EGG = new EditorEntityImages.Null()
    public static readonly SPINY_SHELL = new class EditorEntityImages_SpinyShell extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Togezo_01',)
        }

    }()

    public static readonly SPIKE_TOP = new class EditorEntityImages_SpikeTop extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'TogeMet_00',)
        }

    }()
    public static readonly WINGED_SPIKE_TOP = new EditorEntityImages.Null()
    public static readonly FAST_SPIKE_TOP = new class EditorEntityImages_FastSpikeTop extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'TogeMet_01',)
        }

    }()
    public static readonly FAST_WINGED_SPIKE_TOP = new EditorEntityImages.Null()

    public static readonly SKIPSQUEAK = new class EditorEntityImages_Skipsqueak extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Pyonchu_00',)
        }

    }()
    public static readonly SPINY_SKIPSQUEAK = new class EditorEntityImages_SpinySkipsqueak extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Pyonchu_01',)
        }

    }()

    public static readonly ANT_TROOPER = new class EditorEntityImages_AntTrooper extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Arihei_00',)
        }

    }()
    public static readonly HORNED_ANT_TROOPER = new class EditorEntityImages_HornedAntTrooper extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Arihei_01',)
        }

    }()

    public static readonly STINGBY = new class EditorEntityImages_Stingby extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Hacchin_00',)
        }

    }()

    public static readonly CHEEP_CHEEP = new class EditorEntityImages_CheepCheep extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorCheepCheepImages(this,)
        }

    }()
    public static readonly BLURPS = new class EditorEntityImages_Blurps extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Pukupuku_00',)
        }

    }()
    public static readonly DEEP_CHEEP = new class EditorEntityImages_DeepCheep extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNsmbuImages(this, 'Pukupuku_00',)
        }

    }()
    public static readonly FISH_BONE = new class EditorEntityImages_FishBone extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'FishBone_00',)
        }

    }()

    public static readonly BLOOPER = new class EditorEntityImages_Blooper extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Gesso_00',)
        }

    }()
    public static readonly BLOOPER_NANNY = new class EditorEntityImages_BlooperNanny extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Gesso_01',)
        }

    }()
    public static readonly BABY_BLOOPER = new EditorEntityImages.Null()

    public static readonly PORCUPUFFER = new class EditorEntityImages_Porcupuffer extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Fugumannen_00',)
        }

    }()

    public static readonly WIGGLER = new class EditorEntityImages_Wiggler extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Hanachan_00',)
        }

    }()
    public static readonly ANGRY_WIGGLER = new class EditorEntityImages_AngryWiggler extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Hanachan_01',)
        }

    }()

    public static readonly PIRANHA_PLANT = new class EditorEntityImages_PiranhaPlant extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSmwImages(this, 'Pakkun_00',)
        }

    }()
    public static readonly JUMPING_PIRANHA_PLANT = new class EditorEntityImages_JumpingPiranhaPlant extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Pakkun_00',)
        }

    }()
    public static readonly FIRE_PIRANHA_PLANT = new class EditorEntityImages_FirePiranhaPlant extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Pakkun_01',)
        }

    }()
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT = new EditorEntityImages.Null()
    public static readonly MUNCHER = new class EditorEntityImages_Muncher extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'BlackPakkun', 0,)
        }

    }()
    public static readonly PIRANHA_CREEPER = new class EditorEntityImages_PiranhaCreeper extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['PackunPipe_00', 'PackunPipe_01',],)
        }

    }()

    public static readonly CHAIN_CHOMP = new class EditorEntityImages_ChainChomp extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Wanwan', 0,)
        }

    }()
    public static readonly UNCHAINED_CHOMP = new class EditorEntityImages_UnchainedChomp extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Wanwan', 1,)
        }

    }()
    public static readonly CHAIN_CHOMP_STUMP = new EditorEntityImages.Null()

    public static readonly SPIKE = new class EditorEntityImages_Spike extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Gabon_00',)
        }

    }()
    public static readonly SPIKE_BALL = new class EditorEntityImages_SpikeBall extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorSpikeBallImages(this)
        }

    }()
    public static readonly SNOWBALL = new class EditorEntityImages_Snowball extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSnowImages(this, 'Gabon_snow_01',)
        }

    }()

    public static readonly LAKITU = new class EditorEntityImages_Lakitu extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Jugem_00',)
        }

    }()
    public static readonly LAKITU_CLOUD = new class EditorEntityImages_LakituCloud extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Jugem_01',)
        }

    }()

    public static readonly BOO = new class EditorEntityImages_Boo extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Teresa_00',)
        }

    }()
    public static readonly STRETCH = new EditorEntityImages.Null()
    public static readonly BOO_BUDDIES = new class EditorEntityImages_BooBuddies extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Teresa_01',)
        }

    }()
    public static readonly PEEPA = new class EditorEntityImages_Peepa extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Teresa_01',)
        }

    }()

    public static readonly BOB_OMB = new class EditorEntityImages_BobOmb extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInBlueVariantInSmbAndSmb3Images(this, 'Bombhei', 0,)
        }

    }()
    public static readonly LIT_BOB_OMB = new class EditorEntityImages_LitBobOmb extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bombhei_01',)
        }

    }()

    public static readonly POKEY = new class EditorEntityImages_Pokey extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Sambo_00',)
        }

    }()
    public static readonly SNOW_POKEY = new class EditorEntityImages_SnowPokey extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSnowImages(this, 'Sambo_snow_00',)
        }

    }()

    public static readonly THWOMP = new class EditorEntityImages_Thwomp extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Dossun_00',)
        }

    }()

    public static readonly MONTY_MOLE = new class EditorEntityImages_MontyMole extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'ChoroPoo_00',)
        }

    }()
    public static readonly ROCKY_WRENCH = new class EditorEntityImages_RockyWrench extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Poo_00',)
        }

    }()
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH = new EditorEntityImages.Null()

    public static readonly MAGIKOOPA = new class EditorEntityImages_Magikoopa extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Kameck_00',)
        }

    }()
    public static readonly MAGIKOOPA_PROJECTILE = new EditorEntityImages.Null()

    public static readonly HAMMER_BRO = new class EditorEntityImages_HammerBro extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bros_00',)
        }

    }()
    public static readonly SLEDGE_BRO = new class EditorEntityImages_SledgeBro extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'MegaBros_00',)
        }

    }()
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO = new EditorEntityImages.Null()
    public static readonly FIRE_BRO = new class EditorEntityImages_FireBro extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Bros_01',)
        }

    }()
    public static readonly HEAVY_FIRE_BRO = new class EditorEntityImages_HeavyFireBro extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'MegaBros_01',)
        }

    }()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO = new EditorEntityImages.Null()

    public static readonly LAVA_BUBBLE = new class EditorEntityImages_LavaBubble extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bubble_00',)
        }

    }()

    public static readonly MECHAKOOPA = new class EditorEntityImages_Mechakoopa extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaMecha_00',)
        }

    }()
    public static readonly BLASTA_MECHAKOOPA = new class EditorEntityImages_BlastaMechakoopa extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaMecha_01',)
        }

    }()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA = new EditorEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA = new class EditorEntityImages_ZappaMechakoopa extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaMecha_02',)
        }

    }()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new EditorEntityImages.Null()

    public static readonly CHARVAARGH = new class EditorEntityImages_Charvaargh extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'MagmaFish_00',)
        }

    }()

    public static readonly BULLY = new class EditorEntityImages_Bully extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Donketsu_00',)
        }

    }()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER = new class EditorEntityImages_BillBlaster extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInBlueVariantInSmbAndSmb3Images(this, 'KillerHoudai', 0,)
        }

    }()
    public static readonly BULLET_BILL = new EditorEntityImages.Null()
    public static readonly BULL_EYE_BLASTER = new class EditorEntityImages_BullEyeBlaster extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'KillerHoudai_01',)
        }

    }()
    public static readonly BULL_EYE_BILL = new EditorEntityImages.Null()
    public static readonly CAT_BULLET_BILL = new EditorEntityImages.Null()

    public static readonly BANZAI_BILL = new class EditorEntityImages_BanzaiBill extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInBlueVariantInSmbAndSmb3Images(this, 'MagnumKiller', 0,)
        }

    }()
    public static readonly BULL_EYE_BANZAI = new class EditorEntityImages_BullEyeBanzai extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'MagnumKiller_01',)
        }

    }()
    public static readonly CAT_BANZAI_BILL = new class EditorEntityImages_CatBanzaiBill extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'MagnumKiller_01',)
        }

    }()

    public static readonly CANNON = new class EditorEntityImages_Cannon extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Houdai', 0,)
        }

    }()
    public static readonly CANNONBALL = new EditorEntityImages.Null()
    public static readonly RED_CANNON = new class EditorEntityImages_RedCannon extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Houdai_01',)
        }

    }()
    public static readonly RED_CANNONBALL = new EditorEntityImages.Null()

    public static readonly BURNER = new class EditorEntityImages_Burner extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorInNotSm3dwImages(this, ['Burner_00', 'Burner_01',],)
        }

    }()

    public static readonly FIRE_BAR = new class EditorEntityImages_FireBar extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'FireBar_00',)
        }

    }()

    public static readonly SKEWER = new class EditorEntityImages_Skewer extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'TogeKonbo', 0,)
        }

    }()

    public static readonly KOOPA_CLOWN_CAR = new class EditorEntityImages_KoopaClownCar extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotNsmbuAndSm3dwImages(this, 'KoopaClown_00',)
        }

    }()
    public static readonly JUNIOR_CLOWN_CAR = new class EditorEntityImages_JuniorClownCar extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNsmbuImages(this, 'KoopaClown_00',)
        }

    }()
    public static readonly FIRE_KOOPA_CLOWN_CAR = new class EditorEntityImages_FireKoopaClownCar extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotNsmbuAndSm3dwImages(this, 'KoopaClown_01',)
        }

    }()
    public static readonly FIRE_JUNIOR_CLOWN_CAR = new class EditorEntityImages_FireJuniorClownCar extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNsmbuImages(this, 'KoopaClown_01',)
        }

    }()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR = new EditorEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR = new class EditorEntityImages_KoopaTroopaCar extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'KoopaCar_00',)
        }

    }()
    public static readonly CAR = new EditorEntityImages.Null()

    public static readonly GRINDER = new class EditorEntityImages_Grinder extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Saw_00',)
        }

    }()

    public static readonly ANGRY_SUN = new class EditorEntityImages_AngrySun extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'SunMoon_00',)
        }

    }()
    public static readonly MOON = new class EditorEntityImages_Moon extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'SunMoon_01',)
        }

    }()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss --------------------

    public static readonly BOWSER = new class EditorEntityImages_Bowser extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Koopa_00',)
        }

    }()
    public static readonly MEOWSER = new class EditorEntityImages_Meowser extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Koopa_00',)
        }

    }()
    public static readonly FIRE_THROWN_BY_A_BOWSER = new EditorEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER = new EditorEntityImages.Null()

    public static readonly BOWSER_JR = new class EditorEntityImages_BowserJr extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaJr_00',)
        }

    }()
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR = new EditorEntityImages.Null()

    public static readonly BOOM_BOOM = new class EditorEntityImages_BoomBoom extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bunbun_00',)
        }

    }()
    public static readonly POM_POM = new class EditorEntityImages_PomPom extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Bunbun_01',)
        }

    }()
    public static readonly POM_POM_CLONE = new EditorEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM = new EditorEntityImages.Null()

    public static readonly LARRY = new class EditorEntityImages_Larry extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Larry_00',)
        }

    }()
    public static readonly LARRY_WAND = new EditorEntityImages.Null()
    public static readonly LARRY_PROJECTILE = new EditorEntityImages.Null()

    public static readonly IGGY = new class EditorEntityImages_Iggy extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Iggy_00',)
        }

    }()
    public static readonly IGGY_WAND = new EditorEntityImages.Null()
    public static readonly IGGY_PROJECTILE = new EditorEntityImages.Null()

    public static readonly WENDY = new class EditorEntityImages_Wendy extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Wendy_00',)
        }

    }()
    public static readonly WENDY_WAND = new EditorEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY = new EditorEntityImages.Null()
    public static readonly WENDY_PROJECTILE = new EditorEntityImages.Null()

    public static readonly LEMMY = new class EditorEntityImages_Lemmy extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Lemmy_00',)
        }

    }()
    public static readonly LEMMY_WAND = new EditorEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY = new EditorEntityImages.Null()
    public static readonly LEMMY_PROJECTILE = new EditorEntityImages.Null()

    public static readonly ROY = new class EditorEntityImages_Roy extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Roy_00',)
        }

    }()
    public static readonly ROY_WAND = new EditorEntityImages.Null()
    public static readonly ROY_PROJECTILE = new EditorEntityImages.Null()

    public static readonly MORTON = new class EditorEntityImages_Morton extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Morton_00',)
        }

    }()
    public static readonly MORTON_WAND = new EditorEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE = new EditorEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE = new EditorEntityImages.Null()

    public static readonly LUDWIG = new class EditorEntityImages_Ludwig extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Ludwig_00',)
        }

    }()
    public static readonly LUDWIG_WAND = new EditorEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE = new EditorEntityImages.Null()

    //endregion -------------------- Boss --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER = new class EditorEntityImages_Bumper extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Marumaru_00',)
        }

    }()

    public static readonly SWINGING_CLAW = new class EditorEntityImages_SwingingClaw extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'BurankoCrane_00',)
        }

    }()

    public static readonly TWISTER = new class EditorEntityImages_Twister extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Tornado_00',)
        }

    }()

    public static readonly ONE_WAY_WALL = new class EditorEntityImages_OneWayWall extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Hanatari_00',)
        }

    }()

    public static readonly TRACK = new class EditorEntityImages_Track extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Rail_00',)
        }

    }()
    public static readonly TRACK_BLOCK = new class EditorEntityImages_TrackBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['OrbitBlock_00', 'OrbitBlock_01',],)
        }

    }()

    public static readonly VINE = new class EditorEntityImages_Vine extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'TsutaBlock_00',)
        }

    }()
    public static readonly TREE = new class EditorEntityImages_Tree extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorTreeImages(this,)
        }

    }()

    public static readonly STARTING_ARROW = new EditorEntityImages.Null()
    public static readonly ARROW_SIGN = new class EditorEntityImages_ArrowSign extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Yajirushi_00',)
        }

    }()

    public static readonly CHECKPOINT_FLAG = new class EditorEntityImages_CheckpointFlag extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'MiddleFlag_00',)
        }

    }()
    public static readonly GOAL_POLE = new EditorEntityImages.Null()
    public static readonly GOAL_WITH_CARDS = new EditorEntityImages.Null()
    public static readonly GIANT_GATE = new EditorEntityImages.Null()

    public static readonly CASTLE = new EditorEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR = new EditorEntityImages.Null()
    public static readonly AXE = new EditorEntityImages.Null()

    public static readonly DASH_BLOCK = new class EditorEntityImages_DashBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'DashBlock_00',)
        }

    }()

    public static readonly SNAKE_BLOCK = new class EditorEntityImages_SnakeBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SnakeBlock_00',)
        }

    }()
    public static readonly FAST_SNAKE_BLOCK = new class EditorEntityImages_FastSnakeBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SnakeBlock_01',)
        }

    }()

    public static readonly CONVEYOR_BELT = new class EditorEntityImages_ConveyorBelt extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'BeltConveyor_00',)
        }

    }()
    public static readonly FAST_CONVEYOR_BELT = new class EditorEntityImages_FastConveyorBelt extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'BeltConveyor_01',)
        }

    }()

    public static readonly MUSHROOM_TRAMPOLINE = new class EditorEntityImages_MushroomTrampoline extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['Trampoline_00', 'Trampoline_01',],)
        }

    }()
    public static readonly ON_OFF_TRAMPOLINE = new class EditorEntityImages_OnOffTrampoline extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['OnOffTrampoline_00', 'OnOffTrampoline_01',],)
        }

    }()

    public static readonly LIFT = new class EditorEntityImages_List extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Lift_00',)
        }

    }()
    public static readonly FLIMSY_LIFT = new class EditorEntityImages_FlimsyLift extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Lift_01',)
        }

    }()
    public static readonly CLOUD_LIFT = new class EditorEntityImages_CloudLift extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Lift_00',)
        }

    }()

    public static readonly SEESAW = new class EditorEntityImages_Seesaw extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Seesaw_00',)
        }

    }()

    public static readonly LAVA_LIFT = new class EditorEntityImages_LavaLift extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'YouganLift_00',)
        }

    }()
    public static readonly FAST_LAVA_LIFT = new class EditorEntityImages_FastLavaLift extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'YouganLift_01',)
        }

    }()

    public static readonly CRATE = new class EditorEntityImages_Crate extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'WoodBox_00',)
        }

    }()

    public static readonly KEY = new class EditorEntityImages_Key extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Key_00',)
        }

    }()
    public static readonly CURSED_KEY = new class EditorEntityImages_CursedKey extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSmbImages(this, 'Key_01',)
        }

    }()
    public static readonly PHANTO = new EditorEntityImages.Null()

    public static readonly TRAMPOLINE = new class EditorEntityImages_Trampoline extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['JumpStep_00', 'JumpStep_01',],)
        }

    }()
    public static readonly HOP_CHOPS = new class EditorEntityImages_HopChops extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Hopper_00',)
        }

    }()

    public static readonly POW_BLOCK = new class EditorEntityImages_PowBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'PowBlock_00',)
        }

    }()
    public static readonly RED_POW_BLOCK = new class EditorEntityImages_RedPowBlock extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'PowBlock_01',)
        }

    }()

    public static readonly P_SWITCH = new class EditorEntityImages_PSwitch extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'PSwitch_00',)
        }

    }()

    public static readonly STONE = new EditorEntityImages.Null()

    public static readonly WARP_DOOR = new class EditorEntityImages_WarpDoor extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Door_00',)
        }

    }()
    public static readonly P_WARP_DOOR = new class EditorEntityImages_PWarpDoor extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Door_01',)
        }

    }()
    public static readonly KEY_DOOR = new class EditorEntityImages_KeyDoor extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Door_02',)
        }

    }()

    public static readonly WARP_BOX = new class EditorEntityImages_WarpBox extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'WarpBox_00',)
        }

    }()
    public static readonly WARP_BOX_WITH_KEY = new class EditorEntityImages_WarpBoxWithKey extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'WarpBox_01',)
        }

    }()

    public static readonly WING = new class EditorEntityImages_Wing extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Wing_00',)
        }

    }()
    public static readonly PARACHUTE = new class EditorEntityImages_Parachute extends EditorEntityImages.Existant {

        protected override _createImage(): EditorImage {
            return ImageCreator.editorImages(this, 'parachute_00',)
        }

    }()

    public static readonly TOAD = new EditorEntityImages.Null()
    public static readonly CAGED_TOADETTE = new EditorEntityImages.Null()

    public static readonly BUBBLE = new EditorEntityImages.Null()

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<EditorEntityImages, typeof EditorEntityImages, Entities, typeof Entities>
        = class CompanionEnum_EditorEntities
        extends CompanionEnumWithParent<EditorEntityImages, typeof EditorEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EditorEntities

        private constructor() {
            super(EditorEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EditorEntities()
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

    public abstract get image(): EditorImage

    //endregion -------------------- Getter methods --------------------

}
