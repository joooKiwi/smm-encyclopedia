import './LoopingTime.scss'

import type {NullableNumber}  from '@joookiwi/type'

import type {ReactProperties} from 'util/react/ReactProperties'

interface LoopingTimeProperties
    extends ReactProperties {

    value: NullableNumber

    setCurrentTime(value: number,): void

}

export default function LoopingTime({value, setCurrentTime,}: LoopingTimeProperties,) {
    if (value == null)
        return null

    const minute = Math.floor(value / 60,)
    const second = (value % 60).toFixed(1,)
    return <button className="loopingTime-button btn btn-sm btn-outline-light border-top-0 rounded-top-0 px-1 pt-0" onClick={() => setCurrentTime(value,)}>
        {minute === 0
            ? <small>{second}</small>
            : Number(second,) < 10
                ? <small>{minute}:0{second}</small>
                : <small>{minute}:{second}</small>}
    </button>
}
