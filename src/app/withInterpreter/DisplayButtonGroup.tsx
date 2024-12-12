import type {Array}        from '@joookiwi/type'
import {Link, useLocation} from 'react-router-dom'

import type {ViewAndRouteName}   from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}    from 'util/react/ReactProperties'
import type {PossibleRouteName}  from 'route/EveryRoutes.types'

import {ViewDisplays}  from 'app/withInterpreter/ViewDisplays'
import {routeFromName} from 'route/method/route.fromName'

import Companion = ViewDisplays.Companion

interface DisplayButtonGroupProperties
    extends ReactProperties {

    /** The React key (applicable to both "button group" & button) */
    readonly reactKey: string

    /** The views applicable to the button group (with its own route name) */
    readonly views: Array<ViewAndRouteName>

    /** The current type used for the group (if the route is the default one) */
    readonly currentView: ViewDisplays

}

/**
 * Create a button to be used in a "button group" for displaying a specific "view display".
 *
 * @reactComponent
 */
export default function DisplayButtonGroup({reactKey: key, views, currentView,}: DisplayButtonGroupProperties,) {
    return <div key={`${key} (button group container)`} id="btn-viewDisplay-container" className="btn-group">{views.map(([view, name,]) =>
        <DisplayButton key={`${key} (button group content - ${view})`} reactKey={key} view={view} routeName={name} currentView={currentView}/>
    )}</div>
}


interface DisplayButtonProperties
    extends ReactProperties {

    /** The React key */
    readonly reactKey: string

    /** The views on the button */
    readonly view: ViewDisplays

    /** The current view displayed (if the route is the default one) */
    readonly currentView: ViewDisplays

    /** The route path on the button */
    readonly routeName: PossibleRouteName

}

/** @reactComponent */
function DisplayButton({reactKey: key, view, currentView, routeName,}: DisplayButtonProperties,) {
    const {pathname: currentPath,} = useLocation()
    const path = routeFromName(routeName,)

    if (currentPath === path || view === currentView)
        return <button key={`${key} (${view.name})`} className={`btn btn-success bi-${view.htmlType} btn-viewDisplay`} type="button" disabled/>
    return <Link key={`${key} (${view.name})`} to={path} className={`btn btn-dark bi-${view.htmlType} btn-viewDisplay`} onClick={() => Companion.current = view}/>
}
