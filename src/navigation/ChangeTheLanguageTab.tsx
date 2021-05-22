import './LanguageChanger.scss';

import React, {Component}                     from 'react';
import {TFuncKey, TFunction, withTranslation} from 'react-i18next';
import {Link}                                 from 'react-router-dom';

import {Languages}       from '../lang/Languages';

class ChangeTheLanguageTab
    extends Component<{ t: TFunction<'language' | 'content'> }> {

    private languageTranslation<TKeys extends TFuncKey<'language'>>(value: TKeys) {
        return this.props.t(value);
    }

    private contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    private __retrieveEveryLanguages() {
        return Languages.values.map(language => {
                return {
                    language: language,
                    htmlElement: language === Languages.currentLanguage
                        ? <span className="dropdown-item disabled">{this.languageTranslation(language.englishName)}</span>
                        : <Link key={`languageChanger_${language.acronym}`} className="dropdown-item" to={`/${language.acronym}/home`}>{this.languageTranslation(language.englishName)}<sup>({language.originalName})</sup></Link>
                };
            }
        ).map(object => <li key={`languageChanger_${object.language.acronym}_li`}>{object.htmlElement}</li>);
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

export default withTranslation(['language', 'content'])(ChangeTheLanguageTab);