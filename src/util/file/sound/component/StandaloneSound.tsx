import './StandaloneSound.scss'

import type {SoundFile}       from 'util/file/sound/SoundFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import {useSoundPlayer} from 'util/file/sound/soundPlayerHook'
import ExceptionIcon    from 'util/file/sound/component/ExceptionIcon'
import LoadingStatus    from 'util/file/sound/component/LoadingStatus'
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
export default function StandaloneSound({file, title,}: StandaloneSoundProperties,) {
    const [hasExceptionCaught, isLoading, isPlaying, currentTime, setCurrentTime, totalTime, soundPlayer,] = useSoundPlayer(file, title,)

    if (hasExceptionCaught)
        return <div className="standalone-sound-container text-center bg-dark bg-opacity-75 rounded"><ExceptionIcon/></div>

    const pauseAction = () => soundPlayer.pause()
    if (isLoading)
        return <div className="standalone-sound-container text-center bg-dark bg-opacity-75 rounded">
            <LoadingStatus/>
            <PauseButton action={pauseAction}/>
        </div>

    const playAction = () => soundPlayer.play()
    if (currentTime == null || totalTime == null)
        return <div className="standalone-sound-container text-center bg-dark bg-opacity-75 rounded"><PlayButton action={playAction}/></div>

    //TODO add info on the top right corner
    const stopAction = () => soundPlayer.stop()
    if (isPlaying)
        return <div className="standalone-sound-container text-center bg-dark bg-opacity-75 rounded">
            <PauseButton action={pauseAction}/>
            <StopButton action={stopAction}/>
            <SoundControls currentTime={currentTime} setCurrentTime={setCurrentTime} totalTime={totalTime}/>
        </div>
    return <div className="standalone-sound-container text-center bg-dark bg-opacity-75 rounded">
        <PlayButton action={playAction}/>
        <StopButton action={stopAction}/>
        <SoundControls currentTime={currentTime} setCurrentTime={setCurrentTime} totalTime={totalTime}/>
    </div>
}
