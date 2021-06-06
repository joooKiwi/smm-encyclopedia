import './ChangeTheLanguageTab.scss';

import React             from 'react';
import {withTranslation} from 'react-i18next';
import {Link}            from 'react-router-dom';

import ContentAndLanguageTranslationComponent from '../lang/components/ContentAndLanguageTranslationComponent';
import {Languages}                            from '../lang/Languages';

class ChangeTheLanguageTab
    extends ContentAndLanguageTranslationComponent {

    private __retrieveEveryLanguages() {
        return Languages.values.map(language => {
                return {
                    language: language,
                    htmlElement: language === Languages.currentLanguage
                        ? <span className="dropdown-item disabled">{this.languageTranslation(language.englishName)}</span>
                        : <Link key={`languageChanger_${language.projectAcronym}`} className="dropdown-item"
                                to={`/${language.projectAcronym}/home`}>{this.languageTranslation(language.englishName)}<sup>({language.originalName})</sup></Link>
                };
            }
        ).map(object => <li key={`languageChanger_${object.language.projectAcronym}_li`}>{object.htmlElement}</li>);
    };

    public render() {
        return <li key={'languageChanger'} id="languageChanger-dropdown" className="nav-item dropdown d-flex">
            <span key={'languageChanger_changeTheLanguage'} id="languageChanger-navigation-button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{this.contentTranslation('Change the language')}</span>
            <ul id="languageChanger-dropdown-menu" className="dropdown-menu" aria-labelledby="languageChanger-navigation-button">
                {this.__retrieveEveryLanguages()}
            </ul>
        </li>;
    }

}

export default withTranslation(['language', 'content',])(ChangeTheLanguageTab);
