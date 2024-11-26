import {useRef} from 'react'
import {Link}   from 'react-router-dom'

import Tooltip                    from 'bootstrap/tooltip/Tooltip'
import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {contentTranslation}       from 'lang/components/translationMethods'
import {routeFromName}            from 'route/method/route.fromName'

const ID = 'home-link'

/** @reactComponent */
export default function HomeButton() {
    const htmlElement = useRef<HTMLAnchorElement>(null,)

    return <Tooltip option={({title: contentTranslation('Home',), placement: 'left',})} reference={htmlElement}>
        <Link ref={htmlElement} type="button" id={ID} className="btn btn-lg bi-house" to={routeFromName('home',)}
              onClick={() => BootstrapInstanceHandler.get.getTooltipInstanceOrNull(ID,)?.instance.hide()}/>
    </Tooltip>
}
