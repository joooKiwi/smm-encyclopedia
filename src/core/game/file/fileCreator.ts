import type {GameImageFile}       from 'core/game/file/GameImageFile'
import type {PossibleEnglishName} from 'core/game/Games.types'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link GameImageFile}
 *
 * @param englishName The {@link Games} {@link Games.englishName english name}
 */
export function gameImage(englishName: PossibleEnglishName,): GameImageFile {
    return new SimpleImageFile('game', englishName, 'svg', englishName,)
}
