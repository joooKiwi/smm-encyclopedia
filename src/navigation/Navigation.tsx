import React  from 'react';
import {Link} from 'react-router-dom';

import ChangeTheLanguageTab              from './ChangeTheLanguageTab';
import DisplayTab                        from './DisplayTab';
import {Languages}                       from '../lang/Languages';
import {withTranslation}                 from 'react-i18next';
import {ComponentWithContentTranslation} from '../lang/components/ComponentWithContentTranslation';

class Navigation
    extends ComponentWithContentTranslation {


    public render(): JSX.Element {
        return (<nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link key='navigationHome' className="navbar-brand" aria-current="page" to={`/${Languages.currentLanguage.acronym}/home`}>{this.translation('Home')}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
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
        </nav>);
    }

}

export default withTranslation('content')(Navigation);