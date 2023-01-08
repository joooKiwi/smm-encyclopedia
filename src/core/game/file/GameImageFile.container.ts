import type {GameImageFile, ImageFileExtension, ImageFilePath} from 'core/game/file/GameImageFile'
import type {PossibleEnglishName}                              from 'core/game/Games.types'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class GameImageFileContainer
    extends AbstractImageFile<ImageFilePath, PossibleEnglishName, ImageFileExtension, PossibleEnglishName>
    implements GameImageFile {

    public constructor(englishName: PossibleEnglishName,) {
        super('game', englishName, 'svg', englishName,)
    }

}
