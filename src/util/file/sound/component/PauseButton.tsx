import './PauseButton.scss'

import type {MouseEvent} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

interface PauseButtonProperties
    extends ReactProperties {

    action(event: MouseEvent,): void

}

/** @reactComponent */
export default function PauseButton({action,}: PauseButtonProperties,) {
    return <button type="button" className="pause-button btn btn-lg bi-pause-fill p-0 border-0" onClick={action}/>
}
