import type {CollectionHolder}                   from '@joookiwi/collection'
import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {EmptyString}                        from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName}                                                from 'core/entity/Entities.types'
import type {EditorImageFile}                                                                     from 'core/entity/file/EntityImageFile'
import type {EditorImage}                                                                         from 'core/entity/images/editor/EditorImage'
import type {GameStyles_NSMBU, GameStyles_SM3DW, GameStyles_SMB, GameStyles_SMB3, GameStyles_SMW} from 'core/gameStyle/GameStyles.types'
import type {ClassWithImage}                                                                      from 'util/ClassWithImage'

import {Entities}             from 'core/entity/Entities'
import {editorImage}          from 'core/entity/file/fileCreator'
import {EditorImageContainer} from 'core/entity/images/editor/EditorImage.container'
import {EmptyEditorImage}     from 'core/entity/images/editor/EmptyEditorImage'
import {GameStyles}           from 'core/gameStyle/GameStyles'
import {Themes}               from 'core/theme/Themes'
import {Times}                from 'core/time/Times'
import {ArrayAsCollection}    from 'util/collection/ArrayAsCollection'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW
import SM3DW = GameStyles.SM3DW

const {GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,} = Themes
const {DAY, NIGHT,} = Times

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
    private static readonly Null = class Null_EditorEntityImages extends EditorEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyEditorImage.get
        }

        public override get image(): EmptyEditorImage { return this.#image }

    }

    /** An abstract subclass of an {@link EditorEntityImages} to hold a specific {@link PossibleEnglishName} */
    private static readonly Existant = (() => {
        abstract class Existant_EditorEntityImages<const NAME extends PossibleEnglishName,
            const IMAGE_FILE extends EditorImageFile, >
            extends EditorEntityImages {

            readonly #englishName
            #image?: EditorImage<IMAGE_FILE>

            protected constructor(englishName: NAME,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME { return this.#englishName }

            public override get image(): EditorImage<IMAGE_FILE> { return this.#image ??= new EditorImageContainer(this._createImageFiles(),) }

            protected abstract _createImageFiles(): CollectionHolder<readonly [Times, GameStyles, Themes, IMAGE_FILE,]>

        }

        return Existant_EditorEntityImages
    })()

    //region -------------------- Sub class (1 in all game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} for each {@link GameStyles} */
    private static readonly ExistantAs1InAll = class ExistantAs1InAll_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [DAY, SMW,   GROUND, editorImage(this, fileName, SMW,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
                [DAY, SM3DW, GROUND, editorImage(this, fileName, SM3DW,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} in the {@link Themes.SNOW snow theme}
     */
    private static readonly ExistantAs1InOnlySnow = class ExistantAs1InOnlySnow_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB,   SNOW, editorImage(this, fileName, SMB,),],
                [DAY, SMB3,  SNOW, editorImage(this, fileName, SMB3,),],
                [DAY, SMW,   SNOW, editorImage(this, fileName, SMW,),],
                [DAY, NSMBU, SNOW, editorImage(this, fileName, NSMBU,),],
                [DAY, SM3DW, SNOW, editorImage(this, fileName, SM3DW,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (1 in all game style) --------------------
    //region -------------------- Sub class (1 in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in 1 {@link GameStyles} */
    private static readonly ExistantAs1In1GameStyle = class ExistantAs1In1_GameStyleEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const GAME_STYLE extends GameStyles, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GAME_STYLE, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,
                           private readonly gameStyle: GAME_STYLE, private readonly theme: Themes,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const gameStyle = this.gameStyle
            return new ArrayAsCollection([[DAY, gameStyle, this.theme, editorImage(this, this.fileName, gameStyle,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link SMB} */
    private static readonly ExistantAs1InOnlySmb = class ExistantAs1InOnlySmb_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([[DAY, SMB, GROUND, editorImage(this, this.fileName, SMB,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link SMW} */
    private static readonly ExistantAs1InOnlySmw = class ExistantAs1InOnlySmw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([[DAY, SMW, GROUND, editorImage(this, this.fileName, SMW,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link NSMBU} */
    private static readonly ExistantAs1InOnlyNsmbu = class ExistantAs1InOnlyNsmbu_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_NSMBU, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([[DAY, NSMBU, GROUND, editorImage(this, this.fileName, NSMBU,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link SM3DW} */
    private static readonly ExistantAs1InOnlySm3dw = class ExistantAs1InOnlySm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SM3DW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([[DAY, SM3DW, GROUND, editorImage(this, this.fileName, SM3DW,),],],)
        }

    }

    //endregion -------------------- Sub class (1 in 1 specific game style) --------------------
    //region -------------------- Sub class (1 in 2 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMB} and {@link SMB3}
     */
    private static readonly ExistantAs1InOnlySmbAndSmb3 = class ExistantAs1InOnlySmbAndSmb3_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB,  GROUND, editorImage(this, fileName, SMB,),],
                [DAY, SMB3, GROUND, editorImage(this, fileName, SMB3,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantAs1InOnlySmwAndNsmbu = class ExistantAs1InOnlySmwAndNsmbu_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMW,   GROUND, editorImage(this, fileName, SMW,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (1 in 2 specific game style) --------------------
    //region -------------------- Sub class (1 in 3 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link NSMBU}
     */
    private static readonly ExistantAs1InNotSmwAndSm3dw = class ExistantAs1InNotSmwAndSm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_NSMBU, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SM3DW}
     */
    private static readonly ExistantAs1InNotSmwAndNsmbu = class ExistantAs1InNotSmwAndNsmbu_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SM3DW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [DAY, SM3DW, GROUND, editorImage(this, fileName, SM3DW,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAs1InNotNsmbuAndSm3dw = class ExistantAs1InNotNsmbuAndSm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB, GROUND, editorImage(this, fileName, SMB,),],
                [DAY, SMB3, GROUND, editorImage(this, fileName, SMB3,),],
                [DAY, SMW, GROUND, editorImage(this, fileName, SMW,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (1 in 3 specific game style) --------------------
    //region -------------------- Sub class (1 in 4 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link SMW}
     */
    private static readonly ExistantAs1InNotSmw = class ExistantAs1InNotSmw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_NSMBU | GameStyles_SM3DW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
                [DAY, SM3DW, GROUND, editorImage(this, fileName, SM3DW,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link SM3DW}
     */
    private static readonly ExistantAs1InNotSm3dw = class ExistantAs1InNotSm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY, SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [DAY, SMW,   GROUND, editorImage(this, fileName, SMW,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (1 in 4 specific game style) --------------------
    //region -------------------- Sub class (1 + 1 night snow) --------------------

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMB}, {@link SMW},
     * {@link NSMBU} and {@link SM3DW}) only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAs1Plus1NightSnowInSmb3 = class ExistantAs1Plus1NightSnowInSmb3_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMB | GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, FILE_NAME_1, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME_1, private readonly nightSnowFileName:FILE_NAME_2,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [DAY,   SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [NIGHT, SMB3,  SNOW,   editorImage(this, this.nightSnowFileName, SMB3,),],
                [DAY,   SMW,   GROUND, editorImage(this, fileName, SMW,),],
                [DAY,   NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
                [DAY,   SM3DW, GROUND, editorImage(this, fileName, SM3DW,),],
            ],)
        }

    }

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMB}, {@link SMW} and {@link NSMBU})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAs1Plus1NightSnowInSmb3ButNotSm3dw = class ExistantAs1Plus1NightSnowInSmb3ButNotSm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMB | GameStyles_SMW | GameStyles_NSMBU, FILE_NAME_1, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME_1, private readonly nightSnowFileName: FILE_NAME_2,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY,         SMB,   GROUND,      editorImage(this, fileName, SMB,),],
                [DAY,         SMB3,  GROUND,      editorImage(this, fileName, SMB3,),],
                [Times.NIGHT, SMB3,  Themes.SNOW, editorImage(this, this.nightSnowFileName, SMB3,),],
                [DAY,         SMW,   GROUND,      editorImage(this, fileName, SMW,),],
                [DAY,         NSMBU, GROUND,      editorImage(this, fileName, NSMBU,),],
            ],)
        }

    }


    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB} and {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMW}, {@link NSMBU} and {@link SM3DW})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAs1Plus1NightSnowInSmbAndSmb3 = class ExistantAs1Plus1NightSnowInSmbAndSmb3_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, FILE_NAME_1, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME_1, private readonly nightSnowFileName: FILE_NAME_2,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            const nightSnowFileName = this.nightSnowFileName
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [NIGHT, SMB,   SNOW,   editorImage(this, nightSnowFileName, SMB,),],
                [DAY,   SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [NIGHT, SMB3,  SNOW,   editorImage(this, nightSnowFileName, SMB3,),],
                [DAY,   SMW,   GROUND, editorImage(this, fileName, SMW,),],
                [DAY,   NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
                [DAY,   SM3DW, GROUND, editorImage(this, fileName, SM3DW,),],
            ],)
        }

    }

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB} and {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMW} and {@link NSMBU})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAs1Plus1NightSnowInSmbAndSmb3ButNotSm3dw = class ExistantAs1Plus1NightSnowInSmbAndSmb3ExcludingSm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU, FILE_NAME_1, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME_1, private readonly nightSnowFileName: FILE_NAME_2,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            const nightSnowFileName = this.nightSnowFileName
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND, editorImage(this, fileName, SMB,),],
                [NIGHT, SMB,   SNOW,   editorImage(this, nightSnowFileName, SMB,),],
                [DAY,   SMB3,  GROUND, editorImage(this, fileName, SMB3,),],
                [NIGHT, SMB3,  SNOW,   editorImage(this, nightSnowFileName, SMB3,),],
                [DAY,   SMW,   GROUND, editorImage(this, fileName, SMW,),],
                [DAY,   NSMBU, GROUND, editorImage(this, fileName, NSMBU,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (1 + 1 night snow) --------------------
    //region -------------------- Sub class (blue variant) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold a blue variation of {@link EditorImageFile}
     * on the {@link Themes} in {@link SMB} and {@link SMB3}.
     *
     * {@link SMW}, {@link NSMBU} and {@link SM3DW} only have 1 {@link EditorImageFile}.
     */
    private static readonly ExistantAsBlueVariantInSmbAndSmb3 = class ExistantAsBlueVariantInSmbAndSmb3_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const NUMBER extends | 0 | 1, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water_night' | 'desert_night' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<GameStyles_SMB3, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water' | 'desert' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, `${FILE_NAME}_0${NUMBER}`, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME, private readonly number: NUMBER,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            const number = this.number
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,       editorImage(this, `${fileName}_0${number}`, SMB,)],
                [NIGHT, SMB,   GROUND,       editorImage(this, `${fileName}_plain_night_0${number}`, SMB,)],
                [DAY,   SMB,   UNDERGROUND,  editorImage(this, `${fileName}_underground_0${number}`, SMB,)],
                [NIGHT, SMB,   UNDERWATER,   editorImage(this, `${fileName}_water_night_0${number}`, SMB,)],
                [NIGHT, SMB,   DESERT,       editorImage(this, `${fileName}_desert_night_0${number}`, SMB,)],
                [NIGHT, SMB,   SNOW,         editorImage(this, `${fileName}_snow_night_0${number}`, SMB,)],
                [NIGHT, SMB,   SKY,          editorImage(this, `${fileName}_athletic_night_0${number}`, SMB,)],
                [NIGHT, SMB,   FOREST,       editorImage(this, `${fileName}_woods_night_0${number}`, SMB,)],
                [DAY,   SMB,   GHOST_HOUSE,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB,)],
                [NIGHT, SMB,   AIRSHIP,      editorImage(this, `${fileName}_airship_night_0${number}`, SMB,)],
                [DAY,   SMB,   CASTLE,       editorImage(this, `${fileName}_castle_0${number}`, SMB,)],

                [DAY,   SMB3,  GROUND,       editorImage(this, `${fileName}_0${number}`, SMB3,)],
                [NIGHT, SMB3,  GROUND,       editorImage(this, `${fileName}_plain_night_0${number}`, SMB3,)],
                [DAY,   SMB3,  UNDERGROUND,  editorImage(this, `${fileName}_underground_0${number}`, SMB3,)],
                [DAY,   SMB3,  UNDERWATER,   editorImage(this, `${fileName}_water_0${number}`, SMB3,)],
                [DAY,   SMB3,  DESERT,       editorImage(this, `${fileName}_desert_0${number}`, SMB3,)],
                [NIGHT, SMB3,  SNOW,         editorImage(this, `${fileName}_snow_night_0${number}`, SMB3,)],
                [NIGHT, SMB3,  SKY,          editorImage(this, `${fileName}_athletic_night_0${number}`, SMB3,)],
                [NIGHT, SMB3,  FOREST,       editorImage(this, `${fileName}_woods_night_0${number}`, SMB3,)],
                [DAY,   SMB3,  GHOST_HOUSE,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB3,)],
                [NIGHT, SMB3,  AIRSHIP,      editorImage(this, `${fileName}_airship_night_0${number}`, SMB3,)],
                [DAY,   SMB3,  CASTLE,       editorImage(this, `${fileName}_castle_0${number}`, SMB3,)],

                [DAY,   SMW,   GROUND,       editorImage(this, `${fileName}_0${number}`, SMW,)],

                [DAY,   NSMBU, GROUND,       editorImage(this, `${fileName}_0${number}`, NSMBU,)],

                [DAY,   SM3DW, GROUND,       editorImage(this, `${fileName}_0${number}`, SM3DW,)],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold a blue variation of {@link EditorImageFile}
     * on the {@link Themes} in {@link SMB} and {@link SMB3}.
     *
     * {@link SMW} and {@link NSMBU} only have 1 {@link EditorImageFile}.
     */
    private static readonly ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw = class ExistantAsBlueVariantInSmbAndSmb3_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const NUMBER extends | 0 | 1, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water_night' | 'desert_night' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<GameStyles_SMB3, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water' | 'desert' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU, `${FILE_NAME}_0${NUMBER}`, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME, private readonly number: NUMBER,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            const number = this.number
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,      editorImage(this, `${fileName}_0${number}`, SMB,)],
                [NIGHT, SMB,   GROUND,      editorImage(this, `${fileName}_plain_night_0${number}`, SMB,)],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, `${fileName}_underground_0${number}`, SMB,)],
                [NIGHT, SMB,   UNDERWATER,  editorImage(this, `${fileName}_water_night_0${number}`, SMB,)],
                [NIGHT, SMB,   DESERT,      editorImage(this, `${fileName}_desert_night_0${number}`, SMB,)],
                [NIGHT, SMB,   SNOW,        editorImage(this, `${fileName}_snow_night_0${number}`, SMB,)],
                [NIGHT, SMB,   SKY,         editorImage(this, `${fileName}_athletic_night_0${number}`, SMB,)],
                [NIGHT, SMB,   FOREST,      editorImage(this, `${fileName}_woods_night_0${number}`, SMB,)],
                [DAY,   SMB,   GHOST_HOUSE,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB,)],
                [NIGHT, SMB,   AIRSHIP,     editorImage(this, `${fileName}_airship_night_0${number}`, SMB,)],
                [DAY,   SMB,   CASTLE,      editorImage(this, `${fileName}_castle_0${number}`, SMB,)],

                [DAY,   SMB3,  GROUND,      editorImage(this, `${fileName}_0${number}`, SMB3,)],
                [NIGHT, SMB3,  GROUND,      editorImage(this, `${fileName}_plain_night_0${number}`, SMB3,)],
                [DAY,   SMB3,  UNDERGROUND, editorImage(this, `${fileName}_underground_0${number}`, SMB3,)],
                [DAY,   SMB3,  UNDERWATER,  editorImage(this, `${fileName}_water_0${number}`, SMB3,)],
                [DAY,   SMB3,  DESERT,      editorImage(this, `${fileName}_desert_0${number}`, SMB3,)],
                [NIGHT, SMB3,  SNOW,        editorImage(this, `${fileName}_snow_night_0${number}`, SMB3,)],
                [NIGHT, SMB3,  SKY,         editorImage(this, `${fileName}_athletic_night_0${number}`, SMB3,)],
                [NIGHT, SMB3,  FOREST,      editorImage(this, `${fileName}_woods_night_0${number}`, SMB3,)],
                [DAY,   SMB3,  GHOST_HOUSE,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB3,)],
                [NIGHT, SMB3,  AIRSHIP,     editorImage(this, `${fileName}_airship_night_0${number}`, SMB3,)],
                [DAY,   SMB3,  CASTLE,      editorImage(this, `${fileName}_castle_0${number}`, SMB3,)],

                [DAY,   SMW,   GROUND,      editorImage(this, `${fileName}_0${number}`, SMW,)],

                [DAY,   NSMBU, GROUND,      editorImage(this, `${fileName}_0${number}`, NSMBU,)],
            ],)
        }

    }

    //endregion -------------------- Sub class (blue variant) --------------------
    //region -------------------- Sub class (2 in all game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} for each {@link GameStyles} */
    private static readonly ExistantAs2InAll = class ExistantAs2InAll_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            return new ArrayAsCollection([
                [DAY, SMB,   GROUND, editorImage(this, fileName1, SMB,),],
                [DAY, SMB,   GROUND, editorImage(this, fileName2, SMB,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName1, SMB3,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName2, SMB3,),],
                [DAY, SMW,   GROUND, editorImage(this, fileName1, SMW,),],
                [DAY, SMW,   GROUND, editorImage(this, fileName2, SMW,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName1, NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName2, NSMBU,),],
                [DAY, SM3DW, GROUND, editorImage(this, fileName1, SM3DW,),],
                [DAY, SM3DW, GROUND, editorImage(this, fileName2, SM3DW,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (2 in all game style) --------------------
    //region -------------------- Sub class (2 in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SMB} */
    private static readonly ExistantAs2InOnlySmb = class ExistantAs2InOnlySmb_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SMB, GROUND, editorImage(this, this.fileName1, SMB,),],
                [DAY, SMB, GROUND, editorImage(this, this.fileName2, SMB,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SMB3} */
    private static readonly ExistantAs2InOnlySmb3 = class ExistantAs2InOnlySmb3_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB3, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SMB3, GROUND, editorImage(this, this.fileName1, SMB3,),],
                [DAY, SMB3, GROUND, editorImage(this, this.fileName2, SMB3,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SMW} */
    private static readonly ExistantAs2InOnlySmw = class ExistantAs2InOnlySmw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SMW, GROUND, editorImage(this, this.fileName1, SMW,),],
                [DAY, SMW, GROUND, editorImage(this, this.fileName2, SMW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link NSMBU} */
    private static readonly ExistantAs2InOnlyNsmbu = class ExistantAs2InOnlyNsmbu_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_NSMBU, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, NSMBU, GROUND, editorImage(this, this.fileName1, NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, this.fileName2, NSMBU,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SM3DW} */
    private static readonly ExistantAs2InOnlySm3dw = class ExistantAs2InOnlySm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SM3DW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SM3DW, GROUND, editorImage(this, this.fileName1, SM3DW,),],
                [DAY, SM3DW, GROUND, editorImage(this, this.fileName2, SM3DW,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (2 in 1 specific game style) --------------------
    //region -------------------- Sub class (2 in 4 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link SM3DW}
     */
    private static readonly ExistantAs2InNotSm3dw = class ExistantAs2InNotSm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            return new ArrayAsCollection([
                [DAY, SMB,   GROUND, editorImage(this, fileName1, SMB,),],
                [DAY, SMB,   GROUND, editorImage(this, fileName2, SMB,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName1, SMB3,),],
                [DAY, SMB3,  GROUND, editorImage(this, fileName2, SMB3,),],
                [DAY, SMW,   GROUND, editorImage(this, fileName1, SMW,),],
                [DAY, SMW,   GROUND, editorImage(this, fileName2, SMW,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName1, NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, fileName2, NSMBU,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (2 in 4 specific game style) --------------------
    //region -------------------- Sub class (3 in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 3 {@link EditorImageFile} in only {@link SM3DW} */
    private static readonly ExistantAs3InOnlySm3dw = class ExistantAs3InOnlySm3dw_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SM3DW, FILE_NAME, NAME>> {

        public constructor(englishName: NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SM3DW, GROUND, editorImage(this, this.fileName1, SM3DW,),],
                [DAY, SM3DW, GROUND, editorImage(this, this.fileName2, SM3DW,),],
                [DAY, SM3DW, GROUND, editorImage(this, this.fileName3, SM3DW,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (3 in 1 specific game style) --------------------
    //region -------------------- Sub class (predefined) --------------------

    /** A subclass of an {@link EditorEntityImages} for only the {@link GROUND}, {@link STEEP_SLOPE} and {@link GENTLE_SLOPE} */
    private static readonly ExistantAsGroundOrSlope = class ExistantAsGroundOrSlope_EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'airship_night' | 'castle'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_SMB3, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'airship_night' | 'castle' | 'castle_night'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_SMW, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'water_night' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_NSMBU, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'airship_night' | 'castle'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_SM3DW, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, NAME>> {

        public constructor(englishName: NAME, private readonly fileName: FILE_NAME,) { super(englishName,) }

        public override _createImageFiles() {
            const fileName = this.fileName
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,      editorImage(this, `${fileName}_00`, SMB,),],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, `${fileName}_underground_00`, SMB,),],
                [DAY,   SMB,   UNDERWATER,  editorImage(this, `${fileName}_water_00`, SMB,),],
                [DAY,   SMB,   DESERT,      editorImage(this, `${fileName}_desert_00`, SMB,),],
                [DAY,   SMB,   SNOW,        editorImage(this, `${fileName}_snow_00`, SMB,),],
                [DAY,   SMB,   SKY,         editorImage(this, `${fileName}_athletic_00`, SMB,),],
                [DAY,   SMB,   FOREST,      editorImage(this, `${fileName}_woods_00`, SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, `${fileName}_hauntedhouse_00`, SMB,),],
                [DAY,   SMB,   AIRSHIP,     editorImage(this, `${fileName}_airship_00`, SMB,),],
                [NIGHT, SMB,   AIRSHIP,     editorImage(this, `${fileName}_airship_night_00`, SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, `${fileName}_castle_00`, SMB,),],

                [DAY,   SMB3,  GROUND,      editorImage(this, `${fileName}_00`, SMB3,),],
                [DAY,   SMB3,  UNDERGROUND, editorImage(this, `${fileName}_underground_00`, SMB3,),],
                [DAY,   SMB3,  UNDERWATER,  editorImage(this, `${fileName}_water_00`, SMB3,),],
                [DAY,   SMB3,  DESERT,      editorImage(this, `${fileName}_desert_00`, SMB3,),],
                [DAY,   SMB3,  SNOW,        editorImage(this, `${fileName}_snow_00`, SMB3,),],
                [NIGHT, SMB3,  SNOW,        editorImage(this, `${fileName}_snow_night_00`, SMB3,),],
                [DAY,   SMB3,  SKY,         editorImage(this, `${fileName}_athletic_00`, SMB3,),],
                [DAY,   SMB3,  FOREST,      editorImage(this, `${fileName}_woods_00`, SMB3,),],
                [DAY,   SMB3,  GHOST_HOUSE, editorImage(this, `${fileName}_hauntedhouse_00`, SMB3,),],
                [DAY,   SMB3,  AIRSHIP,     editorImage(this, `${fileName}_airship_00`, SMB3,),],
                [NIGHT, SMB3,  AIRSHIP,     editorImage(this, `${fileName}_airship_night_00`, SMB3,),],
                [DAY,   SMB3,  CASTLE,      editorImage(this, `${fileName}_castle_00`, SMB3,),],
                [NIGHT, SMB3,  CASTLE,      editorImage(this, `${fileName}_castle_night_00`, SMB3,),],

                [DAY,   SMW,   GROUND,      editorImage(this, `${fileName}_00`, SMW,),],
                [DAY,   SMW,   UNDERGROUND, editorImage(this, `${fileName}_underground_00`, SMW,),],
                [DAY,   SMW,   UNDERWATER,  editorImage(this, `${fileName}_water_00`, SMW,),],
                [NIGHT, SMW,   UNDERWATER,  editorImage(this, `${fileName}_water_night_00`, SMW,),],
                [DAY,   SMW,   DESERT,      editorImage(this, `${fileName}_desert_00`, SMW,),],
                [DAY,   SMW,   SNOW,        editorImage(this, `${fileName}_snow_00`, SMW,),],
                [NIGHT, SMW,   SNOW,        editorImage(this, `${fileName}_snow_night_00`, SMW,),],
                [DAY,   SMW,   SKY,         editorImage(this, `${fileName}_athletic_00`, SMW,),],
                [DAY,   SMW,   FOREST,      editorImage(this, `${fileName}_woods_00`, SMW,),],
                [DAY,   SMW,   GHOST_HOUSE, editorImage(this, `${fileName}_hauntedhouse_00`, SMW,),],
                [DAY,   SMW,   AIRSHIP,     editorImage(this, `${fileName}_airship_00`, SMW,),],
                [DAY,   SMW,   CASTLE,      editorImage(this, `${fileName}_castle_00`, SMW,),],

                [DAY,   NSMBU, GROUND,      editorImage(this, `${fileName}_00`, NSMBU,),],
                [DAY,   NSMBU, UNDERGROUND, editorImage(this, `${fileName}_underground_00`, NSMBU,),],
                [DAY,   NSMBU, UNDERWATER,  editorImage(this, `${fileName}_water_00`, NSMBU,),],
                [DAY,   NSMBU, DESERT,      editorImage(this, `${fileName}_desert_00`, NSMBU,),],
                [DAY,   NSMBU, SNOW,        editorImage(this, `${fileName}_snow_00`, NSMBU,),],
                [NIGHT, NSMBU, SNOW,        editorImage(this, `${fileName}_snow_night_00`, NSMBU,),],
                [DAY,   NSMBU, SKY,         editorImage(this, `${fileName}_athletic_00`, NSMBU,),],
                [DAY,   NSMBU, FOREST,      editorImage(this, `${fileName}_woods_00`, NSMBU,),],
                [DAY,   NSMBU, GHOST_HOUSE, editorImage(this, `${fileName}_hauntedhouse_00`, NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,     editorImage(this, `${fileName}_airship_00`, NSMBU,),],
                [NIGHT, NSMBU, AIRSHIP,     editorImage(this, `${fileName}_airship_night_00`, NSMBU,),],
                [DAY,   NSMBU, CASTLE,      editorImage(this, `${fileName}_castle_00`, NSMBU,),],

                [DAY,   SM3DW, GROUND,      editorImage(this, `${fileName}_00`, SM3DW,),],
                [DAY,   SM3DW, UNDERGROUND, editorImage(this, `${fileName}_underground_00`, SM3DW,),],
                [DAY,   SM3DW, UNDERWATER,  editorImage(this, `${fileName}_water_00`, SM3DW,),],
                [DAY,   SM3DW, DESERT,      editorImage(this, `${fileName}_desert_00`, SM3DW,),],
                [DAY,   SM3DW, SNOW,        editorImage(this, `${fileName}_snow_00`, SM3DW,),],
                [DAY,   SM3DW, SKY,         editorImage(this, `${fileName}_athletic_00`, SM3DW,),],
                [DAY,   SM3DW, FOREST,      editorImage(this, `${fileName}_woods_00`, SM3DW,),],
                [DAY,   SM3DW, GHOST_HOUSE, editorImage(this, `${fileName}_hauntedhouse_00`, SM3DW,),],
                [DAY,   SM3DW, AIRSHIP,     editorImage(this, `${fileName}_airship_00`, SM3DW,),],
                [DAY,   SM3DW, CASTLE,      editorImage(this, `${fileName}_castle_00`, SM3DW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link PIPE} */
    private static readonly ExistantAsPipe = class ExistantAsPipe_EditorEntityImages
        extends EditorEntityImages.Existant<'Pipe', | EditorImageFile<| GameStyles_SMB | GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, `Dokan_0${| 0 | 1 | 2 | 3}`, 'Pipe'>
                                                    | EditorImageFile<GameStyles_SMB3, `Dokan${| EmptyString | '_snow_night'}_0${| 0 | 1 | 2 | 3}`, 'Pipe'>> {

        public constructor() { super('Pipe',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND, editorImage(this, 'Dokan_00', SMB,),],
                [DAY,   SMB,   GROUND, editorImage(this, 'Dokan_01', SMB,),],
                [DAY,   SMB,   GROUND, editorImage(this, 'Dokan_02', SMB,),],
                [DAY,   SMB,   GROUND, editorImage(this, 'Dokan_03', SMB,),],

                [DAY,   SMB3,  GROUND, editorImage(this, 'Dokan_00', SMB3,),],
                [DAY,   SMB3,  GROUND, editorImage(this, 'Dokan_01', SMB3,),],
                [DAY,   SMB3,  GROUND, editorImage(this, 'Dokan_02', SMB3,),],
                [DAY,   SMB3,  GROUND, editorImage(this, 'Dokan_03', SMB3,),],
                [NIGHT, SMB3,  SNOW,   editorImage(this, 'Dokan_snow_night_00', SMB3,),],
                [NIGHT, SMB3,  SNOW,   editorImage(this, 'Dokan_snow_night_01', SMB3,),],
                [NIGHT, SMB3,  SNOW,   editorImage(this, 'Dokan_snow_night_02', SMB3,),],
                [NIGHT, SMB3,  SNOW,   editorImage(this, 'Dokan_snow_night_03', SMB3,),],

                [DAY,   SMW,   GROUND, editorImage(this, 'Dokan_00', SMW,),],
                [DAY,   SMW,   GROUND, editorImage(this, 'Dokan_01', SMW,),],
                [DAY,   SMW,   GROUND, editorImage(this, 'Dokan_02', SMW,),],
                [DAY,   SMW,   GROUND, editorImage(this, 'Dokan_03', SMW,),],

                [DAY,   NSMBU, GROUND, editorImage(this, 'Dokan_00', NSMBU,),],
                [DAY,   NSMBU, GROUND, editorImage(this, 'Dokan_01', NSMBU,),],
                [DAY,   NSMBU, GROUND, editorImage(this, 'Dokan_02', NSMBU,),],
                [DAY,   NSMBU, GROUND, editorImage(this, 'Dokan_03', NSMBU,),],

                [DAY,   SM3DW, GROUND, editorImage(this, 'Dokan_00', SM3DW,),],
                [DAY,   SM3DW, GROUND, editorImage(this, 'Dokan_01', SM3DW,),],
                [DAY,   SM3DW, GROUND, editorImage(this, 'Dokan_02', SM3DW,),],
                [DAY,   SM3DW, GROUND, editorImage(this, 'Dokan_03', SM3DW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link MUSHROOM_PLATFORM} */
    private static readonly ExistantAsMushroomPlatform = class ExistantAsMushroomPlatform_EditorEntityImages
        extends EditorEntityImages.Existant<'Mushroom Platform', EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, `GroundMushroom${| EmptyString | `_${| 'water' | 'snow' | 'snow_night' | 'airship'}`}_0${| 0 | 1 | 2}`, 'Mushroom Platform'>> {

        public constructor() { super('Mushroom Platform',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,     editorImage(this, 'GroundMushroom_00', SMB,),],
                [DAY,   SMB,   GROUND,     editorImage(this, 'GroundMushroom_01', SMB,),],
                [DAY,   SMB,   GROUND,     editorImage(this, 'GroundMushroom_02', SMB,),],
                [DAY,   SMB,   UNDERWATER, editorImage(this, 'GroundMushroom_water_00', SMB,),],
                [DAY,   SMB,   UNDERWATER, editorImage(this, 'GroundMushroom_water_01', SMB,),],
                [DAY,   SMB,   UNDERWATER, editorImage(this, 'GroundMushroom_water_02', SMB,),],
                [DAY,   SMB,   SNOW,       editorImage(this, 'GroundMushroom_snow_00', SMB,),],
                [DAY,   SMB,   SNOW,       editorImage(this, 'GroundMushroom_snow_01', SMB,),],
                [DAY,   SMB,   SNOW,       editorImage(this, 'GroundMushroom_snow_02', SMB,),],
                [NIGHT, SMB,   SNOW,       editorImage(this, 'GroundMushroom_snow_night_00', SMB,),],
                [NIGHT, SMB,   SNOW,       editorImage(this, 'GroundMushroom_snow_night_01', SMB,),],
                [NIGHT, SMB,   SNOW,       editorImage(this, 'GroundMushroom_snow_night_02', SMB,),],
                [DAY,   SMB,   AIRSHIP,    editorImage(this, 'GroundMushroom_airship_00', SMB,),],
                [DAY,   SMB,   AIRSHIP,    editorImage(this, 'GroundMushroom_airship_01', SMB,),],
                [DAY,   SMB,   AIRSHIP,    editorImage(this, 'GroundMushroom_airship_02', SMB,),],

                [DAY,   SMB3,  GROUND,     editorImage(this, 'GroundMushroom_00', SMB3,),],
                [DAY,   SMB3,  GROUND,     editorImage(this, 'GroundMushroom_01', SMB3,),],
                [DAY,   SMB3,  GROUND,     editorImage(this, 'GroundMushroom_02', SMB3,),],
                [DAY,   SMB3,  UNDERWATER, editorImage(this, 'GroundMushroom_water_00', SMB3,),],
                [DAY,   SMB3,  UNDERWATER, editorImage(this, 'GroundMushroom_water_01', SMB3,),],
                [DAY,   SMB3,  UNDERWATER, editorImage(this, 'GroundMushroom_water_02', SMB3,),],
                [DAY,   SMB3,  SNOW,       editorImage(this, 'GroundMushroom_snow_00', SMB3,),],
                [DAY,   SMB3,  SNOW,       editorImage(this, 'GroundMushroom_snow_01', SMB3,),],
                [DAY,   SMB3,  SNOW,       editorImage(this, 'GroundMushroom_snow_02', SMB3,),],
                [NIGHT, SMB3,  SNOW,       editorImage(this, 'GroundMushroom_snow_night_00', SMB3,),],
                [NIGHT, SMB3,  SNOW,       editorImage(this, 'GroundMushroom_snow_night_01', SMB3,),],
                [NIGHT, SMB3,  SNOW,       editorImage(this, 'GroundMushroom_snow_night_02', SMB3,),],
                [DAY,   SMB3,  AIRSHIP,    editorImage(this, 'GroundMushroom_airship_00', SMB3,),],
                [DAY,   SMB3,  AIRSHIP,    editorImage(this, 'GroundMushroom_airship_01', SMB3,),],
                [DAY,   SMB3,  AIRSHIP,    editorImage(this, 'GroundMushroom_airship_02', SMB3,),],

                [DAY,   SMW,   GROUND,     editorImage(this, 'GroundMushroom_00', SMW,),],
                [DAY,   SMW,   GROUND,     editorImage(this, 'GroundMushroom_01', SMW,),],
                [DAY,   SMW,   GROUND,     editorImage(this, 'GroundMushroom_02', SMW,),],
                [DAY,   SMW,   UNDERWATER, editorImage(this, 'GroundMushroom_water_00', SMW,),],
                [DAY,   SMW,   UNDERWATER, editorImage(this, 'GroundMushroom_water_01', SMW,),],
                [DAY,   SMW,   UNDERWATER, editorImage(this, 'GroundMushroom_water_02', SMW,),],
                [DAY,   SMW,   SNOW,       editorImage(this, 'GroundMushroom_snow_00', SMW,),],
                [DAY,   SMW,   SNOW,       editorImage(this, 'GroundMushroom_snow_01', SMW,),],
                [DAY,   SMW,   SNOW,       editorImage(this, 'GroundMushroom_snow_02', SMW,),],
                [NIGHT, SMW,   SNOW,       editorImage(this, 'GroundMushroom_snow_night_00', SMW,),],
                [NIGHT, SMW,   SNOW,       editorImage(this, 'GroundMushroom_snow_night_01', SMW,),],
                [NIGHT, SMW,   SNOW,       editorImage(this, 'GroundMushroom_snow_night_02', SMW,),],
                [DAY,   SMW,   AIRSHIP,    editorImage(this, 'GroundMushroom_airship_00', SMW,),],
                [DAY,   SMW,   AIRSHIP,    editorImage(this, 'GroundMushroom_airship_01', SMW,),],
                [DAY,   SMW,   AIRSHIP,    editorImage(this, 'GroundMushroom_airship_02', SMW,),],

                [DAY,   NSMBU, GROUND,     editorImage(this, 'GroundMushroom_00', NSMBU,),],
                [DAY,   NSMBU, GROUND,     editorImage(this, 'GroundMushroom_01', NSMBU,),],
                [DAY,   NSMBU, GROUND,     editorImage(this, 'GroundMushroom_02', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER, editorImage(this, 'GroundMushroom_water_00', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER, editorImage(this, 'GroundMushroom_water_01', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER, editorImage(this, 'GroundMushroom_water_02', NSMBU,),],
                [DAY,   NSMBU, SNOW,       editorImage(this, 'GroundMushroom_snow_00', NSMBU,),],
                [DAY,   NSMBU, SNOW,       editorImage(this, 'GroundMushroom_snow_01', NSMBU,),],
                [DAY,   NSMBU, SNOW,       editorImage(this, 'GroundMushroom_snow_02', NSMBU,),],
                [NIGHT, NSMBU, SNOW,       editorImage(this, 'GroundMushroom_snow_night_00', NSMBU,),],
                [NIGHT, NSMBU, SNOW,       editorImage(this, 'GroundMushroom_snow_night_01', NSMBU,),],
                [NIGHT, NSMBU, SNOW,       editorImage(this, 'GroundMushroom_snow_night_02', NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,    editorImage(this, 'GroundMushroom_airship_00', NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,    editorImage(this, 'GroundMushroom_airship_01', NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,    editorImage(this, 'GroundMushroom_airship_02', NSMBU,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link SEMISOLID_PLATFORM} */
    private static readonly ExistantAsSemisolidPlatform = class ExistantAsSemisolidPlatform_EditorEntityImages
        extends EditorEntityImages.Existant<'Semisolid Platform', | EditorImageFile<GameStyles_SMB, `GroundBox${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_0${| 0 | 1 | 2}` | 'GroundBox_airship_night_01', 'Semisolid Platform'>
                                                                  | EditorImageFile<| GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, `GroundBox${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_0${| 0 | 1 | 2}`, 'Semisolid Platform'>
                                                                  | EditorImageFile<GameStyles_SM3DW, `GroundBox${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Semisolid Platform'>> {

        public constructor() { super('Semisolid Platform',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,      editorImage(this, 'GroundBox_00', SMB,),],
                [DAY,   SMB,   GROUND,      editorImage(this, 'GroundBox_01', SMB,),],
                [DAY,   SMB,   GROUND,      editorImage(this, 'GroundBox_02', SMB,),],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, 'GroundBox_underground_00', SMB,),],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, 'GroundBox_underground_01', SMB,),],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, 'GroundBox_underground_02', SMB,),],
                [DAY,   SMB,   UNDERWATER,  editorImage(this, 'GroundBox_water_00', SMB,),],
                [DAY,   SMB,   UNDERWATER,  editorImage(this, 'GroundBox_water_01', SMB,),],
                [DAY,   SMB,   UNDERWATER,  editorImage(this, 'GroundBox_water_02', SMB,),],
                [DAY,   SMB,   DESERT,      editorImage(this, 'GroundBox_desert_00', SMB,),],
                [DAY,   SMB,   DESERT,      editorImage(this, 'GroundBox_desert_01', SMB,),],
                [DAY,   SMB,   DESERT,      editorImage(this, 'GroundBox_desert_02', SMB,),],
                [DAY,   SMB,   SNOW,        editorImage(this, 'GroundBox_snow_00', SMB,),],
                [DAY,   SMB,   SNOW,        editorImage(this, 'GroundBox_snow_01', SMB,),],
                [DAY,   SMB,   SNOW,        editorImage(this, 'GroundBox_snow_02', SMB,),],
                [NIGHT, SMB,   SNOW,        editorImage(this, 'GroundBox_snow_night_00', SMB,),],
                [NIGHT, SMB,   SNOW,        editorImage(this, 'GroundBox_snow_night_01', SMB,),],
                [NIGHT, SMB,   SNOW,        editorImage(this, 'GroundBox_snow_night_02', SMB,),],
                [DAY,   SMB,   SKY,         editorImage(this, 'GroundBox_athletic_00', SMB,),],
                [DAY,   SMB,   SKY,         editorImage(this, 'GroundBox_athletic_01', SMB,),],
                [DAY,   SMB,   SKY,         editorImage(this, 'GroundBox_athletic_02', SMB,),],
                [DAY,   SMB,   FOREST,      editorImage(this, 'GroundBox_woods_00', SMB,),],
                [DAY,   SMB,   FOREST,      editorImage(this, 'GroundBox_woods_01', SMB,),],
                [DAY,   SMB,   FOREST,      editorImage(this, 'GroundBox_woods_02', SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_00', SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_01', SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_02', SMB,),],
                [DAY,   SMB,   AIRSHIP,     editorImage(this, 'GroundBox_airship_00', SMB,),],
                [DAY,   SMB,   AIRSHIP,     editorImage(this, 'GroundBox_airship_01', SMB,),],
                [DAY,   SMB,   AIRSHIP,     editorImage(this, 'GroundBox_airship_02', SMB,),],
                [NIGHT, SMB,   AIRSHIP,     editorImage(this, 'GroundBox_airship_night_01', SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, 'GroundBox_castle_00', SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, 'GroundBox_castle_01', SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, 'GroundBox_castle_02', SMB,),],

                [DAY,   SMB3,  GROUND,      editorImage(this, 'GroundBox_00', SMB3,),],
                [DAY,   SMB3,  GROUND,      editorImage(this, 'GroundBox_01', SMB3,),],
                [DAY,   SMB3,  GROUND,      editorImage(this, 'GroundBox_02', SMB3,),],
                [DAY,   SMB3,  UNDERGROUND, editorImage(this, 'GroundBox_underground_00', SMB3,),],
                [DAY,   SMB3,  UNDERGROUND, editorImage(this, 'GroundBox_underground_01', SMB3,),],
                [DAY,   SMB3,  UNDERGROUND, editorImage(this, 'GroundBox_underground_02', SMB3,),],
                [DAY,   SMB3,  UNDERWATER,  editorImage(this, 'GroundBox_water_00', SMB3,),],
                [DAY,   SMB3,  UNDERWATER,  editorImage(this, 'GroundBox_water_01', SMB3,),],
                [DAY,   SMB3,  UNDERWATER,  editorImage(this, 'GroundBox_water_02', SMB3,),],
                [DAY,   SMB3,  DESERT,      editorImage(this, 'GroundBox_desert_00', SMB3,),],
                [DAY,   SMB3,  DESERT,      editorImage(this, 'GroundBox_desert_01', SMB3,),],
                [DAY,   SMB3,  DESERT,      editorImage(this, 'GroundBox_desert_02', SMB3,),],
                [DAY,   SMB3,  SNOW,        editorImage(this, 'GroundBox_snow_00', SMB3,),],
                [DAY,   SMB3,  SNOW,        editorImage(this, 'GroundBox_snow_01', SMB3,),],
                [DAY,   SMB3,  SNOW,        editorImage(this, 'GroundBox_snow_02', SMB3,),],
                [NIGHT, SMB3,  SNOW,        editorImage(this, 'GroundBox_snow_night_00', SMB3,),],
                [NIGHT, SMB3,  SNOW,        editorImage(this, 'GroundBox_snow_night_01', SMB3,),],
                [NIGHT, SMB3,  SNOW,        editorImage(this, 'GroundBox_snow_night_02', SMB3,),],
                [DAY,   SMB3,  SKY,         editorImage(this, 'GroundBox_athletic_00', SMB3,),],
                [DAY,   SMB3,  SKY,         editorImage(this, 'GroundBox_athletic_01', SMB3,),],
                [DAY,   SMB3,  SKY,         editorImage(this, 'GroundBox_athletic_02', SMB3,),],
                [DAY,   SMB3,  FOREST,      editorImage(this, 'GroundBox_woods_00', SMB3,),],
                [DAY,   SMB3,  FOREST,      editorImage(this, 'GroundBox_woods_01', SMB3,),],
                [DAY,   SMB3,  FOREST,      editorImage(this, 'GroundBox_woods_02', SMB3,),],
                [DAY,   SMB3,  GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_00', SMB3,),],
                [DAY,   SMB3,  GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_01', SMB3,),],
                [DAY,   SMB3,  GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_02', SMB3,),],
                [DAY,   SMB3,  AIRSHIP,     editorImage(this, 'GroundBox_airship_00', SMB3,),],
                [DAY,   SMB3,  AIRSHIP,     editorImage(this, 'GroundBox_airship_01', SMB3,),],
                [DAY,   SMB3,  AIRSHIP,     editorImage(this, 'GroundBox_airship_02', SMB3,),],
                [DAY,   SMB3,  CASTLE,      editorImage(this, 'GroundBox_castle_00', SMB3,),],
                [DAY,   SMB3,  CASTLE,      editorImage(this, 'GroundBox_castle_01', SMB3,),],
                [DAY,   SMB3,  CASTLE,      editorImage(this, 'GroundBox_castle_02', SMB3,),],

                [DAY,   SMW,   GROUND,      editorImage(this, 'GroundBox_00', SMW,),],
                [DAY,   SMW,   GROUND,      editorImage(this, 'GroundBox_01', SMW,),],
                [DAY,   SMW,   GROUND,      editorImage(this, 'GroundBox_02', SMW,),],
                [DAY,   SMW,   UNDERGROUND, editorImage(this, 'GroundBox_underground_00', SMW,),],
                [DAY,   SMW,   UNDERGROUND, editorImage(this, 'GroundBox_underground_01', SMW,),],
                [DAY,   SMW,   UNDERGROUND, editorImage(this, 'GroundBox_underground_02', SMW,),],
                [DAY,   SMW,   UNDERWATER,  editorImage(this, 'GroundBox_water_00', SMW,),],
                [DAY,   SMW,   UNDERWATER,  editorImage(this, 'GroundBox_water_01', SMW,),],
                [DAY,   SMW,   UNDERWATER,  editorImage(this, 'GroundBox_water_02', SMW,),],
                [DAY,   SMW,   DESERT,      editorImage(this, 'GroundBox_desert_00', SMW,),],
                [DAY,   SMW,   DESERT,      editorImage(this, 'GroundBox_desert_01', SMW,),],
                [DAY,   SMW,   DESERT,      editorImage(this, 'GroundBox_desert_02', SMW,),],
                [DAY,   SMW,   SNOW,        editorImage(this, 'GroundBox_snow_00', SMW,),],
                [DAY,   SMW,   SNOW,        editorImage(this, 'GroundBox_snow_01', SMW,),],
                [DAY,   SMW,   SNOW,        editorImage(this, 'GroundBox_snow_02', SMW,),],
                [NIGHT, SMW,   SNOW,        editorImage(this, 'GroundBox_snow_night_00', SMW,),],
                [NIGHT, SMW,   SNOW,        editorImage(this, 'GroundBox_snow_night_01', SMW,),],
                [NIGHT, SMW,   SNOW,        editorImage(this, 'GroundBox_snow_night_02', SMW,),],
                [DAY,   SMW,   SKY,         editorImage(this, 'GroundBox_athletic_00', SMW,),],
                [DAY,   SMW,   SKY,         editorImage(this, 'GroundBox_athletic_01', SMW,),],
                [DAY,   SMW,   SKY,         editorImage(this, 'GroundBox_athletic_02', SMW,),],
                [DAY,   SMW,   FOREST,      editorImage(this, 'GroundBox_woods_00', SMW,),],
                [DAY,   SMW,   FOREST,      editorImage(this, 'GroundBox_woods_01', SMW,),],
                [DAY,   SMW,   FOREST,      editorImage(this, 'GroundBox_woods_02', SMW,),],
                [DAY,   SMW,   GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_00', SMW,),],
                [DAY,   SMW,   GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_01', SMW,),],
                [DAY,   SMW,   GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_02', SMW,),],
                [DAY,   SMW,   AIRSHIP,     editorImage(this, 'GroundBox_airship_00', SMW,),],
                [DAY,   SMW,   AIRSHIP,     editorImage(this, 'GroundBox_airship_01', SMW,),],
                [DAY,   SMW,   AIRSHIP,     editorImage(this, 'GroundBox_airship_02', SMW,),],
                [DAY,   SMW,   CASTLE,      editorImage(this, 'GroundBox_castle_00', SMW,),],
                [DAY,   SMW,   CASTLE,      editorImage(this, 'GroundBox_castle_01', SMW,),],
                [DAY,   SMW,   CASTLE,      editorImage(this, 'GroundBox_castle_02', SMW,),],

                [DAY,   NSMBU, GROUND,      editorImage(this, 'GroundBox_00', NSMBU,),],
                [DAY,   NSMBU, GROUND,      editorImage(this, 'GroundBox_01', NSMBU,),],
                [DAY,   NSMBU, GROUND,      editorImage(this, 'GroundBox_02', NSMBU,),],
                [DAY,   NSMBU, UNDERGROUND, editorImage(this, 'GroundBox_underground_00', NSMBU,),],
                [DAY,   NSMBU, UNDERGROUND, editorImage(this, 'GroundBox_underground_01', NSMBU,),],
                [DAY,   NSMBU, UNDERGROUND, editorImage(this, 'GroundBox_underground_02', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER,  editorImage(this, 'GroundBox_water_00', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER,  editorImage(this, 'GroundBox_water_01', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER,  editorImage(this, 'GroundBox_water_02', NSMBU,),],
                [DAY,   NSMBU, DESERT,      editorImage(this, 'GroundBox_desert_00', NSMBU,),],
                [DAY,   NSMBU, DESERT,      editorImage(this, 'GroundBox_desert_01', NSMBU,),],
                [DAY,   NSMBU, DESERT,      editorImage(this, 'GroundBox_desert_02', NSMBU,),],
                [DAY,   NSMBU, SNOW,        editorImage(this, 'GroundBox_snow_00', NSMBU,),],
                [DAY,   NSMBU, SNOW,        editorImage(this, 'GroundBox_snow_01', NSMBU,),],
                [DAY,   NSMBU, SNOW,        editorImage(this, 'GroundBox_snow_02', NSMBU,),],
                [NIGHT, NSMBU, SNOW,        editorImage(this, 'GroundBox_snow_night_00', NSMBU,),],
                [NIGHT, NSMBU, SNOW,        editorImage(this, 'GroundBox_snow_night_01', NSMBU,),],
                [NIGHT, NSMBU, SNOW,        editorImage(this, 'GroundBox_snow_night_02', NSMBU,),],
                [DAY,   NSMBU, SKY,         editorImage(this, 'GroundBox_athletic_00', NSMBU,),],
                [DAY,   NSMBU, SKY,         editorImage(this, 'GroundBox_athletic_01', NSMBU,),],
                [DAY,   NSMBU, SKY,         editorImage(this, 'GroundBox_athletic_02', NSMBU,),],
                [DAY,   NSMBU, FOREST,      editorImage(this, 'GroundBox_woods_00', NSMBU,),],
                [DAY,   NSMBU, FOREST,      editorImage(this, 'GroundBox_woods_01', NSMBU,),],
                [DAY,   NSMBU, FOREST,      editorImage(this, 'GroundBox_woods_02', NSMBU,),],
                [DAY,   NSMBU, GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_00', NSMBU,),],
                [DAY,   NSMBU, GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_01', NSMBU,),],
                [DAY,   NSMBU, GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_02', NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,     editorImage(this, 'GroundBox_airship_00', NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,     editorImage(this, 'GroundBox_airship_01', NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,     editorImage(this, 'GroundBox_airship_02', NSMBU,),],
                [DAY,   NSMBU, CASTLE,      editorImage(this, 'GroundBox_castle_00', NSMBU,),],
                [DAY,   NSMBU, CASTLE,      editorImage(this, 'GroundBox_castle_01', NSMBU,),],
                [DAY,   NSMBU, CASTLE,      editorImage(this, 'GroundBox_castle_02', NSMBU,),],

                [DAY,   SM3DW, GROUND,      editorImage(this, 'GroundBox_00', SM3DW,),],
                [DAY,   SM3DW, UNDERGROUND, editorImage(this, 'GroundBox_underground_00', SM3DW,),],
                [DAY,   SM3DW, UNDERWATER,  editorImage(this, 'GroundBox_water_00', SM3DW,),],
                [DAY,   SM3DW, DESERT,      editorImage(this, 'GroundBox_desert_00', SM3DW,),],
                [DAY,   SM3DW, SNOW,        editorImage(this, 'GroundBox_snow_00', SM3DW,),],
                [DAY,   SM3DW, SKY,         editorImage(this, 'GroundBox_athletic_00', SM3DW,),],
                [DAY,   SM3DW, FOREST,      editorImage(this, 'GroundBox_woods_00', SM3DW,),],
                [DAY,   SM3DW, GHOST_HOUSE, editorImage(this, 'GroundBox_hauntedhouse_00', SM3DW,),],
                [DAY,   SM3DW, AIRSHIP,     editorImage(this, 'GroundBox_airship_00', SM3DW,),],
                [DAY,   SM3DW, CASTLE,      editorImage(this, 'GroundBox_castle_00', SM3DW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link BRIDGE} */
    private static readonly ExistantAsBridge = class ExistantAsBridge_EditorEntityImages
        extends EditorEntityImages.Existant<'Bridge', | EditorImageFile<GameStyles_SMB, `Bridge${| EmptyString | `_${| 'snow' | 'snow_night' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Bridge'>
                                                      | EditorImageFile<GameStyles_SMB3, `Bridge${| EmptyString | `_${| 'snow' | 'snow_night'}`}_00`, 'Bridge'>
                                                      | EditorImageFile<GameStyles_SMW, `Bridge${| EmptyString | `_${| 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods'}`}_00`, 'Bridge'>
                                                      | EditorImageFile<GameStyles_NSMBU, `Bridge${| EmptyString | `_${| 'underground' | 'water' | 'snow' | 'snow_night' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Bridge'>> {

        public constructor() { super('Bridge',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,      editorImage(this, 'Bridge_00', SMB,),],
                [DAY,   SMB,   SNOW,        editorImage(this, 'Bridge_snow_00', SMB,),],
                [NIGHT, SMB,   SNOW,        editorImage(this, 'Bridge_snow_night_00', SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, 'Bridge_hauntedhouse_00', SMB,),],
                [DAY,   SMB,   AIRSHIP,     editorImage(this, 'Bridge_airship_00', SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, 'Bridge_castle_00', SMB,),],

                [DAY,   SMB3,  GROUND,      editorImage(this, 'Bridge_00', SMB3,),],
                [DAY,   SMB3,  SNOW,        editorImage(this, 'Bridge_snow_00', SMB3,),],
                [NIGHT, SMB3,  SNOW,        editorImage(this, 'Bridge_snow_night_00', SMB3,),],

                [DAY,   SMW,   GROUND,      editorImage(this, 'Bridge_00', SMW,),],
                [DAY,   SMW,   DESERT,      editorImage(this, 'Bridge_desert_00', SMW,),],
                [DAY,   SMW,   SNOW,        editorImage(this, 'Bridge_snow_00', SMW,),],
                [NIGHT, SMW,   SNOW,        editorImage(this, 'Bridge_snow_night_00', SMW,),],
                [DAY,   SMW,   SKY,         editorImage(this, 'Bridge_athletic_00', SMW,),],
                [DAY,   SMW,   FOREST,      editorImage(this, 'Bridge_woods_00', SMW,),],

                [DAY,   NSMBU, GROUND,      editorImage(this, 'Bridge_00', NSMBU,),],
                [DAY,   NSMBU, UNDERGROUND, editorImage(this, 'Bridge_underground_00', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER,  editorImage(this, 'Bridge_water_00', NSMBU,),],
                [DAY,   NSMBU, SNOW,        editorImage(this, 'Bridge_snow_00', NSMBU,),],
                [NIGHT, NSMBU, SNOW,        editorImage(this, 'Bridge_snow_night_00', NSMBU,),],
                [DAY,   NSMBU, FOREST,      editorImage(this, 'Bridge_woods_00', NSMBU,),],
                [DAY,   NSMBU, GHOST_HOUSE, editorImage(this, 'Bridge_hauntedhouse_00', NSMBU,),],
                [DAY,   NSMBU, AIRSHIP,     editorImage(this, 'Bridge_airship_00', NSMBU,),],
                [DAY,   NSMBU, CASTLE,      editorImage(this, 'Bridge_castle_00', NSMBU,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link BRICK_BLOCK} */
    private static readonly ExistantAsBrickBlock = class ExistantAsBrickBlock_EditorEntityImages
        extends EditorEntityImages.Existant<'Brick Block', | EditorImageFile<GameStyles_SMB, `RengaBlock${| EmptyString | `_${| 'underground' | 'snow' | 'snow_night' | 'hauntedhouse' | 'castle'}`}_00`, 'Brick Block'>
                                                           | EditorImageFile<GameStyles_SMB3, `RengaBlock${| EmptyString | '_snow_night'}_00`, 'Brick Block'>
                                                           | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, `RengaBlock_00`, 'Brick Block'>> {

        public constructor() { super('Brick Block',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,      editorImage(this, 'RengaBlock_00', SMB,),],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, 'RengaBlock_underground_00', SMB,),],
                [DAY,   SMB,   SNOW,        editorImage(this, 'RengaBlock_snow_00', SMB,),],
                [NIGHT, SMB,   SNOW,        editorImage(this, 'RengaBlock_snow_night_00', SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, 'RengaBlock_hauntedhouse_00', SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, 'RengaBlock_castle_00', SMB,),],

                [DAY,   SMB3,  GROUND,      editorImage(this, 'RengaBlock_00', SMB3,),],
                [NIGHT, SMB3,  SNOW,        editorImage(this, 'RengaBlock_snow_night_00', SMB3,),],

                [DAY,   SMW,   GROUND,      editorImage(this, 'RengaBlock_00', SMW,),],

                [DAY,   NSMBU, GROUND,      editorImage(this, 'RengaBlock_00', NSMBU,),],

                [DAY,   SM3DW, GROUND,      editorImage(this, 'RengaBlock_00', SM3DW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CRISTAL_BLOCK} */
    private static readonly ExistantAsCristalBlock = class ExistantAsCristalBlock_EditorEntityImages
        extends EditorEntityImages.Existant<'Cristal Block', EditorImageFile<GameStyles_SM3DW, `RengaBlock${`_${| 'underground' | 'woods'}`}_00`, 'Cristal Block'>> {

        public constructor() { super('Cristal Block',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SM3DW, UNDERGROUND, editorImage(this, 'RengaBlock_underground_00', SM3DW,),],
                [DAY, SM3DW, FOREST,      editorImage(this, 'RengaBlock_woods_00', SM3DW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link HARD_BLOCK} */
    private static readonly ExistantAsHardBlock = class ExistantAsHardBlock_EditorEntityImages
        extends EditorEntityImages.Existant<'Hard Block', | EditorImageFile<GameStyles_SMB, `HardBlock${| EmptyString | `_${| 'underground' | 'underground_night' | 'water' | 'snow' | 'snow_night' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Hard Block'>
                                                          | EditorImageFile<GameStyles_SMB3, `HardBlock${| EmptyString | `_${| 'snow' | 'snow_night'}`}_00`, 'Hard Block'>
                                                          | EditorImageFile<GameStyles_SMW, `HardBlock${| EmptyString | `_${| 'hauntedhouse' | 'airship' | 'airship_night'}`}_00`, 'Hard Block'>
                                                          | EditorImageFile<GameStyles_NSMBU, `HardBlock${| EmptyString | `_${| 'underground' | 'water' | 'snow' | 'athletic' | 'woods' | 'castle'}`}_00`, 'Hard Block'>> {

        public constructor() { super('Hard Block',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,      editorImage(this, 'HardBlock_00', SMB,),],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, 'HardBlock_underground_00', SMB,),],
                [NIGHT, SMB,   UNDERGROUND, editorImage(this, 'HardBlock_underground_night_00', SMB,),],
                [DAY,   SMB,   UNDERWATER,  editorImage(this, 'HardBlock_water_00', SMB,),],
                [DAY,   SMB,   SNOW,        editorImage(this, 'HardBlock_snow_00', SMB,),],
                [NIGHT, SMB,   SNOW,        editorImage(this, 'HardBlock_snow_night_00', SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, 'HardBlock_hauntedhouse_00', SMB,),],
                [DAY,   SMB,   AIRSHIP,     editorImage(this, 'HardBlock_airship_00', SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, 'HardBlock_castle_00', SMB,),],

                [DAY,   SMB3,  GROUND,      editorImage(this, 'HardBlock_00', SMB3,),],
                [DAY,   SMB3,  SNOW,        editorImage(this, 'HardBlock_snow_00', SMB3,),],
                [NIGHT, SMB3,  SNOW,        editorImage(this, 'HardBlock_snow_night_00', SMB3,),],

                [DAY,   SMW,   GROUND,      editorImage(this, 'HardBlock_00', SMW,),],
                [DAY,   SMW,   GHOST_HOUSE, editorImage(this, 'HardBlock_hauntedhouse_00', SMW,),],
                [DAY,   SMW,   AIRSHIP,     editorImage(this, 'HardBlock_airship_00', SMW,),],
                [NIGHT, SMW,   AIRSHIP,     editorImage(this, 'HardBlock_airship_night_00', SMW,),],

                [DAY,   NSMBU, GROUND,      editorImage(this, 'HardBlock_00', NSMBU,),],
                [DAY,   NSMBU, UNDERGROUND, editorImage(this, 'HardBlock_underground_00', NSMBU,),],
                [DAY,   NSMBU, UNDERWATER,  editorImage(this, 'HardBlock_water_00', NSMBU,),],
                [DAY,   NSMBU, SNOW,        editorImage(this, 'HardBlock_snow_00', NSMBU,),],
                [DAY,   NSMBU, SKY,         editorImage(this, 'HardBlock_athletic_00', NSMBU,),],
                [DAY,   NSMBU, FOREST,      editorImage(this, 'HardBlock_woods_00', NSMBU,),],
                [DAY,   NSMBU, CASTLE,      editorImage(this, 'HardBlock_castle_00', NSMBU,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CLOUD_BLOCK} */
    private static readonly ExistantAsCloudBlock = class ExistantAsCloudBlock_EditorEntityImages
        extends EditorEntityImages.Existant<'Cloud Block', | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, `KumoBlock${| EmptyString | `_${| 'water' | 'snow_night'}`}_00`, 'Cloud Block'>
                                                           | EditorImageFile<GameStyles_SMW, `KumoBlock${| EmptyString | '_water'}_00`, 'Cloud Block'>
                                                           | EditorImageFile<| GameStyles_NSMBU | GameStyles_SM3DW, 'KumoBlock_00', 'Cloud Block'>> {

        public constructor() { super('Cloud Block',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,     editorImage(this, 'KumoBlock_00', SMB,),],
                [DAY,   SMB,   UNDERWATER, editorImage(this, 'KumoBlock_water_00', SMB,),],
                [NIGHT, SMB,   SNOW,       editorImage(this, 'KumoBlock_snow_night_00', SMB,),],

                [DAY,   SMB3,  GROUND,     editorImage(this, 'KumoBlock_00', SMB3,),],
                [DAY,   SMB3,  UNDERWATER, editorImage(this, 'KumoBlock_water_00', SMB3,),],
                [NIGHT, SMB3,  SNOW,       editorImage(this, 'KumoBlock_snow_night_00', SMB3,),],

                [DAY,   SMW,   GROUND,     editorImage(this, 'KumoBlock_00', SMW,),],
                [DAY,   SMW,   UNDERWATER, editorImage(this, 'KumoBlock_water_00', SMW,),],

                [DAY,   NSMBU, GROUND,     editorImage(this, 'KumoBlock_00', NSMBU,),],

                [DAY,   SM3DW, GROUND,     editorImage(this, 'KumoBlock_00', SM3DW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link SPIKE_BALL} */
    private static readonly ExistantAsSpikeBall = class ExistantAsSpikeBall_EditorEntityImages
        extends EditorEntityImages.Existant<'Spike Ball', | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, `Gabon${| EmptyString | `_${| 'plain_night' | 'underground' | 'water' | 'desert_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_01`, 'Spike Ball'>
                                                          | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, 'Gabon_01', 'Spike Ball'>> {

        public constructor() { super('Spike Ball',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY,   SMB,   GROUND,      editorImage(this, 'Gabon_01', SMB,),],
                [NIGHT, SMB,   GROUND,      editorImage(this, 'Gabon_plain_night_01', SMB,),],
                [DAY,   SMB,   UNDERGROUND, editorImage(this, 'Gabon_underground_01', SMB,),],
                [DAY,   SMB,   UNDERWATER,  editorImage(this, 'Gabon_water_01', SMB,),],
                [NIGHT, SMB,   DESERT,      editorImage(this, 'Gabon_desert_night_01', SMB,),],
                [NIGHT, SMB,   SKY,         editorImage(this, 'Gabon_athletic_night_01', SMB,),],
                [NIGHT, SMB,   FOREST,      editorImage(this, 'Gabon_woods_night_01', SMB,),],
                [DAY,   SMB,   GHOST_HOUSE, editorImage(this, 'Gabon_hauntedhouse_01', SMB,),],
                [NIGHT, SMB,   AIRSHIP,     editorImage(this, 'Gabon_airship_night_01', SMB,),],
                [DAY,   SMB,   CASTLE,      editorImage(this, 'Gabon_castle_01', SMB,),],

                [DAY,   SMB3,  GROUND,      editorImage(this, 'Gabon_01', SMB3,),],
                [NIGHT, SMB3,  GROUND,      editorImage(this, 'Gabon_plain_night_01', SMB3,),],
                [DAY,   SMB3,  UNDERGROUND, editorImage(this, 'Gabon_underground_01', SMB3,),],
                [DAY,   SMB3,  UNDERWATER,  editorImage(this, 'Gabon_water_01', SMB3,),],
                [NIGHT, SMB3,  DESERT,      editorImage(this, 'Gabon_desert_night_01', SMB3,),],
                [NIGHT, SMB3,  SKY,         editorImage(this, 'Gabon_athletic_night_01', SMB3,),],
                [NIGHT, SMB3,  FOREST,      editorImage(this, 'Gabon_woods_night_01', SMB3,),],
                [DAY,   SMB3,  GHOST_HOUSE, editorImage(this, 'Gabon_hauntedhouse_01', SMB3,),],
                [NIGHT, SMB3,  AIRSHIP,     editorImage(this, 'Gabon_airship_night_01', SMB3,),],
                [DAY,   SMB3,  CASTLE,      editorImage(this, 'Gabon_castle_01', SMB3,),],

                [DAY,   SMW,   GROUND,      editorImage(this, 'Gabon_01', SMW,),],

                [DAY,   NSMBU, GROUND,      editorImage(this, 'Gabon_01', NSMBU,),],

                [DAY,   SM3DW, GROUND,      editorImage(this, 'Gabon_01', SM3DW,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link TRACK} */
    private static readonly ExistantAsTrack = class ExistantAsTrack_EditorEntityImages
        extends EditorEntityImages.Existant<'Track', EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, `Rail${| EmptyString | 'U' | 'D' | `Branch${`${| 'U' | 'D'}${| 'L' | 'R'}` | `${| 'L' | 'R'}${| 'U' | 'D'}`}` | `Curve${| 'L' | 'R'}${| 'U' | 'D'}`}_00`, 'Track'>> {

        public constructor() { super('Track',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SMB, GROUND,   editorImage(this, 'Rail_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailU_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailCurveLD_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailCurveLU_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailCurveRD_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailCurveRU_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchDL_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchDR_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchUL_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchUR_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchLD_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchLU_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchRD_00', SMB,),],
                [DAY, SMB, GROUND,   editorImage(this, 'RailBranchRU_00', SMB,),],

                [DAY, SMB3, GROUND,  editorImage(this, 'Rail_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailU_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailCurveLD_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailCurveLU_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailCurveRD_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailCurveRU_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchDL_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchDR_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchUL_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchUR_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchLD_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchLU_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchRD_00', SMB3,),],
                [DAY, SMB3, GROUND,  editorImage(this, 'RailBranchRU_00', SMB3,),],

                [DAY, SMW, GROUND,   editorImage(this, 'Rail_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailU_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailCurveLD_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailCurveLU_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailCurveRD_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailCurveRU_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchDL_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchDR_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchUL_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchUR_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchLD_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchLU_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchRD_00', SMW,),],
                [DAY, SMW, GROUND,   editorImage(this, 'RailBranchRU_00', SMW,),],

                [DAY, NSMBU, GROUND, editorImage(this, 'Rail_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailU_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailCurveLD_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailCurveLU_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailCurveRD_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailCurveRU_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchDL_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchDR_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchUL_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchUR_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchLD_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchLU_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchRD_00', NSMBU,),],
                [DAY, NSMBU, GROUND, editorImage(this, 'RailBranchRU_00', NSMBU,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link TREE} */
    private static readonly ExistantAsTree = class ExistantAsTree_EditorEntityImages
        extends EditorEntityImages.Existant<'Tree', EditorImageFile<GameStyles_SM3DW, `BellTree${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'woods'}`}_00`, 'Tree'>> {

        public constructor() { super('Tree',) }

        public override _createImageFiles() {
            return new ArrayAsCollection([
                [DAY, SM3DW, GROUND,      editorImage(this, 'BellTree_00', SM3DW,),],
                [DAY, SM3DW, UNDERGROUND, editorImage(this, 'BellTree_underground_00', SM3DW,),],
                [DAY, SM3DW, UNDERWATER,  editorImage(this, 'BellTree_water_00', SM3DW,),],
                [DAY, SM3DW, DESERT,      editorImage(this, 'BellTree_desert_00', SM3DW,),],
                [DAY, SM3DW, SNOW,        editorImage(this, 'BellTree_snow_00', SM3DW,),],
                [DAY, SM3DW, FOREST,      editorImage(this, 'BellTree_woods_00', SM3DW,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (predefined) --------------------

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new EditorEntityImages.ExistantAsGroundOrSlope('Ground', 'Ground',)
    public static readonly START_GROUND =                                  new EditorEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new EditorEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new EditorEntityImages.ExistantAsGroundOrSlope('Steep Slope', 'slope_l45',)
    public static readonly GENTLE_SLOPE =                                  new EditorEntityImages.ExistantAsGroundOrSlope('Gentle Slope', 'slope_l30',)

    public static readonly START_BLOCK =                                   new EditorEntityImages.Null()
    public static readonly OCCLUDE_BLOCK =                                 new EditorEntityImages.Null()

    public static readonly WATER =                                         new EditorEntityImages.Null()
    public static readonly LAVA =                                          new EditorEntityImages.Null()
    public static readonly POISON =                                        new EditorEntityImages.Null()

    public static readonly PIPE =                                          new EditorEntityImages.ExistantAsPipe()
    public static readonly CLEAR_PIPE =                                    new EditorEntityImages.ExistantAs1InOnlySm3dw('Clear Pipe', 'ToumeiDokan_00',)

    public static readonly SPIKE_TRAP =                                    new EditorEntityImages.ExistantAs1Plus1NightSnowInSmbAndSmb3ButNotSm3dw('Spike Trap', 'Toge_00', 'Toge_snow_night_00',)
    public static readonly JELECTRO =                                      new EditorEntityImages.ExistantAs1In1GameStyle('Jelectro', 'Toge_water_00', SMB3, Themes.UNDERWATER,)
    public static readonly SEA_URCHIN =                                    new EditorEntityImages.ExistantAs1In1GameStyle('Sea Urchin',  'Toge_water_00', SMW, Themes.UNDERWATER,)
    public static readonly SPIKE_BLOCK =                                   new EditorEntityImages.ExistantAs3InOnlySm3dw('Spike Block', 'TogeBlock_00', 'TogeBlock_01', 'TogeBlock_02',)

    public static readonly MUSHROOM_PLATFORM =                             new EditorEntityImages.ExistantAsMushroomPlatform()
    public static readonly SEMISOLID_PLATFORM =                            new EditorEntityImages.ExistantAsSemisolidPlatform()
    public static readonly BRIDGE =                                        new EditorEntityImages.ExistantAsBridge()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new EditorEntityImages.ExistantAsBrickBlock()
    public static readonly CRISTAL_BLOCK =                                 new EditorEntityImages.ExistantAsCristalBlock()
    public static readonly ROTATING_BLOCK =                                new EditorEntityImages.ExistantAs1InOnlySmw('Rotating Block', 'RengaBlock_00',)

    public static readonly HARD_BLOCK =                                    new EditorEntityImages.ExistantAsHardBlock()
    public static readonly ROCK_BLOCK =                                    new EditorEntityImages.ExistantAs1InOnlySm3dw('Rock Block', 'HardBlock_00',)

    public static readonly QUESTION_MARK_BLOCK =                           new EditorEntityImages.ExistantAs1Plus1NightSnowInSmbAndSmb3('? Block', 'HatenaBlock_00', 'HatenaBlock_snow_night_00',)
    public static readonly HIDDEN_BLOCK =                                  new EditorEntityImages.ExistantAs1InAll('Hidden Block', 'ClearBlock_00',)
    public static readonly EMPTY_BLOCK =                                   new EditorEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK =                        new EditorEntityImages.ExistantAs1InOnlySm3dw('! Block', 'BikkuriBlock_00',)

    public static readonly NOTE_BLOCK =                                    new EditorEntityImages.ExistantAs1Plus1NightSnowInSmbAndSmb3ButNotSm3dw('Note Block', 'OnpuBlock_00', 'OnpuBlock_snow_night_00',)
    public static readonly MUSIC_BLOCK =                                   new EditorEntityImages.ExistantAs1Plus1NightSnowInSmbAndSmb3ButNotSm3dw('Music Block', 'OnpuBlock_01', 'OnpuBlock_snow_night_01',)

    public static readonly DONUT_BLOCK =                                   new EditorEntityImages.ExistantAs1Plus1NightSnowInSmbAndSmb3('Donut Block', 'ChikuwaBlock_00', 'ChikuwaBlock_snow_night_00',)

    public static readonly CLOUD_BLOCK =                                   new EditorEntityImages.ExistantAsCloudBlock()

    public static readonly ON_OFF_SWITCH =                                 new EditorEntityImages.ExistantAs1InAll('ON/OFF Switch', 'OnOffSwitch_00',)
    public static readonly DOTTED_LINE_BLOCK =                             new EditorEntityImages.ExistantAs2InAll('Dotted-Line Block', 'OnOffBlock_00', 'OnOffBlock_01',)

    public static readonly P_BLOCK =                                       new EditorEntityImages.ExistantAs2InAll('P Block', 'PBlock_00', 'PBlock_01',)

    public static readonly BLINKING_BLOCK =                                new EditorEntityImages.ExistantAs2InOnlySm3dw('Blinking Block', 'Chikachika_00', 'Chikachika_01',)

    public static readonly ICE_BLOCK =                                     new EditorEntityImages.ExistantAs1Plus1NightSnowInSmb3('Ice Block', 'IceBlock_00', 'IceBlock_snow_night_00',)
    public static readonly ICICLE =                                        new EditorEntityImages.ExistantAs2InAll('Icicle', 'Icicle_00', 'Icicle_01',)

    public static readonly COIN =                                          new EditorEntityImages.ExistantAs1InAll('Coin', 'Coin_00',)
    public static readonly FROZEN_COIN =                                   new EditorEntityImages.ExistantAs1Plus1NightSnowInSmb3ButNotSm3dw('Frozen Coin', 'Coin_01', 'Coin_snow_night_01',)
    public static readonly TEN_COIN =                                      new EditorEntityImages.ExistantAs1InAll('10-Coin', '10Coin_00',)
    public static readonly THIRTY_COIN =                                   new EditorEntityImages.ExistantAs1InAll('30-Coin', '10Coin_01',)
    public static readonly FIFTY_COIN =                                    new EditorEntityImages.ExistantAs1InAll('50-Coin', '10Coin_02',)
    public static readonly PINK_COIN =                                     new EditorEntityImages.ExistantAs1InAll('Pink Coin', 'PinkCoin_00',)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new EditorEntityImages.ExistantAs1InAll('Super Mushroom', 'SuperKinoko_00',)

    public static readonly FIRE_FLOWER =                                   new EditorEntityImages.ExistantAs2InAll('Fire Flower', 'FireFlower_00', 'FireFlowerUni_00',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new EditorEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new EditorEntityImages.ExistantAs2InOnlySmb('Superball Flower', 'FireFlower_01', 'FireFlowerUni_01',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new EditorEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM =                              new EditorEntityImages.Null()
    public static readonly WEIRD_MUSHROOM =                                new EditorEntityImages.Null()

    public static readonly MASTER_SWORD =                                  new EditorEntityImages.ExistantAs1InOnlySmb('Master Sword', 'SuperKinoko_01',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new EditorEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK =                        new EditorEntityImages.Null()

    public static readonly BIG_MUSHROOM =                                  new EditorEntityImages.ExistantAs2InOnlySmb('Big Mushroom', 'DekaKinoko_00', 'DekaKinokoUni_00',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new EditorEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN =                           new EditorEntityImages.Null()

    public static readonly SMB2_MUSHROOM =                                 new EditorEntityImages.ExistantAs2InOnlySmb('SMB2 Mushroom', 'KinokoUSA_00', 'KinokoUSAUni_00',)

    public static readonly SUPER_LEAF =                                    new EditorEntityImages.ExistantAs2InOnlySmb3('Super Leaf', 'SuperKonoha_00', 'SuperKonohaUni_00',)

    public static readonly FROG_SUIT =                                     new EditorEntityImages.ExistantAs2InOnlySmb3('Frog Suit', 'FrogSuit_00', 'FrogSuitUni_00',)

    public static readonly CAPE_FEATHER =                                  new EditorEntityImages.ExistantAs2InOnlySmw('Cape Feather', 'MantleWing_00', 'MantleWingUni_00',)

    public static readonly POWER_BALLOON =                                 new EditorEntityImages.ExistantAs2InOnlySmw('Power Balloon', 'PowerBalloon_00', 'PowerBalloonUni_00',)

    public static readonly PROPELLER_MUSHROOM =                            new EditorEntityImages.ExistantAs2InOnlyNsmbu('Propeller Mushroom', 'PropellerKinoko_00', 'PropellerKinokoUni_00',)

    public static readonly SUPER_ACORN =                                   new EditorEntityImages.ExistantAs2InOnlyNsmbu('Super Acorn', 'SuperDonguri_00', 'SuperDonguriUni_00',)

    public static readonly SUPER_BELL =                                    new EditorEntityImages.ExistantAs2InOnlySm3dw('Super Bell', 'SuperBell_00', 'SuperBellUni_00',)

    public static readonly SUPER_HAMMER =                                  new EditorEntityImages.ExistantAs2InOnlySm3dw('Super Hammer', 'SuperHammer_00', 'SuperHammerUni_00',)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new EditorEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new EditorEntityImages.ExistantAs2InOnlySm3dw('Boomerang Flower', 'BoomerangFlower_00', 'BoomerangFlowerUni_00',)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new EditorEntityImages.Null()

    public static readonly CANNON_BOX =                                    new EditorEntityImages.ExistantAs1InOnlySm3dw('Cannon Box', 'BoxKiller_00',)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new EditorEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new EditorEntityImages.ExistantAs1InOnlySm3dw('Propeller Box', 'BoxPropeller_00',)

    public static readonly GOOMBA_MASK =                                   new EditorEntityImages.ExistantAs1InOnlySm3dw('Goomba Mask', 'BoxKuribo_00',)

    public static readonly BULLET_BILL_MASK =                              new EditorEntityImages.ExistantAs1InOnlySm3dw('Bullet Bill Mask', 'BoxKillerPlayer_00',)

    public static readonly RED_POW_BOX =                                   new EditorEntityImages.ExistantAs1InOnlySm3dw('Red POW Box', 'BoxPow_00',)

    public static readonly SUPER_STAR =                                    new EditorEntityImages.ExistantAs1InAll('Super Star', 'SuperStar_00',)

    public static readonly ONE_UP_MUSHROOM =                               new EditorEntityImages.ExistantAs1InAll('1-Up Mushroom', '1upKinoko_00',)
    public static readonly ROTTEN_MUSHROOM =                               new EditorEntityImages.ExistantAs1InNotSm3dw('Rotten Mushroom', 'DokuKinoko_00',)

    public static readonly SHOE_GOOMBA =                                   new EditorEntityImages.ExistantAs1InOnlySmbAndSmb3('Shoe Goomba', 'KutsuKuribo_00',)
    public static readonly SHOE =                                          new EditorEntityImages.Null()
    public static readonly STILETTO_GOOMBA =                               new EditorEntityImages.ExistantAs1InOnlySmbAndSmb3('Stiletto Goomba', 'KutsuKuribo_01',)
    public static readonly STILETTO =                                      new EditorEntityImages.Null()
    public static readonly YOSHI_EGG =                                     new EditorEntityImages.ExistantAs1InOnlySmwAndNsmbu('Yoshi’s Egg', 'YosshiEgg_00',)
    public static readonly YOSHI =                                         new EditorEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new EditorEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new EditorEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new EditorEntityImages.ExistantAs1InOnlySmwAndNsmbu('Red Yoshi’s Egg', 'YosshiEggRed_00',)
    public static readonly RED_YOSHI =                                     new EditorEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new EditorEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new EditorEntityImages.ExistantAs1InNotSmw('Goomba', 'Kuribo_00',)
    public static readonly GALOOMBA =                                      new EditorEntityImages.ExistantAs1InOnlySmw('Galoomba', 'Kuribo_00',)
    public static readonly GOOMBRAT =                                      new EditorEntityImages.ExistantAs1InNotSmwAndSm3dw('Goombrat', 'Kuribo_01',)
    public static readonly GOOMBUD =                                       new EditorEntityImages.ExistantAs1InOnlySmw('Goombud', 'Kuribo_01',)

    public static readonly GREEN_KOOPA_TROOPA =                            new EditorEntityImages.ExistantAs1InAll('Green Koopa Troopa', 'Nokonoko_00',)
    public static readonly RED_KOOPA_TROOPA =                              new EditorEntityImages.ExistantAs1InAll('Red Koopa Troopa', 'Nokonoko_01',)
    public static readonly GREEN_BEACH_KOOPA =                             new EditorEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new EditorEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new EditorEntityImages.Null()
    public static readonly RED_KOOPA_SHELL =                               new EditorEntityImages.Null()

    public static readonly DRY_BONES =                                     new EditorEntityImages.ExistantAs1InAll('Dry Bones', 'Karon_00',)
    public static readonly PARABONES =                                     new EditorEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new EditorEntityImages.Null()
    public static readonly DRY_BONES_SHELL =                               new EditorEntityImages.ExistantAs1InNotSm3dw('Dry Bones Shell', 'Karon_01',)

    public static readonly BUZZY_BEETLE =                                  new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Buzzy Beetle', 'Met', 0,)
    public static readonly PARA_BEETLE =                                   new EditorEntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Buzzy Shell', 'Met', 1,)

    public static readonly SPINY =                                         new EditorEntityImages.ExistantAs1InAll('Spiny', 'Togezo_00',)
    public static readonly WINGED_SPINY =                                  new EditorEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new EditorEntityImages.Null()
    public static readonly SPINY_EGG =                                     new EditorEntityImages.Null()
    public static readonly SPINY_SHELL =                                   new EditorEntityImages.ExistantAs1InNotSm3dw('Spiny Shell', 'Togezo_01',)

    public static readonly SPIKE_TOP =                                     new EditorEntityImages.ExistantAs1InNotSm3dw('Spike Top', 'TogeMet_00',)
    public static readonly WINGED_SPIKE_TOP =                              new EditorEntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new EditorEntityImages.ExistantAs1InNotSm3dw('Fast Spike Top', 'TogeMet_01',)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new EditorEntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new EditorEntityImages.ExistantAs1InOnlySm3dw('Skipsqueak', 'Pyonchu_00',)
    public static readonly SPINY_SKIPSQUEAK =                              new EditorEntityImages.ExistantAs1InOnlySm3dw('Spiny Skipsqueak', 'Pyonchu_01',)

    public static readonly ANT_TROOPER =                                   new EditorEntityImages.ExistantAs1InOnlySm3dw('Ant Trooper', 'Arihei_00',)
    public static readonly HORNED_ANT_TROOPER =                            new EditorEntityImages.ExistantAs1InOnlySm3dw('Horned Ant Trooper', 'Arihei_01',)

    public static readonly STINGBY =                                       new EditorEntityImages.ExistantAs1InOnlySm3dw('Stingby', 'Hacchin_00',)

    public static readonly GREEN_CHEEP_CHEEP =                             new EditorEntityImages.ExistantAs1InNotSmwAndNsmbu('Green Cheep Cheep', 'Pukupuku_00')
    public static readonly BLURPS =                                        new EditorEntityImages.ExistantAs1InOnlySmw('Blurps', 'Pukupuku_00',)
    public static readonly DEEP_CHEEP =                                    new EditorEntityImages.ExistantAs1InOnlyNsmbu('Deep Cheep', 'Pukupuku_00',)
    public static readonly RED_CHEEP_CHEEP =                               new EditorEntityImages.ExistantAs1InAll('Red Cheep Cheep', 'Pukupuku_01',)
    public static readonly FISH_BONE =                                     new EditorEntityImages.ExistantAs1InAll('Fish Bone', 'FishBone_00',)

    public static readonly BLOOPER =                                       new EditorEntityImages.ExistantAs1InAll('Blooper', 'Gesso_00',)
    public static readonly BLOOPER_NANNY =                                 new EditorEntityImages.ExistantAs1InNotSm3dw('Blooper Nanny', 'Gesso_01',)
    public static readonly BABY_BLOOPER =                                  new EditorEntityImages.Null()

    public static readonly PORCUPUFFER =                                   new EditorEntityImages.ExistantAs1InOnlySm3dw('Porcupuffer', 'Fugumannen_00',)

    public static readonly WIGGLER =                                       new EditorEntityImages.ExistantAs1InNotSm3dw('Wiggler', 'Hanachan_00',)
    public static readonly ANGRY_WIGGLER =                                 new EditorEntityImages.ExistantAs1InNotSm3dw('Angry Wiggler', 'Hanachan_01',)

    public static readonly PIRANHA_PLANT =                                 new EditorEntityImages.ExistantAs1InNotSmw('Piranha Plant', 'Pakkun_00',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new EditorEntityImages.ExistantAs1InOnlySmw('Jumping Piranha Plant', 'Pakkun_00',)
    public static readonly FIRE_PIRANHA_PLANT =                            new EditorEntityImages.ExistantAs1InAll('Fire Piranha Plant', 'Pakkun_01',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new EditorEntityImages.Null()
    public static readonly MUNCHER =                                       new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Muncher', 'BlackPakkun', 0,)
    public static readonly PIRANHA_CREEPER =                               new EditorEntityImages.ExistantAs2InOnlySm3dw('Piranha Creeper', 'PackunPipe_00', 'PackunPipe_01',)

    public static readonly CHAIN_CHOMP =                                   new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Chain Chomp', 'Wanwan', 0,)
    public static readonly UNCHAINED_CHOMP =                               new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Chain Chomp', 'Wanwan', 1,)
    public static readonly CHAIN_CHOMP_STUMP =                             new EditorEntityImages.Null()

    public static readonly SPIKE =                                         new EditorEntityImages.ExistantAs1InAll('Spike', 'Gabon_00',)
    public static readonly SPIKE_BALL =                                    new EditorEntityImages.ExistantAsSpikeBall()
    public static readonly SNOWBALL =                                      new EditorEntityImages.ExistantAs1InOnlySnow('Snowball', 'Gabon_snow_01',)

    public static readonly LAKITU =                                        new EditorEntityImages.ExistantAs1InNotSm3dw('Lakitu', 'Jugem_00',)
    public static readonly LAKITU_CLOUD =                                  new EditorEntityImages.ExistantAs1InNotSm3dw('Lakitu’s Cloud', 'Jugem_01',)

    public static readonly BOO =                                           new EditorEntityImages.ExistantAs1InAll('Boo', 'Teresa_00',)
    public static readonly STRETCH =                                       new EditorEntityImages.Null()
    public static readonly BOO_BUDDIES =                                   new EditorEntityImages.ExistantAs1InNotSm3dw('Boo Buddies', 'Teresa_01',)
    public static readonly PEEPA =                                         new EditorEntityImages.ExistantAs1InOnlySm3dw('Peepa', 'Teresa_01',)

    public static readonly BOB_OMB =                                       new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3('Bob-omb', 'Bombhei', 0,)
    public static readonly LIT_BOB_OMB =                                   new EditorEntityImages.ExistantAs1InAll('Lit Bob-omb', 'Bombhei_01',)

    public static readonly POKEY =                                         new EditorEntityImages.ExistantAs1InAll('Pokey', 'Sambo_00',)
    public static readonly SNOW_POKEY =                                    new EditorEntityImages.ExistantAs1InOnlySnow('Snow Pokey', 'Sambo_snow_00',)

    public static readonly THWOMP =                                        new EditorEntityImages.ExistantAs1InAll('Thwomp', 'Dossun_00',)
    public static readonly SIDEWAYS_THWOMP =                               new EditorEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new EditorEntityImages.ExistantAs1InNotSm3dw('Monty Mole', 'ChoroPoo_00',)
    public static readonly ROCKY_WRENCH =                                  new EditorEntityImages.ExistantAs1InNotSm3dw('Rocky Wrench', 'Poo_00',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new EditorEntityImages.Null()

    public static readonly MAGIKOOPA =                                     new EditorEntityImages.ExistantAs1InAll('Magikoopa', 'Kameck_00',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new EditorEntityImages.Null()

    public static readonly HAMMER_BRO =                                    new EditorEntityImages.ExistantAs1InAll('Hammer Bro', 'Bros_00',)
    public static readonly SLEDGE_BRO =                                    new EditorEntityImages.ExistantAs1InAll('Sledge Bro', 'MegaBros_00',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new EditorEntityImages.Null()
    public static readonly FIRE_BRO =                                      new EditorEntityImages.ExistantAs1InOnlySm3dw('Fire Bro', 'Bros_01',)
    public static readonly HEAVY_FIRE_BRO =                                new EditorEntityImages.ExistantAs1InOnlySm3dw('Heavy Fire Bro', 'MegaBros_01',)
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new EditorEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new EditorEntityImages.ExistantAs1InAll('Lava Bubble', 'Bubble_00',)

    public static readonly MECHAKOOPA =                                    new EditorEntityImages.ExistantAs1InNotSm3dw('Mechakoopa', 'KoopaMecha_00',)
    public static readonly BLASTA_MECHAKOOPA =                             new EditorEntityImages.ExistantAs1InNotSm3dw('Blasta Mechakoopa', 'KoopaMecha_01',)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new EditorEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA =                              new EditorEntityImages.ExistantAs1InNotSm3dw('Zappa Mechakoopa', 'KoopaMecha_02',)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new EditorEntityImages.Null()

    public static readonly CHARVAARGH =                                    new EditorEntityImages.ExistantAs1InOnlySm3dw('Charvaargh', 'MagmaFish_00',)

    public static readonly BULLY =                                         new EditorEntityImages.ExistantAs1InOnlySm3dw('Bully', 'Donketsu_00',)

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3('Bill Blaster', 'KillerHoudai', 0,)
    public static readonly BULLET_BILL =                                   new EditorEntityImages.Null()
    public static readonly BULL_EYE_BLASTER =                              new EditorEntityImages.ExistantAs1InAll('Bull’s-Eye Blaster', 'KillerHoudai_01',)
    public static readonly BULL_EYE_BILL =                                 new EditorEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new EditorEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3('Banzai Bill', 'MagnumKiller', 0,)
    public static readonly BULL_EYE_BANZAI =                               new EditorEntityImages.ExistantAs1InNotSm3dw('Bull’s-Eye Banzai', 'MagnumKiller_01',)
    public static readonly CAT_BANZAI_BILL =                               new EditorEntityImages.ExistantAs1InOnlySm3dw('Cat Banzai Bill', 'MagnumKiller_01',)

    public static readonly CANNON =                                        new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Cannon', 'Houdai', 0,)
    public static readonly CANNONBALL =                                    new EditorEntityImages.Null()
    public static readonly RED_CANNON =                                    new EditorEntityImages.ExistantAs1InNotSm3dw('Red Cannon', 'Houdai_01',)
    public static readonly RED_CANNONBALL =                                new EditorEntityImages.Null()

    public static readonly BURNER =                                        new EditorEntityImages.ExistantAs2InNotSm3dw('Burner', 'Burner_00', 'Burner_01',)

    public static readonly FIRE_BAR =                                      new EditorEntityImages.ExistantAs1InNotSm3dw('Fire Bar', 'FireBar_00',)

    public static readonly SKEWER =                                        new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Skewer', 'TogeKonbo', 0,)

    public static readonly KOOPA_CLOWN_CAR =                               new EditorEntityImages.ExistantAs1InNotNsmbuAndSm3dw('Koopa Clown Car', 'KoopaClown_00',)
    public static readonly JUNIOR_CLOWN_CAR =                              new EditorEntityImages.ExistantAs1InOnlyNsmbu('Junior Clown Car', 'KoopaClown_00',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new EditorEntityImages.ExistantAs1InNotNsmbuAndSm3dw('Fire Koopa Clown Car', 'KoopaClown_01',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new EditorEntityImages.ExistantAs1InOnlyNsmbu('Fire Junior Clown Car', 'KoopaClown_01',)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new EditorEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new EditorEntityImages.ExistantAs1InOnlySm3dw('Koopa Troopa Car', 'KoopaCar_00',)
    public static readonly CAR =                                           new EditorEntityImages.Null()

    public static readonly GRINDER =                                       new EditorEntityImages.ExistantAs1InNotSm3dw('Grinder', 'Saw_00',)

    public static readonly ANGRY_SUN =                                     new EditorEntityImages.ExistantAs1InNotSm3dw('Angry Sun', 'SunMoon_00',)
    public static readonly MOON =                                          new EditorEntityImages.ExistantAs1InNotSm3dw('Moon', 'SunMoon_01',)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new EditorEntityImages.ExistantAs1InNotSm3dw('Bowser', 'Koopa_00',)
    public static readonly MEOWSER =                                       new EditorEntityImages.ExistantAs1InOnlySm3dw('Meowser', 'Koopa_00',)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new EditorEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new EditorEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_BOWSER =                     new EditorEntityImages.Null()

    public static readonly BOWSER_JR =                                     new EditorEntityImages.ExistantAs1InNotSm3dw('Bowser Jr.', 'KoopaJr_00',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new EditorEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new EditorEntityImages.ExistantAs1InAll('Boom Boom', 'Bunbun_00',)
    public static readonly POM_POM =                                       new EditorEntityImages.ExistantAs1InOnlySm3dw('Pom Pom', 'Bunbun_01',)
    public static readonly POM_POM_CLONE =                                 new EditorEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new EditorEntityImages.Null()

    public static readonly LARRY =                                         new EditorEntityImages.ExistantAs1InNotSm3dw('Larry', 'Larry_00',)
    public static readonly LARRY_WAND =                                    new EditorEntityImages.Null()
    public static readonly LARRY_PROJECTILE =                              new EditorEntityImages.Null()

    public static readonly IGGY =                                          new EditorEntityImages.ExistantAs1InNotSm3dw('Iggy', 'Iggy_00',)
    public static readonly IGGY_WAND =                                     new EditorEntityImages.Null()
    public static readonly IGGY_PROJECTILE =                               new EditorEntityImages.Null()

    public static readonly WENDY =                                         new EditorEntityImages.ExistantAs1InNotSm3dw('Wendy', 'Wendy_00',)
    public static readonly WENDY_WAND =                                    new EditorEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new EditorEntityImages.Null()
    public static readonly WENDY_PROJECTILE =                              new EditorEntityImages.Null()

    public static readonly LEMMY =                                         new EditorEntityImages.ExistantAs1InNotSm3dw('Lemmy', 'Lemmy_00',)
    public static readonly LEMMY_WAND =                                    new EditorEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new EditorEntityImages.Null()
    public static readonly LEMMY_PROJECTILE =                              new EditorEntityImages.Null()

    public static readonly ROY =                                           new EditorEntityImages.ExistantAs1InNotSm3dw('Roy', 'Roy_00',)
    public static readonly ROY_WAND =                                      new EditorEntityImages.Null()
    public static readonly ROY_PROJECTILE =                                new EditorEntityImages.Null()

    public static readonly MORTON =                                        new EditorEntityImages.ExistantAs1InNotSm3dw('Morton', 'Morton_00',)
    public static readonly MORTON_WAND =                                   new EditorEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE =                      new EditorEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE =                      new EditorEntityImages.Null()

    public static readonly LUDWIG =                                        new EditorEntityImages.ExistantAs1InNotSm3dw('Ludwig', 'Ludwig_00',)
    public static readonly LUDWIG_WAND =                                   new EditorEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE =                             new EditorEntityImages.Null()

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new EditorEntityImages.ExistantAs1InNotSm3dw('Bumper', 'Marumaru_00',)

    public static readonly SWINGING_CLAW =                                 new EditorEntityImages.ExistantAs1InNotSm3dw('Swinging Claw', 'BurankoCrane_00',)

    public static readonly TWISTER =                                       new EditorEntityImages.ExistantAs1InAll('Twister', 'Tornado_00',)

    public static readonly ONE_WAY_WALL =                                  new EditorEntityImages.ExistantAs1InNotSm3dw('One-Way Wall', 'Hanatari_00',)

    public static readonly TRACK =                                         new EditorEntityImages.ExistantAsTrack()
    public static readonly TRACK_BLOCK =                                   new EditorEntityImages.ExistantAs2InOnlySm3dw('Track Block', 'OrbitBlock_00', 'OrbitBlock_01',)

    public static readonly VINE =                                          new EditorEntityImages.ExistantAs1InNotSm3dw('Vine', 'TsutaBlock_00',)
    public static readonly TREE =                                          new EditorEntityImages.ExistantAsTree()

    public static readonly STARTING_ARROW =                                new EditorEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new EditorEntityImages.ExistantAs1InAll('Arrow Sign', 'Yajirushi_00',)

    public static readonly CHECKPOINT_FLAG =                               new EditorEntityImages.ExistantAs1InAll('Checkpoint Flag', 'MiddleFlag_00',)
    public static readonly GOAL_POLE =                                     new EditorEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new EditorEntityImages.Null()
    public static readonly GIANT_GATE =                                    new EditorEntityImages.Null()

    public static readonly CASTLE =                                        new EditorEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new EditorEntityImages.Null()
    public static readonly AXE =                                           new EditorEntityImages.Null()

    public static readonly DASH_BLOCK =                                    new EditorEntityImages.ExistantAs1InOnlySm3dw('Dash Block', 'DashBlock_00',)

    public static readonly SNAKE_BLOCK =                                   new EditorEntityImages.ExistantAs1InAll('Snake Block', 'SnakeBlock_00',)
    public static readonly FAST_SNAKE_BLOCK =                              new EditorEntityImages.ExistantAs1InAll('Fast Snake Block', 'SnakeBlock_01',)

    public static readonly CONVEYOR_BELT =                                 new EditorEntityImages.ExistantAs2InAll('Conveyor Belt', 'BeltConveyor_00', 'SlopeConveyor_00',)
    public static readonly FAST_CONVEYOR_BELT =                            new EditorEntityImages.ExistantAs2InAll('Fast Conveyor Belt', 'BeltConveyor_01', 'SlopeConveyor_01',)

    public static readonly MUSHROOM_TRAMPOLINE =                           new EditorEntityImages.ExistantAs2InOnlySm3dw('Mushroom Trampoline', 'Trampoline_00', 'Trampoline_01',)
    public static readonly ON_OFF_TRAMPOLINE =                             new EditorEntityImages.ExistantAs2InOnlySm3dw('ON/OFF Trampoline', 'OnOffTrampoline_00', 'OnOffTrampoline_01',)

    public static readonly LIFT =                                          new EditorEntityImages.ExistantAs1InNotSm3dw('Lift', 'Lift_00',)
    public static readonly FLIMSY_LIFT =                                   new EditorEntityImages.ExistantAs1InNotSm3dw('Flimsy Lift', 'Lift_01',)
    public static readonly CLOUD_LIFT =                                    new EditorEntityImages.ExistantAs1InOnlySm3dw('Cloud Lift', 'Lift_00',)

    public static readonly SEESAW =                                        new EditorEntityImages.ExistantAs1InNotSm3dw('Seesaw', 'Seesaw_00',)

    public static readonly LAVA_LIFT =                                     new EditorEntityImages.ExistantAs1InNotSm3dw('Lava Lift', 'YouganLift_00',)
    public static readonly FAST_LAVA_LIFT =                                new EditorEntityImages.ExistantAs1InNotSm3dw('Fast Lava Lift', 'YouganLift_01',)

    public static readonly CRATE =                                         new EditorEntityImages.ExistantAs1InOnlySm3dw('Crate', 'WoodBox_00',)

    public static readonly KEY =                                           new EditorEntityImages.ExistantAs1InAll('Key', 'Key_00',)
    public static readonly CURSED_KEY =                                    new EditorEntityImages.ExistantAs1InOnlySmb('Cursed Key', 'Key_01',)
    public static readonly PHANTO =                                        new EditorEntityImages.Null()

    public static readonly TRAMPOLINE =                                    new EditorEntityImages.ExistantAs1InAll('Trampoline', 'JumpStep_00',)
    public static readonly SIDEWAYS_TRAMPOLINE =                           new EditorEntityImages.ExistantAs1InAll('Sideways Trampoline', 'JumpStep_01',)
    public static readonly HOP_CHOPS =                                     new EditorEntityImages.ExistantAs1InOnlySm3dw('Hop-Chops', 'Hopper_00',)

    public static readonly POW_BLOCK =                                     new EditorEntityImages.ExistantAs1InAll('POW Block', 'PowBlock_00',)
    public static readonly RED_POW_BLOCK =                                 new EditorEntityImages.ExistantAs1InOnlySm3dw('Red POW Block', 'PowBlock_01',)

    public static readonly P_SWITCH =                                      new EditorEntityImages.ExistantAs1InAll('P Switch', 'PSwitch_00',)

    public static readonly STONE =                                         new EditorEntityImages.Null()

    public static readonly WARP_DOOR =                                     new EditorEntityImages.ExistantAs1InAll('Warp Door', 'Door_00',)
    public static readonly P_WARP_DOOR =                                   new EditorEntityImages.ExistantAs1InAll('P Warp Door', 'Door_01',)
    public static readonly KEY_DOOR =                                      new EditorEntityImages.ExistantAs1InAll('Key Door', 'Door_02',)

    public static readonly WARP_BOX =                                      new EditorEntityImages.ExistantAs1InOnlySm3dw('Warp Box', 'WarpBox_00',)
    public static readonly WARP_BOX_WITH_KEY =                             new EditorEntityImages.ExistantAs1InOnlySm3dw('Warp Box (With Key)', 'WarpBox_01',)

    public static readonly WING =                                          new EditorEntityImages.ExistantAs1InAll('Wing', 'Wing_00',)
    public static readonly PARACHUTE =                                     new EditorEntityImages.ExistantAs1InAll('Parachute', 'parachute_00',)

    public static readonly TOAD =                                          new EditorEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new EditorEntityImages.Null()

    public static readonly BUBBLE =                                        new EditorEntityImages.Null()

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
