import type {NullOrNumber}            from '@joookiwi/type'
import {useEffect, useMemo, useState} from 'react'

import type {SoundFile}   from 'util/file/sound/SoundFile'
import type {SoundPlayer} from 'util/file/sound/SoundPlayer'

import {getOrCreateSoundPlayer, getSoundPlayer} from 'util/file/sound/method/soundPlayer.retriever'

export function useSoundPlayer(file: SoundFile, title: string,): readonly [hasExceptionCaught: boolean, isLoading: boolean, isPlaying: boolean, currentTime: NullOrNumber, setCurrentTime: (value: number) => void, totalTime: NullOrNumber, soundPlayer: SoundPlayer,] {
    useEffect(() => () => {
        const soundPlayer = getSoundPlayer(file,)
        if (soundPlayer == null)
            return
        // if (!soundPlayer.isPaused)
        //     soundPlayer.pause()
        soundPlayer.removeEvents()
    }, [file, title,],)
    const [hasExceptionCaught, setExceptionCaught,] = useState(false,)
    const [isLoading, setLoading,] = useState(false,)
    const soundPlayer = useMemo(() => getOrCreateSoundPlayer(file, title,), [file, title,],)
    const [isPlaying, setPlaying,] = useState(false,)
    const [currentTime, setCurrentTime,] = useState<NullOrNumber>(null,)
    const [totalTime, setTotalTime,] = useState<NullOrNumber>(null,)
    soundPlayer
        .setOnExceptionCaught(() => setExceptionCaught(true,),)
        .setOnLoadStartEvent(() => setLoading(true,),)
        .setOnLoadedDataEvent(() => setLoading(false,),)
        .setOnPlayingEvent(() => setPlaying(true,),)
        .setOnCanPlayEvent(it => setTotalTime(it.totalTime,),)
        .setOnPauseEvent(() => setPlaying(false,),)
        .setOnTimeChangedEvent(it => setCurrentTime(it.currentTime,),)

    return [hasExceptionCaught, isLoading, isPlaying, currentTime, it => soundPlayer.currentTime = it, totalTime, soundPlayer,]
}
