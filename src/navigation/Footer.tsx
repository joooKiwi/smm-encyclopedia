import './Footer.scss'

import type {ModalProperties} from './ModalContainers.types'
import type {ReactProperties} from '../util/react/ReactProperties'

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent'
import GithubButton                from './button/Github.button'
import LanguageChangerButton       from './button/LanguageChanger.button'
import SimpleDate                  from '../lang/date/SimpleDate'

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
                    <ContentTranslationComponent translationKey="Copyright"/><sup>©</sup> Nintendo™
                </span>
                <span id="copyright_madeBy" className="text-center text-light small">
                    <ContentTranslationComponent translationKey="React application made by"/>: JóôòKiwi & Geitje
                </span>
                <span id="copyright_lastEdited" className="text-center text-light small">
                    <ContentTranslationComponent translationKey="Last update"/>: <SimpleDate day={11} month={10} year={2022}/>
                </span>
            </div>
        </div>
    </footer>
}
