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
export default function IndexComponent() {
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
