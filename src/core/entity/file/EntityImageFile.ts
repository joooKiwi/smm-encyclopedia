import type {PossibleEnglishName}           from 'core/entity/Entities.types'
import type {GameStyles}                    from 'core/gameStyle/GameStyles'
import type {PossibleAcronym_InFile}        from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                     from 'util/file/image/ImageFile'

/**
 * An {@link ImageFile} made to be related to an {@link Entities}
 *
 * @see EditorImageFile
 * @see ClearConditionImageFile
 * @see InGameImageFile
 * @see UnusedImageFile
 * @see UnusedSmm1ImageFile_BigMushroom
 */
export type EntityImageFile = | EditorImageFile
                              | ClearConditionImageFile
                              | InGameImageFile | InGameSmm1ImageFile_BigMushroom
                              | UnusedImageFile | UnusedSmm1ImageFile_BigMushroom

export type EditorImageFile<GAME_STYLE extends GameStyles = GameStyles, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/editor`, `${GAME_STYLE['acronymInFile']}_Lyt_P_${FILE_NAME}`, 'tiff', `${NAME} (editor)`>


export type ClearConditionImageFile<GAME_STYLE_ACRONYM extends PossibleAcronym_InFile = PossibleAcronym_InFile, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/clear condition/`, `${GAME_STYLE_ACRONYM}_Lyt_M_${FILE_NAME}`, 'tiff', `${NAME} (clear condition)`>


export type InGameImageFile<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/in game/${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (in game)`>

export type InGameSmm1ImageFile_BigMushroom<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/in game/M1 A Enemy - ${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (in game Big Mushroom)`>


export type UnusedImageFile<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/unused/${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (unused)`>

/**
 * An unused Big Mushroom ({@link Entities.BIG_MUSHROOM_CLASSIC classic} / {@link Entities.BIG_MUSHROOM_MODERN modern}) {@link ImageFile}
 * in {@link SMB} only for {@link SMM1}
 */
export type UnusedSmm1ImageFile_BigMushroom<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/unused/M1 A Enemy - ${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (unused Big Mushroom)`>
