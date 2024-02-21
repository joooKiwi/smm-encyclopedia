import Tooltip              from 'bootstrap/tooltip/Tooltip'
import {contentTranslation} from 'lang/components/translationMethods'

const ID = 'discord-button'
export default function DiscordButton() {
    return <Tooltip option={{title: contentTranslation('Join the Discord server',), placement: 'top',}} elementId={ID}>
        <a id={ID} href="https://discord.gg/kEnbJ9GDtZ" className="btn btn-lg btn-outline-light rounded-pill bi bi-discord">
            <span className="d-none d-sm-inline">{contentTranslation('Discord server',)}</span>
        </a>
    </Tooltip>
}
