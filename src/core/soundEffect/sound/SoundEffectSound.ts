import type {Array, EmptyArray, NullOr} from '@joookiwi/type'

import type {SoundEffectSoundFile} from 'core/soundEffect/file/SoundEffectSoundFile'

export interface SoundEffectSound<out SOUNDS extends Array<SoundEffectSoundFile> = Array<SoundEffectSoundFile>,
    out EDITOR_SOUND extends PossibleEditorValue<SOUNDS> = PossibleEditorValue<SOUNDS>,
    out LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS> = PossibleValueOnLinkOrSMB2Value<SOUNDS>,
    out SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS> = PossibleValueOnLinkOrSMB2Value<SOUNDS>, > {

    get sounds(): SOUNDS

    get editorSound(): EDITOR_SOUND

    get linkSounds(): LINK_SOUNDS

    get smb2Sounds(): SMB2_SOUNDS

}

export type PossibleEditorValue<SOUNDS extends Array<SoundEffectSoundFile> = Array<SoundEffectSoundFile>, > = NullOr<SOUNDS[number]>
export type PossibleValueOnLinkOrSMB2Value<SOUNDS extends Array<SoundEffectSoundFile> = Array<SoundEffectSoundFile>, > =
    | EmptyArray
    | readonly [SOUNDS[number],]
    | readonly [SOUNDS[number], SOUNDS[number],]
