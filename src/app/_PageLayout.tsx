import './_PageLayout.scss'

import {Fragment} from 'react'
import {Outlet}   from 'react-router-dom/dist'

import {useCurrentGames}      from 'core/game/gamesHook'
import {useCurrentGameStyles} from 'core/gameStyle/gameStylesHook'
import {useCurrentTimes}      from 'core/time/timeHook'
import {useCurrentLanguage}   from 'lang/languageHook'
import Footer                 from 'navigation/Footer'
import Navigation             from 'navigation/Navigation'
import LanguageModal          from 'navigation/modal/LanguageModal'
import ParameterModal         from 'navigation/modal/ParameterModal'
import DisplayViewModal       from 'navigation/modal/DisplayViewModal'
import SearchModal            from 'navigation/modal/SearchModal'
import ColorModal             from 'navigation/modal/ColorModal'

/**
 * A component representing the basic page structure.
 * It is the first layout without any dependency toward the path being displayed.
 *
 * @reactComponent
 */
export default function PageLayout() {
    const currentLanguage = useCurrentLanguage('page layout',)
    const currentGames = useCurrentGames('page layout',)
    const currentTimes = useCurrentTimes('page layout',)
    const currentGameStyles = useCurrentGameStyles('page layout',)

    return <Fragment key={`page layout (${currentLanguage?.projectAcronym} - ${currentGames?.toString() ?? 'no games'} - ${currentTimes?.toString() ?? 'no times'} - ${currentGameStyles?.toString() ?? 'no game styles'})`}>
        <aside id="modal-container">
            <LanguageModal/>
            <ParameterModal/>
            <DisplayViewModal/>
            <SearchModal/>
            <ColorModal/>
        </aside>
        <Navigation/>
        <main id="main-container" className="container-fluid flex-grow-1 align-bottom pt-3 pb-5">
            <Outlet/>
        </main>
        <Footer/>
    </Fragment>
}
