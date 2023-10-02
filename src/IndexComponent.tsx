import React, {type ErrorInfo, PureComponent, useState} from 'react'
import {IntlProvider}                                   from 'react-intl'

import type {ReactState} from 'util/react/ReactState'

import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import {EveryLanguages}   from 'lang/EveryLanguages'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import Routes             from 'route/Routes'

/** @reactComponent */
function FunctionIndexComponent() {
    const [viewDisplayName, setViewDisplay,] = useState(ViewDisplays.currentOrNull),
        [currentLanguage, setCurrentLanguage,] = useState(ProjectLanguages.currentOrNull?.language ?? null)
    ProjectLanguages.onSetCurrentEvent = setCurrentLanguage
    ViewDisplays.setCurrentEvent = setViewDisplay

    return <IntlProvider locale={(currentLanguage ?? EveryLanguages.defaultValue).internationalAcronym}
                         key={`reactLanguageProvider (${currentLanguage} - ${viewDisplayName ?? 'default view display'})`}>
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>
    </IntlProvider>
}

interface IndexState
    extends ReactState {

    hasError: boolean

}

export default class IndexComponent
    extends PureComponent<{}, IndexState> {

    public constructor(props: {},) {
        super(props)
        this.state = {hasError: false,}
    }

    public static getDerivedStateFromError(error: Error,) {
        return {hasError: true,}
    }

    public override componentDidCatch(error: Error, errorInfo: ErrorInfo,): void {
        console.warn(error.message)
        console.warn(errorInfo.componentStack)
    }

    public override render() {
        if (this.state.hasError)
            return <h1>An error happened in the application!</h1>
        return <FunctionIndexComponent/>
    }

}
