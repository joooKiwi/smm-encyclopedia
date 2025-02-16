import {Link, useLocation} from 'react-router'

import type {PossibleRouteName} from 'route/EveryRoutes.types'
import type {ReactProperties}   from 'util/react/ReactProperties'

import {ViewDisplays}  from 'display/ViewDisplays'
import {routeFromName} from 'route/method/route.fromName'

import Companion = ViewDisplays.Companion

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD, TABLE,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

interface DisplayButtonGroupProperties
    extends ReactProperties {

    /** The route name that is displayed for the {@link ViewDisplays.LIST} */
    readonly list: PossibleRouteName

    /** The route name that is displayed for the {@link ViewDisplays.CARD} */
    readonly card: PossibleRouteName

    /** The route name that is displayed for the {@link ViewDisplays.TABLE} */
    readonly table: PossibleRouteName

    /** The current type used for the group (if the route is the default one) */
    readonly current: ViewDisplays

}

/**
 * Create a button group with all the {@link ViewDisplays} button to switch between the views
 *
 * @reactComponent
 */
export default function DisplayButtonGroup({list, card, table, current,}: DisplayButtonGroupProperties,) {
    return <div className="btn-viewDisplay-container btn-group d-flex justify-content-end">
        <DisplayListButton routeName={list} currentView={current}/>
        <DisplayCardButton routeName={card} currentView={current}/>
        <DisplayTableButton routeName={table} currentView={current}/>
    </div>
}


interface DisplayButtonProperties
    extends ReactProperties {

    /** The current view displayed (if the route is the default one) */
    readonly currentView: ViewDisplays

    /** The route path on the button */
    readonly routeName: PossibleRouteName

}

/** @reactComponent */
function DisplayListButton({currentView, routeName,}: DisplayButtonProperties,) {
    const {pathname: currentPath,} = useLocation()
    const path = routeFromName(routeName,)

    if (currentPath === path || currentView === LIST)
        return <button className={`btn btn-success bi-${LIST.icon} btn-viewDisplay`} type="button" disabled/>
    return <Link to={path} className={`btn btn-dark bi-${LIST.icon} btn-viewDisplay`} onClick={() => Companion.current = LIST}/>
}

/** @reactComponent */
function DisplayCardButton({currentView, routeName,}: DisplayButtonProperties,) {
    const {pathname: currentPath,} = useLocation()
    const path = routeFromName(routeName,)

    if (currentPath === path || currentView === CARD)
        return <button className={`btn btn-success bi-${CARD.icon} btn-viewDisplay`} type="button" disabled/>
    return <Link to={path} className={`btn btn-dark bi-${CARD.icon} btn-viewDisplay`} onClick={() => Companion.current = CARD}/>
}

/** @reactComponent */
function DisplayTableButton({currentView, routeName,}: DisplayButtonProperties,) {
    const {pathname: currentPath,} = useLocation()
    const path = routeFromName(routeName,)

    if (currentPath === path || currentView === TABLE)
        return <button className={`btn btn-success bi-${TABLE.icon} btn-viewDisplay`} type="button" disabled/>
    return <Link to={path} className={`btn btn-dark bi-${TABLE.icon} btn-viewDisplay`} onClick={() => Companion.current = TABLE}/>
}
