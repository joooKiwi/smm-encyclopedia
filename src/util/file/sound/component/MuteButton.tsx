import './MuteButton.scss'

import type {NullableString} from '@joookiwi/type'
import type {MouseEvent}     from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface MuteButtonProperties
    extends ReactProperties {

    readonly isMuted?: boolean

    action(isMuted: boolean, event: MouseEvent,): void

    readonly className?: NullableString

}

export default function MuteButton({isMuted = false, className, action,}: MuteButtonProperties,) {
    if (isMuted)
        return <button type="button" className={`mute-button btn bi-volume-mute p-0 border-0${className == null ? EMPTY_STRING : ` ${className}`}`} onClick={it => action(false, it,)}/>
    return <button type="button" className={`mute-button btn bi-volume-up p-0 border-0${className == null ? EMPTY_STRING : ` ${className}`}`} onClick={it => action(true, it,)}/>
}
