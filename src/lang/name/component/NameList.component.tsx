import './NameList.component.scss'

import type {NameListProperties} from 'lang/name/component/Name.properties'

import TextComponent         from 'app/tools/text/TextComponent'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'

/**
 * @reactComponent
 */
export default function NameListComponent({id, listId, name, doesDisplayPopover,}: NameListProperties,) {
    const languagesToDisplay = name.originalLanguages.filter(it => !it.isCurrent)

    const content = [] as ReactElement[]
    const nameMap = name.toNameMap()
    for (const [language, value,] of nameMap) {
        if (!languagesToDisplay.includes(language,))
            continue
        content.push(<div key={`${id} - single language container (${language.englishName}`} className="singleLanguage-container">
            <TextComponent
                content={`${languageTranslation(language.englishName)}${ProjectLanguages.current.space}${ProjectLanguages.current.unionTrait}${ProjectLanguages.current.space}`}
                className="language-text col small text-primary text-opacity-50 text-end space-pre"/>
            <TextComponent content={value} className="languageValue-text col text-start"/>
        </div>,)
    }
    return <div key={`${id} - list container`} id={listId} className="language-list" hidden={!doesDisplayPopover}>{content}</div>
}
