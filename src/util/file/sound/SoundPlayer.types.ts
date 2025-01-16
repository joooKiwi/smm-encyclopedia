import type {SoundPlayer} from 'util/file/sound/SoundPlayer'

export type EventCallback<SOUND_PLAYER extends SoundPlayer<any, any>, > = (soundPlayer: SOUND_PLAYER, event: Event,) => void
export type SoundPlayerCallback<SOUND_PLAYER extends SoundPlayer<any, any>, > = (soundPlayer: SOUND_PLAYER,) => void
export type ExceptionCallback<SOUND_PLAYER extends SoundPlayer<any, any>, > = (soundPlayer: SOUND_PLAYER, reason: unknown,) => void
