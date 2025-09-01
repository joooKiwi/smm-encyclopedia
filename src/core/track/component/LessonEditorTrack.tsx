import './Tracks.scss'

import type {Tracks}          from 'core/track/Tracks'
import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import ActionButton     from 'util/button/ActionButton'
import {useSoundPlayer} from 'util/file/sound/soundPlayerHook'
import ExceptionIcon    from 'util/file/sound/component/ExceptionIcon'
import LoadingStatus    from 'util/file/sound/component/LoadingStatus'
import MuteButton       from 'util/file/sound/component/MuteButton'
import PauseButton      from 'util/file/sound/component/PauseButton'
import PlayButton       from 'util/file/sound/component/PlayButton'
import SoundControls    from 'util/file/sound/component/SoundControls'
import StopButton       from 'util/file/sound/component/StopButton'
import {loadAllTracks}  from 'util/file/sound/method/loadAllTrack'

interface LessonEditorTrackProperties
    extends ReactProperties {

    readonly tracks: ArrayOf4<Tracks>

}

/** @reactComponent */
export default function LessonEditorTrack(properties: LessonEditorTrackProperties,) {
    const track1 = properties.tracks[0]
    const track1File = track1.file
    if (track1File == null)
        throw new ReferenceError(`The track #1 of ${track1.titleName} was not expected to be null.`,)

    const track2 = properties.tracks[1]
    const track2File = track2.file
    if (track2File == null)
        throw new ReferenceError(`The track #2 of ${track2.titleName} was not expected to be null.`,)

    const track3 = properties.tracks[2]
    const track3File = track3.file
    if (track3File == null)
        throw new ReferenceError(`The track #3 of ${track3.titleName} was not expected to be null.`,)

    const track4 = properties.tracks[3]
    const track4File = track4.file
    if (track4File == null)
        throw new ReferenceError(`The track #4 of ${track4.titleName} was not expected to be null.`,)
    return <div className="lessonEditor-track-container tracks-container text-center bg-dark bg-opacity-75 rounded">
        <SubContent track1File={track1File} track1TitleName={track1.titleName}
                    track2File={track2File} track2TitleName={track2.titleName}
                    track3File={track3File} track3TitleName={track3.titleName}
                    track4File={track4File} track4TitleName={track4.titleName}/>
    </div>
}


interface SubContentLessonEditorTrackProperties
    extends ReactProperties {

    readonly track1File: SoundFile
    readonly track1TitleName: string

    readonly track2File: SoundFile
    readonly track2TitleName: string

    readonly track3File: SoundFile
    readonly track3TitleName: string

    readonly track4File: SoundFile
    readonly track4TitleName: string

}

