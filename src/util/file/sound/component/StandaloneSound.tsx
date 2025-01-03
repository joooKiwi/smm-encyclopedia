import './StandaloneSound.scss'

import type {Nullable, NullOrNumber}    from '@joookiwi/type'
import {MouseEvent, TouchEvent, useRef} from 'react'
import {useEffect, useMemo, useState}   from 'react'

import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {SoundPlayer}     from 'util/file/sound/SoundPlayer'
import type {ReactProperties} from 'util/react/ReactProperties'

import {Empty}                                  from 'util/emptyVariables'
import {getOrNullByTouchList}                   from 'util/utilitiesMethods'
import {getOrCreateSoundPlayer, getSoundPlayer} from 'util/file/sound/method/soundPlayer.retriever'

import EMPTY_STRING = Empty.EMPTY_STRING
import TextComponent                            from 'app/tools/text/TextComponent'
import {unfinishedText}                         from 'app/tools/text/UnfinishedText'

// type NativeMouseEvent = globalThis.MouseEvent

interface StandaloneSoundProperties
    extends ReactProperties {

    /** The file of the audio element */
    readonly file: SoundFile

    /** The title of the audio element */
    readonly title: string

}

interface ButtonProperties
    extends ReactProperties {

    readonly soundPlayer: SoundPlayer

}

interface ControlsProperties
    extends ReactProperties {

    readonly current: number

    setCurrent(value: number,): void

    readonly total: number

}

interface TimeRangeProperties
    extends ReactProperties {

    readonly current: number

    readonly total: number

}

interface ProgressBarProperties
    extends ReactProperties {

    readonly current: number

    setCurrent(value: number,): void

    readonly total: number

}

/**
 * @todo load the same sound file at the position that is if it was already loaded on play
 * @reactComponent
 */
