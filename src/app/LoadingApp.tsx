import AbstractApp          from './AbstractApp'
import {contentTranslation} from '../lang/components/translationMethods'
import TextComponent        from './tools/text/TextComponent'

export default class LoadingApp
    extends AbstractApp {

    protected override _mainContent() {
        return <TextComponent key="Loading text content" content={<>{contentTranslation('Loading the page')}…</>}/>
    }

}
