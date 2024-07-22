import {useRef} from 'react'

import Tooltip              from 'bootstrap/tooltip/Tooltip'
import {contentTranslation} from 'lang/components/translationMethods'

export default function DiscordButton() {
    const htmlElement = useRef<HTMLAnchorElement>(null,)

    return <Tooltip option={{title: contentTranslation('Join the Discord server',), placement: 'top',}} reference={htmlElement}>
        <a ref={htmlElement} type="button" id="discord-button" href="https://discord.gg/kEnbJ9GDtZ" className="btn btn-lg btn-outline-light rounded-pill bi bi-discord">
            <span className="d-none d-sm-inline">{contentTranslation('Discord server',)}</span>
        </a>
    </Tooltip>
}
