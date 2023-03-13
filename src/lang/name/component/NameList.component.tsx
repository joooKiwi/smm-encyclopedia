import './NameList.component.scss'

import type {NameListProperties} from 'lang/name/component/Name.properties'

import TextComponent         from 'app/tools/text/TextComponent'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'

/**
 * @reactComponent
 */
export default function NameListComponent({id, listId, name, doesDisplayPopover,}: NameListProperties,) {
    const languagesToDisplay = name.originalLanguages.filter(it => !it.isCurrentLanguage)

    return <div key={`${id} - list container`} id={listId} className={`language-list ${doesDisplayPopover ? '' : 'visually-hidden'}`}>{
        [...name.toNameMap()].filter(([language,]) => languagesToDisplay.includes(language)).map(([language, value,]) =>
            <div key={`${id} - single language container (${language.englishName}`} className="singleLanguage-container">
                <TextComponent
                    content={`${languageTranslation(language.englishName)}${ProjectLanguages.currentLanguage.space}${ProjectLanguages.currentLanguage.unionTrait}${ProjectLanguages.currentLanguage.space}`}
                    className="language-text col small text-primary text-opacity-50 text-end space-pre"/>
                <TextComponent content={value} className="languageValue-text col text-start"/>
            </div>
        )}</div>
}
