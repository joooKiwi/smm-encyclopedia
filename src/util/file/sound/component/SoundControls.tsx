import type {NullableNumber}  from '@joookiwi/type'
import type {ReactProperties} from 'util/react/ReactProperties'

import LoopingTime from 'util/file/sound/component/LoopingTime'
import ProgressBar from 'util/file/sound/component/ProgressBar'
import TimeRange   from 'util/file/sound/component/TimeRange'

interface SoundControlsProperties
    extends ReactProperties {

    readonly currentTime: number

    setCurrentTime(value: number,): void

    readonly loopingTime: NullableNumber

    readonly totalTime: number

}

export default function SoundControls({currentTime, setCurrentTime, loopingTime, totalTime,}: SoundControlsProperties,) {
    return <div className="soundControls-container pb-2">
        <TimeRange current={currentTime} total={totalTime}/>
        <ProgressBar currentTime={currentTime} setCurrentTime={setCurrentTime} totalTime={totalTime}/>
        <LoopingTime value={loopingTime} setCurrentTime={setCurrentTime}/>
    </div>
}
