import type {NameListProperties} from './Name.properties'

import {languageTranslation} from '../../components/translationMethods'
import {ProjectLanguages}    from '../../ProjectLanguages'
import TextComponent         from '../../../app/tools/text/TextComponent'

/**
 * @reactComponent
 */
export default function NameListComponent({id, listId, name, doesDisplayPopover,}: NameListProperties,) {
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage)

    return <ul key={`${id} - list`} id={listId} className={`language-list ${doesDisplayPopover ? '' : 'visually-hidden'}`}>{
        [...name.toNameMap().entries()].filter(([language,],) => languagesToDisplay.includes(language))
            .map(([language, value,],) => {
                const languageKey = `${ProjectLanguages.currentLanguage.englishName} - ${language.englishName}`

                return <li key={`${id} - list element (${languageKey})`} style={({'--language': `'${languageTranslation(language.englishName)} ${language.unionTrait} '`,})}>
                    <TextComponent key={`${id} - text component (${languageKey})`} content={value}/>
                </li>
            })
    }</ul>
}
