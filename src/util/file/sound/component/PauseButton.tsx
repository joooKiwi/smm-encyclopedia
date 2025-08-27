import './PauseButton.scss'

import type {NullableString} from '@joookiwi/type'
import type {MouseEvent}     from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface PauseButtonProperties
    extends ReactProperties {

    readonly isDisabled?: boolean

    action(event: MouseEvent,): void

    readonly className?: NullableString

}

/** @reactComponent */
export default function PauseButton({isDisabled = false, action, className,}: PauseButtonProperties,) {
    return <button type="button" disabled={isDisabled} className={`pause-button btn btn-lg bi-pause-fill p-0 border-0${className == null ? EMPTY_STRING : ` ${className}`}`} onClick={action}/>
}
