import './Tracks.scss'

import type {NullOrString} from '@joookiwi/type'
import {useState}          from 'react'

import type {Tracks}          from 'core/track/Tracks'
import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import PauseOnUnderwaterButton from 'core/track/component/PauseOnUnderwater'
import PlayOnUnderwaterButton  from 'core/track/component/PlayOnUnderwater'
import {useSoundPlayer}        from 'util/file/sound/soundPlayerHook'
import ExceptionIcon           from 'util/file/sound/component/ExceptionIcon'
import LoadingStatus           from 'util/file/sound/component/LoadingStatus'
import MuteButton              from 'util/file/sound/component/MuteButton'
import PauseButton             from 'util/file/sound/component/PauseButton'
import PlayButton              from 'util/file/sound/component/PlayButton'
import SoundControls           from 'util/file/sound/component/SoundControls'
import StopButton              from 'util/file/sound/component/StopButton'
import {loadAllTracks}         from 'util/file/sound/method/loadAllTrack'

interface UnderwaterTrackProperties
    extends ReactProperties {

    readonly normal: Tracks

    readonly underwater: Tracks

}

/** @reactComponent */
export default function UnderwaterTrack(properties: UnderwaterTrackProperties,) {
    const normal = properties.normal
    const normalFile = normal.file
    if (normalFile == null)
        throw new ReferenceError(`The normal file of ${normal.titleName} was not expected to be null.`,)

    const underwater = properties.underwater
    const underwaterFile = underwater.file
    if (underwaterFile == null)
        throw new ReferenceError(`The underwater file of ${underwater.titleName} was not expected to be null.`,)
    return <div className="underwater-track-container tracks-container text-center bg-dark bg-opacity-75 rounded">
        <SubContent normalFile={normalFile} normalTitleName={normal.titleName}
                                underwaterFile={underwaterFile} underwaterTitleName={underwater.titleName}/>
    </div>
}


interface SubContentUnderwaterTrackProperties
    extends ReactProperties {

    readonly normalFile: SoundFile
    readonly normalTitleName: string

    readonly underwaterFile: SoundFile
    readonly underwaterTitleName: string

}

/** @reactComponent */
function SubContent({normalFile, normalTitleName, underwaterFile, underwaterTitleName,}: SubContentUnderwaterTrackProperties,) {
    const [hasExceptionCaught_normal,   isLoading_normal,   isPlaying_normal,   currentTime_normal,   setCurrentTime_normal,   totalTime_normal,   isMuted_normal,   setMuted_normal,   soundPlayer_normal,] = useSoundPlayer(normalFile, normalTitleName,)
    const [hasExceptionCaught_underwater, isLoading_underwater, isPlaying_underwater, currentTime_underwater, setCurrentTime_underwater, totalTime_underwater, isMuted_underwater, setMuted_underwater, soundPlayer_underwater,] = useSoundPlayer(underwaterFile, underwaterTitleName,)
    const [selectedType, setSelectedType,] = useState<NullOrString<| 'normal' | 'underwater'>>(null,)
    const currentTime = isPlaying_normal ? currentTime_normal : currentTime_underwater
    const loopingTime = normalFile.repeatableTime?.second
    const totalTime = totalTime_normal ?? totalTime_underwater

    if (hasExceptionCaught_normal || hasExceptionCaught_underwater)
        return <ExceptionIcon/>

    function pauseAction() {
        soundPlayer_normal.pause()
        soundPlayer_underwater.pause()
    }
    if (isLoading_normal || isLoading_underwater)
        return <>
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
        </>

    function playNormalAction() {
        loadAllTracks(soundPlayer_normal, soundPlayer_underwater,)
            .then(() => {
                setSelectedType('normal',)
                setMuted_underwater(true,)
                soundPlayer_normal.play()
                soundPlayer_underwater.play()
            },)
    }
    function playUnderwaterAction() {
        loadAllTracks(soundPlayer_normal, soundPlayer_underwater,)
            .then(() => {
                setSelectedType('underwater',)
                setMuted_normal(true,)
                soundPlayer_normal.play()
                soundPlayer_underwater.play()
            },)
    }
    if (currentTime == null || totalTime == null || selectedType == null)
        return <>
            <PlayButton action={playNormalAction}/>
            <PlayOnUnderwaterButton action={playUnderwaterAction}/>
        </>

    function setCurrentTimeAction(value: number,) {
        setCurrentTime_normal(value,)
        setCurrentTime_underwater(value,)
    }
    function playNormalAction2() {
        setSelectedType('normal',)
        soundPlayer_normal.play()
        soundPlayer_underwater.play()
        setMuted_normal(false,)
        setMuted_underwater(true,)
    }
    function playUnderwaterAction2() {
        setSelectedType('underwater',)
        soundPlayer_normal.play()
        soundPlayer_underwater.play()
        setMuted_normal(true,)
        setMuted_underwater(false,)
    }
    function stopAction() {
        soundPlayer_normal.stop()
        soundPlayer_underwater.stop()
    }
    function switchToNormalAction() {
        setSelectedType('normal',)
        setMuted_normal(false,)
        setMuted_underwater(true,)
    }
    function switchToUnderwaterAction() {
        setSelectedType('underwater',)
        setMuted_underwater(false,)
        setMuted_normal(true,)
    }
    //TODO add info on the top right corner
    return <>
        <div className="d-flex align-items-center px-1 border-bottom border-light">
            {isPlaying_normal     ? selectedType === 'underwater'? <PlayButton             action={switchToNormalAction}/>     : <PauseButton             action={pauseAction}/> : <PlayButton             action={playNormalAction2}/>}
            {isPlaying_underwater ? selectedType === 'normal'    ? <PlayOnUnderwaterButton action={switchToUnderwaterAction}/> : <PauseOnUnderwaterButton action={pauseAction}/> : <PlayOnUnderwaterButton action={playUnderwaterAction2}/>}
            <div className="vr text-light mx-1"/>
            <StopButton action={stopAction}/>
            {selectedType !== 'normal'     ? null : <MuteButton isMuted={isMuted_normal} action={setMuted_normal}/>}
            {selectedType !== 'underwater' ? null : <MuteButton isMuted={isMuted_underwater} action={setMuted_underwater}/>}
        </div>
        <SoundControls currentTime={currentTime} setCurrentTime={setCurrentTimeAction} loopingTime={loopingTime} totalTime={totalTime}/>
    </>
}
