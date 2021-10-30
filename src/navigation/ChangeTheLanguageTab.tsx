import './ChangeTheLanguageTab.scss';

import {PureComponent} from 'react';

import type {ReactComponent} from '../util/react/ReactComponent';
import type {ReactState}     from '../util/react/ReactState';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
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

    protected setCurrentLanguage(language: ProjectLanguages,): void {
        this.setState({currentLanguage: ProjectLanguages.currentLanguage = language,});
    }

    private __retrieveEveryLanguages() {
        return ProjectLanguages.values.map(language => <SingleLanguageTab language={language} callbackToSetLanguage={language => this.setCurrentLanguage(language)}/>);
    };

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
