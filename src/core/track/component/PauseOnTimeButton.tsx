import './ButtonWithTime.scss'

import type {MouseEvent} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Times}     from 'core/time/Times'
import PauseButton from 'util/file/sound/component/PauseButton'
import TimeImage   from 'core/time/component/TimeImage'

interface PauseOnTimeButtonProperties
    extends ReactProperties {

    readonly time: Times

    action(event: MouseEvent,): void

}

/** @reactComponent */
export default function PauseOnTimeButton({time, action,}: PauseOnTimeButtonProperties,) {
    return <div className="pauseOnTime-button-container buttonWithTime-container d-inline-block position-relative z-0">
        <TimeImage reference={time} className="position-absolute top-0 end-50 z-n1"/>
        <PauseButton action={action}/>
    </div>
}
