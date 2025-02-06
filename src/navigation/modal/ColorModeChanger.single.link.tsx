import {Link, useLocation} from 'react-router'

import {ColorThemes}        from 'color/ColorThemes'
import {contentTranslation} from 'lang/components/translationMethods'
import {routeFromLocation}  from 'route/method/route.fromLocation'
import {ReactProperties}    from 'util/react/ReactProperties'

interface ColorModeChangerSingleLinkProperties
    extends ReactProperties {

    readonly color: ColorThemes

    changeColor(color: ColorThemes,): void

}

/** @reactComponent */
export default function ColorModeChangerSingleLink({color, changeColor,}: ColorModeChangerSingleLinkProperties,) {
    const location = useLocation()
    const id = `single-colorModeChanger-${color.colorMode}`

    if (color.isCurrent)
        return <button id={id} className="btn btn-lg btn-outline-primary active">{contentTranslation(`color mode.${color.colorMode}`,)}</button>
    return <Link id={id} to={routeFromLocation(location, null, color,)} className="btn btn-outline-primary"
                 onClick={() => changeColor(color,)}>{contentTranslation(`color mode.${color.colorMode}`,)}</Link>

}
