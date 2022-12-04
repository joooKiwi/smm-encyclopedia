import {Link} from 'react-router-dom'

import Tooltip              from 'bootstrap/tooltip/Tooltip'
import {TooltipInstance}    from 'bootstrap/tooltip/TooltipInstance'
import {contentTranslation} from 'lang/components/translationMethods'
import {route}              from 'routes/route'

const HOME_ID = 'home-link'

/**
 * @reactComponent
 */
export default function HomeButton() {
    return <Tooltip option={({title: contentTranslation('Home'), placement: 'left',})} elementId={HOME_ID}>
        <Link key="navigation button" id={HOME_ID} className="btn btn-lg bi-house" to={route('home')}
              onClick={() => TooltipInstance.getInstance(HOME_ID).instance.hide()}/>
    </Tooltip>
}
