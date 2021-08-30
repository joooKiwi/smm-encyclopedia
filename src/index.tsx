import './index.scss';
import './lang/i18n';
import 'bootstrap/dist/js/bootstrap.esm';

import {IntlProvider}  from 'react-intl';
import React           from 'react';
import ReactDOM        from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes          from './routes/Routes';

import {EveryLanguages}   from './lang/EveryLanguages';
import {ProjectLanguages} from './lang/ProjectLanguages';

EveryLanguages.default ??= 'en_AM';
ProjectLanguages.currentLanguage ??=  'en_AM';

const currentLanguage = ProjectLanguages.currentLanguage.internationalAcronym;

ReactDOM.render(
    <IntlProvider locale={currentLanguage} key={`reactLanguageProvider_${currentLanguage}`}>
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>
    </IntlProvider>,
    document.getElementById('root'),
);

if (process.env.NODE_ENV !== 'production') {
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}
