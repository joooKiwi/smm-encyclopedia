import './PlayButton.scss'

import type {MouseEvent} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

interface PlayButtonProperties
    extends ReactProperties {

    action(event: MouseEvent,): void

}

/** @reactComponent */
export default function PlayButton({action,}: PlayButtonProperties,) {
    return <button type="button" className="play-button btn btn-lg bi-play-fill p-0 border-0" onClick={action}/>
}