/** @reactComponent */
function SubContent({track1File, track1TitleName, track2File, track2TitleName, track3File, track3TitleName, track4File, track4TitleName,}: SubContentLessonEditorTrackProperties,) {
    const [hasExceptionCaught_track1, isLoading_track1, isPlaying_track1, currentTime_track1, setCurrentTime_track1, totalTime_track1, isMuted_track1, setMuted_track1, soundPlayer_track1,] = useSoundPlayer(track1File, track1TitleName,)
    const [hasExceptionCaught_track2, isLoading_track2, isPlaying_track2, currentTime_track2, setCurrentTime_track2, totalTime_track2, isMuted_track2, setMuted_track2, soundPlayer_track2,] = useSoundPlayer(track2File, track2TitleName,)
    const [hasExceptionCaught_track3, isLoading_track3, isPlaying_track3, currentTime_track3, setCurrentTime_track3, totalTime_track3, isMuted_track3, setMuted_track3, soundPlayer_track3,] = useSoundPlayer(track3File, track3TitleName,)
    const [hasExceptionCaught_track4, isLoading_track4, isPlaying_track4, currentTime_track4, setCurrentTime_track4, totalTime_track4, isMuted_track4, setMuted_track4, soundPlayer_track4,] = useSoundPlayer(track4File, track4TitleName,)
    const currentTime = isPlaying_track1 ? currentTime_track1 : isPlaying_track2 ? currentTime_track2 : isPlaying_track3 ? currentTime_track3 : currentTime_track4
    const loopingTime = track1File.repeatableTime?.second
    const totalTime = totalTime_track1 ?? totalTime_track2 ?? totalTime_track3 ?? totalTime_track4

    if (hasExceptionCaught_track1 || hasExceptionCaught_track2 || hasExceptionCaught_track3 || hasExceptionCaught_track4)
        return <ExceptionIcon/>

    function pauseAction() {
        soundPlayer_track1.pause()
        soundPlayer_track2.pause()
        soundPlayer_track3.pause()
        soundPlayer_track4.pause()
    }
    if (isLoading_track1 || isLoading_track2 || isLoading_track3 || isLoading_track4)
        return <>
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
            <div className="btn-group d-block mb-1">
                <ActionButton isDisabled={!isLoading_track1} isInactive className="px-1 py-0">1</ActionButton>
                <ActionButton isDisabled={!isLoading_track2} isInactive className="px-1 py-0">2</ActionButton>
                <ActionButton isDisabled={!isLoading_track3} isInactive className="px-1 py-0">3</ActionButton>
                <ActionButton isDisabled={!isLoading_track4} isInactive className="px-1 py-0">4</ActionButton>
            </div>
        </>

    function playAction() {
        loadAllTracks(soundPlayer_track1, soundPlayer_track2, soundPlayer_track3, soundPlayer_track4,)
            .then(() => {
                soundPlayer_track1.play()
                soundPlayer_track2.play()
                soundPlayer_track3.play()
                soundPlayer_track4.play()
            },)
    }
    if (currentTime == null || totalTime == null)
        return <PlayButton action={playAction}/>

    function setCurrentTimeAction(value: number,) {
        setCurrentTime_track1(value,)
        setCurrentTime_track2(value,)
        setCurrentTime_track3(value,)
        setCurrentTime_track4(value,)
    }
    function playAction2() {
        soundPlayer_track1.play()
        soundPlayer_track2.play()
        soundPlayer_track3.play()
        soundPlayer_track4.play()
    }
    function stopAction() {
        soundPlayer_track1.stop()
        soundPlayer_track2.stop()
        soundPlayer_track3.stop()
        soundPlayer_track4.stop()
    }
    function switchMuteStateOnTrack1Action() { setMuted_track1(!isMuted_track1,) }
    function switchMuteStateOnTrack2Action() { setMuted_track2(!isMuted_track2,) }
    function switchMuteStateOnTrack3Action() { setMuted_track3(!isMuted_track3,) }
    function switchMuteStateOnTrack4Action() { setMuted_track4(!isMuted_track4,) }
    function muteAction() {
        setMuted_track1(true,)
        setMuted_track2(true,)
        setMuted_track3(true,)
        setMuted_track4(true,)
    }
    function unmuteAction() {
        setMuted_track1(false,)
        setMuted_track2(false,)
        setMuted_track3(false,)
        setMuted_track4(false,)
    }
    return <>
        {isPlaying_track1 || isPlaying_track2 || isPlaying_track3 || isPlaying_track4 ? <PauseButton action={pauseAction}/> : <PlayButton action={playAction2}/>}
        <StopButton action={stopAction}/>
        {!isMuted_track1 || !isMuted_track2 || !isMuted_track3 || !isMuted_track4 ? <MuteButton action={muteAction}/> : <MuteButton isMuted action={unmuteAction}/>}
        <div className="btn-group d-block mb-1">
            <ActionButton isInactive={isMuted_track1} className="px-1 py-0" action={switchMuteStateOnTrack1Action}>1</ActionButton>
            <ActionButton isInactive={isMuted_track2} className="px-1 py-0" action={switchMuteStateOnTrack2Action}>2</ActionButton>
            <ActionButton isInactive={isMuted_track3} className="px-1 py-0" action={switchMuteStateOnTrack3Action}>3</ActionButton>
            <ActionButton isInactive={isMuted_track4} className="px-1 py-0" action={switchMuteStateOnTrack4Action}>4</ActionButton>
        </div>
        <SoundControls currentTime={currentTime} setCurrentTime={setCurrentTimeAction} loopingTime={loopingTime} totalTime={totalTime}/>
    </>
}
