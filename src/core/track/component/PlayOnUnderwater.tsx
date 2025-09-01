import './ButtonWithTheme.scss'

import type {MouseEvent} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import PlayButton from 'util/file/sound/component/PlayButton'
import {Themes}   from 'core/theme/Themes'
import ThemeImage from 'core/theme/component/ThemeImage'

interface PlayOnUnderwaterButtonProperties
    extends ReactProperties {

    action(event: MouseEvent,): void

}

/** @reactComponent */
export default function PlayOnUnderwaterButton({action,}: PlayOnUnderwaterButtonProperties,) {
    return <div className="playOnUnderwater-button-container buttonWithTheme-container d-inline-block position-relative z-0">
        <ThemeImage reference={Themes.UNDERWATER} isSmallPath className="position-absolute top-0 end-50 z-n1"/>
        <PlayButton action={action}/>
    </div>
}
