import './StopButton.scss'

import type {MouseEvent} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

interface StopButtonProperties
    extends ReactProperties {

    action(event: MouseEvent,): void

}

/** @reactComponent */
export default function StopButton({action,}: StopButtonProperties,) {
    return <button type="button" className="stop-button btn btn-lg bi-stop-fill p-0 border-0" onClick={action}/>
}
