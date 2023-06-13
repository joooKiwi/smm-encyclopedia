import AbstractApp          from 'app/AbstractApp'
import TextComponent        from 'app/tools/text/TextComponent'
import {contentTranslation} from 'lang/components/translationMethods'
import {SUSPENSION_POINT}   from 'util/commonVariables'

export default class LoadingApp
    extends AbstractApp {

    protected override _mainContent() {
        return <TextComponent key="Loading text content" content={<>{contentTranslation('Loading the page')}{SUSPENSION_POINT}</>}/>
    }

}
