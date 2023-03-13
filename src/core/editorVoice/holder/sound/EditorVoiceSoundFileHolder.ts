import type {EditorVoiceSoundFile}                                           from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {NullOr}                                                         from 'util/types/nullable'
import type {PossibleFileName, PossibleStartingName_WithEuropeanAlternative} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'

export interface EditorVoiceSoundFileHolder {

    get regularSoundFile(): EditorVoiceSoundFile<PossibleFileName>

    get europeanSoundFile(): NullOr<EditorVoiceSoundFile<PossibleFileName<PossibleStartingName_WithEuropeanAlternative[1], never>>>


    get soundFiles(): readonly EditorVoiceSoundFile<PossibleFileName>[]

}
