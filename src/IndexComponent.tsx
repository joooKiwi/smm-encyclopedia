import React, {useEffect} from 'react'
import {IntlProvider}     from 'react-intl'

import {useCurrentColorTheme}  from 'color/colorThemeHook'
import {ColorThemes}           from 'color/ColorThemes'
import {useCurrentViewDisplay} from 'display/viewDisplayHook'
import {useCurrentLanguage}    from 'lang/languageHook'
import {EveryLanguages}        from 'lang/EveryLanguages'
import Routes                  from 'route/Routes'
import {PASSIVE_ONLY_OPTION}   from 'util/EventListener.options'

import ColorCompanion =    ColorThemes.Companion
import DARK_MEDIA_QUERY =  ColorThemes.DARK_MEDIA_QUERY
import LanguageCompanion = EveryLanguages.Companion

/** @reactComponent */
export default function IndexComponent() {
    const currentColor = useCurrentColorTheme('index',)
    useEffect(() => {
        const handleColorSwitch: (event: MediaQueryListEvent,) => void = () => {
            if (currentColor == null)
                return
            ColorCompanion.current = currentColor
            currentColor.updateDomElement()
        }

        DARK_MEDIA_QUERY.addEventListener('change', handleColorSwitch, PASSIVE_ONLY_OPTION,)

        return () => DARK_MEDIA_QUERY.removeEventListener('change', handleColorSwitch, PASSIVE_ONLY_OPTION,)
    }, [currentColor,],)
    const currentLanguage = useCurrentLanguage('index',)
    const currentViewDisplay = useCurrentViewDisplay('index',)

    return <IntlProvider locale={(currentLanguage ?? LanguageCompanion.defaultValue).internationalAcronym}
                         key={`React Language Provider (language=${currentLanguage?.projectAcronym ?? 'none'} color-mode=${currentColor?.colorMode ?? 'none'} view-display=${currentViewDisplay?.name ?? 'none'})`}>
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>
    </IntlProvider>
}
