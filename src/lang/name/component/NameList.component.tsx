import './NameList.component.scss'

import type {MutableArray} from '@joookiwi/type'

import type {NameListProperties} from 'lang/name/component/Name.properties'

import TextComponent         from 'app/tools/text/TextComponent'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'
import {forEach}             from 'util/utilitiesMethods'
import {ArrayAsCollection}   from 'util/collection/ArrayAsCollection'

import Companion = ProjectLanguages.Companion

/** @reactComponent */
export default function NameListComponent({id, listId, name, doesDisplayPopover,}: NameListProperties,) {
    const languagesToDisplay = new ArrayAsCollection(name.originalLanguages,).filterNot(it => it.isCurrent,)
    const content: MutableArray<NonNullReactElement> = []
    const currentLanguage = Companion.current
    forEach(name.toNameMap(), (language, value,) => {
        if (languagesToDisplay.has(language,))
            content.push(<div key={`${id} - single language container (${language.englishName}`} className="singleLanguage-container">
                <TextComponent
                    content={`${languageTranslation(language.englishName)}${currentLanguage.space}${currentLanguage.unionTrait}${currentLanguage.space}`}
                    className="language-text col small text-primary text-opacity-50 text-end space-pre"/>
                <TextComponent content={value} className="languageValue-text col text-start"/>
            </div>,)
    },)
    return <div key={`${id} - list container`} id={listId} className="language-list" hidden={!doesDisplayPopover}>{content}</div>
}
