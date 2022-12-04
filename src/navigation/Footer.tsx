import './Footer.scss'

import type {ModalProperties} from 'navigation/ModalContainers.types'
import type {ReactProperties} from 'util/react/ReactProperties'

import {contentTranslation}  from 'lang/components/translationMethods'
import SimpleDate            from 'lang/date/SimpleDate'
import GithubButton          from 'navigation/button/Github.button'
import LanguageChangerButton from 'navigation/button/LanguageChanger.button'

interface FooterProperties
    extends ReactProperties {

    languageChanger: ModalProperties

}

/**
 * @reactComponent
 */
export default function Footer({languageChanger,}: FooterProperties,) {
    return <footer id="footer-container" className="bg-dark bg-gradient">
        <div className="container">
            <div id="helper-container" className="row">
                <GithubButton/>
                <LanguageChangerButton {...languageChanger}/>
            </div>
            <div className="row">
                <span id="copyright" className="text-center text-light small">
                    {contentTranslation('Copyright')}<sup>©</sup> Nintendo™
                </span>
                <span id="copyright_madeBy" className="text-center text-light small">
                    {contentTranslation('React application made by')}: JóôòKiwi & Geitje
                </span>
                <span id="copyright_lastEdited" className="text-center text-light small">
                    {contentTranslation('Last update')}: <SimpleDate day={27} month={11} year={2022}/>
                </span>
            </div>
        </div>
    </footer>
}
