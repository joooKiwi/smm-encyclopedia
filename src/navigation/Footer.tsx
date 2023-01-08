import './Footer.scss'

import type {ModalProperties} from 'navigation/ModalContainers.types'
import type {ReactProperties} from 'util/react/ReactProperties'

import {contentTranslation}  from 'lang/components/translationMethods'
import SimpleDate            from 'lang/date/SimpleDate'
import DiscordButton         from 'navigation/button/Discord.button'
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
            <div id="helper-container" className="row justify-content-around justify-content-sm-center gy-2 gy-sm-0 pb-2">
                <div id="github-button-container" className="col-auto"><GithubButton/></div>
                <div id="discord-button-container" className="col-auto"><DiscordButton/></div>
                <div id="languageChanger-button-container" className="col-auto col-sm-12"><LanguageChangerButton {...languageChanger}/></div>
            </div>
            <div className="row">
                <span id="copyright" className="text-center text-light small">
                    {contentTranslation('Copyright')}<sup>©</sup> Nintendo™
                </span>
                <span id="copyright_madeBy" className="text-center text-light small">
                    {contentTranslation('React application made by')}: JóôòKiwi & Geitje
                </span>
                <span id="copyright_lastEdited" className="text-center text-light small">
                    {contentTranslation('Last update')}: <SimpleDate day={8} month={1} year={2023}/>
                </span>
            </div>
        </div>
    </footer>
}
