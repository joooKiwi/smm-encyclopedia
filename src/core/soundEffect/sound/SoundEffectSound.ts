import type {SoundEffectSoundFile} from '../file/SoundEffectSoundFile'

export interface SoundEffectSound<SOUNDS extends readonly SoundEffectSoundFile[] = readonly SoundEffectSoundFile[],
    EDITOR_SOUND extends PossibleEditorValue<SOUNDS> = PossibleEditorValue<SOUNDS>,
    LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS> = PossibleValueOnLinkOrSMB2Value<SOUNDS>,
    SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS> = PossibleValueOnLinkOrSMB2Value<SOUNDS>, > {

    get sounds(): SOUNDS

    get editorSound(): EDITOR_SOUND

    get linkSounds(): LINK_SOUNDS

    get smb2Sounds(): SMB2_SOUNDS

}

export type PossibleEditorValue<SOUNDS extends readonly SoundEffectSoundFile[] = readonly SoundEffectSoundFile[], > = | SOUNDS[number] | null
export type PossibleValueOnLinkOrSMB2Value<SOUNDS extends readonly SoundEffectSoundFile[] = readonly SoundEffectSoundFile[], > = | readonly [] | readonly [SOUNDS[number],] | readonly [SOUNDS[number], SOUNDS[number],]
