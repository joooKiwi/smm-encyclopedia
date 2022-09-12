import AbstractApp                 from './AbstractApp';
import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import TextComponent               from './tools/text/TextComponent';

export default class LoadingApp
    extends AbstractApp {

    protected override _mainContent() {
        return <TextComponent key="Loading text content" content={<><ContentTranslationComponent translationKey="Loading the page"/>…</>}/>;
    }

}
