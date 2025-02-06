import type {SoundPlayer} from 'util/file/sound/SoundPlayer'

export type EventCallback<SOUND_PLAYER extends SoundPlayer<any, any>, > = (soundPlayer: SOUND_PLAYER, event: Event,) => void// eslint-disable-line @typescript-eslint/no-explicit-any
export type SoundPlayerCallback<SOUND_PLAYER extends SoundPlayer<any, any>, > = (soundPlayer: SOUND_PLAYER,) => void// eslint-disable-line @typescript-eslint/no-explicit-any
export type ExceptionCallback<SOUND_PLAYER extends SoundPlayer<any, any>, > = (soundPlayer: SOUND_PLAYER, reason: unknown,) => void// eslint-disable-line @typescript-eslint/no-explicit-any
