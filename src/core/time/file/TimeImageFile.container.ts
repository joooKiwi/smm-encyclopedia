import type {PossibleEnglishName, PossibleSimpleImagePath}         from 'core/time/Times.types'
import type {SoundEffectExtension, SoundEffectPath, TimeImageFile} from 'core/time/file/TimeImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class TimeImageFileContainer
    extends AbstractImageFile<SoundEffectPath, PossibleSimpleImagePath, SoundEffectExtension, PossibleEnglishName>
    implements TimeImageFile {

    public constructor(englishName: PossibleEnglishName, name: PossibleSimpleImagePath,) {
        super('time', name, 'png', englishName,)
    }

}