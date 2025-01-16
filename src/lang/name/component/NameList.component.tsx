import type {MutableArray} from '@joookiwi/type'

import type {Name}            from 'lang/name/Name'
import type {ReactProperties} from 'util/react/ReactProperties'

import TextComponent         from 'app/tools/text/TextComponent'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'
import {forEach}             from 'util/utilitiesMethods'
import {ArrayAsCollection}   from 'util/collection/ArrayAsCollection'

import Companion = ProjectLanguages.Companion

interface NameListProperties
    extends ReactProperties {

    /** The container ID */
    readonly id: string

    /** The class having a {@link Name} to retrieve its languages values */
    readonly name: Name<string>

    /** The popover is displayed */
    readonly doesDisplayPopover: boolean

}

/** @reactComponent */
export default function NameListComponent({id, name, doesDisplayPopover,}: NameListProperties,) {
    const languagesToDisplay = new ArrayAsCollection(name.originalLanguages,).filterNot(it => it.isCurrent,)
    const content: MutableArray<NonNullReactElement> = []
    const currentLanguage = Companion.current
    forEach(name.toNameMap(), (language, value,) => {
        if (languagesToDisplay.has(language,))
            content.push(<div key={`Single language container (${language.englishName}`} className="d-flex justify-content-between">
                <small className="text-primary text-opacity-50 space-pre">{languageTranslation(language.englishName)}{currentLanguage.space}{currentLanguage.unionTrait}{currentLanguage.space}</small>
                <TextComponent content={value}/>
            </div>,)
    },)
    return <div id={id} hidden={!doesDisplayPopover}>{content}</div>
}
