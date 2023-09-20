import type {GameStyleImageFile}                       from 'core/gameStyle/file/GameStyleImageFile'
import type {PossibleEnglishName, PossibleGameAcronym} from 'core/gameStyle/GameStyles.types'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a simple {@link GameStyleImageFile} from a {@link acronym} provided
 *
 * @param acronym The {@link GameStyles} file acronym
 * @param englishName The {@link GameStyles} {@link GameStyles.englishName english name}
 */
export function gameStyleImage(acronym: PossibleGameAcronym, englishName: PossibleEnglishName,): GameStyleImageFile {
    return new SimpleImageFile('game style', `${acronym}_Lyt_Logo_00`, 'tiff', englishName,)
}
