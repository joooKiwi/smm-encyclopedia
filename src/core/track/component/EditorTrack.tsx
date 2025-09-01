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

interface EditorTrackProperties
    extends ReactProperties {

    readonly tracks: ArrayOf7<Tracks>

}

/** @reactComponent */
export default function EditorTrack(properties: EditorTrackProperties,) {
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

    const track5 = properties.tracks[4]
    const track5File = track5.file
    if (track5File == null)
        throw new ReferenceError(`The track #5 of ${track5.titleName} was not expected to be null.`,)

    const track6 = properties.tracks[5]
    const track6File = track6.file
    if (track6File == null)
        throw new ReferenceError(`The track #6 of ${track6.titleName} was not expected to be null.`,)

    const track7 = properties.tracks[6]
    const track7File = track7.file
    if (track7File == null)
        throw new ReferenceError(`The track #7 of ${track7.titleName} was not expected to be null.`,)
    return <div className="editor-track-container tracks-container text-center bg-dark bg-opacity-75 rounded">
        <SubContent track1File={track1File} track1TitleName={track1.titleName}
                    track2File={track2File} track2TitleName={track2.titleName}
                    track3File={track3File} track3TitleName={track3.titleName}
                    track4File={track4File} track4TitleName={track4.titleName}
                    track5File={track5File} track5TitleName={track5.titleName}
                    track6File={track6File} track6TitleName={track6.titleName}
                    track7File={track7File} track7TitleName={track7.titleName}/>
    </div>
}


interface SubContentEditorTrackProperties
    extends ReactProperties {

    readonly track1File: SoundFile
    readonly track1TitleName: string

    readonly track2File: SoundFile
    readonly track2TitleName: string

    readonly track3File: SoundFile
    readonly track3TitleName: string

    readonly track4File: SoundFile
    readonly track4TitleName: string

    readonly track5File: SoundFile
    readonly track5TitleName: string

    readonly track6File: SoundFile
    readonly track6TitleName: string

    readonly track7File: SoundFile
    readonly track7TitleName: string

}

