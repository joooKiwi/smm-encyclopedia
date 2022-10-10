import type {SoundPlayer}  from './SoundPlayer';
import type {HistoryState} from '../history/HistoryState';

type EventCallback<SOUND_PLAYER extends SoundPlayer, > = (soundPlayer: SOUND_PLAYER, event: Event,) => void;
type SoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = (soundPlayer: SOUND_PLAYER,) => void;
type SoundPlayerStateChangeCallback<SOUND_PLAYER extends SoundPlayer, > = (soundPlayer: SOUND_PLAYER, newState: HistoryState, oldState: HistoryState,) => void;
export type OnBeforePlaySoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerCallback<SOUND_PLAYER>;
export type OnAfterPlaySoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerCallback<SOUND_PLAYER>;
export type OnAfterPlayingSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = EventCallback<SOUND_PLAYER>;
export type OnBeforePauseSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerCallback<SOUND_PLAYER>;
export type OnAfterPauseSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerCallback<SOUND_PLAYER>;
export type OnBeforeStopSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerCallback<SOUND_PLAYER>;
export type OnAfterStopSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerCallback<SOUND_PLAYER>;
export type OnEndSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = EventCallback<SOUND_PLAYER>;
export type OnBeforeStateChangedSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerStateChangeCallback<SOUND_PLAYER>;
export type OnAfterStateChangedSoundPlayerCallback<SOUND_PLAYER extends SoundPlayer, > = SoundPlayerStateChangeCallback<SOUND_PLAYER>;
