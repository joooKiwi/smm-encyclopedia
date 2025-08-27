import './PlayButton.scss'

import type {NullableString} from '@joookiwi/type'
import type {MouseEvent}     from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface PlayButtonProperties
    extends ReactProperties {

    readonly isDisabled?: boolean

    action(event: MouseEvent,): void

    readonly className?: NullableString

}

/** @reactComponent */
export default function PlayButton({isDisabled = false, action, className,}: PlayButtonProperties,) {
    return <button type="button" disabled={isDisabled} className={`play-button btn btn-lg bi-play-fill p-0 border-0${className == null ? EMPTY_STRING : ` ${className}`}`} onClick={action}/>
}
