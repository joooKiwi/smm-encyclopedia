import type {NameListProperties} from './Name.properties';

import LanguageTranslationComponent from '../../components/LanguageTranslationComponent';
import {ProjectLanguages}           from '../../ProjectLanguages';
import TextComponent                from '../../../app/tools/text/TextComponent';

/**
 * @reactComponent
 */
export default function NameListComponent({id, listId, name, doesDisplayPopover,}: NameListProperties,) {
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage);

    return <ul key={`${id} - list`} id={listId} className={`language-list ${doesDisplayPopover ? '' : 'visually-hidden'}`}>{
        [...name.toNameMap().entries()].filter(([language,],) => languagesToDisplay.includes(language))
            .map(([language, value,],) => {
                const languageKey = `${ProjectLanguages.currentLanguage.englishName} - ${language.englishName}`;

                return <LanguageTranslationComponent key={`${id} - language translation component (${languageKey})`}>{translation =>
                    <li key={`${id} - list element (${languageKey})`} style={({'--language': `'${translation(language.englishName)} ${language.unionTrait} '`,})}>
                        <TextComponent content={value}/>
                    </li>
                }</LanguageTranslationComponent>;
            })
    }</ul>;
}
