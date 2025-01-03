import React          from 'react'
import {IntlProvider} from 'react-intl'

import {useCurrentViewDisplay} from 'display/viewDisplayHook'
import {useCurrentLanguage}    from 'lang/languageHook'
import {EveryLanguages}        from 'lang/EveryLanguages'
import Routes                  from 'route/Routes'

import Companion = EveryLanguages.Companion

/** @reactComponent */
export default function IndexComponent() {
    const currentLanguage = useCurrentLanguage('index',)
    const currentViewDisplay = useCurrentViewDisplay('index',)

    return <IntlProvider locale={(currentLanguage ?? Companion.defaultValue).internationalAcronym}
                         key={`reactLanguageProvider (${currentLanguage?.projectAcronym} - ${currentViewDisplay ?? 'default view display'})`}>
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>
    </IntlProvider>
}
