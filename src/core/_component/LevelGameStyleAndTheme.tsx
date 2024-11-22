import './LevelGameStyleAndTheme.scss'

import type {Nullable}     from '@joookiwi/type'

import type {GameStyles}   from 'core/gameStyle/GameStyles'
import type {Themes}       from 'core/theme/Themes'

import ThemeImage     from 'core/theme/ThemeImage'
import GameStyleImage from 'core/gameStyle/GameStyleImage'

interface LevelGameStyleAndThemeProperties {

    readonly gameStyle: GameStyles

    readonly mainArea: Themes

    readonly subArea: Nullable<Themes>

    /** The visual will be represented in 1 (<b>false</b>) or 2 lines (<b>true</b>) */
    readonly in2Line?: boolean

}

/** @reactComponent */
export default function LevelGameStyleAndTheme({gameStyle, mainArea, subArea, in2Line,}:LevelGameStyleAndThemeProperties,) {
    if (!in2Line)
        return <div className="levelGameAndGameStyle-container levelGameAndGameStyle-in1Line-container d-flex justify-content-between text-end">
            <ThemeImage reference={mainArea} isSmallPath className="me-1"/>
            <ThemeImage reference={subArea} isSmallPath className="me-1"/>
            <GameStyleImage reference={gameStyle}/>
        </div>
    if (subArea == null)
        return <div className="levelGameAndGameStyle-container levelGameAndGameStyle-in2Line-container d-flex flex-column align-items-start">
            <GameStyleImage reference={gameStyle} className="mb-1"/>
            <ThemeImage reference={mainArea} isSmallPath/>
        </div>
    return <div className="levelGameAndGameStyle-container levelGameAndGameStyle-in2Line-container d-flex flex-column align-items-center">
        <GameStyleImage reference={gameStyle} className="mb-1"/>
        <div className="d-flex">
            <ThemeImage reference={mainArea} isSmallPath className="me-1"/>
            <ThemeImage reference={subArea} isSmallPath/>
        </div>
    </div>
}
