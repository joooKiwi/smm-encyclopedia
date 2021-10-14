import type {TFunction}    from 'react-i18next';
import {Link, useLocation} from 'react-router-dom';
import {route}             from '../routes/route';

import type {EveryPossibleRouteNames} from '../routes/everyRoutes.types';
import type {GameContentCallback}     from '../lang/components/TranslationProperty';
import type {ReactProperty}           from '../util/react/ReactProperty';

import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';

interface SingleDisplayTabProperty
    extends ReactProperty {

    routeName: EveryPossibleRouteNames

    callback: GameContentCallback

}

/**
 * @reactComponent
 */
export function SingleDisplayTab({routeName, callback,}: SingleDisplayTabProperty,) {
    const {pathname: pathName,} = useLocation();

    return <GameContentTranslationComponent>{translation =>
        <li className="dropdown-item">
            {linkOrReadonlyText(route(routeName), pathName, routeName, callback, translation,)}
        </li>
    }</GameContentTranslationComponent>;

}

function linkOrReadonlyText(route: string, pathName: string, routeName: EveryPossibleRouteNames, callback: GameContentCallback, translation: TFunction<'gameContent'>,) {
    const content = callback(translation);

    return route === pathName
        ? <span className="nav-link disabled">{content}</span>
        : <Link key={`navigation - ${routeName}`} className="nav-link active" to={route}>
            {content}
        </Link>;
}
