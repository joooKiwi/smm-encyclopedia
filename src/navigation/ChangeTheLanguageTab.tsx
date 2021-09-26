import React, {PureComponent} from 'react';

import ContentTranslationComponent  from '../lang/components/ContentTranslationComponent';
import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';
import {ProjectLanguages}           from '../lang/ProjectLanguages';
import {LanguageChangerTab}         from './LanguageChangerTab';

export default class ChangeTheLanguageTab
    extends PureComponent<{}, { currentLanguage: ProjectLanguages }> {

    public constructor(props: {},) {
        super(props);
        this.state = {
            currentLanguage: ProjectLanguages.currentLanguage,
        };
    }

    protected setCurrentLanguage(language: ProjectLanguages,): void {
        this.setState({currentLanguage: ProjectLanguages.currentLanguage = language,});
    }

    private __retrieveEveryLanguages() {
        return ProjectLanguages.values.map(language => {
                return {
                    language: language,
                    htmlElement: language === ProjectLanguages.currentLanguage
                        ? <span className="dropdown-item disabled">
                              <LanguageTranslationComponent translationCallback={translation => translation(language.englishName)}/>
                          </span>
                        : <LanguageChangerTab language={language} callbackToSetLanguage={language => this.setCurrentLanguage(language)}/>
                };
            }
        ).map(object => <li key={`languageChanger_${object.language.projectAcronym}_li`}>{object.htmlElement}</li>);
    };

    public render() {
        return <li key={'languageChanger'} id="languageChanger-dropdown" className="nav-item dropdown d-flex">
            <span key={'languageChanger_changeTheLanguage'} id="languageChanger-navigation-button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <ContentTranslationComponent translationCallback={translation => translation('Change the language')}/>
            </span>
            <ul id="languageChanger-dropdown-menu" className="dropdown-menu" aria-labelledby="languageChanger-navigation-button">
                {this.__retrieveEveryLanguages()}
            </ul>
        </li>;
    }

}
