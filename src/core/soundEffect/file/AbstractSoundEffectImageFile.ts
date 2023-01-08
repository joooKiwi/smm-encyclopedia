import type {PossibleEnglishName}                                                              from 'core/soundEffect/SoundEffects.types'
import type {ImageFileExtension, PossibleImageFileName, SoundEffectImageFile, SoundEffectPath} from 'core/soundEffect/file/SoundEffectImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export abstract class AbstractSoundEffectImageFile<NAME extends PossibleImageFileName, >
    extends AbstractImageFile<SoundEffectPath, NAME, ImageFileExtension, PossibleEnglishName>
    implements SoundEffectImageFile<NAME> {

    protected constructor(englishName: PossibleEnglishName, name: NAME,) {
        super('sound effect', name, 'tiff', englishName,)
    }

}
