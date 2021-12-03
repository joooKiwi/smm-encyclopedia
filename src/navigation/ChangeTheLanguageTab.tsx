import './ChangeTheLanguageTab.scss';

import {PureComponent} from 'react';

import type {ReactComponent} from '../util/react/ReactComponent';
import type {ReactState}     from '../util/react/ReactState';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import DoubleLanguageTab           from './DoubleLanguageTab';
import {EMPTY_REACT_ELEMENT}       from '../util/emptyReactVariables';
import {EveryLanguages}            from '../lang/EveryLanguages';
import {ProjectLanguages}          from '../lang/ProjectLanguages';
import SingleLanguageTab           from './SingleLanguageTab';

interface ChangeTheLanguageTabStates
    extends ReactState {

    currentLanguage: ProjectLanguages;

}

/**
 * @reactComponent
 */
export default class ChangeTheLanguageTab
    extends PureComponent<{}, ChangeTheLanguageTabStates>
    implements ReactComponent {

    public constructor(props: {},) {
        super(props);
        this.state = {
            currentLanguage: ProjectLanguages.currentLanguage,
        };
    }

    protected setCurrentLanguage(language: ProjectLanguages,): this {
        this.setState({currentLanguage: ProjectLanguages.currentLanguage = language,});
        return this;
    }

    private __retrieveEveryLanguages() {
        const everyLanguagesIncluded: EveryLanguages[] = [];

        return ProjectLanguages.values.map(language => {
            const languageFromEveryLanguage = language.language;
            if (everyLanguagesIncluded.includes(languageFromEveryLanguage.parent!))
                return EMPTY_REACT_ELEMENT;
            const childrenLanguages = languageFromEveryLanguage.children;

            everyLanguagesIncluded.push(languageFromEveryLanguage.parent ?? language.language);
            if (childrenLanguages.length === 0)
                return <SingleLanguageTab key={`single tab - ${language.englishName}`} language={language} callbackToSetLanguage={language => this.setCurrentLanguage(language)}/>;
            return <DoubleLanguageTab key={`double tab - ${languageFromEveryLanguage.englishName}`} callbackToSetLanguage={language => this.setCurrentLanguage(language)}
                                      languages={[languageFromEveryLanguage.parent!, ...childrenLanguages.map(language => ProjectLanguages.getValue(language)!) as [ProjectLanguages, ProjectLanguages,]]}/>;
        });
    }

    public render() {
        return <li key={'languageChanger'} id="languageChanger-dropdown" className="nav-item dropdown">
            <ContentTranslationComponent>{translation =>
                <span key={'languageChanger_changeTheLanguage'} id="languageChanger-navigation-button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                    {translation('Change the language')}
                </span>
            }</ContentTranslationComponent>
            <ul id="languageChanger-dropdown-menu" className="dropdown-menu" aria-labelledby="languageChanger-navigation-button">
                {this.__retrieveEveryLanguages()}
            </ul>
        </li>;
    }

}
