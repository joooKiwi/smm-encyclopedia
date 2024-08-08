import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  from 'core/entity/Entities.types'
import type {EditorImageFile, EditorImageFileAsBlueVariant, EditorImageFileAsBlueVariantExcludingSm3dw, EditorImageFileAsBrickBlock, EditorImageFileAsBridge, EditorImageFileAsCheepCheep, EditorImageFileAsCloudBlock, EditorImageFileAsCristalBlock, EditorImageFileAsGroundOrSlope, EditorImageFileAsHardBlock, EditorImageFileAsMushroomPlatform, EditorImageFileAsNightSnowInSmb3, EditorImageFileAsNightSnowInSmb3ExcludingSm3dw, EditorImageFileAsNightSnowInSmbAndSmb3, EditorImageFileAsNightSnowInSmbAndSmb3ExcludingSm3dw, EditorImageFileAsPipe, EditorImageFileAsSemisolidPlatform, EditorImageFileAsSpikeBall, EditorImageFileAsTree} from 'core/entity/file/EntityImageFile'
import type {EditorImage}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/entity/images/editor/EditorImage'
import type {ClassWithImage}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'util/ClassWithImage'

import {Entities}             from 'core/entity/Entities'
import {editorImage}          from 'core/entity/file/fileCreator'
import {EditorImageContainer} from 'core/entity/images/editor/EditorImage.container'
import {EmptyEditorImage}     from 'core/entity/images/editor/EmptyEditorImage'
import {GameStyles}           from 'core/gameStyle/GameStyles'
import {Themes}               from 'core/theme/Themes'
import {Times}                from 'core/time/Times'

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
        abstract class ExistantEditorEntityImages<const NAME extends PossibleEnglishName, >
            extends EditorEntityImages {

            readonly #englishName

            public constructor(englishName: NAME,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME { return this.#englishName }

        }

        return ExistantEditorEntityImages
    })()

    //region -------------------- Sub class (one in all game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} for each {@link GameStyles} */
    private static readonly ExistantAsOneInAll = class ExistantAsOneInAllEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<GameStyles, FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<GameStyles, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<GameStyles, FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName, smb,),],
                [time, smb3, theme, editorImage(this, fileName, smb3,),],
                [time, smw, theme, editorImage(this, fileName, smw,),],
                [time, nsmbu, theme, editorImage(this, fileName, nsmbu,),],
                [time, sm3dw, theme, editorImage(this, fileName, sm3dw,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} in the {@link Themes.SNOW snow theme}
     */
    private static readonly ExistantAsOneInOnlySnow = class ExistantAsOneInAllEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<GameStyles, FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<GameStyles, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const theme = Themes.SNOW
            return this.#image = new EditorImageContainer<EditorImageFile<GameStyles, FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName, smb,),],
                [time, smb3, theme, editorImage(this, fileName, smb3,),],
                [time, smw, theme, editorImage(this, fileName, smw,),],
                [time, nsmbu, theme, editorImage(this, fileName, nsmbu,),],
                [time, sm3dw, theme, editorImage(this, fileName, sm3dw,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (one in all game style) --------------------
    //region -------------------- Sub class (one in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in 1 {@link GameStyles} */
    private static readonly ExistantAsOneIn1GameStyle = class ExistantAsOneIn1GameStyleEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const GAME_STYLE extends GameStyles, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        readonly #gameStyle
        readonly #theme
        #image?: EditorImage<EditorImageFile<GAME_STYLE, FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME, gameStyle: GAME_STYLE, theme: Themes,) {
            super(englishName,)
            this.#fileName = fileName
            this.#gameStyle = gameStyle
            this.#theme = theme
        }

        public override get image(): EditorImage<EditorImageFile<GAME_STYLE, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const gameStyle = this.#gameStyle
            return this.#image = new EditorImageContainer([[Times.DAY, gameStyle, this.#theme, editorImage(this, this.#fileName, gameStyle,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_BROS SMB} */
    private static readonly ExistantAsOneInOnlySmb = class ExistantAsOneInOnlySmbEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const gameStyle = GameStyles.SUPER_MARIO_BROS
            return this.#image = new EditorImageContainer([[Times.DAY, gameStyle, Themes.GROUND, editorImage(this, this.#fileName, gameStyle,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_WORLD SMW} */
    private static readonly ExistantAsOneInOnlySmw = class ExistantAsOneInOnlySmwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_WORLD'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_WORLD'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const gameStyle = GameStyles.SUPER_MARIO_WORLD
            return this.#image = new EditorImageContainer([[Times.DAY, gameStyle, Themes.GROUND, editorImage(this, this.#fileName, gameStyle,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    private static readonly ExistantAsOneInOnlyNsmbu = class ExistantAsOneInOnlyNsmbuEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles['NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const gameStyle = GameStyles.NEW_SUPER_MARIO_BROS_U
            return this.#image = new EditorImageContainer([[Times.DAY, gameStyle, Themes.GROUND, editorImage(this, this.#fileName, gameStyle,),],],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    private static readonly ExistantAsOneInOnlySm3dw = class ExistantAsOneInOnlySm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const gameStyle = GameStyles.SUPER_MARIO_3D_WORLD
            return this.#image = new EditorImageContainer([[Times.DAY, gameStyle, Themes.GROUND, editorImage(this, this.#fileName, gameStyle,),],],)
        }

    }

    //endregion -------------------- Sub class (one in 1 specific game style) --------------------
    //region -------------------- Sub class (one in 2 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}
     */
    private static readonly ExistantAsOneInOnlySmbAndSmb3 = class ExistantAsOneInOnlySmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3'], FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName, smb,),],
                [time, smb3, theme, editorImage(this, fileName, smb3,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link GameStyles.SUPER_MARIO_WORLD SMW} and {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU}
     */
    private static readonly ExistantAsOneInOnlySmwAndNsmbu = class ExistantAsOneInOnlySmwAndNsmbuEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>([
                [time, smw, theme, editorImage(this, fileName, smw,),],
                [time, nsmbu, theme, editorImage(this, fileName, nsmbu,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (one in 2 specific game style) --------------------
    //region -------------------- Sub class (one in 3 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} and {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU}
     */
    private static readonly ExistantAsOneInNotSmwAndSm3dw = class ExistantAsOneInNotSmwAndSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<Exclude<GameStyles, typeof GameStyles[| 'SUPER_MARIO_WORLD' | 'SUPER_MARIO_3D_WORLD']>, FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<Exclude<GameStyles, typeof GameStyles[| 'SUPER_MARIO_WORLD' | 'SUPER_MARIO_3D_WORLD']>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<Exclude<GameStyles, typeof GameStyles[| 'SUPER_MARIO_WORLD' | 'SUPER_MARIO_3D_WORLD']>, FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName, smb,),],
                [time, smb3, theme, editorImage(this, fileName, smb3,),],
                [time, nsmbu, theme, editorImage(this, fileName, nsmbu,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * in only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} and {@link GameStyles.SUPER_MARIO_WORLD SMW}
     */
    private static readonly ExistantAsOneInNotNsmbuAndSm3dw = class ExistantAsOneInNotNsmbuAndSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<Exclude<GameStyles, typeof GameStyles[| 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD']>, FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<Exclude<GameStyles, typeof GameStyles[| 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD']>, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<Exclude<GameStyles, typeof GameStyles[| 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD']>, FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName, smb,),],
                [time, smb3, theme, editorImage(this, fileName, smb3,),],
                [time, smw, theme, editorImage(this, fileName, smw,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (one in 3 specific game style) --------------------
    //region -------------------- Sub class (one in 4 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link GameStyles.SUPER_MARIO_WORLD SMW}
     */
    private static readonly ExistantAsOneInNotSmw = class ExistantAsOneInNotSmwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName, smb,),],
                [time, smb3, theme, editorImage(this, fileName, smb3,),],
                [time, nsmbu, theme, editorImage(this, fileName, nsmbu,),],
                [time, sm3dw, theme, editorImage(this, fileName, sm3dw,),],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 1 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}
     */
    private static readonly ExistantAsOneInNotSm3dw = class ExistantAsOneInNotSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName, smb,),],
                [time, smb3, theme, editorImage(this, fileName, smb3,),],
                [time, smw, theme, editorImage(this, fileName, smw,),],
                [time, nsmbu, theme, editorImage(this, fileName, nsmbu,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (one in 4 specific game style) --------------------
    //region -------------------- Sub class (one + one night snow) --------------------

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_WORLD SMW},
     * {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} and {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}) only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmb3 = class ExistantAsOnePlusOneNightSnowInSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        readonly #nightSnowFileName
        #image?: EditorImage<EditorImageFileAsNightSnowInSmb3<FILE_NAME_1, FILE_NAME_2, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override get image(): EditorImage<EditorImageFileAsNightSnowInSmb3<FILE_NAME_1, FILE_NAME_2, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const nightSnowFileName = this.#nightSnowFileName
            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return this.#image = new EditorImageContainer<EditorImageFileAsNightSnowInSmb3<FILE_NAME_1, FILE_NAME_2, NAME>>([
                [day,   smb,   ground, editorImage(this, fileName, smb,),],

                [day,   smb3,  ground, editorImage(this, fileName, smb3,),],
                [night, smb3,  snow,   editorImage(this, nightSnowFileName, smb3,),],

                [day,   smw,   ground, editorImage(this, fileName, smw,),],

                [day,   nsmbu, ground, editorImage(this, fileName, nsmbu,),],

                [day,   sm3dw, ground, editorImage(this, fileName, sm3dw,),],
            ],)
        }

    }

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_WORLD SMW} and {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmb3ButNotSm3dw = class ExistantAsOnePlusOneNightSnowInSmb3ButNotSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        readonly #nightSnowFileName
        #image?: EditorImage<EditorImageFileAsNightSnowInSmb3ExcludingSm3dw<FILE_NAME_1, FILE_NAME_2, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override get image(): EditorImage<EditorImageFileAsNightSnowInSmb3ExcludingSm3dw<FILE_NAME_1, FILE_NAME_2, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const nightSnowFileName = this.#nightSnowFileName
            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return this.#image = new EditorImageContainer<EditorImageFileAsNightSnowInSmb3ExcludingSm3dw<FILE_NAME_1, FILE_NAME_2, NAME>>([
                [day,   smb,   ground, editorImage(this, fileName, smb,),],

                [day,   smb3,  ground, editorImage(this, fileName, smb3,),],
                [night, smb3,  snow,   editorImage(this, nightSnowFileName, smb3,),],

                [day,   smw,   ground, editorImage(this, fileName, smw,),],

                [day,   nsmbu, ground, editorImage(this, fileName, nsmbu,),],
            ],)
        }

    }


    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link GameStyles.SUPER_MARIO_WORLD SMW}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} and {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmbAndSmb3 = class ExistantAsOnePlusOneNightSnowInSmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        readonly #nightSnowFileName
        #image?: EditorImage<EditorImageFileAsNightSnowInSmbAndSmb3<FILE_NAME_1, FILE_NAME_2, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override get image(): EditorImage<EditorImageFileAsNightSnowInSmbAndSmb3<FILE_NAME_1, FILE_NAME_2, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const nightSnowFileName = this.#nightSnowFileName
            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return this.#image = new EditorImageContainer<EditorImageFileAsNightSnowInSmbAndSmb3<FILE_NAME_1, FILE_NAME_2, NAME>>([
                [day,   smb,   ground, editorImage(this, fileName, smb,),],
                [night, smb,   snow,   editorImage(this, nightSnowFileName, smb,),],

                [day,   smb3,  ground, editorImage(this, fileName, smb3,),],
                [night, smb3,  snow,   editorImage(this, nightSnowFileName, smb3,),],

                [day,   smw,   ground, editorImage(this, fileName, smw,),],

                [day,   nsmbu, ground, editorImage(this, fileName, nsmbu,),],

                [day,   sm3dw, ground, editorImage(this, fileName, sm3dw,),],
            ],)
        }

    }

    /**
     * A subclass of a {@link EditorEntityImages} to hold 2 images in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}.
     * One in the {@link Themes.GROUND ground} and the other in {@link Times.NIGHT night} {@link Themes.SNOW snow}.
     * The others ({@link GameStyles.SUPER_MARIO_WORLD SMW} and {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
     * only have the {@link Themes.GROUND ground theme}.
     */
    private static readonly ExistantAsOnePlusOneNightSnowInSmbAndSmb3ButNotSm3dw = class ExistantAsOnePlusOneNightSnowInSmbAndSmb3ExcludingSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        readonly #nightSnowFileName
        #image?: EditorImage<EditorImageFileAsNightSnowInSmbAndSmb3ExcludingSm3dw<FILE_NAME_1, FILE_NAME_2, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME_1, nightSnowFileName:FILE_NAME_2,) {
            super(englishName,)
            this.#fileName = fileName
            this.#nightSnowFileName = nightSnowFileName
        }

        public override get image(): EditorImage<EditorImageFileAsNightSnowInSmbAndSmb3ExcludingSm3dw<FILE_NAME_1, FILE_NAME_2, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const nightSnowFileName = this.#nightSnowFileName
            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return this.#image = new EditorImageContainer<EditorImageFileAsNightSnowInSmbAndSmb3ExcludingSm3dw<FILE_NAME_1, FILE_NAME_2, NAME>>([
                [day,   smb,   ground, editorImage(this, fileName, smb,),],
                [night, smb,   snow,   editorImage(this, nightSnowFileName, smb,),],

                [day,   smb3,  ground, editorImage(this, fileName, smb3,),],
                [night, smb3,  snow,   editorImage(this, nightSnowFileName, smb3,),],

                [day,   smw,   ground, editorImage(this, fileName, smw,),],

                [day,   nsmbu, ground, editorImage(this, fileName, nsmbu,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (one + one night snow) --------------------
    //region -------------------- Sub class (one as a blue variant) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold a blue variation of {@link EditorImageFile}
     * on the {@link Themes} in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}.
     *
     * {@link GameStyles.SUPER_MARIO_WORLD SMW}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU}
     * and {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} only have 1 {@link EditorImageFile}.
     */
    private static readonly ExistantAsBlueVariantInSmbAndSmb3 = class ExistantAsBlueVariantInSmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const NUMBER extends | 0 | 1, >
        extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        readonly #number
        #image?: EditorImage<EditorImageFileAsBlueVariant<FILE_NAME, NUMBER, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME, number: NUMBER,) {
            super(englishName,)
            this.#fileName = fileName
            this.#number = number
        }

        public override get image(): EditorImage<EditorImageFileAsBlueVariant<FILE_NAME, NUMBER, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const number = this.#number
            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
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
            return this.#image = new EditorImageContainer<EditorImageFileAsBlueVariant<FILE_NAME, NUMBER, NAME>>([
                [day,   smb,   ground,      editorImage(this, `${fileName}_0${number}`, smb,)],
                [night, smb,   ground,      editorImage(this, `${fileName}_plain_night_0${number}`, smb,)],
                [day,   smb,   underground, editorImage(this, `${fileName}_underground_0${number}`, smb,)],
                [night, smb,   underwater,  editorImage(this, `${fileName}_water_night_0${number}`, smb,)],
                [night, smb,   desert,      editorImage(this, `${fileName}_desert_night_0${number}`, smb,)],
                [night, smb,   snow,        editorImage(this, `${fileName}_snow_night_0${number}`, smb,)],
                [night, smb,   sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, smb,)],
                [night, smb,   forest,      editorImage(this, `${fileName}_woods_night_0${number}`, smb,)],
                [day,   smb,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, smb,)],
                [night, smb,   airship,     editorImage(this, `${fileName}_airship_night_0${number}`, smb,)],
                [day,   smb,   castle,      editorImage(this, `${fileName}_castle_0${number}`, smb,)],

                [day,   smb3,  ground,      editorImage(this, `${fileName}_0${number}`, smb3,)],
                [night, smb3,  ground,      editorImage(this, `${fileName}_plain_night_0${number}`, smb3,)],
                [day,   smb3,  underground, editorImage(this, `${fileName}_underground_0${number}`, smb3,)],
                [day,   smb3,  underwater,  editorImage(this, `${fileName}_water_0${number}`, smb3,)],
                [day,   smb3,  desert,      editorImage(this, `${fileName}_desert_0${number}`, smb3,)],
                [night, smb3,  snow,        editorImage(this, `${fileName}_snow_night_0${number}`, smb3,)],
                [night, smb3,  sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, smb3,)],
                [night, smb3,  forest,      editorImage(this, `${fileName}_woods_night_0${number}`, smb3,)],
                [day,   smb3,  ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, smb3,)],
                [night, smb3,  airship,     editorImage(this, `${fileName}_airship_night_0${number}`, smb3,)],
                [day,   smb3,  castle,      editorImage(this, `${fileName}_castle_0${number}`, smb3,)],

                [day,   smw,   ground,      editorImage(this, `${fileName}_0${number}`, smw,)],

                [day,   nsmbu, ground,      editorImage(this, `${fileName}_0${number}`, nsmbu,)],

                [day,   sm3dw, ground,      editorImage(this, `${fileName}_0${number}`, sm3dw,)],
            ],)
        }

    }

    /**
     * A subclass of an {@link EditorEntityImages} to hold a blue variation of {@link EditorImageFile}
     * on the {@link Themes} in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}.
     *
     * {@link GameStyles.SUPER_MARIO_WORLD SMW} and {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU}
     * only have 1 {@link EditorImageFile}.
     */
    private static readonly ExistantAsBlueVariantInSmbAndSmb3ButNotSm3dw = class ExistantAsBlueVariantInSmbAndSmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string,
        const NUMBER extends | 0 | 1, >
        extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        readonly #number
        #image?: EditorImage<EditorImageFileAsBlueVariantExcludingSm3dw<FILE_NAME, NUMBER, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME, number: NUMBER,) {
            super(englishName,)
            this.#fileName = fileName
            this.#number = number
        }

        public override get image(): EditorImage<EditorImageFileAsBlueVariantExcludingSm3dw<FILE_NAME, NUMBER, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const number = this.#number
            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
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
            return this.#image = new EditorImageContainer<EditorImageFileAsBlueVariantExcludingSm3dw<FILE_NAME, NUMBER, NAME>>([
                [day,   smb,   ground,      editorImage(this, `${fileName}_0${number}`, smb,)],
                [night, smb,   ground,      editorImage(this, `${fileName}_plain_night_0${number}`, smb,)],
                [day,   smb,   underground, editorImage(this, `${fileName}_underground_0${number}`, smb,)],
                [night, smb,   underwater,  editorImage(this, `${fileName}_water_night_0${number}`, smb,)],
                [night, smb,   desert,      editorImage(this, `${fileName}_desert_night_0${number}`, smb,)],
                [night, smb,   snow,        editorImage(this, `${fileName}_snow_night_0${number}`, smb,)],
                [night, smb,   sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, smb,)],
                [night, smb,   forest,      editorImage(this, `${fileName}_woods_night_0${number}`, smb,)],
                [day,   smb,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, smb,)],
                [night, smb,   airship,     editorImage(this, `${fileName}_airship_night_0${number}`, smb,)],
                [day,   smb,   castle,      editorImage(this, `${fileName}_castle_0${number}`, smb,)],

                [day,   smb3,  ground,      editorImage(this, `${fileName}_0${number}`, smb3,)],
                [night, smb3,  ground,      editorImage(this, `${fileName}_plain_night_0${number}`, smb3,)],
                [day,   smb3,  underground, editorImage(this, `${fileName}_underground_0${number}`, smb3,)],
                [day,   smb3,  underwater,  editorImage(this, `${fileName}_water_0${number}`, smb3,)],
                [day,   smb3,  desert,      editorImage(this, `${fileName}_desert_0${number}`, smb3,)],
                [night, smb3,  snow,        editorImage(this, `${fileName}_snow_night_0${number}`, smb3,)],
                [night, smb3,  sky,         editorImage(this, `${fileName}_athletic_night_0${number}`, smb3,)],
                [night, smb3,  forest,      editorImage(this, `${fileName}_woods_night_0${number}`, smb3,)],
                [day,   smb3,  ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_0${number}`, smb3,)],
                [night, smb3,  airship,     editorImage(this, `${fileName}_airship_night_0${number}`, smb3,)],
                [day,   smb3,  castle,      editorImage(this, `${fileName}_castle_0${number}`, smb3,)],

                [day,   smw,   ground,      editorImage(this, `${fileName}_0${number}`, smw,)],

                [day,   nsmbu, ground,      editorImage(this, `${fileName}_0${number}`, nsmbu,)],
            ],)
        }

    }

    //endregion -------------------- Sub class (one as a blue variant) --------------------
    //region -------------------- Sub class (two in all game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} for each {@link GameStyles} */
    private static readonly ExistantAsTwoInAll = class ExistantAsTwoInAllEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        #image?: EditorImage<EditorImageFile<GameStyles, FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override get image(): EditorImage<EditorImageFile<GameStyles, FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<GameStyles, FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName1, smb,),],
                [time, smb, theme, editorImage(this, fileName2, smb,),],

                [time, smb3, theme, editorImage(this, fileName1, smb3,),],
                [time, smb3, theme, editorImage(this, fileName2, smb3,),],

                [time, smw, theme, editorImage(this, fileName1, smw,),],
                [time, smw, theme, editorImage(this, fileName2, smw,),],

                [time, nsmbu, theme, editorImage(this, fileName1, nsmbu,),],
                [time, nsmbu, theme, editorImage(this, fileName2, nsmbu,),],

                [time, sm3dw, theme, editorImage(this, fileName1, sm3dw,),],
                [time, sm3dw, theme, editorImage(this, fileName2, sm3dw,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (two in all game style) --------------------
    //region -------------------- Sub class (two in 1 specific game style) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_BROS SMB} */
    private static readonly ExistantAsTwoInOnlySmb = class ExistantAsTwoInOnlySmbEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.SUPER_MARIO_BROS
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS'], FILE_NAME, NAME>>([
                [time, gameStyle, theme, editorImage(this, this.#fileName1, gameStyle,),],
                [time, gameStyle, theme, editorImage(this, this.#fileName2, gameStyle,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} */
    private static readonly ExistantAsTwoInOnlySmb3 = class ExistantAsTwoInOnlySmb3EditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS_3'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS_3'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.SUPER_MARIO_BROS_3
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles['SUPER_MARIO_BROS_3'], FILE_NAME, NAME>>([
                [time, gameStyle, theme, editorImage(this, this.#fileName1, gameStyle,),],
                [time, gameStyle, theme, editorImage(this, this.#fileName2, gameStyle,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_WORLD SMW} */
    private static readonly ExistantAsTwoInOnlySmw = class ExistantAsTwoInOnlySmwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_WORLD'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_WORLD'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.SUPER_MARIO_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles['SUPER_MARIO_WORLD'], FILE_NAME, NAME>>([
                [time, gameStyle, theme, editorImage(this, this.#fileName1, gameStyle,),],
                [time, gameStyle, theme, editorImage(this, this.#fileName2, gameStyle,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    private static readonly ExistantAsTwoInOnlyNsmbu = class ExistantAsTwoInOnlyNsmbuEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        #image?: EditorImage<EditorImageFile<typeof GameStyles['NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.NEW_SUPER_MARIO_BROS_U
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles['NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>([
                [time, gameStyle, theme, editorImage(this, this.#fileName1, gameStyle,),],
                [time, gameStyle, theme, editorImage(this, this.#fileName2, gameStyle,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    private static readonly ExistantAsTwoInOnlySm3dw = class ExistantAsTwoInOnlySm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.SUPER_MARIO_3D_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>>([
                [time, gameStyle, theme, editorImage(this, this.#fileName1, gameStyle,),],
                [time, gameStyle, theme, editorImage(this, this.#fileName2, gameStyle,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (two in 1 specific game style) --------------------
    //region -------------------- Sub class (two in 4 specific game style) --------------------

    /**
     * A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 2 {@link EditorImageFile}
     * for each {@link GameStyles} excluding {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}
     */
    private static readonly ExistantAsTwoInNotSm3dw = class ExistantAsTwoInNotSm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        #image?: EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles[| 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U'], FILE_NAME, NAME>>([
                [time, smb, theme, editorImage(this, fileName1, smb,),],
                [time, smb, theme, editorImage(this, fileName2, smb,),],

                [time, smb3, theme, editorImage(this, fileName1, smb3,),],
                [time, smb3, theme, editorImage(this, fileName2, smb3,),],

                [time, smw, theme, editorImage(this, fileName1, smw,),],
                [time, smw, theme, editorImage(this, fileName2, smw,),],

                [time, nsmbu, theme, editorImage(this, fileName1, nsmbu,),],
                [time, nsmbu, theme, editorImage(this, fileName2, nsmbu,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (two in 4 specific game style) --------------------
    //region -------------------- Sub class (three) --------------------

    /** A subclass of an {@link EditorEntityImages} to hold an existant {@link EditorImage} as 3 {@link EditorImageFile} in only {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    private static readonly ExistantAsThreeInOnlySm3dw = class ExistantAsThreeInOnlySm3dwEditorEntityImages<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, > extends EditorEntityImages.Existant<NAME> {

        readonly #fileName1
        readonly #fileName2
        readonly #fileName3
        #image?: EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, fileName3: FILE_NAME,) {
            super(englishName,)
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#fileName3 = fileName3
        }

        public override get image(): EditorImage<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.SUPER_MARIO_3D_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFile<typeof GameStyles['SUPER_MARIO_3D_WORLD'], FILE_NAME, NAME>>([
                [time, gameStyle, theme, editorImage(this, this.#fileName1, gameStyle,),],
                [time, gameStyle, theme, editorImage(this, this.#fileName2, gameStyle,),],
                [time, gameStyle, theme, editorImage(this, this.#fileName3, gameStyle,),],
            ],)
        }

    }

    //endregion -------------------- Sub class (three) --------------------
    //region -------------------- Sub class (predefined) --------------------

    /** A subclass of an {@link EditorEntityImages} for only the {@link GROUND}, {@link STEEP_SLOPE} and {@link GENTLE_SLOPE} */
    private static readonly ExistantAsGroundOrSlope = class ExistantAsGroundOrSlope<const NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends EditorEntityImages.Existant<NAME> {

        readonly #fileName
        #image?: EditorImage<EditorImageFileAsGroundOrSlope<FILE_NAME, NAME>>

        public constructor(englishName: NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#fileName = fileName
        }

        public override get image(): EditorImage<EditorImageFileAsGroundOrSlope<FILE_NAME, NAME>> {
            const value = this.#image
            if (value != null)
                return value

            const fileName = this.#fileName
            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
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
            return this.#image = new EditorImageContainer<EditorImageFileAsGroundOrSlope<FILE_NAME, NAME>>([
                [day,   smb,   ground,      editorImage(this, `${fileName}_00`, smb,),],
                [day,   smb,   underground, editorImage(this, `${fileName}_underground_00`, smb,),],
                [day,   smb,   underwater,  editorImage(this, `${fileName}_water_00`, smb,),],
                [day,   smb,   desert,      editorImage(this, `${fileName}_desert_00`, smb,),],
                [day,   smb,   snow,        editorImage(this, `${fileName}_snow_00`, smb,),],
                [day,   smb,   sky,         editorImage(this, `${fileName}_athletic_00`, smb,),],
                [day,   smb,   forest,      editorImage(this, `${fileName}_woods_00`, smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, smb,),],
                [day,   smb,   airship,     editorImage(this, `${fileName}_airship_00`, smb,),],
                [night, smb,   airship,     editorImage(this, `${fileName}_airship_night_00`, smb,),],
                [day,   smb,   castle,      editorImage(this, `${fileName}_castle_00`, smb,),],

                [day,   smb3,  ground,      editorImage(this, `${fileName}_00`, smb3,),],
                [day,   smb3,  underground, editorImage(this, `${fileName}_underground_00`, smb3,),],
                [day,   smb3,  underwater,  editorImage(this, `${fileName}_water_00`, smb3,),],
                [day,   smb3,  desert,      editorImage(this, `${fileName}_desert_00`, smb3,),],
                [day,   smb3,  snow,        editorImage(this, `${fileName}_snow_00`, smb3,),],
                [night, smb3,  snow,        editorImage(this, `${fileName}_snow_night_00`, smb3,),],
                [day,   smb3,  sky,         editorImage(this, `${fileName}_athletic_00`, smb3,),],
                [day,   smb3,  forest,      editorImage(this, `${fileName}_woods_00`, smb3,),],
                [day,   smb3,  ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, smb3,),],
                [day,   smb3,  airship,     editorImage(this, `${fileName}_airship_00`, smb3,),],
                [night, smb3,  airship,     editorImage(this, `${fileName}_airship_night_00`, smb3,),],
                [day,   smb3,  castle,      editorImage(this, `${fileName}_castle_00`, smb3,),],
                [night, smb3,  castle,      editorImage(this, `${fileName}_castle_night_00`, smb3,),],

                [day,   smw,   ground,      editorImage(this, `${fileName}_00`, smw,),],
                [day,   smw,   underground, editorImage(this, `${fileName}_underground_00`, smw,),],
                [day,   smw,   underwater,  editorImage(this, `${fileName}_water_00`, smw,),],
                [night, smw,   underwater,  editorImage(this, `${fileName}_water_night_00`, smw,),],
                [day,   smw,   desert,      editorImage(this, `${fileName}_desert_00`, smw,),],
                [day,   smw,   snow,        editorImage(this, `${fileName}_snow_00`, smw,),],
                [night, smw,   snow,        editorImage(this, `${fileName}_snow_night_00`, smw,),],
                [day,   smw,   sky,         editorImage(this, `${fileName}_athletic_00`, smw,),],
                [day,   smw,   forest,      editorImage(this, `${fileName}_woods_00`, smw,),],
                [day,   smw,   ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, smw,),],
                [day,   smw,   airship,     editorImage(this, `${fileName}_airship_00`, smw,),],
                [day,   smw,   castle,      editorImage(this, `${fileName}_castle_00`, smw,),],

                [day,   nsmbu, ground,      editorImage(this, `${fileName}_00`, nsmbu,),],
                [day,   nsmbu, underground, editorImage(this, `${fileName}_underground_00`, nsmbu,),],
                [day,   nsmbu, underwater,  editorImage(this, `${fileName}_water_00`, nsmbu,),],
                [day,   nsmbu, desert,      editorImage(this, `${fileName}_desert_00`, nsmbu,),],
                [day,   nsmbu, snow,        editorImage(this, `${fileName}_snow_00`, nsmbu,),],
                [night, nsmbu, snow,        editorImage(this, `${fileName}_snow_night_00`, nsmbu,),],
                [day,   nsmbu, sky,         editorImage(this, `${fileName}_athletic_00`, nsmbu,),],
                [day,   nsmbu, forest,      editorImage(this, `${fileName}_woods_00`, nsmbu,),],
                [day,   nsmbu, ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, nsmbu,),],
                [day,   nsmbu, airship,     editorImage(this, `${fileName}_airship_00`, nsmbu,),],
                [night, nsmbu, airship,     editorImage(this, `${fileName}_airship_night_00`, nsmbu,),],
                [day,   nsmbu, castle,      editorImage(this, `${fileName}_castle_00`, nsmbu,),],

                [day,   sm3dw, ground,      editorImage(this, `${fileName}_00`, sm3dw,),],
                [day,   sm3dw, underground, editorImage(this, `${fileName}_underground_00`, sm3dw,),],
                [day,   sm3dw, underwater,  editorImage(this, `${fileName}_water_00`, sm3dw,),],
                [day,   sm3dw, desert,      editorImage(this, `${fileName}_desert_00`, sm3dw,),],
                [day,   sm3dw, snow,        editorImage(this, `${fileName}_snow_00`, sm3dw,),],
                [day,   sm3dw, sky,         editorImage(this, `${fileName}_athletic_00`, sm3dw,),],
                [day,   sm3dw, forest,      editorImage(this, `${fileName}_woods_00`, sm3dw,),],
                [day,   sm3dw, ghostHouse,  editorImage(this, `${fileName}_hauntedhouse_00`, sm3dw,),],
                [day,   sm3dw, airship,     editorImage(this, `${fileName}_airship_00`, sm3dw,),],
                [day,   sm3dw, castle,      editorImage(this, `${fileName}_castle_00`, sm3dw,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link PIPE} */
    private static readonly ExistantAsPipe = class ExistantAsPipe extends EditorEntityImages.Existant<'Pipe'> {

        #image?: EditorImage<EditorImageFileAsPipe>

        public constructor() { super('Pipe',) }

        public override get image(): EditorImage<EditorImageFileAsPipe> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const ground = Themes.GROUND
            const snow = Themes.SNOW
            return this.#image = new EditorImageContainer<EditorImageFileAsPipe>([
                [day,   smb,   ground, editorImage(this, 'Dokan_00', smb,),],
                [day,   smb,   ground, editorImage(this, 'Dokan_01', smb,),],
                [day,   smb,   ground, editorImage(this, 'Dokan_02', smb,),],
                [day,   smb,   ground, editorImage(this, 'Dokan_03', smb,),],

                [day,   smb3,  ground, editorImage(this, 'Dokan_00', smb3,),],
                [day,   smb3,  ground, editorImage(this, 'Dokan_01', smb3,),],
                [day,   smb3,  ground, editorImage(this, 'Dokan_02', smb3,),],
                [day,   smb3,  ground, editorImage(this, 'Dokan_03', smb3,),],
                [night, smb3,  snow,   editorImage(this, 'Dokan_snow_night_00', smb3,),],
                [night, smb3,  snow,   editorImage(this, 'Dokan_snow_night_01', smb3,),],
                [night, smb3,  snow,   editorImage(this, 'Dokan_snow_night_02', smb3,),],
                [night, smb3,  snow,   editorImage(this, 'Dokan_snow_night_03', smb3,),],

                [day,   smw,   ground, editorImage(this, 'Dokan_00', smw,),],
                [day,   smw,   ground, editorImage(this, 'Dokan_01', smw,),],
                [day,   smw,   ground, editorImage(this, 'Dokan_02', smw,),],
                [day,   smw,   ground, editorImage(this, 'Dokan_03', smw,),],

                [day,   nsmbu, ground, editorImage(this, 'Dokan_00', nsmbu,),],
                [day,   nsmbu, ground, editorImage(this, 'Dokan_01', nsmbu,),],
                [day,   nsmbu, ground, editorImage(this, 'Dokan_02', nsmbu,),],
                [day,   nsmbu, ground, editorImage(this, 'Dokan_03', nsmbu,),],

                [day,   sm3dw, ground, editorImage(this, 'Dokan_00', sm3dw,),],
                [day,   sm3dw, ground, editorImage(this, 'Dokan_01', sm3dw,),],
                [day,   sm3dw, ground, editorImage(this, 'Dokan_02', sm3dw,),],
                [day,   sm3dw, ground, editorImage(this, 'Dokan_03', sm3dw,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link MUSHROOM_PLATFORM} */
    private static readonly ExistantAsMushroomPlatform = class ExistantAsMushroomPlatform extends EditorEntityImages.Existant<'Mushroom Platform'> {

        #image?: EditorImage<EditorImageFileAsMushroomPlatform>

        public constructor() { super('Mushroom Platform',) }

        public override get image(): EditorImage<EditorImageFileAsMushroomPlatform> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const ground = Themes.GROUND
            const underwater = Themes.UNDERWATER
            const snow = Themes.SNOW
            const airship = Themes.AIRSHIP
            return this.#image = new EditorImageContainer<EditorImageFileAsMushroomPlatform>([
                [day,   smb,   ground,     editorImage(this, 'GroundMushroom_00', smb,),],
                [day,   smb,   ground,     editorImage(this, 'GroundMushroom_01', smb,),],
                [day,   smb,   ground,     editorImage(this, 'GroundMushroom_02', smb,),],
                [day,   smb,   underwater, editorImage(this, 'GroundMushroom_water_00', smb,),],
                [day,   smb,   underwater, editorImage(this, 'GroundMushroom_water_01', smb,),],
                [day,   smb,   underwater, editorImage(this, 'GroundMushroom_water_02', smb,),],
                [day,   smb,   snow,       editorImage(this, 'GroundMushroom_snow_00', smb,),],
                [day,   smb,   snow,       editorImage(this, 'GroundMushroom_snow_01', smb,),],
                [day,   smb,   snow,       editorImage(this, 'GroundMushroom_snow_02', smb,),],
                [night, smb,   snow,       editorImage(this, 'GroundMushroom_snow_night_00', smb,),],
                [night, smb,   snow,       editorImage(this, 'GroundMushroom_snow_night_01', smb,),],
                [night, smb,   snow,       editorImage(this, 'GroundMushroom_snow_night_02', smb,),],
                [day,   smb,   airship,    editorImage(this, 'GroundMushroom_airship_00', smb,),],
                [day,   smb,   airship,    editorImage(this, 'GroundMushroom_airship_01', smb,),],
                [day,   smb,   airship,    editorImage(this, 'GroundMushroom_airship_02', smb,),],

                [day,   smb3,  ground,     editorImage(this, 'GroundMushroom_00', smb3,),],
                [day,   smb3,  ground,     editorImage(this, 'GroundMushroom_01', smb3,),],
                [day,   smb3,  ground,     editorImage(this, 'GroundMushroom_02', smb3,),],
                [day,   smb3,  underwater, editorImage(this, 'GroundMushroom_water_00', smb3,),],
                [day,   smb3,  underwater, editorImage(this, 'GroundMushroom_water_01', smb3,),],
                [day,   smb3,  underwater, editorImage(this, 'GroundMushroom_water_02', smb3,),],
                [day,   smb3,  snow,       editorImage(this, 'GroundMushroom_snow_00', smb3,),],
                [day,   smb3,  snow,       editorImage(this, 'GroundMushroom_snow_01', smb3,),],
                [day,   smb3,  snow,       editorImage(this, 'GroundMushroom_snow_02', smb3,),],
                [night, smb3,  snow,       editorImage(this, 'GroundMushroom_snow_night_00', smb3,),],
                [night, smb3,  snow,       editorImage(this, 'GroundMushroom_snow_night_01', smb3,),],
                [night, smb3,  snow,       editorImage(this, 'GroundMushroom_snow_night_02', smb3,),],
                [day,   smb3,  airship,    editorImage(this, 'GroundMushroom_airship_00', smb3,),],
                [day,   smb3,  airship,    editorImage(this, 'GroundMushroom_airship_01', smb3,),],
                [day,   smb3,  airship,    editorImage(this, 'GroundMushroom_airship_02', smb3,),],

                [day,   smw,   ground,     editorImage(this, 'GroundMushroom_00', smw,),],
                [day,   smw,   ground,     editorImage(this, 'GroundMushroom_01', smw,),],
                [day,   smw,   ground,     editorImage(this, 'GroundMushroom_02', smw,),],
                [day,   smw,   underwater, editorImage(this, 'GroundMushroom_water_00', smw,),],
                [day,   smw,   underwater, editorImage(this, 'GroundMushroom_water_01', smw,),],
                [day,   smw,   underwater, editorImage(this, 'GroundMushroom_water_02', smw,),],
                [day,   smw,   snow,       editorImage(this, 'GroundMushroom_snow_00', smw,),],
                [day,   smw,   snow,       editorImage(this, 'GroundMushroom_snow_01', smw,),],
                [day,   smw,   snow,       editorImage(this, 'GroundMushroom_snow_02', smw,),],
                [night, smw,   snow,       editorImage(this, 'GroundMushroom_snow_night_00', smw,),],
                [night, smw,   snow,       editorImage(this, 'GroundMushroom_snow_night_01', smw,),],
                [night, smw,   snow,       editorImage(this, 'GroundMushroom_snow_night_02', smw,),],
                [day,   smw,   airship,    editorImage(this, 'GroundMushroom_airship_00', smw,),],
                [day,   smw,   airship,    editorImage(this, 'GroundMushroom_airship_01', smw,),],
                [day,   smw,   airship,    editorImage(this, 'GroundMushroom_airship_02', smw,),],

                [day,   nsmbu, ground,     editorImage(this, 'GroundMushroom_00', nsmbu,),],
                [day,   nsmbu, ground,     editorImage(this, 'GroundMushroom_01', nsmbu,),],
                [day,   nsmbu, ground,     editorImage(this, 'GroundMushroom_02', nsmbu,),],
                [day,   nsmbu, underwater, editorImage(this, 'GroundMushroom_water_00', nsmbu,),],
                [day,   nsmbu, underwater, editorImage(this, 'GroundMushroom_water_01', nsmbu,),],
                [day,   nsmbu, underwater, editorImage(this, 'GroundMushroom_water_02', nsmbu,),],
                [day,   nsmbu, snow,       editorImage(this, 'GroundMushroom_snow_00', nsmbu,),],
                [day,   nsmbu, snow,       editorImage(this, 'GroundMushroom_snow_01', nsmbu,),],
                [day,   nsmbu, snow,       editorImage(this, 'GroundMushroom_snow_02', nsmbu,),],
                [night, nsmbu, snow,       editorImage(this, 'GroundMushroom_snow_night_00', nsmbu,),],
                [night, nsmbu, snow,       editorImage(this, 'GroundMushroom_snow_night_01', nsmbu,),],
                [night, nsmbu, snow,       editorImage(this, 'GroundMushroom_snow_night_02', nsmbu,),],
                [day,   nsmbu, airship,    editorImage(this, 'GroundMushroom_airship_00', nsmbu,),],
                [day,   nsmbu, airship,    editorImage(this, 'GroundMushroom_airship_01', nsmbu,),],
                [day,   nsmbu, airship,    editorImage(this, 'GroundMushroom_airship_02', nsmbu,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link SEMISOLID_PLATFORM} */
    private static readonly ExistantAsSemisolidPlatform = class ExistantAsSemisolidPlatform extends EditorEntityImages.Existant<'Semisolid Platform'> {

        #image?: EditorImage<EditorImageFileAsSemisolidPlatform>

        public constructor() { super('Semisolid Platform',) }

        public override get image(): EditorImage<EditorImageFileAsSemisolidPlatform> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
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
            return this.#image = new EditorImageContainer<EditorImageFileAsSemisolidPlatform>([
                [day,   smb,   ground,      editorImage(this, 'GroundBox_00', smb,),],
                [day,   smb,   ground,      editorImage(this, 'GroundBox_01', smb,),],
                [day,   smb,   ground,      editorImage(this, 'GroundBox_02', smb,),],
                [day,   smb,   underground, editorImage(this, 'GroundBox_underground_00', smb,),],
                [day,   smb,   underground, editorImage(this, 'GroundBox_underground_01', smb,),],
                [day,   smb,   underground, editorImage(this, 'GroundBox_underground_02', smb,),],
                [day,   smb,   underwater,  editorImage(this, 'GroundBox_water_00', smb,),],
                [day,   smb,   underwater,  editorImage(this, 'GroundBox_water_01', smb,),],
                [day,   smb,   underwater,  editorImage(this, 'GroundBox_water_02', smb,),],
                [day,   smb,   desert,      editorImage(this, 'GroundBox_desert_00', smb,),],
                [day,   smb,   desert,      editorImage(this, 'GroundBox_desert_01', smb,),],
                [day,   smb,   desert,      editorImage(this, 'GroundBox_desert_02', smb,),],
                [day,   smb,   snow,        editorImage(this, 'GroundBox_snow_00', smb,),],
                [day,   smb,   snow,        editorImage(this, 'GroundBox_snow_01', smb,),],
                [day,   smb,   snow,        editorImage(this, 'GroundBox_snow_02', smb,),],
                [night, smb,   snow,        editorImage(this, 'GroundBox_snow_night_00', smb,),],
                [night, smb,   snow,        editorImage(this, 'GroundBox_snow_night_01', smb,),],
                [night, smb,   snow,        editorImage(this, 'GroundBox_snow_night_02', smb,),],
                [day,   smb,   sky,         editorImage(this, 'GroundBox_athletic_00', smb,),],
                [day,   smb,   sky,         editorImage(this, 'GroundBox_athletic_01', smb,),],
                [day,   smb,   sky,         editorImage(this, 'GroundBox_athletic_02', smb,),],
                [day,   smb,   forest,      editorImage(this, 'GroundBox_woods_00', smb,),],
                [day,   smb,   forest,      editorImage(this, 'GroundBox_woods_01', smb,),],
                [day,   smb,   forest,      editorImage(this, 'GroundBox_woods_02', smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', smb,),],
                [day,   smb,   airship,     editorImage(this, 'GroundBox_airship_00', smb,),],
                [day,   smb,   airship,     editorImage(this, 'GroundBox_airship_01', smb,),],
                [day,   smb,   airship,     editorImage(this, 'GroundBox_airship_02', smb,),],
                [night, smb,   airship,     editorImage(this, 'GroundBox_airship_night_01', smb,),],
                [day,   smb,   castle,      editorImage(this, 'GroundBox_castle_00', smb,),],
                [day,   smb,   castle,      editorImage(this, 'GroundBox_castle_01', smb,),],
                [day,   smb,   castle,      editorImage(this, 'GroundBox_castle_02', smb,),],

                [day,   smb3,  ground,      editorImage(this, 'GroundBox_00', smb3,),],
                [day,   smb3,  ground,      editorImage(this, 'GroundBox_01', smb3,),],
                [day,   smb3,  ground,      editorImage(this, 'GroundBox_02', smb3,),],
                [day,   smb3,  underground, editorImage(this, 'GroundBox_underground_00', smb3,),],
                [day,   smb3,  underground, editorImage(this, 'GroundBox_underground_01', smb3,),],
                [day,   smb3,  underground, editorImage(this, 'GroundBox_underground_02', smb3,),],
                [day,   smb3,  underwater,  editorImage(this, 'GroundBox_water_00', smb3,),],
                [day,   smb3,  underwater,  editorImage(this, 'GroundBox_water_01', smb3,),],
                [day,   smb3,  underwater,  editorImage(this, 'GroundBox_water_02', smb3,),],
                [day,   smb3,  desert,      editorImage(this, 'GroundBox_desert_00', smb3,),],
                [day,   smb3,  desert,      editorImage(this, 'GroundBox_desert_01', smb3,),],
                [day,   smb3,  desert,      editorImage(this, 'GroundBox_desert_02', smb3,),],
                [day,   smb3,  snow,        editorImage(this, 'GroundBox_snow_00', smb3,),],
                [day,   smb3,  snow,        editorImage(this, 'GroundBox_snow_01', smb3,),],
                [day,   smb3,  snow,        editorImage(this, 'GroundBox_snow_02', smb3,),],
                [night, smb3,  snow,        editorImage(this, 'GroundBox_snow_night_00', smb3,),],
                [night, smb3,  snow,        editorImage(this, 'GroundBox_snow_night_01', smb3,),],
                [night, smb3,  snow,        editorImage(this, 'GroundBox_snow_night_02', smb3,),],
                [day,   smb3,  sky,         editorImage(this, 'GroundBox_athletic_00', smb3,),],
                [day,   smb3,  sky,         editorImage(this, 'GroundBox_athletic_01', smb3,),],
                [day,   smb3,  sky,         editorImage(this, 'GroundBox_athletic_02', smb3,),],
                [day,   smb3,  forest,      editorImage(this, 'GroundBox_woods_00', smb3,),],
                [day,   smb3,  forest,      editorImage(this, 'GroundBox_woods_01', smb3,),],
                [day,   smb3,  forest,      editorImage(this, 'GroundBox_woods_02', smb3,),],
                [day,   smb3,  ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', smb3,),],
                [day,   smb3,  ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', smb3,),],
                [day,   smb3,  ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', smb3,),],
                [day,   smb3,  airship,     editorImage(this, 'GroundBox_airship_00', smb3,),],
                [day,   smb3,  airship,     editorImage(this, 'GroundBox_airship_01', smb3,),],
                [day,   smb3,  airship,     editorImage(this, 'GroundBox_airship_02', smb3,),],
                [day,   smb3,  castle,      editorImage(this, 'GroundBox_castle_00', smb3,),],
                [day,   smb3,  castle,      editorImage(this, 'GroundBox_castle_01', smb3,),],
                [day,   smb3,  castle,      editorImage(this, 'GroundBox_castle_02', smb3,),],

                [day,   smw,   ground,      editorImage(this, 'GroundBox_00', smw,),],
                [day,   smw,   ground,      editorImage(this, 'GroundBox_01', smw,),],
                [day,   smw,   ground,      editorImage(this, 'GroundBox_02', smw,),],
                [day,   smw,   underground, editorImage(this, 'GroundBox_underground_00', smw,),],
                [day,   smw,   underground, editorImage(this, 'GroundBox_underground_01', smw,),],
                [day,   smw,   underground, editorImage(this, 'GroundBox_underground_02', smw,),],
                [day,   smw,   underwater,  editorImage(this, 'GroundBox_water_00', smw,),],
                [day,   smw,   underwater,  editorImage(this, 'GroundBox_water_01', smw,),],
                [day,   smw,   underwater,  editorImage(this, 'GroundBox_water_02', smw,),],
                [day,   smw,   desert,      editorImage(this, 'GroundBox_desert_00', smw,),],
                [day,   smw,   desert,      editorImage(this, 'GroundBox_desert_01', smw,),],
                [day,   smw,   desert,      editorImage(this, 'GroundBox_desert_02', smw,),],
                [day,   smw,   snow,        editorImage(this, 'GroundBox_snow_00', smw,),],
                [day,   smw,   snow,        editorImage(this, 'GroundBox_snow_01', smw,),],
                [day,   smw,   snow,        editorImage(this, 'GroundBox_snow_02', smw,),],
                [night, smw,   snow,        editorImage(this, 'GroundBox_snow_night_00', smw,),],
                [night, smw,   snow,        editorImage(this, 'GroundBox_snow_night_01', smw,),],
                [night, smw,   snow,        editorImage(this, 'GroundBox_snow_night_02', smw,),],
                [day,   smw,   sky,         editorImage(this, 'GroundBox_athletic_00', smw,),],
                [day,   smw,   sky,         editorImage(this, 'GroundBox_athletic_01', smw,),],
                [day,   smw,   sky,         editorImage(this, 'GroundBox_athletic_02', smw,),],
                [day,   smw,   forest,      editorImage(this, 'GroundBox_woods_00', smw,),],
                [day,   smw,   forest,      editorImage(this, 'GroundBox_woods_01', smw,),],
                [day,   smw,   forest,      editorImage(this, 'GroundBox_woods_02', smw,),],
                [day,   smw,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', smw,),],
                [day,   smw,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', smw,),],
                [day,   smw,   ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', smw,),],
                [day,   smw,   airship,     editorImage(this, 'GroundBox_airship_00', smw,),],
                [day,   smw,   airship,     editorImage(this, 'GroundBox_airship_01', smw,),],
                [day,   smw,   airship,     editorImage(this, 'GroundBox_airship_02', smw,),],
                [day,   smw,   castle,      editorImage(this, 'GroundBox_castle_00', smw,),],
                [day,   smw,   castle,      editorImage(this, 'GroundBox_castle_01', smw,),],
                [day,   smw,   castle,      editorImage(this, 'GroundBox_castle_02', smw,),],

                [day,   nsmbu, ground,      editorImage(this, 'GroundBox_00', nsmbu,),],
                [day,   nsmbu, ground,      editorImage(this, 'GroundBox_01', nsmbu,),],
                [day,   nsmbu, ground,      editorImage(this, 'GroundBox_02', nsmbu,),],
                [day,   nsmbu, underground, editorImage(this, 'GroundBox_underground_00', nsmbu,),],
                [day,   nsmbu, underground, editorImage(this, 'GroundBox_underground_01', nsmbu,),],
                [day,   nsmbu, underground, editorImage(this, 'GroundBox_underground_02', nsmbu,),],
                [day,   nsmbu, underwater,  editorImage(this, 'GroundBox_water_00', nsmbu,),],
                [day,   nsmbu, underwater,  editorImage(this, 'GroundBox_water_01', nsmbu,),],
                [day,   nsmbu, underwater,  editorImage(this, 'GroundBox_water_02', nsmbu,),],
                [day,   nsmbu, desert,      editorImage(this, 'GroundBox_desert_00', nsmbu,),],
                [day,   nsmbu, desert,      editorImage(this, 'GroundBox_desert_01', nsmbu,),],
                [day,   nsmbu, desert,      editorImage(this, 'GroundBox_desert_02', nsmbu,),],
                [day,   nsmbu, snow,        editorImage(this, 'GroundBox_snow_00', nsmbu,),],
                [day,   nsmbu, snow,        editorImage(this, 'GroundBox_snow_01', nsmbu,),],
                [day,   nsmbu, snow,        editorImage(this, 'GroundBox_snow_02', nsmbu,),],
                [night, nsmbu, snow,        editorImage(this, 'GroundBox_snow_night_00', nsmbu,),],
                [night, nsmbu, snow,        editorImage(this, 'GroundBox_snow_night_01', nsmbu,),],
                [night, nsmbu, snow,        editorImage(this, 'GroundBox_snow_night_02', nsmbu,),],
                [day,   nsmbu, sky,         editorImage(this, 'GroundBox_athletic_00', nsmbu,),],
                [day,   nsmbu, sky,         editorImage(this, 'GroundBox_athletic_01', nsmbu,),],
                [day,   nsmbu, sky,         editorImage(this, 'GroundBox_athletic_02', nsmbu,),],
                [day,   nsmbu, forest,      editorImage(this, 'GroundBox_woods_00', nsmbu,),],
                [day,   nsmbu, forest,      editorImage(this, 'GroundBox_woods_01', nsmbu,),],
                [day,   nsmbu, forest,      editorImage(this, 'GroundBox_woods_02', nsmbu,),],
                [day,   nsmbu, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', nsmbu,),],
                [day,   nsmbu, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_01', nsmbu,),],
                [day,   nsmbu, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_02', nsmbu,),],
                [day,   nsmbu, airship,     editorImage(this, 'GroundBox_airship_00', nsmbu,),],
                [day,   nsmbu, airship,     editorImage(this, 'GroundBox_airship_01', nsmbu,),],
                [day,   nsmbu, airship,     editorImage(this, 'GroundBox_airship_02', nsmbu,),],
                [day,   nsmbu, castle,      editorImage(this, 'GroundBox_castle_00', nsmbu,),],
                [day,   nsmbu, castle,      editorImage(this, 'GroundBox_castle_01', nsmbu,),],
                [day,   nsmbu, castle,      editorImage(this, 'GroundBox_castle_02', nsmbu,),],

                [day,   sm3dw, ground,      editorImage(this, 'GroundBox_00', sm3dw,),],
                [day,   sm3dw, underground, editorImage(this, 'GroundBox_underground_00', sm3dw,),],
                [day,   sm3dw, underwater,  editorImage(this, 'GroundBox_water_00', sm3dw,),],
                [day,   sm3dw, desert,      editorImage(this, 'GroundBox_desert_00', sm3dw,),],
                [day,   sm3dw, snow,        editorImage(this, 'GroundBox_snow_00', sm3dw,),],
                [day,   sm3dw, sky,         editorImage(this, 'GroundBox_athletic_00', sm3dw,),],
                [day,   sm3dw, forest,      editorImage(this, 'GroundBox_woods_00', sm3dw,),],
                [day,   sm3dw, ghostHouse,  editorImage(this, 'GroundBox_hauntedhouse_00', sm3dw,),],
                [day,   sm3dw, airship,     editorImage(this, 'GroundBox_airship_00', sm3dw,),],
                [day,   sm3dw, castle,      editorImage(this, 'GroundBox_castle_00', sm3dw,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link BRIDGE} */
    private static readonly ExistantAsBridge = class ExistantAsBridge extends EditorEntityImages.Existant<'Bridge'> {

        #image?: EditorImage<EditorImageFileAsBridge>

        public constructor() { super('Bridge',) }

        public override get image(): EditorImage<EditorImageFileAsBridge> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
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
            return this.#image = new EditorImageContainer<EditorImageFileAsBridge>([
                [day,   smb,   ground,      editorImage(this, 'Bridge_00', smb,),],
                [day,   smb,   snow,        editorImage(this, 'Bridge_snow_00', smb,),],
                [night, smb,   snow,        editorImage(this, 'Bridge_snow_night_00', smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, 'Bridge_hauntedhouse_00', smb,),],
                [day,   smb,   airship,     editorImage(this, 'Bridge_airship_00', smb,),],
                [day,   smb,   castle,      editorImage(this, 'Bridge_castle_00', smb,),],

                [day,   smb3,  ground,      editorImage(this, 'Bridge_00', smb3,),],
                [day,   smb3,  snow,        editorImage(this, 'Bridge_snow_00', smb3,),],
                [night, smb3,  snow,        editorImage(this, 'Bridge_snow_night_00', smb3,),],

                [day,   smw,   ground,      editorImage(this, 'Bridge_00', smw,),],
                [day,   smw,   desert,      editorImage(this, 'Bridge_desert_00', smw,),],
                [day,   smw,   snow,        editorImage(this, 'Bridge_snow_00', smw,),],
                [night, smw,   snow,        editorImage(this, 'Bridge_snow_night_00', smw,),],
                [day,   smw,   sky,         editorImage(this, 'Bridge_athletic_00', smw,),],
                [day,   smw,   forest,      editorImage(this, 'Bridge_woods_00', smw,),],

                [day,   nsmbu, ground,      editorImage(this, 'Bridge_00', nsmbu,),],
                [day,   nsmbu, underground, editorImage(this, 'Bridge_underground_00', nsmbu,),],
                [day,   nsmbu, underwater,  editorImage(this, 'Bridge_water_00', nsmbu,),],
                [day,   nsmbu, snow,        editorImage(this, 'Bridge_snow_00', nsmbu,),],
                [night, nsmbu, snow,        editorImage(this, 'Bridge_snow_night_00', nsmbu,),],
                [day,   nsmbu, forest,      editorImage(this, 'Bridge_woods_00', nsmbu,),],
                [day,   nsmbu, ghostHouse,  editorImage(this, 'Bridge_hauntedhouse_00', nsmbu,),],
                [day,   nsmbu, airship,     editorImage(this, 'Bridge_airship_00', nsmbu,),],
                [day,   nsmbu, castle,      editorImage(this, 'Bridge_castle_00', nsmbu,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link BRICK_BLOCK} */
    private static readonly ExistantAsBrickBlock = class ExistantAsBrickBlock extends EditorEntityImages.Existant<'Brick Block'> {

        #image?: EditorImage<EditorImageFileAsBrickBlock>

        public constructor() { super('Brick Block',) }

        public override get image(): EditorImage<EditorImageFileAsBrickBlock> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const snow = Themes.SNOW
            const ghostHouse = Themes.GHOST_HOUSE
            const castle = Themes.CASTLE
            return this.#image = new EditorImageContainer<EditorImageFileAsBrickBlock>([
                [day,   smb,   ground,      editorImage(this, 'RengaBlock_00', smb,),],
                [day,   smb,   underground, editorImage(this, 'RengaBlock_underground_00', smb,),],
                [day,   smb,   snow,        editorImage(this, 'RengaBlock_snow_00', smb,),],
                [night, smb,   snow,        editorImage(this, 'RengaBlock_snow_night_00', smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, 'RengaBlock_hauntedhouse_00', smb,),],
                [day,   smb,   castle,      editorImage(this, 'RengaBlock_castle_00', smb,),],

                [day,   smb3,  ground,      editorImage(this, 'RengaBlock_00', smb3,),],
                [night, smb3,  snow,        editorImage(this, 'RengaBlock_snow_night_00', smb3,),],

                [day,   smw,   ground,      editorImage(this, 'RengaBlock_00', smw,),],

                [day,   nsmbu, ground,      editorImage(this, 'RengaBlock_00', nsmbu,),],

                [day,   sm3dw, ground,      editorImage(this, 'RengaBlock_00', sm3dw,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CRISTAL_BLOCK} */
    private static readonly ExistantAsCristalBlock = class ExistantAsCristalBlock extends EditorEntityImages.Existant<'Cristal Block'> {

        #image?: EditorImage<EditorImageFileAsCristalBlock>

        public constructor() { super('Cristal Block',) }

        public override get image(): EditorImage<EditorImageFileAsCristalBlock> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.SUPER_MARIO_3D_WORLD
            return this.#image = new EditorImageContainer<EditorImageFileAsCristalBlock>([
                [time, gameStyle, Themes.UNDERGROUND, editorImage(this, 'RengaBlock_underground_00', gameStyle,),],
                [time, gameStyle, Themes.FOREST,      editorImage(this, 'RengaBlock_woods_00', gameStyle,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link HARD_BLOCK} */
    private static readonly ExistantAsHardBlock = class ExistantAsHardBlock extends EditorEntityImages.Existant<'Hard Block'> {

        #image?: EditorImage<EditorImageFileAsHardBlock>

        public constructor() { super('Hard Block',) }

        public override get image(): EditorImage<EditorImageFileAsHardBlock> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const snow = Themes.SNOW
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return this.#image = new EditorImageContainer<EditorImageFileAsHardBlock>([
                [day,   smb,   ground,      editorImage(this, 'HardBlock_00', smb,),],
                [day,   smb,   underground, editorImage(this, 'HardBlock_underground_00', smb,),],
                [night, smb,   underground, editorImage(this, 'HardBlock_underground_night_00', smb,),],
                [day,   smb,   underwater,  editorImage(this, 'HardBlock_water_00', smb,),],
                [day,   smb,   snow,        editorImage(this, 'HardBlock_snow_00', smb,),],
                [night, smb,   snow,        editorImage(this, 'HardBlock_snow_night_00', smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, 'HardBlock_hauntedhouse_00', smb,),],
                [day,   smb,   airship,     editorImage(this, 'HardBlock_airship_00', smb,),],
                [day,   smb,   castle,      editorImage(this, 'HardBlock_castle_00', smb,),],

                [day,   smb3,  ground,      editorImage(this, 'HardBlock_00', smb3,),],
                [day,   smb3,  snow,        editorImage(this, 'HardBlock_snow_00', smb3,),],
                [night, smb3,  snow,        editorImage(this, 'HardBlock_snow_night_00', smb3,),],

                [day,   smw,   ground,      editorImage(this, 'HardBlock_00', smw,),],
                [day,   smw,   ghostHouse,  editorImage(this, 'HardBlock_hauntedhouse_00', smw,),],
                [day,   smw,   airship,     editorImage(this, 'HardBlock_airship_00', smw,),],
                [night, smw,   airship,     editorImage(this, 'HardBlock_airship_night_00', smw,),],

                [day,   nsmbu, ground,      editorImage(this, 'HardBlock_00', nsmbu,),],
                [day,   nsmbu, underground, editorImage(this, 'HardBlock_underground_00', nsmbu,),],
                [day,   nsmbu, underwater,  editorImage(this, 'HardBlock_water_00', nsmbu,),],
                [day,   nsmbu, snow,        editorImage(this, 'HardBlock_snow_00', nsmbu,),],
                [day,   nsmbu, sky,         editorImage(this, 'HardBlock_athletic_00', nsmbu,),],
                [day,   nsmbu, forest,      editorImage(this, 'HardBlock_woods_00', nsmbu,),],
                [day,   nsmbu, castle,      editorImage(this, 'HardBlock_castle_00', nsmbu,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CLOUD_BLOCK} */
    private static readonly ExistantAsCloudBlock = class ExistantAsCloudBlock extends EditorEntityImages.Existant<'Cloud Block'> {

        #image?: EditorImage<EditorImageFileAsCloudBlock>

        public constructor() { super('Cloud Block',) }

        public override get image(): EditorImage<EditorImageFileAsCloudBlock> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const ground = Themes.GROUND
            const underwater = Themes.UNDERWATER
            const snow = Themes.SNOW
            return this.#image = new EditorImageContainer<EditorImageFileAsCloudBlock>([
                [day,   smb,   ground,     editorImage(this, 'KumoBlock_00', smb,),],
                [day,   smb,   underwater, editorImage(this, 'KumoBlock_water_00', smb,),],
                [night, smb,   snow,       editorImage(this, 'KumoBlock_snow_night_00', smb,),],

                [day,   smb3,  ground,     editorImage(this, 'KumoBlock_00', smb3,),],
                [day,   smb3,  underwater, editorImage(this, 'KumoBlock_water_00', smb3,),],
                [night, smb3,  snow,       editorImage(this, 'KumoBlock_snow_night_00', smb3,),],

                [day,   smw,   ground,     editorImage(this, 'KumoBlock_00', smw,),],
                [day,   smw,   underwater, editorImage(this, 'KumoBlock_water_00', smw,),],

                [day,   nsmbu, ground,     editorImage(this, 'KumoBlock_00', nsmbu,),],

                [day,   sm3dw, ground,     editorImage(this, 'KumoBlock_00', sm3dw,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link CHEEP_CHEEP} */
    private static readonly ExistantAsCheepCheep = class ExistantAsCheepCheep extends EditorEntityImages.Existant<'Cheep Cheep'> {

        #image?: EditorImage<EditorImageFileAsCheepCheep>

        public constructor() { super('Cheep Cheep',) }

        public override get image(): EditorImage<EditorImageFileAsCheepCheep> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const theme = Themes.GROUND
            return this.#image = new EditorImageContainer<EditorImageFileAsCheepCheep>([
                [time,   smb,   theme,      editorImage(this, 'Pukupuku_00', smb,),],
                [time,   smb,   theme,      editorImage(this, 'Pukupuku_01', smb,),],

                [time,   smb3,  theme,      editorImage(this, 'Pukupuku_00', smb3,),],
                [time,   smb3,  theme,      editorImage(this, 'Pukupuku_01', smb3,),],

                [time,   smw,   theme,      editorImage(this, 'Pukupuku_01', smw,),],

                [time,   nsmbu, theme,      editorImage(this, 'Pukupuku_01', nsmbu,),],

                [time,   sm3dw, theme,      editorImage(this, 'Pukupuku_00', sm3dw,),],
                [time,   sm3dw, theme,      editorImage(this, 'Pukupuku_01', sm3dw,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link SPIKE_BALL} */
    private static readonly ExistantAsSpikeBall = class ExistantAsSpikeBall extends EditorEntityImages.Existant<'Spike Ball'> {

        #image?: EditorImage<EditorImageFileAsSpikeBall>

        public constructor() { super('Spike Ball',) }

        public override get image(): EditorImage<EditorImageFileAsSpikeBall> {
            const value = this.#image
            if (value != null)
                return value

            const day = Times.DAY
            const night = Times.NIGHT
            const smb = GameStyles.SUPER_MARIO_BROS
            const smb3 = GameStyles.SUPER_MARIO_BROS_3
            const smw = GameStyles.SUPER_MARIO_WORLD
            const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
            const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD
            const ground = Themes.GROUND
            const underground = Themes.UNDERGROUND
            const underwater = Themes.UNDERWATER
            const desert = Themes.DESERT
            const sky = Themes.SKY
            const forest = Themes.FOREST
            const ghostHouse = Themes.GHOST_HOUSE
            const airship = Themes.AIRSHIP
            const castle = Themes.CASTLE
            return this.#image = new EditorImageContainer<EditorImageFileAsSpikeBall>([
                [day,   smb,   ground,      editorImage(this, 'Gabon_01', smb,),],
                [night, smb,   ground,      editorImage(this, 'Gabon_plain_night_01', smb,),],
                [day,   smb,   underground, editorImage(this, 'Gabon_underground_01', smb,),],
                [day,   smb,   underwater,  editorImage(this, 'Gabon_water_01', smb,),],
                [night, smb,   desert,      editorImage(this, 'Gabon_desert_night_01', smb,),],
                [night, smb,   sky,         editorImage(this, 'Gabon_athletic_night_01', smb,),],
                [night, smb,   forest,      editorImage(this, 'Gabon_woods_night_01', smb,),],
                [day,   smb,   ghostHouse,  editorImage(this, 'Gabon_hauntedhouse_01', smb,),],
                [night, smb,   airship,     editorImage(this, 'Gabon_airship_night_01', smb,),],
                [day,   smb,   castle,      editorImage(this, 'Gabon_castle_01', smb,),],

                [day,   smb3,  ground,      editorImage(this, 'Gabon_01', smb3,),],
                [night, smb3,  ground,      editorImage(this, 'Gabon_plain_night_01', smb3,),],
                [day,   smb3,  underground, editorImage(this, 'Gabon_underground_01', smb3,),],
                [day,   smb3,  underwater,  editorImage(this, 'Gabon_water_01', smb3,),],
                [night, smb3,  desert,      editorImage(this, 'Gabon_desert_night_01', smb3,),],
                [night, smb3,  sky,         editorImage(this, 'Gabon_athletic_night_01', smb3,),],
                [night, smb3,  forest,      editorImage(this, 'Gabon_woods_night_01', smb3,),],
                [day,   smb3,  ghostHouse,  editorImage(this, 'Gabon_hauntedhouse_01', smb3,),],
                [night, smb3,  airship,     editorImage(this, 'Gabon_airship_night_01', smb3,),],
                [day,   smb3,  castle,      editorImage(this, 'Gabon_castle_01', smb3,),],

                [day,   smw,   ground,      editorImage(this, 'Gabon_01', smw,),],

                [day,   nsmbu, ground,      editorImage(this, 'Gabon_01', nsmbu,),],

                [day,   sm3dw, ground,      editorImage(this, 'Gabon_01', sm3dw,),],
            ],)
        }

    }

    /** A subclass of an {@link EditorEntityImages} for only the {@link TREE} */
    private static readonly ExistantAsTree = class ExistantAsTree extends EditorEntityImages.Existant<'Tree'> {

        #image?: EditorImage<EditorImageFileAsTree>

        public constructor() { super('Tree',) }

        public override get image(): EditorImage<EditorImageFileAsTree> {
            const value = this.#image
            if (value != null)
                return value

            const time = Times.DAY
            const gameStyle = GameStyles.SUPER_MARIO_3D_WORLD
            return this.#image = new EditorImageContainer<EditorImageFileAsTree>([
                [time, gameStyle, Themes.GROUND,      editorImage(this, 'BellTree_00', gameStyle,),],
                [time, gameStyle, Themes.UNDERGROUND, editorImage(this, 'BellTree_underground_00', gameStyle,),],
                [time, gameStyle, Themes.UNDERWATER,  editorImage(this, 'BellTree_water_00', gameStyle,),],
                [time, gameStyle, Themes.DESERT,      editorImage(this, 'BellTree_desert_00', gameStyle,),],
                [time, gameStyle, Themes.SNOW,        editorImage(this, 'BellTree_snow_00', gameStyle,),],
                [time, gameStyle, Themes.FOREST,      editorImage(this, 'BellTree_woods_00', gameStyle,),],
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
    public static readonly CLEAR_PIPE =                                    new EditorEntityImages.ExistantAsOneInOnlySm3dw('Clear Pipe', 'ToumeiDokan_00',)

    public static readonly SPIKE_TRAP =                                    new EditorEntityImages.ExistantAsOnePlusOneNightSnowInSmbAndSmb3ButNotSm3dw('Spike Trap', 'Toge_00', 'Toge_snow_night_00',)
    public static readonly JELECTRO =                                      new EditorEntityImages.ExistantAsOneIn1GameStyle('Jelectro', 'Toge_water_00', GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,)
    public static readonly SEA_URCHIN =                                    new EditorEntityImages.ExistantAsOneIn1GameStyle('Sea Urchin',  'Toge_water_00', GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,)
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
    public static readonly YOSHI_EGG =                                     new EditorEntityImages.ExistantAsOneInOnlySmwAndNsmbu('Yoshi\'s Egg', 'YosshiEgg_00',)
    public static readonly YOSHI =                                         new EditorEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new EditorEntityImages.Null()
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new EditorEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new EditorEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new EditorEntityImages.ExistantAsOneInOnlySmwAndNsmbu('Red Yoshi\'s Egg', 'YosshiEggRed_00',)
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
    public static readonly LAKITU_CLOUD =                                  new EditorEntityImages.ExistantAsOneInNotSm3dw('Lakitu\'s Cloud', 'Jugem_01',)

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
    public static readonly BULL_EYE_BLASTER =                              new EditorEntityImages.ExistantAsOneInAll('Bull\'s-Eye Blaster', 'KillerHoudai_01',)
    public static readonly BULL_EYE_BILL =                                 new EditorEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new EditorEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new EditorEntityImages.ExistantAsBlueVariantInSmbAndSmb3('Banzai Bill', 'MagnumKiller', 0,)
    public static readonly BULL_EYE_BANZAI =                               new EditorEntityImages.ExistantAsOneInNotSm3dw('Bull\'s-Eye Banzai', 'MagnumKiller_01',)
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

    public static readonly TRACK =                                         new EditorEntityImages.ExistantAsOneInNotSm3dw('Track', 'Rail_00',)
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
