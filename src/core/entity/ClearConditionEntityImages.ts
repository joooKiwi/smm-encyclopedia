import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {ClearConditionImageFile}              from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage}                  from 'core/entity/images/clearCondition/ClearConditionImage'
import type {PossibleAcronym_InFile}               from 'core/gameStyle/GameStyles.types'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}                     from 'core/entity/Entities'
import {clearConditionImage}          from 'core/entity/file/fileCreator'
import {EmptyClearConditionImage}     from 'core/entity/images/clearCondition/EmptyClearConditionImage'
import {ClearConditionImageContainer} from 'core/entity/images/clearCondition/ClearConditionImage.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW
import SM3DW = GameStyles.SM3DW

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

    /** An abstract subclass of an {@link ClearConditionEntityImages} to hold a specific {@link PossibleEnglishName} */
    private static readonly Existant = (() => {
        abstract class ExistantClearConditionEntityImages<const NAME extends PossibleEnglishName, > extends ClearConditionEntityImages {

            readonly #englishName

            public constructor(englishName: NAME,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME { return this.#englishName }

        }

        return ExistantClearConditionEntityImages
    })()

    //region -------------------- Sub class (all game style) --------------------

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on all {@link GameStyles} */
    private static readonly ExistantOnAll = class ExistantOnAllClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<PossibleAcronym_InFile, FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<PossibleAcronym_InFile, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<PossibleAcronym_InFile, FILE_NAME, NAME>>([
                [SMB,   clearConditionImage(this, fileName, 'M1',),],
                [SMB3,  clearConditionImage(this, fileName, 'M3',),],
                [SMW,   clearConditionImage(this, fileName, 'MW',),],
                [NSMBU, clearConditionImage(this, fileName, 'WU',),],
                [SM3DW, clearConditionImage(this, fileName, '3W',),],
            ],)
        }

    }

    //endregion -------------------- Sub class (all game style) --------------------
    //region -------------------- Sub class (1 specific game style) --------------------

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on only {@link SMB} */
    private static readonly ExistantOnOnlySmb = class ExistantOnOnlySmbClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<'M1', FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<'M1', FILE_NAME, NAME>> {
            return this.#image ??= new ClearConditionImageContainer([[SMB, clearConditionImage(this, this.#fileName, 'M1',),],],)
        }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on only {@link SMB3} */
    private static readonly ExistantOnOnlySmb3 = class ExistantOnOnlySmb3ClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<'M3', FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<'M3', FILE_NAME, NAME>> {
            return this.#image ??= new ClearConditionImageContainer([[SMB3, clearConditionImage(this, this.#fileName, 'M3',),],],)
        }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on only {@link SMW} */
    private static readonly ExistantOnOnlySmw = class ExistantOnOnlySmwClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<'MW', FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<'MW', FILE_NAME, NAME>> {
            return this.#image ??= new ClearConditionImageContainer([[SMW, clearConditionImage(this, this.#fileName, 'MW',),],],)
        }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on only {@link NSMBU} */
    private static readonly ExistantOnOnlyNsmbu = class ExistantOnOnlyNsmbuClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<'WU', FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<'WU', FILE_NAME, NAME>> {
            return this.#image ??= new ClearConditionImageContainer([[NSMBU, clearConditionImage(this, this.#fileName, 'WU',),],],)
        }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on only {@link SM3DW} */
    private static readonly ExistantOnOnlySm3dw = class ExistantOnOnlySm3dwClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<'3W', FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<'3W', FILE_NAME, NAME>> {
            return this.#image ??= new ClearConditionImageContainer([[SM3DW, clearConditionImage(this, this.#fileName, '3W',),],],)
        }

    }

    //endregion -------------------- Sub class (1 specific game style) --------------------
    //region -------------------- Sub class (2 specific game style) --------------------

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on only {@link SMB} and {@link SMB3} */
    private static readonly ExistantOnOnlySmbAndSmb3 = class ExistantOnOnlySmbAndSmb3ClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<| 'M1' | 'M3', FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<| 'M1' | 'M3', FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<| 'M1' | 'M3', FILE_NAME, NAME>>([
                [SMB,  clearConditionImage(this, fileName, 'M1',),],
                [SMB3, clearConditionImage(this, fileName, 'M3',),],
            ],)
        }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on only {@link SMW} and {@link NSMBU} */
    private static readonly ExistantOnOnlySmwAndNsmbu = class ExistantOnOnlySmwAndNsmbuClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<| 'MW' | 'WU', FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<| 'MW' | 'WU', FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<| 'MW' | 'WU', FILE_NAME, NAME>>([
                [SMW,   clearConditionImage(this, fileName, 'MW',),],
                [NSMBU, clearConditionImage(this, fileName, 'WU',),],
            ],)
        }

    }

    //endregion -------------------- Sub class (2 specific game style) --------------------
    //region -------------------- Sub class (3 specific game style) --------------------

    /**
     * A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on all {@link GameStyles}
     * excluding {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantOnNotSmwAndNsmbu = class ExistantOnAllClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'MW' | 'WU'>, FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'MW' | 'WU'>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'MW' | 'WU'>, FILE_NAME, NAME>>([
                [SMB,   clearConditionImage(this, fileName, 'M1',),],
                [SMB3,  clearConditionImage(this, fileName, 'M3',),],
                [SM3DW, clearConditionImage(this, fileName, '3W',),],
            ],)
        }

    }

    /**
     * A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on all {@link GameStyles}
     * excluding {@link SMW} and {@link SM3DW}
     */
    private static readonly ExistantOnNotSmwAndSm3dw = class ExistantOnNotSmwAndSm3dwClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'MW' | '3W'>, FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'MW' | '3W'>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'MW' | '3W'>, FILE_NAME, NAME>>([
                [SMB,   clearConditionImage(this, fileName, 'M1',),],
                [SMB3,  clearConditionImage(this, fileName, 'M3',),],
                [NSMBU, clearConditionImage(this, fileName, 'WU',),],
            ],)
        }

    }

    /**
     * A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on all {@link GameStyles}
     * excluding {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantOnNotNsmbuAndSm3dw = class ExistantOnAllClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'WU' | '3W'>, FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'WU' | '3W'>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, | 'WU' | '3W'>, FILE_NAME, NAME>>([
                [SMB,  clearConditionImage(this, fileName, 'M1',),],
                [SMB3, clearConditionImage(this, fileName, 'M3',),],
                [SMW,  clearConditionImage(this, fileName, 'MW',),],
            ],)
        }

    }

    //endregion -------------------- Sub class (3 specific game style) --------------------
    //region -------------------- Sub class (4 specific game style) --------------------

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on all {@link GameStyles} excluding {@link SMB} */
    private static readonly ExistantOnNotSmb = class ExistantOnAllClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, 'M1'>, FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, 'M1'>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, 'M1'>, FILE_NAME, NAME>>([
                [SMB3,  clearConditionImage(this, fileName, 'M3',),],
                [SMW,   clearConditionImage(this, fileName, 'MW',),],
                [NSMBU, clearConditionImage(this, fileName, 'WU',),],
                [SM3DW, clearConditionImage(this, fileName, '3W',),],
            ],)
        }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on all {@link GameStyles} excluding {@link SMW} */
    private static readonly ExistantOnNotSmw = class ExistantOnAllClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, 'MW'>, FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, 'MW'>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, 'MW'>, FILE_NAME, NAME>>([
                [SMB,   clearConditionImage(this, fileName, 'M1',),],
                [SMB3,  clearConditionImage(this, fileName, 'M3',),],
                [NSMBU, clearConditionImage(this, fileName, 'WU',),],
                [SM3DW, clearConditionImage(this, fileName, '3W',),],
            ],)
        }

    }

    /** A subclass of an {@link ClearConditionEntityImages} to hold an existant {@link ClearConditionImage} on all {@link GameStyles} excluding {@link SM3DW} */
    private static readonly ExistantOnNotSm3dw = class ExistantOnAllClearConditionEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends ClearConditionEntityImages.Existant<NAME> {

        #image?: ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, '3W'>, FILE_NAME, NAME>>
        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public get image(): ClearConditionImage<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, '3W'>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            return this.#image = new ClearConditionImageContainer<ClearConditionImageFile<Exclude<PossibleAcronym_InFile, '3W'>, FILE_NAME, NAME>>([
                [SMB,   clearConditionImage(this, fileName, 'M1',),],
                [SMB3,  clearConditionImage(this, fileName, 'M3',),],
                [SMW,   clearConditionImage(this, fileName, 'MW',),],
                [NSMBU, clearConditionImage(this, fileName, 'WU',),],
            ],)
        }

    }

    //endregion -------------------- Sub class (4 specific game style) --------------------

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new ClearConditionEntityImages.Null()
    public static readonly START_GROUND =                                  new ClearConditionEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new ClearConditionEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new ClearConditionEntityImages.Null()
    public static readonly GENTLE_SLOPE =                                  new ClearConditionEntityImages.Null()

    public static readonly START_BLOCK =                                   new ClearConditionEntityImages.Null()
    public static readonly OCCLUDE_BLOCK =                                 new ClearConditionEntityImages.Null()

    public static readonly WATER =                                         new ClearConditionEntityImages.Null()
    public static readonly LAVA =                                          new ClearConditionEntityImages.Null()
    public static readonly POISON =                                        new ClearConditionEntityImages.Null()

    public static readonly PIPE =                                          new ClearConditionEntityImages.Null()
    public static readonly CLEAR_PIPE =                                    new ClearConditionEntityImages.Null()

    public static readonly SPIKE_TRAP =                                    new ClearConditionEntityImages.Null()
    public static readonly JELECTRO =                                      new ClearConditionEntityImages.Null()
    public static readonly SEA_URCHIN =                                    new ClearConditionEntityImages.Null()
    public static readonly SPIKE_BLOCK =                                   new ClearConditionEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM =                             new ClearConditionEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM =                            new ClearConditionEntityImages.Null()
    public static readonly BRIDGE =                                        new ClearConditionEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new ClearConditionEntityImages.Null()
    public static readonly CRISTAL_BLOCK =                                 new ClearConditionEntityImages.Null()
    public static readonly ROTATING_BLOCK =                                new ClearConditionEntityImages.Null()

    public static readonly HARD_BLOCK =                                    new ClearConditionEntityImages.Null()
    public static readonly ROCK_BLOCK =                                    new ClearConditionEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK =                           new ClearConditionEntityImages.Null()
    public static readonly HIDDEN_BLOCK =                                  new ClearConditionEntityImages.Null()
    public static readonly EMPTY_BLOCK =                                   new ClearConditionEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK =                        new ClearConditionEntityImages.Null()

    public static readonly NOTE_BLOCK =                                    new ClearConditionEntityImages.Null()
    public static readonly MUSIC_BLOCK =                                   new ClearConditionEntityImages.Null()

    public static readonly DONUT_BLOCK =                                   new ClearConditionEntityImages.Null()

    public static readonly CLOUD_BLOCK =                                   new ClearConditionEntityImages.Null()

    public static readonly ON_OFF_SWITCH =                                 new ClearConditionEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK =                             new ClearConditionEntityImages.Null()

    public static readonly P_BLOCK =                                       new ClearConditionEntityImages.Null()

    public static readonly BLINKING_BLOCK =                                new ClearConditionEntityImages.Null()

    public static readonly ICE_BLOCK =                                     new ClearConditionEntityImages.Null()
    public static readonly ICICLE =                                        new ClearConditionEntityImages.Null()

    public static readonly COIN =                                          new ClearConditionEntityImages.ExistantOnAll('Coin', 'Coin_00',)
    public static readonly FROZEN_COIN =                                   new ClearConditionEntityImages.Null()
    public static readonly TEN_COIN =                                      new ClearConditionEntityImages.ExistantOnAll('10-Coin', '10Coin_00',)
    public static readonly THIRTY_COIN =                                   new ClearConditionEntityImages.ExistantOnAll('30-Coin', '10Coin_01',)
    public static readonly FIFTY_COIN =                                    new ClearConditionEntityImages.ExistantOnAll('50-Coin', '10Coin_02',)
    public static readonly PINK_COIN =                                     new ClearConditionEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new ClearConditionEntityImages.ExistantOnAll('Super Mushroom', 'SuperKinoko_00',)

    public static readonly FIRE_FLOWER =                                   new ClearConditionEntityImages.ExistantOnAll('Fire Flower', 'FireFlower_00',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new ClearConditionEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new ClearConditionEntityImages.ExistantOnOnlySmb('Superball Flower', 'FireFlower_01',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new ClearConditionEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM =                              new ClearConditionEntityImages.Null()
    public static readonly WEIRD_MUSHROOM =                                new ClearConditionEntityImages.Null()

    public static readonly MASTER_SWORD =                                  new ClearConditionEntityImages.ExistantOnOnlySmb('Master Sword', 'SuperKinoko_01',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new ClearConditionEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK =                        new ClearConditionEntityImages.Null()

    public static readonly BIG_MUSHROOM =                                  new ClearConditionEntityImages.ExistantOnOnlySmb('Big Mushroom', 'DekaKinoko_00',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new ClearConditionEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN =                           new ClearConditionEntityImages.Null()

    public static readonly SMB2_MUSHROOM =                                 new ClearConditionEntityImages.ExistantOnOnlySmb('SMB2 Mushroom', 'KinokoUSA_00',)

    public static readonly SUPER_LEAF =                                    new ClearConditionEntityImages.ExistantOnOnlySmb3('Super Leaf', 'SuperKonoha_00',)

    public static readonly FROG_SUIT =                                     new ClearConditionEntityImages.ExistantOnOnlySmb3('Frog Suit', 'FrogSuit_00',)

    public static readonly CAPE_FEATHER =                                  new ClearConditionEntityImages.ExistantOnOnlySmw('Cape Feather', 'MantleWing_00',)

    public static readonly POWER_BALLOON =                                 new ClearConditionEntityImages.ExistantOnOnlySmw('Power Balloon', 'PowerBalloon_00',)

    public static readonly PROPELLER_MUSHROOM =                            new ClearConditionEntityImages.ExistantOnOnlyNsmbu('Propeller Mushroom', 'PropellerKinoko_00',)

    public static readonly SUPER_ACORN =                                   new ClearConditionEntityImages.ExistantOnOnlyNsmbu('Super Acorn', 'SuperDonguri_00',)

    public static readonly SUPER_BELL =                                    new ClearConditionEntityImages.ExistantOnOnlySm3dw('Super Bell', 'SuperBell_00',)

    public static readonly SUPER_HAMMER =                                  new ClearConditionEntityImages.ExistantOnOnlySm3dw('Super Hammer', 'SuperHammer_00',)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new ClearConditionEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new ClearConditionEntityImages.ExistantOnOnlySm3dw('Boomerang Flower', 'BoomerangFlower_00',)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new ClearConditionEntityImages.Null()

    public static readonly CANNON_BOX =                                    new ClearConditionEntityImages.ExistantOnOnlySm3dw('Cannon Box', 'BoxKiller_00',)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new ClearConditionEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new ClearConditionEntityImages.ExistantOnOnlySm3dw('Propeller Box', 'BoxPropeller_00',)

    public static readonly GOOMBA_MASK =                                   new ClearConditionEntityImages.ExistantOnOnlySm3dw('Goomba Mask', 'BoxKuribo_00',)

    public static readonly BULLET_BILL_MASK =                              new ClearConditionEntityImages.ExistantOnOnlySm3dw('Bullet Bill Mask', 'BoxKillerPlayer_00',)

    public static readonly RED_POW_BOX =                                   new ClearConditionEntityImages.ExistantOnOnlySm3dw('Red POW Box', 'BoxPow_00',)

    public static readonly SUPER_STAR =                                    new ClearConditionEntityImages.ExistantOnAll('Super Star', 'SuperStar_00',)

    public static readonly ONE_UP_MUSHROOM =                               new ClearConditionEntityImages.ExistantOnAll('1-Up Mushroom', '1upKinoko_00',)
    public static readonly ROTTEN_MUSHROOM =                               new ClearConditionEntityImages.Null()

    public static readonly SHOE_GOOMBA =                                   new ClearConditionEntityImages.Null()
    public static readonly SHOE =                                          new ClearConditionEntityImages.ExistantOnOnlySmbAndSmb3('Shoe', 'KutsuKuribo_00',)
    public static readonly STILETTO_GOOMBA =                               new ClearConditionEntityImages.Null()
    public static readonly STILETTO =                                      new ClearConditionEntityImages.Null()
    public static readonly YOSHI_EGG =                                     new ClearConditionEntityImages.ExistantOnOnlySmwAndNsmbu('Yoshi\'s Egg', 'YosshiEgg_00',)
    public static readonly YOSHI =                                         new ClearConditionEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new ClearConditionEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new ClearConditionEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new ClearConditionEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new ClearConditionEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new ClearConditionEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new ClearConditionEntityImages.Null()
    public static readonly RED_YOSHI =                                     new ClearConditionEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new ClearConditionEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new ClearConditionEntityImages.ExistantOnNotSmw('Goomba', 'Kuribo_00',)
    public static readonly GALOOMBA =                                      new ClearConditionEntityImages.ExistantOnOnlySmw('Galoomba', 'Kuribo_01',)
    public static readonly GOOMBRAT =                                      new ClearConditionEntityImages.ExistantOnNotSmwAndSm3dw('Goombrat', 'Kuribo_01',)
    public static readonly GOOMBUD =                                       new ClearConditionEntityImages.ExistantOnOnlySmw('Goombud', 'Kuribo_01',)

    public static readonly GREEN_KOOPA_TROOPA =                            new ClearConditionEntityImages.ExistantOnAll('Green Koopa Troopa', 'Nokonoko_00',)
    public static readonly RED_KOOPA_TROOPA =                              new ClearConditionEntityImages.Null()
    public static readonly GREEN_BEACH_KOOPA =                             new ClearConditionEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new ClearConditionEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new ClearConditionEntityImages.ExistantOnNotSmb('Green Koopa Shell', 'NokonokoShell_00',)
    public static readonly RED_KOOPA_SHELL =                               new ClearConditionEntityImages.Null()

    public static readonly DRY_BONES =                                     new ClearConditionEntityImages.ExistantOnAll('Dry Bones', 'Karon_00',)
    public static readonly PARABONES =                                     new ClearConditionEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new ClearConditionEntityImages.Null()
    public static readonly DRY_BONES_SHELL =                               new ClearConditionEntityImages.ExistantOnNotSm3dw('Dry Bones Shell', 'Karon_01',)

    public static readonly BUZZY_BEETLE =                                  new ClearConditionEntityImages.ExistantOnNotSm3dw('Buzzy Beetle', 'Met_00',)
    public static readonly PARA_BEETLE =                                   new ClearConditionEntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new ClearConditionEntityImages.ExistantOnNotSm3dw('Buzzy Shell', 'Met_01',)

    public static readonly SPINY =                                         new ClearConditionEntityImages.ExistantOnAll('Spiny', 'Togezo_00',)
    public static readonly WINGED_SPINY =                                  new ClearConditionEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new ClearConditionEntityImages.Null()
    public static readonly SPINY_EGG =                                     new ClearConditionEntityImages.Null()
    public static readonly SPINY_SHELL =                                   new ClearConditionEntityImages.ExistantOnNotSm3dw('Spiny Shell', 'Togezo_01',)

    public static readonly SPIKE_TOP =                                     new ClearConditionEntityImages.ExistantOnNotSm3dw('Spike Top', 'TogeMet_00',)
    public static readonly WINGED_SPIKE_TOP =                              new ClearConditionEntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new ClearConditionEntityImages.Null()
    public static readonly FAST_WINGED_SPIKE_TOP =                         new ClearConditionEntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new ClearConditionEntityImages.ExistantOnOnlySm3dw('Skipsqueak', 'Pyonchu_00',)
    public static readonly SPINY_SKIPSQUEAK =                              new ClearConditionEntityImages.Null()

    public static readonly ANT_TROOPER =                                   new ClearConditionEntityImages.ExistantOnOnlySm3dw('Ant Trooper', 'Arihei_00',)
    public static readonly HORNED_ANT_TROOPER =                            new ClearConditionEntityImages.Null()

    public static readonly STINGBY =                                       new ClearConditionEntityImages.ExistantOnOnlySm3dw('Stingby', 'Hacchin_00',)

    public static readonly CHEEP_CHEEP =                                   new ClearConditionEntityImages.ExistantOnNotSmwAndNsmbu('Cheep Cheep', 'Pukupuku_00',)
    public static readonly BLURPS =                                        new ClearConditionEntityImages.ExistantOnOnlySmw('Blurps', 'Pukupuku_01',)
    public static readonly DEEP_CHEEP =                                    new ClearConditionEntityImages.ExistantOnOnlyNsmbu('Deep Cheep', 'Pukupuku_01',)
    public static readonly FISH_BONE =                                     new ClearConditionEntityImages.ExistantOnAll('Fish Bone', 'FishBone_00',)

    public static readonly BLOOPER =                                       new ClearConditionEntityImages.ExistantOnAll('Blooper', 'Gesso_00',)
    public static readonly BLOOPER_NANNY =                                 new ClearConditionEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new ClearConditionEntityImages.Null()

    public static readonly PORCUPUFFER =                                   new ClearConditionEntityImages.ExistantOnOnlySm3dw('Porcupuffer', 'Fugumannen_00',)

    public static readonly WIGGLER =                                       new ClearConditionEntityImages.ExistantOnNotSm3dw('Wiggler', 'Hanachan_00',)
    public static readonly ANGRY_WIGGLER =                                 new ClearConditionEntityImages.Null()

    public static readonly PIRANHA_PLANT =                                 new ClearConditionEntityImages.ExistantOnNotSmw('Piranha Plant', 'Pakkun_00',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new ClearConditionEntityImages.ExistantOnOnlySmw('Jumping Piranha Plant', 'Pakkun_00',)
    public static readonly FIRE_PIRANHA_PLANT =                            new ClearConditionEntityImages.ExistantOnOnlySmw('Fire Piranha Plant', 'Pakkun_01',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new ClearConditionEntityImages.Null()
    public static readonly MUNCHER =                                       new ClearConditionEntityImages.ExistantOnNotSm3dw('Muncher', 'BlackPakkun_00',)
    public static readonly PIRANHA_CREEPER =                               new ClearConditionEntityImages.ExistantOnOnlySm3dw('Piranha Creeper', 'PackunPipe_00',)

    public static readonly CHAIN_CHOMP =                                   new ClearConditionEntityImages.Null()
    public static readonly UNCHAINED_CHOMP =                               new ClearConditionEntityImages.ExistantOnNotSm3dw('Unchained Chomp', 'Wanwan_00',)
    public static readonly CHAIN_CHOMP_STUMP =                             new ClearConditionEntityImages.Null()

    public static readonly SPIKE =                                         new ClearConditionEntityImages.ExistantOnAll('Spike', 'Gabon_00',)
    public static readonly SPIKE_BALL =                                    new ClearConditionEntityImages.Null()
    public static readonly SNOWBALL =                                      new ClearConditionEntityImages.Null()

    public static readonly LAKITU =                                        new ClearConditionEntityImages.ExistantOnNotSm3dw('Lakitu', 'Jugem_00',)
    public static readonly LAKITU_CLOUD =                                  new ClearConditionEntityImages.ExistantOnNotSm3dw('Lakitu\'s Cloud', 'Jugem_01',)

    public static readonly BOO =                                           new ClearConditionEntityImages.ExistantOnAll('Boo', 'Teresa_00',)
    public static readonly STRETCH =                                       new ClearConditionEntityImages.Null()
    public static readonly BOO_BUDDIES =                                   new ClearConditionEntityImages.Null()
    public static readonly PEEPA =                                         new ClearConditionEntityImages.ExistantOnOnlySm3dw('Peepa', 'Teresa_01',)

    public static readonly BOB_OMB =                                       new ClearConditionEntityImages.ExistantOnAll('Bob-omb', 'Bombhei_00',)
    public static readonly LIT_BOB_OMB =                                   new ClearConditionEntityImages.Null()

    public static readonly POKEY =                                         new ClearConditionEntityImages.ExistantOnAll('Pokey', 'Sambo_00',)
    public static readonly SNOW_POKEY =                                    new ClearConditionEntityImages.Null()

    public static readonly THWOMP =                                        new ClearConditionEntityImages.ExistantOnAll('Thwomp', 'Dossun_00',)

    public static readonly MONTY_MOLE =                                    new ClearConditionEntityImages.ExistantOnNotSm3dw('Monty Mole', 'ChoroPoo_00',)
    public static readonly ROCKY_WRENCH =                                  new ClearConditionEntityImages.ExistantOnNotSm3dw('Rocky Wrench', 'Poo_00',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new ClearConditionEntityImages.Null()

    public static readonly MAGIKOOPA =                                     new ClearConditionEntityImages.ExistantOnAll('Magikoopa', 'Kameck_00',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new ClearConditionEntityImages.Null()

    public static readonly HAMMER_BRO =                                    new ClearConditionEntityImages.ExistantOnAll('Hammer Bro', 'Bros_00',)
    public static readonly SLEDGE_BRO =                                    new ClearConditionEntityImages.ExistantOnAll('Sledge Bro', 'MegaBros_00',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new ClearConditionEntityImages.Null()
    public static readonly FIRE_BRO =                                      new ClearConditionEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO =                                new ClearConditionEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new ClearConditionEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new ClearConditionEntityImages.ExistantOnAll('Lava Bubble', 'Bubble_00',)

    public static readonly MECHAKOOPA =                                    new ClearConditionEntityImages.ExistantOnNotSm3dw('Mechakoopa', 'KoopaMecha_00',)
    public static readonly BLASTA_MECHAKOOPA =                             new ClearConditionEntityImages.Null()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new ClearConditionEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA =                              new ClearConditionEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new ClearConditionEntityImages.Null()

    public static readonly CHARVAARGH =                                    new ClearConditionEntityImages.ExistantOnOnlySm3dw('Charvaargh', 'MagmaFish_00',)

    public static readonly BULLY =                                         new ClearConditionEntityImages.ExistantOnOnlySm3dw('Bully', 'Donketsu_00',)

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new ClearConditionEntityImages.Null()
    public static readonly BULLET_BILL =                                   new ClearConditionEntityImages.ExistantOnAll('Bullet Bill', 'Killer_00',)
    public static readonly BULL_EYE_BLASTER =                              new ClearConditionEntityImages.Null()
    public static readonly BULL_EYE_BILL =                                 new ClearConditionEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new ClearConditionEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new ClearConditionEntityImages.ExistantOnAll('Banzai Bill', 'MagnumKiller_00',)
    public static readonly BULL_EYE_BANZAI =                               new ClearConditionEntityImages.Null()
    public static readonly CAT_BANZAI_BILL =                               new ClearConditionEntityImages.Null()

    public static readonly CANNON =                                        new ClearConditionEntityImages.Null()
    public static readonly CANNONBALL =                                    new ClearConditionEntityImages.Null()
    public static readonly RED_CANNON =                                    new ClearConditionEntityImages.Null()
    public static readonly RED_CANNONBALL =                                new ClearConditionEntityImages.Null()

    public static readonly BURNER =                                        new ClearConditionEntityImages.Null()

    public static readonly FIRE_BAR =                                      new ClearConditionEntityImages.Null()

    public static readonly SKEWER =                                        new ClearConditionEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR =                               new ClearConditionEntityImages.ExistantOnNotNsmbuAndSm3dw('Koopa Clown Car', 'KoopaClown_00',)
    public static readonly JUNIOR_CLOWN_CAR =                              new ClearConditionEntityImages.ExistantOnOnlyNsmbu('Junior Clown Car', 'KoopaClown_00',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new ClearConditionEntityImages.Null()
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new ClearConditionEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new ClearConditionEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new ClearConditionEntityImages.ExistantOnOnlySm3dw('Koopa Clown Car', 'KoopaCar_00',)
    public static readonly CAR =                                           new ClearConditionEntityImages.Null()

    public static readonly GRINDER =                                       new ClearConditionEntityImages.Null()

    public static readonly ANGRY_SUN =                                     new ClearConditionEntityImages.ExistantOnNotSm3dw('Angry Sun', 'SunMoon_00',)
    public static readonly MOON =                                          new ClearConditionEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new ClearConditionEntityImages.ExistantOnNotSm3dw('Bowser', 'Koopa_00',)
    public static readonly MEOWSER =                                       new ClearConditionEntityImages.ExistantOnOnlySm3dw('Meowser', 'Koopa_00',)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new ClearConditionEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new ClearConditionEntityImages.Null()

    public static readonly BOWSER_JR =                                     new ClearConditionEntityImages.ExistantOnNotSm3dw('Bowser Jr.', 'KoopaJr_00',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new ClearConditionEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new ClearConditionEntityImages.ExistantOnAll('Boom Boom', 'Bunbun_00',)
    public static readonly POM_POM =                                       new ClearConditionEntityImages.ExistantOnOnlySm3dw('Pom Pom', 'Bunbun_01',)
    public static readonly POM_POM_CLONE =                                 new ClearConditionEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new ClearConditionEntityImages.Null()

    public static readonly LARRY =                                         new ClearConditionEntityImages.ExistantOnNotSm3dw('Larry', 'Larry_00',)
    public static readonly LARRY_WAND =                                    new ClearConditionEntityImages.Null()
    public static readonly LARRY_PROJECTILE =                              new ClearConditionEntityImages.Null()

    public static readonly IGGY =                                          new ClearConditionEntityImages.ExistantOnNotSm3dw('Iggy', 'Iggy_00',)
    public static readonly IGGY_WAND =                                     new ClearConditionEntityImages.Null()
    public static readonly IGGY_PROJECTILE =                               new ClearConditionEntityImages.Null()

    public static readonly WENDY =                                         new ClearConditionEntityImages.ExistantOnNotSm3dw('Wendy', 'Wendy_00',)
    public static readonly WENDY_WAND =                                    new ClearConditionEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new ClearConditionEntityImages.Null()
    public static readonly WENDY_PROJECTILE =                              new ClearConditionEntityImages.Null()

    public static readonly LEMMY =                                         new ClearConditionEntityImages.ExistantOnNotSm3dw('Lemmy', 'Lemmy_00',)
    public static readonly LEMMY_WAND =                                    new ClearConditionEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new ClearConditionEntityImages.Null()
    public static readonly LEMMY_PROJECTILE =                              new ClearConditionEntityImages.Null()

    public static readonly ROY =                                           new ClearConditionEntityImages.ExistantOnNotSm3dw('Roy', 'Roy_00',)
    public static readonly ROY_WAND =                                      new ClearConditionEntityImages.Null()
    public static readonly ROY_PROJECTILE =                                new ClearConditionEntityImages.Null()

    public static readonly MORTON =                                        new ClearConditionEntityImages.ExistantOnNotSm3dw('Morton', 'Morton_00',)
    public static readonly MORTON_WAND =                                   new ClearConditionEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE =                      new ClearConditionEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE =                      new ClearConditionEntityImages.Null()

    public static readonly LUDWIG =                                        new ClearConditionEntityImages.ExistantOnNotSm3dw('Ludwig', 'Ludwig_00',)
    public static readonly LUDWIG_WAND =                                   new ClearConditionEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE =                             new ClearConditionEntityImages.Null()

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new ClearConditionEntityImages.Null()

    public static readonly SWINGING_CLAW =                                 new ClearConditionEntityImages.ExistantOnNotSm3dw('Bumper', 'BurankoCrane_00',)

    public static readonly TWISTER =                                       new ClearConditionEntityImages.Null()

    public static readonly ONE_WAY_WALL =                                  new ClearConditionEntityImages.Null()

    public static readonly TRACK =                                         new ClearConditionEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new ClearConditionEntityImages.Null()

    public static readonly VINE =                                          new ClearConditionEntityImages.Null()
    public static readonly TREE =                                          new ClearConditionEntityImages.ExistantOnOnlySm3dw('Tree', 'BellTree_00',)

    public static readonly STARTING_ARROW =                                new ClearConditionEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new ClearConditionEntityImages.Null()

    public static readonly CHECKPOINT_FLAG =                               new ClearConditionEntityImages.Null()
    public static readonly GOAL_POLE =                                     new ClearConditionEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new ClearConditionEntityImages.Null()
    public static readonly GIANT_GATE =                                    new ClearConditionEntityImages.Null()

    public static readonly CASTLE =                                        new ClearConditionEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new ClearConditionEntityImages.Null()
    public static readonly AXE =                                           new ClearConditionEntityImages.Null()

    public static readonly DASH_BLOCK =                                    new ClearConditionEntityImages.Null()

    public static readonly SNAKE_BLOCK =                                   new ClearConditionEntityImages.Null()
    public static readonly FAST_SNAKE_BLOCK =                              new ClearConditionEntityImages.Null()

    public static readonly CONVEYOR_BELT =                                 new ClearConditionEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT =                            new ClearConditionEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE =                           new ClearConditionEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE =                             new ClearConditionEntityImages.Null()

    public static readonly LIFT =                                          new ClearConditionEntityImages.Null()
    public static readonly FLIMSY_LIFT =                                   new ClearConditionEntityImages.Null()
    public static readonly CLOUD_LIFT =                                    new ClearConditionEntityImages.Null()

    public static readonly SEESAW =                                        new ClearConditionEntityImages.Null()

    public static readonly LAVA_LIFT =                                     new ClearConditionEntityImages.Null()
    public static readonly FAST_LAVA_LIFT =                                new ClearConditionEntityImages.Null()

    public static readonly CRATE =                                         new ClearConditionEntityImages.ExistantOnOnlySm3dw('Crate', 'WoodBox_00',)

    public static readonly KEY =                                           new ClearConditionEntityImages.Null()
    public static readonly CURSED_KEY =                                    new ClearConditionEntityImages.Null()
    public static readonly PHANTO =                                        new ClearConditionEntityImages.Null()

    public static readonly TRAMPOLINE =                                    new ClearConditionEntityImages.ExistantOnNotSmb('Trampoline', 'JumpStep_00',)
    public static readonly HOP_CHOPS =                                     new ClearConditionEntityImages.Null()

    public static readonly POW_BLOCK =                                     new ClearConditionEntityImages.ExistantOnAll('POW Block', 'PowBlock_00',)
    public static readonly RED_POW_BLOCK =                                 new ClearConditionEntityImages.ExistantOnOnlySm3dw('Red POW Block', 'PowBlock_01',)

    public static readonly P_SWITCH =                                      new ClearConditionEntityImages.ExistantOnAll('P Switch', 'PSwitch_00',)

    public static readonly STONE =                                         new ClearConditionEntityImages.ExistantOnNotSmb('Stone', 'Stone_00',)

    public static readonly WARP_DOOR =                                     new ClearConditionEntityImages.Null()
    public static readonly P_WARP_DOOR =                                   new ClearConditionEntityImages.Null()
    public static readonly KEY_DOOR =                                      new ClearConditionEntityImages.Null()

    public static readonly WARP_BOX =                                      new ClearConditionEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY =                             new ClearConditionEntityImages.Null()

    public static readonly WING =                                          new ClearConditionEntityImages.Null()
    public static readonly PARACHUTE =                                     new ClearConditionEntityImages.Null()

    public static readonly TOAD =                                          new ClearConditionEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new ClearConditionEntityImages.Null()

    public static readonly BUBBLE =                                        new ClearConditionEntityImages.Null()

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
