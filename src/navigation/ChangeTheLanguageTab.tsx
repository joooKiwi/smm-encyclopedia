import './ChangeTheLanguageTab.scss';

import React, {PureComponent} from 'react';

import type {ReactState} from '../util/react/ReactState';

import ContentTranslationComponent  from '../lang/components/ContentTranslationComponent';
import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';
import {ProjectLanguages}           from '../lang/ProjectLanguages';
import {LanguageChangerTab}         from './LanguageChangerTab';

interface ChangeTheLanguageTabStates
    extends ReactState {

    currentLanguage: ProjectLanguages

}

export default class ChangeTheLanguageTab
    extends PureComponent<{}, ChangeTheLanguageTabStates> {

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
                        ? <LanguageTranslationComponent>{translation =>
                            <span className="dropdown-item disabled">
                                  {translation(language.englishName)}
                              </span>
                        }</LanguageTranslationComponent>
                        : <LanguageChangerTab language={language} callbackToSetLanguage={language => this.setCurrentLanguage(language)}/>
                };
            }
        ).map(object => <li key={`languageChanger_${object.language.projectAcronym}_li`}>{object.htmlElement}</li>);
    };

    public render() {
        return <li key={'languageChanger'} id="languageChanger-dropdown" className="nav-item dropdown d-flex">
            <ContentTranslationComponent>{translation =>
                <span key={'languageChanger_changeTheLanguage'} id="languageChanger-navigation-button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {translation('Change the language')}
                </span>
            }</ContentTranslationComponent>
            <ul id="languageChanger-dropdown-menu" className="dropdown-menu" aria-labelledby="languageChanger-navigation-button">
                {this.__retrieveEveryLanguages()}
            </ul>
        </li>;
    }

}
