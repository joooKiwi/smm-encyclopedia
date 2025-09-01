import './Tracks.scss'

import type {NullOrString} from '@joookiwi/type'
import {useState}          from 'react'

import type {Tracks}          from 'core/track/Tracks'
import type {ImageFile}       from 'util/file/image/ImageFile'
import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import {Times}                  from 'core/time/Times'
import MuteWithYoshiImageButton from 'core/track/component/MuteWithYoshiImageButton'
import PauseOnTimeButton        from 'core/track/component/PauseOnTimeButton'
import PlayOnTimeButton         from 'core/track/component/PlayOnTimeButton'
import {useSoundPlayer}         from 'util/file/sound/soundPlayerHook'
import ExceptionIcon            from 'util/file/sound/component/ExceptionIcon'
import LoadingStatus            from 'util/file/sound/component/LoadingStatus'
import MuteButton               from 'util/file/sound/component/MuteButton'
import PauseButton              from 'util/file/sound/component/PauseButton'
import SoundControls            from 'util/file/sound/component/SoundControls'
import StopButton               from 'util/file/sound/component/StopButton'
import {loadAllTracks}          from 'util/file/sound/method/loadAllTrack'

interface DayNightYoshiTrackProperties
    extends ReactProperties {

    readonly day: Tracks

    readonly night: Tracks

    readonly yoshi: Tracks

    readonly image: ImageFile

}

/** @reactComponent */
export default function DayNightYoshiTrack(properties: DayNightYoshiTrackProperties,) {
    const day = properties.day
    const dayFile = day.file
    if (dayFile == null)
        throw new ReferenceError(`The day time of ${day.titleName} was not expected to be null.`,)

    const night = properties.night
    const nightFile = night.file
    if (nightFile == null)
        throw new ReferenceError(`The night time of ${night.titleName} was not expected to be null.`,)

    const yoshi = properties.yoshi
    const yoshiFile = yoshi.file
    if (yoshiFile == null)
        throw new ReferenceError(`The Yoshi of ${yoshi.titleName} was not expected to be null.`,)

    const repeatableTime_day = dayFile.repeatableTime
    const repeatableTime_night = nightFile.repeatableTime
    if ((repeatableTime_day == null && repeatableTime_night == null) || (repeatableTime_day != null && repeatableTime_day.equals(repeatableTime_night,)))
        return <div className="dayNightYoshi-track-container tracks-container text-center bg-dark bg-opacity-75 rounded">
            <SynchronizedSubContent dayFile={dayFile} dayTitleName={day.titleName}
                                    nightFile={nightFile} nightTitleName={night.titleName}
                                    yoshiFile={yoshiFile} yoshiTitleName={yoshi.titleName} image={properties.image}/>
        </div>
    return <div className="dayNightYoshi-track-container tracks-container text-center bg-dark bg-opacity-75 rounded">
        <NotSynchronizedSubContent dayFile={dayFile} dayTitleName={day.titleName}
                                   nightFile={nightFile} nightTitleName={night.titleName}
                                   yoshiFile={yoshiFile} yoshiTitleName={yoshi.titleName} image={properties.image}/>
    </div>
}


interface SubContentDayNightYoshiTrackProperties
    extends ReactProperties {

    readonly dayFile: SoundFile
    readonly dayTitleName: string

    readonly nightFile: SoundFile
    readonly nightTitleName: string

    readonly yoshiFile: SoundFile
    readonly yoshiTitleName: string
    readonly image: ImageFile

}

