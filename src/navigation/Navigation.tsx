import React, {Component}                     from 'react';
import {Link}                                 from 'react-router-dom';
import {TFuncKey, TFunction, withTranslation} from 'react-i18next';

import {Languages}          from '../lang/Languages';
import ChangeTheLanguageTab from './ChangeTheLanguageTab';

class Navigation
    extends Component<{ t: TFunction<'content' | 'game'> }> {


    private contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return this.props.t(value, {ns: 'content'});
    }

    private gameTranslation<TKeys extends TFuncKey<'game'>>(value: TKeys) {
        return this.props.t(value);
    }

    private static _createLi(key: string, partialPath: string, textContent: string) {
        return <li className="dropdown-item">
            <Link key={key} className="nav-link active" to={`/${Languages.currentLanguage.acronym}/${partialPath}`}>{textContent}</Link>
        </li>;
    }


    public render(): JSX.Element {
        return (<nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link key='navigationHome' className="navbar-brand" aria-current="page" to={`/${Languages.currentLanguage.acronym}/home`}>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div id="navbar-container" className="collapse navbar-collapse">
                    <ul id="left-navbar-container" className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{this.contentTranslation('Display')}…</span>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                {Navigation._createLi('navigationEveryEntities', 'every/entity', this.gameTranslation('Display every entities'))}
                                {Navigation._createLi('navigationEveryCategories', 'every/category', this.gameTranslation('Display every entity categories'))}
                                {Navigation._createLi('navigationEveryGroups', 'every/group', this.gameTranslation('Display every entity groups'))}
                                {Navigation._createLi('navigationEveryLimit', 'every/limit', this.gameTranslation('Display every limits'))}
                                {Navigation._createLi('navigationEveryTheme', 'every/theme', this.gameTranslation('Display every themes'))}
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

}

export default withTranslation(['game', 'content',])(Navigation);