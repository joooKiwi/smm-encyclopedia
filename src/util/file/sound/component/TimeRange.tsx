import type {ReactProperties} from 'util/react/ReactProperties'

interface TimeRangeProperties
    extends ReactProperties {

    readonly current: number

    readonly total: number

}

/** @reactComponent */
export default function TimeRange({current, total,}: TimeRangeProperties,) {
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
