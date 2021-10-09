import React, {PureComponent} from 'react';
import {Link}                 from 'react-router-dom';

import type {GameContentCallback}            from '../lang/components/TranslationProperty';
import type {EveryPossibleRoutePartialPaths} from '../routes/everyRoutes.types';

import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {ProjectLanguages}              from '../lang/ProjectLanguages';

export default class DisplayTab
    extends PureComponent {


    private static _createLi(key: string, partialPath: EveryPossibleRoutePartialPaths, textContentCallback: GameContentCallback,): JSX.Element {
        return <GameContentTranslationComponent>{translation =>
            <li className="dropdown-item">
                <Link key={key} className="nav-link active" to={`/${ProjectLanguages.currentLanguage.projectAcronym}${partialPath}`}>
                    {textContentCallback(translation)}
                </Link>
            </li>
        }</GameContentTranslationComponent>;
    }

    public render(): JSX.Element {
        return <li className="nav-item dropdown">
            <ContentTranslationComponent>{translation =>
                <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {translation('Display')}…
                </span>
            }</ContentTranslationComponent>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                {DisplayTab._createLi('navigationEveryEntities', '/every/entity', translation => translation('Display every entities'),)}
                {DisplayTab._createLi('navigationEveryCategories', '/every/category', translation => translation('Display every entity categories'),)}
                {DisplayTab._createLi('navigationEveryGameStyles', '/every/gameStyle', translation => translation('Display every game styles'),)}
                {DisplayTab._createLi('navigationEveryGroups', '/every/group', translation => translation('Display every entity groups'),)}
                {DisplayTab._createLi('navigationEveryLimit', '/every/limit', translation => translation('Display every limits'),)}
                {DisplayTab._createLi('navigationEveryTheme', '/every/theme', translation => translation('Display every themes'),)}
            </ul>
        </li>;
    }

}
