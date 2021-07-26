import './ChangeTheLanguageTab.scss';

import React, {PureComponent} from 'react';

import {Languages}                  from '../lang/Languages';
import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';
import ContentTranslationComponent  from '../lang/components/ContentTranslationComponent';

export default class ChangeTheLanguageTab
    extends PureComponent<object, { currentLanguage: Languages }> {

    public constructor(props: object,) {
        super(props);
        this.state = {
            currentLanguage: Languages.currentLanguage,
        };
    }

    protected setCurrentLanguage(language: Languages): void {
        this.setState({currentLanguage: Languages.currentLanguage = language});
    }

    private __retrieveEveryLanguages() {
        return Languages.values.map(language => {
                return {
                    language: language,
                    htmlElement: language === Languages.currentLanguage
                        ? <span className="dropdown-item disabled">
                              <LanguageTranslationComponent translationCallback={translation => translation(language.englishName)}/>
                          </span>
                        : <button key={`languageChanger_${language.projectAcronym}`} className="dropdown-item" onClick={() => this.setCurrentLanguage(language)}>
                            <LanguageTranslationComponent translationCallback={translation => translation(language.englishName)}/>
                            <sup>({language.originalName})</sup>
                        </button>
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
