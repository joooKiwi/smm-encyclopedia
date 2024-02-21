import {Link} from 'react-router-dom'

import Tooltip                    from 'bootstrap/tooltip/Tooltip'
import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {contentTranslation}       from 'lang/components/translationMethods'
import {routeFromName}            from 'route/route'

const HOME_ID = 'home-link'

/** @reactComponent */
export default function HomeButton() {
    return <Tooltip option={({title: contentTranslation('Home',), placement: 'left',})} elementId={HOME_ID}>
        <Link key="navigation button" id={HOME_ID} className="btn btn-lg bi-house" to={routeFromName('home',)}
              onClick={() => BootstrapInstanceHandler.get.getTooltipInstanceOrNull(HOME_ID)?.instance.hide()}/>
    </Tooltip>
}
