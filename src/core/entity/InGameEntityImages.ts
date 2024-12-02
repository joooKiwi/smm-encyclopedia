import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {Array, EmptyString}                 from '@joookiwi/type'
import {forEachByArray}                          from '@joookiwi/collection'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName} from 'core/entity/Entities.types'
import type {InGameImageFile}                      from 'core/entity/file/EntityImageFile'
import type {PossibleAcronym_InFile_SMM1}          from 'core/gameStyle/GameStyles.types'
import type {InGameImage_Regular}                  from 'core/entity/images/inGame/InGameImage_Regular'
import type {ClassWithImage}                       from 'util/ClassWithImage'

import {Entities}                     from 'core/entity/Entities'
import {inGameImage}                  from 'core/entity/file/fileCreator'
import {EmptyInGameImage_Regular}     from 'core/entity/images/inGame/EmptyInGameImage_Regular'
import {InGameImage_RegularContainer} from 'core/entity/images/inGame/InGameImage_Regular.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW
import SM3DW = GameStyles.SM3DW

/**
 * An {@link InGameEntityImages} class made to hold an {@link InGameImage_Regular}
 *
 * @recursiveReference<{@link Entities}>
 */
export abstract class InGameEntityImages
    extends EnumWithParent<Entities, Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImage<InGameImage_Regular> {

    //region -------------------- Sub class --------------------

    /** A subclass of an {@link InGameEntityImages} to hold a non-existant {@link InGameImage_Regular} ({@link EmptyInGameImage_Regular}) */
    private static readonly Null = class Null_InGameEntityImages extends InGameEntityImages {

        readonly #image

        public constructor() {
            super()
            this.#image = EmptyInGameImage_Regular.get
        }

        public override get image(): EmptyInGameImage_Regular { return this.#image }

    }

    /** An abstract subclass of an {@link InGameEntityImages} to hold a specific {@link PossibleEnglishName} */
    private static readonly Existant = (() => {
        abstract class Existant_InGameEntityImages<const NAME extends PossibleEnglishName,
            const IMAGE_FILE extends InGameImageFile, >
            extends InGameEntityImages {

            readonly #englishName
            #image?: InGameImage_Regular<IMAGE_FILE>

            protected constructor(englishName: NAME,) {
                super()
                this.#englishName = englishName
            }

            public override get englishName(): NAME { return this.#englishName }

            public override get image(): InGameImage_Regular<IMAGE_FILE> { return this.#image ??= new InGameImage_RegularContainer(this._createImageFiles(),) }

            protected abstract _createImageFiles(): Array<readonly [GameStyles, IMAGE_FILE,]>

        }

        return Existant_InGameEntityImages
    })()

    //region -------------------- Sub class (one in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAsOneInOnlySmb = class ExistantAsOneInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            return [[SMB, inGameImage(this, this.folderName, this.fileName,),],] as const
        }

    }

    //endregion -------------------- Sub class (one in 1 specific game style) --------------------
    //region -------------------- Sub class (one in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsOneInNotNsmbuAndSm3dw = class ExistantAsOneInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
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
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3}, {@link SMW} and {@link NSMBU}
     */
    private static readonly ExistantAsOneInNotSm3dw = class ExistantAsOneInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${PossibleAcronym_InFile_SMM1} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,   inGameImage(this, `MW ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, fileName,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 1 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3}, {@link SMW} and a different {@link NSMBU}
     */
    private static readonly ExistantAsOneInNotSm3dwButDifferentNsmbu = class ExistantAsOneInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName: FILE_NAME, private readonly nsmbuFileName: NSMBU_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const fileName = this.fileName
            const endingFolderName = this.endingFolderName
            return [
                [SMB,   inGameImage(this, `M1 ${endingFolderName}`, fileName,),],
                [SMB3,  inGameImage(this, `M3 ${endingFolderName}`, fileName,),],
                [SMW,   inGameImage(this, `MW ${endingFolderName}`, fileName,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, this.nsmbuFileName,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (one in 4 specific game style) --------------------
    //region -------------------- Sub class (two in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 2 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAsTwoInOnlySmw = class ExistantAsTwoInOnlySmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMW, inGameImage(this, folderName, this.fileName1,),],
                [SMW, inGameImage(this, folderName, this.fileName2,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 1 specific game style) --------------------
    //region -------------------- Sub class (two in 2 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 2 {@link InGameImageFile}
     * in only {@link SMB} and {@link SMB3}
     */
    private static readonly ExistantAsTwoInOnlySmbAndSmb3 = class ExistantAsTwoInOnlySmbAndSmb3_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2

            return [
                [SMB,  inGameImage(this, folderName_smb, fileName1,),],
                [SMB,  inGameImage(this, folderName_smb, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 2 specific game style) --------------------
    //region -------------------- Sub class (two in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 2 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsTwoInNotNsmbuAndSm3dw = class ExistantAsTwoInNotNsmbuAndSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            return [
                [SMB,  inGameImage(this, folderName_smb, fileName1,),],
                [SMB,  inGameImage(this, folderName_smb, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
                [SMW,  inGameImage(this, folderName_smw, fileName1,),],
                [SMW,  inGameImage(this, folderName_smw, fileName2,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 2 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     * plus 1 {@link InGameImageFile} in {@link NSMBU}
     */
    private static readonly ExistantAsTwoInNotSm3dwAndOneNsmbu = class ExistantAsTwoInNotSm3dwAndOneNsmbu_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly nsmbuFileName: NSMBU_FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            return [
                [SMB,   inGameImage(this, folderName_smb, fileName1,),],
                [SMB,   inGameImage(this, folderName_smb, fileName2,),],
                [SMB3,  inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3,  inGameImage(this, folderName_smb3, fileName2,),],
                [SMW,   inGameImage(this, folderName_smw, fileName1,),],
                [SMW,   inGameImage(this, folderName_smw, fileName2,),],
                [NSMBU, inGameImage(this, `WU ${endingFolderName}`, this.nsmbuFileName,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (two in 3 specific game style) --------------------
    //region -------------------- Sub class (three in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 3 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAsThreeInOnlySmb = class ExistantAsThreeInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMB, inGameImage(this, folderName, this.fileName1,),],
                [SMB, inGameImage(this, folderName, this.fileName2,),],
                [SMB, inGameImage(this, folderName, this.fileName3,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (three in 1 specific game style) --------------------
    //region -------------------- Sub class (three in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 3 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsThreeInNotNsmbuAndSm3dw = class ExistantAsThreeInNotNsmbuAndSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            return [
                [SMB,  inGameImage(this, folderName_smb,  fileName1,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName2,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName3,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName3,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName1,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName2,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName3,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 3 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     * and an unspecified amount of {@link InGameImageFile} on {@link NSMBU}
     */
    private static readonly ExistantAsThreeAndNotSm3dwWithNsmbu = class ExistantAsThreeInNotSm3dwWithNsmbu_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>]>(9 + fileNames_nsmbu.length,)
            imageFiles[0] = [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] = [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] = [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] = [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[4] = [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[5] = [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[6] = [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[7] = [SMW,  inGameImage(this, folderName_smw,  fileName2,),]
            imageFiles[8] = [SMW,  inGameImage(this, folderName_smw,  fileName3,),]

            let index = 8
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (three in 3 specific game style) --------------------
    //region -------------------- Sub class (four in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 4 {@link InGameImageFile} in only {@link SMB} */
    private static readonly ExistantAsFourInOnlySmb = class ExistantAsFourInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMB, inGameImage(this, folderName, this.fileName1,),],
                [SMB, inGameImage(this, folderName, this.fileName2,),],
                [SMB, inGameImage(this, folderName, this.fileName3,),],
                [SMB, inGameImage(this, folderName, this.fileName4,),],
            ] as const
        }

    }

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 4 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAsFourInOnlySmw = class ExistantAsFourInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMW, inGameImage(this, folderName, this.fileName1,),],
                [SMW, inGameImage(this, folderName, this.fileName2,),],
                [SMW, inGameImage(this, folderName, this.fileName3,),],
                [SMW, inGameImage(this, folderName, this.fileName4,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (four in 1 specific game style) --------------------
    //region -------------------- Sub class (four in 3 specific game style) --------------------

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 4 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     */
    private static readonly ExistantAsFourInNotNsmbuAndSm3dw = class ExistantAsFourInNotNsmbuAndSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            return [
                [SMB,  inGameImage(this, folderName_smb,  fileName1,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName2,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName3,),],
                [SMB,  inGameImage(this, folderName_smb,  fileName4,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName1,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName2,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName3,),],
                [SMB3, inGameImage(this, folderName_smb3, fileName4,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName1,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName2,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName3,),],
                [SMW,  inGameImage(this, folderName_smw,  fileName4,),],
            ] as const
        }

    }

    /**
     * A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 4 {@link InGameImageFile}
     * in only {@link SMB}, {@link SMB3} and {@link SMW}
     * and an unspecified amount of {@link InGameImageFile} on {@link NSMBU}
     */
    private static readonly ExistantAsFourInNotSm3dwWithNsmbu = class ExistantAsFourInNotNsmbuAndSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileName1 = this.fileName1
            const fileName2 = this.fileName2
            const fileName3 = this.fileName3
            const fileName4 = this.fileName4
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly [GameStyles,
                | InGameImageFile<`${| 'M1' | 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, FILE_NAME>
                | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(12 + fileNames_nsmbu.length,)

            imageFiles[0] =  [SMB,  inGameImage(this, folderName_smb,  fileName1,),]
            imageFiles[1] =  [SMB,  inGameImage(this, folderName_smb,  fileName2,),]
            imageFiles[2] =  [SMB,  inGameImage(this, folderName_smb,  fileName3,),]
            imageFiles[3] =  [SMB,  inGameImage(this, folderName_smb,  fileName4,),]
            imageFiles[4] =  [SMB3, inGameImage(this, folderName_smb3, fileName1,),]
            imageFiles[5] =  [SMB3, inGameImage(this, folderName_smb3, fileName2,),]
            imageFiles[6] =  [SMB3, inGameImage(this, folderName_smb3, fileName3,),]
            imageFiles[7] =  [SMB3, inGameImage(this, folderName_smb3, fileName4,),]
            imageFiles[8] =  [SMW,  inGameImage(this, folderName_smw,  fileName1,),]
            imageFiles[9] =  [SMW,  inGameImage(this, folderName_smw,  fileName2,),]
            imageFiles[10] = [SMW,  inGameImage(this, folderName_smw,  fileName3,),]
            imageFiles[11] = [SMW,  inGameImage(this, folderName_smw,  fileName4,),]

            let index = 11
            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (four in 3 specific game style) --------------------
    //region -------------------- Sub class (five in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 5 {@link InGameImageFile} in only {@link SM3DW} */
    private static readonly ExistantAsFiveInOnlySm3dw = class ExistantAsFiveInOnlySm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SM3DW, inGameImage(this, folderName, this.fileName1,),],
                [SM3DW, inGameImage(this, folderName, this.fileName2,),],
                [SM3DW, inGameImage(this, folderName, this.fileName3,),],
                [SM3DW, inGameImage(this, folderName, this.fileName4,),],
                [SM3DW, inGameImage(this, folderName, this.fileName5,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (five in 1 specific game style) --------------------
    //region -------------------- Sub class (six in 1 specific game style) --------------------

    /** A subclass of an {@link InGameEntityImages} to hold an existant {@link InGameImage_Regular} as 6 {@link InGameImageFile} in only {@link SMW} */
    private static readonly ExistantAsSixInOnlySmw = class ExistantAsSixInOnlySmb_InGameEntityImages<const NAME extends PossibleEnglishName,
        const FOLDER_NAME extends string,
        const FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, InGameImageFile<FOLDER_NAME, FILE_NAME>> {

        public constructor(englishName: NAME, private readonly folderName: FOLDER_NAME, private readonly fileName1: FILE_NAME, private readonly fileName2: FILE_NAME, private readonly fileName3: FILE_NAME, private readonly fileName4: FILE_NAME, private readonly fileName5: FILE_NAME, private readonly fileName6: FILE_NAME,) {
            super(englishName,)
        }

        public override _createImageFiles() {
            const folderName = this.folderName
            return [
                [SMW, inGameImage(this, folderName, this.fileName1,),],
                [SMW, inGameImage(this, folderName, this.fileName2,),],
                [SMW, inGameImage(this, folderName, this.fileName3,),],
                [SMW, inGameImage(this, folderName, this.fileName4,),],
                [SMW, inGameImage(this, folderName, this.fileName5,),],
                [SMW, inGameImage(this, folderName, this.fileName6,),],
            ] as const
        }

    }

    //endregion -------------------- Sub class (six in 1 specific game style) --------------------
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

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly smbFileNames: Array<SMB_FILE_NAME>, private readonly smb3FileNames: Array<SMB3_FILE_NAME>, private readonly smwFileNames: Array<SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileNames_smb = this.smbFileNames
            const fileNames_smb3 = this.smb3FileNames
            const fileNames_smw = this.smwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNames_smb.length + fileNames_smb3.length + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)

            forEachByArray(fileNames_smb3, it => imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),],)

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantAndNotNsmbuAndSm3dw = class ExistantAsNoVariantAndNotNsmbuAndSm3dw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly smbFileNames: Array<SMB_FILE_NAME>, private readonly smb3FileNames: Array<SMB3_FILE_NAME>, private readonly smwFileNames: Array<SMW_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const fileNames_smb = this.smbFileNames
            const fileNames_smb3 = this.smb3FileNames
            const fileNames_smw = this.smwFileNames

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>,]>(fileNames_smb.length + fileNames_smb3.length + fileNames_smw.length,)

            let index = -1
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)

            forEachByArray(fileNames_smb3, it => imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),],)

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantWithSameSmbAndSmb3 = class ExistantAsNoVariantWithSameSmbAndSmb3_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_SMB3_FILE_NAME extends string,
        const SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, SMB_SMB3_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly smbSmb3FileNames: Array<SMB_SMB3_FILE_NAME>, private readonly smwFileNames: Array<SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileNames_smbSmb3 = this.smbSmb3FileNames
            const fileNames_smw = this.smwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smbSmb3 = fileNames_smbSmb3.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}`, SMB_SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smbSmb3 * 2 + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smbSmb3, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smbSmb3] = [SMB3, inGameImage(this, folderName_smb3, it,),]
            },)
            index += fileNamesSize_smbSmb3

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsNoVariantWithSameSmb3AndSmw = class ExistantAsNoVariantWithSameSmb3AndSmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_FILE_NAME extends string,
        const SMB3_SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                                                  | InGameImageFile<`${| 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly smbFileNames: Array<SMB_FILE_NAME>, private readonly smb3SmwFileNames: Array<SMB3_SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const fileNames_smb = this.smbFileNames
            const fileNames_smb3Smw = this.smb3SmwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smb3Smw = fileNames_smb3Smw.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}`, SMB_FILE_NAME>
                    | InGameImageFile<`${| 'M3' | 'MW'} ${ENDING_FOLDER_NAME}`, SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNames_smb.length + fileNamesSize_smb3Smw * 2 + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smb, it => imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),],)

            forEachByArray(fileNames_smb3Smw, it => {
                imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smb3Smw] = [SMW, inGameImage(this, folderName_smw, it,),]
            },)
            index+= fileNamesSize_smb3Smw

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

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly smbFileNames: Array<SMB_FILE_NAME>, private readonly smb3FileNames: Array<SMB3_FILE_NAME>, private readonly smwFileNames: Array<SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const folderName_smbAlt = `M1 ${endingFolderName} D` as const
            const folderName_smb3Alt = `M3 ${endingFolderName} D` as const
            const fileNames_smb = this.smbFileNames
            const fileNames_smb3 = this.smb3FileNames
            const fileNames_smw = this.smwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smb = fileNames_smb.length
            const fileNamesSize_smb3 = fileNames_smb3.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`M1 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_FILE_NAME>
                    | InGameImageFile<`M3 ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB3_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smb + fileNamesSize_smb3 + fileNames_smw.length + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smb, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smb] = [SMB, inGameImage(this, folderName_smbAlt, it,),]
            },)
            index += fileNamesSize_smb

            forEachByArray(fileNames_smb3, it => {
                imageFiles[++index] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smb3] = [SMB3, inGameImage(this, folderName_smb3Alt, it,),]
            },)
            index += fileNamesSize_smb3

            forEachByArray(fileNames_smw, it => imageFiles[++index] = [SMW, inGameImage(this, folderName_smw, it,),],)

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    private static readonly ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw = class ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw_InGameEntityImages<const NAME extends PossibleEnglishName,
        const ENDING_FOLDER_NAME extends string,
        const SMB_SMB3_SMW_FILE_NAME extends string,
        const NSMBU_FILE_NAME extends string, >
        extends InGameEntityImages.Existant<NAME, | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMB_SMB3_SMW_FILE_NAME>
                                                  | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>> {

        public constructor(englishName: NAME, private readonly endingFolderName: ENDING_FOLDER_NAME, private readonly smbSmb3SmwFileNames: Array<SMB_SMB3_SMW_FILE_NAME>, private readonly nsmbuFileNames: Array<NSMBU_FILE_NAME>,) {
            super(englishName,)
        }

        protected override _createImageFiles() {
            const endingFolderName = this.endingFolderName
            const folderName_smb = `M1 ${endingFolderName}` as const
            const folderName_smb3 = `M3 ${endingFolderName}` as const
            const folderName_smw = `MW ${endingFolderName}` as const
            const folderName_nsmbu = `WU ${endingFolderName}` as const
            const folderName_smbAlt = `M1 ${endingFolderName} D` as const
            const folderName_smb3Alt = `M3 ${endingFolderName} D` as const
            const fileNames_smbSmb3SmW = this.smbSmb3SmwFileNames
            const fileNames_nsmbu = this.nsmbuFileNames
            const fileNamesSize_smbSmb3Smw = fileNames_smbSmb3SmW.length

            const imageFiles = new Array<readonly[GameStyles,
                    | InGameImageFile<`${| 'M1' | 'M3'} ${ENDING_FOLDER_NAME}${| EmptyString | ' D'}`, SMB_SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`MW ${ENDING_FOLDER_NAME}`, SMB_SMB3_SMW_FILE_NAME>
                    | InGameImageFile<`WU ${ENDING_FOLDER_NAME}`, NSMBU_FILE_NAME>,]>(fileNamesSize_smbSmb3Smw * 5 + fileNames_nsmbu.length,)

            let index = -1
            forEachByArray(fileNames_smbSmb3SmW, it => {
                imageFiles[++index] = [SMB, inGameImage(this, folderName_smb, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw] = [SMB, inGameImage(this, folderName_smbAlt, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 2] = [SMB3, inGameImage(this, folderName_smb3, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 3] = [SMB3, inGameImage(this, folderName_smb3Alt, it,),]
                imageFiles[index + fileNamesSize_smbSmb3Smw * 4] = [SMW, inGameImage(this, folderName_smw, it,),]
            },)
            index += fileNamesSize_smbSmb3Smw * 4

            forEachByArray(fileNames_nsmbu, it => imageFiles[++index] = [NSMBU, inGameImage(this, folderName_nsmbu, it,),],)

            return imageFiles
        }

    }

    //endregion -------------------- Sub class (blue variant) --------------------
    //region -------------------- Sub class (predefined) --------------------

    /** A subclass of an {@link InGameEntityImages} for only the {@link WATER} */
    private static readonly ExistantAsWater = class ExistantAsWater_InGameEntityImages
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
    private static readonly ExistantAsMagikoopaProjectile = class ExistantAsMagikoopaProjectile_InGameEntityImages
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
    private static readonly ExistantAsFireBar = class ExistantAsFireBar_InGameEntityImages
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
    private static readonly ExistantAsMagicBall = class ExistantAsMagicBall_InGameEntityImages
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
    private static readonly ExistantAsAxe = class ExistantAsAxe_InGameEntityImages
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
    private static readonly ExistantAsBubble = class ExistantAsBubble_InGameEntityImages
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

    public static readonly GREEN_KOOPA_TROOPA =                            new InGameEntityImages.ExistantAsNoVariantWithSameSmbAndSmb3('Green Koopa Troopa', 'Enemy - NokonokoA', [
        'revival.0', 'revival.1', 'revival.2',
        'walk.0', 'walk.1',
    ], [
        'blink.0', 'blink.1',
        'revival.0', 'revival.1',
        'walk.0', 'walk.1',
    ], [
        'flyA_Alb.000', 'flyA_Alb.002', 'flyA_Alb.004', 'flyA_Alb.006', 'flyA_Alb.008', 'flyA_Alb.010', 'flyA_Alb.012', 'flyA_Alb.014', 'flyA_Alb.016', 'flyA_Alb.018', 'flyA_Alb.020', 'flyA_Alb.022',
        'revival_Alb.000', 'revival_Alb.002', 'revival_Alb.004', 'revival_Alb.006', 'revival_Alb.008', 'revival_Alb.010', 'revival_Alb.012', 'revival_Alb.014', 'revival_Alb.016', 'revival_Alb.018', 'revival_Alb.020', 'revival_Alb.022', 'revival_Alb.024', 'revival_Alb.026', 'revival_Alb.028', 'revival_Alb.030', 'revival_Alb.032', 'revival_Alb.034', 'revival_Alb.036', 'revival_Alb.038', 'revival_Alb.040', 'revival_Alb.042', 'revival_Alb.044', 'revival_Alb.046', 'revival_Alb.048', 'revival_Alb.050', 'revival_Alb.052', 'revival_Alb.054', 'revival_Alb.056', 'revival_Alb.058', 'revival_Alb.060', 'revival_Alb.062', 'revival_Alb.064', 'revival_Alb.066', 'revival_Alb.068', 'revival_Alb.070', 'revival_Alb.072', 'revival_Alb.074', 'revival_Alb.076',
        'walkA_Alb.000', 'walkA_Alb.002', 'walkA_Alb.004', 'walkA_Alb.006', 'walkA_Alb.008', 'walkA_Alb.010', 'walkA_Alb.012', 'walkA_Alb.014', 'walkA_Alb.016', 'walkA_Alb.018', 'walkA_Alb.020', 'walkA_Alb.022', 'walkA_Alb.024', 'walkA_Alb.026', 'walkA_Alb.028', 'walkA_Alb.030', 'walkA_Alb.032', 'walkA_Alb.034', 'walkA_Alb.036', 'walkA_Alb.038',],)
    public static readonly RED_KOOPA_TROOPA =                              new InGameEntityImages.ExistantAsNoVariantWithSameSmbAndSmb3('Red Koopa Troopa', 'Enemy - NokonokoB', [
        'revival.0', 'revival.1', 'revival.2',
        'walk.0', 'walk.1',
    ], [
        'blink.0', 'blink.1',
        'revival.0', 'revival.1',
        'walk.0', 'walk.1',
    ], [
        'flyA_Alb.000', 'flyA_Alb.002', 'flyA_Alb.004', 'flyA_Alb.006', 'flyA_Alb.008', 'flyA_Alb.010', 'flyA_Alb.012', 'flyA_Alb.014', 'flyA_Alb.016', 'flyA_Alb.018', 'flyA_Alb.020', 'flyA_Alb.022',
        'revival_Alb.000', 'revival_Alb.002', 'revival_Alb.004', 'revival_Alb.006', 'revival_Alb.008', 'revival_Alb.010', 'revival_Alb.012', 'revival_Alb.014', 'revival_Alb.016', 'revival_Alb.018', 'revival_Alb.020', 'revival_Alb.022', 'revival_Alb.024', 'revival_Alb.026', 'revival_Alb.028', 'revival_Alb.030', 'revival_Alb.032', 'revival_Alb.034', 'revival_Alb.036', 'revival_Alb.038', 'revival_Alb.040', 'revival_Alb.042', 'revival_Alb.044', 'revival_Alb.046', 'revival_Alb.048', 'revival_Alb.050', 'revival_Alb.052', 'revival_Alb.054', 'revival_Alb.056', 'revival_Alb.058', 'revival_Alb.060', 'revival_Alb.062', 'revival_Alb.064', 'revival_Alb.066', 'revival_Alb.068', 'revival_Alb.070', 'revival_Alb.072', 'revival_Alb.074', 'revival_Alb.076',
        'walkA_Alb.000', 'walkA_Alb.002', 'walkA_Alb.004', 'walkA_Alb.006', 'walkA_Alb.008', 'walkA_Alb.010', 'walkA_Alb.012', 'walkA_Alb.014', 'walkA_Alb.016', 'walkA_Alb.018', 'walkA_Alb.020', 'walkA_Alb.022', 'walkA_Alb.024', 'walkA_Alb.026', 'walkA_Alb.028', 'walkA_Alb.030', 'walkA_Alb.032', 'walkA_Alb.034', 'walkA_Alb.036', 'walkA_Alb.038',],)
    public static readonly GREEN_BEACH_KOOPA =                             new InGameEntityImages.ExistantAsSixInOnlySmw('Green Beach Koopa', 'MW Enemy - NokonokoANaked', 'dead.0', 'kick.0', 'slide.0', 'slide.1', 'walk.0', 'walk.1',)
    public static readonly RED_BEACH_KOOPA =                               new InGameEntityImages.ExistantAsSixInOnlySmw('Red Beach Koopa', 'MW Enemy - NokonokoBNaked', 'dead.0', 'kick.0', 'slide.0', 'slide.1', 'walk.0', 'walk.1',)
    public static readonly GREEN_KOOPA_SHELL =                             new InGameEntityImages.ExistantAsFourInNotSm3dwWithNsmbu('Green Koopa Shell', 'Enemy - NokonokoA', 'shell.0', 'shell.1', 'shell.2', 'shell.3', ['Yrot_nokonokoA_shell_Alb.000', 'Yrot_nokonokoA_shell_Alb.002', 'Yrot_nokonokoA_shell_Alb.004', 'Yrot_nokonokoA_shell_Alb.006', 'Yrot_nokonokoA_shell_Alb.008', 'Yrot_nokonokoA_shell_Alb.009',],)
    public static readonly RED_KOOPA_SHELL =                               new InGameEntityImages.ExistantAsFourInNotSm3dwWithNsmbu('Red Koopa Shell', 'Enemy - NokonokoB', 'shell.0', 'shell.1', 'shell.2', 'shell.3', ['Yrot_nokonokoA_shell_Alb.000', 'Yrot_nokonokoA_shell_Alb.002', 'Yrot_nokonokoA_shell_Alb.004', 'Yrot_nokonokoA_shell_Alb.006', 'Yrot_nokonokoA_shell_Alb.008', 'Yrot_nokonokoA_shell_Alb.009',],)

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

    public static readonly BLOOPER =                                       new InGameEntityImages.ExistantAsFourInNotSm3dwWithNsmbu('Blooper', 'Enemy - Gesso', 'parawait.0', 'parawait.1', 'wait.0', 'wait.1', ['edited_te_pata_Alb.000', 'edited_te_pata_Alb.002', 'edited_te_pata_Alb.004', 'edited_te_pata_Alb.006', 'edited_te_pata_Alb.008', 'edited_te_pata_Alb.010', 'edited_te_pata_Alb.012', 'edited_te_pata_Alb.014', 'edited_te_pata_Alb.016', 'edited_te_pata_Alb.018', 'edited_te_pata_Alb.020', 'edited_te_pata_Alb.022', 'edited_te_pata_Alb.024', 'edited_te_pata_Alb.026', 'edited_te_pata_Alb.028',],)
    public static readonly BLOOPER_NANNY =                                 new InGameEntityImages.Null()
    public static readonly BABY_BLOOPER =                                  new InGameEntityImages.ExistantAsTwoInNotSm3dwAndOneNsmbu('Baby Blooper', 'Enemy - GessoMini', 'wait.0', 'wait.1', 'gesso_mini_Alb.000',)

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

    public static readonly BOB_OMB =                                       new InGameEntityImages.ExistantAsBlueVariant('Bob-omb', 'Enemy - Bombhei', ['damage.0', 'fly.0', 'parawait.0', 'parawait.1', 'walk.0', 'walk.1',], ['damage.0', 'fly.0', 'parawait.0', 'parawait.1', 'walk.0', 'walk.1',], ['damage.0', 'fly.0', 'walk.0', 'walk.1',], ['fly_Alb.000', 'fly_Alb.002', 'fly_Alb.004', 'fly_Alb.006', 'fly_Alb.008', 'fly_Alb.010', 'fly_Alb.012', 'fly_Alb.014', 'fly_Alb.016', 'fly_Alb.018', 'fly_Alb.020', 'fly_Alb.022', 'fly_Alb.024', 'fly_Alb.026', 'fly_Alb.028', 'fly_Alb.030', 'fly_Alb32', 'fly_Alb34', 'fly_Alb36', 'fly_Alb38', 'fly_Alb39', 'stop_Alb000', 'walk_Alb000', 'walk_Alb001', 'walk_Alb002', 'walk_Alb003', 'walk_Alb004', 'walk_Alb005', 'walk_Alb006', 'walk_Alb007', 'walk_Alb008', 'walk_Alb009', 'walk_Alb010', 'walk_Alb011', 'walk_Alb012', 'walk_Alb013', 'walk_Alb014', 'walk_Alb015', 'walk_Alb016', 'walk_Alb017', 'walk_Alb018', 'walk_Alb019',],)
    public static readonly LIT_BOB_OMB =                                   new InGameEntityImages.Null()

    public static readonly POKEY =                                         new InGameEntityImages.Null()
    public static readonly SNOW_POKEY =                                    new InGameEntityImages.Null()

    public static readonly THWOMP =                                        new InGameEntityImages.Null()

    public static readonly MONTY_MOLE =                                    new InGameEntityImages.ExistantAsThreeAndNotSm3dwWithNsmbu('Monty Mole', 'Enemy - Choropoo', 'appear.0', 'walk.0', 'walk.1', [
        'go_out_st_Alb.000', 'go_out_st_Alb.002', 'go_out_st_Alb.004', 'go_out_st_Alb.006', 'go_out_st_Alb.008', 'go_out_st_Alb.010', 'go_out_st_Alb.012', 'go_out_st_Alb.014', 'go_out_st_Alb.016', 'go_out_st_Alb.018',
        'in_dokan_Alb.000', 'in_dokan_Alb.002', 'in_dokan_Alb.004', 'in_dokan_Alb.006', 'in_dokan_Alb.008', 'in_dokan_Alb.009',
        'parawait.Alb.000', 'parawait.Alb.002', 'parawait.Alb.004', 'parawait.Alb.006', 'parawait.Alb.008', 'parawait.Alb.010', 'parawait.Alb.012', 'parawait.Alb.014', 'parawait.Alb.016', 'parawait.Alb.018', 'parawait.Alb.020', 'parawait.Alb.022', 'parawait.Alb.024', 'parawait.Alb.026', 'parawait.Alb.028', 'parawait.Alb.030', 'parawait.Alb.032', 'parawait.Alb.034', 'parawait.Alb.036', 'parawait.Alb.038', 'parawait.Alb.040',
        'walk_Alb.000', 'walk_Alb.001', 'walk_Alb.002', 'walk_Alb.003', 'walk_Alb.004', 'walk_Alb.005', 'walk_Alb.006', 'walk_Alb.007', 'walk_Alb.008', 'walk_Alb.009', 'walk_Alb.010', 'walk_Alb.011', 'walk_Alb.012', 'walk_Alb.013', 'walk_Alb.014', 'walk_Alb.015', 'walk_Alb.016', 'walk_Alb.017', 'walk_Alb.018',],)
    public static readonly ROCKY_WRENCH =                                  new InGameEntityImages.Null()
     public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new InGameEntityImages.ExistantAsFourInNotSm3dwWithNsmbu('Wrench thrown by a Rocky Wrench', 'Enemy - Poo', 'hammer.0', 'hammer.1', 'hammer.2', 'hammer.3', ['spanner_Alb.000',],)

    public static readonly MAGIKOOPA =                                     new InGameEntityImages.Null()
    public static readonly MAGIKOOPA_PROJECTILE =                          new InGameEntityImages.ExistantAsMagikoopaProjectile()

    public static readonly HAMMER_BRO =                                    new InGameEntityImages.ExistantAsNoVariantWithSameSmb3AndSmw('Hammer Bro', 'Enemy - Bros', [
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'jump.0',
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'dead_Alb.000', 'dead_Alb.002', 'dead_Alb.004', 'dead_Alb.006', 'dead_Alb.008', 'dead_Alb.010', 'dead_Alb.012', 'dead_Alb.014',
        'jump_ed_Alb.000', 'jump_ed_Alb.002', 'jump_ed_Alb.004', 'jump_ed_Alb.006', 'jump_ed_Alb.008', 'jump_ed_Alb.010', 'jump_ed_Alb.012',
        'jump_md_Alb.000', 'jump_md_Alb.004', 'jump_md_Alb.008', 'jump_md_Alb.012', 'jump_md_Alb.016', 'jump_md_Alb.020', 'jump_md_Alb.024', 'jump_md_Alb.028', 'jump_md_Alb.032', 'jump_md_Alb.036', 'jump_md_Alb.040', 'jump_md_Alb.044', 'jump_md_Alb.048', 'jump_md_Alb.052', 'jump_md_Alb.056', 'jump_md_Alb.060',
        'jump_st_Alb.000', 'jump_st_Alb.002', 'jump_st_Alb.004', 'jump_st_Alb.006', 'jump_st_Alb.008', 'jump_st_Alb.010',
        'parawait_Alb.000', 'parawait_Alb.002', 'parawait_Alb.004', 'parawait_Alb.006', 'parawait_Alb.008', 'parawait_Alb.010', 'parawait_Alb.012', 'parawait_Alb.014', 'parawait_Alb.016', 'parawait_Alb.018', 'parawait_Alb.020', 'parawait_Alb.022', 'parawait_Alb.024', 'parawait_Alb.026', 'parawait_Alb.028', 'parawait_Alb.030', 'parawait_Alb.032', 'parawait_Alb.034', 'parawait_Alb.036', 'parawait_Alb.038', 'parawait_Alb.040', 'parawait_Alb.042', 'parawait_Alb.044', 'parawait_Alb.046', 'parawait_Alb.048', 'parawait_Alb.050', 'parawait_Alb.052', 'parawait_Alb.054', 'parawait_Alb.056', 'parawait_Alb.058',
        'throw_Alb.000', 'throw_Alb.002', 'throw_Alb.004', 'throw_Alb.006', 'throw_Alb.008', 'throw_Alb.010', 'throw_Alb.014', 'throw_Alb.016', 'throw_Alb.018', 'throw_Alb.020', 'throw_Alb.022', 'throw_Alb.024', 'throw_Alb.026', 'throw_Alb.028', 'throw_Alb.030', 'throw_Alb.032', 'throw_Alb.034', 'throw_Alb.036', 'throw_Alb.038', 'throw_Alb.040', 'throw_Alb.042', 'throw_Alb.044', 'throw_Alb.046', 'throw_Alb.048', 'throw_Alb.050', 'throw_Alb.052', 'throw_Alb.054', 'throw_Alb.056', 'throw_Alb.058', 'throw_Alb.060',
        'throw_held_Alb.000', 'throw_held_Alb.002', 'throw_held_Alb.004', 'throw_held_Alb.006', 'throw_held_Alb.008', 'throw_held_Alb.010', 'throw_held_Alb.014', 'throw_held_Alb.016', 'throw_held_Alb.018', 'throw_held_Alb.020', 'throw_held_Alb.022', 'throw_held_Alb.024', 'throw_held_Alb.026', 'throw_held_Alb.028', 'throw_held_Alb.030', 'throw_held_Alb.032', 'throw_held_Alb.034', 'throw_held_Alb.036', 'throw_held_Alb.038', 'throw_held_Alb.040', 'throw_held_Alb.042', 'throw_held_Alb.044', 'throw_held_Alb.046', 'throw_held_Alb.048', 'throw_held_Alb.050', 'throw_held_Alb.052', 'throw_held_Alb.054', 'throw_held_Alb.056', 'throw_held_Alb.058', 'throw_held_Alb.060', 'throw_held_Alb.062', 'throw_held_Alb.064', 'throw_held_Alb.066',
        'walk_Alb.000', 'walk_Alb.002', 'walk_Alb.004', 'walk_Alb.006', 'walk_Alb.008', 'walk_Alb.010', 'walk_Alb.012', 'walk_Alb.014', 'walk_Alb.016', 'walk_Alb.018', 'walk_Alb.020', 'walk_Alb.022', 'walk_Alb.024', 'walk_Alb.026', 'walk_Alb.028', 'walk_Alb.030', 'walk_Alb.031',],)
    public static readonly SLEDGE_BRO =                                    new InGameEntityImages.ExistantAsNoVariantWithSameSmb3AndSmw('Sledge Bro', 'Enemy - BrosMega', [
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'jump.0',
        'throw.0', 'throw.1',
        'walk.0', 'walk.1',
    ], [
        'jump_attack_Alb.000', 'jump_attack_Alb.004', 'jump_attack_Alb.008', 'jump_attack_Alb.012', 'jump_attack_Alb.016', 'jump_attack_Alb.020', 'jump_attack_Alb.024', 'jump_attack_Alb.028', 'jump_attack_Alb.032', 'jump_attack_Alb.036', 'jump_attack_Alb.040',
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
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new InGameEntityImages.ExistantAsTwoInNotSm3dwAndOneNsmbu('Homing Missile thrown by a Blasta Mechakoopa', 'Enemy - KoopaMechaMissile', 'missile.0', 'missile.1', 'mechabomb_Alb.000',)
    public static readonly ZAPPA_MECHAKOOPA =                              new InGameEntityImages.Null()
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new InGameEntityImages.Null()

    public static readonly CHARVAARGH =                                    new InGameEntityImages.Null()

    public static readonly BULLY =                                         new InGameEntityImages.Null()

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    public static readonly BILL_BLASTER =                                  new InGameEntityImages.ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw('Bill Blaster', 'Enemy - KillerHoudai', ['wait.0', 'unit.0',], ['killer_houdai_Alb.000', 'killer_houdai_Alb.002', 'killer_houdai_Alb.004', 'killer_houdai_Alb.006', 'killer_houdai_Alb.008', 'killer_houdai_Alb.0010', 'killer_houdai_Alb.0012', 'killer_houdai_Alb.0014', 'killer_houdai_Alb.0016', 'killer_houdai_Alb.0018', 'killer_houdai_Alb.0020', 'killer_houdai_Alb.0022', 'killer_houdai_Alb.0024', 'killer_houdai_Alb.0026', 'killer_houdai_Alb.0028', 'killer_houdai_Alb.0029', 'unit_Alb.000',],)
    public static readonly BULLET_BILL =                                   new InGameEntityImages.ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw('Bullet Bill', 'Enemy - Killer', ['wait.0',], ['search_Alb.000', 'search_Alb.003', 'search_Alb.006', 'search_Alb.009', 'search_Alb.012', 'search_Alb.015', 'search_Alb.018', 'search_Alb.021', 'search_Alb.024', 'search_Alb.027', 'search_Alb.030', 'search_Alb.033', 'search_Alb.036', 'search_Alb.039', 'search_Alb.042', 'search_Alb.045', 'search_Alb.047',],)
    public static readonly BULL_EYE_BLASTER =                              new InGameEntityImages.ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw('Bull’s-Eye Blaster', 'Enemy - KillerHoudai', ['search.0', 'unit_search.0',], ['SK_killer_houdai_Alb.000', 'SK_killer_houdai_Alb.002', 'SK_killer_houdai_Alb.004', 'SK_killer_houdai_Alb.006', 'SK_killer_houdai_Alb.008', 'SK_killer_houdai_Alb.0010', 'SK_killer_houdai_Alb.0012', 'SK_killer_houdai_Alb.0014', 'SK_killer_houdai_Alb.0016', 'SK_killer_houdai_Alb.0018', 'SK_killer_houdai_Alb.0020', 'SK_killer_houdai_Alb.0022', 'SK_killer_houdai_Alb.0024', 'SK_killer_houdai_Alb.0026', 'SK_killer_houdai_Alb.0028', 'SK_killer_houdai_Alb.0029', 'SK_unit_Alb.000',],)
    public static readonly BULL_EYE_BILL =                                 new InGameEntityImages.ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw('Bull’s-Eye Bill', 'Enemy - Killer', ['search.0',], ['SK_search_Alb.000', 'SK_search_Alb.003', 'SK_search_Alb.006', 'SK_search_Alb.009', 'SK_search_Alb.012', 'SK_search_Alb.015', 'SK_search_Alb.018', 'SK_search_Alb.021', 'SK_search_Alb.024', 'SK_search_Alb.027', 'SK_search_Alb.030', 'SK_search_Alb.033', 'SK_search_Alb.036', 'SK_search_Alb.039', 'SK_search_Alb.042', 'SK_search_Alb.045', 'SK_search_Alb.047',],)
    public static readonly CAT_BULLET_BILL =                               new InGameEntityImages.Null()

    public static readonly BANZAI_BILL =                                   new InGameEntityImages.ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw('Banzai Bill', 'Enemy - KillerMagnum', ['wait.0',], ['killer_mag_Alb.000',],)
    public static readonly BULL_EYE_BANZAI =                               new InGameEntityImages.ExistantAsBlueVariantWithSameSmbAndSmb3AndSmw('Bull’s-Eye Banzai', 'Enemy - KillerMagnum', ['search.0',], ['killer_mag_surch_Alb.000',],)
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

    public static readonly BOWSER =                                        new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Bowser', 'Enemy - Koopa', [
        'fall.0', 'fall.1',
        'fire.0',
        'wait.0', 'wait.1',
    ], [
        'attack.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1', 'fire.2', 'fire.3',
        'in.0', 'in.1',
        'jump.0',
        'jump_ed.0',
        'look.0', 'look.1', 'look.2', 'look.3',
        'out.0', 'out.1',
        'touchdown.0',
        'turn.0', 'turn.1', 'turn.2',
        'wait.0',
    ], [
        'fall.0', 'fall.1',
        'fire.0', 'fire.1',
        'fire2.0', 'fire2.1',
        'fireup.0', 'fireup.1', 'fireup.2', 'fireup.3', 'fireup.4',
        'in.0', 'in.1',
        'jump.0',
        'jump_l.0',
        'out.0', 'out.1',
        'parawait.0', 'parawait.1',
        'squat_l.0', 'squat_l.1', 'squat_l.2',
        'squat_s.0',
        'turn.0', 'turn.1', 'turn.2',
        'wait.0',
        'walk.0', 'walk.1', 'walk.2', 'walk.3',
    ],)
    public static readonly MEOWSER =                                       new InGameEntityImages.Null()
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new InGameEntityImages.ExistantAsTwoInNotNsmbuAndSm3dw('Fire thrown by a Bowser', 'Enemy - Koopa', 'effect.0', 'effect.1',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new InGameEntityImages.ExistantAsFourInOnlySmw('Falling Fire thrown by a Bowser', 'MW Enemy - Koopa', 'firewait.0', 'firewait.1', 'firewait.2', 'firewait.3',)
    public static readonly HAMMER_THROWN_BY_A_BOWSER =                     new InGameEntityImages.Null()

    public static readonly BOWSER_JR =                                     new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Bowser Jr.', 'Enemy - KoopaJr', [
        'before.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw.0', 'throw.1',
        'wait.0', 'wait.1',
    ], [
        'attack.0', 'before.0', 'before.1', 'before.2',
        'damage.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1', 'fire.2', 'fire.3',
        'in.0',
        'jump.0',
        'out.0',
        'parawait.0', 'parawait.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'squat.0',
        'throw.0', 'throw.1', 'throw.2', 'throw.3', 'throw.4', 'throw.5',
        'touchdown.0',
        'wait.0',
        'walk.0', 'walk.1',
    ], [
        'attack.0',
        'before.0', 'before.1', 'before.2',
        'damage.0',
        'fall.0', 'fall.1',
        'fire.0', 'fire.1', 'fire.2', 'fire.3',
        'in.0',
        'jump.0',
        'out.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'squat.0',
        'throw.0', 'throw.1', 'throw.2', 'throw.3', 'throw.4', 'throw.5', 'throw.6',
        'touchdown.0',
        'wait.0',
        'walk.0', 'walk.1',
    ],)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new InGameEntityImages.Null()

    public static readonly BOOM_BOOM =                                     new InGameEntityImages.Null()
    public static readonly POM_POM =                                       new InGameEntityImages.Null()
    public static readonly POM_POM_CLONE =                                 new InGameEntityImages.Null()
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new InGameEntityImages.Null()

    public static readonly LARRY =                                         new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Larry', 'Enemy - Larry', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',],)
    public static readonly LARRY_WAND =                                    new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Larry’s Wand', 'Enemy - Larry', 'wand',)
    public static readonly LARRY_PROJECTILE =                              new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Larry’s projectile)', 'Enemy - Larry', 'effect.0',)

    public static readonly IGGY =                                          new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Iggy', 'Enemy - Iggy', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
        'walkl.0', 'walkl.1', 'walkl.2', 'walkl.3',],)
    public static readonly IGGY_WAND =                                     new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Iggy’s Wand', 'Enemy - Iggy', 'wand',)
    public static readonly IGGY_PROJECTILE =                               new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Iggy’s projectile)', 'Enemy - Iggy', 'effect.0',)

    public static readonly WENDY =                                         new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Wendy', 'Enemy - Wendy', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',],)
    public static readonly WENDY_WAND =                                    new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Wendy’s Wand', 'Enemy - Wendy', 'wand',)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new InGameEntityImages.ExistantAsThreeInNotNsmbuAndSm3dw('Candy Ring thrown by a Wendy', 'Enemy - Wendy', 'ring.0', 'ring.1', 'ring.2',)
    public static readonly WENDY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly LEMMY =                                         new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Lemmy', 'Enemy - Lemmy', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'chase.0', 'chase.1', 'chase.2', 'chase.3',
        'damage.0',
        'fall.0', 'fall.1',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2',],)
    public static readonly LEMMY_WAND =                                    new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Lemmy’s Wand', 'Enemy - Lemmy', 'wand',)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new InGameEntityImages.ExistantAsMagicBall()
    public static readonly LEMMY_PROJECTILE =                              new InGameEntityImages.Null()

    public static readonly ROY =                                           new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Lemmy', 'Enemy - Lemmy', [
        'damage.0',
        'head.0', 'head.1', 'head.2', 'head.3', 'head.4',
        'pose.0', 'pose.1', 'pose.2', 'pose.3',
        'shell.0', 'shell.1', 'shell.2', 'shell.3', 'shell.4', 'shell.5', 'shell.6', 'shell.7',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'head.0', 'head.1', 'head.2', 'head.3', 'head.4',
        'pose.0', 'pose.1', 'pose.2', 'pose.3',
        'shell.0', 'shell.1', 'shell.2', 'shell.3', 'shell.4', 'shell.5', 'shell.6', 'shell.7',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'head.0', 'head.1', 'head.2', 'head.3', 'head.4',
        'pose.0', 'pose.1', 'pose.2', 'pose.3',
        'shell.0', 'shell.1', 'shell.2', 'shell.3', 'shell.4', 'shell.5', 'shell.6', 'shell.7',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2',],)
    public static readonly ROY_WAND =                                      new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Roy’s Wand', 'Enemy - Roy', 'wand',)
    public static readonly ROY_PROJECTILE =                                new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Roy’s projectile)', 'Enemy - Roy', 'effect.0',)

    public static readonly MORTON =                                        new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Lemmy', 'Enemy - Lemmy', [
        'damage.0',
        'jump_quake.0', 'jump_quake.1', 'jump_quake.2',
        'jump_quake_ed.0', 'jump_quake_ed.1', 'jump_quake_ed.2',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'jump_quake.0', 'jump_quake.1', 'jump_quake.2',
        'jump_quake_ed.0', 'jump_quake_ed.1', 'jump_quake_ed.2',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'chase.0', 'chase.1', 'chase.2', 'chase.3',
        'damage.0',
        'fall.0', 'fall.1',
        'jump_quake.0', 'jump_quake.1', 'jump_quake.2',
        'jump_quake_ed.0', 'jump_quake_ed.1', 'jump_quake_ed.2',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2',],)
    public static readonly MORTON_WAND =                                   new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('Morton’s Wand', 'Enemy - Morton', 'wand',)
    public static readonly MORTON_THROWN_PROJECTILE =                      new InGameEntityImages.ExistantAsOneInNotNsmbuAndSm3dw('(Morton’s Thrown projectile)', 'Enemy - Morton', 'effect.0',)
    public static readonly MORTON_GROUND_PROJECTILE =                      new InGameEntityImages.ExistantAsTwoInNotNsmbuAndSm3dw('(Morton’s Ground projectile)', 'Enemy - Morton', 'fire.0', 'fire.1',)

    public static readonly LUDWIG =                                        new InGameEntityImages.ExistantAsNoVariantAndNotNsmbuAndSm3dw('Ludwig', 'Enemy - Ludwig', [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2', 'throw_ed.3', 'throw_ed.4', 'throw_ed.5',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1',
    ], [
        'damage.0',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2', 'throw_ed.3', 'throw_ed.4', 'throw_ed.5',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3',
    ], [
        'damage.0',
        'fall.0', 'fall.1',
        'hb_throw_ed.0', 'hb_throw_ed.1', 'hb_throw_ed.2', 'hb_throw_ed.3', 'hb_throw_ed.4', 'hb_throw_ed.5', 'hb_throw_ed.6', 'hb_throw_ed.7', 'hb_throw_ed.8',
        'hb_throw_st.0', 'hb_throw_st.1', 'hb_throw_st.2', 'hb_throw_st.3', 'hb_throw_st.4', 'hb_throw_st.5', 'hb_throw_st.6', 'hb_throw_st.7', 'hb_throw_st.8',
        'shell.0', 'shell.1', 'shell.2', 'shell.3',
        'throw_ed.0', 'throw_ed.1', 'throw_ed.2',
        'throw_st.0', 'throw_st.1', 'throw_st.2', 'throw_st.3', 'throw_st.4', 'throw_st.5',
        'wait.0', 'wait.1', 'wait.2', 'wait.3', 'wait.4', 'wait.5', 'wait.6',],)
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

    public static readonly CRATE =                                         new InGameEntityImages.ExistantAsFiveInOnlySm3dw('Crate', '3W Object - WoodBox', 'WoodBox_Alb.0', 'WoodBox_Alb.1', 'WoodBox_Alb.2', 'WoodBox_Alb.3', 'WoodBox_Alb.4',)

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

    public abstract get image(): InGameImage_Regular

    //endregion -------------------- Getter methods --------------------

}
