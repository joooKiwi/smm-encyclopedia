import './ButtonWithTheme.scss'

import type {MouseEvent} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import PauseButton from 'util/file/sound/component/PauseButton'
import {Themes}   from 'core/theme/Themes'
import ThemeImage from 'core/theme/component/ThemeImage'

interface PauseOnUnderwaterButtonProperties
    extends ReactProperties {

    action(event: MouseEvent,): void

}

/** @reactComponent */
export default function PauseOnUnderwaterButton({action,}: PauseOnUnderwaterButtonProperties,) {
    return <div className="pauseOnUnderwater-button-container buttonWithTheme-container d-inline-block position-relative z-0">
        <ThemeImage reference={Themes.UNDERWATER} isSmallPath className="position-absolute top-0 end-50 z-n1"/>
        <PauseButton action={action}/>
    </div>
}
