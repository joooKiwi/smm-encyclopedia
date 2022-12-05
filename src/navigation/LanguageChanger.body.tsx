import './LanguageChanger.body.scss'

import {Fragment, useState} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {ModalInstance}     from 'bootstrap/modal/ModalInstance'
import {TooltipInstance}   from 'bootstrap/tooltip/TooltipInstance'
import {EveryLanguages}    from 'lang/EveryLanguages'
import {ProjectLanguages}  from 'lang/ProjectLanguages'
import LanguageChangerLink from 'navigation/LanguageChanger.link'
import {StringContainer}   from 'util/StringContainer'

interface LanguageChangerBodyProperties
    extends ReactProperties {

    containerId: string

    divContainerId: string

}

/**
 * @reactComponent
 */
export default function LanguageChangerBody({containerId, divContainerId,}: LanguageChangerBodyProperties,) {
    const [, setCurrentLanguage,] = useState(ProjectLanguages.currentLanguage)

    const everyLanguagesShown: EveryLanguages[] = []

    return <div key="language changer (body)" id="languageChanger-body" className="container">{
        ProjectLanguages.values
            .map(language => {
                    const key = `languageChanger-content-${StringContainer.getInHtml(language.englishName)}`
                    if (everyLanguagesShown.includes(language.language.parent!))
                        return <Fragment key={key}/>

                    everyLanguagesShown.push(language.language.parent ?? language.language)
                    return <LanguageChangerLink key={key} language={language} callbackToSetLanguage={language => {
                        setCurrentLanguage(ProjectLanguages.currentLanguage = language)
                        ModalInstance.getInstance(containerId).instance.hide()
                        TooltipInstance.getInstance(divContainerId).instance.hide()
                    }}/>
                }
            )
    }</div>
}
