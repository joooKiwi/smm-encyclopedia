import './StandaloneSound.scss'

import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import {useSoundPlayer} from 'util/file/sound/soundPlayerHook'
import ExceptionIcon    from 'util/file/sound/component/ExceptionIcon'
import LoadingStatus    from 'util/file/sound/component/LoadingStatus'
import MuteButton       from 'util/file/sound/component/MuteButton'
import PauseButton      from 'util/file/sound/component/PauseButton'
import PlayButton       from 'util/file/sound/component/PlayButton'
import SoundControls    from 'util/file/sound/component/SoundControls'
import StopButton       from 'util/file/sound/component/StopButton'

interface StandaloneSoundProperties
    extends ReactProperties {

    /** The file of the audio element */
    readonly file: SoundFile

    /** The title of the audio element */
    readonly title: string

}

/**
 * @todo load the same sound file at the position that is if it was already loaded on play
 * @reactComponent
 */
export default function StandaloneSound(properties: StandaloneSoundProperties,) {
    return <div className="standalone-sound-container text-center bg-dark bg-opacity-75 rounded">
        <SubContent file={properties.file} title={properties.title}/>
    </div>
}

/** @reactComponent */
function SubContent({file, title,}: StandaloneSoundProperties,) {
    const [hasExceptionCaught, isLoading, isPlaying, currentTime, setCurrentTime, totalTime, isMuted, setMuted, soundPlayer,] = useSoundPlayer(file, title,)
    const loopingTime = file.repeatableTime?.second

    if (hasExceptionCaught)
        return <ExceptionIcon/>

    const pauseAction = () => soundPlayer.pause()
    if (isLoading)
        return <>
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
        </>

    const playAction = () => soundPlayer.play()
    if (currentTime == null || totalTime == null)
        return <PlayButton action={playAction}/>

    //TODO add info on the top right corner
    const stopAction = () => soundPlayer.stop()
    return <>
        {isPlaying ? <PauseButton action={pauseAction}/> : <PlayButton action={playAction}/>}
        <StopButton action={stopAction}/>
        <MuteButton isMuted={isMuted} action={setMuted}/>
        <SoundControls currentTime={currentTime} setCurrentTime={setCurrentTime} loopingTime={loopingTime} totalTime={totalTime}/>
    </>
}
