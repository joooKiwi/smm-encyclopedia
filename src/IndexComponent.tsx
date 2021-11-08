import React, {useState} from 'react';
import {IntlProvider}    from 'react-intl';

import type {PossibleProjectLanguagesInternationalAcronym} from './lang/EveryLanguages.types';

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

function setAndGetCurrentLanguage(): PossibleProjectLanguagesInternationalAcronym {
    ProjectLanguages.currentLanguage ??= 'en_AM';
    return ProjectLanguages.currentLanguage.internationalAcronym;
}

export default class IndexComponent
    extends React.PureComponent<{}, { hasError: boolean, }> {

    public constructor(props: {},) {
        super(props);
        this.state = {hasError: false,};
    }

    public static getDerivedStateFromError(error: Error,) {
        return {hasError: true,};
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo,): void {
        console.warn(error.message);
        console.warn(errorInfo.componentStack);
    }

    public render() {
        if (this.state.hasError)
            return <h1>An error happened in the application!</h1>;
        return <FunctionIndexComponent/>;
    }

}