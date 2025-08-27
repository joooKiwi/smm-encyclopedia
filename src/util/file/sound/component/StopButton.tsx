import './StopButton.scss'

import type {NullableString} from '@joookiwi/type'
import type {MouseEvent}     from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface StopButtonProperties
    extends ReactProperties {

    readonly isDisabled?: boolean

    action(event: MouseEvent,): void

    readonly className?: NullableString

}

/** @reactComponent */
export default function StopButton({isDisabled = false, action, className,}: StopButtonProperties,) {
    return <button type="button" disabled={isDisabled} className={`stop-button btn btn-lg bi-stop-fill p-0 border-0${className == null ? EMPTY_STRING : ` ${className}`}`} onClick={action}/>
}