/** @reactComponent */
function SynchronizedSubContent({dayFile, dayTitleName, nightFile, nightTitleName, yoshiFile, yoshiTitleName, image,}: SubContentDayNightYoshiTrackProperties,) {
    const [hasExceptionCaught_day,   isLoading_day,   isPlaying_day,   currentTime_day,   setCurrentTime_day,   totalTime_day,   isMuted_day,   setMuted_day,   soundPlayer_day,] = useSoundPlayer(dayFile, dayTitleName,)
    const [hasExceptionCaught_night, isLoading_night, isPlaying_night, currentTime_night, setCurrentTime_night, totalTime_night, isMuted_night, setMuted_night, soundPlayer_night,] = useSoundPlayer(nightFile, nightTitleName,)
    const [hasExceptionCaught_yoshi, isLoading_yoshi, ,              ,                    setCurrentTime_yoshi, ,                isMuted_yoshi, setMuted_yoshi, soundPlayer_yoshi,] = useSoundPlayer(yoshiFile, yoshiTitleName,)
    const [selectedType, setSelectedType,] = useState<NullOrString<| 'day' | 'night'>>(null,)
    const [isDisabled_yoshi, setDisabled_yoshi,] = useState(false,)
    const [lastMutedStateBeforeNight_yoshi, setLastMutedStateBeforeNight_yoshi,] = useState(false,)
    const currentTime = isPlaying_day ? currentTime_day : currentTime_night
    const loopingTime = dayFile.repeatableTime?.second
    const totalTime = isPlaying_day ? totalTime_day : totalTime_night

    if (hasExceptionCaught_day || hasExceptionCaught_night || hasExceptionCaught_yoshi)
        return <ExceptionIcon/>

    function pauseAction() {
        soundPlayer_day.pause()
        soundPlayer_night.pause()
        soundPlayer_yoshi.pause()
    }
    if (isLoading_day || isLoading_night || isLoading_yoshi)
        return <>
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
        </>

    function playDayAction() {
        loadAllTracks(soundPlayer_day, soundPlayer_yoshi, soundPlayer_night,)
            .then(() => {
                setSelectedType('day',)
                setMuted_night(true,)
                soundPlayer_day.play()
                soundPlayer_yoshi.play()
                soundPlayer_night.play()
            },)
    }
    function playNightAction() {
        loadAllTracks(soundPlayer_day, soundPlayer_yoshi, soundPlayer_night,)
            .then(() => {
                setSelectedType('night',)
                setMuted_day(true,)
                setMuted_yoshi(true,)
                setDisabled_yoshi(true,)
                soundPlayer_day.play()
                soundPlayer_yoshi.play()
                soundPlayer_night.play()
            },)
    }
    function setMuteYoshiAction(value: boolean,) {
        setMuted_yoshi(value,)
        setLastMutedStateBeforeNight_yoshi(value,)
    }
    if (currentTime == null || totalTime == null || selectedType == null)
        return <>
            <PlayOnTimeButton time={Times.DAY} action={playDayAction}/>
            <MuteWithYoshiImageButton isDisabled image={image} action={setMuteYoshiAction}/>
            <PlayOnTimeButton time={Times.NIGHT} action={playNightAction}/>
        </>

    function setCurrentTimeAction(value: number,) {
        setCurrentTime_day(value,)
        setCurrentTime_yoshi(value,)
        setCurrentTime_night(value,)
    }
    function playDayAction2() {
        setSelectedType('day',)
        soundPlayer_day.play()
        soundPlayer_yoshi.play()
        soundPlayer_night.play()
        setDisabled_yoshi(false,)
        setMuted_day(false,)
        setMuted_yoshi(lastMutedStateBeforeNight_yoshi,)
        setMuted_night(true,)
    }
    function playNightAction2() {
        setSelectedType('night',)
        soundPlayer_day.play()
        soundPlayer_yoshi.play()
        soundPlayer_night.play()
        setLastMutedStateBeforeNight_yoshi(isMuted_yoshi,)
        setDisabled_yoshi(true,)
        setMuted_day(true,)
        setMuted_yoshi(true,)
        setMuted_night(false,)
    }
    function stopAction() {
        soundPlayer_day.stop()
        soundPlayer_yoshi.stop()
        soundPlayer_night.stop()
    }
    function pauseAction2() {
        soundPlayer_day.pause()
        soundPlayer_yoshi.pause()
        soundPlayer_night.pause()
        setDisabled_yoshi(false,)
    }
    function switchToDayAction() {
        setSelectedType('day',)
        setDisabled_yoshi(false,)
        setMuted_day(false,)
        setMuted_yoshi(lastMutedStateBeforeNight_yoshi,)
        setMuted_night(true,)
    }
    function switchToNightAction() {
        setSelectedType('night',)
        setLastMutedStateBeforeNight_yoshi(isMuted_yoshi,)
        setDisabled_yoshi(true,)
        setMuted_day(true,)
        setMuted_yoshi(true,)
        setMuted_night(false,)
    }
    //TODO add info on the top right corner
    return <>
        <div className="d-flex align-items-center px-1 border-bottom border-light">
            {isPlaying_day   ? selectedType === 'night' ? <PlayOnTimeButton time={Times.DAY}   action={switchToDayAction}/>   : <PauseOnTimeButton time={Times.DAY}   action={pauseAction2}/> : <PlayOnTimeButton time={Times.DAY}   action={playDayAction2}/>}
            <MuteWithYoshiImageButton isMuted={isMuted_yoshi} isDisabled={isDisabled_yoshi} image={image} action={setMuteYoshiAction}/>
            {isPlaying_night ? selectedType === 'day'   ? <PlayOnTimeButton time={Times.NIGHT} action={switchToNightAction}/> : <PauseOnTimeButton time={Times.NIGHT} action={pauseAction2}/> : <PlayOnTimeButton time={Times.NIGHT} action={playNightAction2}/>}
            <div className="vr text-light mx-1"/>
            <StopButton action={stopAction}/>
            {selectedType !== 'day'   ? null : <MuteButton isMuted={isMuted_day} action={setMuted_day}/>}
            {selectedType !== 'night' ? null : <MuteButton isMuted={isMuted_night} action={setMuted_night}/>}
        </div>
        <SoundControls currentTime={currentTime} setCurrentTime={setCurrentTimeAction} loopingTime={loopingTime} totalTime={totalTime}/>
    </>
}

