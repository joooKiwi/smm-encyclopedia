import type {ReactProperties} from 'util/react/ReactProperties'

import TimeRange   from 'util/file/sound/component/TimeRange'
import ProgressBar from 'util/file/sound/component/ProgressBar'

interface SoundControlsProperties
    extends ReactProperties {

    readonly currentTime: number

    setCurrentTime(value: number,): void

    readonly totalTime: number

}

export default function SoundControls({currentTime, setCurrentTime, totalTime,}: SoundControlsProperties,) {
    return <div className="soundControls-container pb-2">
        <TimeRange current={currentTime} total={totalTime}/>
        <ProgressBar currentTime={currentTime} setCurrentTime={setCurrentTime} totalTime={totalTime}/>
    </div>
}
