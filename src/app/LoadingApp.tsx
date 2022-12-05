import AbstractApp          from 'app/AbstractApp'
import TextComponent        from 'app/tools/text/TextComponent'
import {contentTranslation} from 'lang/components/translationMethods'

export default class LoadingApp
    extends AbstractApp {

    protected override _mainContent() {
        return <TextComponent key="Loading text content" content={<>{contentTranslation('Loading the page')}…</>}/>
    }

}
