import './LanguageChanger.body.scss'

import {Fragment, useState} from 'react'

import {ModalInstance}             from 'bootstrap/modal/ModalInstance'
import {EveryLanguages}            from 'lang/EveryLanguages'
import {ProjectLanguages}          from 'lang/ProjectLanguages'
import LanguageChangerLink         from 'navigation/LanguageChanger.link'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'
import {StringContainer}           from 'util/StringContainer'

/**
 * @reactComponent
 */
export default function LanguageChangerBody() {
    const [, setCurrentLanguage,] = useState(ProjectLanguages.current)

    const everyLanguagesShown: EveryLanguages[] = []

    return <div key="language changer (body)" id="languageChanger-body" className="container">{
        ProjectLanguages.values
            .map(language => {
                    const key = `languageChanger-content-${StringContainer.getInHtml(language.englishName)}`
                    if (everyLanguagesShown.includes(language.language.parent!))
                        return <Fragment key={key}/>

                    everyLanguagesShown.push(language.language.parent ?? language.language)
                    return <LanguageChangerLink key={key} language={language} callbackToSetLanguage={language => {
                        setCurrentLanguage(ProjectLanguages.current = language)
                        ModalInstance.getInstance(LANGUAGE_CHANGER_MODAL_ID).instance.hide()
                    }}/>
                }
            )
    }</div>
}
