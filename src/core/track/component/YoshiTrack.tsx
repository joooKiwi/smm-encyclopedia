import './Tracks.scss'

import type {Tracks}          from 'core/track/Tracks'
import type {ImageFile}       from 'util/file/image/ImageFile'
import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import MuteWithYoshiImageButton from 'core/track/component/MuteWithYoshiImageButton'
import {useSoundPlayer}         from 'util/file/sound/soundPlayerHook'
import ExceptionIcon            from 'util/file/sound/component/ExceptionIcon'
import LoadingStatus            from 'util/file/sound/component/LoadingStatus'
import MuteButton               from 'util/file/sound/component/MuteButton'
import PauseButton              from 'util/file/sound/component/PauseButton'
import PlayButton               from 'util/file/sound/component/PlayButton'
import SoundControls            from 'util/file/sound/component/SoundControls'
import StopButton               from 'util/file/sound/component/StopButton'
import {loadAllTracks}          from 'util/file/sound/method/loadAllTrack'

interface YoshiTrackProperties
    extends ReactProperties {

    readonly normal: Tracks

    readonly yoshi: Tracks

    readonly image: ImageFile

}

/** @reactComponent */
export default function YoshiTrack(properties: YoshiTrackProperties,) {
    const normal = properties.normal
    const normalFile = normal.file
    if (normalFile == null)
        throw new ReferenceError(`The normal file of ${normal.titleName} was not expected to be null.`,)

    const yoshi = properties.yoshi
    const yoshiFile = yoshi.file
    if (yoshiFile == null)
        throw new ReferenceError(`The Yoshi file of ${yoshi.titleName} was not expected to be null.`,)
    return <div className="yoshi-track-container tracks-container text-center bg-dark bg-opacity-75 rounded">
        <SubContent normalFile={normalFile} normalTitleName={normal.titleName}
                    yoshiFile={yoshiFile} yoshiTitleName={yoshi.titleName} image={properties.image}/>
    </div>
}


interface SubContentYoshiTrackProperties
    extends ReactProperties {

    readonly normalFile: SoundFile
    readonly normalTitleName: string

    readonly yoshiFile: SoundFile
    readonly yoshiTitleName: string
    readonly image: ImageFile

}

/** @reactComponent */
function SubContent({normalFile, normalTitleName, yoshiFile, yoshiTitleName, image,}: SubContentYoshiTrackProperties,) {
    const [hasExceptionCaught_normal, isLoading_normal, isPlaying_normal, currentTime_normal, setCurrentTime_normal, totalTime_normal, isMuted_normal, setMuted_normal, soundPlayer_normal,] = useSoundPlayer(normalFile, normalTitleName,)
    const [hasExceptionCaught_yoshi,  isLoading_yoshi,                  ,                   , setCurrentTime_yoshi,                  , isMuted_yoshi,  setMuted_yoshi,  soundPlayer_yoshi,] = useSoundPlayer(yoshiFile, yoshiTitleName,)
    const loopingTime = normalFile.repeatableTime?.second

    if (hasExceptionCaught_normal || hasExceptionCaught_yoshi)
        return <ExceptionIcon/>

    function pauseAction() {
        soundPlayer_normal.pause()
        soundPlayer_yoshi.pause()
    }
    if (isLoading_normal || isLoading_yoshi)
        return <>
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
        </>

    function playAction() {
        loadAllTracks(soundPlayer_normal, soundPlayer_yoshi,)
            .then(() => {
                soundPlayer_normal.play()
                soundPlayer_yoshi.play()
            },)
    }
    function setMuteYoshiAction(value: boolean,) { setMuted_yoshi(value,) }
    if (currentTime_normal == null || totalTime_normal == null)
        return <>
            <PlayButton action={playAction}/>
            <MuteWithYoshiImageButton isDisabled image={image} action={setMuteYoshiAction}/>
        </>

    function setCurrentTimeAction(value: number,) {
        setCurrentTime_normal(value,)
        setCurrentTime_yoshi(value,)
    }
    function playAction2() {
        soundPlayer_normal.play()
        soundPlayer_yoshi.play()
    }
    function stopAction() {
        soundPlayer_normal.stop()
        soundPlayer_yoshi.stop()
    }
    function muteAction() {
        setMuted_normal(true,)
        setMuted_yoshi(true,)
    }
    function unmuteAction() { setMuted_normal(false,) }
    //TODO add info on the top right corner
    return <>
        <div className="d-flex align-items-center px-1 border-bottom border-light">
            {isPlaying_normal ? <PauseButton action={pauseAction}/> : <PlayButton action={playAction2}/>}
            <MuteWithYoshiImageButton isMuted={isMuted_yoshi} image={image} action={setMuteYoshiAction}/>
            <div className="vr text-light mx-1"/>
            <StopButton action={stopAction}/>
            {!isMuted_normal ? <MuteButton action={muteAction}/> : <MuteButton isMuted action={unmuteAction}/>}
        </div>
        <SoundControls currentTime={currentTime_normal} setCurrentTime={setCurrentTimeAction} loopingTime={loopingTime} totalTime={totalTime_normal}/>
    </>
}
