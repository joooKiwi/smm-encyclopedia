import TextComponent    from 'app/tools/text/TextComponent'
import {unfinishedText} from 'app/tools/text/UnfinishedText'

/** @reactComponent */
export default function LoadingStatus() {
    return <div role="status" className="spinner-border spinner-border-sm text-primary">
        <TextComponent content={unfinishedText('Loading',)} className="visually-hidden"/>
    </div>
}
