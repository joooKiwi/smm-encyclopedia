import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {Array, EmptyString}                 from '@joookiwi/type'
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

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW
import SM3DW = GameStyles.SM3DW

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

    /** An abstract subclass of an {@link EditorEntityImages} to hold a specific {@link PossibleEnglishName} */
    private static readonly Existant = (() => {
        abstract class ExistantEditorEntityImages<const NAME extends PossibleEnglishName,
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

            protected abstract _createImageFiles(): Array<readonly [Times, GameStyles, Themes, IMAGE_FILE,]>

        }

        return ExistantEditorEntityImages
    })()

    //region -------------------- Sub class (one in all game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} for each {@link GameStyles} */
    private static readonly ExistantAsOneInAll = class ExistantAsOneInAllEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,   theme, editorImage(this, fileName, SMB,),],
                [time, SMB3,  theme, editorImage(this, fileName, SMB3,),],
                [time, SMW,   theme, editorImage(this, fileName, SMW,),],
                [time, NSMBU, theme, editorImage(this, fileName, NSMBU,),],
                [time, SM3DW, theme, editorImage(this, fileName, SM3DW,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} in the {@link Themes.SNOW snow theme}
     */
    private static readonly ExistantAsOneInOnlySnow = class ExistantAsOneInAllEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.SNOW
            return [
                [time, SMB,   theme, editorImage(this, fileName, SMB,),],
                [time, SMB3,  theme, editorImage(this, fileName, SMB3,),],
                [time, SMW,   theme, editorImage(this, fileName, SMW,),],
                [time, NSMBU, theme, editorImage(this, fileName, NSMBU,),],
                [time, SM3DW, theme, editorImage(this, fileName, SM3DW,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one in all game style) --------------------
    //region -------------------- Sub class (one in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in 1 {@link GameStyles} */
    private static readonly ExistantAsOneIn1GameStyle = class ExistantAsOneIn1GameStyleEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const GAME_STYLE extends GameStyles, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GAME_STYLE, FILE_NAME, NAME>> {

        readonly #fileName
        readonly #gameStyle
        readonly #theme

        public constructor(englishName: NAME, fileName: FILE_NAME, gameStyle: GAME_STYLE, theme: Themes,) {
            super(englishName,)
            this.#fileName = fileName
            this.#gameStyle = gameStyle
            this.#theme = theme
        }

        public override _createImageFiles() {
            const gameStyle = this.#gameStyle
            return [[Times.DAY, gameStyle, this.#theme, editorImage(this, this.#fileName, gameStyle,),],] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link SMB} */
    private static readonly ExistantAsOneInOnlySmb = class ExistantAsOneInOnlySmbEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            return [[Times.DAY, SMB, Themes.GROUND, editorImage(this, this.#fileName, SMB,),],] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link SMW} */
    private static readonly ExistantAsOneInOnlySmw = class ExistantAsOneInOnlySmwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMW, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            return [[Times.DAY, SMW, Themes.GROUND, editorImage(this, this.#fileName, SMW,),],] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link NSMBU} */
    private static readonly ExistantAsOneInOnlyNsmbu = class ExistantAsOneInOnlyNsmbuEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_NSMBU, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            return [[Times.DAY, NSMBU, Themes.GROUND, editorImage(this, this.#fileName, NSMBU,),],] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link SM3DW} */
    private static readonly ExistantAsOneInOnlySm3dw = class ExistantAsOneInOnlySm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SM3DW, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            return [[Times.DAY, SM3DW, Themes.GROUND, editorImage(this, this.#fileName, SM3DW,),],] as const
        }

    }

    //endregion -------------------- Sub class (one in 1 specific game style) --------------------
    //region -------------------- Sub class (one in 2 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMB} and {@link SMB3}
     */
    private static readonly ExistantAsOneInOnlySmbAndSmb3 = class ExistantAsOneInOnlySmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,  theme, editorImage(this, fileName, SMB,),],
                [time, SMB3, theme, editorImage(this, fileName, SMB3,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantAsOneInOnlySmwAndNsmbu = class ExistantAsOneInOnlySmwAndNsmbuEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMW,   theme, editorImage(this, fileName, SMW,),],
                [time, NSMBU, theme, editorImage(this, fileName, NSMBU,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one in 2 specific game style) --------------------
    //region -------------------- Sub class (one in 3 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link NSMBU}
     */
    private static readonly ExistantAsOneInNotSmwAndSm3dw = class ExistantAsOneInNotSmwAndSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_NSMBU, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,   theme, editorImage(this, fileName, SMB,),],
                [time, SMB3,  theme, editorImage(this, fileName, SMB3,),],
                [time, NSMBU, theme, editorImage(this, fileName, NSMBU,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsOneInNotNsmbuAndSm3dw = class ExistantAsOneInNotNsmbuAndSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB, theme, editorImage(this, fileName, SMB,),],
                [time, SMB3, theme, editorImage(this, fileName, SMB3,),],
                [time, SMW, theme, editorImage(this, fileName, SMW,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one in 3 specific game style) --------------------
    //region -------------------- Sub class (one in 4 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link SMW}
     */
    private static readonly ExistantAsOneInNotSmw = class ExistantAsOneInNotSmwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_NSMBU | GameStyles_SM3DW, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,   theme, editorImage(this, fileName, SMB,),],
                [time, SMB3,  theme, editorImage(this, fileName, SMB3,),],
                [time, NSMBU, theme, editorImage(this, fileName, NSMBU,),],
                [time, SM3DW, theme, editorImage(this, fileName, SM3DW,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link SM3DW}
     */
    private static readonly ExistantAsOneInNotSm3dw = class ExistantAsOneInNotSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME, EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, FILE_NAME, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,   theme, editorImage(this, fileName, SMB,),],
                [time, SMB3,  theme, editorImage(this, fileName, SMB3,),],
                [time, SMW,   theme, editorImage(this, fileName, SMW,),],
                [time, NSMBU, theme, editorImage(this, fileName, NSMBU,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one in 4 specific game style) --------------------
    //region -------------------- Sub class (one + one night snow) --------------------

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMB}, {@link SMW},
     * {@link NSMBU} and {@link SM3DW}) only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmb3 = class ExistantAsOnePlusOneNightSnowInSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMB | GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, FILE_NAME_1, NAME>> {

        readonly #fileName
        readonly #nightSnowFileName

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return [
                [day,   SMB,   ground, editorImage(this, fileName, SMB,),],
                [day,   SMB3,  ground, editorImage(this, fileName, SMB3,),],
                [night, SMB3,  snow,   editorImage(this, this.#nightSnowFileName, SMB3,),],
                [day,   SMW,   ground, editorImage(this, fileName, SMW,),],
                [day,   NSMBU, ground, editorImage(this, fileName, NSMBU,),],
                [day,   SM3DW, ground, editorImage(this, fileName, SM3DW,),],
            ] as const
        }

    }

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMB}, {@link SMW} and {@link NSMBU})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmb3ButNotSm3dw = class ExistantAsOnePlusOneNightSnowInSmb3ButNotSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMB | GameStyles_SMW | GameStyles_NSMBU, FILE_NAME_1, NAME>> {

        readonly #fileName
        readonly #nightSnowFileName

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const day = Times.DAY
            const ground = Themes.GROUND
            return [
                [day,         SMB,   ground,      editorImage(this, fileName, SMB,),],
                [day,         SMB3,  ground,      editorImage(this, fileName, SMB3,),],
                [Times.NIGHT, SMB3,  Themes.SNOW, editorImage(this, this.#nightSnowFileName, SMB3,),],
                [day,         SMW,   ground,      editorImage(this, fileName, SMW,),],
                [day,         NSMBU, ground,      editorImage(this, fileName, NSMBU,),],
            ] as const
        }

    }


    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB} and {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMW}, {@link NSMBU} and {@link SM3DW})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmbAndSmb3 = class ExistantAsOnePlusOneNightSnowInSmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, FILE_NAME_1, NAME>> {

        readonly #fileName
        readonly #nightSnowFileName

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const nightSnowFileName = this.#nightSnowFileName
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return [
                [day,   SMB,   ground, editorImage(this, fileName, SMB,),],
                [night, SMB,   snow,   editorImage(this, nightSnowFileName, SMB,),],
                [day,   SMB3,  ground, editorImage(this, fileName, SMB3,),],
                [night, SMB3,  snow,   editorImage(this, nightSnowFileName, SMB3,),],
                [day,   SMW,   ground, editorImage(this, fileName, SMW,),],
                [day,   NSMBU, ground, editorImage(this, fileName, NSMBU,),],
                [day,   SM3DW, ground, editorImage(this, fileName, SM3DW,),],
            ] as const
        }

    }

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link SMB} and {@link SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link SMW} and {@link NSMBU})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmbAndSmb3ButNotSm3dw = class ExistantAsOnePlusOneNightSnowInSmbAndSmb3ExcludingSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, | FILE_NAME_1 | FILE_NAME_2, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU, FILE_NAME_1, NAME>> {

        readonly #fileName
        readonly #nightSnowFileName

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const nightSnowFileName = this.#nightSnowFileName
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return [
                [day,   SMB,   ground, editorImage(this, fileName, SMB,),],
                [night, SMB,   snow,   editorImage(this, nightSnowFileName, SMB,),],
                [day,   SMB3,  ground, editorImage(this, fileName, SMB3,),],
                [night, SMB3,  snow,   editorImage(this, nightSnowFileName, SMB3,),],
                [day,   SMW,   ground, editorImage(this, fileName, SMW,),],
                [day,   NSMBU, ground, editorImage(this, fileName, NSMBU,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one + one night snow) --------------------
    //region -------------------- Sub class (one as a blue variant) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold a blue variation of {@link EditorImageFile}
     * on the {@link Themes} in {@link SMB} and {@link SMB3}.
     *
     * {@link SMW}, {@link NSMBU} and {@link SM3DW} only have 1 {@link EditorImageFile}.
     */
    private static readonly ExistantAsBlueVariantInSmbAndSmb3 = class ExistantAsBlueVariantInSmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const NUMBER extends | 0 | 1, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water_night' | 'desert_night' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<GameStyles_SMB3, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water' | 'desert' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, `${FILE_NAME}_0${NUMBER}`, NAME>> {

        readonly #fileName
        readonly #number

        public constructor(englishName: NAME, fileName: FILE_NAME, number: NUMBER,) {
            super(englishName,)
            this.#fileName = fileName
            this.#number = number
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const number = this.#number
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const desert = Themes.DESERT
            const snow = Themes.SNOW
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, `${fileName}_0${number}`, SMB,)],
                [night, SMB,   ground,      editorImage(this, `${fileName}_plain_night_0${number}`, SMB,)],
                [day,   SMB,   underground, editorImage(this, `${fileName}_underground_0${number}`, SMB,)],
                [night, SMB,   underwater,  editorImage(this, `${fileName}_water_night_0${number}`, SMB,)],
                [night, SMB,   desert,      editorImage(this, `${fileName}_desert_night_0${number}`, SMB,)],
                [night, SMB,   snow,        editorImage(this, `${fileName}_snow_night_0${number}`, SMB,)],
                [night, SMB,   sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, SMB,)],
                [night, SMB,   forest,      editorImage(this, `${fileName}_woods_night_0${number}`, SMB,)],
                [day,   SMB,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB,)],
                [night, SMB,   airship,     editorImage(this, `${fileName}_airship_night_0${number}`, SMB,)],
                [day,   SMB,   castle,      editorImage(this, `${fileName}_castle_0${number}`, SMB,)],

                [day,   SMB3,  ground,      editorImage(this, `${fileName}_0${number}`, SMB3,)],
                [night, SMB3,  ground,      editorImage(this, `${fileName}_plain_night_0${number}`, SMB3,)],
                [day,   SMB3,  underground, editorImage(this, `${fileName}_underground_0${number}`, SMB3,)],
                [day,   SMB3,  underwater,  editorImage(this, `${fileName}_water_0${number}`, SMB3,)],
                [day,   SMB3,  desert,      editorImage(this, `${fileName}_desert_0${number}`, SMB3,)],
                [night, SMB3,  snow,        editorImage(this, `${fileName}_snow_night_0${number}`, SMB3,)],
                [night, SMB3,  sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, SMB3,)],
                [night, SMB3,  forest,      editorImage(this, `${fileName}_woods_night_0${number}`, SMB3,)],
                [day,   SMB3,  ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB3,)],
                [night, SMB3,  airship,     editorImage(this, `${fileName}_airship_night_0${number}`, SMB3,)],
                [day,   SMB3,  castle,      editorImage(this, `${fileName}_castle_0${number}`, SMB3,)],

                [day,   SMW,   ground,      editorImage(this, `${fileName}_0${number}`, SMW,)],

                [day,   NSMBU, ground,      editorImage(this, `${fileName}_0${number}`, NSMBU,)],

                [day,   SM3DW, ground,      editorImage(this, `${fileName}_0${number}`, SM3DW,)],
            ] as const
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold a blue variation of {@link EditorImageFile}
     * on the {@link Themes} in {@link SMB} and {@link SMB3}.
     *
     * {@link SMW} and {@link NSMBU} only have 1 {@link EditorImageFile}.
     */
    private static readonly ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw = class ExistantAsBlueVariantInSmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const NUMBER extends | 0 | 1, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water_night' | 'desert_night' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<GameStyles_SMB3, `${FILE_NAME}${| EmptyString | `_${| 'plain_night' | 'underground' | 'water' | 'desert' | 'snow_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_0${NUMBER}`, NAME>
                                                  | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU, `${FILE_NAME}_0${NUMBER}`, NAME>> {

        readonly #fileName
        readonly #number

        public constructor(englishName: NAME, fileName: FILE_NAME, number: NUMBER,) {
            super(englishName,)
            this.#fileName = fileName
            this.#number = number
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const number = this.#number
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const desert = Themes.DESERT
            const snow = Themes.SNOW
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, `${fileName}_0${number}`, SMB,)],
                [night, SMB,   ground,      editorImage(this, `${fileName}_plain_night_0${number}`, SMB,)],
                [day,   SMB,   underground, editorImage(this, `${fileName}_underground_0${number}`, SMB,)],
                [night, SMB,   underwater,  editorImage(this, `${fileName}_water_night_0${number}`, SMB,)],
                [night, SMB,   desert,      editorImage(this, `${fileName}_desert_night_0${number}`, SMB,)],
                [night, SMB,   snow,        editorImage(this, `${fileName}_snow_night_0${number}`, SMB,)],
                [night, SMB,   sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, SMB,)],
                [night, SMB,   forest,      editorImage(this, `${fileName}_woods_night_0${number}`, SMB,)],
                [day,   SMB,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB,)],
                [night, SMB,   airship,     editorImage(this, `${fileName}_airship_night_0${number}`, SMB,)],
                [day,   SMB,   castle,      editorImage(this, `${fileName}_castle_0${number}`, SMB,)],

                [day,   SMB3,  ground,      editorImage(this, `${fileName}_0${number}`, SMB3,)],
                [night, SMB3,  ground,      editorImage(this, `${fileName}_plain_night_0${number}`, SMB3,)],
                [day,   SMB3,  underground, editorImage(this, `${fileName}_underground_0${number}`, SMB3,)],
                [day,   SMB3,  underwater,  editorImage(this, `${fileName}_water_0${number}`, SMB3,)],
                [day,   SMB3,  desert,      editorImage(this, `${fileName}_desert_0${number}`, SMB3,)],
                [night, SMB3,  snow,        editorImage(this, `${fileName}_snow_night_0${number}`, SMB3,)],
                [night, SMB3,  sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, SMB3,)],
                [night, SMB3,  forest,      editorImage(this, `${fileName}_woods_night_0${number}`, SMB3,)],
                [day,   SMB3,  ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, SMB3,)],
                [night, SMB3,  airship,     editorImage(this, `${fileName}_airship_night_0${number}`, SMB3,)],
                [day,   SMB3,  castle,      editorImage(this, `${fileName}_castle_0${number}`, SMB3,)],

                [day,   SMW,   ground,      editorImage(this, `${fileName}_0${number}`, SMW,)],

                [day,   NSMBU, ground,      editorImage(this, `${fileName}_0${number}`, NSMBU,)],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one as a blue variant) --------------------
    //region -------------------- Sub class (two in all game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} for each {@link GameStyles} */
    private static readonly ExistantAsTwoInAll = class ExistantAsTwoInAllEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,   theme, editorImage(this, fileName1, SMB,),],
                [time, SMB,   theme, editorImage(this, fileName2, SMB,),],
                [time, SMB3,  theme, editorImage(this, fileName1, SMB3,),],
                [time, SMB3,  theme, editorImage(this, fileName2, SMB3,),],
                [time, SMW,   theme, editorImage(this, fileName1, SMW,),],
                [time, SMW,   theme, editorImage(this, fileName2, SMW,),],
                [time, NSMBU, theme, editorImage(this, fileName1, NSMBU,),],
                [time, NSMBU, theme, editorImage(this, fileName2, NSMBU,),],
                [time, SM3DW, theme, editorImage(this, fileName1, SM3DW,),],
                [time, SM3DW, theme, editorImage(this, fileName2, SM3DW,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in all game style) --------------------
    //region -------------------- Sub class (two in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SMB} */
    private static readonly ExistantAsTwoInOnlySmb = class ExistantAsTwoInOnlySmbEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB, theme, editorImage(this, this.#fileName1, SMB,),],
                [time, SMB, theme, editorImage(this, this.#fileName2, SMB,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SMB3} */
    private static readonly ExistantAsTwoInOnlySmb3 = class ExistantAsTwoInOnlySmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB3, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB3, theme, editorImage(this, this.#fileName1, SMB3,),],
                [time, SMB3, theme, editorImage(this, this.#fileName2, SMB3,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SMW} */
    private static readonly ExistantAsTwoInOnlySmw = class ExistantAsTwoInOnlySmwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMW, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMW, theme, editorImage(this, this.#fileName1, SMW,),],
                [time, SMW, theme, editorImage(this, this.#fileName2, SMW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link NSMBU} */
    private static readonly ExistantAsTwoInOnlyNsmbu = class ExistantAsTwoInOnlyNsmbuEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_NSMBU, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, NSMBU, theme, editorImage(this, this.#fileName1, NSMBU,),],
                [time, NSMBU, theme, editorImage(this, this.#fileName2, NSMBU,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link SM3DW} */
    private static readonly ExistantAsTwoInOnlySm3dw = class ExistantAsTwoInOnlySm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SM3DW, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SM3DW, theme, editorImage(this, this.#fileName1, SM3DW,),],
                [time, SM3DW, theme, editorImage(this, this.#fileName2, SM3DW,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 1 specific game style) --------------------
    //region -------------------- Sub class (two in 4 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link SM3DW}
     */
    private static readonly ExistantAsTwoInNotSm3dw = class ExistantAsTwoInNotSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,   theme, editorImage(this, fileName1, SMB,),],
                [time, SMB,   theme, editorImage(this, fileName2, SMB,),],
                [time, SMB3,  theme, editorImage(this, fileName1, SMB3,),],
                [time, SMB3,  theme, editorImage(this, fileName2, SMB3,),],
                [time, SMW,   theme, editorImage(this, fileName1, SMW,),],
                [time, SMW,   theme, editorImage(this, fileName2, SMW,),],
                [time, NSMBU, theme, editorImage(this, fileName1, NSMBU,),],
                [time, NSMBU, theme, editorImage(this, fileName2, NSMBU,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 4 specific game style) --------------------
    //region -------------------- Sub class (three in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 3 {@link EditorImageFile} in only {@link SM3DW} */
    private static readonly ExistantAsThreeInOnlySm3dw = class ExistantAsThreeInOnlySm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, EditorImageFile<GameStyles_SM3DW, FILE_NAME, NAME>> {

        readonly #fileName1
        readonly #fileName2
        readonly #fileName3

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, fileName3: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#fileName3 = fileName3
        }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SM3DW, theme, editorImage(this, this.#fileName1, SM3DW,),],
                [time, SM3DW, theme, editorImage(this, this.#fileName2, SM3DW,),],
                [time, SM3DW, theme, editorImage(this, this.#fileName3, SM3DW,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (three in 1 specific game style) --------------------
    //region -------------------- Sub class (predefined) --------------------

    /** A subclass of an {@link EditorEntityImages} for only the {@link GROUND}, {@link STEEP_SLOPE} and {@link GENTLE_SLOPE} */
    private static readonly ExistantAsGroundOrSlope = class ExistantAsGroundOrSlope<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME, | EditorImageFile<GameStyles_SMB, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'airship_night' | 'castle'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_SMB3, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'airship_night' | 'castle' | 'castle_night'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_SMW, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'water_night' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_NSMBU, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'airship_night' | 'castle'}`}_00`, NAME>
                                                  | EditorImageFile<GameStyles_SM3DW, `${FILE_NAME}${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, NAME>> {

        readonly #fileName

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const desert = Themes.DESERT
            const snow = Themes.SNOW
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, `${fileName}_00`, SMB,),],
                [day,   SMB,   underground, editorImage(this, `${fileName}_underground_00`, SMB,),],
                [day,   SMB,   underwater,  editorImage(this, `${fileName}_water_00`, SMB,),],
                [day,   SMB,   desert,      editorImage(this, `${fileName}_desert_00`, SMB,),],
                [day,   SMB,   snow,        editorImage(this, `${fileName}_snow_00`, SMB,),],
                [day,   SMB,   sky,         editorImage(this, `${fileName}_athletic_00`, SMB,),],
                [day,   SMB,   forest,      editorImage(this, `${fileName}_woods_00`, SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, SMB,),],
                [day,   SMB,   airship,     editorImage(this, `${fileName}_airship_00`, SMB,),],
                [night, SMB,   airship,     editorImage(this, `${fileName}_airship_night_00`, SMB,),],
                [day,   SMB,   castle,      editorImage(this, `${fileName}_castle_00`, SMB,),],

                [day,   SMB3,  ground,      editorImage(this, `${fileName}_00`, SMB3,),],
                [day,   SMB3,  underground, editorImage(this, `${fileName}_underground_00`, SMB3,),],
                [day,   SMB3,  underwater,  editorImage(this, `${fileName}_water_00`, SMB3,),],
                [day,   SMB3,  desert,      editorImage(this, `${fileName}_desert_00`, SMB3,),],
                [day,   SMB3,  snow,        editorImage(this, `${fileName}_snow_00`, SMB3,),],
                [night, SMB3,  snow,        editorImage(this, `${fileName}_snow_night_00`, SMB3,),],
                [day,   SMB3,  sky,         editorImage(this, `${fileName}_athletic_00`, SMB3,),],
                [day,   SMB3,  forest,      editorImage(this, `${fileName}_woods_00`, SMB3,),],
                [day,   SMB3,  ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, SMB3,),],
                [day,   SMB3,  airship,     editorImage(this, `${fileName}_airship_00`, SMB3,),],
                [night, SMB3,  airship,     editorImage(this, `${fileName}_airship_night_00`, SMB3,),],
                [day,   SMB3,  castle,      editorImage(this, `${fileName}_castle_00`, SMB3,),],
                [night, SMB3,  castle,      editorImage(this, `${fileName}_castle_night_00`, SMB3,),],

                [day,   SMW,   ground,      editorImage(this, `${fileName}_00`, SMW,),],
                [day,   SMW,   underground, editorImage(this, `${fileName}_underground_00`, SMW,),],
                [day,   SMW,   underwater,  editorImage(this, `${fileName}_water_00`, SMW,),],
                [night, SMW,   underwater,  editorImage(this, `${fileName}_water_night_00`, SMW,),],
                [day,   SMW,   desert,      editorImage(this, `${fileName}_desert_00`, SMW,),],
                [day,   SMW,   snow,        editorImage(this, `${fileName}_snow_00`, SMW,),],
                [night, SMW,   snow,        editorImage(this, `${fileName}_snow_night_00`, SMW,),],
                [day,   SMW,   sky,         editorImage(this, `${fileName}_athletic_00`, SMW,),],
                [day,   SMW,   forest,      editorImage(this, `${fileName}_woods_00`, SMW,),],
                [day,   SMW,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, SMW,),],
                [day,   SMW,   airship,     editorImage(this, `${fileName}_airship_00`, SMW,),],
                [day,   SMW,   castle,      editorImage(this, `${fileName}_castle_00`, SMW,),],

                [day,   NSMBU, ground,      editorImage(this, `${fileName}_00`, NSMBU,),],
                [day,   NSMBU, underground, editorImage(this, `${fileName}_underground_00`, NSMBU,),],
                [day,   NSMBU, underwater,  editorImage(this, `${fileName}_water_00`, NSMBU,),],
                [day,   NSMBU, desert,      editorImage(this, `${fileName}_desert_00`, NSMBU,),],
                [day,   NSMBU, snow,        editorImage(this, `${fileName}_snow_00`, NSMBU,),],
                [night, NSMBU, snow,        editorImage(this, `${fileName}_snow_night_00`, NSMBU,),],
                [day,   NSMBU, sky,         editorImage(this, `${fileName}_athletic_00`, NSMBU,),],
                [day,   NSMBU, forest,      editorImage(this, `${fileName}_woods_00`, NSMBU,),],
                [day,   NSMBU, ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, NSMBU,),],
                [day,   NSMBU, airship,     editorImage(this, `${fileName}_airship_00`, NSMBU,),],
                [night, NSMBU, airship,     editorImage(this, `${fileName}_airship_night_00`, NSMBU,),],
                [day,   NSMBU, castle,      editorImage(this, `${fileName}_castle_00`, NSMBU,),],

                [day,   SM3DW, ground,      editorImage(this, `${fileName}_00`, SM3DW,),],
                [day,   SM3DW, underground, editorImage(this, `${fileName}_underground_00`, SM3DW,),],
                [day,   SM3DW, underwater,  editorImage(this, `${fileName}_water_00`, SM3DW,),],
                [day,   SM3DW, desert,      editorImage(this, `${fileName}_desert_00`, SM3DW,),],
                [day,   SM3DW, snow,        editorImage(this, `${fileName}_snow_00`, SM3DW,),],
                [day,   SM3DW, sky,         editorImage(this, `${fileName}_athletic_00`, SM3DW,),],
                [day,   SM3DW, forest,      editorImage(this, `${fileName}_woods_00`, SM3DW,),],
                [day,   SM3DW, ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, SM3DW,),],
                [day,   SM3DW, airship,     editorImage(this, `${fileName}_airship_00`, SM3DW,),],
                [day,   SM3DW, castle,      editorImage(this, `${fileName}_castle_00`, SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link PIPE} */
    private static readonly ExistantAsPipe = class ExistantAsPipe
        extends EditorEntityImages.Existant<'Pipe', | EditorImageFile<| GameStyles_SMB | GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, `Dokan_0${| 0 | 1 | 2 | 3}`, 'Pipe'>
                                                    | EditorImageFile<GameStyles_SMB3, `Dokan${| EmptyString | '_snow_night'}_0${| 0 | 1 | 2 | 3}`, 'Pipe'>> {

        public constructor() { super('Pipe',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return [
                [day,   SMB,   ground, editorImage(this, 'Dokan_00', SMB,),],
                [day,   SMB,   ground, editorImage(this, 'Dokan_01', SMB,),],
                [day,   SMB,   ground, editorImage(this, 'Dokan_02', SMB,),],
                [day,   SMB,   ground, editorImage(this, 'Dokan_03', SMB,),],

                [day,   SMB3,  ground, editorImage(this, 'Dokan_00', SMB3,),],
                [day,   SMB3,  ground, editorImage(this, 'Dokan_01', SMB3,),],
                [day,   SMB3,  ground, editorImage(this, 'Dokan_02', SMB3,),],
                [day,   SMB3,  ground, editorImage(this, 'Dokan_03', SMB3,),],
                [night, SMB3,  snow,   editorImage(this, 'Dokan_snow_night_00', SMB3,),],
                [night, SMB3,  snow,   editorImage(this, 'Dokan_snow_night_01', SMB3,),],
                [night, SMB3,  snow,   editorImage(this, 'Dokan_snow_night_02', SMB3,),],
                [night, SMB3,  snow,   editorImage(this, 'Dokan_snow_night_03', SMB3,),],

                [day,   SMW,   ground, editorImage(this, 'Dokan_00', SMW,),],
                [day,   SMW,   ground, editorImage(this, 'Dokan_01', SMW,),],
                [day,   SMW,   ground, editorImage(this, 'Dokan_02', SMW,),],
                [day,   SMW,   ground, editorImage(this, 'Dokan_03', SMW,),],

                [day,   NSMBU, ground, editorImage(this, 'Dokan_00', NSMBU,),],
                [day,   NSMBU, ground, editorImage(this, 'Dokan_01', NSMBU,),],
                [day,   NSMBU, ground, editorImage(this, 'Dokan_02', NSMBU,),],
                [day,   NSMBU, ground, editorImage(this, 'Dokan_03', NSMBU,),],

                [day,   SM3DW, ground, editorImage(this, 'Dokan_00', SM3DW,),],
                [day,   SM3DW, ground, editorImage(this, 'Dokan_01', SM3DW,),],
                [day,   SM3DW, ground, editorImage(this, 'Dokan_02', SM3DW,),],
                [day,   SM3DW, ground, editorImage(this, 'Dokan_03', SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link MUSHROOM_PLATFORM} */
    private static readonly ExistantAsMushroomPlatform = class ExistantAsMushroomPlatform
        extends EditorEntityImages.Existant<'Mushroom Platform', EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, `GroundMushroom${| EmptyString | `_${| 'water' | 'snow' | 'snow_night' | 'airship'}`}_0${| 0 | 1 | 2}`, 'Mushroom Platform'>> {

        public constructor() { super('Mushroom Platform',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underwater = Themes.UNDERWATER
            const snow = Themes.SNOW
            const airship = Themes.AIRSHIP
            return [
                [day,   SMB,   ground,     editorImage(this, 'GroundMushroom_00', SMB,),],
                [day,   SMB,   ground,     editorImage(this, 'GroundMushroom_01', SMB,),],
                [day,   SMB,   ground,     editorImage(this, 'GroundMushroom_02', SMB,),],
                [day,   SMB,   underwater, editorImage(this, 'GroundMushroom_water_00', SMB,),],
                [day,   SMB,   underwater, editorImage(this, 'GroundMushroom_water_01', SMB,),],
                [day,   SMB,   underwater, editorImage(this, 'GroundMushroom_water_02', SMB,),],
                [day,   SMB,   snow,       editorImage(this, 'GroundMushroom_snow_00', SMB,),],
                [day,   SMB,   snow,       editorImage(this, 'GroundMushroom_snow_01', SMB,),],
                [day,   SMB,   snow,       editorImage(this, 'GroundMushroom_snow_02', SMB,),],
                [night, SMB,   snow,       editorImage(this, 'GroundMushroom_snow_night_00', SMB,),],
                [night, SMB,   snow,       editorImage(this, 'GroundMushroom_snow_night_01', SMB,),],
                [night, SMB,   snow,       editorImage(this, 'GroundMushroom_snow_night_02', SMB,),],
                [day,   SMB,   airship,    editorImage(this, 'GroundMushroom_airship_00', SMB,),],
                [day,   SMB,   airship,    editorImage(this, 'GroundMushroom_airship_01', SMB,),],
                [day,   SMB,   airship,    editorImage(this, 'GroundMushroom_airship_02', SMB,),],

                [day,   SMB3,  ground,     editorImage(this, 'GroundMushroom_00', SMB3,),],
                [day,   SMB3,  ground,     editorImage(this, 'GroundMushroom_01', SMB3,),],
                [day,   SMB3,  ground,     editorImage(this, 'GroundMushroom_02', SMB3,),],
                [day,   SMB3,  underwater, editorImage(this, 'GroundMushroom_water_00', SMB3,),],
                [day,   SMB3,  underwater, editorImage(this, 'GroundMushroom_water_01', SMB3,),],
                [day,   SMB3,  underwater, editorImage(this, 'GroundMushroom_water_02', SMB3,),],
                [day,   SMB3,  snow,       editorImage(this, 'GroundMushroom_snow_00', SMB3,),],
                [day,   SMB3,  snow,       editorImage(this, 'GroundMushroom_snow_01', SMB3,),],
                [day,   SMB3,  snow,       editorImage(this, 'GroundMushroom_snow_02', SMB3,),],
                [night, SMB3,  snow,       editorImage(this, 'GroundMushroom_snow_night_00', SMB3,),],
                [night, SMB3,  snow,       editorImage(this, 'GroundMushroom_snow_night_01', SMB3,),],
                [night, SMB3,  snow,       editorImage(this, 'GroundMushroom_snow_night_02', SMB3,),],
                [day,   SMB3,  airship,    editorImage(this, 'GroundMushroom_airship_00', SMB3,),],
                [day,   SMB3,  airship,    editorImage(this, 'GroundMushroom_airship_01', SMB3,),],
                [day,   SMB3,  airship,    editorImage(this, 'GroundMushroom_airship_02', SMB3,),],

                [day,   SMW,   ground,     editorImage(this, 'GroundMushroom_00', SMW,),],
                [day,   SMW,   ground,     editorImage(this, 'GroundMushroom_01', SMW,),],
                [day,   SMW,   ground,     editorImage(this, 'GroundMushroom_02', SMW,),],
                [day,   SMW,   underwater, editorImage(this, 'GroundMushroom_water_00', SMW,),],
                [day,   SMW,   underwater, editorImage(this, 'GroundMushroom_water_01', SMW,),],
                [day,   SMW,   underwater, editorImage(this, 'GroundMushroom_water_02', SMW,),],
                [day,   SMW,   snow,       editorImage(this, 'GroundMushroom_snow_00', SMW,),],
                [day,   SMW,   snow,       editorImage(this, 'GroundMushroom_snow_01', SMW,),],
                [day,   SMW,   snow,       editorImage(this, 'GroundMushroom_snow_02', SMW,),],
                [night, SMW,   snow,       editorImage(this, 'GroundMushroom_snow_night_00', SMW,),],
                [night, SMW,   snow,       editorImage(this, 'GroundMushroom_snow_night_01', SMW,),],
                [night, SMW,   snow,       editorImage(this, 'GroundMushroom_snow_night_02', SMW,),],
                [day,   SMW,   airship,    editorImage(this, 'GroundMushroom_airship_00', SMW,),],
                [day,   SMW,   airship,    editorImage(this, 'GroundMushroom_airship_01', SMW,),],
                [day,   SMW,   airship,    editorImage(this, 'GroundMushroom_airship_02', SMW,),],

                [day,   NSMBU, ground,     editorImage(this, 'GroundMushroom_00', NSMBU,),],
                [day,   NSMBU, ground,     editorImage(this, 'GroundMushroom_01', NSMBU,),],
                [day,   NSMBU, ground,     editorImage(this, 'GroundMushroom_02', NSMBU,),],
                [day,   NSMBU, underwater, editorImage(this, 'GroundMushroom_water_00', NSMBU,),],
                [day,   NSMBU, underwater, editorImage(this, 'GroundMushroom_water_01', NSMBU,),],
                [day,   NSMBU, underwater, editorImage(this, 'GroundMushroom_water_02', NSMBU,),],
                [day,   NSMBU, snow,       editorImage(this, 'GroundMushroom_snow_00', NSMBU,),],
                [day,   NSMBU, snow,       editorImage(this, 'GroundMushroom_snow_01', NSMBU,),],
                [day,   NSMBU, snow,       editorImage(this, 'GroundMushroom_snow_02', NSMBU,),],
                [night, NSMBU, snow,       editorImage(this, 'GroundMushroom_snow_night_00', NSMBU,),],
                [night, NSMBU, snow,       editorImage(this, 'GroundMushroom_snow_night_01', NSMBU,),],
                [night, NSMBU, snow,       editorImage(this, 'GroundMushroom_snow_night_02', NSMBU,),],
                [day,   NSMBU, airship,    editorImage(this, 'GroundMushroom_airship_00', NSMBU,),],
                [day,   NSMBU, airship,    editorImage(this, 'GroundMushroom_airship_01', NSMBU,),],
                [day,   NSMBU, airship,    editorImage(this, 'GroundMushroom_airship_02', NSMBU,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link SEMISOLID_PLATFORM} */
    private static readonly ExistantAsSemisolidPlatform = class ExistantAsSemisolidPlatform
        extends EditorEntityImages.Existant<'Semisolid Platform', | EditorImageFile<GameStyles_SMB, `GroundBox${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_0${| 0 | 1 | 2}` | 'GroundBox_airship_night_01', 'Semisolid Platform'>
                                                                  | EditorImageFile<| GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, `GroundBox${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_0${| 0 | 1 | 2}`, 'Semisolid Platform'>
                                                                  | EditorImageFile<GameStyles_SM3DW, `GroundBox${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Semisolid Platform'>> {

        public constructor() { super('Semisolid Platform',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const desert = Themes.DESERT
            const snow = Themes.SNOW
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, 'GroundBox_00', SMB,),],
                [day,   SMB,   ground,      editorImage(this, 'GroundBox_01', SMB,),],
                [day,   SMB,   ground,      editorImage(this, 'GroundBox_02', SMB,),],
                [day,   SMB,   underground, editorImage(this, 'GroundBox_underground_00', SMB,),],
                [day,   SMB,   underground, editorImage(this, 'GroundBox_underground_01', SMB,),],
                [day,   SMB,   underground, editorImage(this, 'GroundBox_underground_02', SMB,),],
                [day,   SMB,   underwater,  editorImage(this, 'GroundBox_water_00', SMB,),],
                [day,   SMB,   underwater,  editorImage(this, 'GroundBox_water_01', SMB,),],
                [day,   SMB,   underwater,  editorImage(this, 'GroundBox_water_02', SMB,),],
                [day,   SMB,   desert,      editorImage(this, 'GroundBox_desert_00', SMB,),],
                [day,   SMB,   desert,      editorImage(this, 'GroundBox_desert_01', SMB,),],
                [day,   SMB,   desert,      editorImage(this, 'GroundBox_desert_02', SMB,),],
                [day,   SMB,   snow,        editorImage(this, 'GroundBox_snow_00', SMB,),],
                [day,   SMB,   snow,        editorImage(this, 'GroundBox_snow_01', SMB,),],
                [day,   SMB,   snow,        editorImage(this, 'GroundBox_snow_02', SMB,),],
                [night, SMB,   snow,        editorImage(this, 'GroundBox_snow_night_00', SMB,),],
                [night, SMB,   snow,        editorImage(this, 'GroundBox_snow_night_01', SMB,),],
                [night, SMB,   snow,        editorImage(this, 'GroundBox_snow_night_02', SMB,),],
                [day,   SMB,   sky,         editorImage(this, 'GroundBox_athletic_00', SMB,),],
                [day,   SMB,   sky,         editorImage(this, 'GroundBox_athletic_01', SMB,),],
                [day,   SMB,   sky,         editorImage(this, 'GroundBox_athletic_02', SMB,),],
                [day,   SMB,   forest,      editorImage(this, 'GroundBox_woods_00', SMB,),],
                [day,   SMB,   forest,      editorImage(this, 'GroundBox_woods_01', SMB,),],
                [day,   SMB,   forest,      editorImage(this, 'GroundBox_woods_02', SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', SMB,),],
                [day,   SMB,   airship,     editorImage(this, 'GroundBox_airship_00', SMB,),],
                [day,   SMB,   airship,     editorImage(this, 'GroundBox_airship_01', SMB,),],
                [day,   SMB,   airship,     editorImage(this, 'GroundBox_airship_02', SMB,),],
                [night, SMB,   airship,     editorImage(this, 'GroundBox_airship_night_01', SMB,),],
                [day,   SMB,   castle,      editorImage(this, 'GroundBox_castle_00', SMB,),],
                [day,   SMB,   castle,      editorImage(this, 'GroundBox_castle_01', SMB,),],
                [day,   SMB,   castle,      editorImage(this, 'GroundBox_castle_02', SMB,),],

                [day,   SMB3,  ground,      editorImage(this, 'GroundBox_00', SMB3,),],
                [day,   SMB3,  ground,      editorImage(this, 'GroundBox_01', SMB3,),],
                [day,   SMB3,  ground,      editorImage(this, 'GroundBox_02', SMB3,),],
                [day,   SMB3,  underground, editorImage(this, 'GroundBox_underground_00', SMB3,),],
                [day,   SMB3,  underground, editorImage(this, 'GroundBox_underground_01', SMB3,),],
                [day,   SMB3,  underground, editorImage(this, 'GroundBox_underground_02', SMB3,),],
                [day,   SMB3,  underwater,  editorImage(this, 'GroundBox_water_00', SMB3,),],
                [day,   SMB3,  underwater,  editorImage(this, 'GroundBox_water_01', SMB3,),],
                [day,   SMB3,  underwater,  editorImage(this, 'GroundBox_water_02', SMB3,),],
                [day,   SMB3,  desert,      editorImage(this, 'GroundBox_desert_00', SMB3,),],
                [day,   SMB3,  desert,      editorImage(this, 'GroundBox_desert_01', SMB3,),],
                [day,   SMB3,  desert,      editorImage(this, 'GroundBox_desert_02', SMB3,),],
                [day,   SMB3,  snow,        editorImage(this, 'GroundBox_snow_00', SMB3,),],
                [day,   SMB3,  snow,        editorImage(this, 'GroundBox_snow_01', SMB3,),],
                [day,   SMB3,  snow,        editorImage(this, 'GroundBox_snow_02', SMB3,),],
                [night, SMB3,  snow,        editorImage(this, 'GroundBox_snow_night_00', SMB3,),],
                [night, SMB3,  snow,        editorImage(this, 'GroundBox_snow_night_01', SMB3,),],
                [night, SMB3,  snow,        editorImage(this, 'GroundBox_snow_night_02', SMB3,),],
                [day,   SMB3,  sky,         editorImage(this, 'GroundBox_athletic_00', SMB3,),],
                [day,   SMB3,  sky,         editorImage(this, 'GroundBox_athletic_01', SMB3,),],
                [day,   SMB3,  sky,         editorImage(this, 'GroundBox_athletic_02', SMB3,),],
                [day,   SMB3,  forest,      editorImage(this, 'GroundBox_woods_00', SMB3,),],
                [day,   SMB3,  forest,      editorImage(this, 'GroundBox_woods_01', SMB3,),],
                [day,   SMB3,  forest,      editorImage(this, 'GroundBox_woods_02', SMB3,),],
                [day,   SMB3,  ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', SMB3,),],
                [day,   SMB3,  ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', SMB3,),],
                [day,   SMB3,  ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', SMB3,),],
                [day,   SMB3,  airship,     editorImage(this, 'GroundBox_airship_00', SMB3,),],
                [day,   SMB3,  airship,     editorImage(this, 'GroundBox_airship_01', SMB3,),],
                [day,   SMB3,  airship,     editorImage(this, 'GroundBox_airship_02', SMB3,),],
                [day,   SMB3,  castle,      editorImage(this, 'GroundBox_castle_00', SMB3,),],
                [day,   SMB3,  castle,      editorImage(this, 'GroundBox_castle_01', SMB3,),],
                [day,   SMB3,  castle,      editorImage(this, 'GroundBox_castle_02', SMB3,),],

                [day,   SMW,   ground,      editorImage(this, 'GroundBox_00', SMW,),],
                [day,   SMW,   ground,      editorImage(this, 'GroundBox_01', SMW,),],
                [day,   SMW,   ground,      editorImage(this, 'GroundBox_02', SMW,),],
                [day,   SMW,   underground, editorImage(this, 'GroundBox_underground_00', SMW,),],
                [day,   SMW,   underground, editorImage(this, 'GroundBox_underground_01', SMW,),],
                [day,   SMW,   underground, editorImage(this, 'GroundBox_underground_02', SMW,),],
                [day,   SMW,   underwater,  editorImage(this, 'GroundBox_water_00', SMW,),],
                [day,   SMW,   underwater,  editorImage(this, 'GroundBox_water_01', SMW,),],
                [day,   SMW,   underwater,  editorImage(this, 'GroundBox_water_02', SMW,),],
                [day,   SMW,   desert,      editorImage(this, 'GroundBox_desert_00', SMW,),],
                [day,   SMW,   desert,      editorImage(this, 'GroundBox_desert_01', SMW,),],
                [day,   SMW,   desert,      editorImage(this, 'GroundBox_desert_02', SMW,),],
                [day,   SMW,   snow,        editorImage(this, 'GroundBox_snow_00', SMW,),],
                [day,   SMW,   snow,        editorImage(this, 'GroundBox_snow_01', SMW,),],
                [day,   SMW,   snow,        editorImage(this, 'GroundBox_snow_02', SMW,),],
                [night, SMW,   snow,        editorImage(this, 'GroundBox_snow_night_00', SMW,),],
                [night, SMW,   snow,        editorImage(this, 'GroundBox_snow_night_01', SMW,),],
                [night, SMW,   snow,        editorImage(this, 'GroundBox_snow_night_02', SMW,),],
                [day,   SMW,   sky,         editorImage(this, 'GroundBox_athletic_00', SMW,),],
                [day,   SMW,   sky,         editorImage(this, 'GroundBox_athletic_01', SMW,),],
                [day,   SMW,   sky,         editorImage(this, 'GroundBox_athletic_02', SMW,),],
                [day,   SMW,   forest,      editorImage(this, 'GroundBox_woods_00', SMW,),],
                [day,   SMW,   forest,      editorImage(this, 'GroundBox_woods_01', SMW,),],
                [day,   SMW,   forest,      editorImage(this, 'GroundBox_woods_02', SMW,),],
                [day,   SMW,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', SMW,),],
                [day,   SMW,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', SMW,),],
                [day,   SMW,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', SMW,),],
                [day,   SMW,   airship,     editorImage(this, 'GroundBox_airship_00', SMW,),],
                [day,   SMW,   airship,     editorImage(this, 'GroundBox_airship_01', SMW,),],
                [day,   SMW,   airship,     editorImage(this, 'GroundBox_airship_02', SMW,),],
                [day,   SMW,   castle,      editorImage(this, 'GroundBox_castle_00', SMW,),],
                [day,   SMW,   castle,      editorImage(this, 'GroundBox_castle_01', SMW,),],
                [day,   SMW,   castle,      editorImage(this, 'GroundBox_castle_02', SMW,),],

                [day,   NSMBU, ground,      editorImage(this, 'GroundBox_00', NSMBU,),],
                [day,   NSMBU, ground,      editorImage(this, 'GroundBox_01', NSMBU,),],
                [day,   NSMBU, ground,      editorImage(this, 'GroundBox_02', NSMBU,),],
                [day,   NSMBU, underground, editorImage(this, 'GroundBox_underground_00', NSMBU,),],
                [day,   NSMBU, underground, editorImage(this, 'GroundBox_underground_01', NSMBU,),],
                [day,   NSMBU, underground, editorImage(this, 'GroundBox_underground_02', NSMBU,),],
                [day,   NSMBU, underwater,  editorImage(this, 'GroundBox_water_00', NSMBU,),],
                [day,   NSMBU, underwater,  editorImage(this, 'GroundBox_water_01', NSMBU,),],
                [day,   NSMBU, underwater,  editorImage(this, 'GroundBox_water_02', NSMBU,),],
                [day,   NSMBU, desert,      editorImage(this, 'GroundBox_desert_00', NSMBU,),],
                [day,   NSMBU, desert,      editorImage(this, 'GroundBox_desert_01', NSMBU,),],
                [day,   NSMBU, desert,      editorImage(this, 'GroundBox_desert_02', NSMBU,),],
                [day,   NSMBU, snow,        editorImage(this, 'GroundBox_snow_00', NSMBU,),],
                [day,   NSMBU, snow,        editorImage(this, 'GroundBox_snow_01', NSMBU,),],
                [day,   NSMBU, snow,        editorImage(this, 'GroundBox_snow_02', NSMBU,),],
                [night, NSMBU, snow,        editorImage(this, 'GroundBox_snow_night_00', NSMBU,),],
                [night, NSMBU, snow,        editorImage(this, 'GroundBox_snow_night_01', NSMBU,),],
                [night, NSMBU, snow,        editorImage(this, 'GroundBox_snow_night_02', NSMBU,),],
                [day,   NSMBU, sky,         editorImage(this, 'GroundBox_athletic_00', NSMBU,),],
                [day,   NSMBU, sky,         editorImage(this, 'GroundBox_athletic_01', NSMBU,),],
                [day,   NSMBU, sky,         editorImage(this, 'GroundBox_athletic_02', NSMBU,),],
                [day,   NSMBU, forest,      editorImage(this, 'GroundBox_woods_00', NSMBU,),],
                [day,   NSMBU, forest,      editorImage(this, 'GroundBox_woods_01', NSMBU,),],
                [day,   NSMBU, forest,      editorImage(this, 'GroundBox_woods_02', NSMBU,),],
                [day,   NSMBU, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', NSMBU,),],
                [day,   NSMBU, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', NSMBU,),],
                [day,   NSMBU, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', NSMBU,),],
                [day,   NSMBU, airship,     editorImage(this, 'GroundBox_airship_00', NSMBU,),],
                [day,   NSMBU, airship,     editorImage(this, 'GroundBox_airship_01', NSMBU,),],
                [day,   NSMBU, airship,     editorImage(this, 'GroundBox_airship_02', NSMBU,),],
                [day,   NSMBU, castle,      editorImage(this, 'GroundBox_castle_00', NSMBU,),],
                [day,   NSMBU, castle,      editorImage(this, 'GroundBox_castle_01', NSMBU,),],
                [day,   NSMBU, castle,      editorImage(this, 'GroundBox_castle_02', NSMBU,),],

                [day,   SM3DW, ground,      editorImage(this, 'GroundBox_00', SM3DW,),],
                [day,   SM3DW, underground, editorImage(this, 'GroundBox_underground_00', SM3DW,),],
                [day,   SM3DW, underwater,  editorImage(this, 'GroundBox_water_00', SM3DW,),],
                [day,   SM3DW, desert,      editorImage(this, 'GroundBox_desert_00', SM3DW,),],
                [day,   SM3DW, snow,        editorImage(this, 'GroundBox_snow_00', SM3DW,),],
                [day,   SM3DW, sky,         editorImage(this, 'GroundBox_athletic_00', SM3DW,),],
                [day,   SM3DW, forest,      editorImage(this, 'GroundBox_woods_00', SM3DW,),],
                [day,   SM3DW, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', SM3DW,),],
                [day,   SM3DW, airship,     editorImage(this, 'GroundBox_airship_00', SM3DW,),],
                [day,   SM3DW, castle,      editorImage(this, 'GroundBox_castle_00', SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link BRIDGE} */
    private static readonly ExistantAsBridge = class ExistantAsBridge
        extends EditorEntityImages.Existant<'Bridge', | EditorImageFile<GameStyles_SMB, `Bridge${| EmptyString | `_${| 'snow' | 'snow_night' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Bridge'>
                                                      | EditorImageFile<GameStyles_SMB3, `Bridge${| EmptyString | `_${| 'snow' | 'snow_night'}`}_00`, 'Bridge'>
                                                      | EditorImageFile<GameStyles_SMW, `Bridge${| EmptyString | `_${| 'desert' | 'snow' | 'snow_night' | 'athletic' | 'woods'}`}_00`, 'Bridge'>
                                                      | EditorImageFile<GameStyles_NSMBU, `Bridge${| EmptyString | `_${| 'underground' | 'water' | 'snow' | 'snow_night' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Bridge'>> {

        public constructor() { super('Bridge',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const desert = Themes.DESERT
            const snow = Themes.SNOW
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, 'Bridge_00', SMB,),],
                [day,   SMB,   snow,        editorImage(this, 'Bridge_snow_00', SMB,),],
                [night, SMB,   snow,        editorImage(this, 'Bridge_snow_night_00', SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, 'Bridge_hauntedhouse_00', SMB,),],
                [day,   SMB,   airship,     editorImage(this, 'Bridge_airship_00', SMB,),],
                [day,   SMB,   castle,      editorImage(this, 'Bridge_castle_00', SMB,),],

                [day,   SMB3,  ground,      editorImage(this, 'Bridge_00', SMB3,),],
                [day,   SMB3,  snow,        editorImage(this, 'Bridge_snow_00', SMB3,),],
                [night, SMB3,  snow,        editorImage(this, 'Bridge_snow_night_00', SMB3,),],

                [day,   SMW,   ground,      editorImage(this, 'Bridge_00', SMW,),],
                [day,   SMW,   desert,      editorImage(this, 'Bridge_desert_00', SMW,),],
                [day,   SMW,   snow,        editorImage(this, 'Bridge_snow_00', SMW,),],
                [night, SMW,   snow,        editorImage(this, 'Bridge_snow_night_00', SMW,),],
                [day,   SMW,   sky,         editorImage(this, 'Bridge_athletic_00', SMW,),],
                [day,   SMW,   forest,      editorImage(this, 'Bridge_woods_00', SMW,),],

                [day,   NSMBU, ground,      editorImage(this, 'Bridge_00', NSMBU,),],
                [day,   NSMBU, underground, editorImage(this, 'Bridge_underground_00', NSMBU,),],
                [day,   NSMBU, underwater,  editorImage(this, 'Bridge_water_00', NSMBU,),],
                [day,   NSMBU, snow,        editorImage(this, 'Bridge_snow_00', NSMBU,),],
                [night, NSMBU, snow,        editorImage(this, 'Bridge_snow_night_00', NSMBU,),],
                [day,   NSMBU, forest,      editorImage(this, 'Bridge_woods_00', NSMBU,),],
                [day,   NSMBU, ghostHouse,  editorImage(this, 'Bridge_hauntedhouse_00', NSMBU,),],
                [day,   NSMBU, airship,     editorImage(this, 'Bridge_airship_00', NSMBU,),],
                [day,   NSMBU, castle,      editorImage(this, 'Bridge_castle_00', NSMBU,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link BRICK_BLOCK} */
    private static readonly ExistantAsBrickBlock = class ExistantAsBrickBlock
        extends EditorEntityImages.Existant<'Brick Block', | EditorImageFile<GameStyles_SMB, `RengaBlock${| EmptyString | `_${| 'underground' | 'snow' | 'snow_night' | 'hauntedhouse' | 'castle'}`}_00`, 'Brick Block'>
                                                           | EditorImageFile<GameStyles_SMB3, `RengaBlock${| EmptyString | '_snow_night'}_00`, 'Brick Block'>
                                                           | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, `RengaBlock_00`, 'Brick Block'>> {

        public constructor() { super('Brick Block',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const snow = Themes.SNOW
            const ghostHouse = Themes.GHOST_HOUSE
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, 'RengaBlock_00', SMB,),],
                [day,   SMB,   underground, editorImage(this, 'RengaBlock_underground_00', SMB,),],
                [day,   SMB,   snow,        editorImage(this, 'RengaBlock_snow_00', SMB,),],
                [night, SMB,   snow,        editorImage(this, 'RengaBlock_snow_night_00', SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, 'RengaBlock_hauntedhouse_00', SMB,),],
                [day,   SMB,   castle,      editorImage(this, 'RengaBlock_castle_00', SMB,),],

                [day,   SMB3,  ground,      editorImage(this, 'RengaBlock_00', SMB3,),],
                [night, SMB3,  snow,        editorImage(this, 'RengaBlock_snow_night_00', SMB3,),],

                [day,   SMW,   ground,      editorImage(this, 'RengaBlock_00', SMW,),],

                [day,   NSMBU, ground,      editorImage(this, 'RengaBlock_00', NSMBU,),],

                [day,   SM3DW, ground,      editorImage(this, 'RengaBlock_00', SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CRISTAL_BLOCK} */
    private static readonly ExistantAsCristalBlock = class ExistantAsCristalBlock
        extends EditorEntityImages.Existant<'Cristal Block', EditorImageFile<GameStyles_SM3DW, `RengaBlock${`_${| 'underground' | 'woods'}`}_00`, 'Cristal Block'>> {

        public constructor() { super('Cristal Block',) }

        public override _createImageFiles() {
            const time = Times.DAY
            return [
                [time, SM3DW, Themes.UNDERGROUND, editorImage(this, 'RengaBlock_underground_00', SM3DW,),],
                [time, SM3DW, Themes.FOREST,      editorImage(this, 'RengaBlock_woods_00', SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link HARD_BLOCK} */
    private static readonly ExistantAsHardBlock = class ExistantAsHardBlock
        extends EditorEntityImages.Existant<'Hard Block', | EditorImageFile<GameStyles_SMB, `HardBlock${| EmptyString | `_${| 'underground' | 'underground_night' | 'water' | 'snow' | 'snow_night' | 'hauntedhouse' | 'airship' | 'castle'}`}_00`, 'Hard Block'>
                                                          | EditorImageFile<GameStyles_SMB3, `HardBlock${| EmptyString | `_${| 'snow' | 'snow_night'}`}_00`, 'Hard Block'>
                                                          | EditorImageFile<GameStyles_SMW, `HardBlock${| EmptyString | `_${| 'hauntedhouse' | 'airship' | 'airship_night'}`}_00`, 'Hard Block'>
                                                          | EditorImageFile<GameStyles_NSMBU, `HardBlock${| EmptyString | `_${| 'underground' | 'water' | 'snow' | 'athletic' | 'woods' | 'castle'}`}_00`, 'Hard Block'>> {

        public constructor() { super('Hard Block',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const snow = Themes.SNOW
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, 'HardBlock_00', SMB,),],
                [day,   SMB,   underground, editorImage(this, 'HardBlock_underground_00', SMB,),],
                [night, SMB,   underground, editorImage(this, 'HardBlock_underground_night_00', SMB,),],
                [day,   SMB,   underwater,  editorImage(this, 'HardBlock_water_00', SMB,),],
                [day,   SMB,   snow,        editorImage(this, 'HardBlock_snow_00', SMB,),],
                [night, SMB,   snow,        editorImage(this, 'HardBlock_snow_night_00', SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, 'HardBlock_hauntedhouse_00', SMB,),],
                [day,   SMB,   airship,     editorImage(this, 'HardBlock_airship_00', SMB,),],
                [day,   SMB,   castle,      editorImage(this, 'HardBlock_castle_00', SMB,),],

                [day,   SMB3,  ground,      editorImage(this, 'HardBlock_00', SMB3,),],
                [day,   SMB3,  snow,        editorImage(this, 'HardBlock_snow_00', SMB3,),],
                [night, SMB3,  snow,        editorImage(this, 'HardBlock_snow_night_00', SMB3,),],

                [day,   SMW,   ground,      editorImage(this, 'HardBlock_00', SMW,),],
                [day,   SMW,   ghostHouse,  editorImage(this, 'HardBlock_hauntedhouse_00', SMW,),],
                [day,   SMW,   airship,     editorImage(this, 'HardBlock_airship_00', SMW,),],
                [night, SMW,   airship,     editorImage(this, 'HardBlock_airship_night_00', SMW,),],

                [day,   NSMBU, ground,      editorImage(this, 'HardBlock_00', NSMBU,),],
                [day,   NSMBU, underground, editorImage(this, 'HardBlock_underground_00', NSMBU,),],
                [day,   NSMBU, underwater,  editorImage(this, 'HardBlock_water_00', NSMBU,),],
                [day,   NSMBU, snow,        editorImage(this, 'HardBlock_snow_00', NSMBU,),],
                [day,   NSMBU, sky,         editorImage(this, 'HardBlock_athletic_00', NSMBU,),],
                [day,   NSMBU, forest,      editorImage(this, 'HardBlock_woods_00', NSMBU,),],
                [day,   NSMBU, castle,      editorImage(this, 'HardBlock_castle_00', NSMBU,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CLOUD_BLOCK} */
    private static readonly ExistantAsCloudBlock = class ExistantAsCloudBlock
        extends EditorEntityImages.Existant<'Cloud Block', | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, `KumoBlock${| EmptyString | `_${| 'water' | 'snow_night'}`}_00`, 'Cloud Block'>
                                                           | EditorImageFile<GameStyles_SMW, `KumoBlock${| EmptyString | '_water'}_00`, 'Cloud Block'>
                                                           | EditorImageFile<| GameStyles_NSMBU | GameStyles_SM3DW, 'KumoBlock_00', 'Cloud Block'>> {

        public constructor() { super('Cloud Block',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underwater = Themes.UNDERWATER
            const snow = Themes.SNOW
            return [
                [day,   SMB,   ground,     editorImage(this, 'KumoBlock_00', SMB,),],
                [day,   SMB,   underwater, editorImage(this, 'KumoBlock_water_00', SMB,),],
                [night, SMB,   snow,       editorImage(this, 'KumoBlock_snow_night_00', SMB,),],

                [day,   SMB3,  ground,     editorImage(this, 'KumoBlock_00', SMB3,),],
                [day,   SMB3,  underwater, editorImage(this, 'KumoBlock_water_00', SMB3,),],
                [night, SMB3,  snow,       editorImage(this, 'KumoBlock_snow_night_00', SMB3,),],

                [day,   SMW,   ground,     editorImage(this, 'KumoBlock_00', SMW,),],
                [day,   SMW,   underwater, editorImage(this, 'KumoBlock_water_00', SMW,),],

                [day,   NSMBU, ground,     editorImage(this, 'KumoBlock_00', NSMBU,),],

                [day,   SM3DW, ground,     editorImage(this, 'KumoBlock_00', SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CHEEP_CHEEP} */
    private static readonly ExistantAsCheepCheep = class ExistantAsCheepCheep
        extends EditorEntityImages.Existant<'Cheep Cheep', | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SM3DW, `Pukupuku_0${| 0 | 1}`, 'Cheep Cheep'>
                                                           | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU, `Pukupuku_01`, 'Cheep Cheep'>> {

        public constructor() { super('Cheep Cheep',) }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB,   theme, editorImage(this, 'Pukupuku_00', SMB,),],
                [time, SMB,   theme, editorImage(this, 'Pukupuku_01', SMB,),],

                [time, SMB3,  theme, editorImage(this, 'Pukupuku_00', SMB3,),],
                [time, SMB3,  theme, editorImage(this, 'Pukupuku_01', SMB3,),],

                [time, SMW,   theme, editorImage(this, 'Pukupuku_01', SMW,),],

                [time, NSMBU, theme, editorImage(this, 'Pukupuku_01', NSMBU,),],

                [time, SM3DW, theme, editorImage(this, 'Pukupuku_00', SM3DW,),],
                [time, SM3DW, theme, editorImage(this, 'Pukupuku_01', SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link SPIKE_BALL} */
    private static readonly ExistantAsSpikeBall = class ExistantAsSpikeBall
        extends EditorEntityImages.Existant<'Spike Ball', | EditorImageFile<| GameStyles_SMB | GameStyles_SMB3, `Gabon${| EmptyString | `_${| 'plain_night' | 'underground' | 'water' | 'desert_night' | 'athletic_night' | 'woods_night' | 'hauntedhouse' | 'airship_night' | 'castle'}`}_01`, 'Spike Ball'>
                                                          | EditorImageFile<| GameStyles_SMW | GameStyles_NSMBU | GameStyles_SM3DW, 'Gabon_01', 'Spike Ball'>> {

        public constructor() { super('Spike Ball',) }

        public override _createImageFiles() {
            const day = Times.DAY
            const night = Times.NIGHT
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const desert = Themes.DESERT
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return [
                [day,   SMB,   ground,      editorImage(this, 'Gabon_01', SMB,),],
                [night, SMB,   ground,      editorImage(this, 'Gabon_plain_night_01', SMB,),],
                [day,   SMB,   underground, editorImage(this, 'Gabon_underground_01', SMB,),],
                [day,   SMB,   underwater,  editorImage(this, 'Gabon_water_01', SMB,),],
                [night, SMB,   desert,      editorImage(this, 'Gabon_desert_night_01', SMB,),],
                [night, SMB,   sky,         editorImage(this, 'Gabon_athletic_night_01', SMB,),],
                [night, SMB,   forest,      editorImage(this, 'Gabon_woods_night_01', SMB,),],
                [day,   SMB,   ghostHouse,  editorImage(this, 'Gabon_hauntedhouse_01', SMB,),],
                [night, SMB,   airship,     editorImage(this, 'Gabon_airship_night_01', SMB,),],
                [day,   SMB,   castle,      editorImage(this, 'Gabon_castle_01', SMB,),],

                [day,   SMB3,  ground,      editorImage(this, 'Gabon_01', SMB3,),],
                [night, SMB3,  ground,      editorImage(this, 'Gabon_plain_night_01', SMB3,),],
                [day,   SMB3,  underground, editorImage(this, 'Gabon_underground_01', SMB3,),],
                [day,   SMB3,  underwater,  editorImage(this, 'Gabon_water_01', SMB3,),],
                [night, SMB3,  desert,      editorImage(this, 'Gabon_desert_night_01', SMB3,),],
                [night, SMB3,  sky,         editorImage(this, 'Gabon_athletic_night_01', SMB3,),],
                [night, SMB3,  forest,      editorImage(this, 'Gabon_woods_night_01', SMB3,),],
                [day,   SMB3,  ghostHouse,  editorImage(this, 'Gabon_hauntedhouse_01', SMB3,),],
                [night, SMB3,  airship,     editorImage(this, 'Gabon_airship_night_01', SMB3,),],
                [day,   SMB3,  castle,      editorImage(this, 'Gabon_castle_01', SMB3,),],

                [day,   SMW,   ground,      editorImage(this, 'Gabon_01', SMW,),],

                [day,   NSMBU, ground,      editorImage(this, 'Gabon_01', NSMBU,),],

                [day,   SM3DW, ground,      editorImage(this, 'Gabon_01', SM3DW,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link TRACK} */
    private static readonly ExistantAsTrack = class ExistantAsTrack
        extends EditorEntityImages.Existant<'Track', EditorImageFile<| GameStyles_SMB | GameStyles_SMB3 | GameStyles_SMW | GameStyles_NSMBU, `Rail${| EmptyString | 'U' | 'D' | `Branch${`${| 'U' | 'D'}${| 'L' | 'R'}` | `${| 'L' | 'R'}${| 'U' | 'D'}`}` | `Curve${| 'L' | 'R'}${| 'U' | 'D'}`}_00`, 'Track'>> {

        public constructor() { super('Track',) }

        public override _createImageFiles() {
            const time = Times.DAY
            const theme = Themes.GROUND
            return [
                [time, SMB, theme, editorImage(this, 'Rail_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailU_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailCurveLD_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailCurveLU_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailCurveRD_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailCurveRU_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchDL_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchDR_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchUL_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchUR_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchLD_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchLU_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchRD_00', SMB,),],
                [time, SMB, theme, editorImage(this, 'RailBranchRU_00', SMB,),],

                [time, SMB3, theme, editorImage(this, 'Rail_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailU_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailCurveLD_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailCurveLU_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailCurveRD_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailCurveRU_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchDL_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchDR_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchUL_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchUR_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchLD_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchLU_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchRD_00', SMB3,),],
                [time, SMB3, theme, editorImage(this, 'RailBranchRU_00', SMB3,),],

                [time, SMW, theme, editorImage(this, 'Rail_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailU_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailCurveLD_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailCurveLU_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailCurveRD_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailCurveRU_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchDL_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchDR_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchUL_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchUR_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchLD_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchLU_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchRD_00', SMW,),],
                [time, SMW, theme, editorImage(this, 'RailBranchRU_00', SMW,),],

                [time, NSMBU, theme, editorImage(this, 'Rail_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailU_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailCurveLD_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailCurveLU_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailCurveRD_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailCurveRU_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchDL_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchDR_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchUL_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchUR_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchLD_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchLU_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchRD_00', NSMBU,),],
                [time, NSMBU, theme, editorImage(this, 'RailBranchRU_00', NSMBU,),],
            ] as const
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link TREE} */
    private static readonly ExistantAsTree = class ExistantAsTree
        extends EditorEntityImages.Existant<'Tree', EditorImageFile<GameStyles_SM3DW, `BellTree${| EmptyString | `_${| 'underground' | 'water' | 'desert' | 'snow' | 'woods'}`}_00`, 'Tree'>> {

        public constructor() { super('Tree',) }

        public override _createImageFiles() {
            const time = Times.DAY
            return [
                [time, SM3DW, Themes.GROUND,      editorImage(this, 'BellTree_00', SM3DW,),],
                [time, SM3DW, Themes.UNDERGROUND, editorImage(this, 'BellTree_underground_00', SM3DW,),],
                [time, SM3DW, Themes.UNDERWATER,  editorImage(this, 'BellTree_water_00', SM3DW,),],
                [time, SM3DW, Themes.DESERT,      editorImage(this, 'BellTree_desert_00', SM3DW,),],
                [time, SM3DW, Themes.SNOW,        editorImage(this, 'BellTree_snow_00', SM3DW,),],
                [time, SM3DW, Themes.FOREST,      editorImage(this, 'BellTree_woods_00', SM3DW,),],
            ] as const
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
    public static readonly CLEAR_PIPE =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Clear Pipe', 'ToumeiDokan_00',)

    public static readonly SPIKE_TRAP =                                    new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmbAndSmb3ButNotSm3dw('Spike Trap', 'Toge_00', 'Toge_snow_night_00',)
    public static readonly JELECTRO =                                      new EditorEntityImages.ExistantAsOneIn1GameStyle('Jelectro', 'Toge_water_00', SMB3, Themes.UNDERWATER,)
    public static readonly SEA_URCHIN =                                    new EditorEntityImages.ExistantAsOneIn1GameStyle('Sea Urchin',  'Toge_water_00', SMW, Themes.UNDERWATER,)
    public static readonly SPIKE_BLOCK =                                   new EditorEntityImages.ExistantAsThreeInOnlySm3dw('Spike Block', 'TogeBlock_00', 'TogeBlock_01', 'TogeBlock_02',)

    public static readonly MUSHROOM_PLATFORM =                             new EditorEntityImages.ExistantAsMushroomPlatform()
    public static readonly SEMISOLID_PLATFORM =                            new EditorEntityImages.ExistantAsSemisolidPlatform()
    public static readonly BRIDGE =                                        new EditorEntityImages.ExistantAsBridge()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new EditorEntityImages.ExistantAsBrickBlock()
    public static readonly CRISTAL_BLOCK =                                 new EditorEntityImages.ExistantAsCristalBlock()
    public static readonly ROTATING_BLOCK =                                new EditorEntityImages.ExistantAsOneInOnlySmw('Rotating Block', 'RengaBlock_00',)

    public static readonly HARD_BLOCK =                                    new EditorEntityImages.ExistantAsHardBlock()
    public static readonly ROCK_BLOCK =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Rock Block', 'HardBlock_00',)

    public static readonly QUESTION_MARK_BLOCK =                           new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmbAndSmb3('? Block', 'HatenaBlock_00', 'HatenaBlock_snow_night_00',)
    public static readonly HIDDEN_BLOCK =                                  new EditorEntityImages.ExistantAsOneInAll('Hidden Block', 'ClearBlock_00',)
    public static readonly EMPTY_BLOCK =                                   new EditorEntityImages.Null()

    public static readonly EXCLAMATION_MARK_BLOCK =                        new EditorEntityImages.ExistantAsOneInOnlySm3dw('! Block', 'BikkuriBlock_00',)

    public static readonly NOTE_BLOCK =                                    new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmbAndSmb3ButNotSm3dw('Note Block', 'OnpuBlock_00', 'OnpuBlock_snow_night_00',)
    public static readonly MUSIC_BLOCK =                                   new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmbAndSmb3ButNotSm3dw('Music Block', 'OnpuBlock_01', 'OnpuBlock_snow_night_01',)

    public static readonly DONUT_BLOCK =                                   new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmbAndSmb3('Donut Block', 'ChikuwaBlock_00', 'ChikuwaBlock_snow_night_00',)

    public static readonly CLOUD_BLOCK =                                   new EditorEntityImages.ExistantAsCloudBlock()

    public static readonly ON_OFF_SWITCH =                                 new EditorEntityImages.ExistantAsOneInAll('ON/OFF Switch', 'OnOffSwitch_00',)
    public static readonly DOTTED_LINE_BLOCK =                             new EditorEntityImages.ExistantAsTwoInAll('Dotted-Line Block', 'OnOffBlock_00', 'OnOffBlock_01',)

    public static readonly P_BLOCK =                                       new EditorEntityImages.ExistantAsTwoInAll('P Block', 'PBlock_00', 'PBlock_01',)

    public static readonly BLINKING_BLOCK =                                new EditorEntityImages.ExistantAsTwoInOnlySm3dw('Blinking Block', 'Chikachika_00', 'Chikachika_01',)

    public static readonly ICE_BLOCK =                                     new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmb3('Ice Block', 'IceBlock_00', 'IceBlock_snow_night_00',)
    public static readonly ICICLE =                                        new EditorEntityImages.ExistantAsTwoInAll('Icicle', 'Icicle_00', 'Icicle_01',)

    public static readonly COIN =                                          new EditorEntityImages.ExistantAsOneInAll('Coin', 'Coin_00',)
    public static readonly FROZEN_COIN =                                   new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmb3ButNotSm3dw('Frozen Coin', 'Coin_01', 'Coin_snow_night_01',)
    public static readonly TEN_COIN =                                      new EditorEntityImages.ExistantAsOneInAll('10-Coin', '10Coin_00',)
    public static readonly THIRTY_COIN =                                   new EditorEntityImages.ExistantAsOneInAll('30-Coin', '10Coin_01',)
    public static readonly FIFTY_COIN =                                    new EditorEntityImages.ExistantAsOneInAll('50-Coin', '10Coin_02',)
    public static readonly PINK_COIN =                                     new EditorEntityImages.ExistantAsOneInAll('Pink Coin', 'PinkCoin_00',)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new EditorEntityImages.ExistantAsOneInAll('Super Mushroom', 'SuperKinoko_00',)

    public static readonly FIRE_FLOWER =                                   new EditorEntityImages.ExistantAsTwoInAll('Fire Flower', 'FireFlower_00', 'FireFlowerUni_00',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new EditorEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new EditorEntityImages.ExistantAsTwoInOnlySmb('Superball Flower', 'FireFlower_01', 'FireFlowerUni_01',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new EditorEntityImages.Null()

    public static readonly MYSTERY_MUSHROOM =                              new EditorEntityImages.Null()
    public static readonly WEIRD_MUSHROOM =                                new EditorEntityImages.Null()

    public static readonly MASTER_SWORD =                                  new EditorEntityImages.ExistantAsOneInOnlySmb('Master Sword', 'SuperKinoko_01',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new EditorEntityImages.Null()
    public static readonly ARROW_THROWN_BY_A_LINK =                        new EditorEntityImages.Null()

    public static readonly BIG_MUSHROOM =                                  new EditorEntityImages.ExistantAsTwoInOnlySmb('Big Mushroom', 'DekaKinoko_00', 'DekaKinokoUni_00',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new EditorEntityImages.Null()
    public static readonly BIG_MUSHROOM_MODERN =                           new EditorEntityImages.Null()

    public static readonly SMB2_MUSHROOM =                                 new EditorEntityImages.ExistantAsTwoInOnlySmb('SMB2 Mushroom', 'KinokoUSA_00', 'KinokoUSAUni_00',)

    public static readonly SUPER_LEAF =                                    new EditorEntityImages.ExistantAsTwoInOnlySmb3('Super Leaf', 'SuperKonoha_00', 'SuperKonohaUni_00',)

    public static readonly FROG_SUIT =                                     new EditorEntityImages.ExistantAsTwoInOnlySmb3('Frog Suit', 'FrogSuit_00', 'FrogSuitUni_00',)

    public static readonly CAPE_FEATHER =                                  new EditorEntityImages.ExistantAsTwoInOnlySmw('Cape Feather', 'MantleWing_00', 'MantleWingUni_00',)

    public static readonly POWER_BALLOON =                                 new EditorEntityImages.ExistantAsTwoInOnlySmw('Power Balloon', 'PowerBalloon_00', 'PowerBalloonUni_00',)

    public static readonly PROPELLER_MUSHROOM =                            new EditorEntityImages.ExistantAsTwoInOnlyNsmbu('Propeller Mushroom', 'PropellerKinoko_00', 'PropellerKinokoUni_00',)

    public static readonly SUPER_ACORN =                                   new EditorEntityImages.ExistantAsTwoInOnlyNsmbu('Super Acorn', 'SuperDonguri_00', 'SuperDonguriUni_00',)

    public static readonly SUPER_BELL =                                    new EditorEntityImages.ExistantAsTwoInOnlySm3dw('Super Bell', 'SuperBell_00', 'SuperBellUni_00',)

    public static readonly SUPER_HAMMER =                                  new EditorEntityImages.ExistantAsTwoInOnlySm3dw('Super Hammer', 'SuperHammer_00', 'SuperHammerUni_00',)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new EditorEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new EditorEntityImages.ExistantAsTwoInOnlySm3dw('Boomerang Flower', 'BoomerangFlower_00', 'BoomerangFlowerUni_00',)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new EditorEntityImages.Null()

    public static readonly CANNON_BOX =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Cannon Box', 'BoxKiller_00',)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new EditorEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new EditorEntityImages.ExistantAsOneInOnlySm3dw('Propeller Box', 'BoxPropeller_00',)

    public static readonly GOOMBA_MASK =                                   new EditorEntityImages.ExistantAsOneInOnlySm3dw('Goomba Mask', 'BoxKuribo_00',)

    public static readonly BULLET_BILL_MASK =                              new EditorEntityImages.ExistantAsOneInOnlySm3dw('Bullet Bill Mask', 'BoxKillerPlayer_00',)

    public static readonly RED_POW_BOX =                                   new EditorEntityImages.ExistantAsOneInOnlySm3dw('Red POW Box', 'BoxPow_00',)

    public static readonly SUPER_STAR =                                    new EditorEntityImages.ExistantAsOneInAll('Super Star', 'SuperStar_00',)

    public static readonly ONE_UP_MUSHROOM =                               new EditorEntityImages.ExistantAsOneInAll('1-Up Mushroom', '1upKinoko_00',)
    public static readonly ROTTEN_MUSHROOM =                               new EditorEntityImages.ExistantAsOneInNotSm3dw('Rotten Mushroom', 'DokuKinoko_00',)

    public static readonly SHOE_GOOMBA =                                   new EditorEntityImages.ExistantAsOneInOnlySmbAndSmb3('Shoe Goomba', 'KutsuKuribo_00',)
    public static readonly SHOE =                                          new EditorEntityImages.Null()
    public static readonly STILETTO_GOOMBA =                               new EditorEntityImages.ExistantAsOneInOnlySmbAndSmb3('Stiletto Goomba', 'KutsuKuribo_01',)
    public static readonly STILETTO =                                      new EditorEntityImages.Null()
    public static readonly YOSHI_EGG =                                     new EditorEntityImages.ExistantAsOneInOnlySmwAndNsmbu('Yoshi’s Egg', 'YosshiEgg_00',)
    public static readonly YOSHI =                                         new EditorEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new EditorEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new EditorEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new EditorEntityImages.ExistantAsOneInOnlySmwAndNsmbu('Red Yoshi’s Egg', 'YosshiEggRed_00',)
    public static readonly RED_YOSHI =                                     new EditorEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new EditorEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new EditorEntityImages.ExistantAsOneInNotSmw('Goomba', 'Kuribo_00',)
    public static readonly GALOOMBA =                                      new EditorEntityImages.ExistantAsOneInOnlySmw('Galoomba', 'Kuribo_00',)
    public static readonly GOOMBRAT =                                      new EditorEntityImages.ExistantAsOneInNotSmwAndSm3dw('Goombrat', 'Kuribo_01',)
    public static readonly GOOMBUD =                                       new EditorEntityImages.ExistantAsOneInOnlySmw('Goombud', 'Kuribo_01',)

    public static readonly GREEN_KOOPA_TROOPA =                            new EditorEntityImages.ExistantAsOneInAll('Green Koopa Troopa', 'Nokonoko_00',)
    public static readonly RED_KOOPA_TROOPA =                              new EditorEntityImages.ExistantAsOneInAll('Red Koopa Troopa', 'Nokonoko_01',)
    public static readonly GREEN_BEACH_KOOPA =                             new EditorEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new EditorEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new EditorEntityImages.Null()
    public static readonly RED_KOOPA_SHELL =                               new EditorEntityImages.Null()

    public static readonly DRY_BONES =                                     new EditorEntityImages.ExistantAsOneInAll('Dry Bones', 'Karon_00',)
    public static readonly PARABONES =                                     new EditorEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new EditorEntityImages.Null()
    public static readonly DRY_BONES_SHELL =                               new EditorEntityImages.ExistantAsOneInNotSm3dw('Dry Bones Shell', 'Karon_01',)

    public static readonly BUZZY_BEETLE =                                  new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Buzzy Beetle', 'Met', 0,)
    public static readonly PARA_BEETLE =                                   new EditorEntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Buzzy Shell', 'Met', 1,)

    public static readonly SPINY =                                         new EditorEntityImages.ExistantAsOneInAll('Spiny', 'Togezo_00',)
    public static readonly WINGED_SPINY =                                  new EditorEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new EditorEntityImages.Null()
    public static readonly SPINY_EGG =                                     new EditorEntityImages.Null()
    public static readonly SPINY_SHELL =                                   new EditorEntityImages.ExistantAsOneInNotSm3dw('Spiny Shell', 'Togezo_01',)

    public static readonly SPIKE_TOP =                                     new EditorEntityImages.ExistantAsOneInNotSm3dw('Spike Top', 'TogeMet_00',)
    public static readonly WINGED_SPIKE_TOP =                              new EditorEntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new EditorEntityImages.ExistantAsOneInNotSm3dw('Fast Spike Top', 'TogeMet_01',)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new EditorEntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Skipsqueak', 'Pyonchu_00',)
    public static readonly SPINY_SKIPSQUEAK =                              new EditorEntityImages.ExistantAsOneInOnlySm3dw('Spiny Skipsqueak', 'Pyonchu_01',)

    public static readonly ANT_TROOPER =                                   new EditorEntityImages.ExistantAsOneInOnlySm3dw('Ant Trooper', 'Arihei_00',)
    public static readonly HORNED_ANT_TROOPER =                            new EditorEntityImages.ExistantAsOneInOnlySm3dw('Horned Ant Trooper', 'Arihei_01',)

    public static readonly STINGBY =                                       new EditorEntityImages.ExistantAsOneInOnlySm3dw('Stingby', 'Hacchin_00',)

    public static readonly CHEEP_CHEEP =                                   new EditorEntityImages.ExistantAsCheepCheep()
    public static readonly BLURPS =                                        new EditorEntityImages.ExistantAsOneInOnlySmw('Blurps', 'Pukupuku_00',)
    public static readonly DEEP_CHEEP =                                    new EditorEntityImages.ExistantAsOneInOnlyNsmbu('Deep Cheep', 'Pukupuku_00',)
    public static readonly FISH_BONE =                                     new EditorEntityImages.ExistantAsOneInAll('Fish Bone', 'FishBone_00',)

    public static readonly BLOOPER =                                       new EditorEntityImages.ExistantAsOneInAll('Blooper', 'Gesso_00',)
    public static readonly BLOOPER_NANNY =                                 new EditorEntityImages.ExistantAsOneInNotSm3dw('Blooper Nanny', 'Gesso_01',)
    public static readonly BABY_BLOOPER =                                  new EditorEntityImages.Null()

    public static readonly PORCUPUFFER =                                   new EditorEntityImages.ExistantAsOneInOnlySm3dw('Porcupuffer', 'Fugumannen_00',)

    public static readonly WIGGLER =                                       new EditorEntityImages.ExistantAsOneInNotSm3dw('Wiggler', 'Hanachan_00',)
    public static readonly ANGRY_WIGGLER =                                 new EditorEntityImages.ExistantAsOneInNotSm3dw('Angry Wiggler', 'Hanachan_01',)

    public static readonly PIRANHA_PLANT =                                 new EditorEntityImages.ExistantAsOneInNotSmw('Piranha Plant', 'Pakkun_00',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new EditorEntityImages.ExistantAsOneInOnlySmw('Jumping Piranha Plant', 'Pakkun_00',)
    public static readonly FIRE_PIRANHA_PLANT =                            new EditorEntityImages.ExistantAsOneInAll('Fire Piranha Plant', 'Pakkun_01',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new EditorEntityImages.Null()
    public static readonly MUNCHER =                                       new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Muncher', 'BlackPakkun', 0,)
    public static readonly PIRANHA_CREEPER =                               new EditorEntityImages.ExistantAsTwoInOnlySm3dw('Piranha Creeper', 'PackunPipe_00', 'PackunPipe_01',)

    public static readonly CHAIN_CHOMP =                                   new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Chain Chomp', 'Wanwan', 0,)
    public static readonly UNCHAINED_CHOMP =                               new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Chain Chomp', 'Wanwan', 1,)
    public static readonly CHAIN_CHOMP_STUMP =                             new EditorEntityImages.Null()

    public static readonly SPIKE =                                         new EditorEntityImages.ExistantAsOneInAll('Spike', 'Gabon_00',)
    public static readonly SPIKE_BALL =                                    new EditorEntityImages.ExistantAsSpikeBall()
    public static readonly SNOWBALL =                                      new EditorEntityImages.ExistantAsOneInOnlySnow('Snowball', 'Gabon_snow_01',)

    public static readonly LAKITU =                                        new EditorEntityImages.ExistantAsOneInNotSm3dw('Lakitu', 'Jugem_00',)
    public static readonly LAKITU_CLOUD =                                  new EditorEntityImages.ExistantAsOneInNotSm3dw('Lakitu’s Cloud', 'Jugem_01',)

    public static readonly BOO =                                           new EditorEntityImages.ExistantAsOneInAll('Boo', 'Teresa_00',)
    public static readonly STRETCH =                                       new EditorEntityImages.Null()
    public static readonly BOO_BUDDIES =                                   new EditorEntityImages.ExistantAsOneInNotSm3dw('Boo Buddies', 'Teresa_01',)
    public static readonly PEEPA =                                         new EditorEntityImages.ExistantAsOneInOnlySm3dw('Peepa', 'Teresa_01',)

    public static readonly BOB_OMB =                                       new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3('Bob-omb', 'Bombhei', 0,)
    public static readonly LIT_BOB_OMB =                                   new EditorEntityImages.ExistantAsOneInAll('Lit Bob-omb', 'Bombhei_01',)

    public static readonly POKEY =                                         new EditorEntityImages.ExistantAsOneInAll('Pokey', 'Sambo_00',)
    public static readonly SNOW_POKEY =                                    new EditorEntityImages.ExistantAsOneInOnlySnow('Snow Pokey', 'Sambo_snow_00',)

    public static readonly THWOMP =                                        new EditorEntityImages.ExistantAsOneInAll('Thwomp', 'Dossun_00',)

    public static readonly MONTY_MOLE =                                    new EditorEntityImages.ExistantAsOneInNotSm3dw('Monty Mole', 'ChoroPoo_00',)
    public static readonly ROCKY_WRENCH =                                  new EditorEntityImages.ExistantAsOneInNotSm3dw('Rocky Wrench', 'Poo_00',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new EditorEntityImages.Null()

    public static readonly MAGIKOOPA =                                     new EditorEntityImages.ExistantAsOneInAll('Magikoopa', 'Kameck_00',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new EditorEntityImages.Null()

    public static readonly HAMMER_BRO =                                    new EditorEntityImages.ExistantAsOneInAll('Hammer Bro', 'Bros_00',)
    public static readonly SLEDGE_BRO =                                    new EditorEntityImages.ExistantAsOneInAll('Sledge Bro', 'MegaBros_00',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new EditorEntityImages.Null()
    public static readonly FIRE_BRO =                                      new EditorEntityImages.ExistantAsOneInOnlySm3dw('Fire Bro', 'Bros_01',)
    public static readonly HEAVY_FIRE_BRO =                                new EditorEntityImages.ExistantAsOneInOnlySm3dw('Heavy Fire Bro', 'MegaBros_01',)
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new EditorEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new EditorEntityImages.ExistantAsOneInAll('Lava Bubble', 'Bubble_00',)

    public static readonly MECHAKOOPA =                                    new EditorEntityImages.ExistantAsOneInNotSm3dw('Mechakoopa', 'KoopaMecha_00',)
    public static readonly BLASTA_MECHAKOOPA =                             new EditorEntityImages.ExistantAsOneInNotSm3dw('Blasta Mechakoopa', 'KoopaMecha_01',)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new EditorEntityImages.Null()
    public static readonly ZAPPA_MECHAKOOPA =                              new EditorEntityImages.ExistantAsOneInNotSm3dw('Zappa Mechakoopa', 'KoopaMecha_02',)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new EditorEntityImages.Null()

    public static readonly CHARVAARGH =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Charvaargh', 'MagmaFish_00',)

    public static readonly BULLY =                                         new EditorEntityImages.ExistantAsOneInOnlySm3dw('Bully', 'Donketsu_00',)

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3('Bill Blaster', 'KillerHoudai', 0,)
    public static readonly BULLET_BILL =                                   new EditorEntityImages.Null()
    public static readonly BULL_EYE_BLASTER =                              new EditorEntityImages.ExistantAsOneInAll('Bull’s-Eye Blaster', 'KillerHoudai_01',)
    public static readonly BULL_EYE_BILL =                                 new EditorEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new EditorEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3('Banzai Bill', 'MagnumKiller', 0,)
    public static readonly BULL_EYE_BANZAI =                               new EditorEntityImages.ExistantAsOneInNotSm3dw('Bull’s-Eye Banzai', 'MagnumKiller_01',)
    public static readonly CAT_BANZAI_BILL =                               new EditorEntityImages.ExistantAsOneInOnlySm3dw('Cat Banzai Bill', 'MagnumKiller_01',)

    public static readonly CANNON =                                        new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Cannon', 'Houdai', 0,)
    public static readonly CANNONBALL =                                    new EditorEntityImages.Null()
    public static readonly RED_CANNON =                                    new EditorEntityImages.ExistantAsOneInNotSm3dw('Red Cannon', 'Houdai_01',)
    public static readonly RED_CANNONBALL =                                new EditorEntityImages.Null()

    public static readonly BURNER =                                        new EditorEntityImages.ExistantAsTwoInNotSm3dw('Burner', 'Burner_00', 'Burner_01',)

    public static readonly FIRE_BAR =                                      new EditorEntityImages.ExistantAsOneInNotSm3dw('Fire Bar', 'FireBar_00',)

    public static readonly SKEWER =                                        new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw('Skewer', 'TogeKonbo', 0,)

    public static readonly KOOPA_CLOWN_CAR =                               new EditorEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Koopa Clown Car', 'KoopaClown_00',)
    public static readonly JUNIOR_CLOWN_CAR =                              new EditorEntityImages.ExistantAsOneInOnlyNsmbu('Junior Clown Car', 'KoopaClown_00',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new EditorEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Fire Koopa Clown Car', 'KoopaClown_01',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new EditorEntityImages.ExistantAsOneInOnlyNsmbu('Fire Junior Clown Car', 'KoopaClown_01',)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new EditorEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new EditorEntityImages.ExistantAsOneInOnlySm3dw('Koopa Troopa Car', 'KoopaCar_00',)
    public static readonly CAR =                                           new EditorEntityImages.Null()

    public static readonly GRINDER =                                       new EditorEntityImages.ExistantAsOneInNotSm3dw('Grinder', 'Saw_00',)

    public static readonly ANGRY_SUN =                                     new EditorEntityImages.ExistantAsOneInNotSm3dw('Angry Sun', 'SunMoon_00',)
    public static readonly MOON =                                          new EditorEntityImages.ExistantAsOneInNotSm3dw('Moon', 'SunMoon_01',)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss --------------------

    public static readonly BOWSER =                                        new EditorEntityImages.ExistantAsOneInNotSm3dw('Bowser', 'Koopa_00',)
    public static readonly MEOWSER =                                       new EditorEntityImages.ExistantAsOneInOnlySm3dw('Meowser', 'Koopa_00',)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new EditorEntityImages.Null()
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new EditorEntityImages.Null()

    public static readonly BOWSER_JR =                                     new EditorEntityImages.ExistantAsOneInNotSm3dw('Bowser Jr.', 'KoopaJr_00',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new EditorEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new EditorEntityImages.ExistantAsOneInAll('Boom Boom', 'Bunbun_00',)
    public static readonly POM_POM =                                       new EditorEntityImages.ExistantAsOneInOnlySm3dw('Pom Pom', 'Bunbun_01',)
    public static readonly POM_POM_CLONE =                                 new EditorEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new EditorEntityImages.Null()

    public static readonly LARRY =                                         new EditorEntityImages.ExistantAsOneInNotSm3dw('Larry', 'Larry_00',)
    public static readonly LARRY_WAND =                                    new EditorEntityImages.Null()
    public static readonly LARRY_PROJECTILE =                              new EditorEntityImages.Null()

    public static readonly IGGY =                                          new EditorEntityImages.ExistantAsOneInNotSm3dw('Iggy', 'Iggy_00',)
    public static readonly IGGY_WAND =                                     new EditorEntityImages.Null()
    public static readonly IGGY_PROJECTILE =                               new EditorEntityImages.Null()

    public static readonly WENDY =                                         new EditorEntityImages.ExistantAsOneInNotSm3dw('Wendy', 'Wendy_00',)
    public static readonly WENDY_WAND =                                    new EditorEntityImages.Null()
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new EditorEntityImages.Null()
    public static readonly WENDY_PROJECTILE =                              new EditorEntityImages.Null()

    public static readonly LEMMY =                                         new EditorEntityImages.ExistantAsOneInNotSm3dw('Lemmy', 'Lemmy_00',)
    public static readonly LEMMY_WAND =                                    new EditorEntityImages.Null()
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new EditorEntityImages.Null()
    public static readonly LEMMY_PROJECTILE =                              new EditorEntityImages.Null()

    public static readonly ROY =                                           new EditorEntityImages.ExistantAsOneInNotSm3dw('Roy', 'Roy_00',)
    public static readonly ROY_WAND =                                      new EditorEntityImages.Null()
    public static readonly ROY_PROJECTILE =                                new EditorEntityImages.Null()

    public static readonly MORTON =                                        new EditorEntityImages.ExistantAsOneInNotSm3dw('Morton', 'Morton_00',)
    public static readonly MORTON_WAND =                                   new EditorEntityImages.Null()
    public static readonly MORTON_THROWN_PROJECTILE =                      new EditorEntityImages.Null()
    public static readonly MORTON_GROUND_PROJECTILE =                      new EditorEntityImages.Null()

    public static readonly LUDWIG =                                        new EditorEntityImages.ExistantAsOneInNotSm3dw('Ludwig', 'Ludwig_00',)
    public static readonly LUDWIG_WAND =                                   new EditorEntityImages.Null()
    public static readonly LUDWIG_PROJECTILE =                             new EditorEntityImages.Null()

    //endregion -------------------- Boss --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new EditorEntityImages.ExistantAsOneInNotSm3dw('Bumper', 'Marumaru_00',)

    public static readonly SWINGING_CLAW =                                 new EditorEntityImages.ExistantAsOneInNotSm3dw('Swinging Claw', 'BurankoCrane_00',)

    public static readonly TWISTER =                                       new EditorEntityImages.ExistantAsOneInAll('Twister', 'Tornado_00',)

    public static readonly ONE_WAY_WALL =                                  new EditorEntityImages.ExistantAsOneInNotSm3dw('One-Way Wall', 'Hanatari_00',)

    public static readonly TRACK =                                         new EditorEntityImages.ExistantAsTrack()
    public static readonly TRACK_BLOCK =                                   new EditorEntityImages.ExistantAsTwoInOnlySm3dw('Track Block', 'OrbitBlock_00', 'OrbitBlock_01',)

    public static readonly VINE =                                          new EditorEntityImages.ExistantAsOneInNotSm3dw('Vine', 'TsutaBlock_00',)
    public static readonly TREE =                                          new EditorEntityImages.ExistantAsTree()

    public static readonly STARTING_ARROW =                                new EditorEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new EditorEntityImages.ExistantAsOneInAll('Arrow Sign', 'Yajirushi_00',)

    public static readonly CHECKPOINT_FLAG =                               new EditorEntityImages.ExistantAsOneInAll('Checkpoint Flag', 'MiddleFlag_00',)
    public static readonly GOAL_POLE =                                     new EditorEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new EditorEntityImages.Null()
    public static readonly GIANT_GATE =                                    new EditorEntityImages.Null()

    public static readonly CASTLE =                                        new EditorEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new EditorEntityImages.Null()
    public static readonly AXE =                                           new EditorEntityImages.Null()

    public static readonly DASH_BLOCK =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Dash Block', 'DashBlock_00',)

    public static readonly SNAKE_BLOCK =                                   new EditorEntityImages.ExistantAsOneInAll('Snake Block', 'SnakeBlock_00',)
    public static readonly FAST_SNAKE_BLOCK =                              new EditorEntityImages.ExistantAsOneInAll('Fast Snake Block', 'SnakeBlock_01',)

    public static readonly CONVEYOR_BELT =                                 new EditorEntityImages.ExistantAsTwoInAll('Conveyor Belt', 'BeltConveyor_00', 'SlopeConveyor_00',)
    public static readonly FAST_CONVEYOR_BELT =                            new EditorEntityImages.ExistantAsTwoInAll('Fast Conveyor Belt', 'BeltConveyor_01', 'SlopeConveyor_01',)

    public static readonly MUSHROOM_TRAMPOLINE =                           new EditorEntityImages.ExistantAsTwoInOnlySm3dw('Mushroom Trampoline', 'Trampoline_00', 'Trampoline_01',)
    public static readonly ON_OFF_TRAMPOLINE =                             new EditorEntityImages.ExistantAsTwoInOnlySm3dw('ON/OFF Trampoline', 'OnOffTrampoline_00', 'OnOffTrampoline_01',)

    public static readonly LIFT =                                          new EditorEntityImages.ExistantAsOneInNotSm3dw('Lift', 'Lift_00',)
    public static readonly FLIMSY_LIFT =                                   new EditorEntityImages.ExistantAsOneInNotSm3dw('Flimsy Lift', 'Lift_01',)
    public static readonly CLOUD_LIFT =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Cloud Lift', 'Lift_00',)

    public static readonly SEESAW =                                        new EditorEntityImages.ExistantAsOneInNotSm3dw('Seesaw', 'Seesaw_00',)

    public static readonly LAVA_LIFT =                                     new EditorEntityImages.ExistantAsOneInNotSm3dw('Lava Lift', 'YouganLift_00',)
    public static readonly FAST_LAVA_LIFT =                                new EditorEntityImages.ExistantAsOneInNotSm3dw('Fast Lava Lift', 'YouganLift_01',)

    public static readonly CRATE =                                         new EditorEntityImages.ExistantAsOneInOnlySm3dw('Crate', 'WoodBox_00',)

    public static readonly KEY =                                           new EditorEntityImages.ExistantAsOneInAll('Key', 'Key_00',)
    public static readonly CURSED_KEY =                                    new EditorEntityImages.ExistantAsOneInOnlySmb('Cursed Key', 'Key_01',)
    public static readonly PHANTO =                                        new EditorEntityImages.Null()

    public static readonly TRAMPOLINE =                                    new EditorEntityImages.ExistantAsTwoInAll('Trampoline', 'JumpStep_00', 'JumpStep_01',)
    public static readonly HOP_CHOPS =                                     new EditorEntityImages.ExistantAsOneInOnlySm3dw('Hop-Chops', 'Hopper_00',)

    public static readonly POW_BLOCK =                                     new EditorEntityImages.ExistantAsOneInAll('POW Block', 'PowBlock_00',)
    public static readonly RED_POW_BLOCK =                                 new EditorEntityImages.ExistantAsOneInOnlySm3dw('Red POW Block', 'PowBlock_01',)

    public static readonly P_SWITCH =                                      new EditorEntityImages.ExistantAsOneInAll('P Switch', 'PSwitch_00',)

    public static readonly STONE =                                         new EditorEntityImages.Null()

    public static readonly WARP_DOOR =                                     new EditorEntityImages.ExistantAsOneInAll('Warp Door', 'Door_00',)
    public static readonly P_WARP_DOOR =                                   new EditorEntityImages.ExistantAsOneInAll('P Warp Door', 'Door_01',)
    public static readonly KEY_DOOR =                                      new EditorEntityImages.ExistantAsOneInAll('Key Door', 'Door_02',)

    public static readonly WARP_BOX =                                      new EditorEntityImages.ExistantAsOneInOnlySm3dw('Warp Box', 'WarpBox_00',)
    public static readonly WARP_BOX_WITH_KEY =                             new EditorEntityImages.ExistantAsOneInOnlySm3dw('Warp Box (With Key)', 'WarpBox_01',)

    public static readonly WING =                                          new EditorEntityImages.ExistantAsOneInAll('Wing', 'Wing_00',)
    public static readonly PARACHUTE =                                     new EditorEntityImages.ExistantAsOneInAll('Parachute', 'parachute_00',)

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
