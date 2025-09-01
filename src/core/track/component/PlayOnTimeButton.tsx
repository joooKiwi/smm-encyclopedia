import './ButtonWithTime.scss'

import type {MouseEvent} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Times}    from 'core/time/Times'
import PlayButton from 'util/file/sound/component/PlayButton'
import TimeImage  from 'core/time/component/TimeImage'

interface PlayOnTimeButtonProperties
    extends ReactProperties {

    readonly time: Times

    action(event: MouseEvent,): void

}

/** @reactComponent */
export default function PlayOnTimeButton({time, action,}: PlayOnTimeButtonProperties,) {
    return <div className="playOnTime-button-container buttonWithTime-container d-inline-block position-relative z-0">
        <TimeImage reference={time} className="position-absolute top-0 end-50 z-n1"/>
        <PlayButton action={action}/>
    </div>
}
