import Table, {SimpleTableComponent} from './Table';
import {TFunction, withTranslation}  from 'react-i18next';

interface Translations {
    language?: boolean
    gameContent?: boolean
    content?: boolean
}

interface TranslationObject {
    language?: TFunction<'language'>
    gameContent: TFunction<'gameContent'>
    content?: TFunction<'content'>
}

//TODO add a definition method for this react component.
export default function TableWithTranslations(props: { translations: Translations, renderCallback: (translations: TranslationObject) => SimpleTableComponent }): JSX.Element {
    let translation = {} as TranslationObject;
    if (props.translations.language) translation.language = withTranslation('language');
    if (props.translations.gameContent) translation.gameContent = withTranslation('gameContent');
    if (props.translations.content) translation.content = withTranslation('content');

    const tableComponent = props.renderCallback(translation);

    return <Table id={tableComponent.id} caption={tableComponent.caption} headers={tableComponent.headers} content={tableComponent.content}/>;
}