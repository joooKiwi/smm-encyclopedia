import type {ErrorInfo}       from 'react'
import React, {PureComponent} from 'react'
import {IntlProvider}         from 'react-intl'

import type {ReactComponent, ReactComponentWithState} from 'util/react/ReactComponent'
import type {ReactState}                              from 'util/react/ReactState'

import {useCurrentViewDisplay} from 'app/withInterpreter/viewDisplayHook'
import {useCurrentLanguage}    from 'lang/languageHook'
import {EveryLanguages}        from 'lang/EveryLanguages'
import Routes                  from 'route/Routes'

import Companion = EveryLanguages.Companion

/** @reactComponent */
function FunctionIndexComponent() {
    const currentLanguage = useCurrentLanguage('index',)
    const currentViewDisplay = useCurrentViewDisplay('index',)

    return <IntlProvider locale={(currentLanguage ?? Companion.defaultValue).internationalAcronym}
                         key={`reactLanguageProvider (${currentLanguage?.projectAcronym} - ${currentViewDisplay ?? 'default view display'})`}>
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
    extends PureComponent<{}, IndexState>
    implements ReactComponent,
        ReactComponentWithState<IndexState> {

    public constructor(props: {},) {
        super(props)
        this.state = {hasError: false,}
    }

    public static getDerivedStateFromError(error: Error,) {
        return {hasError: true,} as const satisfies Readonly<IndexState>
    }

    public override componentDidCatch(error: Error, errorInfo: ErrorInfo,): void {
        console.warn(error.message,)
        console.warn(errorInfo.componentStack,)
    }

    public override render() {
        if (this.state.hasError)
            return <h1>An error happened in the application!</h1>
        return <FunctionIndexComponent/>
    }

}
