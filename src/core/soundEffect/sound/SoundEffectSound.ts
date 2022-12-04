import type {SoundEffectSoundFile} from 'core/soundEffect/file/SoundEffectSoundFile'
import type {NullOr}               from 'util/types/nullable'

export interface SoundEffectSound<SOUNDS extends readonly SoundEffectSoundFile[] = readonly SoundEffectSoundFile[],
    EDITOR_SOUND extends PossibleEditorValue<SOUNDS> = PossibleEditorValue<SOUNDS>,
    LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS> = PossibleValueOnLinkOrSMB2Value<SOUNDS>,
    SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS> = PossibleValueOnLinkOrSMB2Value<SOUNDS>, > {

    get sounds(): SOUNDS

    get editorSound(): EDITOR_SOUND

    get linkSounds(): LINK_SOUNDS

    get smb2Sounds(): SMB2_SOUNDS

}

export type PossibleEditorValue<SOUNDS extends readonly SoundEffectSoundFile[] = readonly SoundEffectSoundFile[], > = NullOr<SOUNDS[number]>
export type PossibleValueOnLinkOrSMB2Value<SOUNDS extends readonly SoundEffectSoundFile[] = readonly SoundEffectSoundFile[], > = | readonly [] | readonly [SOUNDS[number],] | readonly [SOUNDS[number], SOUNDS[number],]
