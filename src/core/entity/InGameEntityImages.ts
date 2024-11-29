import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {Array, EmptyString}                 from '@joookiwi/type'
import {forEachByArray}                          from '@joookiwi/collection'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {InGameImageFile}                      from 'core/entity/file/EntityImageFile'
import type {InGameImage}                          from 'core/entity/images/inGame/InGameImage'
import type {PossibleAcronym_InFile_SMM1}          from 'core/gameStyle/GameStyles.types'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}             from 'core/entity/Entities'
import {inGameImage}          from 'core/entity/file/fileCreator'
import {EmptyInGameImage}     from 'core/entity/images/inGame/EmptyInGameImage'
import {InGameImageContainer} from 'core/entity/images/inGame/InGameImage.container'
import {GameStyles}           from 'core/gameStyle/GameStyles'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW
import SM3DW = GameStyles.SM3DW

/**
 * An {@link InGameEntityImages} class made to hold an {@link InGameImage}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class InGameEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<InGameImage> {

    //region -------------------- Sub class --------------------

    /** A subclass of an {@link InGameEntityImages} to hold a non-existant {@link InGameImage} ({@link EmptyInGameImage}) */
    private static readonly Null = class NullInGameEntityImages extends InGameEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyInGameImage.get
        }

        public override get image(): EmptyInGameImage { return this.#image }

    }

    /** An abstract subclass of an {@link InGameEntityImages} to hold a specific {@link PossibleEnglishName} */
    private static readonly Existant = (() => {
        abstract class ExistantInGameEntityImages<const NAME extends PossibleEnglishName,
            const IMAGE_FILE extends InGameImageFile, >
            extends InGameEntityImages {

            readonly #englishName
            #image?: InGameImage<IMAGE_FILE>

            protected constructor(englishName: NAME,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME { return this.#englishName }

            public override get image(): InGameImage<IMAGE_FILE> { return this.#image ??= new InGameImageContainer(this._createImageFiles(),) }

            protected abstract _createImageFiles(): Array<readonly [GameStyles, IMAGE_FILE,]>

        }

        return ExistantInGameEntityImages
    })()

    //region -------------------- Sub class (one in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 1 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAsOneInOnlySmb = class ExistantAsOneInOnlySmbInGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        readonly #folderName
        readonly #fileName

        public constructor(englishName: NAME, folderName: FOLDER_NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#folderName = folderName
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            return [[SMB, inGameImage(this, this.#folderName, this.#fileName,),],] as const
        }

    }

    //endregion -------------------- Sub class (one in 1 specific game style) --------------------
    //region -------------------- Sub class (one in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 1 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsOneInNotNsmbuAndSm3dw = class ExistantAsOneInOnlySmbInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${Exclude<PossibleAcronym_InFile_SMM1, 'WU'>} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const endingFolderName = this.#endingFolderName
            return [
                [SMB,  inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3, inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,  inGameImage(this, `MW ${endingFolderName}`, fileName,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one in 3 specific game style) --------------------
    //region -------------------- Sub class (one in 4 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 1 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3}, {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantAsOneInNotSm3dw = class ExistantAsOneInOnlySmbInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${PossibleAcronym_InFile_SMM1} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName: FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName = fileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const endingFolderName = this.#endingFolderName
            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,   inGameImage(this, `MW ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, fileName,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 1 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3}, {@link SMW} and a different {@link NSMBU}
     */
    private static readonly ExistantAsOneInNotSm3dwButDifferentNsmbu = class ExistantAsOneInOnlySmbInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName
        readonly #nsmbuFileName

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName: FILE_NAME, nsmbuFileName: NSMBU_FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName = fileName
            this.#nsmbuFileName = nsmbuFileName
        }

        public override _createImageFiles() {
            const fileName = this.#fileName
            const endingFolderName = this.#endingFolderName
            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,   inGameImage(this, `MW ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, this.#nsmbuFileName,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one in 4 specific game style) --------------------
    //region -------------------- Sub class (two in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 2 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAsTwoInOnlySmw = class ExistantAsTwoInOnlySmwInGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        readonly #folderName
        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, folderName: FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#folderName = folderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            return [
                [SMW, inGameImage(this, this.#folderName, this.#fileName1,),],
                [SMW, inGameImage(this, this.#folderName, this.#fileName2,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 1 specific game style) --------------------
    //region -------------------- Sub class (two in 2 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 2 {@link InGameImageFile}
     * in only {@link SMB} and {@link SMB3}
     */
    private static readonly ExistantAsTwoInOnlySmbAndSmb3 = class ExistantAsTwoInOnlySmbAndSmb3InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const folderNameSmb = `M1 ${endingFolderName}` as const
            const folderNameSmb3 = `M3 ${endingFolderName}` as const
            return [
                [SMB,  inGameImage(this, folderNameSmb, this.#fileName1,),],
                [SMB,  inGameImage(this, folderNameSmb, this.#fileName2,),],
                [SMB3, inGameImage(this, folderNameSmb3, this.#fileName1,),],
                [SMB3, inGameImage(this, folderNameSmb3, this.#fileName2,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 2 specific game style) --------------------
    //region -------------------- Sub class (two in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 2 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsTwoInNotNsmbuAndSm3dw = class ExistantAsTwoInNotNsmbuAndSm3dwInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${Exclude<PossibleAcronym_InFile_SMM1, 'WU'>} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName1
        readonly #fileName2

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
        }

        public override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const folderNameSmb = `M1 ${endingFolderName}` as const
            const folderNameSmb3 = `M3 ${endingFolderName}` as const
            const folderNameSmw = `MW ${endingFolderName}` as const
            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            return [
                [SMB,  inGameImage(this, folderNameSmb, fileName1,),],
                [SMB,  inGameImage(this, folderNameSmb, fileName2,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName1,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName2,),],
                [SMW,  inGameImage(this, folderNameSmw, fileName1,),],
                [SMW,  inGameImage(this, folderNameSmw, fileName2,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 3 specific game style) --------------------
    //region -------------------- Sub class (two in 4 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 2 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     * plus 1 {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAsTwoInSm3dwAndOneNsmbu = class ExistantAsTwoInNotNsmbuAndSm3dwInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName1
        readonly #fileName2
        readonly #nsmbuFileName

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, nsmbuFileName: NSMBU_FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#nsmbuFileName = nsmbuFileName
        }

        public override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const folderNameSmb = `M1 ${endingFolderName}` as const
            const folderNameSmb3 = `M3 ${endingFolderName}` as const
            const folderNameSmw = `MW ${endingFolderName}` as const
            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            return [
                [SMB,   inGameImage(this, folderNameSmb, fileName1,),],
                [SMB,   inGameImage(this, folderNameSmb, fileName2,),],
                [SMB3,  inGameImage(this, folderNameSmb3, fileName1,),],
                [SMB3,  inGameImage(this, folderNameSmb3, fileName2,),],
                [SMW,   inGameImage(this, folderNameSmw, fileName1,),],
                [SMW,   inGameImage(this, folderNameSmw, fileName2,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, this.#nsmbuFileName,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 4 specific game style) --------------------
    //region -------------------- Sub class (three in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 3 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAsThreeInOnlySmb = class ExistantAsThreeInOnlySmbInGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        readonly #folderName
        readonly #fileName1
        readonly #fileName2
        readonly #fileName3

        public constructor(englishName: NAME, folderName: FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, fileName3: FILE_NAME,) {
            super(englishName,)
            this.#folderName = folderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#fileName3 = fileName3
        }

        public override _createImageFiles() {
            const folderName = this.#folderName
            return [
                [SMB, inGameImage(this, folderName, this.#fileName1,),],
                [SMB, inGameImage(this, folderName, this.#fileName2,),],
                [SMB, inGameImage(this, folderName, this.#fileName3,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (three in 1 specific game style) --------------------
    //region -------------------- Sub class (three in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 3 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsThreeInNotNsmbuAndSm3dw = class ExistantAsThreeInNotNsmbuAndSm3dwInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${Exclude<PossibleAcronym_InFile_SMM1, 'WU'>} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName1
        readonly #fileName2
        readonly #fileName3

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, fileName3: FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#fileName3 = fileName3
        }

        public override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const folderNameSmb = `M1 ${endingFolderName}` as const
            const folderNameSmb3 = `M3 ${endingFolderName}` as const
            const folderNameSmw = `MW ${endingFolderName}` as const
            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            const fileName3 = this.#fileName3
            return [
                [SMB,  inGameImage(this, folderNameSmb,  fileName1,),],
                [SMB,  inGameImage(this, folderNameSmb,  fileName2,),],
                [SMB,  inGameImage(this, folderNameSmb,  fileName3,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName1,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName2,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName3,),],
                [SMW,  inGameImage(this, folderNameSmw,  fileName1,),],
                [SMW,  inGameImage(this, folderNameSmw,  fileName2,),],
                [SMW,  inGameImage(this, folderNameSmw,  fileName3,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (three in 3 specific game style) --------------------
    //region -------------------- Sub class (four in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 4 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAsFourInOnlySmb = class ExistantAsFourInOnlySmbInGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        readonly #folderName
        readonly #fileName1
        readonly #fileName2
        readonly #fileName3
        readonly #fileName4

        public constructor(englishName: NAME, folderName: FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, fileName3: FILE_NAME, fileName4: FILE_NAME,) {
            super(englishName,)
            this.#folderName = folderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#fileName3 = fileName3
            this.#fileName4 = fileName4
        }

        public override _createImageFiles() {
            const folderName = this.#folderName
            return [
                [SMB, inGameImage(this, folderName, this.#fileName1,),],
                [SMB, inGameImage(this, folderName, this.#fileName2,),],
                [SMB, inGameImage(this, folderName, this.#fileName3,),],
                [SMB, inGameImage(this, folderName, this.#fileName4,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 4 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAsFourInOnlySmw = class ExistantAsFourInOnlySmbInGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        readonly #folderName
        readonly #fileName1
        readonly #fileName2
        readonly #fileName3
        readonly #fileName4

        public constructor(englishName: NAME, folderName: FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, fileName3: FILE_NAME, fileName4: FILE_NAME,) {
            super(englishName,)
            this.#folderName = folderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#fileName3 = fileName3
            this.#fileName4 = fileName4
        }

        public override _createImageFiles() {
            const folderName = this.#folderName
            return [
                [SMW, inGameImage(this, folderName, this.#fileName1,),],
                [SMW, inGameImage(this, folderName, this.#fileName2,),],
                [SMW, inGameImage(this, folderName, this.#fileName3,),],
                [SMW, inGameImage(this, folderName, this.#fileName4,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (four in 1 specific game style) --------------------
    //region -------------------- Sub class (four in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage} as 4 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsFourInNotNsmbuAndSm3dw = class ExistantAsFourInNotNsmbuAndSm3dwInGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${Exclude<PossibleAcronym_InFile_SMM1, 'WU'>} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        readonly #endingFolderName
        readonly #fileName1
        readonly #fileName2
        readonly #fileName3
        readonly #fileName4

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, fileName1: FILE_NAME, fileName2: FILE_NAME, fileName3: FILE_NAME, fileName4: FILE_NAME,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#fileName1 = fileName1
            this.#fileName2 = fileName2
            this.#fileName3 = fileName3
            this.#fileName4 = fileName4
        }

        public override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const folderNameSmb = `M1 ${endingFolderName}` as const
            const folderNameSmb3 = `M3 ${endingFolderName}` as const
            const folderNameSmw = `MW ${endingFolderName}` as const
            const fileName1 = this.#fileName1
            const fileName2 = this.#fileName2
            const fileName3 = this.#fileName3
            const fileName4 = this.#fileName4
            return [
                [SMB,  inGameImage(this, folderNameSmb,  fileName1,),],
                [SMB,  inGameImage(this, folderNameSmb,  fileName2,),],
                [SMB,  inGameImage(this, folderNameSmb,  fileName3,),],
                [SMB,  inGameImage(this, folderNameSmb,  fileName4,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName1,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName2,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName3,),],
                [SMB3, inGameImage(this, folderNameSmb3, fileName4,),],
                [SMW,  inGameImage(this, folderNameSmw,  fileName1,),],
                [SMW,  inGameImage(this, folderNameSmw,  fileName2,),],
                [SMW,  inGameImage(this, folderNameSmw,  fileName3,),],
                [SMW,  inGameImage(this, folderNameSmw,  fileName4,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (four in 3 specific game style) --------------------
    //region -------------------- Sub class (no variant) --------------------

    private static readonly ExistantAsNoVariant = class ExistantAsNoVariant_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        readonly #endingFolderName
        readonly #smbFileNames
        readonly #smb3FileNames
        readonly #smwFileNames
        readonly #nsmbuFileNames

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, smbFileNames: Array<SMB_FILE_NAME>, smb3FileNames: Array<SMB3_FILE_NAME>, smwFileNames: Array<SMW_FILE_NAME>, nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#smbFileNames = smbFileNames
            this.#smb3FileNames = smb3FileNames
            this.#smwFileNames = smwFileNames
            this.#nsmbuFileNames = nsmbuFileNames
        }

        protected override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const fileNames_smb = this.#smbFileNames
            const fileNames_smb3 = this.#smb3FileNames
            const fileNames_smw = this.#smwFileNames
            const fileNames_nsmbu = this.#nsmbuFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNames_smb.length + fileNames_smb3.length + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            const folderName_smb = `M1 ${endingFolderName}` as const
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)

            const folderName_smb3 = `M3 ${endingFolderName}` as const
            forEachByArray(fileNames_smb3, it => imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),],)

            const folderName_smw = `MW ${endingFolderName}` as const
            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            const folderName_nsmbu = `WU ${endingFolderName}` as const
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantWithSameSmb3AndSmw = class ExistantAsNoVariant_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`${| 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        readonly #endingFolderName
        readonly #smbFileNames
        readonly #smb3SmwFileNames
        readonly #nsmbuFileNames

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, smbFileNames: Array<SMB_FILE_NAME>, smb3SmwFileNames: Array<SMB3_SMW_FILE_NAME>, nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#smbFileNames = smbFileNames
            this.#smb3SmwFileNames = smb3SmwFileNames
            this.#nsmbuFileNames = nsmbuFileNames
        }

        protected override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const fileNames_smb = this.#smbFileNames
            const fileNames_smb3Smw = this.#smb3SmwFileNames
            const fileNamesSize_smb3Smw = fileNames_smb3Smw.length
            const fileNames_nsmbu = this.#nsmbuFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`${| 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNames_smb.length + fileNamesSize_smb3Smw * 2 + fileNames_nsmbu.length,)

            let index = -1
            const folderName_smb = `M1 ${endingFolderName}` as const
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)

            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            forEachByArray(fileNames_smb3Smw, it => {
                imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smb3Smw] = [SMW, inGameImage(this, folderName_smw, it,),]
            },)
            index+= fileNamesSize_smb3Smw

            const folderName_nsmbu = `WU ${endingFolderName}` as const
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (no variant) --------------------
    //region -------------------- Sub class (blue variant) --------------------

    private static readonly ExistantAsBlueVariant = class ExistantAsBlueVariant_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        readonly #endingFolderName
        readonly #smbFileNames
        readonly #smb3FileNames
        readonly #smwFileNames
        readonly #nsmbuFileNames

        public constructor(englishName: NAME, endingFolderName: ENDING_FOLDER_NAME, smbFileNames: Array<SMB_FILE_NAME>, smb3FileNames: Array<SMB3_FILE_NAME>, smwFileNames: Array<SMW_FILE_NAME>, nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
            this.#endingFolderName = endingFolderName
            this.#smbFileNames = smbFileNames
            this.#smb3FileNames = smb3FileNames
            this.#smwFileNames = smwFileNames
            this.#nsmbuFileNames = nsmbuFileNames
        }

        protected override _createImageFiles() {
            const endingFolderName = this.#endingFolderName
            const fileNames_smb = this.#smbFileNames
            const fileNamesSize_smb = fileNames_smb.length
            const fileNames_smb3 = this.#smb3FileNames
            const fileNamesSize_smb3 = fileNames_smb3.length
            const fileNames_smw = this.#smwFileNames
            const fileNames_nsmbu = this.#nsmbuFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smb + fileNamesSize_smb3 + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smbAlt = `M1 ${endingFolderName} D` as const
            forEachByArray(fileNames_smb, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smb] = [SMB, inGameImage(this, folderName_smbAlt, it,),]
            },)
            index += fileNamesSize_smb

            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smb3Alt = `M3 ${endingFolderName} D` as const
            forEachByArray(fileNames_smb3, it => {
                imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smb3] = [SMB3, inGameImage(this, folderName_smb3Alt, it,),]
            },)
            index += fileNamesSize_smb3

            const folderName_smw = `MW ${endingFolderName}` as const
            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            const folderName_nsmbu = `WU ${endingFolderName}` as const
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (blue variant) --------------------
    //region -------------------- Sub class (predefined) --------------------

    /** A subclass of an {@link InGameEntityImages} for only the {@link WATER} */
    private static readonly ExistantAsWater = class ExistantAsWaterInGameEntityImages
        extends InGameEntityImages.Existant<'Water', | InGameImageFile<'M1 Object - WaterHalf', `wait.${| 0 | 1 | 2 | 3}`, 'Water'>
                                                     | InGameImageFile<'M3 Object - WaterHalf', `${| 'body' | 'top'}.${| 0 | 1 | 2 | 3}`, 'Water'>
                                                     | InGameImageFile<'MW Object - WaterHalf', `body.${| 0 | 1 | 2 | 3}`, 'Water'>> {

        public constructor() { super('Water',) }

        public override _createImageFiles() {
            return [
                [SMB,  inGameImage(this, 'M1 Object - WaterHalf', 'wait.0',),],
                [SMB,  inGameImage(this, 'M1 Object - WaterHalf', 'wait.1',),],
                [SMB,  inGameImage(this, 'M1 Object - WaterHalf', 'wait.2',),],
                [SMB,  inGameImage(this, 'M1 Object - WaterHalf', 'wait.3',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'body.0',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'body.1',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'body.2',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'body.3',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'top.0',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'top.1',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'top.2',),],
                [SMB3, inGameImage(this, 'M3 Object - WaterHalf', 'top.3',),],
                [SMW,  inGameImage(this, 'MW Object - WaterHalf', 'body.0',),],
                [SMW,  inGameImage(this, 'MW Object - WaterHalf', 'body.1',),],
                [SMW,  inGameImage(this, 'MW Object - WaterHalf', 'body.2',),],
                [SMW,  inGameImage(this, 'MW Object - WaterHalf', 'body.3',),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} for only the {@link MAGIKOOPA_PROJECTILE} */
    private static readonly ExistantAsMagikoopaProjectile = class ExistantAsMagicBallInGameEntityImages
        extends InGameEntityImages.Existant<'(Magikoopa’s projectile)', | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} Enemy - Kameck`, | `effect.${| 0 | 1 | 2}` | `wing_wait.${| 0 | 1}`, '(Magikoopa’s projectile)'>
                                                                        | InGameImageFile<`${| 'WU' | '3W'} Enemy - Kameck`, 'effect.0', '(Magikoopa’s projectile)'>> {

        public constructor() { super('(Magikoopa’s projectile)',) }

        public override _createImageFiles() {
            return [
                [SMB,   inGameImage(this, 'M1 Enemy - Kameck', 'effect.0',),],
                [SMB,   inGameImage(this, 'M1 Enemy - Kameck', 'effect.1',),],
                [SMB,   inGameImage(this, 'M1 Enemy - Kameck', 'effect.2',),],
                [SMB,   inGameImage(this, 'M1 Enemy - Kameck', 'wing_wait.0',),],
                [SMB,   inGameImage(this, 'M1 Enemy - Kameck', 'wing_wait.1',),],

                [SMB3,  inGameImage(this, 'M3 Enemy - Kameck', 'effect.0',),],
                [SMB3,  inGameImage(this, 'M3 Enemy - Kameck', 'effect.1',),],
                [SMB3,  inGameImage(this, 'M3 Enemy - Kameck', 'effect.2',),],
                [SMB3,  inGameImage(this, 'M3 Enemy - Kameck', 'wing_wait.0',),],
                [SMB3,  inGameImage(this, 'M3 Enemy - Kameck', 'wing_wait.1',),],

                [SMW,   inGameImage(this, 'MW Enemy - Kameck', 'effect.0',),],
                [SMW,   inGameImage(this, 'MW Enemy - Kameck', 'effect.1',),],
                [SMW,   inGameImage(this, 'MW Enemy - Kameck', 'effect.2',),],
                [SMW,   inGameImage(this, 'MW Enemy - Kameck', 'wing_wait.0',),],
                [SMW,   inGameImage(this, 'MW Enemy - Kameck', 'wing_wait.1',),],

                [NSMBU, inGameImage(this, 'WU Enemy - Kameck', 'effect.0',),],

                [SM3DW, inGameImage(this, '3W Enemy - Kameck', 'effect.0',),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} for only the {@link FIRE_BAR} */
    private static readonly ExistantAsFireBar = class ExistantAsMagicBallInGameEntityImages
        extends InGameEntityImages.Existant<'Fire Bar', | InGameImageFile<`${| 'M1' | 'M3'} Object - Firebar`, | 'block' | 'fire.0', 'Fire Bar'>
                                                        | InGameImageFile<'MW Object - Firebar', | 'block' | `fire.${| 0 | 1 | 2}`, 'Fire Bar'>
                                                        | InGameImageFile<'WU Object - Firebar', | 'center_firebar_Alb.000' | `firebar${| EmptyString | '_core'}`, 'Fire Bar'>> {

        public constructor() { super('Fire Bar',) }

        public override _createImageFiles() {
            return [
                [SMB,   inGameImage(this, 'M1 Object - Firebar', 'block',),],
                [SMB,   inGameImage(this, 'M1 Object - Firebar', 'fire.0',),],

                [SMB3,  inGameImage(this, 'M3 Object - Firebar', 'block',),],
                [SMB3,  inGameImage(this, 'M3 Object - Firebar', 'fire.0',),],

                [SMW,   inGameImage(this, 'MW Object - Firebar', 'block',),],
                [SMW,   inGameImage(this, 'MW Object - Firebar', 'fire.0',),],
                [SMW,   inGameImage(this, 'MW Object - Firebar', 'fire.1',),],
                [SMW,   inGameImage(this, 'MW Object - Firebar', 'fire.2',),],

                [NSMBU, inGameImage(this, 'WU Object - Firebar', 'center_firebar_Alb.000',),],
                [NSMBU, inGameImage(this, 'WU Object - Firebar', 'firebar',),],
                [NSMBU, inGameImage(this, 'WU Object - Firebar', 'firebar_core',),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} for only the {@link MAGIC_BALL_THROWN_BY_A_LEMMY} */
    private static readonly ExistantAsMagicBall = class ExistantAsMagicBallInGameEntityImages
        extends InGameEntityImages.Existant<'Magic Ball thrown by a Lemmy', | InGameImageFile<`${| 'M1' | 'M3'} Enemy - Lemmy`, 'ball.0', 'Magic Ball thrown by a Lemmy'>
                                                                            | InGameImageFile<'MW Enemy - Lemmy', `ball${| '.0' | '_specular'}`, 'Magic Ball thrown by a Lemmy'>> {

        public constructor() { super('Magic Ball thrown by a Lemmy',) }

        public override _createImageFiles() {
            return [
                [SMB,  inGameImage(this, 'M1 Enemy - Lemmy', 'ball.0',),],
                [SMB3, inGameImage(this, 'M3 Enemy - Lemmy', 'ball.0',),],
                [SMW,  inGameImage(this, 'MW Enemy - Lemmy', 'ball.0',),],
                [SMW,  inGameImage(this, 'MW Enemy - Lemmy', 'ball_specular',),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} for only the {@link AXE} */
    private static readonly ExistantAsAxe = class ExistantAsMagicBallInGameEntityImages
        extends InGameEntityImages.Existant<'Axe', | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} Object - Ono`, | `wait.${| 0 | 1 | 2 | 3}` | 'ono_Xlu', 'Axe'>
                                                   | InGameImageFile<'WU Object - Ono', | `ono_Alb.00${| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7}` | 'onoXlu_Alb.000', 'Axe'>> {

        public constructor() { super('Axe',) }

        public override _createImageFiles() {
            return [
                [SMB,   inGameImage(this, 'M1 Object - Ono', 'wait.0',),],
                [SMB,   inGameImage(this, 'M1 Object - Ono', 'wait.1',),],
                [SMB,   inGameImage(this, 'M1 Object - Ono', 'wait.2',),],
                [SMB,   inGameImage(this, 'M1 Object - Ono', 'wait.3',),],
                [SMB,   inGameImage(this, 'M1 Object - Ono', 'ono_Xlu',),],

                [SMB3,  inGameImage(this, 'M3 Object - Ono', 'wait.0',),],
                [SMB3,  inGameImage(this, 'M3 Object - Ono', 'wait.1',),],
                [SMB3,  inGameImage(this, 'M3 Object - Ono', 'wait.2',),],
                [SMB3,  inGameImage(this, 'M3 Object - Ono', 'wait.3',),],
                [SMB3,  inGameImage(this, 'M3 Object - Ono', 'ono_Xlu',),],

                [SMW,   inGameImage(this, 'MW Object - Ono', 'wait.0',),],
                [SMW,   inGameImage(this, 'MW Object - Ono', 'wait.1',),],
                [SMW,   inGameImage(this, 'MW Object - Ono', 'wait.2',),],
                [SMW,   inGameImage(this, 'MW Object - Ono', 'wait.3',),],
                [SMW,   inGameImage(this, 'MW Object - Ono', 'ono_Xlu',),],

                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.000',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.001',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.002',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.003',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.004',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.005',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.006',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'ono_Alb.007',),],
                [NSMBU, inGameImage(this, 'WU Object - Ono', 'onoXlu_Alb.000',),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} for only the {@link BUBBLE} */
    private static readonly ExistantAsBubble = class ExistantAsBubbleInGameEntityImages
        extends InGameEntityImages.Existant<'Bubble', | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} Object - Balloon`, 'balloon.0', 'Bubble'>
                                                      | InGameImageFile<'WU Object - Balloon', `balloon${| EmptyString | 2}.0`, 'Bubble'>
                                                      | InGameImageFile<'3W Object - Balloon', 'TractorBubble_Alb', 'Bubble'>> {

        public constructor() { super('Bubble',) }

        public override _createImageFiles() {
            return [
                [SMB,   inGameImage(this, 'M1 Object - Balloon', 'balloon.0',),],
                [SMB3,  inGameImage(this, 'M3 Object - Balloon', 'balloon.0',),],
                [SMW,   inGameImage(this, 'MW Object - Balloon', 'balloon.0',),],
                [NSMBU, inGameImage(this, 'WU Object - Balloon', 'balloon.0',),],
                [NSMBU, inGameImage(this, 'WU Object - Balloon', 'balloon2.0',),],
                [SM3DW, inGameImage(this, '3W Object - Balloon', 'TractorBubble_Alb',),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (predefined) --------------------

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new InGameEntityImages.Null()
    public static readonly START_GROUND =                                  new InGameEntityImages.Null()
    public static readonly GOAL_GROUND =                                   new InGameEntityImages.Null()

    public static readonly STEEP_SLOPE =                                   new InGameEntityImages.Null()
    public static readonly GENTLE_SLOPE =                                  new InGameEntityImages.Null()

    public static readonly START_BLOCK =                                   new InGameEntityImages.ExistantAsOneInNotSm3dw('Start Block', 'Object - StartBlock', 'startblock',)
    public static readonly OCCLUDE_BLOCK =                                 new InGameEntityImages.Null()

    public static readonly WATER =                                         new InGameEntityImages.ExistantAsWater()
    public static readonly LAVA =                                          new InGameEntityImages.ExistantAsFourInNotNsmbuAndSm3dw('Lava', 'Object - MagmaHalf', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)
    public static readonly POISON =                                        new InGameEntityImages.ExistantAsFourInNotNsmbuAndSm3dw('Poison', 'Object - PoisonHalf', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)

    public static readonly PIPE =                                          new InGameEntityImages.Null()
    public static readonly CLEAR_PIPE =                                    new InGameEntityImages.Null()

    public static readonly SPIKE_TRAP =                                    new InGameEntityImages.Null()
    public static readonly JELECTRO =                                      new InGameEntityImages.Null()
    public static readonly SEA_URCHIN =                                    new InGameEntityImages.Null()
    public static readonly SPIKE_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly MUSHROOM_PLATFORM =                             new InGameEntityImages.Null()
    public static readonly SEMISOLID_PLATFORM =                            new InGameEntityImages.Null()
    public static readonly BRIDGE =                                        new InGameEntityImages.Null()

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new InGameEntityImages.Null()
    public static readonly CRISTAL_BLOCK =                                 new InGameEntityImages.Null()
    public static readonly ROTATING_BLOCK =                                new InGameEntityImages.Null()

    public static readonly HARD_BLOCK =                                    new InGameEntityImages.Null()
    public static readonly ROCK_BLOCK =                                    new InGameEntityImages.Null()

    public static readonly QUESTION_MARK_BLOCK =                           new InGameEntityImages.Null()
    public static readonly HIDDEN_BLOCK =                                  new InGameEntityImages.Null()
    public static readonly EMPTY_BLOCK =                                   new InGameEntityImages.ExistantAsOneInNotSm3dw('Empty Block', 'Object - BlockKara', 'wait.0',)

    public static readonly EXCLAMATION_MARK_BLOCK =                        new InGameEntityImages.Null()

    public static readonly NOTE_BLOCK =                                    new InGameEntityImages.Null()
    public static readonly MUSIC_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly DONUT_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly CLOUD_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly ON_OFF_SWITCH =                                 new InGameEntityImages.Null()
    public static readonly DOTTED_LINE_BLOCK =                             new InGameEntityImages.Null()

    public static readonly P_BLOCK =                                       new InGameEntityImages.Null()

    public static readonly BLINKING_BLOCK =                                new InGameEntityImages.Null()

    public static readonly ICE_BLOCK =                                     new InGameEntityImages.Null()
    public static readonly ICICLE =                                        new InGameEntityImages.Null()

    public static readonly COIN =                                          new InGameEntityImages.Null()
    public static readonly FROZEN_COIN =                                   new InGameEntityImages.Null()
    public static readonly TEN_COIN =                                      new InGameEntityImages.Null()
    public static readonly THIRTY_COIN =                                   new InGameEntityImages.Null()
    public static readonly FIFTY_COIN =                                    new InGameEntityImages.Null()
    public static readonly PINK_COIN =                                     new InGameEntityImages.Null()

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    public static readonly SUPER_MUSHROOM =                                new InGameEntityImages.Null()

    public static readonly FIRE_FLOWER =                                   new InGameEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new InGameEntityImages.Null()

    public static readonly SUPERBALL_FLOWER =                              new InGameEntityImages.Null()
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new InGameEntityImages.ExistantAsOneInOnlySmb('Superball thrown by a player', 'M1 Object - Superball', 'superball',)

    public static readonly MYSTERY_MUSHROOM =                              new InGameEntityImages.ExistantAsOneInOnlySmb('Mystery Mushroom', 'M1 Item - CharaKinoko', 'Add_kinoko',)
    public static readonly WEIRD_MUSHROOM =                                new InGameEntityImages.ExistantAsOneInOnlySmb('Weird Mushroom', 'M1 Item - KinokoFunny', 'kinokofunny.0',)

    public static readonly MASTER_SWORD =                                  new InGameEntityImages.Null()
    public static readonly BOMB_THROWN_BY_A_LINK =                         new InGameEntityImages.ExistantAsThreeInOnlySmb('Bomb thrown by a Link', 'M1 Enemy - LinkBomb', 'wait.0', 'walk.0', 'walk.1',)
    public static readonly ARROW_THROWN_BY_A_LINK =                        new InGameEntityImages.ExistantAsOneInOnlySmb('Arrow thrown by a Link', 'M1 Object - Arrow', 'arrow',)

    public static readonly BIG_MUSHROOM =                                  new InGameEntityImages.Null()
    public static readonly BIG_MUSHROOM_CLASSIC =                          new InGameEntityImages.ExistantAsOneInNotSm3dw('Big Mushroom (classic)', 'Item - MegaKinoko', 'wait.0',)
    public static readonly BIG_MUSHROOM_MODERN =                           new InGameEntityImages.ExistantAsOneInNotSm3dw('Big Mushroom (modern)', 'Item - MegaKinoko2', 'wait.0',)

    public static readonly SMB2_MUSHROOM =                                 new InGameEntityImages.Null()

    public static readonly SUPER_LEAF =                                    new InGameEntityImages.Null()

    public static readonly FROG_SUIT =                                     new InGameEntityImages.Null()

    public static readonly CAPE_FEATHER =                                  new InGameEntityImages.Null()

    public static readonly POWER_BALLOON =                                 new InGameEntityImages.Null()

    public static readonly PROPELLER_MUSHROOM =                            new InGameEntityImages.Null()

    public static readonly SUPER_ACORN =                                   new InGameEntityImages.Null()

    public static readonly SUPER_BELL =                                    new InGameEntityImages.Null()

    public static readonly SUPER_HAMMER =                                  new InGameEntityImages.Null()
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new InGameEntityImages.Null()

    public static readonly BOOMERANG_FLOWER =                              new InGameEntityImages.Null()
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new InGameEntityImages.Null()

    public static readonly CANNON_BOX =                                    new InGameEntityImages.Null()
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new InGameEntityImages.Null()

    public static readonly PROPELLER_BOX =                                 new InGameEntityImages.Null()

    public static readonly GOOMBA_MASK =                                   new InGameEntityImages.Null()

    public static readonly BULLET_BILL_MASK =                              new InGameEntityImages.Null()

    public static readonly RED_POW_BOX =                                   new InGameEntityImages.Null()

    public static readonly SUPER_STAR =                                    new InGameEntityImages.Null()

    public static readonly ONE_UP_MUSHROOM =                               new InGameEntityImages.Null()
    public static readonly ROTTEN_MUSHROOM =                               new InGameEntityImages.Null()

    public static readonly SHOE_GOOMBA =                                   new InGameEntityImages.ExistantAsTwoInOnlySmbAndSmb3('Shoe Goomba', 'Enemy - KutsuKuriboA', 'edit_drag.0', 'edit_drag.1',)
    public static readonly SHOE =                                          new InGameEntityImages.ExistantAsTwoInOnlySmbAndSmb3('Shoe', 'Enemy - KutsuKuriboA', 'wait.0', 'wait.1',)
    public static readonly STILETTO_GOOMBA =                               new InGameEntityImages.ExistantAsTwoInOnlySmbAndSmb3('Stiletto Goomba', 'Enemy - KutsuKuriboB', 'edit_drag.0', 'edit_drag.1',)
    public static readonly STILETTO =                                      new InGameEntityImages.ExistantAsTwoInOnlySmbAndSmb3('Stiletto', 'Enemy - KutsuKuriboB', 'wait.0', 'wait.1',)
    public static readonly YOSHI_EGG =                                     new InGameEntityImages.ExistantAsTwoInOnlySmw('Yoshi’s Egg', 'MW Enemy - KutsuKuriboA', 'wait.0', 'wait.1',)//TODO add NSMBU yoshi egg (if present)
    public static readonly YOSHI =                                         new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new InGameEntityImages.ExistantAsTwoInOnlySmw('Fire thrown by a Yoshi', 'MW Player - YoshiFire', 'wait.0', 'wait.1',)//TODO add NSMBU "Yoshi fire thrown" (if present)
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new InGameEntityImages.ExistantAsTwoInOnlySmw('Poison thrown by a Yoshi', 'MW Player - YoshiPoison', 'wait.0', 'wait.1',)//TODO add NSMBU "Yoshi poison thrown" (if present)
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new InGameEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new InGameEntityImages.Null()
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new InGameEntityImages.Null()
    public static readonly RED_YOSHI_EGG =                                 new InGameEntityImages.ExistantAsTwoInOnlySmw('Red Yoshi’s Egg', 'MW Enemy - KutsuKuriboB', 'wait.0', 'wait.1',)//TODO add NSMBU yoshi egg (if present)
    public static readonly RED_YOSHI =                                     new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new InGameEntityImages.Null()

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    public static readonly GOOMBA =                                        new InGameEntityImages.Null()
    public static readonly GALOOMBA =                                      new InGameEntityImages.Null()
    public static readonly GOOMBRAT =                                      new InGameEntityImages.Null()
    public static readonly GOOMBUD =                                       new InGameEntityImages.Null()

    public static readonly GREEN_KOOPA_TROOPA =                            new InGameEntityImages.Null()
    public static readonly RED_KOOPA_TROOPA =                              new InGameEntityImages.Null()
    public static readonly GREEN_BEACH_KOOPA =                             new InGameEntityImages.Null()
    public static readonly RED_BEACH_KOOPA =                               new InGameEntityImages.Null()
    public static readonly GREEN_KOOPA_SHELL =                             new InGameEntityImages.Null()
    public static readonly RED_KOOPA_SHELL =                               new InGameEntityImages.Null()

    public static readonly DRY_BONES =                                     new InGameEntityImages.Null()
    public static readonly PARABONES =                                     new InGameEntityImages.Null()
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new InGameEntityImages.ExistantAsFourInOnlySmw('Bone thrown by a Dry Bones', 'MW Enemy - Karon', 'bone.0', 'bone.1', 'bone.2', 'bone.3',)
    public static readonly DRY_BONES_SHELL =                               new InGameEntityImages.Null()

    public static readonly BUZZY_BEETLE =                                  new InGameEntityImages.Null()
    public static readonly PARA_BEETLE =                                   new InGameEntityImages.Null()
    public static readonly BUZZY_SHELL =                                   new InGameEntityImages.Null()

    public static readonly SPINY =                                         new InGameEntityImages.Null()
    public static readonly WINGED_SPINY =                                  new InGameEntityImages.Null()
    public static readonly WINGED_SPINY_PROJECTILE =                       new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Winged Spiny’s projectile)', 'Enemy - Togezo', 'toge.0',)
    public static readonly SPINY_EGG =                                     new InGameEntityImages.ExistantAsTwoInNotNsmbuAndSm3dw('Spiny Egg', 'Enemy - Paipo', 'wait.0', 'wait.1',)
    public static readonly SPINY_SHELL =                                   new InGameEntityImages.Null()

    public static readonly SPIKE_TOP =                                     new InGameEntityImages.Null()
    public static readonly WINGED_SPIKE_TOP =                              new InGameEntityImages.Null()
    public static readonly FAST_SPIKE_TOP =                                new InGameEntityImages.Null()
    public static readonly FAST_WINGED_SPIKE_TOP =                         new InGameEntityImages.Null()

    public static readonly SKIPSQUEAK =                                    new InGameEntityImages.Null()
    public static readonly SPINY_SKIPSQUEAK =                              new InGameEntityImages.Null()

    public static readonly ANT_TROOPER =                                   new InGameEntityImages.Null()
    public static readonly HORNED_ANT_TROOPER =                            new InGameEntityImages.Null()

    public static readonly STINGBY =                                       new InGameEntityImages.Null()

    public static readonly CHEEP_CHEEP =                                   new InGameEntityImages.Null()
    public static readonly BLURPS =                                        new InGameEntityImages.Null()
    public static readonly DEEP_CHEEP =                                    new InGameEntityImages.Null()
    public static readonly FISH_BONE =                                     new InGameEntityImages.Null()

    public static readonly BLOOPER =                                       new InGameEntityImages.Null()
    public static readonly BLOOPER_NANNY =                                 new InGameEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new InGameEntityImages.ExistantAsTwoInNotNsmbuAndSm3dw('Baby Blooper', 'Enemy - GessoMini', 'wait.0', 'wait.1',)

    public static readonly PORCUPUFFER =                                   new InGameEntityImages.Null()

    public static readonly WIGGLER =                                       new InGameEntityImages.Null()
    public static readonly ANGRY_WIGGLER =                                 new InGameEntityImages.Null()

    public static readonly PIRANHA_PLANT =                                 new InGameEntityImages.Null()
    public static readonly JUMPING_PIRANHA_PLANT =                         new InGameEntityImages.Null()
    public static readonly FIRE_PIRANHA_PLANT =                            new InGameEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new InGameEntityImages.Null()
    public static readonly MUNCHER =                                       new InGameEntityImages.Null()
    public static readonly PIRANHA_CREEPER =                               new InGameEntityImages.Null()

    public static readonly CHAIN_CHOMP =                                   new InGameEntityImages.Null()
    public static readonly UNCHAINED_CHOMP =                               new InGameEntityImages.Null()
    public static readonly CHAIN_CHOMP_STUMP =                             new InGameEntityImages.Null()

    public static readonly SPIKE =                                         new InGameEntityImages.Null()
    public static readonly SPIKE_BALL =                                    new InGameEntityImages.Null()
    public static readonly SNOWBALL =                                      new InGameEntityImages.Null()

    public static readonly LAKITU =                                        new InGameEntityImages.Null()
    public static readonly LAKITU_CLOUD =                                  new InGameEntityImages.Null()

    public static readonly BOO =                                           new InGameEntityImages.Null()
    public static readonly STRETCH =                                       new InGameEntityImages.Null()
    public static readonly BOO_BUDDIES =                                   new InGameEntityImages.Null()
    public static readonly PEEPA =                                         new InGameEntityImages.Null()

    public static readonly BOB_OMB =                                       new InGameEntityImages.ExistantAsBlueVariant('Bob-omb', 'Enemy Bombhei', ['damage.0', 'fly.0', 'parawait.0', 'parawait.1', 'walk.0', 'walk.1',], ['damage.0', 'fly.0', 'parawait.0', 'parawait.1', 'walk.0', 'walk.1',], ['damage.0', 'fly.0', 'walk.0', 'walk.1',], ['fly_Alb.000', 'fly_Alb.002', 'fly_Alb.004', 'fly_Alb.006', 'fly_Alb.008', 'fly_Alb.010', 'fly_Alb.012', 'fly_Alb.014', 'fly_Alb.016', 'fly_Alb.018', 'fly_Alb.020', 'fly_Alb.022', 'fly_Alb.024', 'fly_Alb.026', 'fly_Alb.028', 'fly_Alb.030', 'fly_Alb32', 'fly_Alb34', 'fly_Alb36', 'fly_Alb38', 'fly_Alb39', 'stop_Alb000', 'walk_Alb000', 'walk_Alb001', 'walk_Alb002', 'walk_Alb003', 'walk_Alb004', 'walk_Alb005', 'walk_Alb006', 'walk_Alb007', 'walk_Alb008', 'walk_Alb009', 'walk_Alb010', 'walk_Alb011', 'walk_Alb012', 'walk_Alb013', 'walk_Alb014', 'walk_Alb015', 'walk_Alb016', 'walk_Alb017', 'walk_Alb018', 'walk_Alb019',],)
    public static readonly LIT_BOB_OMB =                                   new InGameEntityImages.Null()

    public static readonly POKEY =                                         new InGameEntityImages.Null()
    public static readonly SNOW_POKEY =                                    new InGameEntityImages.Null()

    public static readonly THWOMP =                                        new InGameEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new InGameEntityImages.Null()
    public static readonly ROCKY_WRENCH =                                  new InGameEntityImages.Null()
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new InGameEntityImages.ExistantAsFourInNotNsmbuAndSm3dw('Wrench thrown by a Rocky Wrench', 'Enemy - Poo', 'hammer.0', 'hammer.1', 'hammer.2', 'hammer.3',)

    public static readonly MAGIKOOPA =                                     new InGameEntityImages.Null()
    public static readonly MAGIKOOPA_PROJECTILE =                          new InGameEntityImages.ExistantAsMagikoopaProjectile()

    public static readonly HAMMER_BRO =                                    new InGameEntityImages.ExistantAsNoVariantWithSameSmb3AndSmw('Hammer Bro', 'Enemy - Bros', ['throw.0', 'throw.1', 'walk.0', 'walk.1',], ['jump.0', 'throw.0', 'throw.1', 'walk.0', 'walk.1',],
        ['dead_Alb.000', 'dead_Alb.002', 'dead_Alb.004', 'dead_Alb.006', 'dead_Alb.008', 'dead_Alb.010', 'dead_Alb.012', 'dead_Alb.014',
            'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006', 'jump_ed_Alb.008', 'jump_ed_Alb.010', 'jump_ed_Alb.012',
            'jump_md_Alb.000', 'jump_md_Alb.004', 'jump_md_Alb.008', 'jump_md_Alb.012', 'jump_md_Alb.016', 'jump_md_Alb.020', 'jump_md_Alb.024', 'jump_md_Alb.028', 'jump_md_Alb.032', 'jump_md_Alb.036', 'jump_md_Alb.040', 'jump_md_Alb.044', 'jump_md_Alb.048', 'jump_md_Alb.052', 'jump_md_Alb.056', 'jump_md_Alb.060',
            'jump_st_Alb.000', 'jump_st_Alb.002', 'jump_st_Alb.004', 'jump_st_Alb.006', 'jump_st_Alb.008', 'jump_st_Alb.010',
            'parawait_Alb.000', 'parawait_Alb.002', 'parawait_Alb.004', 'parawait_Alb.006', 'parawait_Alb.008', 'parawait_Alb.010', 'parawait_Alb.012', 'parawait_Alb.014', 'parawait_Alb.016', 'parawait_Alb.018', 'parawait_Alb.020', 'parawait_Alb.022', 'parawait_Alb.024', 'parawait_Alb.026', 'parawait_Alb.028', 'parawait_Alb.030', 'parawait_Alb.032', 'parawait_Alb.034', 'parawait_Alb.036', 'parawait_Alb.038', 'parawait_Alb.040', 'parawait_Alb.042', 'parawait_Alb.044', 'parawait_Alb.046', 'parawait_Alb.048', 'parawait_Alb.050', 'parawait_Alb.052', 'parawait_Alb.054', 'parawait_Alb.056', 'parawait_Alb.058',
            'throw_Alb.000', 'throw_Alb.002', 'throw_Alb.004', 'throw_Alb.006', 'throw_Alb.008', 'throw_Alb.010', 'throw_Alb.014', 'throw_Alb.016', 'throw_Alb.018', 'throw_Alb.020', 'throw_Alb.022', 'throw_Alb.024', 'throw_Alb.026', 'throw_Alb.028', 'throw_Alb.030', 'throw_Alb.032', 'throw_Alb.034', 'throw_Alb.036', 'throw_Alb.038', 'throw_Alb.040', 'throw_Alb.042', 'throw_Alb.044', 'throw_Alb.046', 'throw_Alb.048', 'throw_Alb.050', 'throw_Alb.052', 'throw_Alb.054', 'throw_Alb.056', 'throw_Alb.058', 'throw_Alb.060',
            'throw_held_Alb.000', 'throw_held_Alb.002', 'throw_held_Alb.004', 'throw_held_Alb.006', 'throw_held_Alb.008', 'throw_held_Alb.010', 'throw_held_Alb.014', 'throw_held_Alb.016', 'throw_held_Alb.018', 'throw_held_Alb.020', 'throw_held_Alb.022', 'throw_held_Alb.024', 'throw_held_Alb.026', 'throw_held_Alb.028', 'throw_held_Alb.030', 'throw_held_Alb.032', 'throw_held_Alb.034', 'throw_held_Alb.036', 'throw_held_Alb.038', 'throw_held_Alb.040', 'throw_held_Alb.042', 'throw_held_Alb.044', 'throw_held_Alb.046', 'throw_held_Alb.048', 'throw_held_Alb.050', 'throw_held_Alb.052', 'throw_held_Alb.054', 'throw_held_Alb.056', 'throw_held_Alb.058', 'throw_held_Alb.060', 'throw_held_Alb.062', 'throw_held_Alb.064', 'throw_held_Alb.066',
            'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018', 'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.031',],)
    public static readonly SLEDGE_BRO =                                    new InGameEntityImages.ExistantAsNoVariantWithSameSmb3AndSmw('Sledge Bro', 'Enemy - BrosMega', ['throw.0', 'throw.1', 'walk.0', 'walk.1',], ['jump.0', 'throw.0', 'throw.1', 'walk.0', 'walk.1',],
        ['jump_attack_Alb.000', 'jump_attack_Alb.004', 'jump_attack_Alb.008', 'jump_attack_Alb.012', 'jump_attack_Alb.016', 'jump_attack_Alb.020', 'jump_attack_Alb.024', 'jump_attack_Alb.028', 'jump_attack_Alb.032', 'jump_attack_Alb.036', 'jump_attack_Alb.040',
            'jump_attack_ed_Alb.000', 'jump_attack_ed_Alb.003', 'jump_attack_ed_Alb.006', 'jump_attack_ed_Alb.009', 'jump_attack_ed_Alb.012', 'jump_attack_ed_Alb.015',
            'jump_attack_stop_Alb.000', 'jump_attack_stop_Alb.001', 'jump_attack_stop_Alb.002', 'jump_attack_stop_Alb.003', 'jump_attack_stop_Alb.004', 'jump_attack_stop_Alb.005', 'jump_attack_stop_Alb.006',
            'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006', 'jump_ed_Alb.008', 'jump_ed_Alb.010', 'jump_ed_Alb.012', 'jump_ed_Alb.014', 'jump_ed_Alb.016', 'jump_ed_Alb.018', 'jump_ed_Alb.020', 'jump_ed_Alb.022',
            'jump_st_Alb.004', 'jump_st_Alb.006', 'jump_st_Alb.008', 'jump_st_Alb.010', 'jump_st_Alb.012', 'jump_st_Alb.014', 'jump_st_Alb.016',
            'parawait_Alb.000', 'parawait_Alb.002', 'parawait_Alb.004', 'parawait_Alb.006', 'parawait_Alb.008', 'parawait_Alb.010', 'parawait_Alb.012', 'parawait_Alb.014', 'parawait_Alb.016', 'parawait_Alb.018', 'parawait_Alb.020', 'parawait_Alb.022', 'parawait_Alb.024', 'parawait_Alb.026', 'parawait_Alb.028', 'parawait_Alb.030', 'parawait_Alb.032', 'parawait_Alb.034', 'parawait_Alb.036', 'parawait_Alb.038', 'parawait_Alb.040', 'parawait_Alb.042', 'parawait_Alb.044', 'parawait_Alb.046', 'parawait_Alb.048', 'parawait_Alb.050', 'parawait_Alb.052', 'parawait_Alb.054', 'parawait_Alb.056', 'parawait_Alb.058',
            'throw_L_Alb.004', 'throw_L_Alb.006', 'throw_L_Alb.008', 'throw_L_Alb.010', 'throw_L_Alb.014', 'throw_L_Alb.016', 'throw_L_Alb.018', 'throw_L_Alb.020', 'throw_L_Alb.022', 'throw_L_Alb.024', 'throw_L_Alb.026', 'throw_L_Alb.028', 'throw_L_Alb.030', 'throw_L_Alb.032', 'throw_L_Alb.034', 'throw_L_Alb.036', 'throw_L_Alb.038', 'throw_L_Alb.040', 'throw_L_Alb.042', 'throw_L_Alb.044', 'throw_L_Alb.046', 'throw_L_Alb.048', 'throw_L_Alb.050', 'throw_L_Alb.052',
            'throw_L_held_Alb.000', 'throw_L_held_Alb.002', 'throw_L_held_Alb.004', 'throw_L_held_Alb.006', 'throw_L_held_Alb.008', 'throw_L_held_Alb.010', 'throw_L_held_Alb.014', 'throw_L_held_Alb.016', 'throw_L_held_Alb.018', 'throw_L_held_Alb.020', 'throw_L_held_Alb.022', 'throw_L_held_Alb.024', 'throw_L_held_Alb.026', 'throw_L_held_Alb.028', 'throw_L_held_Alb.030', 'throw_L_held_Alb.032', 'throw_L_held_Alb.034', 'throw_L_held_Alb.036', 'throw_L_held_Alb.038', 'throw_L_held_Alb.040', 'throw_L_held_Alb.042', 'throw_L_held_Alb.044', 'throw_L_held_Alb.046', 'throw_L_held_Alb.048', 'throw_L_held_Alb.050', 'throw_L_held_Alb.052',
            'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018', 'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.032',],)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new InGameEntityImages.ExistantAsOneInNotSm3dwButDifferentNsmbu('Hammer thrown by a Hammer / Sledge Bro', 'Enemy - Bros', 'hammer.0', 'bros_hammer_Alb.000',)
    public static readonly FIRE_BRO =                                      new InGameEntityImages.Null()
    public static readonly HEAVY_FIRE_BRO =                                new InGameEntityImages.Null()
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new InGameEntityImages.Null()

    public static readonly LAVA_BUBBLE =                                   new InGameEntityImages.Null()

    public static readonly MECHAKOOPA =                                    new InGameEntityImages.Null()
    public static readonly BLASTA_MECHAKOOPA =                             new InGameEntityImages.Null()
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new InGameEntityImages.ExistantAsTwoInSm3dwAndOneNsmbu('Homing Missile thrown by a Blasta Mechakoopa', 'Enemy - KoopaMechaMissile', 'missile.0', 'missile.1', 'mechabomb_Alb.000',)
    public static readonly ZAPPA_MECHAKOOPA =                              new InGameEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new InGameEntityImages.Null()

    public static readonly CHARVAARGH =                                    new InGameEntityImages.Null()

    public static readonly BULLY =                                         new InGameEntityImages.Null()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new InGameEntityImages.Null()
    public static readonly BULLET_BILL =                                   new InGameEntityImages.Null()
    public static readonly BULL_EYE_BLASTER =                              new InGameEntityImages.Null()
    public static readonly BULL_EYE_BILL =                                 new InGameEntityImages.Null()
    public static readonly CAT_BULLET_BILL =                               new InGameEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new InGameEntityImages.Null()
    public static readonly BULL_EYE_BANZAI =                               new InGameEntityImages.Null()
    public static readonly CAT_BANZAI_BILL =                               new InGameEntityImages.Null()

    public static readonly CANNON =                                        new InGameEntityImages.Null()
    public static readonly CANNONBALL =                                    new InGameEntityImages.Null()
    public static readonly RED_CANNON =                                    new InGameEntityImages.Null()
    public static readonly RED_CANNONBALL =                                new InGameEntityImages.Null()

    public static readonly BURNER =                                        new InGameEntityImages.Null()

    public static readonly FIRE_BAR =                                      new InGameEntityImages.ExistantAsFireBar()

    public static readonly SKEWER =                                        new InGameEntityImages.Null()

    public static readonly KOOPA_CLOWN_CAR =                               new InGameEntityImages.Null()
    public static readonly JUNIOR_CLOWN_CAR =                              new InGameEntityImages.Null()
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new InGameEntityImages.Null()
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new InGameEntityImages.Null()

    public static readonly KOOPA_TROOPA_CAR =                              new InGameEntityImages.Null()
    public static readonly CAR =                                           new InGameEntityImages.Null()

    public static readonly GRINDER =                                       new InGameEntityImages.Null()

    public static readonly ANGRY_SUN =                                     new InGameEntityImages.Null()
    public static readonly MOON =                                          new InGameEntityImages.Null()

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    public static readonly BOWSER =                                        new InGameEntityImages.Null()
    public static readonly MEOWSER =                                       new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new InGameEntityImages.ExistantAsTwoInNotNsmbuAndSm3dw('Fire thrown by a Bowser', 'Enemy - Koopa', 'effect.0', 'effect.1',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new InGameEntityImages.ExistantAsFourInOnlySmw('Falling Fire thrown by a Bowser', 'MW Enemy - Koopa', 'firewait.0', 'firewait.1', 'firewait.2', 'firewait.3',)

    public static readonly BOWSER_JR =                                     new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new InGameEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new InGameEntityImages.Null()
    public static readonly POM_POM =                                       new InGameEntityImages.Null()
    public static readonly POM_POM_CLONE =                                 new InGameEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new InGameEntityImages.Null()

    public static readonly LARRY =                                         new InGameEntityImages.Null()
    public static readonly LARRY_WAND =                                    new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Larry’s Wand', 'Enemy - Larry', 'wand',)
    public static readonly LARRY_PROJECTILE =                              new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Larry’s projectile)', 'Enemy - Larry', 'effect.0',)

    public static readonly IGGY =                                          new InGameEntityImages.Null()
    public static readonly IGGY_WAND =                                     new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Iggy’s Wand', 'Enemy - Iggy', 'wand',)
    public static readonly IGGY_PROJECTILE =                               new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Iggy’s projectile)', 'Enemy - Iggy', 'effect.0',)

    public static readonly WENDY =                                         new InGameEntityImages.Null()
    public static readonly WENDY_WAND =                                    new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Wendy’s Wand', 'Enemy - Wendy', 'wand',)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new InGameEntityImages.ExistantAsThreeInNotNsmbuAndSm3dw('Candy Ring thrown by a Wendy', 'Enemy - Wendy', 'ring.0', 'ring.1', 'ring.2',)
    public static readonly WENDY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly LEMMY =                                         new InGameEntityImages.Null()
    public static readonly LEMMY_WAND =                                    new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Lemmy’s Wand', 'Enemy - Lemmy', 'wand',)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new InGameEntityImages.ExistantAsMagicBall()
    public static readonly LEMMY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly ROY =                                           new InGameEntityImages.Null()
    public static readonly ROY_WAND =                                      new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Roy’s Wand', 'Enemy - Roy', 'wand',)
    public static readonly ROY_PROJECTILE =                                new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Roy’s projectile)', 'Enemy - Roy', 'effect.0',)

    public static readonly MORTON =                                        new InGameEntityImages.Null()
    public static readonly MORTON_WAND =                                   new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Morton’s Wand', 'Enemy - Morton', 'wand',)
    public static readonly MORTON_THROWN_PROJECTILE =                      new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Morton’s Thrown projectile)', 'Enemy - Morton', 'effect.0',)
    public static readonly MORTON_GROUND_PROJECTILE =                      new InGameEntityImages.ExistantAsTwoInNotNsmbuAndSm3dw('(Morton’s Ground projectile)', 'Enemy - Morton', 'fire.0', 'fire.1',)

    public static readonly LUDWIG =                                        new InGameEntityImages.Null()
    public static readonly LUDWIG_WAND =                                   new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Ludwig’s Wand', 'Enemy - Ludwig', 'wand',)
    public static readonly LUDWIG_PROJECTILE =                             new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Ludwig’s projectile)', 'Enemy - Ludwig', 'effect.0',)

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new InGameEntityImages.Null()

    public static readonly SWINGING_CLAW =                                 new InGameEntityImages.Null()

    public static readonly TWISTER =                                       new InGameEntityImages.Null()

    public static readonly ONE_WAY_WALL =                                  new InGameEntityImages.Null()

    public static readonly TRACK =                                         new InGameEntityImages.Null()
    public static readonly TRACK_BLOCK =                                   new InGameEntityImages.Null()

    public static readonly VINE =                                          new InGameEntityImages.Null()
    public static readonly TREE =                                          new InGameEntityImages.Null()

    public static readonly STARTING_ARROW =                                new InGameEntityImages.Null()
    public static readonly ARROW_SIGN =                                    new InGameEntityImages.Null()

    public static readonly CHECKPOINT_FLAG =                               new InGameEntityImages.Null()
    public static readonly GOAL_POLE =                                     new InGameEntityImages.Null()
    public static readonly GOAL_WITH_CARDS =                               new InGameEntityImages.Null()
    public static readonly GIANT_GATE =                                    new InGameEntityImages.Null()

    public static readonly CASTLE =                                        new InGameEntityImages.Null()
    public static readonly ENDING_CASTLE_DOOR =                            new InGameEntityImages.Null()
    public static readonly AXE =                                           new InGameEntityImages.ExistantAsAxe()

    public static readonly DASH_BLOCK =                                    new InGameEntityImages.Null()

    public static readonly SNAKE_BLOCK =                                   new InGameEntityImages.Null()
    public static readonly FAST_SNAKE_BLOCK =                              new InGameEntityImages.Null()

    public static readonly CONVEYOR_BELT =                                 new InGameEntityImages.Null()
    public static readonly FAST_CONVEYOR_BELT =                            new InGameEntityImages.Null()

    public static readonly MUSHROOM_TRAMPOLINE =                           new InGameEntityImages.Null()
    public static readonly ON_OFF_TRAMPOLINE =                             new InGameEntityImages.Null()

    public static readonly LIFT =                                          new InGameEntityImages.Null()
    public static readonly FLIMSY_LIFT =                                   new InGameEntityImages.Null()
    public static readonly CLOUD_LIFT =                                    new InGameEntityImages.Null()

    public static readonly SEESAW =                                        new InGameEntityImages.Null()

    public static readonly LAVA_LIFT =                                     new InGameEntityImages.Null()
    public static readonly FAST_LAVA_LIFT =                                new InGameEntityImages.Null()

    public static readonly CRATE =                                         new InGameEntityImages.Null()

    public static readonly KEY =                                           new InGameEntityImages.Null()
    public static readonly CURSED_KEY =                                    new InGameEntityImages.Null()
    public static readonly PHANTO =                                        new InGameEntityImages.ExistantAsFourInOnlySmb('Phanto', 'M1 Object - Phanto', 'wait.0', 'wait.1', 'wait.2', 'wait.3',)

    public static readonly TRAMPOLINE =                                    new InGameEntityImages.Null()
    public static readonly HOP_CHOPS =                                     new InGameEntityImages.Null()

    public static readonly POW_BLOCK =                                     new InGameEntityImages.Null()
    public static readonly RED_POW_BLOCK =                                 new InGameEntityImages.Null()

    public static readonly P_SWITCH =                                      new InGameEntityImages.Null()

    public static readonly STONE =                                         new InGameEntityImages.Null()

    public static readonly WARP_DOOR =                                     new InGameEntityImages.Null()
    public static readonly P_WARP_DOOR =                                   new InGameEntityImages.Null()
    public static readonly KEY_DOOR =                                      new InGameEntityImages.Null()

    public static readonly WARP_BOX =                                      new InGameEntityImages.Null()
    public static readonly WARP_BOX_WITH_KEY =                             new InGameEntityImages.Null()

    public static readonly WING =                                          new InGameEntityImages.Null()
    public static readonly PARACHUTE =                                     new InGameEntityImages.Null()

    public static readonly TOAD =                                          new InGameEntityImages.Null()
    public static readonly CAGED_TOADETTE =                                new InGameEntityImages.Null()

    public static readonly BUBBLE =                                        new InGameEntityImages.ExistantAsBubble()

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<InGameEntityImages, typeof InGameEntityImages, Entities, typeof Entities> = class CompanionEnum_Entities
        extends CompanionEnumWithParent<InGameEntityImages, typeof InGameEntityImages, Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(InGameEntityImages, Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Entities()
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

    public abstract get image(): InGameImage

    //endregion -------------------- Getter methods --------------------

}
