import './LanguageChanger.scss';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {__, Languages} from "../lang/Languages";

export default class LanguageChanger
    extends Component {


    private __retrieveEveryLanguages() {
        return Languages.values.map(language => {
                return {
                    language: language,
                    htmlElement: language === Languages.currentLanguage
                        ? <span className="dropdown-item disabled">{__(language.englishName)}</span>
                        : <Link key={`languageChanger_${language.acronym}`} className="dropdown-item" to={`/${language.acronym}/home`}>{__(language.englishName)}<sup>({language.originalName})</sup></Link>
                }
            }
        ).map(object => <li key={`languageChanger_${object.language.acronym}_li`}>{object.htmlElement}</li>);
    };

    public render() {
        return <li key={'languageChanger'} id="languageChanger-dropdown" className="nav-item dropdown d-flex">
            <span key={'languageChanger_changeTheLanguage'} id="languageChanger-navigation-button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{__('Change the language')}</span>
            <ul id="languageChanger-dropdown-menu" className="dropdown-menu" aria-labelledby="languageChanger-navigation-button">
                {this.__retrieveEveryLanguages()}
            </ul>
        </li>
    }

}
