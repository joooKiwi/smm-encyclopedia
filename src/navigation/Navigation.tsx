import {Link} from 'react-router-dom';
import React  from 'react';

import ChangeTheLanguageTab        from './ChangeTheLanguageTab';
import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import DisplayTab                  from './DisplayTab';
import {ProjectLanguages}          from '../lang/ProjectLanguages';

export default function Navigation() {
    return <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            <ContentTranslationComponent translationCallback={translation =>
                <Link key="navigationHome" className="navbar-brand" aria-current="page" to={`/${ProjectLanguages.currentLanguage.projectAcronym}/home`}>
                    {translation('Home')}
                </Link>
            }/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div id="navbar-container" className="collapse navbar-collapse">
                <ul id="left-navbar-container" className="navbar-nav me-auto mb-2 mb-lg-0">
                    <DisplayTab/>
                </ul>
                <ul id="right-navbar-container" className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <ChangeTheLanguageTab/>
                </ul>
            </div>
        </div>
    </nav>;
}
