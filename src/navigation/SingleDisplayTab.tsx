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
export default function SingleDisplayTab({routeName, callback,}: SingleDisplayTabProperty,) {
    const {pathname: pathName,} = useLocation();

    const key = `navigation - ${routeName}`;
    const routeFromTab = route(routeName);
    const isRouteSameFromPathName = routeFromTab === pathName;

    return <GameContentTranslationComponent>{translation =>
        isRouteSameFromPathName
            ? <li key={key} className="dropdown-item disabled"><span className="nav-link disabled">{callback(translation)}</span></li>
            : <li key={key} className="dropdown-item"><Link className="nav-link active" to={routeFromTab}>{callback(translation)}</Link></li>
    }</GameContentTranslationComponent>;

}

