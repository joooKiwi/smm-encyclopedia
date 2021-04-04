import React, {Component} from "react";
import {Link} from "react-router-dom";
import {__, Languages} from "../lang/Languages";

export default class LanguageChanger
    extends Component {

    private __retrieveEveryLanguages() {
        return Languages.values.map(language => language === Languages.currentLanguage
            ? <span className="dropdown-item disabled">{__(language.englishName)}</span>
            : <Link key={`languageChanger_${language.acronym}`} className="dropdown-item" to={`/${language.acronym}/home`}>{__(language.englishName)}<sup>({language.originalName})</sup></Link>
        ).map(htmlElement=><li>{htmlElement}</li>);
    };

    public render() {
        return <li key={'languageChanger'} className="nav-item dropdown d-flex">
            <span key={'languageChanger_changeTheLanguage'} id="languageChanger" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{__('Change the language')}</span>
            <ul className="dropdown-menu" aria-labelledby="languageChanger">
                {this.__retrieveEveryLanguages()}
            </ul>
        </li>
    }

}
