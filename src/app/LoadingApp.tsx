import TextComponent        from 'app/tools/text/TextComponent'
import {contentTranslation} from 'lang/components/translationMethods'
import {SUSPENSION_POINT}   from 'util/commonVariables'

/** @reactComponent */
export default function LoadingApp() {
    return <TextComponent key="Loading text content" content={<>{contentTranslation('Loading the page',)}{SUSPENSION_POINT}</>}/>
}
