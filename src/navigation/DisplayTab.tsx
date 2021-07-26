import React, {PureComponent} from 'react';
import {Link}                 from 'react-router-dom';

import type {GameContentCallback} from '../lang/components/TranslationProperty';

import {Languages}                     from '../lang/Languages';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';

export default class DisplayTab
    extends PureComponent {


    private static _createLi(key: string, partialPath: string, textContentCallback: GameContentCallback,): JSX.Element {
        return <li className="dropdown-item">
            <Link key={key} className="nav-link active" to={`/${Languages.currentLanguage.projectAcronym}/${partialPath}`}>
                <GameContentTranslationComponent translationCallback={textContentCallback}/>
            </Link>
        </li>;
    }

    public render(): JSX.Element {
        return <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <ContentTranslationComponent translationCallback={translation => translation('Display')}/>…
            </span>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                {DisplayTab._createLi('navigationEveryEntities', 'every/entity', translation => translation('Display every entities'),)}
                {DisplayTab._createLi('navigationEveryCategories', 'every/category', translation => translation('Display every entity categories'),)}
                {DisplayTab._createLi('navigationEveryGameStyles', 'every/gameStyle', translation => translation('Display every game styles'),)}
                {DisplayTab._createLi('navigationEveryGroups', 'every/group', translation => translation('Display every entity groups'),)}
                {DisplayTab._createLi('navigationEveryLimit', 'every/limit', translation => translation('Display every limits'),)}
                {DisplayTab._createLi('navigationEveryTheme', 'every/theme', translation => translation('Display every themes'),)}
            </ul>
        </li>;
    }

}
