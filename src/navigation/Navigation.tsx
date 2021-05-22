import React            from 'react';
import {Link}           from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {Languages}          from '../lang/Languages';
import ChangeTheLanguageTab from './ChangeTheLanguageTab';

export default function Navigation(): JSX.Element {
    const t_content = useTranslation('content').t;
    const t_game = useTranslation('game').t;

    return (<nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            <Link key='navigationHome' className="navbar-brand" aria-current="page" to={`/${Languages.currentLanguage.acronym}/home`}>Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div id="navbar-container" className="collapse navbar-collapse">
                <ul id="left-navbar-container" className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t_content('Display')}...</span>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li className="dropdown-item"><Link key="navigationEveryEntities" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/entity`}>{t_game('Display every entities')}</Link></li>
                            <li className="dropdown-item"><Link key="navigationEveryCategories" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/category`}>{t_game('Display every entity categories')}</Link></li>
                            <li className="dropdown-item"><Link key="navigationEveryGroups" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/group`}>{t_game('Display every entity groups')}</Link></li>
                            <li className="dropdown-item"><Link key="navigationEveryLimit" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/limit`}>{t_game('Display every limits')}</Link></li>
                            <li className="dropdown-item"><Link key="navigationEveryTheme" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/theme`}>{t_game('Display every themes')}</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul id="right-navbar-container" className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <ChangeTheLanguageTab/>
                </ul>
            </div>
        </div>
    </nav>);
}