/** @reactComponent */
function NotSynchronizedSubContent({dayFile, dayTitleName, nightFile, nightTitleName, yoshiFile, yoshiTitleName, image,}: SubContentDayNightYoshiTrackProperties,) {
    const [hasExceptionCaught_day,   isLoading_day,   isPlaying_day,   currentTime_day,   setCurrentTime_day,   totalTime_day,   isMuted_day,   setMuted_day,   soundPlayer_day,] = useSoundPlayer(dayFile, dayTitleName,)
    const [hasExceptionCaught_night, isLoading_night, isPlaying_night, currentTime_night, setCurrentTime_night, totalTime_night, isMuted_night, setMuted_night, soundPlayer_night,] = useSoundPlayer(nightFile, nightTitleName,)
    const [hasExceptionCaught_yoshi, isLoading_yoshi, ,                currentTime_yoshi, setCurrentTime_yoshi, totalTime_yoshi, isMuted_yoshi, setMuted_yoshi, soundPlayer_yoshi,] = useSoundPlayer(yoshiFile, yoshiTitleName,)
    const [selectedType, setSelectedType,] = useState<NullOrString<| 'day' | 'night'>>(null,)
    const [isDisabled_yoshi, setDisabled_yoshi,] = useState(false,)
    const [lastMutedStateBeforeNight_yoshi, setLastMutedStateBeforeNight_yoshi,] = useState(false,)
    const currentTime_day2 = isPlaying_day ? currentTime_day : currentTime_yoshi
    const loopingTime_day = dayFile.repeatableTime?.second
    const loopingTime_night = nightFile.repeatableTime?.second
    const totalTime_day2 = totalTime_day ?? totalTime_yoshi

    if (hasExceptionCaught_day || hasExceptionCaught_night || hasExceptionCaught_yoshi)
        return <ExceptionIcon/>

    function pauseAction() {
        soundPlayer_day.pause()
        soundPlayer_night.pause()
        soundPlayer_yoshi.pause()
    }
    if (isLoading_day || isLoading_night || isLoading_yoshi)
        return <>
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
        </>

    function playDayAction() {
        loadAllTracks(soundPlayer_day, soundPlayer_yoshi, soundPlayer_night,)
            .then(() => {
                setSelectedType('day',)
                setMuted_night(true,)
                soundPlayer_day.play()
                soundPlayer_yoshi.play()
                soundPlayer_night.play()
            },)
    }
    function playNightAction() {
        loadAllTracks(soundPlayer_day, soundPlayer_yoshi, soundPlayer_night,)
            .then(() => {
                setSelectedType('night',)
                setMuted_day(true,)
                setMuted_yoshi(true,)
                setDisabled_yoshi(true,)
                soundPlayer_day.play()
                soundPlayer_yoshi.play()
                soundPlayer_night.play()
            },)
    }
    function setMuteYoshiAction(value: boolean,) {
        setMuted_yoshi(value,)
        setLastMutedStateBeforeNight_yoshi(value,)
    }
    if (currentTime_day2 == null || totalTime_day2 == null || currentTime_night == null || totalTime_night == null || selectedType == null)
        return <div className="d-flex justify-content-center">
            <PlayOnTimeButton time={Times.DAY} action={playDayAction}/>
            <MuteWithYoshiImageButton isDisabled image={image} action={setMuteYoshiAction}/>
            <div className="vr text-light mx-1"/>
            <PlayOnTimeButton time={Times.NIGHT} action={playNightAction}/>
        </div>

    function setCurrentDayTimeAction(value: number,) {
        setCurrentTime_day(value,)
        setCurrentTime_yoshi(value,)
    }
    function setCurrentNightTimeAction(value: number,) { setCurrentTime_night(value,) }
    function playDayAction2() {
        setSelectedType('day',)
        soundPlayer_day.play()
        soundPlayer_night.play()
        soundPlayer_yoshi.play()
        setDisabled_yoshi(false,)
        setMuted_day(false,)
        setMuted_yoshi(lastMutedStateBeforeNight_yoshi,)
        setMuted_night(true,)
    }
    function playNightAction2() {
        setSelectedType('night',)
        soundPlayer_day.play()
        soundPlayer_night.play()
        soundPlayer_yoshi.play()
        setLastMutedStateBeforeNight_yoshi(isMuted_yoshi,)
        setDisabled_yoshi(true,)
        setMuted_day(true,)
        setMuted_yoshi(true,)
        setMuted_night(false,)
    }
    function stopAction() {
        soundPlayer_day.stop()
        soundPlayer_night.stop()
        soundPlayer_yoshi.stop()
    }
    function pauseAction2() {
        soundPlayer_day.pause()
        soundPlayer_yoshi.pause()
        soundPlayer_night.pause()
        setDisabled_yoshi(false,)
    }
    function switchToDayAction() {
        setSelectedType('day',)
        setDisabled_yoshi(false,)
        setMuted_day(false,)
        setMuted_yoshi(lastMutedStateBeforeNight_yoshi,)
        setMuted_night(true,)
    }
    function switchToNightAction() {
        setSelectedType('night',)
        setLastMutedStateBeforeNight_yoshi(isMuted_yoshi,)
        setDisabled_yoshi(true,)
        setMuted_day(true,)
        setMuted_yoshi(true,)
        setMuted_night(false,)
    }
    //TODO add info on the top right corner
    return <>
        <div className="d-flex align-items-center px-1 border-bottom border-light">
            {isPlaying_day   ? selectedType === 'night' ? <PlayOnTimeButton time={Times.DAY}   action={switchToDayAction}/>   : <PauseOnTimeButton time={Times.DAY}   action={pauseAction2}/> : <PlayOnTimeButton time={Times.DAY}   action={playDayAction2}/>}
            <MuteWithYoshiImageButton isMuted={isMuted_yoshi} isDisabled={isDisabled_yoshi} image={image} action={setMuteYoshiAction}/>
            <div className="vr text-light mx-1"/>
            {isPlaying_night ? selectedType === 'day'   ? <PlayOnTimeButton time={Times.NIGHT} action={switchToNightAction}/> : <PauseOnTimeButton time={Times.NIGHT} action={pauseAction2}/> : <PlayOnTimeButton time={Times.NIGHT} action={playNightAction2}/>}
            <div className="vr text-light mx-1"/>
            <StopButton action={stopAction}/>
            {selectedType !== 'day'   ? null : <MuteButton isMuted={isMuted_day} action={setMuted_day}/>}
            {selectedType !== 'night' ? null : <MuteButton isMuted={isMuted_night} action={setMuted_night}/>}
        </div>
        <SoundControls currentTime={currentTime_day2} setCurrentTime={setCurrentDayTimeAction} loopingTime={loopingTime_day} totalTime={totalTime_day2}/>
        <SoundControls currentTime={currentTime_night} setCurrentTime={setCurrentNightTimeAction} loopingTime={loopingTime_night} totalTime={totalTime_night}/>
    </>
}