export default function StandaloneSound({file, title,}: StandaloneSoundProperties,) {
    useEffect(() => () => {
        const soundPlayer = getSoundPlayer(file, title,)
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

    if (hasExceptionCaught)
        return <div className="standalone-sound text-center bg-dark bg-opacity-75 rounded"><ExceptionIcon/></div>
    if (isLoading)
        return <div className="standalone-sound text-center bg-dark bg-opacity-75 rounded">
            <LoadingStatus/>
            <PauseButton soundPlayer={soundPlayer}/>
        </div>
    if (currentTime == null || totalTime == null)
        return <div className="standalone-sound text-center bg-dark bg-opacity-75 rounded"><PlayButton soundPlayer={soundPlayer}/></div>

    //TODO add info on the top right corner
    if (isPlaying)
        return <div className="standalone-sound text-center bg-dark bg-opacity-75 rounded">
            <PauseButton soundPlayer={soundPlayer}/>
            <StopButton soundPlayer={soundPlayer}/>
            <Controls current={currentTime} setCurrent={it => soundPlayer.currentTime = it} total={totalTime}/>
        </div>
    return <div className="standalone-sound text-center bg-dark bg-opacity-75 rounded">
        <PlayButton soundPlayer={soundPlayer}/>
        <StopButton soundPlayer={soundPlayer}/>
        <Controls current={currentTime} setCurrent={it => soundPlayer.currentTime = it} total={totalTime}/>
    </div>
}

/** @reactComponent */
function LoadingStatus() {
    return <div role="status" className="spinner-border spinner-border-sm text-primary">
        <TextComponent content={unfinishedText('Loading',)} className="visually-hidden"/>
    </div>
}

/** @reactComponent */
function ExceptionIcon() {
    return <i className="text-danger bi-shield-fill-exclamation"/>
}

/** @reactComponent */
function PlayButton({soundPlayer,}: ButtonProperties,) {
    return <button type="button" className="play-button btn btn-lg bi-play-fill p-0 border-0" onClick={() => soundPlayer.play()}/>
}

/** @reactComponent */
function PauseButton({soundPlayer,}: ButtonProperties,) {
    return <button type="button" className="pause-button btn btn-lg bi-pause-fill p-0 border-0" onClick={() => soundPlayer.pause()}/>
}

/** @reactComponent */
function StopButton({soundPlayer,}: ButtonProperties,) {
    return <button type="button" className="stop-button btn btn-lg bi-stop-fill p-0 border-0" onClick={() => soundPlayer.stop()}/>
}


/** @reactComponent */
function Controls({current, setCurrent, total,}: ControlsProperties,) {
    return <div className="controls-container pb-2">
        <TimeRange current={current} total={total}/>
        <ProgressBar current={current} setCurrent={setCurrent} total={total}/>
    </div>
}

function TimeRange({current, total,}: TimeRangeProperties,) {
    const currentMinute = Math.floor(current / 60,)
    const currentSecond = (current % 60).toFixed(1,)
    const totalMinute = Math.floor(total / 60)
    const totalSecond = (total % 60).toFixed(1,)


    return <div className="timeRange-container d-flex justify-content-between px-1 mb-1">
        {currentMinute === 0
            ? <small className="text-light me-1">{currentSecond}</small>
            : Number(currentSecond,) < 10
                ? <small className="text-light me-1">{currentMinute}:0{currentSecond}</small>
                : <small className="text-light me-1">{currentMinute}:{currentSecond}</small>}
        {totalMinute === 0
            ? <small className="text-light">{totalSecond}</small>
            : Number(totalSecond,) < 10
                ? <small className="text-light">{totalMinute}:0{totalSecond}</small>
                : <small className="text-light">{totalMinute}:{totalSecond}</small>}
    </div>
}

function ProgressBar({current, setCurrent, total,}: ProgressBarProperties,) {
    const progressBarContainerElement = useRef<HTMLDivElement>(null,)
    const [canMove, setMove,] = useState(false,)
    const [fingerTargetToFollow, setFingerTargetToFollow,] = useState<NullOrNumber>(null,)
    const visualCurrentPercentage = Number((current / total * 100).toFixed(2,),)

    return <div ref={progressBarContainerElement} className={`progressBar-container${canMove ? ' with-user-movement' : EMPTY_STRING} d-flex align-items-center bg-light bg-opacity-50 rounded mx-2`}
         role="progressbar"
         aria-valuemin={0} aria-valuenow={visualCurrentPercentage} aria-valuemax={100} style={{'--progress-percentage': `${visualCurrentPercentage}%`,}}
         onClick={it => changeCurrent(setCurrent, total, progressBarContainerElement.current, it,) }
         onMouseDown={() => setMove(true,) }
         onMouseMove={it => { if (canMove) changeCurrent(setCurrent, total, progressBarContainerElement.current, it,) } }
         onMouseUp={() => setMove(false,) }
         onMouseLeave={() => setMove(false,) }
         onTouchStart={it => setFingerTargetToFollow(it.targetTouches.item(0,).identifier,) }
         onTouchMove={it => { if (fingerTargetToFollow != null) changeCurrentFromMobile(setCurrent, total, progressBarContainerElement.current, fingerTargetToFollow, it,) } }
         onTouchEnd={() => setFingerTargetToFollow(null,) }
         onTouchCancel={() => setFingerTargetToFollow(null,) }>
        <div className="progressBar-line bg-light rounded"/>
        <i className="current-progress small text-light bi bi-circle-fill"
        />
    </div>
}


function changeCurrent(setCurrent: (value: number,) => void, total: number, element: Nullable<HTMLDivElement>, event: MouseEvent<HTMLElement, globalThis.MouseEvent>,) {
    if (element == null)
        return // We cannot infer the position if the element is not present

    // We change the current time to the element clicked from its percentage based on the width
    // newPercent = (clickX - elementX) / width
    setCurrent(total * (event.pageX - element.offsetLeft) / element.clientWidth,)
}

function changeCurrentFromMobile(setCurrent: (value: number,) => void, total: number, element: Nullable<HTMLDivElement>, fingerTargetToFollow: number, event: TouchEvent<HTMLElement>,) {
    if (element == null)
        return // We cannot infer the position if the element is not present

    const targetToFollow = getOrNullByTouchList(event.touches, fingerTargetToFollow,)
    if (targetToFollow == null)
        return // No target was found, then nothing can be changed

    // We change the current time to the element touched (it can be multiple depending on the device) from its percentage based on the width
    // newPercent = (touchX - elementX) / width
    setCurrent(total * (targetToFollow.pageX - element.offsetLeft) / element.clientWidth,)
}