/** @reactComponent */
function SubContent({track1File, track1TitleName, track2File, track2TitleName, track3File, track3TitleName, track4File, track4TitleName, track5File, track5TitleName, track6File, track6TitleName, track7File, track7TitleName,}: SubContentEditorTrackProperties,) {
    const [hasExceptionCaught_track1, isLoading_track1, isPlaying_track1, currentTime_track1, setCurrentTime_track1, totalTime_track1, isMuted_track1, setMuted_track1, soundPlayer_track1,] = useSoundPlayer(track1File, track1TitleName,)
    const [hasExceptionCaught_track2, isLoading_track2, isPlaying_track2, currentTime_track2, setCurrentTime_track2, totalTime_track2, isMuted_track2, setMuted_track2, soundPlayer_track2,] = useSoundPlayer(track2File, track2TitleName,)
    const [hasExceptionCaught_track3, isLoading_track3, isPlaying_track3, currentTime_track3, setCurrentTime_track3, totalTime_track3, isMuted_track3, setMuted_track3, soundPlayer_track3,] = useSoundPlayer(track3File, track3TitleName,)
    const [hasExceptionCaught_track4, isLoading_track4, isPlaying_track4, currentTime_track4, setCurrentTime_track4, totalTime_track4, isMuted_track4, setMuted_track4, soundPlayer_track4,] = useSoundPlayer(track4File, track4TitleName,)
    const [hasExceptionCaught_track5, isLoading_track5, isPlaying_track5, currentTime_track5, setCurrentTime_track5, totalTime_track5, isMuted_track5, setMuted_track5, soundPlayer_track5,] = useSoundPlayer(track5File, track5TitleName,)
    const [hasExceptionCaught_track6, isLoading_track6, isPlaying_track6, currentTime_track6, setCurrentTime_track6, totalTime_track6, isMuted_track6, setMuted_track6, soundPlayer_track6,] = useSoundPlayer(track6File, track6TitleName,)
    const [hasExceptionCaught_track7, isLoading_track7, isPlaying_track7, currentTime_track7, setCurrentTime_track7, totalTime_track7, isMuted_track7, setMuted_track7, soundPlayer_track7,] = useSoundPlayer(track7File, track7TitleName,)
    const currentTime = isPlaying_track1 ? currentTime_track1 : isPlaying_track2 ? currentTime_track2 : isPlaying_track3 ? currentTime_track3 : isPlaying_track4 ? currentTime_track4 : isPlaying_track5 ? currentTime_track5 : isPlaying_track6 ? currentTime_track6 : currentTime_track7
    const loopingTime = track1File.repeatableTime?.second
    const totalTime = totalTime_track1 ?? totalTime_track2 ?? totalTime_track3 ?? totalTime_track4 ?? totalTime_track5 ?? totalTime_track6 ?? totalTime_track7

    if (hasExceptionCaught_track1 || hasExceptionCaught_track2 || hasExceptionCaught_track3 || hasExceptionCaught_track4 || hasExceptionCaught_track5 || hasExceptionCaught_track6 || hasExceptionCaught_track7)
        return <ExceptionIcon/>

    function pauseAction() {
        soundPlayer_track1.pause()
        soundPlayer_track2.pause()
        soundPlayer_track3.pause()
        soundPlayer_track4.pause()
        soundPlayer_track5.pause()
        soundPlayer_track6.pause()
        soundPlayer_track7.pause()
    }
    if (isLoading_track1 || isLoading_track2 || isLoading_track3 || isLoading_track4 || isLoading_track5 || isLoading_track6 || isLoading_track7)
        return <>
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
            <div className="btn-group d-block mx-1 mb-1">
                <ActionButton isDisabled={!isLoading_track1} isInactive className="px-1 py-0">1</ActionButton>
                <ActionButton isDisabled={!isLoading_track2} isInactive className="px-1 py-0">2</ActionButton>
                <ActionButton isDisabled={!isLoading_track3} isInactive className="px-1 py-0">3</ActionButton>
                <ActionButton isDisabled={!isLoading_track4} isInactive className="px-1 py-0">4</ActionButton>
                <ActionButton isDisabled={!isLoading_track5} isInactive className="px-1 py-0">5</ActionButton>
                <ActionButton isDisabled={!isLoading_track6} isInactive className="px-1 py-0">6</ActionButton>
                <ActionButton isDisabled={!isLoading_track7} isInactive className="px-1 py-0">7</ActionButton>
            </div>
        </>

    function playAction() {
        loadAllTracks(soundPlayer_track1, soundPlayer_track2, soundPlayer_track3, soundPlayer_track4, soundPlayer_track5, soundPlayer_track6, soundPlayer_track7,)
            .then(() => {
                soundPlayer_track1.play()
                soundPlayer_track2.play()
                soundPlayer_track3.play()
                soundPlayer_track4.play()
                soundPlayer_track5.play()
                soundPlayer_track6.play()
                soundPlayer_track7.play()
            },)
    }
    if (currentTime == null || totalTime == null)
        return <PlayButton action={playAction}/>

    function setCurrentTimeAction(value: number,) {
        setCurrentTime_track1(value,)
        setCurrentTime_track2(value,)
        setCurrentTime_track3(value,)
        setCurrentTime_track4(value,)
        setCurrentTime_track5(value,)
        setCurrentTime_track6(value,)
        setCurrentTime_track7(value,)
    }
    function playAction2() {
        soundPlayer_track1.play()
        soundPlayer_track2.play()
        soundPlayer_track3.play()
        soundPlayer_track4.play()
        soundPlayer_track5.play()
        soundPlayer_track6.play()
        soundPlayer_track7.play()
    }
    function stopAction() {
        soundPlayer_track1.stop()
        soundPlayer_track2.stop()
        soundPlayer_track3.stop()
        soundPlayer_track4.stop()
        soundPlayer_track5.stop()
        soundPlayer_track6.stop()
        soundPlayer_track7.stop()
    }
    function switchMuteStateOnTrack1Action() { setMuted_track1(!isMuted_track1,) }
    function switchMuteStateOnTrack2Action() { setMuted_track2(!isMuted_track2,) }
    function switchMuteStateOnTrack3Action() { setMuted_track3(!isMuted_track3,) }
    function switchMuteStateOnTrack4Action() { setMuted_track4(!isMuted_track4,) }
    function switchMuteStateOnTrack5Action() { setMuted_track5(!isMuted_track5,) }
    function switchMuteStateOnTrack6Action() { setMuted_track6(!isMuted_track6,) }
    function switchMuteStateOnTrack7Action() { setMuted_track7(!isMuted_track7,) }
    function muteAction() {
        setMuted_track1(true,)
        setMuted_track2(true,)
        setMuted_track3(true,)
        setMuted_track4(true,)
        setMuted_track5(true,)
        setMuted_track6(true,)
        setMuted_track7(true,)
    }
    function unmuteAction() {
        setMuted_track1(false,)
        setMuted_track2(false,)
        setMuted_track3(false,)
        setMuted_track4(false,)
        setMuted_track5(false,)
        setMuted_track6(false,)
        setMuted_track7(false,)
    }
    return <>
        {isPlaying_track1 || isPlaying_track2 || isPlaying_track3 || isPlaying_track4 || isPlaying_track5 || isPlaying_track6 || isPlaying_track7 ? <PauseButton action={pauseAction}/> : <PlayButton action={playAction2}/>}
        <StopButton action={stopAction}/>
        {!isMuted_track1 || !isMuted_track2 || !isMuted_track3 || !isMuted_track4 || !isMuted_track5 || !isMuted_track6 || !isMuted_track7 ? <MuteButton action={muteAction}/> : <MuteButton isMuted action={unmuteAction}/>}
        <div className="btn-group d-block mx-1 mb-1">
            <ActionButton isInactive={isMuted_track1} className="px-1 py-0" action={switchMuteStateOnTrack1Action}>1</ActionButton>
            <ActionButton isInactive={isMuted_track2} className="px-1 py-0" action={switchMuteStateOnTrack2Action}>2</ActionButton>
            <ActionButton isInactive={isMuted_track3} className="px-1 py-0" action={switchMuteStateOnTrack3Action}>3</ActionButton>
            <ActionButton isInactive={isMuted_track4} className="px-1 py-0" action={switchMuteStateOnTrack4Action}>4</ActionButton>
            <ActionButton isInactive={isMuted_track5} className="px-1 py-0" action={switchMuteStateOnTrack5Action}>5</ActionButton>
            <ActionButton isInactive={isMuted_track6} className="px-1 py-0" action={switchMuteStateOnTrack6Action}>6</ActionButton>
            <ActionButton isInactive={isMuted_track7} className="px-1 py-0" action={switchMuteStateOnTrack7Action}>7</ActionButton>
        </div>
        <SoundControls currentTime={currentTime} setCurrentTime={setCurrentTimeAction} loopingTime={loopingTime} totalTime={totalTime}/>
    </>
}
