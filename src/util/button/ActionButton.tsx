import './ActionButton.scss'

import type {NullableString} from '@joookiwi/type'
import type {MouseEvent}     from 'react'

import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'
import {Empty}                            from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface ActionButtonProperties
    extends ReactPropertiesWithChildren<ReactElementOrStringOrArray> {

    readonly isDisabled?: boolean

    readonly isInactive?: boolean

    readonly className?: NullableString

    action?(event: MouseEvent,): void

}

/** @reactComponent */
export default function ActionButton({children, isDisabled = false, isInactive = false, className, action,}: ActionButtonProperties,) {
    return <button type="button" className={`action-button btn${isInactive ? ' inactive' : EMPTY_STRING}${className == null ? EMPTY_STRING : ` ${className}`}`} disabled={isDisabled} onClick={action}>{children}</button>
}
