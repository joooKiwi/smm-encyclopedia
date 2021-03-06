import React, {type ErrorInfo, PureComponent, useState} from 'react';
import {IntlProvider}                                   from 'react-intl';

import type {PossibleInternationalAcronym} from './lang/ProjectLanguages.types';
import type {ReactState}                   from './util/react/ReactState';

import {EveryLanguages}   from './lang/EveryLanguages';
import {ProjectLanguages} from './lang/ProjectLanguages';
import Routes             from './routes/Routes';

/**
 *
 * @reactComponent
 */
function FunctionIndexComponent() {
    const [currentLanguage, setCurrentLanguage,] = useState(setAndGetCurrentLanguage());
    EveryLanguages.INTERNATIONALISATION_SET_CURRENT_LANGUAGE = setCurrentLanguage;

    return <IntlProvider locale={currentLanguage} key={`reactLanguageProvider_${currentLanguage}`}>
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>
    </IntlProvider>;
}

function setAndGetCurrentLanguage(): PossibleInternationalAcronym {
    ProjectLanguages.currentLanguage ??= 'en-AM';
    return ProjectLanguages.currentLanguage.internationalAcronym;
}

interface IndexState
    extends ReactState {

    hasError: boolean

}

export default class IndexComponent
    extends PureComponent<{}, IndexState> {

    public constructor(props: {},) {
        super(props);
        this.state = {hasError: false,};
    }

    public static getDerivedStateFromError(error: Error,) {
        return {hasError: true,};
    }

    public override componentDidCatch(error: Error, errorInfo: ErrorInfo,): void {
        console.warn(error.message);
        console.warn(errorInfo.componentStack);
    }

    public override render() {
        if (this.state.hasError)
            return <h1>An error happened in the application!</h1>;
        return <FunctionIndexComponent/>;
    }

}
