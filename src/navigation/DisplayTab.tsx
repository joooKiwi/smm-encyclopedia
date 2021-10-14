import {PureComponent} from 'react';
import {Link}          from 'react-router-dom';

import type {EveryPossibleRoutes} from '../routes/everyRoutes.types';
import type {GameContentCallback} from '../lang/components/TranslationProperty';
import type {ReactComponent}      from '../util/react/ReactComponent';

import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {route}                         from '../routes/route';

/**
 * @reactComponent
 */
export default class DisplayTab
    extends PureComponent
    implements ReactComponent {


    private static _createLi(key: string, route: EveryPossibleRoutes, textContentCallback: GameContentCallback,): JSX.Element {
        return <GameContentTranslationComponent>{translation =>
            <li className="dropdown-item">
                <Link key={key} className="nav-link active" to={route}>
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
                {DisplayTab._createLi('navigationEveryEntities', route('everyEntities'), translation => translation('Display every entities'),)}
                {DisplayTab._createLi('navigationEveryCategories', route('everyCategories'), translation => translation('Display every entity categories'),)}
                {DisplayTab._createLi('navigationEveryGameStyles', route('everyGameStyles'), translation => translation('Display every game styles'),)}
                {DisplayTab._createLi('navigationEveryGroups', route('everyGroups'), translation => translation('Display every entity groups'),)}
                {DisplayTab._createLi('navigationEveryLimit', route('everyLimits'), translation => translation('Display every limits'),)}
                {DisplayTab._createLi('navigationEveryTheme', route('everyThemes'), translation => translation('Display every themes'),)}
            </ul>
        </li>;
    }

}
