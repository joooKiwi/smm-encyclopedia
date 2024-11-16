import {Link, useLocation} from 'react-router-dom'

import type {DisplayButtonGroupProperties, DisplayButtonProperties} from 'app/withInterpreter/DisplayButtonGroup.properties'

import {ViewDisplays}  from 'app/withInterpreter/ViewDisplays'
import {routeFromName} from 'route/route'

import Companion = ViewDisplays.Companion

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

function DisplayButton({reactKey: key, view, currentView, routeName,}: DisplayButtonProperties,) {
    const {pathname: currentPath,} = useLocation()
    const path = routeFromName(routeName,)

    if (currentPath === path || view === currentView)
        return <button key={`${key} (${view.name})`} className={`btn btn-success bi-${view.htmlType} btn-viewDisplay`} type="button" disabled/>
    return <Link key={`${key} (${view.name})`} to={path} className={`btn btn-dark bi-${view.htmlType} btn-viewDisplay`} onClick={() => Companion.current = view}/>
}
